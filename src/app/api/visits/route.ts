import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

// مفاتيح العداد السحابي المركزي المشترك بين جميع الأجهزة والمتصفحات في العالم (بدون حاجة لأي إعدادات)
const CLOUD_KEY_TOTAL = 'freetissuecamp_visits_total';
const CLOUD_KEY_UNIQUE = 'freetissuecamp_visitors_unique';
const CLOUD_API_BASE = 'https://countapi.mileshilliard.com/api/v1';

async function fetchWithTimeout(url: string, timeoutMs = 4000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'FreeTissueCamp-Counter/1.0' },
      cache: 'no-store',
    });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

async function getCloudCount(key: string): Promise<number> {
  try {
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/get/${key}`);
    if (!res.ok) return 0;
    const data = await res.json();
    return Number(data?.value) || 0;
  } catch {
    return 0;
  }
}

async function hitCloudCount(key: string): Promise<number> {
  try {
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/hit/${key}`);
    if (!res.ok) return 1;
    const data = await res.json();
    return Number(data?.value) || 1;
  } catch {
    return 1;
  }
}

let fallbackStats = {
  totalVisits: 0,
  uniqueVisits: 0,
  lastUpdated: new Date().toISOString(),
};

/**
 * GET /api/visits
 * جلب إحصائيات العداد الحالية من السحابة المركزية
 */
export async function GET() {
  // 1. إذا كانت Supabase مهيأة، نستخدمها أولاً
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('site_stats')
        .select('total_visits, unique_visits, last_visited_at')
        .eq('id', 'global')
        .maybeSingle();

      if (!error && data) {
        return NextResponse.json({
          success: true,
          totalVisits: Number(data.total_visits),
          uniqueVisits: Number(data.unique_visits),
          lastVisitedAt: data.last_visited_at,
          source: 'supabase',
        });
      }
    } catch (err) {
      console.warn('[Visits API] Supabase query failed, falling back:', err);
    }
  }

  // 2. استخدام السحابة المركزية المشتركة (Cloud Counter)
  try {
    const [total, unique] = await Promise.all([
      getCloudCount(CLOUD_KEY_TOTAL),
      getCloudCount(CLOUD_KEY_UNIQUE),
    ]);

    return NextResponse.json({
      success: true,
      totalVisits: total,
      uniqueVisits: unique,
      lastVisitedAt: new Date().toISOString(),
      source: 'cloud-counter',
    });
  } catch (err) {
    console.warn('[Visits API] Cloud query failed, using in-memory fallback:', err);
  }

  return NextResponse.json({
    success: true,
    totalVisits: fallbackStats.totalVisits,
    uniqueVisits: fallbackStats.uniqueVisits,
    lastVisitedAt: fallbackStats.lastUpdated,
    source: 'fallback',
  });
}

/**
 * POST /api/visits
 * تسجيل زيارة جديدة وزيادة العداد في السحابة المركزية
 */
export async function POST(req: NextRequest) {
  let isUnique = false;
  try {
    const body = await req.json();
    isUnique = Boolean(body?.isUnique);
  } catch {
    // Body empty or invalid JSON
  }

  // 1. محاولة استخدام Supabase إذا كانت مفعلة
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.rpc('increment_site_visits', {
        is_unique: isUnique,
      });

      if (!error && data) {
        const result = Array.isArray(data) ? data[0] : data;
        if (result) {
          return NextResponse.json({
            success: true,
            totalVisits: Number(result.total_visits),
            uniqueVisits: Number(result.unique_visits),
            lastVisitedAt: result.last_visited_at,
            source: 'supabase',
          });
        }
      }
    } catch (err) {
      console.warn('[Visits API] Supabase update failed:', err);
    }
  }

  // 2. استخدام السحابة المركزية لحفظ الزيارة دائمياً ومشاركتها بين كل الأجهزة
  try {
    const totalPromise = hitCloudCount(CLOUD_KEY_TOTAL);
    const uniquePromise = isUnique
      ? hitCloudCount(CLOUD_KEY_UNIQUE)
      : getCloudCount(CLOUD_KEY_UNIQUE);

    const [totalVisits, uniqueVisits] = await Promise.all([totalPromise, uniquePromise]);

    return NextResponse.json({
      success: true,
      totalVisits,
      uniqueVisits,
      lastVisitedAt: new Date().toISOString(),
      source: 'cloud-counter',
    });
  } catch (err) {
    console.warn('[Visits API] Cloud counter increment failed, updating in-memory:', err);
  }

  // في حالة حدوث أي طارئ في الشبكة، نلجأ للذاكرة المؤقتة
  fallbackStats.totalVisits += 1;
  if (isUnique) {
    fallbackStats.uniqueVisits += 1;
  }
  fallbackStats.lastUpdated = new Date().toISOString();

  return NextResponse.json({
    success: true,
    totalVisits: fallbackStats.totalVisits,
    uniqueVisits: fallbackStats.uniqueVisits,
    lastVisitedAt: fallbackStats.lastUpdated,
    source: 'fallback',
  });
}

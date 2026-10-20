import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

// ذاكرة تخزين مؤقتة (Fallback State) تعمل تلقائياً إذا لم تكن قاعدة بيانات Supabase مهيأة بعد
let fallbackStats = {
  totalVisits: 1485,
  uniqueVisits: 620,
  lastUpdated: new Date().toISOString(),
};

/**
 * GET /api/visits
 * جلب إحصائيات العداد الحالية
 */
export async function GET() {
  try {
    if (isSupabaseConfigured()) {
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
    }
  } catch (err) {
    console.warn('[Visits API] Supabase query failed, falling back to local memory:', err);
  }

  // في حالة عدم توفر Supabase أو عدم تشغيل السكربت بعد، نعيد البيانات الافتراضية
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
 * تسجيل زيارة جديدة وزيادة العداد
 * Body: { isUnique?: boolean }
 */
export async function POST(req: NextRequest) {
  try {
    let isUnique = false;
    try {
      const body = await req.json();
      isUnique = Boolean(body?.isUnique);
    } catch {
      // Body empty or invalid JSON
    }

    if (isSupabaseConfigured()) {
      // 1. محاولة استدعاء الدالة المخصصة (RPC) لضمان عدم حدوث تضارب Concurrency
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

      // 2. إذا لم تكن دالة RPC منشأة بعد، نحاول التحديث المباشر للجدول
      const { data: currentRecord } = await supabase
        .from('site_stats')
        .select('total_visits, unique_visits')
        .eq('id', 'global')
        .maybeSingle();

      if (currentRecord) {
        const newTotal = Number(currentRecord.total_visits || 0) + 1;
        const newUnique = isUnique
          ? Number(currentRecord.unique_visits || 0) + 1
          : Number(currentRecord.unique_visits || 0);

        const { data: updated, error: updateError } = await supabase
          .from('site_stats')
          .update({
            total_visits: newTotal,
            unique_visits: newUnique,
            last_visited_at: new Date().toISOString(),
          })
          .eq('id', 'global')
          .select('total_visits, unique_visits, last_visited_at')
          .single();

        if (!updateError && updated) {
          return NextResponse.json({
            success: true,
            totalVisits: Number(updated.total_visits),
            uniqueVisits: Number(updated.unique_visits),
            lastVisitedAt: updated.last_visited_at,
            source: 'supabase-table',
          });
        }
      }
    }
  } catch (err) {
    console.warn('[Visits API] Supabase update failed, updating local fallback:', err);
  }

  // تحديث العداد في وضع Fallback التجريبي
  fallbackStats.totalVisits += 1;
  try {
    const body = await req.clone().json();
    if (body?.isUnique) fallbackStats.uniqueVisits += 1;
  } catch {
    // ignore
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

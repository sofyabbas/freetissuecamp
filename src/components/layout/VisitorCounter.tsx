'use client';

import React, { useEffect, useState } from 'react';
import { Eye, Users, Activity, Sparkles } from 'lucide-react';

interface VisitData {
  totalVisits: number;
  uniqueVisits: number;
  lastVisitedAt?: string;
  source?: string;
}

export function VisitorCounter() {
  const [stats, setStats] = useState<VisitData>({
    totalVisits: 1485,
    uniqueVisits: 620,
  });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function recordOrFetchVisit() {
      try {
        if (typeof window === 'undefined') return;

        // التحقق من هوية الزائر الفريد
        let isUniqueVisitor = false;
        const storedVisitorId = localStorage.getItem('ftc_visitor_id');
        if (!storedVisitorId) {
          isUniqueVisitor = true;
          const newId = 'v_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
          localStorage.setItem('ftc_visitor_id', newId);
        }

        // فحص ما إذا كانت الزيارة سُجلت بالفعل في جلسة المتصفح الحالية
        const sessionCounted = sessionStorage.getItem('ftc_session_counted');

        let res: Response;
        if (!sessionCounted) {
          // تسجيل زيارة جديدة
          res = await fetch('/api/visits', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isUnique: isUniqueVisitor }),
          });
          sessionStorage.setItem('ftc_session_counted', 'true');
        } else {
          // جلب الإحصائيات الحالية فقط دون تكرار الحساب في نفس الجلسة
          res = await fetch('/api/visits', { method: 'GET' });
        }

        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success) {
            setStats({
              totalVisits: Number(data.totalVisits) || 1485,
              uniqueVisits: Number(data.uniqueVisits) || 620,
              lastVisitedAt: data.lastVisitedAt,
              source: data.source,
            });
          }
        }
      } catch (err) {
        console.warn('Could not record or fetch visit count:', err);
      } finally {
        if (isMounted) setHasLoaded(true);
      }
    }

    recordOrFetchVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-950 to-charcoal-900 border-2 border-primary-500/30 p-5 sm:p-6 shadow-2xl shadow-primary-950/40">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        
        {/* Header & Status */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary-900/60 border border-primary-500/40 text-primary-400 shadow-inner">
            <Activity className="w-6 h-6 animate-pulse text-emerald-400" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-sm shadow-emerald-400"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white tracking-wide">
                إحصائيات وزيارات المنصة
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                مباشر الآن
              </span>
            </div>
            <p className="text-xs text-charcoal-300 mt-1">
              تفاعل المهندسين والطلاب مع محتوى صناعة ورق المناديل والتشيو
            </p>
          </div>
        </div>

        {/* Counters Badges */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Total Visits */}
          <div className="flex items-center gap-3 bg-charcoal-900 border border-charcoal-700/80 hover:border-primary-500/50 transition-colors px-4 py-2.5 rounded-xl shadow-md">
            <div className="p-2 rounded-lg bg-primary-950 border border-primary-500/30 text-primary-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-charcoal-300 font-medium">إجمالي الزيارات</div>
              <div className="text-base sm:text-lg font-black text-white tracking-wider font-mono">
                {stats.totalVisits.toLocaleString('en-US')}
              </div>
            </div>
          </div>

          {/* Unique Visitors */}
          <div className="flex items-center gap-3 bg-charcoal-900 border border-charcoal-700/80 hover:border-amber-500/50 transition-colors px-4 py-2.5 rounded-xl shadow-md">
            <div className="p-2 rounded-lg bg-amber-950/90 border border-amber-500/40 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-charcoal-300 font-medium">الزوار المستقلون</div>
              <div className="text-base sm:text-lg font-black text-amber-300 tracking-wider font-mono">
                {stats.uniqueVisits.toLocaleString('en-US')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

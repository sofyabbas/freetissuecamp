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
  const [isLoading, setIsLoading] = useState(true);

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
              totalVisits: data.totalVisits,
              uniqueVisits: data.uniqueVisits,
              lastVisitedAt: data.lastVisitedAt,
              source: data.source,
            });
          }
        }
      } catch (err) {
        console.warn('Could not record or fetch visit count:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    recordOrFetchVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-charcoal-950/70 border border-charcoal-800/90 rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Header & Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary-950/80 border border-primary-800/50 text-primary-400">
            <Activity className="w-5 h-5 animate-pulse text-primary-400" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white tracking-wide">
                إحصائيات وزيارات المنصة
              </h4>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                مباشر
              </span>
            </div>
            <p className="text-xs text-charcoal-400 mt-0.5">
              تفاعل المهندسين والطلاب مع محتوى تصنيع التيشيو
            </p>
          </div>
        </div>

        {/* Counters Badges */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Total Visits */}
          <div className="flex items-center gap-2.5 bg-charcoal-900/90 border border-charcoal-800 px-3.5 py-2 rounded-xl">
            <div className="p-1.5 rounded-lg bg-primary-950/80 text-primary-400 border border-primary-900/40">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-charcoal-400 font-medium">إجمالي الزيارات</div>
              <div className="text-sm sm:text-base font-extrabold text-white tracking-wider font-mono">
                {isLoading ? (
                  <span className="inline-block w-12 h-4 bg-charcoal-800 animate-pulse rounded"></span>
                ) : (
                  stats.totalVisits.toLocaleString('ar-EG')
                )}
              </div>
            </div>
          </div>

          {/* Unique Visitors */}
          <div className="flex items-center gap-2.5 bg-charcoal-900/90 border border-charcoal-800 px-3.5 py-2 rounded-xl">
            <div className="p-1.5 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-900/40">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-charcoal-400 font-medium">الزوار المستقلون</div>
              <div className="text-sm sm:text-base font-extrabold text-amber-300 tracking-wider font-mono">
                {isLoading ? (
                  <span className="inline-block w-12 h-4 bg-charcoal-800 animate-pulse rounded"></span>
                ) : (
                  stats.uniqueVisits.toLocaleString('ar-EG')
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

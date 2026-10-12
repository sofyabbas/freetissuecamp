'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { courses, learningPaths, projects } from '@/lib/data/seed-data';
import { useAuth } from '@/lib/auth-context';
import {
  ShieldAlert,
  Users,
  BookOpen,
  Award,
  CheckCircle2,
  TrendingUp,
  Settings,
  Download,
  Search,
  Filter,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function AdminPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'learners' | 'logs'>('overview');
  const [courseSearch, setCourseSearch] = useState('');

  const totalLessons = courses.reduce((acc, c) => acc + c.total_lessons, 0);

  const mockLogs = [
    { id: '1', action: 'إصدار شهادة إتمام', user: 'أحمد محمود', course: 'مبادئ وتاريخ صناعة الورق', date: 'منذ 10 دقائق' },
    { id: '2', action: 'اجتياز اختبار معملي', user: 'سارة خالد', course: 'إعادة تدوير الورق والكرتون', date: 'منذ 35 دقيقة' },
    { id: '3', action: 'تسجيل جديد في دورة', user: 'محمد علي', course: 'هندسة ماكينات الورق الصناعية', date: 'منذ ساعة' },
    { id: '4', action: 'تسليم مشروع تطبيقي', user: 'نور الدين', course: 'صناعة إطار الغربال اليدوي', date: 'منذ ساعتين' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            بوابة الإدارة والأكاديميين
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
            لوحة القيادة الإدارية والتحليلات
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
            متابعة إحصائيات المنصة، معدلات إكمال الطلاب، وإدارة المناهج والشهادات
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('تم تصدير تقرير الأداء الأكاديمي (CSV) بنجاح!')}
            className="btn-secondary py-2.5 px-4 text-xs font-bold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تصدير التقارير</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-500">
            <span>إجمالي المتعلمين</span>
            <Users className="w-4 h-4 text-primary-600" />
          </div>
          <p className="text-3xl font-black text-charcoal-900">1,480</p>
          <span className="text-[11px] text-emerald-600 font-bold">↑ +14% هذا الشهر</span>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-500">
            <span>الدروس المنجزة</span>
            <CheckCircle2 className="w-4 h-4 text-primary-600" />
          </div>
          <p className="text-3xl font-black text-charcoal-900">12,650</p>
          <span className="text-[11px] text-emerald-600 font-bold">↑ +22% تفاعل</span>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-500">
            <span>الشهادات الصادرة</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-black text-amber-700">624</p>
          <span className="text-[11px] text-charcoal-500 font-medium">معدل اجتياز 84%</span>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-500">
            <span>المقررات والمشاريع</span>
            <Layers className="w-4 h-4 text-kraft-700" />
          </div>
          <p className="text-3xl font-black text-charcoal-900">{courses.length + projects.length}</p>
          <span className="text-[11px] text-charcoal-500 font-medium">{totalLessons} درساً تفاعلياً</span>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="border-b border-charcoal-200 flex items-center gap-6 text-sm font-bold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 border-b-2 transition-all ${
            activeTab === 'overview'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          نظرة عامة والنشاط
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`pb-3 border-b-2 transition-all ${
            activeTab === 'courses'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          إدارة المقررات التعليمية ({courses.length})
        </button>
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Activity Table */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              أحدث أنشطة المتعلمين
            </h3>
            <div className="divide-y divide-charcoal-100">
              {mockLogs.map((log) => (
                <div key={log.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-charcoal-900">{log.user}</span>
                    <span className="text-charcoal-500 mx-2">•</span>
                    <span className="text-primary-800 font-medium">{log.action}</span>
                    <p className="text-[11px] text-charcoal-400 mt-0.5">{log.course}</p>
                  </div>
                  <span className="text-charcoal-400 text-[11px] whitespace-nowrap">{log.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="lg:col-span-4 bg-paper-50 rounded-3xl p-6 border border-charcoal-200/80 space-y-4">
            <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <Settings className="w-5 h-5 text-kraft-700" />
              إجراءات سريعة
            </h3>
            <div className="space-y-2">
              <Link
                href="/courses"
                className="w-full p-3 rounded-xl bg-white border border-charcoal-200 text-xs font-bold text-charcoal-800 hover:border-primary-500 flex items-center justify-between transition-colors"
              >
                <span>معاينة فهرس الدورات كطالب</span>
                <span>←</span>
              </Link>
              <Link
                href="/certificates"
                className="w-full p-3 rounded-xl bg-white border border-charcoal-200 text-xs font-bold text-charcoal-800 hover:border-primary-500 flex items-center justify-between transition-colors"
              >
                <span>فحص صلاحية الشهادات</span>
                <span>←</span>
              </Link>
              <Link
                href="/projects"
                className="w-full p-3 rounded-xl bg-white border border-charcoal-200 text-xs font-bold text-charcoal-800 hover:border-primary-500 flex items-center justify-between transition-colors"
              >
                <span>مراجعة تقارير المشاريع</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Courses Management */}
      {activeTab === 'courses' && (
        <div className="bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base font-bold text-charcoal-900">
              قائمة الدورات المعتمدة على المنصة
            </h3>
            <input
              type="text"
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              placeholder="تصفية حسب اسم الدورة..."
              className="input text-xs py-2 w-64"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-paper-100 text-charcoal-600 font-bold border-b border-charcoal-200">
                <tr>
                  <th className="p-3">اسم الدورة</th>
                  <th className="p-3">المستوى</th>
                  <th className="p-3">الدروس</th>
                  <th className="p-3">المدة التقديرية</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3 text-left">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                {courses
                  .filter((c) => c.title.includes(courseSearch))
                  .map((c) => (
                    <tr key={c.id} className="hover:bg-paper-50/50">
                      <td className="p-3 font-bold text-charcoal-900">{c.title}</td>
                      <td className="p-3">
                        <span className="bg-paper-100 text-charcoal-700 px-2 py-0.5 rounded font-medium">
                          {c.difficulty}
                        </span>
                      </td>
                      <td className="p-3 font-semibold">{c.total_lessons} درساً</td>
                      <td className="p-3 text-charcoal-500">{c.estimated_hours} ساعات</td>
                      <td className="p-3">
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                          منشور 🟢
                        </span>
                      </td>
                      <td className="p-3 text-left">
                        <Link
                          href={`/courses/${c.id}`}
                          className="text-primary-700 hover:underline font-bold"
                        >
                          عرض
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}

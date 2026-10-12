'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useProgress } from '@/lib/progress-context';
import { courses, getCourseById, getLessonById } from '@/lib/data/seed-data';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  LayoutDashboard,
  Flame,
  Award,
  BookOpen,
  Clock,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Bookmark,
  FileEdit,
  Trash2,
  PlayCircle,
  ExternalLink,
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const {
    enrollments,
    getLearningStreak,
    getTotalCompletedLessons,
    getTotalCompletedCourses,
    getCourseProgress,
    getCompletedLessonsCount,
    bookmarks,
    notes,
    deleteNote,
    getRecentActivity,
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'courses' | 'certificates' | 'notes' | 'bookmarks'>('courses');

  const streak = getLearningStreak();
  const completedLessonsCount = getTotalCompletedLessons();
  const completedCoursesCount = getTotalCompletedCourses();
  const recentActivities = getRecentActivity();

  // Get enrolled courses details
  const enrolledCourseObjects = enrollments.map((enr) => {
    const course = getCourseById(enr.course_id);
    const progress = course ? getCourseProgress(course.id, course.total_lessons) : 0;
    const completedCount = course ? getCompletedLessonsCount(course.id) : 0;
    return {
      enrollment: enr,
      course,
      progress,
      completedCount,
    };
  }).filter((item) => item.course !== undefined);

  // Completed courses that earned certificates
  const certificateCourses = enrolledCourseObjects.filter((item) => item.progress >= 100);

  // Find most recent active course to resume
  const activeCourse = enrolledCourseObjects.find((item) => item.progress < 100) || enrolledCourseObjects[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* ── Welcome Header & Global Stats ──────────────────────────── */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 text-primary-200 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary-300" />
              لوحة المتعلم الشخصية
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              أهلاً بك، {user ? user.full_name : 'طالب صناعة الورق'} 👋
            </h1>
            <p className="text-xs sm:text-sm text-primary-100 mt-1">
              واصل مسيرتك العلمية في صناعة وتدوير المنتجات الورقية وحقق أهدافك المهنية والبيئية
            </p>
          </div>

          {/* Quick Streak Badge */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4 self-start md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Flame className="w-6 h-6 fill-amber-400 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-primary-200 font-medium">أيام النشاط المتواصل</p>
              <p className="text-2xl font-black text-white">{streak} أيام متتالية</p>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary-200 text-xs font-semibold mb-1">
              <BookOpen className="w-4 h-4" /> الدورات المسجلة
            </div>
            <span className="text-2xl font-black text-white">{enrolledCourseObjects.length}</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary-200 text-xs font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4" /> الدروس المنجزة
            </div>
            <span className="text-2xl font-black text-white">{completedLessonsCount}</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary-200 text-xs font-semibold mb-1">
              <Award className="w-4 h-4" /> الشهادات المكتسبة
            </div>
            <span className="text-2xl font-black text-amber-300">{completedCoursesCount}</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-primary-200 text-xs font-semibold mb-1">
              <FileEdit className="w-4 h-4" /> الملاحظات المحفوظة
            </div>
            <span className="text-2xl font-black text-white">{notes.length}</span>
          </div>
        </div>
      </div>

      {/* ── Resume Learning Banner (if has active course) ───────────── */}
      {activeCourse && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                تابع من حيث توقفت
              </span>
              <span className="text-xs text-charcoal-500 font-semibold">
                {activeCourse.completedCount} من {activeCourse.course?.total_lessons} درساً
              </span>
            </div>

            <h3 className="text-xl font-bold text-charcoal-900">
              {activeCourse.course?.title}
            </h3>

            <div className="max-w-md">
              <div className="flex justify-between text-xs font-semibold text-charcoal-600 mb-1">
                <span>إجمالي الإنجاز</span>
                <span className="text-primary-700 font-bold">{activeCourse.progress}%</span>
              </div>
              <ProgressBar progress={activeCourse.progress} size="md" />
            </div>
          </div>

          <Link
            href={`/courses/${activeCourse.course?.id}`}
            className="btn-primary py-3.5 px-6 text-sm font-bold shadow-md flex items-center justify-center gap-2 self-start md:self-center"
          >
            <span>متابعة الدورة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* ── Tabs Navigation ────────────────────────────────────────── */}
      <div className="border-b border-charcoal-200 flex items-center gap-4 text-sm font-bold">
        <button
          onClick={() => setActiveTab('courses')}
          className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'courses'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>دوراتي التعليمية ({enrolledCourseObjects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('certificates')}
          className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'certificates'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>شهاداتي المعتمدة ({certificateCourses.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'notes'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          <FileEdit className="w-4 h-4" />
          <span>ملاحظاتي المعملية ({notes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'bookmarks'
              ? 'border-primary-600 text-primary-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>الإشارات المرجعية ({bookmarks.length})</span>
        </button>
      </div>

      {/* ── TAB 1: Enrolled Courses ────────────────────────────────── */}
      {activeTab === 'courses' && (
        <div className="space-y-6">
          {enrolledCourseObjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourseObjects.map(({ course, progress, completedCount }) => {
                if (!course) return null;
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-semibold text-charcoal-500">
                          {course.estimated_hours} ساعات
                        </span>
                        {progress >= 100 ? (
                          <span className="bg-primary-100 text-primary-800 px-2.5 py-0.5 rounded-full font-bold">
                            ✓ مكتملة
                          </span>
                        ) : (
                          <span className="bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
                            قيد التعلم
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-charcoal-900 text-lg mb-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 line-clamp-2 mb-5">
                        {course.short_description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-charcoal-100">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-charcoal-600 mb-1">
                          <span>الإنجاز ({completedCount}/{course.total_lessons})</span>
                          <span className="text-primary-700 font-bold">{progress}%</span>
                        </div>
                        <ProgressBar progress={progress} size="sm" />
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/courses/${course.id}`}
                          className="btn-primary w-full py-2.5 text-xs font-bold"
                        >
                          {progress >= 100 ? 'مراجعة الدورة' : 'متابعة التعلم'}
                        </Link>
                        {progress >= 100 && (
                          <Link
                            href={`/certificates?courseId=${course.id}`}
                            className="btn-secondary py-2.5 px-3 text-xs font-bold"
                            title="عرض الشهادة"
                          >
                            <Award className="w-4 h-4 text-amber-600" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-charcoal-200/80 max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900 mb-1">لم تسجل في أي دورة بعد</h3>
              <p className="text-xs text-charcoal-500 mb-6">
                استكشف الدورات المتاحة وابدأ مسارك التعليمي المجاني الآن.
              </p>
              <Link href="/courses" className="btn-primary text-xs py-2.5 px-6 font-bold">
                تصفح الدورات التدريبية
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 2: Earned Certificates ─────────────────────────────── */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          {certificateCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificateCourses.map(({ course }) => {
                if (!course) return null;
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl p-6 border-2 border-kraft-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-kraft-800 bg-kraft-100 px-2 py-0.5 rounded">
                            شهادة معتمدة
                          </span>
                          <h3 className="text-lg font-bold text-charcoal-900 mt-1">
                            {course.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-charcoal-500 mb-4">
                        تم استيفاء جميع المتطلبات واجتياز الاختبارات التقييمية بنجاح.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                      <span className="text-xs text-charcoal-400 font-mono">
                        رقم التحقق: PCA-{course.id.toUpperCase()}-2026
                      </span>
                      <Link
                        href={`/certificates?courseId=${course.id}`}
                        className="btn-primary py-2 px-4 text-xs font-bold"
                      >
                        عرض وطباعة الشهادة
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-charcoal-200/80 max-w-md mx-auto">
              <Award className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900 mb-1">لا توجد شهادات مكتسبة بعد</h3>
              <p className="text-xs text-charcoal-500 mb-6">
                أكمل 100% من دروس واختبارات أي دورة للحصول تلقائياً على شهادتك المعتمدة.
              </p>
              <Link href="/courses" className="btn-primary text-xs py-2.5 px-6 font-bold">
                ابدأ دورة الآن
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 3: Notes Manager ───────────────────────────────────── */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          {notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notes.map((note) => {
                const lesson = getLessonById(note.lesson_id);
                return (
                  <div
                    key={note.id}
                    className="bg-white rounded-2xl p-5 border border-charcoal-200 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-charcoal-400 mb-2">
                        <span className="font-semibold text-primary-700">
                          {lesson?.title || 'درس تعليمي'}
                        </span>
                        <button
                          onClick={() => deleteNote(note.lesson_id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                          title="حذف الملاحظة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal-800 whitespace-pre-wrap leading-relaxed">
                        {note.content}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-charcoal-100 flex justify-between items-center text-[11px] text-charcoal-400">
                      <span>{new Date(note.updated_at).toLocaleDateString('ar-EG')}</span>
                      {lesson && (
                        <Link
                          href={`/learn/${lesson.module_id}/${lesson.id}`}
                          className="text-primary-700 hover:underline font-semibold"
                        >
                          الانتقال إلى الدرس
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-charcoal-200/80 max-w-md mx-auto">
              <FileEdit className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900 mb-1">لا توجد ملاحظات مسجلة بعد</h3>
              <p className="text-xs text-charcoal-500">
                يمكنك كتابة ملاحظاتك المعملية أثناء دراسة أي درس من تبويب «ملاحظاتي».
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 4: Bookmarks ───────────────────────────────────────── */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {bookmarks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmarks.map((bm) => {
                const lesson = getLessonById(bm.lesson_id);
                if (!lesson) return null;
                return (
                  <div
                    key={bm.id}
                    className="bg-white rounded-2xl p-5 border border-charcoal-200 shadow-2xs flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-charcoal-800">{lesson.title}</h4>
                      <p className="text-xs text-charcoal-400 mt-1">
                        ⏱ {lesson.estimated_minutes} دقيقة
                      </p>
                    </div>
                    <Link
                      href={`/learn/${lesson.module_id}/${lesson.id}`}
                      className="btn-secondary py-1.5 px-3 text-xs font-semibold"
                    >
                      فتح الدرس
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-charcoal-200/80 max-w-md mx-auto">
              <Bookmark className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900 mb-1">لا توجد إشارات مرجعية</h3>
              <p className="text-xs text-charcoal-500">
                اضغط على أيقونة الإشارة المرجعية داخل أي درس لتثبيته والوصول إليه بسرعة.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

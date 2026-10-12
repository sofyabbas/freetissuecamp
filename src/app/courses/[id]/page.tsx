'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  getCourseById,
  getModulesByCourseId,
  getLessonsByModuleId,
  getLearningPathById,
} from '@/lib/data/seed-data';
import { useProgress } from '@/lib/progress-context';
import { DifficultyBadge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  BookOpen,
  Clock,
  Layers,
  CheckCircle2,
  PlayCircle,
  HelpCircle,
  Award,
  ArrowRight,
  ArrowLeft,
  Check,
  FileText,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { formatDuration } from '@/lib/utils';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;

  const course = useMemo(() => getCourseById(courseId), [courseId]);
  const modules = useMemo(() => (course ? getModulesByCourseId(course.id) : []), [course]);
  const path = useMemo(() => (course ? getLearningPathById(course.learning_path_id) : undefined), [course]);

  const {
    isEnrolled,
    enrollInCourse,
    getCourseProgress,
    getCompletedLessonsCount,
    isLessonCompleted,
  } = useProgress();

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-charcoal-900 mb-2">الدورة غير موجودة</h2>
        <p className="text-sm text-charcoal-500 mb-6">الدورة المطلوبة غير متوفرة أو تم تغيير مسارها.</p>
        <Link href="/courses" className="btn-primary">
          العودة إلى دليل الدورات
        </Link>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const progress = getCourseProgress(course.id, course.total_lessons);
  const completedLessonsCount = getCompletedLessonsCount(course.id);

  // Find first lesson to start/resume
  const allLessons = modules.flatMap((m) => getLessonsByModuleId(m.id));
  const firstUncompletedLesson = allLessons.find((l) => !isLessonCompleted(l.id)) || allLessons[0];
  const startLessonUrl = firstUncompletedLesson
    ? `/learn/${course.id}/${firstUncompletedLesson.id}`
    : `/learn/${course.id}/lesson-1`;

  const handleEnrollAndStart = () => {
    if (!enrolled) {
      enrollInCourse(course.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-charcoal-500 font-medium">
        <Link href="/courses" className="hover:text-primary-700 transition-colors">
          الدورات التدريبية
        </Link>
        <span>/</span>
        {path && (
          <>
            <Link href={`/courses?path=${path.id}`} className="hover:text-primary-700 transition-colors">
              {path.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-charcoal-800 font-semibold truncate max-w-xs">{course.title}</span>
      </nav>

      {/* Hero Overview Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <DifficultyBadge difficulty={course.difficulty} />
              {path && (
                <span className="text-xs bg-paper-100 text-charcoal-700 font-semibold px-3 py-1 rounded-full border border-charcoal-200">
                  {path.title}
                </span>
              )}
              {progress >= 100 && (
                <span className="text-xs font-bold text-primary-700 bg-primary-100 px-3 py-1 rounded-full border border-primary-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> أتممت هذه الدورة بنجاح!
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 leading-tight">
              {course.title}
            </h1>
            {course.title_en && (
              <p className="text-sm font-semibold text-charcoal-400" dir="ltr">
                {course.title_en}
              </p>
            )}

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              {course.description}
            </p>

            {/* Quick Meta Row */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-charcoal-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-kraft-600" />
                <span>المدة التقديرية: {course.estimated_hours} ساعات</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary-600" />
                <span>{modules.length} وحدات تدريبية</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span>{course.total_lessons} درساً واختباراً</span>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="lg:col-span-4 bg-paper-50 rounded-2xl p-6 border border-charcoal-200 space-y-5">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 mx-auto flex items-center justify-center mb-3">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-charcoal-900 text-base">شهادة إتمام معتمدة</h3>
              <p className="text-xs text-charcoal-500 mt-1">
                تُمنح فور إكمال جميع الدروس واجتياز الاختبارات
              </p>
            </div>

            {enrolled && (
              <div className="space-y-2 pt-2 border-t border-charcoal-200">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-charcoal-600">نسبة تقدمك في الدورة</span>
                  <span className="text-primary-700 font-bold">{progress}%</span>
                </div>
                <ProgressBar progress={progress} size="md" />
                <p className="text-[11px] text-charcoal-500 text-center">
                  أنجزت {completedLessonsCount} من أصل {course.total_lessons} درساً
                </p>
              </div>
            )}

            <Link
              href={startLessonUrl}
              onClick={handleEnrollAndStart}
              className="btn-primary w-full py-4 text-base font-bold shadow-md flex items-center justify-center gap-2 group"
            >
              <span>{enrolled ? (progress >= 100 ? 'مراجعة الدورة' : 'متابعة التعلم') : 'ابدأ الدورة الآن مجاناً'}</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>

            <p className="text-[11px] text-charcoal-500 text-center">
              وصول مجاني مدى الحياة • بدون بطاقة ائتمان
            </p>
          </div>

        </div>
      </div>

      {/* Course Objectives and Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Objectives */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-charcoal-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-600" />
            ماذا ستتعلّم في هذه الدورة؟
          </h3>
          <ul className="space-y-3">
            {course.objectives?.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements & Skills */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-kraft-700" />
              المهارات المكتسبة
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-paper-100 text-charcoal-800 font-semibold px-3 py-1.5 rounded-xl border border-charcoal-200"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-charcoal-100">
            <h4 className="text-xs font-bold text-charcoal-800 mb-2">المتطلبات المسبقة:</h4>
            <ul className="space-y-1.5 text-xs text-charcoal-600">
              {course.requirements?.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Syllabus / Modules Breakdown */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-charcoal-900">
            منهاج الدورة والدروس التفصيلية
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            {modules.length} وحدات تدريبية متسلسلة تحتوي على شروحات علمية، وتجارب عملية، واختبارات قياس الفهم
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, mIdx) => {
            const moduleLessons = getLessonsByModuleId(module.id);
            const completedInModule = moduleLessons.filter((l) => isLessonCompleted(l.id)).length;

            return (
              <div
                key={module.id}
                className="bg-white rounded-2xl border border-charcoal-200/80 overflow-hidden shadow-xs"
              >
                {/* Module Header */}
                <div className="p-5 sm:p-6 bg-paper-50/70 border-b border-charcoal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-700 bg-primary-100 px-2.5 py-0.5 rounded-md">
                        الوحدة {mIdx + 1}
                      </span>
                      <span className="text-xs text-charcoal-500 font-medium">
                        ({completedInModule}/{moduleLessons.length} مكتمل)
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-charcoal-900">
                      {module.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-0.5">{module.description}</p>
                  </div>
                </div>

                {/* Lessons List in Module */}
                <div className="divide-y divide-charcoal-100">
                  {moduleLessons.map((lesson, lIdx) => {
                    const completed = isLessonCompleted(lesson.id);
                    const lessonUrl = `/learn/${course.id}/${lesson.id}`;

                    return (
                      <Link
                        key={lesson.id}
                        href={lessonUrl}
                        onClick={handleEnrollAndStart}
                        className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-paper-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                              completed
                                ? 'bg-primary-600 text-white'
                                : 'bg-charcoal-100 text-charcoal-600 group-hover:bg-primary-100 group-hover:text-primary-700'
                            }`}
                          >
                            {completed ? <Check className="w-4 h-4" /> : lIdx + 1}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-charcoal-800 group-hover:text-primary-700 transition-colors">
                                {lesson.title}
                              </h4>
                              {lesson.type === 'quiz' && (
                                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                                  اختبار
                                </span>
                              )}
                              {lesson.type === 'lab' && (
                                <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-bold">
                                  تطبيق عملي
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-charcoal-400 font-medium">
                              ⏱ {formatDuration(lesson.estimated_minutes)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 group-hover:-translate-x-1 transition-transform">
                          <span className="hidden sm:inline-block">
                            {completed ? 'مراجعة الدرس' : 'ابدأ الدرس'}
                          </span>
                          <ArrowLeft className="w-4 h-4" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

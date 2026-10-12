'use client';

import React from 'react';
import Link from 'next/link';
import { Course } from '@/types';
import { DifficultyBadge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useProgress } from '@/lib/progress-context';
import { Clock, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { isEnrolled, getCourseProgress, getCompletedLessonsCount } = useProgress();
  const enrolled = isEnrolled(course.id);
  const progress = getCourseProgress(course.id, course.total_lessons);
  const completedCount = getCompletedLessonsCount(course.id);
  const isCompleted = progress >= 100;

  return (
    <div className="bg-white rounded-3xl p-6 border border-charcoal-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <DifficultyBadge difficulty={course.difficulty} />
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
              مكتملة
            </span>
          ) : enrolled ? (
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              قيد التعلم
            </span>
          ) : (
            <span className="text-xs font-medium text-charcoal-500 bg-charcoal-50 px-2.5 py-1 rounded-full">
              مجاني
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-primary-700 transition-colors leading-snug mb-2">
          {course.title}
        </h3>
        {course.title_en && (
          <p className="text-xs font-medium text-charcoal-400 mb-3" dir="ltr">
            {course.title_en}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-charcoal-600 line-clamp-3 mb-5 leading-relaxed">
          {course.short_description || course.description}
        </p>

        {/* Skills Tags */}
        {course.skills && course.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {course.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="text-[11px] bg-paper-100 text-charcoal-700 px-2.5 py-0.5 rounded-lg border border-charcoal-200/40"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-charcoal-100/80">
        {/* Meta Stats */}
        <div className="flex items-center justify-between text-xs text-charcoal-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-kraft-600" />
            <span>{course.estimated_hours} ساعات</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span>{course.total_lessons} درساً</span>
          </div>
        </div>

        {/* Progress Bar (if enrolled) */}
        {enrolled && (
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs text-charcoal-600 mb-1">
              <span>نسبة الإنجاز ({completedCount}/{course.total_lessons})</span>
              <span className="font-bold text-primary-700">{progress}%</span>
            </div>
            <ProgressBar progress={progress} size="sm" />
          </div>
        )}

        {/* Action Link */}
        <Link
          href={`/courses/${course.id}`}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
            enrolled
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm'
              : 'bg-paper-100 hover:bg-primary-50 text-charcoal-800 hover:text-primary-700 border border-charcoal-200 hover:border-primary-300'
          }`}
        >
          <span>{enrolled ? (isCompleted ? 'مراجعة الدورة' : 'متابعة التعلم') : 'تفاصيل الدورة'}</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

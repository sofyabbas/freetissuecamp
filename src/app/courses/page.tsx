'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { courses, learningPaths } from '@/lib/data/seed-data';
import { CourseCard } from '@/components/course/CourseCard';
import { Search, Filter, BookOpen, Sparkles, Layers } from 'lucide-react';

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialPath = searchParams.get('path') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPath, setSelectedPath] = useState<string>(initialPath);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Path filter
      if (selectedPath !== 'all' && course.learning_path_id !== selectedPath) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && course.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = course.title.toLowerCase().includes(query);
        const matchDesc = course.description.toLowerCase().includes(query);
        const matchSkills = course.skills?.some((s) => s.toLowerCase().includes(query));
        if (!matchTitle && !matchDesc && !matchSkills) return false;
      }
      return true;
    });
  }, [searchQuery, selectedPath, selectedDifficulty]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-bold border border-primary-200 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-primary-600" />
          المكتبة التعليمية المفتوحة
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-3">
          جميع دورات صناعة وتدوير الورق
        </h1>
        <p className="text-sm text-charcoal-600 leading-relaxed">
          اختر الدورة المناسبة لمستواك، ابدأ مجاناً خطوة بخطوة، واحصل على شهادة إتمام موثقة فور إكمال متطلبات الدورة.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-charcoal-400 absolute right-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن دورة أو مهارة (مثال: سليلوز، إعادة تدوير، مناديل، جودة)..."
              className="input pr-11 py-3 text-sm"
            />
          </div>

          {/* Path Select */}
          <div className="md:col-span-3">
            <select
              value={selectedPath}
              onChange={(e) => setSelectedPath(e.target.value)}
              className="input py-3 text-sm"
            >
              <option value="all">جميع المسارات التعليمية</option>
              {learningPaths.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Select */}
          <div className="md:col-span-3">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="input py-3 text-sm"
            >
              <option value="all">جميع المستويات</option>
              <option value="beginner">مبتدئ (Beginner)</option>
              <option value="intermediate">متوسط (Intermediate)</option>
              <option value="advanced">متقدم (Advanced)</option>
            </select>
          </div>

        </div>

        {/* Quick Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-charcoal-100 text-xs">
          <span className="text-charcoal-500 font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> تصفية سريعة:
          </span>
          <button
            onClick={() => {
              setSelectedPath('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
            }}
            className={`px-3 py-1 rounded-lg border transition-all ${
              selectedPath === 'all' && selectedDifficulty === 'all' && !searchQuery
                ? 'bg-charcoal-800 text-white border-charcoal-800'
                : 'bg-white text-charcoal-600 border-charcoal-200 hover:bg-paper-100'
            }`}
          >
            الكل ({courses.length})
          </button>
          {learningPaths.map((lp) => (
            <button
              key={lp.id}
              onClick={() => setSelectedPath(lp.id)}
              className={`px-3 py-1 rounded-lg border transition-all ${
                selectedPath === lp.id
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-charcoal-600 border-charcoal-200 hover:bg-paper-100'
              }`}
            >
              {lp.title}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center text-xs font-semibold text-charcoal-500 px-2">
        <span>عرض {filteredCourses.length} دورة تدريبية</span>
        {(searchQuery || selectedPath !== 'all' || selectedDifficulty !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPath('all');
              setSelectedDifficulty('all');
            }}
            className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
          >
            إلغاء التصفية
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-charcoal-200/80 shadow-xs max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-charcoal-100 text-charcoal-500 mx-auto flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-charcoal-900 mb-2">لم يتم العثور على دورات مطابقة</h3>
          <p className="text-xs text-charcoal-500 mb-6">
            جرّب تغيير كلمات البحث أو إعادة ضبط خيارات التصفية لعرض كل الدورات المتاحة.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPath('all');
              setSelectedDifficulty('all');
            }}
            className="btn-primary py-2.5 px-6 text-xs font-bold"
          >
            إعادة ضبط الفلاتر
          </button>
        </div>
      )}

    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-charcoal-500">جاري تحميل الدورات...</div>}>
      <CoursesContent />
    </Suspense>
  );
}

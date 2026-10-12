'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { learningPaths, courses, projects } from '@/lib/data/seed-data';
import { CourseCard } from '@/components/course/CourseCard';
import { PulpCalculator } from '@/components/home/PulpCalculator';
import {
  BookOpen,
  Award,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Trees,
  Factory,
  Recycle,
  TestTube,
  Layers,
  GraduationCap,
  PlayCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';

export default function HomePage() {
  const [activePathId, setActivePathId] = useState<string>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(courses[0]?.id || null);

  const filteredCourses =
    activePathId === 'all'
      ? courses
      : courses.filter((c) => c.learning_path_id === activePathId);

  const pathIcons: Record<string, any> = {
    'path-tissue-fundamentals': BookOpen,
    'path-tissue-chemistry': TestTube,
    'path-tissue-machine': Factory,
    'path-tissue-converting-qa': ShieldCheck,
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-charcoal-200/50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-paper-50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs sm:text-sm font-bold border border-primary-200 shadow-2xs mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-600" />
              Free Tissue Camp • المنصة العربية الأولى لهندسة وصناعة ورق التيشيو
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 tracking-tight leading-[1.25] mb-6">
              تعلّم هندسة وصناعة ورق التيشيو، <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-600 to-primary-800">
                من المبتدئ إلى مهندس التشغيل المحترف
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              منهاج حقيقي متقدم يغطي ألياف اليوكاليبتوس، تكرير LCR، ماكينات Crescent Former، أسطوانات اليانكي والكابينة الغازية 450°م، سكاكين الكريب والنعومة، خطوط التحويل، وفحوصات الجودة ISO 12625.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/courses"
                className="btn-primary w-full sm:w-auto text-base py-4 px-8 shadow-lg shadow-primary-600/20 group"
              >
                <span>ابدأ التعلم الآن مجاناً</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary w-full sm:w-auto text-base py-4 px-8"
              >
                <span>استكشف المشاريع العملية</span>
              </Link>
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/80 backdrop-blur-md border border-charcoal-200/70 shadow-sm text-right sm:text-center">
              <div className="p-3">
                <p className="text-3xl font-extrabold text-primary-700">4</p>
                <p className="text-xs font-semibold text-charcoal-500 mt-1">مسارات تخصصية شاملة</p>
              </div>
              <div className="p-3 border-r sm:border-r border-charcoal-100">
                <p className="text-3xl font-extrabold text-primary-700">{courses.length}</p>
                <p className="text-xs font-semibold text-charcoal-500 mt-1">دورات تدريبية مفصلة</p>
              </div>
              <div className="p-3 border-r border-charcoal-100">
                <p className="text-3xl font-extrabold text-primary-700">80+</p>
                <p className="text-xs font-semibold text-charcoal-500 mt-1">درس واختبار تفاعلي</p>
              </div>
              <div className="p-3 border-r border-charcoal-100">
                <p className="text-3xl font-extrabold text-kraft-700">100%</p>
                <p className="text-xs font-semibold text-charcoal-500 mt-1">مجاني ومتاح للجميع</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Learning Paths Section ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
            خارطة الطريق التعليمية
          </span>
          <h2 className="text-3xl font-bold text-charcoal-900 mt-3 mb-3">
            المسارات التعليمية التخصصية
          </h2>
          <p className="text-sm text-charcoal-600">
            اختر المسار الذي يناسب اهتمامك، سواء كنت مبتدئًا هاويًا أو مهندسًا صناعيًا يبحث عن التخصص
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path) => {
            const Icon = pathIcons[path.id] || BookOpen;
            return (
              <div
                key={path.id}
                className="bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white shadow-sm"
                    style={{ backgroundColor: path.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2 leading-snug">
                    {path.title}
                  </h3>
                  {path.title_en && (
                    <p className="text-xs text-charcoal-400 mb-3" dir="ltr">
                      {path.title_en}
                    </p>
                  )}
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-6">
                    {path.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                  <span className="text-xs text-charcoal-500 font-medium">
                    {path.estimated_hours} ساعة • {path.total_lessons} درساً
                  </span>
                  <Link
                    href={`/courses?path=${path.id}`}
                    className="text-xs font-bold text-primary-700 hover:text-primary-800 flex items-center gap-1 group"
                  >
                    <span>استعراض</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Interactive Pulp Calculator Widget ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PulpCalculator />
      </section>

      {/* ── 4. freeCodeCamp-style Curriculum Browser ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-kraft-800 bg-kraft-100 px-3 py-1 rounded-full border border-kraft-200">
                المنهاج المتكامل
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mt-2">
                دليل المقررات والوحدات التعليمية
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                تصفح الدورات وتفاصيل الدروس التفاعلية بنقرة واحدة
              </p>
            </div>

            {/* Path filter tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActivePathId('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activePathId === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-paper-100 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                جميع الدورات ({courses.length})
              </button>
              {learningPaths.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePathId(p.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activePathId === p.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-paper-100 text-charcoal-700 hover:bg-charcoal-100'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Accordion / List */}
          <div className="space-y-4">
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;
              return (
                <div
                  key={course.id}
                  className="border border-charcoal-200 rounded-2xl overflow-hidden transition-all bg-paper-50/50"
                >
                  <button
                    onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 hover:bg-paper-100/70 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-charcoal-900 text-base sm:text-lg">
                            {course.title}
                          </h3>
                          <span className="text-[11px] bg-primary-100 text-primary-800 px-2 py-0.5 rounded-md font-semibold">
                            {course.total_lessons} درس
                          </span>
                        </div>
                        <p className="text-xs text-charcoal-500 line-clamp-1 mt-0.5">
                          {course.short_description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-semibold text-charcoal-500">
                        {course.estimated_hours} ساعة
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-charcoal-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 pt-2 border-t border-charcoal-200/70 bg-white space-y-4">
                      <p className="text-xs text-charcoal-600 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Skills taught */}
                      {course.skills && (
                        <div>
                          <span className="text-xs font-bold text-charcoal-700 block mb-2">
                            المهارات المكتسبة في هذه الدورة:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map((s, i) => (
                              <span
                                key={i}
                                className="text-xs bg-paper-100 text-charcoal-800 px-3 py-1 rounded-lg border border-charcoal-200"
                              >
                                ✓ {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-end gap-3 pt-2">
                        <Link
                          href={`/courses/${course.id}`}
                          className="btn-primary py-2 px-5 text-xs font-bold"
                        >
                          استعراض منهاج الدورة والبدء
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Hands-on Projects Section ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-kraft-50 to-paper-100 rounded-3xl p-8 sm:p-12 border border-kraft-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-primary-700 bg-primary-100 px-3 py-1 rounded-full border border-primary-200">
                التطبيق الحقيقي
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mt-2">
                مشاريع عملية تصنعها بنفسك (Hands-on DIY & Lab)
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                تعلّم بالصنع: ابدأ من أدوات المطبخ والورشة وصولاً إلى محاكاة بيئات المصانع
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-kraft py-3 px-6 text-sm font-bold self-start md:self-center"
            >
              عرض جميع المشاريع التطبيقية
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-charcoal-200/70 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-semibold">
                      {project.category}
                    </span>
                    <span className="text-charcoal-500 font-medium">
                      ⏱ {project.estimated_hours} ساعات
                    </span>
                  </div>
                  <h3 className="font-bold text-charcoal-900 text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={`/projects#${project.id}`}
                  className="text-xs font-bold text-primary-700 hover:text-primary-800 flex items-center gap-1 pt-3 border-t border-charcoal-100"
                >
                  <span>خطوات التنفيذ والأدوات المطلوبة</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Free Tissue Camp ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-3">
            لماذا تتعلّم في Free Tissue Camp؟
          </h2>
          <p className="text-sm text-charcoal-600">
            أول أكاديمية عربية تنقل لك أسرار صناعة ورق المناديل والتشيو من قلب غرف التحكم والمعامل الدولية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-charcoal-200/80 shadow-xs text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 mx-auto flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-charcoal-900 mb-3">
              تعليم تفاعلي مجاني 100%
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              على غرار منهجية freeCodeCamp، لن تدفع شيئاً. كل المسارات، الدروس، الاختبارات، والشهادات متاحة بدون أي اشتراكات أو قيود.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-charcoal-200/80 shadow-xs text-center">
            <div className="w-14 h-14 rounded-2xl bg-kraft-100 text-kraft-800 mx-auto flex items-center justify-center mb-6">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-charcoal-900 mb-3">
              شهادات إتمام موثقة برقم تحقق
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              عند إتمامك لكل دورة واجتياز اختباراتها بنجاح، ستحصل تلقائيًا على شهادة رقمية بمعرف فحص فريد ورابط تحقق صالح للعرض في سيرتك الذاتية.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-charcoal-200/80 shadow-xs text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-6">
              <Recycle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-charcoal-900 mb-3">
              أثر بيئي واقتصادي مستدام
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              نركز بعمق على إعادة التدوير المنزلي والصناعي، تقليل هدر الموارد المائية، وتحويل المخلفات السليلوزية والزراعية إلى منتجات ورقية ذات قيمة عالية.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action Banner ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              ابدأ رحلتك التعليمية في صناعة الورق اليوم
            </h2>
            <p className="text-sm sm:text-base text-primary-100 leading-relaxed">
              انضم لآلاف المتعلمين، تتبع مسارك خطوة بخطوة، واكتسب مهارة عملية تصنع فارقاً في مستقبلك المهني والبيئي.
            </p>
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-8 py-4 rounded-xl font-extrabold text-base shadow-lg transition-transform hover:scale-105"
              >
                <span>تصفح الدورات وابدأ فوراً</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

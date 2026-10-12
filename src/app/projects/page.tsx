'use client';

import React, { useState } from 'react';
import { projects } from '@/lib/data/seed-data';
import { Project, ProjectStep } from '@/types';
import { DifficultyBadge } from '@/components/ui/Badge';
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldAlert,
  ListChecks,
  ChevronDown,
  UploadCloud,
  Send,
  Sparkles,
  HelpCircle,
  FileCheck,
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [checkedMaterials, setCheckedMaterials] = useState<Record<string, boolean>>({});
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});

  // Submission state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleMaterial = (key: string) => {
    setCheckedMaterials((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleChecklist = (key: string) => {
    setCheckedChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setIsSubmitModalOpen(false);
      setSubmissionNotes('');
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 text-kraft-900 text-xs font-bold border border-kraft-200 mb-3">
          <FolderGit2 className="w-3.5 h-3.5 text-kraft-700" />
          المختبر التطبيقي والعملي
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-2">
          المشاريع التطبيقية لصناعة وتدوير الورق
        </h1>
        <p className="text-sm text-charcoal-600 leading-relaxed">
          انتقل من المعرفة النظرية إلى الصنع الحقيقي: اصنع إطار الغربال، اخلط العجينة، اختبر خصائص الورق بنفسك، وقدّم نتائجك للتقييم.
        </p>
      </div>

      {/* ── Category Filters & Projects Grid ────────────────────────── */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-xs'
                : 'bg-white text-charcoal-700 border border-charcoal-200 hover:bg-paper-100'
            }`}
          >
            جميع المشاريع ({projects.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white shadow-xs'
                  : 'bg-white text-charcoal-700 border border-charcoal-200 hover:bg-paper-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Project Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProjects.map((p) => {
            const isSelected = activeProject.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProject(p)}
                className={`p-5 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-primary-50/70 border-primary-500 shadow-sm ring-2 ring-primary-500/20'
                    : 'bg-white border-charcoal-200 hover:border-primary-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-primary-800">{p.category}</span>
                    <DifficultyBadge difficulty={p.difficulty} />
                  </div>
                  <h3 className="font-bold text-charcoal-900 text-base mb-1">{p.title}</h3>
                  <p className="text-xs text-charcoal-500 line-clamp-2">{p.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs text-charcoal-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {p.estimated_hours} ساعات
                  </span>
                  <span className="font-bold text-primary-700">
                    {isSelected ? 'المشروع المعروض حالياً ✓' : 'عرض التفاصيل'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Project Detail Workspace ─────────────────────────── */}
      <div id={activeProject.id} className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-md space-y-10">
        
        {/* Project Title & Objectives */}
        <div className="border-b border-charcoal-100 pb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-kraft-800 bg-kraft-100 px-3 py-1 rounded-full border border-kraft-200">
                {activeProject.category}
              </span>
              <DifficultyBadge difficulty={activeProject.difficulty} />
              <span className="text-xs text-charcoal-400">⏱ {activeProject.estimated_hours} ساعات عمل</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              {activeProject.title}
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-3xl">
              {activeProject.description}
            </p>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="btn-primary py-3.5 px-6 text-sm font-bold shadow-md flex items-center gap-2 flex-shrink-0 self-start lg:self-center"
          >
            <UploadCloud className="w-4 h-4" />
            <span>تسليم نتائج المشروع للتقييم</span>
          </button>
        </div>

        {/* Materials & Safety Warnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Required Materials Checklist */}
          <div className="bg-paper-50 rounded-2xl p-6 border border-charcoal-200/80 space-y-4">
            <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-kraft-700" />
              الأدوات والمواد المطلوبة (قائمة التحضير):
            </h3>
            <ul className="space-y-2.5">
              {activeProject.materials?.map((mat, i) => {
                const key = `${activeProject.id}-mat-${i}`;
                const checked = checkedMaterials[key] || false;
                return (
                  <li
                    key={i}
                    onClick={() => toggleMaterial(key)}
                    className="flex items-center gap-3 text-xs sm:text-sm text-charcoal-800 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-primary-600 accent-primary-600 cursor-pointer"
                    />
                    <span className={checked ? 'line-through text-charcoal-400' : ''}>{mat}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Safety & Environment Notes */}
          <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 space-y-4">
            <h3 className="text-base font-bold text-amber-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-700" />
              إرشادات السلامة والبيئة:
            </h3>
            <ul className="space-y-2.5">
              {activeProject.safety_notes?.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-amber-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-charcoal-900 flex items-center gap-2">
            <ListChecks className="w-6 h-6 text-primary-600" />
            خطوات تنفيذ المشروع خطوة بخطوة:
          </h3>

          <div className="space-y-6">
            {activeProject.steps?.map((step) => (
              <div
                key={step.order}
                className="bg-paper-50/50 rounded-2xl p-6 border border-charcoal-200/80 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                    {step.order}
                  </span>
                  <h4 className="text-base font-bold text-charcoal-900">{step.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed pr-11">
                  {step.description}
                </p>
                {step.tips && step.tips.length > 0 && (
                  <div className="pr-11 pt-2">
                    <div className="p-3 bg-kraft-50 border border-kraft-200 rounded-xl text-xs text-charcoal-700 space-y-1">
                      <span className="font-bold text-kraft-900">💡 نصيحة هندسية:</span>
                      {step.tips.map((tip, tIdx) => (
                        <p key={tIdx}>{tip}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expected Results & Quality Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-charcoal-100">
          <div className="space-y-3">
            <h4 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-600" />
              النتائج المتوقعة:
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed bg-paper-50 p-4 rounded-xl border border-charcoal-200">
              {activeProject.expected_results}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              معالجة المشاكل الشائعة (Troubleshooting):
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-600">
              {activeProject.troubleshooting?.map((tb, i) => (
                <li key={i} className="flex items-start gap-2 bg-paper-50 p-3 rounded-xl border border-charcoal-100">
                  <span className="text-amber-600 font-bold">⚠️</span>
                  <span>{tb}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* ── Submission Modal ────────────────────────────────────────── */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-charcoal-200 shadow-2xl space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-charcoal-100">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary-600" />
                <h3 className="font-bold text-charcoal-900 text-lg">تسليم تقرير المشروع</h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-charcoal-400 hover:text-charcoal-700"
              >
                ✕
              </button>
            </div>

            {submissionSuccess ? (
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-200 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto" />
                <h4 className="font-bold text-primary-900 text-base">تم إرسال المشروع بنجاح!</h4>
                <p className="text-xs text-primary-700">
                  تم تسجيل إنجازك في ملفك التعليمي وإضافة نقاط الخبرة العملية إلى حسابك.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitProject} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                    المشروع:
                  </label>
                  <p className="text-sm font-semibold text-charcoal-900 bg-paper-50 p-3 rounded-xl border border-charcoal-200">
                    {activeProject.title}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
                    ملاحظات التجربة والنتائج التي حصلت عليها:
                  </label>
                  <textarea
                    required
                    value={submissionNotes}
                    onChange={(e) => setSubmissionNotes(e.target.value)}
                    placeholder="صِف تجربة تصنيع الورق، الصعوبات التي واجهتها، أو أي إضافات وضعتها على العجينة..."
                    rows={5}
                    className="input text-xs p-3 leading-relaxed"
                  />
                </div>

                <div className="p-4 rounded-xl border border-dashed border-charcoal-300 bg-paper-50/50 text-center text-xs text-charcoal-500">
                  <UploadCloud className="w-8 h-8 text-charcoal-400 mx-auto mb-1" />
                  <span>صور العينات الورقية الناتجة (محاكاة الرفع)</span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="btn-ghost text-xs"
                  >
                    إلغاء
                  </button>
                  <button type="submit" className="btn-primary py-2.5 px-6 text-xs font-bold">
                    إرسال التقرير واعتماد المشروع
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

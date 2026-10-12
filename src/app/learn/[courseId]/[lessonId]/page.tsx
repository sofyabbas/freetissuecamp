'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  getCourseById,
  getLessonById,
  getModulesByCourseId,
  getLessonsByModuleId,
  getQuizQuestionsByLessonId,
  getNextLesson,
  getPreviousLesson,
} from '@/lib/data/seed-data';
import { useProgress } from '@/lib/progress-context';
import { QuizPlayer } from '@/components/quiz/QuizPlayer';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { RichLessonViewer } from '@/components/lesson/RichLessonViewer';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  FileEdit,
  Download,
  Award,
  Layers,
  Menu,
  X,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Check,
} from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();

  const courseId = params?.courseId as string;
  const lessonId = params?.lessonId as string;

  const course = useMemo(() => getCourseById(courseId), [courseId]);
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);
  const modules = useMemo(() => (course ? getModulesByCourseId(course.id) : []), [course]);
  const quizQuestions = useMemo(() => (lesson ? getQuizQuestionsByLessonId(lesson.id) : []), [lesson]);

  const prevLesson = useMemo(() => (course && lesson ? getPreviousLesson(course.id, lesson.id) : undefined), [course, lesson]);
  const nextLesson = useMemo(() => (course && lesson ? getNextLesson(course.id, lesson.id) : undefined), [course, lesson]);

  const {
    completeLesson,
    isLessonCompleted,
    getCourseProgress,
    getCompletedLessonsCount,
    toggleBookmark,
    isBookmarked,
    saveNote,
    getNote,
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'content' | 'quiz' | 'notes' | 'resources'>('content');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [noteContent, setNoteContent] = useState<string>('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Sync existing note
  React.useEffect(() => {
    if (lesson) {
      const existing = getNote(lesson.id);
      setNoteContent(existing ? existing.content : '');
    }
  }, [lesson, getNote]);

  if (!course || !lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-charcoal-900 mb-2">الدرس غير متوفر</h2>
        <p className="text-sm text-charcoal-500 mb-6">تعذر العثور على محتوى هذا الدرس.</p>
        <Link href="/courses" className="btn-primary">
          العودة إلى الدورات
        </Link>
      </div>
    );
  }

  const isCompleted = isLessonCompleted(lesson.id);
  const isMarkedBookmarked = isBookmarked(lesson.id);
  const progress = getCourseProgress(course.id, course.total_lessons);
  const completedCount = getCompletedLessonsCount(course.id);

  const handleMarkCompleteAndNext = () => {
    completeLesson(lesson.id, course.id);

    // Check if that made the whole course complete!
    if (completedCount + (isCompleted ? 0 : 1) >= course.total_lessons) {
      setShowCompletionModal(true);
      return;
    }

    if (nextLesson) {
      router.push(`/learn/${course.id}/${nextLesson.id}`);
    }
  };

  const handleSaveNotes = () => {
    saveNote(lesson.id, noteContent);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2500);
  };

  return (
    <div className="min-h-screen bg-paper-50 flex flex-col">
      
      {/* ── Lesson Top Sticky Bar ──────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-charcoal-200/80 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Course & Lesson Title + Sidebar Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl text-charcoal-600 hover:bg-paper-100 border border-charcoal-200"
              title="فهرس الدروس"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <Link
                href={`/courses/${course.id}`}
                className="text-xs font-semibold text-charcoal-500 hover:text-primary-700 transition-colors hidden sm:block truncate max-w-xs"
              >
                {course.title}
              </Link>
              <h1 className="text-sm sm:text-base font-bold text-charcoal-900 truncate max-w-sm sm:max-w-md">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* Right: Progress & Action Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 w-40">
              <ProgressBar progress={progress} size="sm" />
              <span className="text-xs font-bold text-primary-700 whitespace-nowrap">
                {progress}%
              </span>
            </div>

            <button
              onClick={() => toggleBookmark(lesson.id)}
              className={`p-2 rounded-xl border transition-all ${
                isMarkedBookmarked
                  ? 'bg-amber-50 text-amber-600 border-amber-300'
                  : 'bg-white text-charcoal-400 border-charcoal-200 hover:text-charcoal-700'
              }`}
              title={isMarkedBookmarked ? 'إلغاء الإشارة المرجعية' : 'حفظ كإشارة مرجعية'}
            >
              <Bookmark className={`w-4 h-4 ${isMarkedBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleMarkCompleteAndNext}
              className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                isCompleted
                  ? 'bg-primary-100 text-primary-800 hover:bg-primary-200 border border-primary-300'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>{isCompleted ? 'مكتمل (التالي)' : 'إكمال ومتابعة'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* ── Main Layout: Sidebar + Lesson Workspace ────────────────── */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* ── Lessons Navigation Sidebar ───────────────────────────── */}
        <aside
          className={`lg:col-span-4 bg-white rounded-3xl border border-charcoal-200/80 shadow-xs p-5 self-start sticky top-36 h-[calc(100vh-10rem)] flex flex-col ${
            isSidebarOpen ? 'fixed inset-x-4 top-36 z-40 max-h-[75vh]' : 'hidden lg:flex'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-charcoal-100 mb-4">
            <div>
              <h2 className="text-sm font-bold text-charcoal-900">محتويات الدورة</h2>
              <p className="text-xs text-charcoal-500 font-medium">
                {completedCount} من {course.total_lessons} مكتمل
              </p>
            </div>
            {isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-1.5 text-charcoal-400 hover:text-charcoal-700"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="overflow-y-auto flex-1 space-y-4 custom-scrollbar pr-1">
            {modules.map((m, mIdx) => {
              const moduleLessons = getLessonsByModuleId(m.id);
              return (
                <div key={m.id} className="space-y-1.5">
                  <div className="text-[11px] font-bold text-charcoal-500 bg-paper-100 px-2.5 py-1.5 rounded-lg flex justify-between items-center">
                    <span>الوحدة {mIdx + 1}: {m.title}</span>
                    <span>{moduleLessons.length}</span>
                  </div>

                  <div className="space-y-1 pr-2">
                    {moduleLessons.map((l) => {
                      const isCurr = l.id === lesson.id;
                      const isDone = isLessonCompleted(l.id);

                      return (
                        <Link
                          key={l.id}
                          href={`/learn/${course.id}/${l.id}`}
                          onClick={() => setIsSidebarOpen(false)}
                          className={`w-full p-2.5 rounded-xl text-xs font-medium flex items-center justify-between gap-2 transition-all ${
                            isCurr
                              ? 'bg-primary-600 text-white font-bold shadow-xs'
                              : isDone
                              ? 'bg-primary-50/60 text-primary-900 hover:bg-primary-100'
                              : 'text-charcoal-700 hover:bg-paper-100'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            {isDone ? (
                              <CheckCircle2
                                className={`w-3.5 h-3.5 flex-shrink-0 ${
                                  isCurr ? 'text-white' : 'text-primary-600'
                                }`}
                              />
                            ) : (
                              <span
                                className={`w-3.5 h-3.5 rounded-full border border-current opacity-40 flex-shrink-0`}
                              />
                            )}
                            <span className="truncate">{l.title}</span>
                          </div>

                          {l.type === 'quiz' && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                                isCurr ? 'bg-primary-700 text-white' : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              اختبار
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ── Center Content Area ──────────────────────────────────── */}
        <main className="lg:col-span-8 space-y-6">
          
          {/* Navigation Tabs */}
          <div className="bg-white rounded-2xl p-1.5 border border-charcoal-200/80 shadow-2xs flex items-center gap-1 text-xs font-bold">
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'content'
                  ? 'bg-primary-600 text-white shadow-xs'
                  : 'text-charcoal-600 hover:bg-paper-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>محتوى الدرس</span>
            </button>

            {quizQuestions.length > 0 && (
              <button
                onClick={() => setActiveTab('quiz')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'bg-primary-600 text-white shadow-xs'
                    : 'text-charcoal-600 hover:bg-paper-100'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>الاختبار التفاعلي ({quizQuestions.length})</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'notes'
                  ? 'bg-primary-600 text-white shadow-xs'
                  : 'text-charcoal-600 hover:bg-paper-100'
              }`}
            >
              <FileEdit className="w-4 h-4" />
              <span>ملاحظاتي</span>
            </button>

            {lesson.resources && lesson.resources.length > 0 && (
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'resources'
                    ? 'bg-primary-600 text-white shadow-xs'
                    : 'text-charcoal-600 hover:bg-paper-100'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>الموارد ({lesson.resources.length})</span>
              </button>
            )}
          </div>

          {/* TAB 1: Main Reading & Theory Material */}
          {activeTab === 'content' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-xs space-y-8 animate-fade-in">
              <div className="border-b border-charcoal-100 pb-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                    {lesson.type === 'lab' ? 'معمل تطبيقي' : lesson.type === 'quiz' ? 'اختبار معرفي' : 'درس علمي'}
                  </span>
                  <span className="text-xs text-charcoal-400">⏱ {lesson.estimated_minutes} دقيقة للقراءة والتطبيق</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 leading-snug">
                  {lesson.title}
                </h2>
                {lesson.title_en && (
                  <p className="text-xs text-charcoal-400 font-sans mt-1" dir="ltr">
                    {lesson.title_en}
                  </p>
                )}
              </div>

              {/* Rich Formatted Content Body */}
              <div className="pt-2">
                <RichLessonViewer content={lesson.content} />
              </div>

              {/* Process Highlight Card / Summary Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-paper-100 to-primary-50/40 border border-primary-200/60 space-y-3">
                <div className="flex items-center gap-2 text-primary-800 font-bold text-sm">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <span>الخلاصة والمهارة العملية المستفادة:</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  تأكد دائمًا من فهم التأثير المتبادل بين جودة الألياف السليلوزية والخصائص الفيزيائية للمنتج النهائي. الانتقال للدرس التالي وتطبيق الاختبار يرسخ المعلومة في ذاكرتك المهنية.
                </p>
              </div>

              {/* Prompt to take Quiz if questions exist */}
              {quizQuestions.length > 0 && (
                <div className="pt-6 border-t border-charcoal-100 flex items-center justify-between">
                  <div className="text-xs text-charcoal-600">
                    <span className="font-bold text-charcoal-900">هل أنت مستعد لقياس استيعابك؟</span> يتوفر اختبار فوري من {quizQuestions.length} أسئلة لهذا الدرس.
                  </div>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="btn-primary py-2 px-5 text-xs font-bold"
                  >
                    ابدأ الاختبار الفوري
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Quiz Player */}
          {activeTab === 'quiz' && (
            <div className="animate-fade-in">
              <QuizPlayer
                questions={quizQuestions}
                lessonId={lesson.id}
                courseId={course.id}
                onPassed={() => completeLesson(lesson.id, course.id)}
              />
            </div>
          )}

          {/* TAB 3: Personal Notes */}
          {activeTab === 'notes' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs space-y-4 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-1">
                  دفتر الملاحظات المعملية والتجريبية
                </h3>
                <p className="text-xs text-charcoal-500">
                  سجّل أفكارك، نسب الخلط، أو أي ملاحظات ترغب في الرجوع إليها لاحقًا. يتم حفظ ملاحظاتك تلقائيًا في ملفك.
                </p>
              </div>

              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="اكتب ملاحظاتك هنا (مثال: في تجربة اليوم نسبة الماء كانت 95% ومعدل الجفاف استغرق ساعتين)..."
                rows={8}
                className="input text-sm p-4 leading-relaxed"
              />

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary-700">
                  {noteSavedFeedback ? '✓ تم حفظ الملاحظة بنجاح!' : ''}
                </span>
                <button
                  onClick={handleSaveNotes}
                  className="btn-primary py-2.5 px-6 text-xs font-bold"
                >
                  حفظ الملاحظة
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: Attached Resources */}
          {activeTab === 'resources' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs space-y-4 animate-fade-in">
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">
                الموارد والملفات المرفقة
              </h3>
              <p className="text-xs text-charcoal-500 mb-4">
                مراجع علمية، جداول قياسية، وملفات إرشادية تدعم هذا الدرس
              </p>

              <div className="space-y-3">
                {lesson.resources?.map((res) => (
                  <div
                    key={res.id}
                    className="p-4 rounded-2xl bg-paper-50 border border-charcoal-200 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                        <Download className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-charcoal-800">{res.title}</h4>
                        <span className="text-xs text-charcoal-400 font-mono">
                          {res.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-1.5 px-3 text-xs font-semibold flex items-center gap-1"
                    >
                      <span>فتح المرجع</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Footer Navigation Between Lessons ─────────────────────── */}
          <div className="bg-white rounded-2xl p-4 border border-charcoal-200/80 flex items-center justify-between gap-4">
            {prevLesson ? (
              <Link
                href={`/learn/${course.id}/${prevLesson.id}`}
                className="btn-secondary py-2.5 px-4 text-xs font-bold flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                <span className="hidden sm:inline">الدرس السابق:</span>
                <span className="truncate max-w-[120px]">{prevLesson.title}</span>
              </Link>
            ) : (
              <div />
            )}

            <button
              onClick={handleMarkCompleteAndNext}
              className="btn-primary py-2.5 px-6 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
            >
              <span>{nextLesson ? 'إكمال والانتقال للدرس التالي' : 'إكمال الدورة واستلام الشهادة 🎓'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </main>
      </div>

      {/* Course Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center border border-charcoal-200 shadow-2xl space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-primary-100 text-primary-700 mx-auto flex items-center justify-center text-4xl shadow-md">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-kraft-700 bg-kraft-100 px-3 py-1 rounded-full border border-kraft-200">
                تهانينا الحارة! 🎉
              </span>
              <h3 className="text-2xl font-black text-charcoal-900 mt-2">
                لقد أتممت دورة «{course.title}» بالكامل!
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                أكملت جميع الدروس والاختبارات التفاعلية بنجاح، وتم إصدار شهادة الإتمام المعتمدة برقم تحقق فريد باسمك.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href={`/certificates?courseId=${course.id}`}
                className="btn-primary w-full py-3.5 text-sm font-bold shadow-lg"
              >
                استعراض وطباعة شهادتي المعتمدة
              </Link>
              <Link
                href="/dashboard"
                className="btn-secondary w-full py-2.5 text-xs font-bold"
              >
                العودة إلى لوحة التحكم
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

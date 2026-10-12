'use client';

import React, { useState } from 'react';
import { QuizQuestion, QuizOption } from '@/types';
import { useProgress } from '@/lib/progress-context';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Award,
} from 'lucide-react';

interface QuizPlayerProps {
  questions: QuizQuestion[];
  lessonId: string;
  courseId: string;
  onPassed?: () => void;
}

export function QuizPlayer({
  questions,
  lessonId,
  courseId,
  onPassed,
}: QuizPlayerProps) {
  const { saveQuizAttempt, getBestQuizScore } = useProgress();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // questionId -> optionId
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasRevealed, setHasRevealed] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentIdx];
  const bestAttempt = getBestQuizScore(lessonId);

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-paper-50 rounded-2xl p-6 text-center border border-charcoal-200">
        <HelpCircle className="w-8 h-8 text-charcoal-400 mx-auto mb-2" />
        <p className="text-sm text-charcoal-600 font-medium">لا توجد أسئلة اختبار مضافة لهذا الدرس بعد.</p>
      </div>
    );
  }

  // Handle selecting an option
  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setHasRevealed((prev) => ({ ...prev, [questionId]: true }));
  };

  // Calculate score
  const correctCount = questions.filter((q) => {
    const selectedOptionId = selectedAnswers[q.id];
    const correctOption = q.options.find((opt) => opt.is_correct);
    return selectedOptionId === correctOption?.id;
  }).length;

  const scorePercentage = Math.round((correctCount / questions.length) * 100);
  const isPassed = scorePercentage >= 70;

  const handleFinishQuiz = () => {
    setIsSubmitted(true);

    // Save attempt to progress
    saveQuizAttempt({
      user_id: 'current_user',
      lesson_id: lessonId,
      score: scorePercentage,
      total_points: questions.length * 10,
      passing_score: 70,
      passed: isPassed,
      answers: questions.map((q) => {
        const selId = selectedAnswers[q.id] || '';
        const isCorr = q.options.find((opt) => opt.id === selId)?.is_correct || false;
        return {
          id: `ans-${Date.now()}-${q.id}`,
          attempt_id: `att-${Date.now()}`,
          question_id: q.id,
          selected_option_id: selId,
          is_correct: isCorr,
        };
      }),
      started_at: new Date().toISOString(),
      completed_at: new Date().toISOString(),
    });

    if (isPassed && onPassed) {
      onPassed();
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setHasRevealed({});
    setIsSubmitted(false);
    setCurrentIdx(0);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-md">
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-charcoal-100 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            اختبار قياس الاستيعاب الفوري
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">
            اختبر معلوماتك في هذا الدرس
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {bestAttempt && (
            <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-xl border border-primary-200">
              أفضل نتيجة سابقة: {bestAttempt.score}%
            </span>
          )}
          <span className="text-xs font-bold text-charcoal-500 bg-charcoal-50 px-3 py-1 rounded-xl">
            السؤال {currentIdx + 1} من {questions.length}
          </span>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="space-y-6">
          {/* Question Text */}
          <div className="bg-paper-50 p-5 rounded-2xl border border-charcoal-200/70">
            <h4 className="text-base sm:text-lg font-bold text-charcoal-900 leading-relaxed">
              {currentQuestion.question}
            </h4>
            {currentQuestion.question_en && (
              <p className="text-xs text-charcoal-400 mt-1 font-sans" dir="ltr">
                {currentQuestion.question_en}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswers[currentQuestion.id] === option.id;
              const revealed = hasRevealed[currentQuestion.id];
              const isCorrect = option.is_correct;

              let optionStyle =
                'bg-white border-charcoal-200 hover:border-primary-300 text-charcoal-800';

              if (revealed && isSelected) {
                optionStyle = isCorrect
                  ? 'bg-primary-50 border-primary-500 text-primary-900 ring-2 ring-primary-500/20'
                  : 'bg-red-50 border-red-400 text-red-900 ring-2 ring-red-400/20';
              } else if (revealed && isCorrect) {
                optionStyle = 'bg-primary-50/60 border-primary-400 text-primary-800';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                  className={`w-full p-4 rounded-2xl border text-right font-medium text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-paper-100 flex items-center justify-center text-xs font-bold text-charcoal-700">
                      {option.id.slice(-1).toUpperCase()}
                    </span>
                    <span>{option.text}</span>
                  </div>

                  {revealed && isSelected && (
                    <div>
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout (shown once answered) */}
          {hasRevealed[currentQuestion.id] && currentQuestion.explanation && (
            <div className="p-4 rounded-2xl bg-kraft-50 border border-kraft-200 text-xs sm:text-sm text-charcoal-800 space-y-1 animate-fade-in">
              <span className="font-bold text-kraft-900 flex items-center gap-1.5">
                💡 التفسير العلمي:
              </span>
              <p className="leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation between questions */}
          <div className="flex items-center justify-between pt-4 border-t border-charcoal-100">
            <button
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="btn-ghost text-xs disabled:opacity-30 disabled:pointer-events-none"
            >
              السؤال السابق
            </button>

            {currentIdx < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                className="btn-primary py-2 px-5 text-xs font-bold"
              >
                السؤال التالي
              </button>
            ) : (
              <button
                onClick={handleFinishQuiz}
                className="btn-primary py-2.5 px-6 text-xs font-bold bg-primary-700 hover:bg-primary-800"
              >
                اعتماد النتيجة وإنهاء الاختبار
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="text-center py-6 space-y-5">
          <div
            className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-3xl shadow-md ${
              isPassed ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isPassed ? <Award className="w-10 h-10" /> : <RotateCcw className="w-10 h-10" />}
          </div>

          <div>
            <h4 className="text-2xl font-bold text-charcoal-900">
              {isPassed ? 'أحسنت! اجتزت الاختبار بنجاح 🎉' : 'حاول مرة أخرى لتحسين نتيجتك'}
            </h4>
            <p className="text-sm text-charcoal-600 mt-1">
              أجبت بشكل صحيح على {correctCount} من أصل {questions.length} أسئلة بنسبة{' '}
              <span className="font-bold text-charcoal-900">{scorePercentage}%</span>
            </p>
          </div>

          <div className="max-w-xs mx-auto p-3 rounded-2xl bg-paper-100 border border-charcoal-200 text-xs text-charcoal-600">
            {isPassed ? (
              <span className="text-primary-800 font-semibold">
                ✓ تم تسجيل نقاط الإنجاز وحساب تقدم الدرس في ملفك
              </span>
            ) : (
              <span className="text-amber-800">
                درجة النجاح المطلوبة هي 70%. يمكنك مراجعة الدرس وإعادة الاختبار بحرية.
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 pt-3">
            <button onClick={handleRetry} className="btn-secondary py-2.5 px-6 text-xs font-bold">
              <RotateCcw className="w-4 h-4" /> إعادة المحاولة
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

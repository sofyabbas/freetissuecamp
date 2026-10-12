'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useProgress } from '@/lib/progress-context';
import {
  User,
  Mail,
  Flame,
  Award,
  BookOpen,
  RotateCcw,
  ShieldCheck,
  Check,
  AlertTriangle,
} from 'lucide-react';

export default function ProfilePage() {
  const { user, updateProfile, signOut } = useAuth();
  const {
    getLearningStreak,
    getTotalCompletedLessons,
    getTotalCompletedCourses,
  } = useProgress();

  const [fullName, setFullName] = useState(user?.full_name || 'طالب صناعة الورق');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const streak = getLearningStreak();
  const completedLessons = getTotalCompletedLessons();
  const completedCourses = getTotalCompletedCourses();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (updateProfile) {
      await updateProfile({ full_name: fullName });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    }
  };

  const handleResetProgress = () => {
    if (confirm('هل أنت متأكد من رغبتك في إعادة ضبط سجل التقدم لغايات الاختبار؟')) {
      if (typeof window !== 'undefined') {
        const keys = Object.keys(localStorage).filter((k) => k.startsWith('papercraft_'));
        keys.forEach((k) => localStorage.removeItem(k));
        window.location.reload();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center font-black text-3xl shadow-md">
          {fullName.charAt(0) || 'ط'}
        </div>

        <div className="space-y-1 flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-bold text-charcoal-900">{fullName}</h1>
            <span className="text-xs bg-primary-100 text-primary-800 px-2.5 py-0.5 rounded-full font-bold">
              {user?.role === 'admin' ? 'مدير المنصة' : 'متعلم نشط'}
            </span>
          </div>
          <p className="text-xs text-charcoal-500 font-mono" dir="ltr">
            {user?.email || 'learner@papercraft.academy'}
          </p>
          <p className="text-xs text-charcoal-600 pt-1">
            عضو مسجل في منصة PaperCraft Academy لعلوم وتدوير الورق
          </p>
        </div>

        <button
          onClick={signOut}
          className="btn-secondary py-2 px-5 text-xs font-bold text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
        >
          تسجيل الخروج
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs text-center space-y-1">
          <Flame className="w-7 h-7 text-amber-500 mx-auto mb-2" />
          <p className="text-2xl font-black text-charcoal-900">{streak} أيام</p>
          <p className="text-xs text-charcoal-500 font-semibold">التفاعل المتواصل</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs text-center space-y-1">
          <BookOpen className="w-7 h-7 text-primary-600 mx-auto mb-2" />
          <p className="text-2xl font-black text-charcoal-900">{completedLessons} درس</p>
          <p className="text-xs text-charcoal-500 font-semibold">الدروس المكتملة</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-2xs text-center space-y-1">
          <Award className="w-7 h-7 text-kraft-700 mx-auto mb-2" />
          <p className="text-2xl font-black text-charcoal-900">{completedCourses} شهادة</p>
          <p className="text-xs text-charcoal-500 font-semibold">الدورات المنجزة</p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-xs space-y-6">
        <h3 className="text-lg font-bold text-charcoal-900 border-b border-charcoal-100 pb-3">
          تعديل البيانات الشخصية
        </h3>

        <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
          <div>
            <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
              الاسم الكامل (يظهر في الشهادات المعتمدة):
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-700 mb-1.5">
              البريد الإلكتروني:
            </label>
            <input
              type="email"
              disabled
              value={user?.email || 'learner@papercraft.academy'}
              className="input text-sm opacity-60 cursor-not-allowed bg-charcoal-50"
              dir="ltr"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button type="submit" className="btn-primary py-2.5 px-6 text-xs font-bold">
              حفظ التعديلات
            </button>
            {saveSuccess && (
              <span className="text-xs font-semibold text-primary-700 flex items-center gap-1">
                <Check className="w-4 h-4" /> تم الحفظ بنجاح!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Developer / Testing Danger Zone */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-red-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          أدوات الاختبار والمطورين (Developer Sandbox)
        </h3>
        <p className="text-xs text-charcoal-600">
          يمكنك إعادة ضبط تقدم الدروس والشهادات المخزنة محلياً لاختبار رحلة الطالب من البداية.
        </p>
        <button
          onClick={handleResetProgress}
          className="btn-secondary py-2 px-5 text-xs font-bold text-red-700 border-red-300 hover:bg-red-50"
        >
          <RotateCcw className="w-3.5 h-3.5" /> إعادة ضبط التقدم المحلي
        </button>
      </div>

    </div>
  );
}

'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { courses, getCourseById } from '@/lib/data/seed-data';
import { useAuth } from '@/lib/auth-context';
import { useProgress } from '@/lib/progress-context';
import { CertificateView } from '@/components/certificate/CertificateView';
import { Award, Search, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';

function CertificatesContent() {
  const searchParams = useSearchParams();
  const requestedCourseId = searchParams.get('courseId');

  const { user } = useAuth();
  const { enrollments, getCourseProgress } = useProgress();

  // Find default course to show: either requestedCourseId or the first completed course, or first course as preview
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    requestedCourseId || courses[0]?.id || ''
  );

  const [verifyCodeInput, setVerifyCodeInput] = useState('');
  const [verifiedStatus, setVerifiedStatus] = useState<boolean | null>(null);

  const selectedCourse = useMemo(() => getCourseById(selectedCourseId) || courses[0], [selectedCourseId]);
  const learnerName = user?.full_name || 'مهندس صناعة التيشيو المتميز';
  const certNumber = `FTC-${selectedCourse.id.toUpperCase()}-2026`;
  const issueDate = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyCodeInput.trim()) {
      // Mock verification check
      setVerifiedStatus(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 text-kraft-900 text-xs font-bold border border-kraft-200 mb-3">
          <Award className="w-3.5 h-3.5 text-kraft-700" />
          نظام الاعتماد والشهادات الرقمية
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-2">
          الشهادات المعتمدة من PaperCraft Academy
        </h1>
        <p className="text-sm text-charcoal-600">
          شهادات موثقة برقم تحقق فريد تُمنح لكل طالب بعد إكمال جميع دروس واختبارات الدورة التدريبية.
        </p>
      </div>

      {/* Course Selector & Verification tools */}
      <div className="bg-white rounded-3xl p-6 border border-charcoal-200/80 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Certificate Selector */}
        <div className="md:col-span-7 space-y-2">
          <label className="block text-xs font-bold text-charcoal-700">
            اختر الدورة لاستعراض أو طباعة الشهادة:
          </label>
          <select
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            className="input text-sm py-2.5"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} ({c.estimated_hours} ساعات)
              </option>
            ))}
          </select>
        </div>

        {/* Verification Check Input */}
        <div className="md:col-span-5 space-y-2">
          <label className="block text-xs font-bold text-charcoal-700">
            فحص صلاحية أي شهادة برقم التحقق:
          </label>
          <form onSubmit={handleVerify} className="flex gap-2">
            <input
              type="text"
              value={verifyCodeInput}
              onChange={(e) => setVerifyCodeInput(e.target.value)}
              placeholder="مثال: PCA-COURSE-1-2026"
              className="input text-xs py-2.5"
              dir="ltr"
            />
            <button
              type="submit"
              className="btn-primary py-2.5 px-4 text-xs font-bold flex-shrink-0"
            >
              تحقق
            </button>
          </form>
        </div>

      </div>

      {verifiedStatus && (
        <div className="p-4 rounded-2xl bg-primary-50 border border-primary-200 text-primary-800 text-xs sm:text-sm flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
          <div>
            <span className="font-bold">شهادة أصلية ومعتمدة!</span> تم التحقق بنجاح من صحة السجل الأكاديمي الصادر برقم {verifyCodeInput || certNumber}.
          </div>
        </div>
      )}

      {/* Render the Certificate View */}
      <CertificateView
        learnerName={learnerName}
        courseTitle={selectedCourse.title}
        courseTitleEn={selectedCourse.title_en}
        certificateNumber={certNumber}
        issueDate={issueDate}
        skills={selectedCourse.skills}
      />

    </div>
  );
}

export default function CertificatesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-charcoal-500">جاري تحميل الشهادات...</div>}>
      <CertificatesContent />
    </Suspense>
  );
}

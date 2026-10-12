'use client';

import React from 'react';
import { Award, CheckCircle, Printer, Share2, Sparkles, ExternalLink } from 'lucide-react';

interface CertificateViewProps {
  learnerName: string;
  courseTitle: string;
  courseTitleEn?: string;
  certificateNumber: string;
  issueDate: string;
  skills?: string[];
}

export function CertificateView({
  learnerName,
  courseTitle,
  courseTitleEn,
  certificateNumber,
  issueDate,
  skills,
}: CertificateViewProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الشهادة المعتمد إلى الحافظة!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-charcoal-200/80 shadow-2xs print:hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-600">
          <CheckCircle className="w-4 h-4 text-primary-600" />
          <span>شهادة إتمام معتمدة ومسجلة في السجل الرقمي للأكاديمية</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="btn-secondary py-2 px-4 text-xs font-bold flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>مشاركة الرابط</span>
          </button>
          <button
            onClick={handlePrint}
            className="btn-primary py-2 px-5 text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>طباعة / حفظ كـ PDF</span>
          </button>
        </div>
      </div>

      {/* The Printable Certificate Container */}
      <div className="relative bg-[#faf7f0] border-[12px] border-double border-[#8b6b43] rounded-3xl p-8 sm:p-14 shadow-2xl text-center text-charcoal-900 overflow-hidden print:m-0 print:border-8 print:shadow-none print:rounded-none">
        
        {/* Subtle Watermark Texture */}
        <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none text-9xl font-black">
          FREE TISSUE CAMP
        </div>

        {/* Certificate Inner Frame */}
        <div className="relative z-10 border-2 border-dashed border-[#c8a87a]/60 rounded-2xl p-6 sm:p-10 space-y-6">
          
          {/* Header Seal & Brand */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 text-white flex items-center justify-center shadow-md">
              <span className="text-2xl font-black">📄</span>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-black text-charcoal-900 tracking-tight">
                Free Tissue Camp
              </h3>
              <p className="text-xs text-kraft-800 font-semibold">
                أكاديمية هندسة وصناعة ورق المناديل والتشيو
              </p>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="space-y-1 pt-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-800 bg-primary-100/80 px-4 py-1 rounded-full border border-primary-300">
              شهادة إتمام معتمدة • CERTIFICATE OF COMPLETION
            </span>
            <p className="text-xs text-charcoal-500 pt-2">
              تشهد أكاديمية PaperCraft Academy بأن المتدرب:
            </p>
          </div>

          {/* Recipient Full Name */}
          <div className="py-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-800 tracking-tight border-b-2 border-kraft-300 inline-block px-8 pb-2">
              {learnerName || 'المتعلم المتميز'}
            </h2>
          </div>

          {/* Course Completion Details */}
          <div className="max-w-2xl mx-auto space-y-2 text-sm text-charcoal-700 leading-relaxed">
            <p>
              قد أتم بنجاح كافة الوحدات النظرية والتطبيقات العملية والاختبارات التقييمية المقررة في دورة:
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 text-balance py-1 text-primary-900">
              « {courseTitle} »
            </h3>
            {courseTitleEn && (
              <p className="text-xs text-charcoal-500 font-sans italic" dir="ltr">
                {courseTitleEn}
              </p>
            )}
          </div>

          {/* Skills Acquired List (if any) */}
          {skills && skills.length > 0 && (
            <div className="pt-2">
              <span className="text-[11px] font-bold text-kraft-900 block mb-2">
                الكفاءات والمهارات التي تم التحقق من إتقانها:
              </span>
              <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white text-charcoal-700 px-2.5 py-0.5 rounded-md border border-kraft-200 font-medium"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Signatures & Verification Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-6 border-t border-kraft-200/80 text-xs">
            
            {/* Issue Date */}
            <div className="text-center sm:text-right space-y-1">
              <p className="text-charcoal-500 font-semibold">تاريخ الإصدار:</p>
              <p className="font-bold text-charcoal-900">{issueDate}</p>
              <p className="text-[10px] text-charcoal-400">سجل الاعتماد الإلكتروني</p>
            </div>

            {/* Official Academy Seal Stamp */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-double border-primary-700 bg-primary-50/70 flex flex-col items-center justify-center text-primary-800 shadow-xs">
                <Award className="w-7 h-7 text-primary-700" />
                <span className="text-[9px] font-black uppercase tracking-tighter">معتمد رسمياً</span>
              </div>
            </div>

            {/* Verification Code */}
            <div className="text-center sm:text-left space-y-1 font-mono" dir="ltr">
              <p className="text-charcoal-500 font-semibold font-arabic" dir="rtl">معرف التحقق:</p>
              <p className="font-bold text-primary-800 text-xs">{certificateNumber}</p>
              <p className="text-[10px] text-charcoal-400 font-arabic" dir="rtl">papercraft.academy/verify</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

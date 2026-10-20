import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, FolderGit2, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { VisitorCounter } from './VisitorCounter';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300 border-t border-charcoal-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                📄
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                FreeTissue <span className="text-primary-400">Camp</span>
              </span>
            </div>
            <p className="text-sm text-charcoal-400 leading-relaxed max-w-sm">
              أول منصة عربية مفتوحة متخصصة في هندسة وتصنيع ورق المناديل والتشيو (Tissue Papermaking & Converting)، من المبتدئ إلى مهندس التشغيل الميداني المحترف.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-400 font-semibold bg-primary-950/60 border border-primary-900/60 rounded-xl px-3 py-2 w-fit">
              <Sparkles className="w-4 h-4 text-primary-400" />
              منهج التيشيو التفاعلي المتكامل • شهادات معتمدة مجانية
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">مسارات هندسة التيشيو</h4>
            <ul className="space-y-2.5 text-xs text-charcoal-400">
              <li>
                <Link href="/courses?path=path-tissue-fundamentals" className="hover:text-primary-400 transition-colors">
                  أساسيات وخامات التيشيو
                </Link>
              </li>
              <li>
                <Link href="/courses?path=path-tissue-chemistry" className="hover:text-primary-400 transition-colors">
                  تكرير العجينة والكيمياء الرطبة
                </Link>
              </li>
              <li>
                <Link href="/courses?path=path-tissue-machine" className="hover:text-primary-400 transition-colors">
                  ماكينات Crescent Former واليانكي
                </Link>
              </li>
              <li>
                <Link href="/courses?path=path-tissue-converting-qa" className="hover:text-primary-400 transition-colors">
                  خطوط التحويل واختبارات الجودة
                </Link>
              </li>
            </ul>
          </div>

          {/* Practical tools */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">التطبيق والشهادات</h4>
            <ul className="space-y-2.5 text-xs text-charcoal-400">
              <li>
                <Link href="/projects" className="hover:text-primary-400 transition-colors">
                  المشاريع التطبيقية اليدوية
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-primary-400 transition-colors">
                  التحقق من الشهادات
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary-400 transition-colors">
                  لوحة المتابعة الشخصية
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary-400 transition-colors">
                  دليل الاختبارات التقييمية
                </Link>
              </li>
            </ul>
          </div>

          {/* Open Education */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">المجتمع والتعلم</h4>
            <p className="text-xs text-charcoal-400 leading-relaxed mb-3">
              نؤمن بأن التعليم العملي يجب أن يكون متاحاً للجميع، لنشر ثقافة التدوير والصناعات الخضراء في العالم العربي.
            </p>
            <div className="text-xs text-kraft-400 font-medium">
              🌱 معًا نحو بيئة أنقى وصناعة ورقية مستدامة
            </div>
          </div>

        </div>

        {/* Live Visitor Counter */}
        <div className="mt-12">
          <VisitorCounter />
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} أكاديمية صناعة الورق (PaperCraft Academy). جميع الحقوق محفوظة للتعليم المفتوح.</p>
          <div className="flex items-center gap-1 text-charcoal-400">
            <span>صُنع بشغف لدعم المحتوى الصناعي والبيئي</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}

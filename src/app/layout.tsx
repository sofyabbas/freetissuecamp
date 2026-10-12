import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import { ProgressProvider } from '@/lib/progress-context';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Free Tissue Camp | أكاديمية هندسة وصناعة ورق المناديل والتشيو',
  description: 'المنصة العربية الأولى المتخصصة في هندسة وعلوم تصنيع ورق المناديل والتشيو من المبتدئ إلى المحترف، تشمل خامات اليوكاليبتوس، ماكينات Crescent Former، أسطوانات اليانكي، وسكاكين الكرمشة والتحويل.',
  keywords: ['ورق المناديل', 'صناعة التيشيو', 'Tissue Paper', 'Crescent Former', 'Yankee Dryer', 'Creping', 'الكرمشة', 'FreeTissueCamp'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper-texture antialiased font-arabic text-charcoal-900">
        <AuthProvider>
          <ProgressProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

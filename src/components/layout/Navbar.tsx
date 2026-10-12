'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useProgress } from '@/lib/progress-context';
import { AuthModal } from '@/components/auth/AuthModal';
import {
  BookOpen,
  FolderGit2,
  Award,
  LayoutDashboard,
  Flame,
  User,
  LogOut,
  Menu,
  X,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const { getLearningStreak, getTotalCompletedLessons } = useProgress();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const streak = getLearningStreak();
  const completedLessons = getTotalCompletedLessons();

  const navLinks = [
    { href: '/courses', label: 'المسارات والدورات', icon: BookOpen },
    { href: '/projects', label: 'المشاريع التطبيقية', icon: FolderGit2 },
    { href: '/certificates', label: 'الشهادات', icon: Award },
    { href: '/dashboard', label: 'لوحتي التعليمية', icon: LayoutDashboard },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-charcoal-100/70 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-xl font-black">📄</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-charcoal-900 group-hover:text-primary-700 transition-colors">
                  FreeTissue <span className="text-primary-600 font-extrabold">Camp</span>
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold bg-kraft-100 text-kraft-900 px-2 py-0.5 rounded-full border border-kraft-200">
                  منهج التيشيو المتخصص
                </span>
              </div>
              <p className="text-xs text-charcoal-500 font-medium hidden md:block">
                أكاديمية علوم وهندسة صناعة ورق المناديل والتشيو
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-primary-50 text-primary-700 shadow-xs'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-primary-600' : 'text-charcoal-400'}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Streak, Points, Auth */}
          <div className="flex items-center gap-3">
            {/* Streak & Points (if active or logged in) */}
            <div className="hidden sm:flex items-center gap-2 bg-paper-100 border border-charcoal-200/60 rounded-xl px-3 py-1.5 shadow-2xs">
              <div className="flex items-center gap-1 text-xs font-bold text-amber-700" title="أيام التفاعل المتتالية">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                <span>{streak}</span>
              </div>
              <span className="text-charcoal-300">|</span>
              <div className="flex items-center gap-1 text-xs font-bold text-primary-700" title="الدروس المنجزة">
                <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                <span>{completedLessons} درس</span>
              </div>
            </div>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 bg-charcoal-50 hover:bg-charcoal-100 rounded-xl border border-charcoal-200/80 transition-all text-right"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-600 text-white font-bold text-xs flex items-center justify-center">
                    {user.full_name?.charAt(0) || 'ط'}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs font-bold text-charcoal-900 leading-tight">
                      {user.full_name}
                    </p>
                    <span className="text-[10px] text-charcoal-500">
                      {user.role === 'admin' ? 'مدير' : 'متعلم'}
                    </span>
                  </div>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-charcoal-100 py-2 z-50 animate-fade-in text-right">
                    <div className="px-4 py-2 border-b border-charcoal-100">
                      <p className="text-xs font-semibold text-charcoal-900">{user.full_name}</p>
                      <p className="text-[11px] text-charcoal-500 truncate" dir="ltr">{user.email}</p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-charcoal-50"
                    >
                      <LayoutDashboard className="w-4 h-4 text-charcoal-400" />
                      لوحة التعلم
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-charcoal-50"
                    >
                      <User className="w-4 h-4 text-charcoal-400" />
                      الملف الشخصي
                    </Link>

                    {user.role === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-50"
                      >
                        <ShieldAlert className="w-4 h-4 text-amber-600" />
                        لوحة تحكم الإدارة
                      </Link>
                    )}

                    <div className="border-t border-charcoal-100 mt-1 pt-1">
                      <button
                        onClick={async () => {
                          setIsUserMenuOpen(false);
                          await signOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 text-right"
                      >
                        <LogOut className="w-4 h-4 text-red-500" />
                        تسجيل الخروج
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="btn-primary py-2.5 px-5 text-sm font-bold shadow-sm"
              >
                تسجيل الدخول
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-charcoal-600 hover:bg-charcoal-100"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-charcoal-100 bg-white px-4 py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                    active ? 'bg-primary-50 text-primary-700' : 'text-charcoal-700 hover:bg-charcoal-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-primary-600' : 'text-charcoal-400'}`} />
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-charcoal-100 flex items-center justify-between text-xs font-medium text-charcoal-600 px-2">
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-amber-500" /> التفاعل: {streak} يوم
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-primary-600" /> المنجز: {completedLessons} درس
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

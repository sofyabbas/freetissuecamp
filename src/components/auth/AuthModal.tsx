'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { X, Mail, Lock, User as UserIcon, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export function AuthModal({ isOpen, onClose, initialMode = 'signin' }: AuthModalProps) {
  const { signIn, signUp, user } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signin') {
        const res = await signIn(email, password);
        if (res.error) {
          setError(res.error);
        } else {
          onClose();
        }
      } else {
        if (!fullName.trim()) {
          setError('يرجى إدخال الاسم الكامل');
          setLoading(false);
          return;
        }
        const res = await signUp(email, password, fullName);
        if (res.error) {
          setError(res.error);
        } else {
          onClose();
        }
      }
    } catch (err: any) {
      setError(err?.message || 'حدث خطأ غير متوقع');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async (role: 'learner' | 'admin') => {
    setLoading(true);
    setError(null);
    const demoEmail = role === 'admin' ? 'admin@papercraft.academy' : 'learner@papercraft.academy';
    const demoPass = 'demo123456';
    const demoName = role === 'admin' ? 'مدير المنصة' : 'طالب صناعة الورق';

    const res = await signIn(demoEmail, demoPass);
    if (res.error) {
      // If doesn't exist, create it
      await signUp(demoEmail, demoPass, demoName);
    }
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-charcoal-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-3 bg-gradient-to-r from-primary-600 via-primary-400 to-kraft-500" />

        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-charcoal-400 hover:text-charcoal-700 rounded-full hover:bg-charcoal-100 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-3 border border-primary-100">
              <Sparkles className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal-900">
              {mode === 'signin' ? 'مرحبًا بك مجددًا' : 'انضم إلى مجتمع صناع الورق'}
            </h2>
            <p className="text-sm text-charcoal-500 mt-1">
              {mode === 'signin'
                ? 'سجّل الدخول لمتابعة مسارك التعليمي وحفظ شهاداتك'
                : 'أنشئ حسابك المجاني وابدأ التعلم العملي اليوم'}
            </p>
          </div>

          {/* Quick Demo Buttons */}
          <div className="bg-kraft-50/70 border border-kraft-200/80 rounded-2xl p-3.5 mb-6 text-center">
            <span className="text-xs font-semibold text-kraft-900 block mb-2">
              ⚡ تجربة فورية بنقرة واحدة (بدون تسجيل):
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemo('learner')}
                disabled={loading}
                className="flex-1 py-2 px-3 text-xs font-semibold bg-white text-primary-700 hover:bg-primary-50 rounded-xl border border-primary-200 shadow-sm transition-all"
              >
                دخول كمتعلم
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('admin')}
                disabled={loading}
                className="flex-1 py-2 px-3 text-xs font-semibold bg-white text-charcoal-800 hover:bg-charcoal-50 rounded-xl border border-charcoal-200 shadow-sm transition-all"
              >
                دخول كمدير
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <UserIcon className="w-5 h-5 text-charcoal-400 absolute right-3.5 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: أحمد محمود"
                    className="input pr-11"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-charcoal-400 absolute right-3.5 top-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="input pr-11"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-charcoal-400 absolute right-3.5 top-3 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input pr-11"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 text-base mt-2"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  جاري المعالجة...
                </span>
              ) : mode === 'signin' ? (
                'تسجيل الدخول'
              ) : (
                'إنشاء الحساب مجانًا'
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-charcoal-600">
            {mode === 'signin' ? (
              <>
                ليس لديك حساب بعد؟{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setError(null);
                  }}
                  className="font-bold text-primary-600 hover:text-primary-700 underline underline-offset-4"
                >
                  أنشئ حسابك مجاناً
                </button>
              </>
            ) : (
              <>
                لديك حساب بالفعل؟{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setError(null);
                  }}
                  className="font-bold text-primary-600 hover:text-primary-700 underline underline-offset-4"
                >
                  تسجيل الدخول
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

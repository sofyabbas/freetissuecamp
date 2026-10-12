'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import type { User } from '@/types';

// ==========================================
// Demo/Local Mode for when Supabase is not configured
// Uses localStorage for persistence
// ==========================================

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isDemo: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_STORAGE_KEY = 'papercraft_demo_user';
const DEMO_USERS_KEY = 'papercraft_demo_users';

function getDemoUsers(): Record<string, { password: string; user: User }> {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(DEMO_USERS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveDemoUsers(users: Record<string, { password: string; user: User }>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users));
}

function getDemoUser(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(DEMO_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveDemoUser(user: User | null) {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(DEMO_STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isDemo = !isSupabaseConfigured();

  useEffect(() => {
    if (isDemo) {
      // Demo mode: restore from localStorage
      const demoUser = getDemoUser();
      setUser(demoUser);
      setLoading(false);
      return;
    }

    // Supabase mode
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            full_name: session.user.user_metadata?.full_name || '',
            avatar_url: session.user.user_metadata?.avatar_url,
            role: session.user.user_metadata?.role || 'learner',
            created_at: session.user.created_at,
            updated_at: session.user.updated_at || session.user.created_at,
          });
        }
      } catch (err) {
        console.error('Error getting session:', err);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          full_name: session.user.user_metadata?.full_name || '',
          avatar_url: session.user.user_metadata?.avatar_url,
          role: session.user.user_metadata?.role || 'learner',
          created_at: session.user.created_at,
          updated_at: session.user.updated_at || session.user.created_at,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [isDemo]);

  const signUp = useCallback(async (email: string, password: string, fullName: string) => {
    if (isDemo) {
      const users = getDemoUsers();
      if (users[email]) {
        return { error: 'البريد الإلكتروني مسجل بالفعل' };
      }
      const newUser: User = {
        id: `demo_${Date.now()}`,
        email,
        full_name: fullName,
        role: 'learner',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      users[email] = { password, user: newUser };
      saveDemoUsers(users);
      saveDemoUser(newUser);
      setUser(newUser);
      return {};
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role: 'learner' },
      },
    });
    if (error) return { error: error.message };
    return {};
  }, [isDemo]);

  const signIn = useCallback(async (email: string, password: string) => {
    if (isDemo) {
      const users = getDemoUsers();
      const entry = users[email];
      if (!entry || entry.password !== password) {
        return { error: 'بيانات الدخول غير صحيحة' };
      }
      saveDemoUser(entry.user);
      setUser(entry.user);
      return {};
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return {};
  }, [isDemo]);

  const signOut = useCallback(async () => {
    if (isDemo) {
      saveDemoUser(null);
      setUser(null);
      return;
    }
    await supabase.auth.signOut();
    setUser(null);
  }, [isDemo]);

  const updateProfile = useCallback(async (data: Partial<User>) => {
    if (!user) return { error: 'غير مسجل الدخول' };
    if (isDemo) {
      const updated = { ...user, ...data, updated_at: new Date().toISOString() };
      saveDemoUser(updated);
      setUser(updated);
      const users = getDemoUsers();
      if (users[user.email]) {
        users[user.email].user = updated;
        saveDemoUsers(users);
      }
      return {};
    }

    const { error } = await supabase.auth.updateUser({
      data: { full_name: data.full_name, avatar_url: data.avatar_url },
    });
    if (error) return { error: error.message };
    return {};
  }, [user, isDemo]);

  return (
    <AuthContext.Provider value={{ user, loading, isDemo, signUp, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

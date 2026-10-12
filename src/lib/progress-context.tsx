'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { useAuth } from '@/lib/auth-context';
import type { Enrollment, LessonProgress, QuizAttempt, Bookmark, Note } from '@/types';

// ==========================================
// Progress Context — localStorage persistence
// Works in both demo and Supabase modes
// ==========================================

interface ProgressContextType {
  enrollments: Enrollment[];
  lessonProgress: LessonProgress[];
  quizAttempts: QuizAttempt[];
  bookmarks: Bookmark[];
  notes: Note[];
  enrollInCourse: (courseId: string) => void;
  completeLesson: (lessonId: string, courseId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getCourseProgress: (courseId: string, totalLessons: number) => number;
  getCompletedLessonsCount: (courseId: string) => number;
  isEnrolled: (courseId: string) => boolean;
  getEnrollment: (courseId: string) => Enrollment | undefined;
  saveQuizAttempt: (attempt: Omit<QuizAttempt, 'id'>) => void;
  getQuizAttempts: (lessonId: string) => QuizAttempt[];
  getBestQuizScore: (lessonId: string) => QuizAttempt | null;
  toggleBookmark: (lessonId: string) => void;
  isBookmarked: (lessonId: string) => boolean;
  saveNote: (lessonId: string, content: string) => void;
  getNote: (lessonId: string) => Note | undefined;
  deleteNote: (lessonId: string) => void;
  getRecentActivity: () => { type: string; title: string; date: string; courseId?: string }[];
  getLearningStreak: () => number;
  getTotalCompletedLessons: () => number;
  getTotalCompletedCourses: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEYS = {
  enrollments: 'papercraft_enrollments',
  progress: 'papercraft_lesson_progress',
  quizAttempts: 'papercraft_quiz_attempts',
  bookmarks: 'papercraft_bookmarks',
  notes: 'papercraft_notes',
  activity: 'papercraft_activity',
  streakDates: 'papercraft_streak_dates',
};

function loadFromStorage<T>(key: string, userId: string): T[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(`${key}_${userId}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveToStorage<T>(key: string, userId: string, data: T[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${key}_${userId}`, JSON.stringify(data));
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userId = user?.id || 'anonymous';

  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [lessonProgress, setLessonProgress] = useState<LessonProgress[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [activities, setActivities] = useState<{ type: string; title: string; date: string; courseId?: string }[]>([]);
  const [streakDates, setStreakDates] = useState<string[]>([]);

  // Load data when user changes
  useEffect(() => {
    if (!user) {
      setEnrollments([]);
      setLessonProgress([]);
      setQuizAttempts([]);
      setBookmarks([]);
      setNotes([]);
      setActivities([]);
      setStreakDates([]);
      return;
    }
    setEnrollments(loadFromStorage(STORAGE_KEYS.enrollments, userId));
    setLessonProgress(loadFromStorage(STORAGE_KEYS.progress, userId));
    setQuizAttempts(loadFromStorage(STORAGE_KEYS.quizAttempts, userId));
    setBookmarks(loadFromStorage(STORAGE_KEYS.bookmarks, userId));
    setNotes(loadFromStorage(STORAGE_KEYS.notes, userId));
    setActivities(loadFromStorage(STORAGE_KEYS.activity, userId));
    setStreakDates(loadFromStorage(STORAGE_KEYS.streakDates, userId));
  }, [user, userId]);

  const addActivity = useCallback((type: string, title: string, courseId?: string) => {
    const newActivity = { type, title, date: new Date().toISOString(), courseId };
    setActivities(prev => {
      const updated = [newActivity, ...prev].slice(0, 50);
      saveToStorage(STORAGE_KEYS.activity, userId, updated);
      return updated;
    });
    // Update streak
    const today = new Date().toISOString().split('T')[0];
    setStreakDates(prev => {
      if (prev[0] === today) return prev;
      const updated = [today, ...prev].slice(0, 365);
      saveToStorage(STORAGE_KEYS.streakDates, userId, updated);
      return updated;
    });
  }, [userId]);

  const enrollInCourse = useCallback((courseId: string) => {
    if (!user) return;
    setEnrollments(prev => {
      if (prev.find(e => e.course_id === courseId)) return prev;
      const newEnrollment: Enrollment = {
        id: `enr_${Date.now()}`,
        user_id: userId,
        course_id: courseId,
        enrolled_at: new Date().toISOString(),
        progress_percentage: 0,
        status: 'active',
      };
      const updated = [...prev, newEnrollment];
      saveToStorage(STORAGE_KEYS.enrollments, userId, updated);
      return updated;
    });
    addActivity('course_enrolled', courseId, courseId);
  }, [user, userId, addActivity]);

  const completeLesson = useCallback((lessonId: string, courseId: string) => {
    if (!user) return;
    setLessonProgress(prev => {
      if (prev.find(p => p.lesson_id === lessonId && p.completed)) return prev;
      const newProgress: LessonProgress = {
        id: `prog_${Date.now()}`,
        user_id: userId,
        lesson_id: lessonId,
        course_id: courseId,
        completed: true,
        completed_at: new Date().toISOString(),
        time_spent_seconds: 0,
      };
      const updated = [...prev.filter(p => p.lesson_id !== lessonId), newProgress];
      saveToStorage(STORAGE_KEYS.progress, userId, updated);
      return updated;
    });
    addActivity('lesson_completed', lessonId, courseId);
  }, [user, userId, addActivity]);

  const isLessonCompleted = useCallback((lessonId: string) => {
    return lessonProgress.some(p => p.lesson_id === lessonId && p.completed);
  }, [lessonProgress]);

  const getCourseProgress = useCallback((courseId: string, totalLessons: number) => {
    if (totalLessons === 0) return 0;
    const completed = lessonProgress.filter(p => p.course_id === courseId && p.completed).length;
    return Math.round((completed / totalLessons) * 100);
  }, [lessonProgress]);

  const getCompletedLessonsCount = useCallback((courseId: string) => {
    return lessonProgress.filter(p => p.course_id === courseId && p.completed).length;
  }, [lessonProgress]);

  const isEnrolled = useCallback((courseId: string) => {
    return enrollments.some(e => e.course_id === courseId);
  }, [enrollments]);

  const getEnrollment = useCallback((courseId: string) => {
    return enrollments.find(e => e.course_id === courseId);
  }, [enrollments]);

  const saveQuizAttempt = useCallback((attempt: Omit<QuizAttempt, 'id'>) => {
    if (!user) return;
    const newAttempt: QuizAttempt = { ...attempt, id: `qa_${Date.now()}` };
    setQuizAttempts(prev => {
      const updated = [...prev, newAttempt];
      saveToStorage(STORAGE_KEYS.quizAttempts, userId, updated);
      return updated;
    });
    if (newAttempt.passed) {
      addActivity('quiz_passed', attempt.lesson_id);
    }
  }, [user, userId, addActivity]);

  const getQuizAttempts = useCallback((lessonId: string) => {
    return quizAttempts.filter(a => a.lesson_id === lessonId);
  }, [quizAttempts]);

  const getBestQuizScore = useCallback((lessonId: string) => {
    const attempts = quizAttempts.filter(a => a.lesson_id === lessonId);
    if (attempts.length === 0) return null;
    return attempts.reduce((best, curr) => curr.score > best.score ? curr : best, attempts[0]);
  }, [quizAttempts]);

  const toggleBookmark = useCallback((lessonId: string) => {
    if (!user) return;
    setBookmarks(prev => {
      const existing = prev.findIndex(b => b.lesson_id === lessonId);
      let updated: Bookmark[];
      if (existing >= 0) {
        updated = prev.filter((_, i) => i !== existing);
      } else {
        updated = [...prev, {
          id: `bm_${Date.now()}`,
          user_id: userId,
          lesson_id: lessonId,
          created_at: new Date().toISOString(),
        }];
      }
      saveToStorage(STORAGE_KEYS.bookmarks, userId, updated);
      return updated;
    });
  }, [user, userId]);

  const isBookmarked = useCallback((lessonId: string) => {
    return bookmarks.some(b => b.lesson_id === lessonId);
  }, [bookmarks]);

  const saveNote = useCallback((lessonId: string, content: string) => {
    if (!user) return;
    setNotes(prev => {
      const existing = prev.findIndex(n => n.lesson_id === lessonId);
      let updated: Note[];
      if (existing >= 0) {
        updated = prev.map((n, i) => i === existing
          ? { ...n, content, updated_at: new Date().toISOString() }
          : n
        );
      } else {
        updated = [...prev, {
          id: `note_${Date.now()}`,
          user_id: userId,
          lesson_id: lessonId,
          content,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }];
      }
      saveToStorage(STORAGE_KEYS.notes, userId, updated);
      return updated;
    });
  }, [user, userId]);

  const getNote = useCallback((lessonId: string) => {
    return notes.find(n => n.lesson_id === lessonId);
  }, [notes]);

  const deleteNote = useCallback((lessonId: string) => {
    if (!user) return;
    setNotes(prev => {
      const updated = prev.filter(n => n.lesson_id !== lessonId);
      saveToStorage(STORAGE_KEYS.notes, userId, updated);
      return updated;
    });
  }, [user, userId]);

  const getRecentActivity = useCallback(() => {
    return activities.slice(0, 20);
  }, [activities]);

  const getLearningStreak = useCallback(() => {
    if (streakDates.length === 0) return 0;
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < streakDates.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      const expectedStr = expected.toISOString().split('T')[0];
      if (streakDates[i] === expectedStr) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }, [streakDates]);

  const getTotalCompletedLessons = useCallback(() => {
    return lessonProgress.filter(p => p.completed).length;
  }, [lessonProgress]);

  const getTotalCompletedCourses = useCallback(() => {
    return enrollments.filter(e => e.status === 'completed').length;
  }, [enrollments]);

  return (
    <ProgressContext.Provider value={{
      enrollments, lessonProgress, quizAttempts, bookmarks, notes,
      enrollInCourse, completeLesson, isLessonCompleted, getCourseProgress,
      getCompletedLessonsCount, isEnrolled, getEnrollment,
      saveQuizAttempt, getQuizAttempts, getBestQuizScore,
      toggleBookmark, isBookmarked,
      saveNote, getNote, deleteNote,
      getRecentActivity, getLearningStreak,
      getTotalCompletedLessons, getTotalCompletedCourses,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

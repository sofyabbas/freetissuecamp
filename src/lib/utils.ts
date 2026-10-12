import { clsx, type ClassValue } from 'clsx';

/**
 * Combine class names with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format duration in hours/minutes for Arabic display
 */
export function formatDuration(minutes: number, locale: 'ar' | 'en' = 'ar'): string {
  if (locale === 'ar') {
    if (minutes < 60) return `${minutes} دقيقة`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) return `${hours} ساعة`;
    return `${hours} ساعة و ${remainingMinutes} دقيقة`;
  }
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Format number for Arabic display
 */
export function formatNumber(num: number, locale: 'ar' | 'en' = 'ar'): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US').format(num);
}

/**
 * Format date for Arabic display
 */
export function formatDate(date: string | Date, locale: 'ar' | 'en' = 'ar'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Format relative time (e.g., "منذ 3 أيام")
 */
export function formatRelativeTime(date: string | Date, locale: 'ar' | 'en' = 'ar'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (locale === 'ar') {
    if (diffMinutes < 1) return 'الآن';
    if (diffMinutes < 60) return `منذ ${diffMinutes} دقيقة`;
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    if (diffDays < 30) return `منذ ${diffDays} يوم`;
    return formatDate(d, locale);
  }

  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 30) return `${diffDays}d ago`;
  return formatDate(d, locale);
}

/**
 * Get difficulty label in Arabic
 */
export function getDifficultyLabel(difficulty: string, locale: 'ar' | 'en' = 'ar'): string {
  const labels: Record<string, Record<string, string>> = {
    beginner: { ar: 'مبتدئ', en: 'Beginner' },
    intermediate: { ar: 'متوسط', en: 'Intermediate' },
    advanced: { ar: 'متقدم', en: 'Advanced' },
  };
  return labels[difficulty]?.[locale] ?? difficulty;
}

/**
 * Get difficulty color class
 */
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'beginner': return 'badge-beginner';
    case 'intermediate': return 'badge-intermediate';
    case 'advanced': return 'badge-advanced';
    default: return 'badge-beginner';
  }
}

/**
 * Calculate percentage
 */
export function calculatePercentage(current: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
}

/**
 * Generate a unique certificate number
 */
export function generateCertificateNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `PCA-${timestamp}-${random}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Generate slug from Arabic or English text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0600-\u06FF-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Lesson type labels
 */
export function getLessonTypeLabel(type: string, locale: 'ar' | 'en' = 'ar'): string {
  const labels: Record<string, Record<string, string>> = {
    lesson: { ar: 'درس', en: 'Lesson' },
    workshop: { ar: 'ورشة عمل', en: 'Workshop' },
    lab: { ar: 'معمل', en: 'Lab' },
    quiz: { ar: 'اختبار', en: 'Quiz' },
    project: { ar: 'مشروع', en: 'Project' },
    review: { ar: 'مراجعة', en: 'Review' },
  };
  return labels[type]?.[locale] ?? type;
}

/**
 * Lesson type icon names (Lucide icons)
 */
export function getLessonTypeIcon(type: string): string {
  switch (type) {
    case 'lesson': return 'BookOpen';
    case 'workshop': return 'Wrench';
    case 'lab': return 'FlaskConical';
    case 'quiz': return 'ClipboardCheck';
    case 'project': return 'FolderKanban';
    case 'review': return 'RefreshCw';
    default: return 'BookOpen';
  }
}

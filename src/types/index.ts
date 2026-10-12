// ==========================================
// PaperCraft Academy — Core Type Definitions
// ==========================================

// User & Auth
export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'learner' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Profile extends User {
  bio?: string;
  location?: string;
  website?: string;
  learning_streak: number;
  total_points: number;
  courses_completed: number;
  last_active_at: string;
}

// Learning Paths
export interface LearningPath {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  icon: string;
  color: string;
  order: number;
  courses: Course[];
  total_courses: number;
  total_lessons: number;
  estimated_hours: number;
}

// Courses
export interface Course {
  id: string;
  learning_path_id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  short_description: string;
  thumbnail_url?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimated_hours: number;
  total_lessons: number;
  total_modules: number;
  skills: string[];
  requirements: string[];
  objectives: string[];
  order: number;
  is_published: boolean;
  is_free: boolean;
  created_at: string;
  updated_at: string;
  modules?: Module[];
  // Dynamic fields for authenticated users
  enrollment?: Enrollment;
  progress_percentage?: number;
}

// Modules
export interface Module {
  id: string;
  course_id: string;
  title: string;
  title_en?: string;
  description: string;
  order: number;
  lessons: Lesson[];
  total_lessons: number;
}

// Lessons
export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  title_en?: string;
  description?: string;
  description_en?: string;
  type: 'lesson' | 'workshop' | 'lab' | 'quiz' | 'project' | 'review';
  content: string;
  content_en?: string;
  estimated_minutes: number;
  order: number;
  is_free: boolean;
  video_url?: string;
  resources?: LessonResource[];
  quiz_questions?: QuizQuestion[];
  // Dynamic fields
  is_completed?: boolean;
  completed_at?: string;
}

// Lesson Resources
export interface LessonResource {
  id: string;
  lesson_id: string;
  title: string;
  type: 'pdf' | 'image' | 'video' | 'link' | 'download';
  url: string;
  size_bytes?: number;
}

// Enrollment
export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  last_lesson_id?: string;
  progress_percentage: number;
  status: 'active' | 'completed' | 'paused';
}

// Lesson Progress
export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  course_id: string;
  completed: boolean;
  completed_at?: string;
  time_spent_seconds: number;
}

// Quiz
export interface QuizQuestion {
  id: string;
  lesson_id: string;
  question: string;
  question_en?: string;
  type: 'multiple_choice' | 'true_false';
  options: QuizOption[];
  explanation: string;
  explanation_en?: string;
  order: number;
  points: number;
}

export interface QuizOption {
  id: string;
  text: string;
  text_en?: string;
  is_correct: boolean;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  lesson_id: string;
  score: number;
  total_points: number;
  passing_score: number;
  passed: boolean;
  answers: QuizAnswer[];
  started_at: string;
  completed_at: string;
}

export interface QuizAnswer {
  id: string;
  attempt_id: string;
  question_id: string;
  selected_option_id: string;
  is_correct: boolean;
}

// Projects
export interface Project {
  id: string;
  course_id?: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  objectives: string[];
  materials: string[];
  safety_notes: string[];
  steps: ProjectStep[];
  expected_results: string;
  troubleshooting: string[];
  checklist: string[];
  estimated_hours: number;
  thumbnail_url?: string;
  is_published: boolean;
}

export interface ProjectStep {
  order: number;
  title: string;
  description: string;
  image_url?: string;
  tips?: string[];
}

export interface ProjectSubmission {
  id: string;
  user_id: string;
  project_id: string;
  notes: string;
  photos: string[];
  status: 'submitted' | 'reviewed' | 'approved' | 'needs_revision';
  feedback?: string;
  submitted_at: string;
  reviewed_at?: string;
}

// Certificates
export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  certificate_number: string;
  learner_name: string;
  course_title: string;
  issued_at: string;
  verification_url: string;
}

// Bookmarks & Notes
export interface Bookmark {
  id: string;
  user_id: string;
  lesson_id: string;
  created_at: string;
}

export interface Note {
  id: string;
  user_id: string;
  lesson_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Notifications
export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'achievement';
  is_read: boolean;
  created_at: string;
  link?: string;
}

// Dashboard Stats
export interface DashboardStats {
  total_courses_enrolled: number;
  total_courses_completed: number;
  total_lessons_completed: number;
  total_quiz_score: number;
  total_certificates: number;
  learning_streak: number;
  total_time_spent_minutes: number;
  recent_activity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'lesson_completed' | 'quiz_passed' | 'course_enrolled' | 'certificate_earned' | 'project_submitted';
  title: string;
  description: string;
  created_at: string;
  course_id?: string;
  lesson_id?: string;
}

// Platform Stats (for homepage)
export interface PlatformStats {
  total_learners: number;
  total_courses: number;
  total_lessons: number;
  total_certificates_issued: number;
  total_projects: number;
}

// Admin
export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  details: string;
  created_at: string;
}

// Search & Filter
export interface CourseFilters {
  search: string;
  difficulty: string[];
  category: string[];
  learning_path_id: string;
  sort: 'popular' | 'newest' | 'title';
}

// FAQ
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order?: number;
  category?: string;
}

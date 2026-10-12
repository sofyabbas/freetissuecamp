import React from 'react';
import { cn, getDifficultyColor, getDifficultyLabel } from '@/lib/utils';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'primary' | 'kraft' | 'outline' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({
  children,
  variant = 'default',
  className,
  size = 'md',
}: BadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-3.5 py-1.5',
  };

  const variantClasses = {
    beginner: 'bg-primary-100 text-primary-800 border border-primary-200',
    intermediate: 'bg-kraft-100 text-kraft-900 border border-kraft-300',
    advanced: 'bg-amber-100 text-amber-900 border border-amber-300',
    primary: 'bg-primary-50 text-primary-700 border border-primary-200',
    kraft: 'bg-kraft-50 text-kraft-800 border border-kraft-200',
    outline: 'border border-charcoal-200 text-charcoal-700 bg-white/60',
    default: 'bg-charcoal-100 text-charcoal-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function DifficultyBadge({
  difficulty,
  locale = 'ar',
  className,
}: {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  locale?: 'ar' | 'en';
  className?: string;
}) {
  return (
    <Badge variant={difficulty} className={className}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {getDifficultyLabel(difficulty, locale)}
    </Badge>
  );
}

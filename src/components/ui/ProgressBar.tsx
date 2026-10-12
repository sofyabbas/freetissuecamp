import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number; // 0 to 100
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'primary' | 'kraft' | 'amber';
}

export function ProgressBar({
  progress,
  showLabel = false,
  size = 'md',
  className,
  color = 'primary',
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorGradients = {
    primary: 'from-primary-600 to-primary-400',
    kraft: 'from-kraft-700 to-kraft-500',
    amber: 'from-amber-600 to-amber-400',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-medium text-charcoal-600 mb-1.5">
          <span>الإنجاز</span>
          <span className="font-semibold text-primary-700">{clampedProgress}%</span>
        </div>
      )}
      <div className={cn('w-full bg-charcoal-100 rounded-full overflow-hidden shadow-inner', sizeClasses[size])}>
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-l',
            colorGradients[color]
          )}
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

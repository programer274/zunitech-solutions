import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'tech' | 'category';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        variant === 'default' &&
          'bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold px-3 py-1 rounded-full',
        variant === 'tech' &&
          'bg-brand-500/10 text-brand-400 border border-brand-500/20 text-sm font-semibold px-4 py-1.5 rounded-full',
        variant === 'category' &&
          'bg-slate-800 text-slate-300 border border-slate-700 text-xs px-3 py-1 rounded-full dark:bg-slate-800',
        className
      )}
    >
      {children}
    </span>
  );
}

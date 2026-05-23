import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className, hover, glow }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white dark:bg-dark-700/60 border-brand-500/10 backdrop-blur-sm',
        hover &&
          'transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1',
        glow && 'shadow-[0_0_0_1px_rgba(99,102,241,0.1),0_20px_48px_rgba(99,102,241,0.08)]',
        className
      )}
    >
      {children}
    </div>
  );
}

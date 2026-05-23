import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'white'
  | 'outline-white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-purple-500 text-white hover:opacity-90 shadow-lg shadow-brand-500/25',
  secondary:
    'bg-brand-500/10 text-brand-400 border border-brand-500/30 hover:bg-brand-500/20',
  outline:
    'border border-brand-500/40 text-brand-400 hover:border-brand-500 hover:bg-brand-500/10',
  ghost: 'text-slate-400 hover:text-brand-400 hover:bg-brand-500/10',
  white: 'bg-white text-brand-700 hover:bg-white/90 shadow-lg',
  'outline-white': 'border-2 border-white/80 text-white hover:bg-white/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const baseClasses =
  'rounded-xl font-semibold transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

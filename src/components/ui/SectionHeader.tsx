import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(centered && 'text-center mx-auto')}
    >
      <p className="text-xs font-bold text-brand-400 tracking-widest uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

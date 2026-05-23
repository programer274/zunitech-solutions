import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '3+', label: 'Years' },
  { value: '100%', label: 'Satisfaction' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floatingBadges = [
  { text: 'Laravel Expert', position: 'top-32 left-[8%] hidden md:block' },
  { text: '⚡ Fast Delivery', position: 'top-48 right-[10%] hidden md:block' },
  { text: '🔒 Secure Code', position: 'bottom-40 left-[12%] hidden lg:block' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 dark:bg-dark-900"
    >
      <motion.div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-60" />
      </motion.div>

      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.text}
          className={`absolute ${badge.position} px-4 py-2 rounded-xl bg-dark-800/80 border border-brand-500/20 backdrop-blur-sm text-sm text-slate-300`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {badge.text}
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-2 text-brand-400 text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Available for New Projects
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6"
        >
          Custom Laravel Development
          <br />
          <span className="gradient-text">for Growing Businesses</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We build CRM systems, POS software, REST APIs, and scalable web applications tailored to
          your business — on time, on budget, and built to last.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-4">
          <Button variant="primary" size="lg" onClick={() => scrollTo('contact')}>
            🚀 Get Free Consultation
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('portfolio')}>
            View Portfolio →
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-8 md:gap-12 mt-16 justify-center flex-wrap"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold font-serif text-brand-400">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          type="button"
          variants={itemVariants}
          onClick={() => scrollTo('services')}
          aria-label="Scroll to services"
          className="mt-16 text-slate-500 hover:text-brand-400 transition-colors mx-auto block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
}

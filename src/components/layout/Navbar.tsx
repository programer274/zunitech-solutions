import Button from '@/components/ui/Button';
import { useTheme } from '@/context/ThemeContext';
import { useScrollY } from '@/hooks/useScrollY';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', section: 'hero', path: '/' },
  { label: 'Services', section: 'services', path: '/' },
  { label: 'Portfolio', section: 'portfolio', path: '/' },
  { label: 'About', section: 'about', path: '/' },
  { label: 'Testimonials', section: 'testimonials', path: '/' },
  { label: 'Contact', section: 'contact', path: '/' },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrolled = scrollY > 40;

  const handleNavClick = (section: string) => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(section === 'hero' ? 'hero' : section);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(section === 'hero' ? '/' : `/#${section}`);
    }
  };

  const handleQuote = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled &&
          'bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border-b border-brand-500/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.25rem] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => handleNavClick('hero')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold font-serif text-lg">
            Z
          </div>
          <span className="font-bold text-lg font-serif text-slate-900 dark:text-white">
            Zunitech<span className="text-brand-400"> Solutions</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.section)}
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 hover:bg-brand-500/20 transition-all"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button variant="primary" size="sm" onClick={handleQuote} className="hidden sm:inline-flex">
            Get a Quote
          </Button>

          <button
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-brand-500/10 bg-white dark:bg-dark-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.section)}
                  className="text-left py-2 text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-white font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="primary" size="md" onClick={handleQuote} className="mt-2 w-full">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

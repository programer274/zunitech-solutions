import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { portfolio, portfolioFilters, type PortfolioFilter } from '@/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface PortfolioProps {
  showHeader?: boolean;
  fullPage?: boolean;
}

export default function Portfolio({ showHeader = true, fullPage = false }: PortfolioProps) {
  const [filter, setFilter] = useState<PortfolioFilter>('all');

  const filtered =
    filter === 'all' ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className={cn('section-padding', fullPage ? 'pt-32' : '', 'bg-slate-50 dark:bg-dark-800')}
    >
      <div className="container-max">
        {showHeader && (
          <SectionHeader
            eyebrow="Our Work"
            title="Projects That Deliver Results"
            description="Explore our portfolio of Laravel applications built for real businesses across retail, CRM, and SaaS."
            centered
          />
        )}

        {fullPage && (
          <div className="flex justify-center mb-8">
            <Badge variant="tech">{portfolio.length} Projects Delivered</Badge>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {portfolioFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                filter === f.value
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-brand-500/10 text-brand-400 border border-brand-500/20 hover:bg-brand-500/20'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card hover className="overflow-hidden h-full flex flex-col">
                  <motion.div
                    className={cn(
                      'h-48 bg-gradient-to-br to-purple-600/40 flex items-center justify-center text-6xl border-b-[3px] border-brand-500/30',
                      project.color
                    )}
                  >
                    {project.emoji}
                  </motion.div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button variant="primary" size="sm" href={project.demoUrl}>
                        Demo →
                      </Button>
                      <Button variant="outline" size="sm" href={project.githubUrl}>
                        GitHub
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

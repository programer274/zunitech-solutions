import { faqs } from '@/data';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

interface FAQProps {
  showHeader?: boolean;
}

export default function FAQ({ showHeader = true }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="container-max max-w-3xl">
        {showHeader && (
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before starting your project with us."
            centered
          />
        )}

        <div className={showHeader ? 'mt-12' : ''}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-brand-500/10">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex justify-between items-center w-full py-5 cursor-pointer text-slate-900 dark:text-white font-semibold text-left gap-4"
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-brand-400"
                  >
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

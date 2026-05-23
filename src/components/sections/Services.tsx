import Card from '@/components/ui/Card';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data';
import { DynamicIcon } from '@/lib/icons';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="container-max">
        <SectionHeader
          eyebrow="Our Services"
          title="Solutions Built for Your Business"
          description="From custom Laravel apps to full-scale SaaS platforms — we deliver production-ready software that drives results."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={index * 0.08}>
              <Card hover className="p-6 h-full flex flex-col">
                <DynamicIcon name={service.icon} className="text-brand-400 mb-4" size={32} />
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-xs"
                    >
                      <Check size={12} className="text-brand-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-4 text-sm text-brand-400 hover:text-brand-300 font-medium text-left transition-colors"
                >
                  Learn more →
                </button>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

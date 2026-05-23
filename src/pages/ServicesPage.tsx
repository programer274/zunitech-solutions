import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import { process, services } from '@/data';
import { DynamicIcon } from '@/lib/icons';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-900/40 via-dark-900 to-purple-900/30">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            End-to-end Laravel development services tailored to your business needs — from MVPs to
            enterprise-grade platforms.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-dark-800">
        <div className="container-max space-y-16">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={index * 0.05}>
              <Card className="p-8 md:p-10" hover glow={index % 2 === 0}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <DynamicIcon name={service.icon} className="text-brand-400 mb-4" size={40} />
                    <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-brand-400 mb-3">Key Benefits</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <Check size={14} className="text-brand-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Development Process"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {process.map((step, i) => (
              <RevealAnimation key={step.step} delay={i * 0.08}>
                <div className="text-center p-4">
                  <Badge variant="default" className="mb-3">
                    {step.step}
                  </Badge>
                  <DynamicIcon name={step.icon} className="text-brand-400 mx-auto mb-2" size={24} />
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs">{step.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <FAQ showHeader />
      <CTA />
    </>
  );
}

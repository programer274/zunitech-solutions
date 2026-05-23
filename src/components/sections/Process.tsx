import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { process } from '@/data';
import { DynamicIcon } from '@/lib/icons';

export default function Process() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="container-max">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Bring Your Ideas to Life"
          description="A proven, transparent workflow from discovery to deployment and beyond."
          centered
        />

        <div className="mt-16">
          <div className="hidden lg:flex items-start justify-between relative">
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-500/50 via-brand-500/20 to-transparent" />
            {process.map((step, index) => (
              <RevealAnimation key={step.step} delay={index * 0.1} className="flex-1 px-2 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-brand-500/30">
                    {step.step}
                  </div>
                  <DynamicIcon name={step.icon} className="text-brand-400 mb-3" size={24} />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="lg:hidden space-y-8">
            {process.map((step, index) => (
              <RevealAnimation key={step.step} delay={index * 0.08}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DynamicIcon name={step.icon} className="text-brand-400" size={20} />
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

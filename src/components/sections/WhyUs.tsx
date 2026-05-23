import Button from '@/components/ui/Button';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { whyUs } from '@/data';
import { DynamicIcon } from '@/lib/icons';
import { useNavigate } from 'react-router-dom';

export default function WhyUs() {
  const navigate = useNavigate();

  const startProject = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <section className="section-padding bg-dark-900 dark:bg-dark-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation direction="left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Your Trusted Laravel Development Partner"
              description="We combine deep technical expertise with a product-minded approach to deliver software that truly moves your business forward."
            />
            <p className="text-slate-400 mt-6 leading-relaxed">
              Every project is led personally by Zuni, ensuring consistent quality, clear
              communication, and code you can trust for years to come.
            </p>
            <Button variant="primary" size="lg" className="mt-8" onClick={startProject}>
              Start Your Project →
            </Button>
          </RevealAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item, index) => (
              <RevealAnimation key={item.title} delay={index * 0.06} direction="right">
                <div className="flex gap-3 p-4 rounded-xl border border-brand-500/10 bg-dark-800/50">
                  <div className="rounded-lg bg-brand-500/10 p-2 h-fit shrink-0">
                    <DynamicIcon name={item.icon} className="text-brand-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
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

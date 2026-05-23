import Card from '@/components/ui/Card';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dark-900">
      <div className="container-max">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform with custom Laravel solutions."
          centered
        />

        <p className="text-center text-2xl md:text-3xl font-bold font-serif text-brand-400 mt-8 mb-12">
          100% Client Satisfaction Rate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <RevealAnimation key={t.id} delay={index * 0.1}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

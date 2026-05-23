import Badge from '@/components/ui/Badge';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { brand, coreValues } from '@/data';

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation direction="left">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-8xl relative overflow-hidden">
                👨‍💻
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold">{brand.founder}</p>
                  <p className="text-white/70 text-sm">{brand.founderTitle}</p>
                </div>
              </div>
              <div className="absolute top-6 -right-4 bg-dark-800 border border-brand-500/20 rounded-xl p-4 shadow-xl">
                <p className="text-xs text-slate-500">Specialized in</p>
                <p className="text-white font-bold text-sm">Laravel & PHP</p>
              </div>
              <div className="absolute bottom-20 -left-4 bg-dark-800 border border-brand-500/20 rounded-xl p-4 shadow-xl">
                <p className="text-xs text-slate-500">Projects delivered</p>
                <p className="text-brand-400 font-bold text-xl">5+</p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right">
            <SectionHeader
              eyebrow="About Us"
              title="Hi, I'm Zuni — a Laravel Developer & Founder"
            />
            <p className="text-slate-400 mt-6 leading-relaxed">{brand.founderBio}</p>
            <p className="text-slate-400 mt-4 leading-relaxed">{brand.founderBioExtended}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl bg-brand-500/5 border border-brand-500/10 p-4">
                <h4 className="text-white font-semibold mb-2">Our Mission</h4>
                <p className="text-slate-400 text-sm">
                  Empower businesses with custom software that automates operations and drives
                  measurable growth.
                </p>
              </div>
              <div className="rounded-xl bg-brand-500/5 border border-brand-500/10 p-4">
                <h4 className="text-white font-semibold mb-2">Our Vision</h4>
                <p className="text-slate-400 text-sm">
                  Become the go-to Laravel partner for ambitious startups and enterprises worldwide.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {coreValues.slice(0, 4).map((value) => (
                <Badge key={value} variant="default">
                  {value}
                </Badge>
              ))}
            </div>
          </RevealAnimation>
        </div>
        </div>
    </section>
  );
}

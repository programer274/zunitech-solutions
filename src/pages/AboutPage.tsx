import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import CTA from '@/components/sections/CTA';
import { brand, coreValues } from '@/data';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            About <span className="gradient-text">Zunitech Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {brand.tagline}
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-dark-800">
        <div className="container-max max-w-3xl mx-auto text-center">
          <RevealAnimation>
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Zunitech Solutions was founded with a simple mission: help businesses leverage the power
              of Laravel to build software that actually solves problems. What started as freelance
              Laravel projects has grown into a focused agency delivering CRM systems, POS platforms,
              and SaaS products for clients worldwide.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              We believe in quality over quantity — taking on fewer projects so each one gets the
              attention, craftsmanship, and long-term support it deserves.
            </p>
          </RevealAnimation>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealAnimation direction="left">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-9xl relative overflow-hidden">
                👨‍💻
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-2xl font-bold">{brand.founder}</p>
                  <p className="text-white/70">{brand.founderTitle}</p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation direction="right">
              <SectionHeader eyebrow="Founder" title={`Meet ${brand.founder}`} />
              <p className="text-slate-400 mt-6 leading-relaxed">{brand.founderBio}</p>
              <p className="text-slate-400 mt-4 leading-relaxed">{brand.founderBioExtended}</p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-dark-800">
        <div className="container-max">
          <SectionHeader
            eyebrow="Core Values"
            title="What We Stand For"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {coreValues.map((value, i) => (
              <RevealAnimation key={value} delay={i * 0.06}>
                <Card className="p-6 text-center">
                  <p className="text-brand-400 text-2xl mb-2">✦</p>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{value}</h3>
                </Card>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <RevealAnimation>
            <Card className="p-8" glow>
              <Badge variant="default" className="mb-4">
                Mission
              </Badge>
              <h3 className="text-xl font-serif font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                Empower businesses with custom Laravel software that automates operations, reduces
                costs, and unlocks new revenue opportunities.
              </p>
            </Card>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <Card className="p-8" glow>
              <Badge variant="default" className="mb-4">
                Vision
              </Badge>
              <h3 className="text-xl font-serif font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                Become the most trusted Laravel development partner for ambitious businesses across
                the globe.
              </p>
            </Card>
          </RevealAnimation>
        </div>
        <div className="text-center mt-12">
          <Button variant="primary" size="lg" href="/#contact">
            Work With Us →
          </Button>
        </div>
      </section>

      <CTA />
    </>
  );
}

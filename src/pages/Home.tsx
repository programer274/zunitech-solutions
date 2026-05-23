import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import TechStrip from '@/components/sections/TechStrip';
import Testimonials from '@/components/sections/Testimonials';
import WhyUs from '@/components/sections/WhyUs';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Services />
      <WhyUs />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}

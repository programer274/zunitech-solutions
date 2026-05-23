import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  const goContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else navigate('/#contact');
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600 p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10" />

        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-white mb-4">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Let&apos;s discuss your project and craft a solution that drives real business results.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <Button variant="white" size="lg" onClick={goContact}>
              Schedule Free Consultation 🚀
            </Button>
            <Button variant="outline-white" size="lg" onClick={goContact}>
              Contact Us →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { brand } from '@/data';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'About', section: 'about' },
  { label: 'Services', section: 'services' },
  { label: 'Portfolio', section: 'portfolio' },
  { label: 'Testimonials', section: 'testimonials' },
  { label: 'Contact', section: 'contact' },
];

const serviceLinks = [
  'Laravel Development',
  'CRM Systems',
  'POS Software',
  'REST APIs',
  'SaaS Applications',
  'Maintenance & Support',
];

const socialIconClass =
  'w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-brand-500/20 transition-all';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section: string) => {
    if (location.pathname === '/') {
      const id = section === 'hero' ? 'hero' : section;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(section === 'hero' ? '/' : `/#${section}`);
    }
  };

  return (
    <footer className="bg-dark-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold font-serif text-lg">
                Z
              </div>
              <span className="font-bold text-lg font-serif text-white">
                Zunitech<span className="text-brand-400"> Solutions</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6">{brand.tagline}</p>
            <div className="flex gap-3">
              <a
                href={brand.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialIconClass}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialIconClass}
              >
                <MessageCircle size={18} />
              </a>
              <a href={`mailto:${brand.email}`} aria-label="Email" className={socialIconClass}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.section)}
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-brand-400 transition-colors">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.whatsappLink} className="hover:text-brand-400 transition-colors">
                  {brand.whatsapp}
                </a>
              </li>
              <li>{brand.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Zunitech Solutions. All rights reserved.</p>
          <p>Built with ❤️ using Laravel & React</p>
        </div>
      </div>
    </footer>
  );
}

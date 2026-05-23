import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { brand } from '@/data';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const contactItems = [
  { icon: MessageCircle, label: 'WhatsApp', value: brand.whatsapp, href: brand.whatsappLink },
  { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: brand.linkedin, href: brand.linkedinUrl },
  { icon: Github, label: 'GitHub', value: brand.github, href: brand.githubUrl },
];

const inputClass =
  'w-full bg-brand-500/5 border border-brand-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-all';

interface ContactProps {
  showMap?: boolean;
}

export default function Contact({ showMap = false }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Get In Touch" title="Let's Work Together" />
            <p className="text-slate-400 mt-6 leading-relaxed">
              Have a project in mind? Tell us about your goals and we&apos;ll get back to you with a
              tailored proposal.
            </p>

            {showMap && (
              <div className="mt-8 aspect-video rounded-2xl bg-dark-800 border border-brand-500/10 flex items-center justify-center text-slate-500 text-sm">
                📍 Map placeholder — Karachi, Pakistan
              </div>
            )}

            <ul className="mt-8 space-y-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-all shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-white text-sm group-hover:text-brand-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-brand-400 text-sm font-semibold">
              ⚡ We typically respond within 2 hours
            </p>

            {showMap && (
              <div className="mt-6 p-4 rounded-xl border border-brand-500/10 bg-brand-500/5">
                <p className="text-white font-semibold text-sm mb-1">Office Hours</p>
                <p className="text-slate-400 text-sm">{brand.hours}</p>
                <p className="text-slate-500 text-xs mt-2">Response guarantee: within 24 hours</p>
              </div>
            )}
          </div>

          <Card className="p-8" glow>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Name *
                  </label>
                  <input id="name" type="text" className={inputClass} placeholder="Your name" {...register('name')} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Email *
                  </label>
                  <input id="email" type="email" className={inputClass} placeholder="you@company.com" {...register('email')} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Phone
                    </label>
                    <input id="phone" type="tel" className={inputClass} placeholder="+92 300 0000000" {...register('phone')} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Company
                    </label>
                    <input id="company" type="text" className={inputClass} placeholder="Company name" {...register('company')} />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={5}
                    className={inputClass}
                    placeholder="Tell us about your project..."
                    {...register('projectDetails')}
                  />
                  {errors.projectDetails && (
                    <p className="text-red-400 text-xs mt-1">{errors.projectDetails.message}</p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

import { brand } from '@/data';

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'When you contact us through our website, email, or WhatsApp, we collect the information you choose to provide, such as your name, email address, phone number, and project details.',
      'Like most websites, our servers and third-party services may automatically collect technical information such as your IP address, browser type, device information, and the pages you visit.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use the information you provide to respond to inquiries, prepare proposals, deliver our services, and improve our website. We do not sell your personal information.',
    ],
  },
  {
    title: 'Advertising and Google AdSense',
    body: [
      'This website uses Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.',
      "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.",
      'You may opt out of personalized advertising by visiting Google Ads Settings (https://www.google.com/settings/ads). You can also opt out of some third-party vendors’ use of cookies for personalized advertising by visiting www.aboutads.info.',
      'For more information on how Google uses data, see https://policies.google.com/technologies/partner-sites.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'Cookies are small files stored on your device. We and our partners use them to remember preferences (such as light or dark mode), understand site usage, and show relevant ads. You can disable cookies in your browser settings, although some features may not work as intended.',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'We take reasonable measures to protect the information you share with us. However, no method of transmission over the Internet is completely secure.',
    ],
  },
  {
    title: 'Third-Party Links',
    body: [
      'Our website may contain links to other websites. We are not responsible for the privacy practices or content of those websites.',
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      'Our services are not directed to children under 13, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg">Last updated: October 9, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-dark-800">
        <div className="container-max max-w-3xl mx-auto space-y-10">
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            This Privacy Policy explains how {brand.company} ("we", "us", or "our") collects, uses,
            and protects information when you visit zunitechsolutions.online.
          </p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-slate-500 dark:text-slate-400 leading-relaxed mb-3"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              If you have questions about this Privacy Policy, email us at{' '}
              <a href={`mailto:${brand.email}`} className="text-brand-500 hover:underline">
                {brand.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  category: 'web-app' | 'crm' | 'pos' | 'api' | 'saas';
  demoUrl: string;
  githubUrl: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'custom-laravel',
    icon: 'Code2',
    title: 'Custom Laravel Development',
    description:
      "Tailored web applications built with Laravel's elegant syntax and powerful features for your unique business requirements.",
    benefits: ['MVC Architecture', 'Eloquent ORM', 'Blade Templates', 'Queue Jobs', 'Artisan CLI'],
  },
  {
    id: 'crm',
    icon: 'Users',
    title: 'CRM Development',
    description:
      'Streamline customer relationships with custom CRM systems that automate workflows and boost team productivity.',
    benefits: [
      'Contact Management',
      'Sales Pipeline',
      'Automated Follow-ups',
      'Reporting Dashboard',
      'Email Integration',
    ],
  },
  {
    id: 'pos',
    icon: 'ShoppingBag',
    title: 'POS & Inventory Systems',
    description:
      'Modern point-of-sale and inventory management platforms built to handle real-world retail and business operations.',
    benefits: [
      'Real-Time Inventory',
      'Barcode Scanning',
      'Multi-Branch Support',
      'Sales Analytics',
      'Receipt Printing',
    ],
  },
  {
    id: 'api',
    icon: 'Zap',
    title: 'REST API Development',
    description:
      'Secure, scalable RESTful APIs that integrate seamlessly with mobile apps, third-party services, and frontends.',
    benefits: ['JWT Authentication', 'Rate Limiting', 'Swagger Docs', 'Versioning', 'Webhook Support'],
  },
  {
    id: 'saas',
    icon: 'Cloud',
    title: 'SaaS Applications',
    description:
      'End-to-end SaaS product development with multi-tenancy, billing integration, and cloud-ready architecture.',
    benefits: [
      'Multi-Tenancy',
      'Stripe Billing',
      'Role Management',
      'Admin Dashboard',
      'Scalable Infrastructure',
    ],
  },
  {
    id: 'support',
    icon: 'HeadphonesIcon',
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support, security patches, performance optimization, and feature enhancements.',
    benefits: [
      'Bug Fixes',
      'Security Updates',
      'Performance Monitoring',
      'Feature Enhancements',
      '24h Response',
    ],
  },
];

export const portfolio: Project[] = [
  {
    id: 'pos-inventory',
    emoji: '🏪',
    title: 'POS & Inventory Management System',
    description:
      'Full-featured point of sale system with real-time inventory tracking, multi-branch support, barcode scanning, and detailed sales analytics reports.',
    tags: ['Laravel', 'MySQL', 'Vue.js', 'REST API', 'Alpine.js'],
    category: 'pos',
    demoUrl: '#',
    githubUrl: 'https://github.com/zunitech',
    color: 'from-indigo-500',
  },
  {
    id: 'crm-system',
    emoji: '👥',
    title: 'CRM System',
    description:
      'Customer relationship management platform with lead pipeline management, automated email follow-ups, task management, and performance reporting dashboards.',
    tags: ['Laravel', 'Livewire', 'MySQL', 'Redis', 'Tailwind'],
    category: 'crm',
    demoUrl: '#',
    githubUrl: 'https://github.com/zunitech',
    color: 'from-purple-500',
  },
  {
    id: 'job-portal',
    emoji: '💼',
    title: 'Job Portal',
    description:
      'Feature-rich job marketplace connecting employers and candidates with smart filtering, resume uploads, application tracking, and automated email notifications.',
    tags: ['Laravel', 'Vue.js', 'Tailwind', 'MySQL', 'S3'],
    category: 'web-app',
    demoUrl: '#',
    githubUrl: 'https://github.com/zunitech',
    color: 'from-cyan-500',
  },
  {
    id: 'donation-platform',
    emoji: '❤️',
    title: 'Donation Platform',
    description:
      'Secure fundraising platform supporting multiple campaigns, Stripe payment processing, real-time progress tracking, and campaign management dashboard.',
    tags: ['Laravel', 'Stripe', 'MySQL', 'Alpine.js', 'Livewire'],
    category: 'web-app',
    demoUrl: '#',
    githubUrl: 'https://github.com/zunitech',
    color: 'from-rose-500',
  },
  {
    id: 'restaurant-ordering',
    emoji: '🍽️',
    title: 'Real-Time Restaurant Ordering System',
    description:
      'Real-time restaurant ordering with WebSocket-powered live kitchen displays, table management, digital QR code menus, and order status tracking.',
    tags: ['Laravel', 'WebSockets', 'Vue.js', 'MySQL', 'Pusher'],
    category: 'web-app',
    demoUrl: '#',
    githubUrl: 'https://github.com/zunitech',
    color: 'from-amber-500',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Thornton',
    role: 'CEO',
    company: 'RetailEdge UK',
    text: 'Zunitech built our inventory and POS system from the ground up. The quality of code and attention to detail was exceptional. Delivery was on time and exactly what we envisioned. We\'ve already commissioned a second project.',
    avatar: 'JT',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sara Al-Mansouri',
    role: 'Operations Director',
    company: 'Gulf CRM Co.',
    text: 'Our CRM was a complex requirement. Zuni understood our workflow immediately and delivered a robust, user-friendly system. Our team\'s efficiency improved by 40% within weeks of going live.',
    avatar: 'SA',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'FoodFlow App',
    text: 'The real-time restaurant ordering system exceeded every expectation. WebSocket integration was flawless and the UX was beautiful. I\'d recommend Zunitech to any startup looking for reliable Laravel expertise.',
    avatar: 'MC',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does a project take?',
    answer:
      'Project timelines vary based on complexity. A simple web application takes 4–6 weeks, while a full CRM or SaaS product may take 3–6 months. We provide a detailed timeline estimate after the discovery and planning phase.',
  },
  {
    id: '2',
    question: 'What technologies do you use?',
    answer:
      'We specialize in Laravel (PHP), MySQL, JavaScript, Vue.js, Livewire, Tailwind CSS, and REST APIs. We also integrate with AWS, Stripe, Pusher, and other third-party services as needed by your project.',
  },
  {
    id: '3',
    question: 'Do you provide ongoing support?',
    answer:
      "Yes. We offer flexible maintenance and support packages covering bug fixes, security updates, performance monitoring, and feature enhancements post-launch. We're your long-term tech partner.",
  },
  {
    id: '4',
    question: 'Can you work with existing systems?',
    answer:
      'Absolutely. We have extensive experience auditing and extending legacy systems, migrating databases, and integrating new modules into existing Laravel or PHP applications without disrupting operations.',
  },
  {
    id: '5',
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We take confidentiality seriously and are happy to sign Non-Disclosure Agreements before any project discussion begins. Your ideas and business information are always protected.',
  },
];

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We deep-dive into your business goals, pain points, and technical requirements through structured workshops and interviews.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Architecture design, technology stack selection, database schema, and a detailed project roadmap with milestones.',
    icon: 'FileText',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'Agile sprints with weekly demos, daily progress updates, code reviews, and transparent GitHub access.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Testing',
    description:
      'Rigorous QA testing, automated unit and feature tests, security audits, and cross-browser performance checks.',
    icon: 'CheckCircle',
  },
  {
    step: '05',
    title: 'Deployment & Support',
    description:
      'Smooth production launch, server setup, monitoring configuration, and ongoing technical support.',
    icon: 'Rocket',
  },
];

export const techs: Tech[] = [
  { name: 'Laravel', icon: '⚡' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'REST API', icon: '🔗' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Redis', icon: '🔴' },
];

export const whyUs: WhyUsItem[] = [
  {
    icon: 'Sparkles',
    title: 'Clean, Maintainable Code',
    description:
      'Every line written with clarity and SOLID principles — future-proof and easy to extend.',
  },
  {
    icon: 'BarChart3',
    title: 'Scalable Architecture',
    description: 'Designed to grow with your business with no costly rewrites down the line.',
  },
  {
    icon: 'Shield',
    title: 'Secure Development',
    description:
      'Security-first approach following OWASP standards with regular audits and patching.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    description: 'Strict milestone-based project management with transparent progress tracking.',
  },
  {
    icon: 'Headphones',
    title: 'Ongoing Support',
    description: 'We are your long-term technology partner, not just a one-off development agency.',
  },
  {
    icon: 'MessageCircle',
    title: 'Transparent Communication',
    description:
      'Daily updates, clear documentation, and always reachable through your preferred channel.',
  },
];

export const brand = {
  company: 'Zunitech Solutions',
  tagline: 'Custom Software Solutions for Modern Businesses',
  founder: 'Zuni',
  founderTitle: 'Laravel Developer & Founder',
  founderBio:
    "Hi, I'm Zuni, a Laravel developer and founder of Zunitech Solutions. I help businesses automate operations and scale using custom web applications built with Laravel, PHP, MySQL, and modern frontend technologies.",
  founderBioExtended:
    'With years of hands-on experience building production-grade applications, I combine deep Laravel expertise with a product-minded approach. Every project starts with understanding your business — not just your tech stack.',
  email: 'hello@zunitech.com',
  whatsapp: '+92 307 3213936',
  whatsappLink: 'https://wa.me/923073213936',
  linkedin: 'linkedin.com/in/muhammad-zain-ul-abideen-35120b2b7',
  linkedinUrl:
    'https://www.linkedin.com/in/muhammad-zain-ul-abideen-35120b2b7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  hours: 'Available Mon–Sat, 9am–6pm PKT',
};

export const coreValues = [
  'Quality First',
  'Client-Focused',
  'Always Learning',
  'Long-term Partner',
  'Transparent Delivery',
  'Security First',
];

export type PortfolioFilter = 'all' | 'crm' | 'pos' | 'web-app' | 'api' | 'saas';

export const portfolioFilters: { label: string; value: PortfolioFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'CRM', value: 'crm' },
  { label: 'POS', value: 'pos' },
  { label: 'Web App', value: 'web-app' },
  { label: 'API', value: 'api' },
  { label: 'SaaS', value: 'saas' },
];

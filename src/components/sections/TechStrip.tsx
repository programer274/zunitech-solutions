import Badge from '@/components/ui/Badge';
import { techs } from '@/data';

export default function TechStrip() {
  return (
    <section className="py-10 px-6 border-y border-brand-500/10 bg-dark-800/50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase mb-6">
          Trusted Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <Badge
              key={tech.name}
              variant="tech"
              className="hover:border-brand-500/50 hover:bg-brand-500/15 transition-all cursor-default"
            >
              <span className="mr-1.5">{tech.icon}</span>
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

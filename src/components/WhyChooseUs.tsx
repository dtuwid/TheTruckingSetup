import { useReveal, useCountUp } from '../lib/hooks';
import { Building2, FileText, Smile, MapPin } from 'lucide-react';

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Businesses Started' },
  { icon: FileText, value: 1000, suffix: '+', label: 'Authorities Processed' },
  { icon: Smile, value: 95, suffix: '%', label: 'Client Satisfaction' },
  { icon: MapPin, value: null, suffix: '', label: 'Nationwide Service', isText: true },
];

function StatCard({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const count = useCountUp(stat.value ?? 0, 2000, start && !stat.isText);

  return (
    <div className="glass-card p-6 lg:p-8 text-center group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600/30 to-navy-800/30 border border-navy-500/20 flex items-center justify-center mx-auto mb-5 group-hover:from-accent-500 group-hover:to-accent-600 group-hover:border-accent-400/30 transition-all duration-500 group-hover:scale-110">
        <stat.icon className="w-7 h-7 text-navy-300 group-hover:text-white transition-colors duration-500" />
      </div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
        {stat.isText ? (
          <span className="text-gradient-accent">USA</span>
        ) : (
          <span className="tabular-nums">{count}{stat.suffix}</span>
        )}
      </div>
      <div className="text-sm text-ink-300 font-medium">{stat.label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-navy-950/30 to-ink-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-navy-600/10 rounded-full blur-[120px]" />

      <div className="relative section-pad max-w-7xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-accent-400 mb-5">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-5 leading-tight">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-ink-300 text-lg max-w-2xl mx-auto">
            We simplify the complicated process of starting a trucking company so you can focus
            on building a profitable business.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

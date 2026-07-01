import { useReveal } from '../lib/hooks';
import { Calendar, FileCheck, Hash, ShieldCheck, Truck, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Calendar, title: 'Schedule Your Consultation', desc: 'Book a free call to discuss your goals and timeline.' },
  { icon: FileCheck, title: 'We Register Your Business', desc: 'LLC formation, EIN, and all documentation handled for you.' },
  { icon: Hash, title: 'Obtain MC & DOT Authority', desc: 'We file your Motor Carrier and DOT applications correctly.' },
  { icon: ShieldCheck, title: 'Insurance & Compliance', desc: 'Secure coverage and meet all federal requirements.' },
  { icon: Truck, title: 'Start Hauling Loads', desc: 'Hit the road with dispatch support and profitable freight.' },
  { icon: TrendingUp, title: 'Grow Your Trucking Business', desc: 'Scale with ongoing consulting and growth strategy.' },
];

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''} relative`}
    >
      <div className="glass-card p-6 h-full group relative overflow-hidden">
        {/* Step number */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform duration-500">
            <step.icon className="w-7 h-7 text-white" />
          </div>
          <span className="font-display font-extrabold text-4xl sm:text-5xl text-white/5 group-hover:text-white/10 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
        <p className="text-sm text-ink-300 leading-relaxed">{step.desc}</p>

        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Connector arrow (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-3 z-10 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center">
            <svg className="w-3 h-3 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="section-pad max-w-7xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-accent-400 mb-5">
            How It Works
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-5 leading-tight">
            From Idea to Hauling in Six Simple Steps
          </h2>
          <p className="text-ink-300 text-lg">
            A clear, proven roadmap that takes you from zero to profitable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

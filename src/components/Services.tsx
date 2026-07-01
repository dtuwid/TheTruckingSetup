import {
  FileText,
  Hash,
  ShieldCheck,
  Building2,
  ClipboardList,
  Scale,
  Radio,
  Lightbulb,
} from 'lucide-react';
import { useReveal } from '../lib/hooks';

const services = [
  {
    icon: FileText,
    title: 'MC Authority Registration',
    desc: 'We handle your Motor Carrier Authority application from start to finish.',
  },
  {
    icon: Hash,
    title: 'DOT Number Registration',
    desc: 'Get your USDOT number filed correctly and quickly.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial Insurance Assistance',
    desc: 'Connect with trusted insurance providers to secure the coverage your business needs.',
  },
  {
    icon: Building2,
    title: 'Business Formation',
    desc: 'LLC setup, EIN registration, operating agreements, and compliance guidance.',
  },
  {
    icon: ClipboardList,
    title: 'Permits & Documentation',
    desc: 'We prepare and organize all required trucking documents and registrations.',
  },
  {
    icon: Scale,
    title: 'Compliance Support',
    desc: 'Stay compliant with federal regulations and avoid costly mistakes.',
  },
  {
    icon: Radio,
    title: 'Dispatch Services',
    desc: 'Once your company is active, we help you secure quality freight and consistent loads so your trucks stay moving.',
  },
  {
    icon: Lightbulb,
    title: 'Business Consulting',
    desc: 'Receive one-on-one guidance from experienced trucking consultants to help grow your company.',
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, isVisible } = useReveal();
  const delay = `reveal-delay-${(index % 4) + 1}`;

  return (
    <div
      ref={ref}
      className={`reveal ${delay} ${isVisible ? 'is-visible' : ''} glass-card p-7 group relative overflow-hidden`}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-600/0 via-navy-600/0 to-accent-500/0 group-hover:from-navy-600/5 group-hover:to-accent-500/10 transition-all duration-500" />

      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 border border-white/10 flex items-center justify-center mb-5 group-hover:from-accent-500 group-hover:to-accent-600 group-hover:border-accent-400/30 transition-all duration-500 group-hover:scale-110">
          <service.icon className="w-7 h-7 text-accent-400 group-hover:text-white transition-colors duration-500" />
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-accent-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-ink-300 leading-relaxed">{service.desc}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-px -right-px w-20 h-20 bg-gradient-to-tl from-accent-500/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="section-pad max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-accent-400 mb-5">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-5 leading-tight">
            Everything You Need to Launch Your Trucking Business
          </h2>
          <p className="text-ink-300 text-lg">
            From paperwork to profitable loads — we cover every step of your journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

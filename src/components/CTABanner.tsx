import { useReveal } from '../lib/hooks';
import { ArrowRight, Truck } from 'lucide-react';

export default function CTABanner() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="section-pad max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative rounded-3xl overflow-hidden`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2675067/pexels-photo-2675067.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Semi-truck on the open highway"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
          </div>

          {/* Content */}
          <div className="relative px-8 sm:px-12 lg:px-16 py-16 lg:py-24 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Truck className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Get Started</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to Start Your Trucking Business?
            </h2>

            <p className="text-lg text-ink-200 mb-8 leading-relaxed">
              Turn your dream into a profitable trucking company with expert guidance
              every step of the way.
            </p>

            <a href="#contact" className="btn-primary group text-base">
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

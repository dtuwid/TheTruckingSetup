import { ArrowRight, Zap, ShieldCheck, Radio, TrendingUp, Star } from 'lucide-react';

const trustBadges = [
  { icon: Zap, label: 'Fast Business Setup' },
  { icon: ShieldCheck, label: 'DOT & MC Experts' },
  { icon: Radio, label: 'Dispatch Support' },
  { icon: TrendingUp, label: 'Ongoing Consulting' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-slate-50 to-slate-50 dark:from-navy-950/40 dark:via-ink-950 dark:to-ink-950" />
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-glow" />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-navy-400/10 dark:bg-navy-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 section-pad max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-down">
              <span className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-accent-500 dark:text-accent-400 fill-accent-500 dark:fill-accent-400" />
                ))}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-ink-200">Trusted by 500+ trucking entrepreneurs</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up">
              <span className="text-gradient">Start Your Own</span>
              <br />
              <span className="text-gradient">Trucking Company—</span>
              <br />
              <span className="text-gradient-accent text-shadow-glow">We'll Handle the Hard Part.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-ink-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up [animation-delay:0.15s] opacity-0">
              Launch your trucking business with confidence. We help you obtain your MC Authority,
              DOT Number, commercial insurance, business documentation, compliance, and provide
              dispatch services to keep your trucks moving with profitable loads.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up [animation-delay:0.3s] opacity-0">
              <a href="#contact" className="btn-primary group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="btn-secondary group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 animate-fade-up [animation-delay:0.45s] opacity-0">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="glass-card !rounded-xl p-3 flex flex-col items-center gap-2 text-center"
                >
                  <badge.icon className="w-5 h-5 text-accent-500 dark:text-accent-400" />
                  <span className="text-xs font-medium text-slate-600 dark:text-ink-200 leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero visual */}
          <div className="lg:col-span-5 relative animate-scale-in [animation-delay:0.2s] opacity-0 mt-8 lg:mt-0">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden glass-card !rounded-3xl p-2">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-ink-900 aspect-[16/10] flex items-center justify-center">
                  <img
                    src="/image.png"
                    alt="Modern semi-truck on the highway at sunset"
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-dark rounded-2xl p-4 shadow-2xl animate-float items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-slate-800 dark:text-white">95%</div>
                  <div className="text-xs text-slate-500 dark:text-ink-300">Client Satisfaction</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 glass-dark rounded-2xl px-4 py-3 shadow-2xl animate-float [animation-delay:1s] items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-navy-500 dark:text-navy-400" />
                <span className="text-sm font-semibold text-slate-800 dark:text-white">MC & DOT Filed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-ink-950 to-transparent pointer-events-none" />
    </section>
  );
}

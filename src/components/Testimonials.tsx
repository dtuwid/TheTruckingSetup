import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '../lib/hooks';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I had no idea where to begin. They handled every step and had my trucking company ready to operate faster than I expected.",
    name: 'Marcus T.',
    role: 'Owner-Operator, Atlanta GA',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: "Within weeks I had my authority, insurance, and my first loads. Highly recommended for anyone starting out in trucking.",
    name: 'Jasmine R.',
    role: 'Fleet Owner, Dallas TX',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: "The process was simple and stress-free. Great communication from beginning to end. They truly care about your success.",
    name: 'David K.',
    role: 'New Entrepreneur, Phoenix AZ',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useReveal();

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-navy-950/20 to-ink-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px]" />

      <div className="relative section-pad max-w-5xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-accent-400 mb-5">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-5 leading-tight">
            Real Stories. Real Success.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="glass-card !rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5" />

            {/* Slides */}
            <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ${
                    i === active
                      ? 'opacity-100 translate-x-0 pointer-events-auto'
                      : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 text-accent-400 fill-accent-400" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-ink-100 leading-relaxed mb-8 max-w-3xl font-medium">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent-500/30"
                    />
                    <div className="text-left">
                      <div className="font-display font-bold text-white">{t.name}</div>
                      <div className="text-sm text-ink-300">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-accent-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

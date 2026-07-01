import { useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {expanded ? (
        <div className="glass-dark rounded-2xl p-5 shadow-2xl w-72 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-white">Free Consultation</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-ink-300"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-ink-300 mb-4">
            Book a free 30-minute call with our trucking experts. We'll walk you through every step.
          </p>
          <a href="#contact" onClick={() => setExpanded(false)} className="btn-primary w-full justify-center text-sm">
            Book Now
          </a>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 shadow-xl shadow-accent-500/40 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Book a free consultation"
        >
          <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-20" />
          <Calendar className="w-6 h-6 text-white relative z-10" />
        </button>
      )}
    </div>
  );
}

import { useState } from 'react';
import { useReveal } from '../lib/hooks';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does the process take?',
    a: 'The full process — from business formation to active MC Authority — typically takes 3 to 6 weeks. DOT numbers are usually issued within days, while MC Authority requires a mandatory 21-day waiting period after application. We expedite everything we can on our end to get you on the road as fast as possible.',
  },
  {
    q: 'What documents do I need?',
    a: 'You will need a valid driver\'s license, your business name preference, and basic information about your operation (type of trucking, states you plan to operate in, etc.). If you already have a truck, we will need vehicle details for insurance. We provide a complete checklist after your consultation and handle all the filing paperwork for you.',
  },
  {
    q: 'Can you help if I don\'t own a truck yet?',
    a: 'Absolutely. Many of our clients start the process before purchasing a truck. We can set up your business entity, file your authority, and get everything ready so that when you do acquire a truck, you are ready to haul immediately. We also advise on truck purchasing and leasing options.',
  },
  {
    q: 'Do you provide dispatch services?',
    a: 'Yes. Once your company is active and insured, our dispatch team helps you find quality freight and consistent loads. We work with brokers and shippers to keep your trucks moving profitably, handling rate negotiation and load booking so you can focus on driving.',
  },
  {
    q: 'Can you help with insurance?',
    a: 'We connect you with trusted commercial insurance providers who specialize in trucking. We help you understand what coverage you need — primary liability, physical damage, cargo, and more — and guide you through securing the right policy at competitive rates.',
  },
  {
    q: 'Do you work nationwide?',
    a: 'Yes, we assist clients across all 50 states. Whether you are operating intrastate or interstate, our team understands the specific requirements for your jurisdiction and ensures full compliance no matter where you are based.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`glass-card overflow-hidden transition-all duration-300 ${
        isOpen ? '!bg-white/[0.06] !border-white/20' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
      >
        <span className="flex items-center gap-4">
          <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
            isOpen ? 'bg-accent-500 text-white' : 'bg-white/5 text-ink-300 group-hover:text-white'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display font-semibold text-base sm:text-lg text-white">{faq.q}</span>
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-accent-500/20 text-accent-400 rotate-0' : 'bg-white/5 text-ink-300 group-hover:text-white'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem] text-ink-300 leading-relaxed text-sm sm:text-base">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useReveal();

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="section-pad max-w-4xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-accent-400 mb-5">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-5 leading-tight">
            Questions? We've Got Answers.
          </h2>
          <p className="text-ink-300 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

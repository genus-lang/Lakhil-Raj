import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

interface TeamHeroProps {
  eyebrow: string;
  heading: string;
  subtext: string;
}

export function TeamHero({ eyebrow, heading, subtext }: TeamHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#F9FAFB] dark:bg-[#0B1F1D] py-4 md:py-5 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-xl px-6 py-6 md:py-7 relative overflow-hidden shadow-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center max-w-[700px] mx-auto relative z-10">
            {/* Icon + Eyebrow inline */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users size={18} className="text-white" />
              <p className="text-[12px] font-semibold text-white/90 tracking-wider uppercase font-['Inter',sans-serif]">
                {eyebrow}
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[24px] md:text-[28px] font-bold text-white mb-2 font-['Poppins',sans-serif] leading-tight">
              {heading}
            </h1>

            {/* Subtext */}
            <p className="text-[14px] md:text-[15px] text-white/90 font-['Inter',sans-serif] leading-snug">
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

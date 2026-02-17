  import { useEffect, useState } from 'react';

interface AboutPageHeroProps {
  eyebrow: string;
  heading: string;
  subtext: string;
}

export function AboutPageHero({ eyebrow, heading, subtext }: AboutPageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#F9FAFB] dark:bg-[#112F2B] py-16 md:py-20 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`text-center max-w-[800px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Eyebrow */}
          <p className="text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] mb-3 tracking-wide uppercase font-['Inter',sans-serif]">
            {eyebrow}
          </p>

          {/* Main Heading */}
          <h1 className="text-[36px] md:text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
            {heading}
          </h1>

          {/* Subtext */}
          <p className="text-[16px] md:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
}

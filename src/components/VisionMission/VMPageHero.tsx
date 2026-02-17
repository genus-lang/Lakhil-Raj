import { useEffect, useState } from 'react';

interface VMPageHeroProps {
  eyebrow: string;
  heading: string;
  subtext: string;
}

export function VMPageHero({ eyebrow, heading, subtext }: VMPageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] dark:from-[#0B1F1D] dark:to-[#112F2B] py-16 md:py-20 transition-colors duration-200 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGhvcGUlMjBmdXR1cmUlMjBsZWFybmluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3Njk3NzEyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      />
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAFB]/80 via-[#F9FAFB]/60 to-transparent dark:from-[#0B1F1D]/90 dark:via-[#0B1F1D]/70 dark:to-[#0B1F1D]/50" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className={`max-w-[800px] transition-all duration-700 ${
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

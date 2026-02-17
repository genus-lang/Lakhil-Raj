import { useEffect, useState } from 'react';

interface CTABannerProps {
  text: string;
  buttonText: string;
}

export function CTABanner({ text, buttonText }: CTABannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('cta-banner');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="cta-banner" className="bg-gradient-to-r from-[#1E7A6E] to-[#176b60] dark:from-[#0B1F1D] dark:to-[#112F2B] py-16 md:py-20 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`text-center max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Text */}
          <p className="text-[24px] md:text-[28px] font-semibold text-white dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif] leading-snug">
            {text}
          </p>

          {/* Button */}
          <a
            href="/volunteer"
            className="inline-block bg-white dark:bg-[#4FD1C5] text-[#1E7A6E] dark:text-[#0B1F1D] px-8 py-3 rounded-lg font-semibold text-[16px] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl font-['Inter',sans-serif]"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

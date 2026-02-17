import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function StrongCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useThemeLanguage();

  const t = (key: string) => homePageTranslations[key]?.[language] || key;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('strong-cta-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="strong-cta-section"
      className="bg-gradient-to-r from-[#1E7A6E] to-[#176b60] dark:from-[#1F4D47] dark:to-[#0B1F1D] py-12 md:py-16 relative overflow-hidden transition-colors duration-200"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 font-['Poppins',sans-serif] leading-tight">
            {t('strongCTA.heading')}
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[16px] md:text-[18px] text-white/90 font-['Inter',sans-serif]">
            {t('strongCTA.subtitle')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="bg-white text-[#1E7A6E] dark:text-[#0B1F1D] px-10 py-4 rounded-lg hover:bg-[#F9FAFB] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 font-bold group">
            <span className="inline-block group-hover:scale-110 transition-transform">
              {t('strongCTA.btn1')}
            </span>
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-[#1E7A6E] dark:hover:text-[#0B1F1D] hover:scale-110 active:scale-95 transition-all duration-300 font-bold">
            {t('strongCTA.btn2')}
          </button>
        </div>
      </div>
    </section>
  );
}

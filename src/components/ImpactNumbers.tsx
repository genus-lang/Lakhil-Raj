import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function ImpactNumbers() {
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
      { threshold: 0.2 }
    );

    const section = document.getElementById('impact-numbers-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const metrics = [
    { number: '1000+', labelKey: 'impactNumbers.metric1' },
    { number: '50+', labelKey: 'impactNumbers.metric2' },
    { number: '15+', labelKey: 'impactNumbers.metric3' },
    { number: '10+', labelKey: 'impactNumbers.metric4' },
  ];

  return (
    <section id="impact-numbers-section" className="bg-gradient-to-br from-[#1E7A6E] to-[#176b60] dark:from-[#1F4D47] dark:to-[#0B1F1D] py-12 md:py-16 text-white transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold font-['Poppins',sans-serif] leading-tight mb-4">
            {t('impactNumbers.heading')}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[48px] md:text-[56px] font-bold leading-none mb-2 font-['Poppins',sans-serif]">
                {metric.number}
              </div>
              <div className="text-[14px] md:text-[15px] text-white/90 font-['Inter',sans-serif]">
                {t(metric.labelKey)}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className={`text-center max-w-[800px] mx-auto transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[16px] text-white/90 leading-relaxed mb-6 font-['Inter',sans-serif]">
            {t('impactNumbers.desc')}
          </p>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1E7A6E] dark:hover:text-[#0B1F1D] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold">
            {t('impactNumbers.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

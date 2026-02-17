import { School, Users, Target, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function TrustRecognitionStrip() {
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

    const section = document.getElementById('trust-strip');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const items = [
    { icon: <School size={20} />, textKey: 'trust.item1' },
    { icon: <Users size={20} />, textKey: 'trust.item2' },
    { icon: <Target size={20} />, textKey: 'trust.item3' },
    { icon: <Heart size={20} />, textKey: 'trust.item4' },
  ];

  return (
    <section id="trust-strip" className="bg-[#F3F4F6] dark:bg-[#1F4D47] py-6 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 bg-white dark:bg-[#112F2B] rounded-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-snug">
                {t(item.textKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Code, Megaphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VolunteerCommunity() {
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
      { threshold: 0.1 }
    );

    const section = document.getElementById('volunteer-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const types = [
    {
      icon: <GraduationCap size={28} />,
      titleKey: 'volunteer.type1',
      descKey: 'volunteer.type1.desc',
    },
    {
      icon: <Code size={28} />,
      titleKey: 'volunteer.type2',
      descKey: 'volunteer.type2.desc',
    },
    {
      icon: <Megaphone size={28} />,
      titleKey: 'volunteer.type3',
      descKey: 'volunteer.type3.desc',
    },
  ];

  return (
    <section id="volunteer-section" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Content */}
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
              {t('volunteer.heading')}
            </h2>

            <p className="text-[16px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
              {t('volunteer.subtitle')}
            </p>

            {/* Volunteer Types */}
            <div className="space-y-4">
              {types.map((type, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-white dark:bg-[#1F4D47] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <div className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                      {t(type.titleKey)}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t(type.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-4 bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-8 py-3 rounded-lg hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 font-semibold">
              {t('volunteer.cta')}
            </button>
          </div>

          {/* Right - Image */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="rounded-[16px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTc2NDYyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteers working together"
                className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

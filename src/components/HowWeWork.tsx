import { Search, Users, MessageCircle, BarChart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function HowWeWork() {
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

    const section = document.getElementById('how-we-work-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const steps = [
    { icon: <Search size={32} />, textKey: 'howWeWork.step1', number: '01' },
    { icon: <Users size={32} />, textKey: 'howWeWork.step2', number: '02' },
    { icon: <MessageCircle size={32} />, textKey: 'howWeWork.step3', number: '03' },
    { icon: <BarChart size={32} />, textKey: 'howWeWork.step4', number: '04' },
  ];

  return (
    <section id="how-we-work-section" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('howWeWork.heading')}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-[#1F4D47] rounded-[16px] p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute top-3 right-3 text-[28px] font-bold text-[#1E7A6E]/10 dark:text-[#4FD1C5]/10 font-['Poppins',sans-serif]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-full text-[#1E7A6E] dark:text-[#4FD1C5] mb-4">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                {t(step.textKey)}
              </h3>

              {/* Connector Line (not on last item on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

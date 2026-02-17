import { Monitor, Compass, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function ProblemSection() {
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

    const section = document.getElementById('problem-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const problems = [
    {
      icon: <Monitor size={32} />,
      titleKey: 'problem.card1.title',
      descKey: 'problem.card1.desc',
    },
    {
      icon: <Compass size={32} />,
      titleKey: 'problem.card2.title',
      descKey: 'problem.card2.desc',
    },
    {
      icon: <Shield size={32} />,
      titleKey: 'problem.card3.title',
      descKey: 'problem.card3.desc',
    },
  ];

  return (
    <section id="problem-section" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('problem.heading')}
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1F4D47] rounded-[16px] p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-[#1E7A6E] dark:text-[#4FD1C5] mb-4">
                {problem.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
                {t(problem.titleKey)}
              </h3>
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
                {t(problem.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

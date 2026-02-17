import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StoriesFromGround() {
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

    const section = document.getElementById('stories-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwYm95fGVufDF8fHx8MTc2OTc2NDU1MHww&ixlib=rb-4.1.0&q=80&w=400',
      quoteKey: 'stories.quote1',
      roleKey: 'stories.role1',
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHZvbHVudGVlciUyMGluZGlhfGVufDF8fHx8MTc2OTc2NDU3MHww&ixlib=rb-4.1.0&q=80&w=400',
      quoteKey: 'stories.quote2',
      roleKey: 'stories.role2',
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHBhcmVudHxlbnwxfHx8fDE3Njk3NjQ1OTB8MA&ixlib=rb-4.1.0&q=80&w=400',
      quoteKey: 'stories.quote3',
      roleKey: 'stories.role3',
    },
  ];

  return (
    <section id="stories-section" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('stories.heading')}
          </h2>
        </div>

        {/* Story Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`bg-[#F9FAFB] dark:bg-[#112F2B] rounded-[16px] p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="mb-4">
                <ImageWithFallback
                  src={story.image}
                  alt={t(story.roleKey)}
                  className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white dark:border-[#1F4D47]"
                />
              </div>

              {/* Quote Icon */}
              <div className="text-[#1E7A6E] dark:text-[#4FD1C5] mb-3 flex justify-center">
                <Quote size={24} />
              </div>

              {/* Quote Text */}
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] italic leading-relaxed mb-4 font-['Inter',sans-serif] text-center">
                "{t(story.quoteKey)}"
              </p>

              {/* Role */}
              <div className="text-center">
                <span className="text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
                  — {t(story.roleKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

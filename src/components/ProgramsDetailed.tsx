import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function ProgramsDetailed() {
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
      { threshold: 0.05 }
    );

    const section = document.getElementById('programs-detailed-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const programs = [
    {
      title: 'programs.digital.title',
      what: 'programs.digital.what',
      items: ['programs.digital.item1', 'programs.digital.item2', 'programs.digital.item3'],
      who: 'programs.digital.who',
      where: 'programs.digital.where',
      cta: 'programs.digital.cta',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvbXB1dGVyJTIwbGVhcm5pbmclMjBpbmRpYXxlbnwxfHx8fDE3Njk3NjQ0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Digital education program',
    },
    {
      title: 'programs.career.title',
      items: ['programs.career.item1', 'programs.career.item2', 'programs.career.item3'],
      cta: 'programs.career.cta',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTc2NDQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Career awareness sessions',
    },
    {
      title: 'programs.cyber.title',
      items: ['programs.cyber.item1', 'programs.cyber.item2', 'programs.cyber.item3'],
      cta: 'programs.cyber.cta',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNhZmV0eSUyMGF3YXJlbmVzc3xlbnwxfHx8fDE3Njk3NjQ0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Cyber safety workshops',
    },
  ];

  return (
    <section id="programs-detailed-section" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('programs.heading')}
          </h2>
        </div>

        {/* Program Blocks */}
        <div className="space-y-16">
          {programs.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image (Left on even, Right on odd) */}
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="rounded-[16px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.imageAlt}
                      className="w-full h-[280px] md:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content (Right on even, Left on odd) */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'} space-y-4`}>
                  <h3 className="text-[26px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                    {t(program.title)}
                  </h3>

                  {program.what && (
                    <p className="text-[15px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t(program.what)}
                    </p>
                  )}

                  <ul className="space-y-2">
                    {program.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] text-[18px] leading-none mt-1">•</span>
                        <span className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                          {t(item)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {program.who && (
                    <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] italic font-['Inter',sans-serif]">
                      {t(program.who)}
                    </p>
                  )}

                  {program.where && (
                    <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] italic font-['Inter',sans-serif]">
                      {t(program.where)}
                    </p>
                  )}

                  <button className="mt-3 flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-3 transition-all duration-200 font-semibold group">
                    <span>{t(program.cta)}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

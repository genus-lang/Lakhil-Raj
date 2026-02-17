import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSambhav() {
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

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about-section" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Text Content */}
          <div className={`space-y-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
              {t('about.heading')}
            </h2>

            <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
              {t('about.para1')}
            </p>

            <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
              {t('about.para2')}
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <span className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {t('about.highlight1')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <span className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {t('about.highlight2')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <span className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {t('about.highlight3')}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 border-2 border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-8 py-3 rounded-lg hover:bg-[#f0f9f7] dark:hover:bg-[#1F4D47] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold">
              {t('about.cta')}
            </button>
          </div>

          {/* Right - Image */}
          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="rounded-[16px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3b3JrJTIwdmlsbGFnZSUyMGluZGlhfGVufDF8fHx8MTc2OTc2NDM1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community work in villages"
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

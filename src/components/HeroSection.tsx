import { Users, Heart, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useThemeLanguage();

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-white dark:from-[#0B1F1D] dark:to-[#112F2B] overflow-hidden transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Eyebrow Text */}
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
              {t('hero.eyebrow')}
            </div>

            {/* Main Heading */}
            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[1.15] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
              {t('hero.heading')}
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] leading-snug max-w-[480px] font-['Inter',sans-serif]">
              {t('hero.description')}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-6 py-2.5 rounded-lg hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 font-semibold text-[14px]">
                {t('hero.getInvolved')}
              </button>
              <button className="border-2 border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-6 py-2.5 rounded-lg hover:bg-[#f0f9f7] dark:hover:bg-[#1F4D47] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold text-[14px]">
                {t('hero.explorePrograms')}
              </button>
            </div>

            {/* Social Proof Row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Users size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <span className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#1E7A6E] dark:group-hover:text-[#4FD1C5] transition-colors">
                  1000+ {t('hero.students')}
                </span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Heart size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <span className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#1E7A6E] dark:group-hover:text-[#4FD1C5] transition-colors">
                  50+ {t('hero.volunteers')}
                </span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <span className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#1E7A6E] dark:group-hover:text-[#4FD1C5] transition-colors">
                  {t('hero.villages')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-2'}`}>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img
                src="https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tJTIwaW5kaWElMjB2b2x1bnRlZXJ8ZW58MXx8fHwxNzY5NzY0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Children learning with volunteers"
                className="w-full h-[240px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

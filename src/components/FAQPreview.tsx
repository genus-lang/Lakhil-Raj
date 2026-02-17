import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';

export function FAQPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

    const section = document.getElementById('faq-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const faqs = [
    { qKey: 'faq.q1', aKey: 'faq.a1' },
    { qKey: 'faq.q2', aKey: 'faq.a2' },
    { qKey: 'faq.q3', aKey: 'faq.a3' },
    { qKey: 'faq.q4', aKey: 'faq.a4' },
  ];

  return (
    <section id="faq-section" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('faq.heading')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1F4D47] rounded-lg shadow-md overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F9FAFB] dark:hover:bg-[#2a6960] transition-colors"
              >
                <span className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] pr-4">
                  {t(faq.qKey)}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-2">
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
                    {t(faq.aKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="border-2 border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-8 py-3 rounded-lg hover:bg-[#1E7A6E] hover:text-white dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold">
            {t('faq.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

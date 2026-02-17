import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { homePageTranslations } from '../translations/homePageTranslations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PartnersSupporters() {
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

    const section = document.getElementById('partners-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Partner and Supporter Organizations (dummy data)
  const partners = [
    { 
      name: 'TechForGood', 
      type: 'CSR Partner',
      logo: 'https://images.unsplash.com/photo-1698516923129-3633a0a5cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ28lMjBtb2Rlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc2OTc2NzU3OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'EduConnect', 
      type: 'NGO Partner',
      logo: 'https://images.unsplash.com/photo-1762329386486-f38ef2077a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwbG9nb3xlbnwxfHx8fDE3Njk3Njc1ODR8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'SkillIndia', 
      type: 'Govt Initiative',
      logo: 'https://images.unsplash.com/photo-1615829761469-c9a0e73913fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGluZGlhJTIwZ292ZXJubWVudCUyMGxvZ298ZW58MXx8fHwxNzY5NzY3NTc5fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'DigitalBharat', 
      type: 'Foundation',
      logo: 'https://images.unsplash.com/photo-1639416070357-6dc10225abec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmhhcmF0JTIwaW5kaWElMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTc2NzU4MHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'LearnHub', 
      type: 'EdTech Partner',
      logo: 'https://images.unsplash.com/photo-1765133469414-02f4e445df19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGh1YiUyMGVkdWNhdGlvbiUyMGxvZ298ZW58MXx8fHwxNzY5NzY3NTgwfDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'GiveIndia', 
      type: 'Donor Platform',
      logo: 'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBwbGF0Zm9ybSUyMGxvZ298ZW58MXx8fHwxNzY5NzY3NTgxfDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'CommunityFirst', 
      type: 'Local Partner',
      logo: 'https://images.unsplash.com/photo-1763050234301-b623bdf88749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBub25wcm9maXQlMjBvcmdhbml6YXRpb258ZW58MXx8fHwxNzY5NzY3NTg1fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    { 
      name: 'FutureReady', 
      type: 'Corporate CSR',
      logo: 'https://images.unsplash.com/photo-1644078019986-7a4766155079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjc3IlMjBzb2NpYWwlMjByZXNwb25zaWJpbGl0eXxlbnwxfHx8fDE3Njk3Njc1ODF8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
  ];

  return (
    <section id="partners-section" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {t('partners.heading')}
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`text-center mb-10 max-w-[700px] mx-auto transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center h-32 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-md p-4 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Partner Logo */}
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 border border-[#E5E7EB] dark:border-[#1F4D47]">
                <ImageWithFallback
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Partner Name */}
              <h4 className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] text-center mb-1 font-['Poppins',sans-serif]">
                {partner.name}
              </h4>
              
              {/* Partner Type */}
              <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] text-center font-['Inter',sans-serif]">
                {partner.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

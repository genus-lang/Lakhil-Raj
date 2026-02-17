import { useEffect, useState } from 'react';
import { Monitor, Compass, Shield, Leaf } from 'lucide-react';

interface WhatWeDoCard {
  icon: 'digital' | 'career' | 'cyber' | 'environmental';
  title: string;
  description: string;
}

interface WhatWeDoCardsProps {
  sectionTitle: string;
  cards: {
    digitalEducation: { title: string; description: string };
    careerGuidance: { title: string; description: string };
    cyberSafety: { title: string; description: string };
    environmental: { title: string; description: string };
  };
}

export function WhatWeDoCards({ sectionTitle, cards }: WhatWeDoCardsProps) {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('what-we-do-cards');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const cardData: WhatWeDoCard[] = [
    {
      icon: 'digital',
      title: cards.digitalEducation.title,
      description: cards.digitalEducation.description,
    },
    {
      icon: 'career',
      title: cards.careerGuidance.title,
      description: cards.careerGuidance.description,
    },
    {
      icon: 'cyber',
      title: cards.cyberSafety.title,
      description: cards.cyberSafety.description,
    },
    {
      icon: 'environmental',
      title: cards.environmental.title,
      description: cards.environmental.description,
    },
  ];

  const getIcon = (iconType: string) => {
    const iconProps = { size: 32, className: 'text-[#1E7A6E] dark:text-[#4FD1C5]' };
    
    switch (iconType) {
      case 'digital':
        return <Monitor {...iconProps} />;
      case 'career':
        return <Compass {...iconProps} />;
      case 'cyber':
        return <Shield {...iconProps} />;
      case 'environmental':
        return <Leaf {...iconProps} />;
      default:
        return <Monitor {...iconProps} />;
    }
  };

  return (
    <section id="what-we-do-cards" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 transition-all duration-500 hover:bg-[#E5E7EB] dark:hover:bg-[#1F4D47] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                {getIcon(card.icon)}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

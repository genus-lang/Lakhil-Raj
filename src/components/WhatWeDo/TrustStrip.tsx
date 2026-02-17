import { useEffect, useState } from 'react';
import { BadgeCheck, Calendar, Heart } from 'lucide-react';

interface TrustStripProps {
  items: {
    registered: string;
    activeSince: string;
    communityDriven: string;
  };
}

export function TrustStrip({ items }: TrustStripProps) {
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

    const section = document.getElementById('trust-strip');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const trustItems = [
    {
      icon: <BadgeCheck size={20} />,
      text: items.registered,
    },
    {
      icon: <Calendar size={20} />,
      text: items.activeSince,
    },
    {
      icon: <Heart size={20} />,
      text: items.communityDriven,
    },
  ];

  return (
    <section id="trust-strip" className="bg-white dark:bg-[#0B1F1D] py-8 border-y border-[#E5E7EB] dark:border-[#1F4D47] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5]"
            >
              {item.icon}
              <span className="text-[14px] font-semibold font-['Inter',sans-serif]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

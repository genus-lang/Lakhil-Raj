import { useEffect, useState } from 'react';
import { Target, Compass, Check } from 'lucide-react';

interface VisionMissionSplitProps {
  vision: {
    heading: string;
    statement: string;
  };
  mission: {
    heading: string;
    points: string[];
  };
}

export function VisionMissionSplit({ vision, mission }: VisionMissionSplitProps) {
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

    const section = document.getElementById('vision-mission-split');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="vision-mission-split" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Two-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: VISION */}
          <div className={`bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Icon */}
            <div className="w-14 h-14 bg-[#1E7A6E] dark:bg-[#4FD1C5] rounded-full flex items-center justify-center mb-6 shadow-md">
              <Target size={28} className="text-white dark:text-[#0B1F1D]" />
            </div>

            {/* Heading */}
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
              {vision.heading}
            </h2>

            {/* Vision Statement */}
            <p className="text-[17px] md:text-[19px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] leading-relaxed font-medium">
              {vision.statement}
            </p>
          </div>

          {/* RIGHT: MISSION */}
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-lg transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Icon */}
            <div className="w-14 h-14 bg-[#1E7A6E] dark:bg-[#4FD1C5] rounded-full flex items-center justify-center mb-6 shadow-md">
              <Compass size={28} className="text-white dark:text-[#0B1F1D]" />
            </div>

            {/* Heading */}
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-5 font-['Poppins',sans-serif]">
              {mission.heading}
            </h2>

            {/* Mission Points */}
            <div className="space-y-3">
              {mission.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Check Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                      <Check size={12} className="text-white dark:text-[#0B1F1D]" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Point Text */}
                  <p className="text-[15px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

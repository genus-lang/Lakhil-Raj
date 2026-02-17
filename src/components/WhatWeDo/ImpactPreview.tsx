import { useEffect, useState } from 'react';

interface ImpactPreviewProps {
  stats: {
    studentsEducated: string;
    workshopsConducted: string;
    schoolsReached: string;
    volunteers: string;
  };
}

export function ImpactPreview({ stats }: ImpactPreviewProps) {
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

    const section = document.getElementById('impact-preview');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const statData = [
    { number: '1000+', label: stats.studentsEducated },
    { number: '120+', label: stats.workshopsConducted },
    { number: '25+', label: stats.schoolsReached },
    { number: '50+', label: stats.volunteers },
  ];

  return (
    <section id="impact-preview" className="bg-gradient-to-r from-[#1E7A6E] to-[#176b60] dark:from-[#0B1F1D] dark:to-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statData.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <div className="text-[36px] md:text-[42px] font-bold text-white dark:text-[#4FD1C5] mb-2 font-['Poppins',sans-serif]">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-[14px] md:text-[15px] text-white/90 dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

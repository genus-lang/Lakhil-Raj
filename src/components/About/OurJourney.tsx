import { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';

interface Milestone {
  year: string;
  description: string;
}

interface OurJourneyProps {
  sectionTitle: string;
  milestones: Milestone[];
}

export function OurJourney({ sectionTitle, milestones }: OurJourneyProps) {
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

    const section = document.getElementById('our-journey');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="our-journey" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-[800px] mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-[#1E7A6E] dark:bg-[#4FD1C5] opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Desktop: Alternating Layout */}
                  <div className={`hidden md:flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={`w-[calc(50%-40px)] ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}>
                      <div className="text-[24px] font-bold text-[#1E7A6E] dark:text-[#4FD1C5] mb-2 font-['Poppins',sans-serif]">
                        {milestone.year}
                      </div>
                      <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-[80px]">
                      <div className="w-4 h-4 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] border-4 border-[#F9FAFB] dark:border-[#112F2B]" />
                    </div>

                    {/* Empty Space */}
                    <div className="w-[calc(50%-40px)]" />
                  </div>

                  {/* Mobile: Stacked Layout */}
                  <div className="md:hidden flex items-start gap-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 mt-1">
                      <Circle size={12} className="text-[#1E7A6E] dark:text-[#4FD1C5] fill-current" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-[20px] font-bold text-[#1E7A6E] dark:text-[#4FD1C5] mb-1 font-['Poppins',sans-serif]">
                        {milestone.year}
                      </div>
                      <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

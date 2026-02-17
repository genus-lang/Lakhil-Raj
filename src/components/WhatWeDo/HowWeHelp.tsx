import { useEffect, useState } from 'react';
import { Users, Megaphone, Sparkles } from 'lucide-react';

interface HowWeHelpProps {
  sectionTitle: string;
  blocks: {
    access: { title: string; description: string };
    awareness: { title: string; description: string };
    empowerment: { title: string; description: string };
  };
}

export function HowWeHelp({ sectionTitle, blocks }: HowWeHelpProps) {
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

    const section = document.getElementById('how-we-help');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const helpBlocks = [
    {
      icon: <Users size={32} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />,
      title: blocks.access.title,
      description: blocks.access.description,
    },
    {
      icon: <Megaphone size={32} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />,
      title: blocks.awareness.title,
      description: blocks.awareness.description,
    },
    {
      icon: <Sparkles size={32} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />,
      title: blocks.empowerment.title,
      description: blocks.empowerment.description,
    },
  ];

  return (
    <section id="how-we-help" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Help Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpBlocks.map((block, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white dark:bg-[#1F4D47] rounded-full flex items-center justify-center">
                  {block.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
                {block.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

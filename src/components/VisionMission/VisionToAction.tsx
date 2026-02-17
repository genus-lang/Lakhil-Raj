import { useEffect, useState } from 'react';
import { GraduationCap, Lightbulb, TrendingUp } from 'lucide-react';

interface VisionToActionProps {
  sectionTitle: string;
  education: { title: string; text: string };
  awareness: { title: string; text: string };
  empowerment: { title: string; text: string };
}

export function VisionToAction({ sectionTitle, education, awareness, empowerment }: VisionToActionProps) {
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

    const section = document.getElementById('vision-to-action');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const actions = [
    {
      icon: <GraduationCap size={28} />,
      title: education.title,
      text: education.text,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Lightbulb size={28} />,
      title: awareness.title,
      text: awareness.text,
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <TrendingUp size={28} />,
      title: empowerment.title,
      text: empowerment.text,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="vision-to-action" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1F4D47] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                <div className="text-white">
                  {action.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                {action.title}
              </h3>

              {/* Text */}
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {action.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

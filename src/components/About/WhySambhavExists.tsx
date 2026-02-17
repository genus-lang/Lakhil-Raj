import { useEffect, useState } from 'react';
import { AlertCircle, Target, Eye } from 'lucide-react';

interface WhySambhavExistsProps {
  sectionTitle: string;
  problem: { title: string; text: string };
  solution: { title: string; text: string };
  vision: { title: string; text: string };
}

export function WhySambhavExists({ sectionTitle, problem, solution, vision }: WhySambhavExistsProps) {
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

    const section = document.getElementById('why-exists');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const cards = [
    {
      icon: <AlertCircle size={32} className="text-[#DC2626]" />,
      title: problem.title,
      text: problem.text,
      bgColor: 'bg-red-50 dark:bg-red-900/10',
    },
    {
      icon: <Target size={32} className="text-[#F59E0B]" />,
      title: solution.title,
      text: solution.text,
      bgColor: 'bg-amber-50 dark:bg-amber-900/10',
    },
    {
      icon: <Eye size={32} className="text-[#10B981]" />,
      title: vision.title,
      text: vision.text,
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/10',
    },
  ];

  return (
    <section id="why-exists" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-xl p-6 transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

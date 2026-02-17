import { useEffect, useState } from 'react';
import { Heart, Users, CheckCircle, Leaf } from 'lucide-react';

interface GuidingPrinciplesProps {
  sectionTitle: string;
  childCentric: { title: string; text: string };
  communityDriven: { title: string; text: string };
  inclusive: { title: string; text: string };
  sustainable: { title: string; text: string };
}

export function GuidingPrinciples({ 
  sectionTitle, 
  childCentric, 
  communityDriven, 
  inclusive, 
  sustainable 
}: GuidingPrinciplesProps) {
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

    const section = document.getElementById('guiding-principles');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const principles = [
    {
      icon: <Heart size={24} />,
      title: childCentric.title,
      text: childCentric.text,
    },
    {
      icon: <Users size={24} />,
      title: communityDriven.title,
      text: communityDriven.text,
    },
    {
      icon: <CheckCircle size={24} />,
      title: inclusive.title,
      text: inclusive.text,
    },
    {
      icon: <Leaf size={24} />,
      title: sustainable.title,
      text: sustainable.text,
    },
  ];

  return (
    <section id="guiding-principles" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`bg-[#F9FAFB] dark:bg-[#1F4D47] rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#1E7A6E] dark:bg-[#4FD1C5] rounded-full flex items-center justify-center text-white dark:text-[#0B1F1D]">
                  {principle.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                {principle.title}
              </h3>

              {/* Text */}
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

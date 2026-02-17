import { useEffect, useState } from 'react';
import { Shield, Users, Handshake, Sprout } from 'lucide-react';

interface OurValuesProps {
  sectionTitle: string;
  integrity: { title: string; text: string };
  inclusivity: { title: string; text: string };
  collaboration: { title: string; text: string };
  sustainability: { title: string; text: string };
}

export function OurValues({ sectionTitle, integrity, inclusivity, collaboration, sustainability }: OurValuesProps) {
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

    const section = document.getElementById('our-values');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const values = [
    {
      icon: <Shield size={28} />,
      title: integrity.title,
      text: integrity.text,
    },
    {
      icon: <Users size={28} />,
      title: inclusivity.title,
      text: inclusivity.text,
    },
    {
      icon: <Handshake size={28} />,
      title: collaboration.title,
      text: collaboration.text,
    },
    {
      icon: <Sprout size={28} />,
      title: sustainability.title,
      text: sustainability.text,
    },
  ];

  return (
    <section id="our-values" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1F4D47] rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-[#1E7A6E] dark:text-[#4FD1C5]">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                {value.title}
              </h3>

              {/* Text */}
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

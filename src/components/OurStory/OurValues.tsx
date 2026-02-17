import { useEffect, useState } from 'react';
import { GraduationCap, Shield, Users, Heart, Eye, Leaf } from 'lucide-react';

interface OurValuesProps {
  sectionTitle: string;
  subtitle: string;
  educationFirst: { title: string; description: string };
  integrity: { title: string; description: string };
  community: { title: string; description: string };
  inclusion: { title: string; description: string };
  transparency: { title: string; description: string };
  sustainability: { title: string; description: string };
}

export function OurValues({ 
  sectionTitle, 
  subtitle,
  educationFirst, 
  integrity, 
  community, 
  inclusion, 
  transparency, 
  sustainability 
}: OurValuesProps) {
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
      icon: <GraduationCap size={32} />,
      title: educationFirst.title,
      description: educationFirst.description,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield size={32} />,
      title: integrity.title,
      description: integrity.description,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Users size={32} />,
      title: community.title,
      description: community.description,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Heart size={32} />,
      title: inclusion.title,
      description: inclusion.description,
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: <Eye size={32} />,
      title: transparency.title,
      description: transparency.description,
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: <Leaf size={32} />,
      title: sustainability.title,
      description: sustainability.description,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="our-values" className="bg-white dark:bg-[#0B1F1D] py-14 md:py-18 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
            {subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#F9FAFB] to-white dark:from-[#112F2B] dark:to-[#0B1F1D] rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface PartnershipBenefitsProps {
  sectionTitle: string;
  subtitle: string;
  benefits: Benefit[];
}

export function PartnershipBenefits({ sectionTitle, subtitle, benefits }: PartnershipBenefitsProps) {
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

    const section = document.getElementById('partnership-benefits');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="partnership-benefits" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-[#0B1F1D] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] dark:border-[#374151] h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-[28px]">{benefit.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { Award, Briefcase } from 'lucide-react';

interface AdvisoryMember {
  name: string;
  expertise: string;
  experience: string;
}

interface AdvisoryBoardProps {
  sectionTitle: string;
  subtitle: string;
  members: AdvisoryMember[];
}

export function AdvisoryBoard({ sectionTitle, subtitle, members }: AdvisoryBoardProps) {
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

    const section = document.getElementById('advisory-board');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="advisory-board" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-5 py-2 rounded-full mb-4">
            <Award size={18} />
            <span className="text-[13px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Expert Guidance</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Advisory Grid - Smaller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-[#0B1F1D] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5] h-full">
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#4FD1C5] dark:to-[#1E7A6E] rounded-xl mb-4 shadow-md">
                  <Briefcase size={20} className="text-white dark:text-[#0B1F1D]" />
                </div>

                {/* Name */}
                <h3 className="text-[17px] md:text-[18px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif] group-hover:text-[#1E7A6E] dark:group-hover:text-[#4FD1C5] transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Expertise */}
                <div className="mb-3">
                  <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1">
                    Expertise:
                  </p>
                  <p className="text-[14px] font-semibold text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif]">
                    {member.expertise}
                  </p>
                </div>

                {/* Experience */}
                <div className="pt-3 border-t border-[#E5E7EB] dark:border-[#374151]">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-[#F4B400]" />
                    <p className="text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] font-['Inter',sans-serif]">
                      {member.experience}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#1E7A6E]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Note */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] italic max-w-[600px] mx-auto">
            Our advisory board brings decades of combined experience in education, rural development, and social innovation to guide our foundation's strategic direction.
          </p>
        </div>
      </div>
    </section>
  );
}

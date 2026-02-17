import { useEffect, useState } from 'react';
import { UserCircle } from 'lucide-react';

interface TeamRole {
  role: string;
  description: string;
}

interface TeamSnapshotProps {
  sectionTitle: string;
  roles: TeamRole[];
}

export function TeamSnapshot({ sectionTitle, roles }: TeamSnapshotProps) {
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

    const section = document.getElementById('team-snapshot');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="team-snapshot" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {roles.map((roleData, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1F4D47] rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon/Photo Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                  <UserCircle size={48} className="text-white dark:text-[#0B1F1D]" />
                </div>
              </div>

              {/* Role */}
              <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                {roleData.role}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                {roleData.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

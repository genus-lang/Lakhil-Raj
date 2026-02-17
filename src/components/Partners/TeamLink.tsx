import { useEffect, useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';

export function TeamLink() {
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

    const section = document.getElementById('team-link');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="team-link" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="/team"
            className="group block bg-white dark:bg-[#0B1F1D] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] dark:border-[#374151]"
          >
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-center md:text-left">
                {/* Icon */}
                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} className="text-white" />
                </div>

                <div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif] group-hover:text-[#1E7A6E] dark:group-hover:text-[#4FD1C5] transition-colors duration-300">
                    Meet Our Team
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    Get to know the people working every day to make our mission possible
                  </p>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#F9FAFB] dark:bg-[#112F2B] text-[#1E7A6E] dark:text-[#4FD1C5] rounded-full group-hover:bg-[#1E7A6E] dark:group-hover:bg-[#4FD1C5] group-hover:text-white dark:group-hover:text-[#0B1F1D] transition-all duration-300 flex-shrink-0 group-hover:scale-110 border border-[#E5E7EB] dark:border-[#374151]">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

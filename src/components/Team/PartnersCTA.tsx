import { useEffect, useState } from 'react';
import { Handshake, ArrowRight } from 'lucide-react';

export function PartnersCTA() {
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

    const section = document.getElementById('partners-cta-link');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="partners-cta-link" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="/partners"
            className="group block bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-center md:text-left">
                {/* Icon */}
                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex-shrink-0">
                  <Handshake size={24} className="text-white" />
                </div>

                <div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2 font-['Poppins',sans-serif]">
                    Meet Our Partners & Supporters
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-white/90 font-['Inter',sans-serif]">
                    Discover the organizations and foundations supporting our mission
                  </p>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="flex items-center justify-center w-12 h-12 bg-white text-[#1E7A6E] rounded-full group-hover:bg-[#F4B400] group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

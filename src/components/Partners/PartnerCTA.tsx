import { useEffect, useState } from 'react';
import { Handshake, ArrowRight, Mail, Phone } from 'lucide-react';

interface PartnerCTAProps {
  title: string;
  description: string;
  button: string;
}

export function PartnerCTA({ title, description, button }: PartnerCTAProps) {
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

    const section = document.getElementById('partner-cta');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="partner-cta" className="bg-white dark:bg-[#0B1F1D] py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative max-w-[800px] mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                  <Handshake size={28} className="text-white" />
                </div>
              </div>

              {/* CTA Content */}
              <div className="text-center mb-10">
                <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-5 font-['Poppins',sans-serif] leading-tight">
                  {title}
                </h2>
                <p className="text-[16px] md:text-[18px] text-white/90 font-['Inter',sans-serif] leading-relaxed max-w-[600px] mx-auto">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group inline-flex items-center gap-3 bg-white text-[#1E7A6E] px-8 py-4 rounded-full font-semibold text-[16px] font-['Inter',sans-serif] hover:bg-[#F4B400] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center">
                  <Mail size={20} />
                  <span>{button}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-[16px] font-['Inter',sans-serif] hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto justify-center">
                  <Phone size={20} />
                  <span>Schedule a Call</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-10 pt-8 border-t border-white/20 text-center">
                <p className="text-[14px] text-white/80 font-['Inter',sans-serif] mb-2">
                  Or reach us directly at
                </p>
                <a href="mailto:partnerships@sambhavngo.org" className="text-[16px] text-white font-semibold hover:text-[#F4B400] transition-colors duration-200 font-['Inter',sans-serif]">
                  partnerships@sambhavngo.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className={`text-center mt-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
            We typically respond to partnership inquiries within 2-3 business days.
          </p>
        </div>
      </div>
    </section>
  );
}

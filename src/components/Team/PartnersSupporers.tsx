import { useEffect, useState } from 'react';
import { Handshake, ArrowRight } from 'lucide-react';

interface PartnersCTAProps {
  sectionTitle: string;
  subtitle: string;
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

// Partner logos using placeholder/mock logos
const partnerLogos = [
  { name: 'Education Foundation', color: 'from-blue-500 to-cyan-500' },
  { name: 'Community Trust', color: 'from-emerald-500 to-teal-500' },
  { name: 'Rural Development Fund', color: 'from-purple-500 to-pink-500' },
  { name: 'Youth Empowerment', color: 'from-rose-500 to-orange-500' },
  { name: 'Digital Learning Initiative', color: 'from-amber-500 to-yellow-500' },
  { name: 'Green Future Foundation', color: 'from-green-500 to-emerald-500' },
  { name: 'Skills Development Corp', color: 'from-indigo-500 to-blue-500' },
  { name: 'Social Impact Fund', color: 'from-pink-500 to-rose-500' },
];

export function PartnersSupporers({ sectionTitle, subtitle, cta }: PartnersCTAProps) {
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

    const section = document.getElementById('partners-supporters');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2);
  };

  return (
    <section id="partners-supporters" className="bg-white dark:bg-[#0B1F1D] py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#F4B400] text-white px-5 py-2 rounded-full mb-4">
            <Handshake size={18} />
            <span className="text-[13px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Partnerships</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] dark:border-[#374151] aspect-square">
                {/* Logo Placeholder - Gradient Circle with Initials */}
                <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-[20px] font-['Poppins',sans-serif]">
                    {getInitials(partner.name)}
                  </span>
                </div>
              </div>
              {/* Partner Name */}
              <p className="text-[12px] text-center text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mt-3 leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-[700px] mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Handshake size={28} className="text-white" />
              </div>

              {/* CTA Title */}
              <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-4 font-['Poppins',sans-serif]">
                {cta.title}
              </h3>

              {/* CTA Description */}
              <p className="text-[16px] md:text-[18px] text-white/90 font-['Inter',sans-serif] leading-relaxed mb-8">
                {cta.description}
              </p>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 bg-white text-[#1E7A6E] px-8 py-4 rounded-full font-semibold text-[16px] font-['Inter',sans-serif] hover:bg-[#F4B400] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <span>{cta.button}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] italic">
            Together, we're creating lasting change in communities across India.
          </p>
        </div>
      </div>
    </section>
  );
}

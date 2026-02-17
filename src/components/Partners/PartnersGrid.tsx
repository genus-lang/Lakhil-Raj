import { useEffect, useState } from 'react';
import { Building2, Globe, Heart, Handshake } from 'lucide-react';

interface Partner {
  name: string;
  type: string;
  category: 'foundation' | 'corporate' | 'community';
}

interface PartnersGridProps {
  sectionTitle: string;
  subtitle: string;
  partners: Partner[];
}

export function PartnersGrid({ sectionTitle, subtitle, partners }: PartnersGridProps) {
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

    const section = document.getElementById('partners-grid');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'foundation':
        return 'from-blue-500 to-cyan-500';
      case 'corporate':
        return 'from-purple-500 to-pink-500';
      case 'community':
        return 'from-emerald-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'foundation':
        return <Building2 size={16} />;
      case 'corporate':
        return <Globe size={16} />;
      case 'community':
        return <Heart size={16} />;
      default:
        return <Building2 size={16} />;
    }
  };

  return (
    <section id="partners-grid" className="bg-white dark:bg-[#0B1F1D] py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 max-w-[700px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#F4B400] text-white px-5 py-2 rounded-full mb-4">
            <Handshake size={18} />
            <span className="text-[13px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Our Partners</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="group bg-[#F9FAFB] dark:bg-[#112F2B] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E5E7EB] dark:border-[#374151] h-full flex flex-col">
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(partner.category)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  <span className="text-white font-bold text-[18px] font-['Poppins',sans-serif]">
                    {getInitials(partner.name)}
                  </span>
                </div>

                {/* Partner Name */}
                <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] mb-2 line-clamp-2">
                  {partner.name}
                </h3>

                {/* Partner Type */}
                <div className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] bg-white dark:bg-[#0B1F1D] px-3 py-1.5 rounded-full w-fit mt-auto">
                  {getCategoryIcon(partner.category)}
                  <span>{partner.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
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

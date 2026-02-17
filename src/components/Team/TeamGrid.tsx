import { useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TeamMember {
  name: string;
  role: string;
  type: string;
}

interface TeamGridProps {
  sectionTitle: string;
  subtitle: string;
  members: TeamMember[];
}

const teamImages = [
  'https://images.unsplash.com/photo-1766999712946-53366b089e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1548597180-23cc88a9a6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1544264796-acfb69e05b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1548597180-23cc88a9a6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1721676743809-7a2d672e5cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1758599667718-684569efe224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
];

export function TeamGrid({ sectionTitle, subtitle, members }: TeamGridProps) {
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

    const section = document.getElementById('team-grid');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="team-grid" className="bg-white dark:bg-[#0B1F1D] py-16 md:py-24 transition-colors duration-200">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Photo */}
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={teamImages[index % teamImages.length]}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E7A6E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-colors duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={18} className="text-[#1E7A6E]" />
                    </a>
                  </div>
                  
                  {/* Type Badge */}
                  {member.type === 'volunteer' && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#F4B400] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md font-['Inter',sans-serif]">
                        Volunteer
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name */}
                  <h3 className="text-[18px] md:text-[19px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

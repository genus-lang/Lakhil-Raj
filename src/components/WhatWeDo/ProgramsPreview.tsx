import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProgramsPreviewProps {
  sectionTitle: string;
  learnMore: string;
  programs: {
    digitalEducation: string;
    careerAwareness: string;
    cyberSafety: string;
    environmental: string;
  };
}

export function ProgramsPreview({ sectionTitle, learnMore, programs }: ProgramsPreviewProps) {
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

    const section = document.getElementById('programs-preview');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const programData = [
    {
      name: programs.digitalEducation,
      image: 'https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvbXB1dGVyJTIwbGVhcm5pbmclMjBpbmRpYSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njk3Njk1NDN8MA&ixlib=rb-4.1.0&q=80&w=800',
      link: '/programs/digital-education',
    },
    {
      name: programs.careerAwareness,
      image: 'https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhcmVlciUyMGd1aWRhbmNlJTIwY291bnNlbGluZyUyMGluZGlhfGVufDF8fHx8MTc2OTc2OTU0NHww&ixlib=rb-4.1.0&q=80&w=800',
      link: '/programs/career-awareness',
    },
    {
      name: programs.cyberSafety,
      image: 'https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMHNhZmV0eSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTc2OTU0NHww&ixlib=rb-4.1.0&q=80&w=800',
      link: '/programs/cyber-safety',
    },
    {
      name: programs.environmental,
      image: 'https://images.unsplash.com/photo-1729530201160-9cabda7efa54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwZWR1Y2F0aW9uJTIwY2hpbGRyZW4lMjBuYXR1cmUlMjBpbmRpYXxlbnwxfHx8fDE3Njk3Njk1NDR8MA&ixlib=rb-4.1.0&q=80&w=800',
      link: '/programs/environmental',
    },
  ];

  return (
    <section id="programs-preview" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Programs Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto md:overflow-visible -mx-6 md:mx-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0 pb-4 md:pb-0">
            {programData.map((program, index) => (
              <a
                key={index}
                href={program.link}
                className={`flex-shrink-0 w-[280px] md:w-auto group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative h-[180px] overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90 dark:group-hover:brightness-75"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Program Name */}
                    <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif] leading-snug">
                      {program.name}
                    </h3>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] text-[14px] font-semibold font-['Inter',sans-serif] group-hover:gap-3 transition-all duration-200">
                      <span className="group-hover:underline">{learnMore}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

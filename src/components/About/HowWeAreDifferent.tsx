import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HowWeAreDifferentProps {
  sectionTitle: string;
  points: string[];
}

export function HowWeAreDifferent({ sectionTitle, points }: HowWeAreDifferentProps) {
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

    const section = document.getElementById('how-different');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="how-different" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Points */}
          <div className={`space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <Check size={14} className="text-white dark:text-[#0B1F1D]" />
                  </div>
                </div>

                {/* Point Text */}
                <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709290749293-c6152a187b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nJTIwY29tbXVuaXR5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2OTc3MDQwNXww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Community classroom learning"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

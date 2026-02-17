import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AlignmentWithWorkProps {
  sectionTitle: string;
  points: string[];
}

export function AlignmentWithWork({ sectionTitle, points }: AlignmentWithWorkProps) {
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

    const section = document.getElementById('alignment-with-work');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="alignment-with-work" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Points */}
          <div className={`space-y-5 transition-all duration-700 ${
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
                    <Check size={14} className="text-white dark:text-[#0B1F1D]" strokeWidth={3} />
                  </div>
                </div>

                {/* Point Text */}
                <p className="text-[15px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2b2x1bnRlZXIlMjB0ZWFjaGluZyUyMHdvcmtzaG9wJTIwY29tbXVuaXR5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2OTc3MTAxMXww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Volunteer teaching workshop"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

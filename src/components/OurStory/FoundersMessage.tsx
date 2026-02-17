import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FoundersMessageProps {
  sectionTitle: string;
  founderName: string;
  founderTitle: string;
  message: string;
}

export function FoundersMessage({ sectionTitle, founderName, founderTitle, message }: FoundersMessageProps) {
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

    const section = document.getElementById('founders-message');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="founders-message" className="bg-white dark:bg-[#0B1F1D] py-14 md:py-18 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Founder Photo */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] dark:from-[#112F2B] dark:to-[#1F4D47] rounded-2xl p-6 text-center">
              {/* Photo */}
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[#1E7A6E] dark:ring-[#4FD1C5] shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717672134053-a9b92d61c017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt={founderName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-[20px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                {founderName}
              </h3>
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                {founderTitle}
              </p>
            </div>
          </div>

          {/* Right: Message Card */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white dark:from-[#112F2B] dark:to-[#0B1F1D] rounded-2xl p-8 md:p-10 shadow-lg relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                <Quote size={64} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
              </div>

              {/* Message Text */}
              <div className="relative z-10">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {message.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="text-[15px] md:text-[16px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-[#E5E7EB] dark:border-[#374151]">
                  <p className="text-[16px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] font-['Poppins',sans-serif] italic">
                    — {founderName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface FAQContactProps {
  title: string;
  description: string;
  button: string;
}

export function FAQContact({ title, description, button }: FAQContactProps) {
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

    const section = document.getElementById('faq-contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="faq-contact" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[900px] mx-auto px-6">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-xl p-6 md:p-8 text-center relative overflow-hidden shadow-lg">
            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <MessageCircle size={20} className="text-white" />
              </div>

              {/* Title */}
              <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-2 font-['Poppins',sans-serif]">
                {title}
              </h2>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-white/90 font-['Inter',sans-serif] leading-snug mb-4 max-w-[600px] mx-auto">
                {description}
              </p>

              {/* CTA Button */}
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#1E7A6E] px-6 py-2.5 rounded-full font-semibold text-[14px] font-['Inter',sans-serif] hover:bg-[#F4B400] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>{button}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

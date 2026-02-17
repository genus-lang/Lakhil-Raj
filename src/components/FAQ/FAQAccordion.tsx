import { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  sectionTitle: string;
  subtitle: string;
  faqs: FAQ[];
}

export function FAQAccordion({ sectionTitle, subtitle, faqs }: FAQAccordionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

    const section = document.getElementById('faq-accordion');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-accordion" className="bg-white dark:bg-[#0B1F1D] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#F4B400] text-white px-4 py-1.5 rounded-full mb-2">
            <HelpCircle size={14} />
            <span className="text-[11px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Common Questions</span>
          </div>
          <h2 className="text-[22px] md:text-[26px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-snug max-w-[600px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg border border-[#E5E7EB] dark:border-[#374151] overflow-hidden transition-all duration-300 hover:shadow-md">
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 flex items-center justify-between gap-3 text-left transition-colors duration-200 hover:bg-white dark:hover:bg-[#0B1F1D]"
                >
                  <span className={`text-[14px] md:text-[15px] font-semibold font-['Poppins',sans-serif] transition-colors duration-200 ${
                    openIndex === index 
                      ? 'text-[#1E7A6E] dark:text-[#4FD1C5]' 
                      : 'text-[#111827] dark:text-[#E5E7EB]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] rotate-180' 
                      : 'bg-white dark:bg-[#0B1F1D] rotate-0'
                  }`}>
                    <ChevronDown 
                      size={16} 
                      className={`transition-colors duration-300 ${
                        openIndex === index 
                          ? 'text-white dark:text-[#0B1F1D]' 
                          : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-5 pb-3 md:pb-3.5 pt-1">
                    <div className="border-t border-[#E5E7EB] dark:border-[#374151] pt-2.5">
                      <p className="text-[13px] md:text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

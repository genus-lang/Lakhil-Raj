import { useEffect, useState } from 'react';

interface OurStoryProps {
  paragraph: string;
}

export function OurStory({ paragraph }: OurStoryProps) {
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

    const section = document.getElementById('our-story');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="our-story" className="bg-white dark:bg-[#0B1F1D] py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`max-w-[720px] mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[16px] md:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StoryFlowProps {
  sectionTitle: string;
  problem: {
    title: string;
    year: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };
  firstAction: {
    title: string;
    year: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };
  growth: {
    title: string;
    year: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };
  today: {
    title: string;
    year: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };
}

export function StoryFlow({ sectionTitle, problem, firstAction, growth, today }: StoryFlowProps) {
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
      { threshold: 0.05 }
    );

    const section = document.getElementById('story-flow');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stories = [
    { 
      ...problem, 
      image: 'https://images.unsplash.com/photo-1718199885029-6ba9e8b8cf79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      imagePosition: 'left'
    },
    { 
      ...firstAction, 
      image: 'https://images.unsplash.com/photo-1551284580-4db008c0024a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      imagePosition: 'right'
    },
    { 
      ...growth, 
      image: 'https://images.unsplash.com/photo-1762330463346-5c71fbfee5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      imagePosition: 'left'
    },
    { 
      ...today, 
      image: 'https://images.unsplash.com/photo-1758270703329-71ad465663eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      imagePosition: 'right'
    },
  ];

  return (
    <section id="story-flow" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-14 md:py-18 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
        </div>

        {/* Story Timeline */}
        <div className="space-y-16 md:space-y-20">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                story.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className={story.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                  {/* Year Badge */}
                  <div className="inline-block bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4 font-['Inter',sans-serif]">
                    {story.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] md:text-[16px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] leading-relaxed mb-6">
                    {story.description}
                  </p>

                  {/* Pull Quote */}
                  <div className="bg-white dark:bg-[#0B1F1D] rounded-xl p-5 border-l-4 border-[#1E7A6E] dark:border-[#4FD1C5] shadow-md">
                    <div className="flex gap-3">
                      <Quote size={24} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-[14px] md:text-[15px] text-[#374151] dark:text-[#D1D5DB] font-['Inter',sans-serif] italic leading-relaxed mb-2">
                          {story.quote}
                        </p>
                        <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                          — {story.quoteAuthor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={story.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Connector (not for last item) */}
              {index < stories.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#1E7A6E] to-transparent dark:from-[#4FD1C5]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

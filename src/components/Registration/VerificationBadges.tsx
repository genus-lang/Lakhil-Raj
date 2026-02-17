import { useEffect, useState } from 'react';
import { Shield, CheckCircle, FileCheck, Award } from 'lucide-react';

interface Badge {
  icon: any;
  title: string;
  description: string;
  color: string;
}

interface VerificationBadgesProps {
  sectionTitle: string;
  badges: Badge[];
}

export function VerificationBadges({ sectionTitle, badges }: VerificationBadgesProps) {
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

    const section = document.getElementById('verification-badges');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const defaultBadges: Badge[] = [
    {
      icon: Shield,
      title: 'Government Verified',
      description: 'Officially registered with authorities',
      color: 'bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 text-[#1E7A6E] dark:text-[#4FD1C5]',
    },
    {
      icon: CheckCircle,
      title: '80G Certified',
      description: 'Tax benefits for donors',
      color: 'bg-[#F4B400]/10 dark:bg-[#F4B400]/20 text-[#F4B400]',
    },
    {
      icon: FileCheck,
      title: 'Annual Compliance',
      description: 'All filings up to date',
      color: 'bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 text-[#1E7A6E] dark:text-[#4FD1C5]',
    },
    {
      icon: Award,
      title: 'Transparency Certified',
      description: 'Full financial disclosure',
      color: 'bg-[#F4B400]/10 dark:bg-[#F4B400]/20 text-[#F4B400]',
    },
  ];

  const badgesToDisplay = badges.length > 0 ? badges : defaultBadges;

  return (
    <section id="verification-badges" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-5 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badgesToDisplay.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white dark:bg-[#0B1F1D] rounded-lg p-4 border border-[#E5E7EB] dark:border-[#374151] hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${badge.color} rounded-lg mb-3`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                    {badge.title}
                  </h3>
                  <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

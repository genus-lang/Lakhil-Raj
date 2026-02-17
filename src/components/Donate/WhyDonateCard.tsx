import { LucideIcon } from 'lucide-react';

interface WhyDonateCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function WhyDonateCard({ icon: Icon, title, description }: WhyDonateCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-[#0F2E2A] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5] transition-all">
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10">
        <Icon className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5]" />
      </div>
      <h3 className="text-[15px] font-semibold text-[#1F2937] dark:text-[#F9FAFB] mb-1.5 font-['Poppins',sans-serif]">
        {title}
      </h3>
      <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
        {description}
      </p>
    </div>
  );
}

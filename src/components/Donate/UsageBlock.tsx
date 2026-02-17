import { LucideIcon } from 'lucide-react';

interface UsageBlockProps {
  icon: LucideIcon;
  label: string;
}

export function UsageBlock({ icon: Icon, label }: UsageBlockProps) {
  return (
    <div className="flex flex-col items-center text-center p-3">
      <div className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg bg-[#F4B400]/10 dark:bg-[#F4B400]/20">
        <Icon className="w-5 h-5 text-[#F4B400]" />
      </div>
      <p className="text-[13px] font-medium text-[#1F2937] dark:text-[#F9FAFB] font-['Inter',sans-serif]">
        {label}
      </p>
    </div>
  );
}

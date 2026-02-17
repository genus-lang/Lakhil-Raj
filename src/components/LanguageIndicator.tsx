import { Globe } from 'lucide-react';
import { useThemeLanguage, languageNames } from '../contexts/ThemeLanguageContext';

/**
 * Optional language indicator component
 * Can be placed in header or anywhere to show current language
 */
export function LanguageIndicator() {
  const { language } = useThemeLanguage();

  // Only show if not English (to keep UI clean)
  if (language === 'en') return null;

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-md text-[11px] text-[#1E7A6E] dark:text-[#4FD1C5] font-medium">
      <Globe size={12} />
      <span>{languageNames[language]}</span>
    </div>
  );
}

import { MapPin, Mail, Phone, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeLanguage, languageNames } from '../contexts/ThemeLanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { theme, language, toggleTheme, setLanguage, t } = useThemeLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    const footer = document.getElementById('footer-section');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh') => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  // Get short language code for button display
  const getLanguageShortCode = (lang: string): string => {
    const codes: Record<string, string> = {
      en: 'EN',
      hi: 'हिं',
      es: 'ES',
      fr: 'FR',
      de: 'DE',
      pt: 'PT',
      zh: '中文'
    };
    return codes[lang] || 'EN';
  };

  return (
    <footer id="footer-section" className="bg-[#0F3D3A] dark:bg-[#0B1F1D] text-[#E5E7EB]">
      {/* Footer Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* 1. Brand Block */}
          <div className={`space-y-3 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-2 mb-3 group cursor-pointer">
              <div className="w-8 h-8 bg-[#1E7A6E] dark:bg-[#4FD1C5] rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white dark:text-[#0B1F1D] font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-lg font-['Poppins',sans-serif] group-hover:text-[#F4B400] transition-colors">
                SAMBHAV
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-[#E5E7EB] font-['Poppins',sans-serif] font-semibold">
              {t('footer.tagline')}
            </p>
            <p className="text-[12px] leading-relaxed text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('footer.description')}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className={`space-y-3 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className="text-[15px] font-semibold text-white mb-4 font-['Poppins',sans-serif]">
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-2.5">
              <a
                href="/"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.home')}
              </a>
              <a
                href="/about"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.about')}
              </a>
              <a
                href="/programs"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.programs')}
              </a>
              <a
                href="/impact"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.impact')}
              </a>
              <a
                href="/registration"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.registration')}
              </a>
              <a
                href="/contact"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.contact')}
              </a>
            </nav>
          </div>

          {/* 3. Programs Block */}
          <div className={`space-y-3 transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className="text-[15px] font-semibold text-white mb-4 font-['Poppins',sans-serif]">
              {t('footer.programs')}
            </h3>
            <nav className="space-y-2.5">
              <a
                href="/programs/digital-education"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.digitalEducation')}
              </a>
              <a
                href="/programs/career-awareness"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.careerAwareness')}
              </a>
              <a
                href="/programs/cyber-safety"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.cyberSafety')}
              </a>
              <a
                href="/programs/community-outreach"
                className="block text-[13px] text-[#E5E7EB] hover:text-[#F4B400] hover:translate-x-1 transition-all duration-200 font-['Inter',sans-serif]"
              >
                {t('nav.communityOutreach')}
              </a>
            </nav>
          </div>

          {/* 4. Contact & Action Block */}
          <div className={`space-y-4 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className="text-[15px] font-semibold text-white mb-4 font-['Poppins',sans-serif]">
              {t('footer.getInTouch')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-[13px] text-[#E5E7EB] font-['Inter',sans-serif] group cursor-pointer">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 group-hover:text-[#F4B400] transition-colors" />
                <span className="group-hover:text-[#F4B400] transition-colors">India</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#E5E7EB] font-['Inter',sans-serif] group">
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-[#F4B400] transition-colors" />
                <a href="mailto:info@sambhav.org" className="hover:text-[#F4B400] transition-colors">
                  info@sambhav.org
                </a>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#E5E7EB] font-['Inter',sans-serif] group cursor-pointer">
                <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-[#F4B400] transition-colors" />
                <span className="group-hover:text-[#F4B400] transition-colors">+91 XXXXX XXXXX</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 border-2 border-white text-white px-5 py-2 rounded-md text-[13px] hover:bg-white hover:text-[#0F3D3A] dark:hover:text-[#0B1F1D] hover:scale-105 active:scale-95 transition-all duration-300 font-semibold font-['Inter',sans-serif]">
              {t('footer.volunteerWithUs')}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] font-['Inter',sans-serif] transition-all duration-700 pb-20 md:pb-0 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Left - Theme & Language Controls (moved to left to avoid ChatBot) */}
            <div className="flex items-center gap-3 order-2 md:order-1">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group"
                aria-label={theme === 'light' ? t('footer.switchToDark') : t('footer.switchToLight')}
                title={theme === 'light' ? t('footer.switchToDark') : t('footer.switchToLight')}
              >
                <div className="relative w-5 h-5">
                  <Sun 
                    size={18} 
                    className={`absolute inset-0 text-[#F4B400] transition-all duration-300 ${
                      theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                    }`}
                  />
                  <Moon 
                    size={18} 
                    className={`absolute inset-0 text-[#4FD1C5] transition-all duration-300 ${
                      theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`}
                  />
                </div>
              </button>

              {/* Language Switcher */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95 text-white"
                  aria-label={t('footer.language')}
                >
                  <Globe size={16} />
                  <span className="text-[12px] font-semibold">
                    {getLanguageShortCode(language)}
                  </span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Language Dropdown - All 7 Languages */}
                {languageDropdownOpen && (
                  <div className="absolute bottom-full right-0 mb-2 w-44 bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] py-1 max-h-[300px] overflow-y-auto animate-in fade-in slide-in-from-bottom-2 duration-200">
                    {/* English */}
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'en' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.en}
                    </button>
                    
                    {/* Hindi */}
                    <button
                      onClick={() => handleLanguageChange('hi')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'hi' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.hi}
                    </button>
                    
                    {/* Spanish */}
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'es' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.es}
                    </button>
                    
                    {/* French */}
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'fr' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.fr}
                    </button>
                    
                    {/* German */}
                    <button
                      onClick={() => handleLanguageChange('de')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'de' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.de}
                    </button>
                    
                    {/* Portuguese */}
                    <button
                      onClick={() => handleLanguageChange('pt')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'pt' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.pt}
                    </button>
                    
                    {/* Chinese Simplified */}
                    <button
                      onClick={() => handleLanguageChange('zh')}
                      className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors ${
                        language === 'zh' ? 'text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold bg-[#F9FAFB] dark:bg-[#1F4D47]' : 'text-[#6B7280] dark:text-[#9CA3AF]'
                      }`}
                    >
                      {languageNames.zh}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Center - Copyright */}
            <div className="text-[#9CA3AF] text-center order-1 md:order-2">
              © {currentYear} {t('footer.copyright')}
            </div>

            {/* Right - Legal Links */}
            <div className="flex items-center gap-4 text-[#9CA3AF] flex-wrap justify-center order-3 md:order-3">
              <a href="/privacy" className="hover:text-[#F4B400] transition-colors duration-200">
                {t('footer.privacy')}
              </a>
              <span className="text-[#9CA3AF]/50">|</span>
              <a href="/terms" className="hover:text-[#F4B400] transition-colors duration-200">
                {t('footer.terms')}
              </a>
              <span className="text-[#9CA3AF]/50">|</span>
              <a href="/refund" className="hover:text-[#F4B400] transition-colors duration-200">
                {t('footer.refund')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

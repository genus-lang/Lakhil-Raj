import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    string | null
  >(null);
  const [mobileDropdown, setMobileDropdown] = useState<
    string | null
  >(null);
  const { t } = useThemeLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [activeDropdown]);

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(
      activeDropdown === dropdownName ? null : dropdownName,
    );
  };

  const toggleMobileDropdown = (dropdownName: string) => {
    setMobileDropdown(
      mobileDropdown === dropdownName ? null : dropdownName,
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-[100] h-[72px] backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-white/98 dark:bg-[#0B1F1D]/98 shadow-md"
          : "bg-white/96 dark:bg-[#0B1F1D]/96 border-b border-[#E5E7EB] dark:border-[#1F4D47]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[24px] h-full flex items-center justify-between py-[0px]">
        {/* Logo with NGO Name */}
        <a
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <Logo />
          <div className="hidden sm:block">
            <h1 className="text-[16px] font-bold text-[#1E7A6E] dark:text-[#4FD1C5] font-['Poppins',sans-serif] leading-none p-[0px]">
              Lakhil Raj Welfare Foundation
            </h1>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-6"
          ref={dropdownRef}
        >
          {/* Home */}
          <a
            href="/"
            className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E7A6E] dark:after:bg-[#4FD1C5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t("Home")}
          </a>

          {/* About Us - Dropdown with Groups */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("about")}
              className="flex items-center gap-1 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200"
            >
              {t("AboutUs")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Who We Are Group */}
                <div className="px-3 py-1">
                  <p className="text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider mb-1">
                    Who We Are
                  </p>
                </div>
                <a
                  href="/about"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("About Sambhav")}
                </a>
                <a
                  href="/mission-vision"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Vision Mission")}
                </a>
                <a
                  href="/founder-message"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Founder's Message")}
                </a>
                <a
                  href="/our-story"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Our Story")}
                </a>
                <a
                  href="/our-story#values"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Our Values")}
                </a>

                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>

                {/* People Group */}
                <div className="px-3 py-1">
                  <p className="text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider mb-1">
                    People
                  </p>
                </div>
                <a
                  href="/team"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Team Sambhav")}
                </a>
                <a
                  href="/team#advisory"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Advisory Board")}
                </a>

                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>

                {/* Trust Group */}
                <div className="px-3 py-1">
                  <p className="text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider mb-1">
                    Trust
                  </p>
                </div>
                <a
                  href="/partners"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Partners")}
                </a>
                <a
                  href="/registration"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Registration")}
                </a>
              </div>
            )}
          </div>

          {/* Programs - 2 Column Mega Menu */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("programs")}
              className="flex items-center gap-1 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200"
            >
              {t("Programs")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${activeDropdown === "programs" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "programs" && (
              <div className="absolute top-full left-0 mt-2 w-[540px] bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-x-4">
                  {/* Column 1 */}
                  <div>
                    <a
                      href="/programs"
                      className="block px-3 py-2.5 text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] rounded transition-colors"
                    >
                      {t("Overview")}
                    </a>
                    <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                    <a
                      href="/programs/education"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      📚 {t("Education")}
                    </a>
                    <a
                      href="/programs/digital-education"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      💻 {t("Digital Education")}
                    </a>
                    <a
                      href="/programs/career-guidance"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🎯 {t("Career Guidance ")}
                    </a>
                    <a
                      href="/programs/cyber-safety"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🔐 {t("Cyber Safety")}
                    </a>
                    <a
                      href="/programs/environmental"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🌱 {t("Environmental")}
                    </a>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <div className="h-[40px]"></div>
                    <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                    <a
                      href="/programs/health"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🏥 {t("Health")}
                    </a>
                    <a
                      href="/programs/women-empowerment"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      👩 {t("Women Empowerment")}
                    </a>
                    <a
                      href="/programs/skill-development"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🛠️ {t("Skill Development")}
                    </a>
                    <a
                      href="/programs/rural-development"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🏘️ {t("Rural Development")}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Impact - Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("impact")}
              className="flex items-center gap-1 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200"
            >
              {t("Impact")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${activeDropdown === "impact" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "impact" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/impact"
                  className="block px-4 py-2.5 text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors"
                >
                  {t("Overview")}
                </a>
                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                <a
                  href="/impact/numbers"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Numbers")}
                </a>
                <a
                  href="/impact/success-stories"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Success Stories")}
                </a>
                <a
                  href="/impact/case-studies"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Case Studies")}
                </a>
                <a
                  href="/impact/before-after"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Before After")}
                </a>
                <a
                  href="/impact/testimonials"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Testimonials")}
                </a>
                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                <a
                  href="/impact/annual-report"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Annual Report")}
                </a>
                <a
                  href="/impact/program-outcomes"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Outcomes")}
                </a>
                <a
                  href="/impact/program-reports"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Reports")}
                </a>
              </div>
            )}
          </div>

          {/* Get Involved - 2 Column Mega Menu */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("involved")}
              className="flex items-center gap-1 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200 font-bold font-normal"
            >
              {t("Get Involved")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "involved" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "involved" && (
              <div className="absolute top-full left-0 mt-2 w-[500px] bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-x-4">
                  {/* Column 1 */}
                  <div>
                    <a
                      href="/get-involved"
                      className="block px-3 py-2.5 text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] rounded transition-colors"
                    >
                      {t("Overview")}
                    </a>
                    <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                    <a
                      href="/volunteer"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors font-medium"
                    >
                      🙋 {t("Volunteer")}
                    </a>
                    <a
                      href="/internship"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors font-medium"
                    >
                      📝 {t("Internship")}
                    </a>
                    <a
                      href="/campus-ambassador"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🎓 {t("Campus Ambassador")}
                    </a>
                    <a
                      href="/mentor"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      👨‍🏫 {t("Mentor")}
                    </a>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <div className="h-[40px]"></div>
                    <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                    <a
                      href="/individual-supporters"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      💝 {t("Individual Support")}
                    </a>
                    <a
                      href="/csr-collaboration"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🤝 {t("Csr Collaboration")}
                    </a>
                    <a
                      href="/corporate-partnerships"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      🏢 {t("Corporate Partnerships")}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources - 2 Column Mega Menu with Groups */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("resources")}
              className="flex items-center gap-1 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200"
            >
              {t("Resources ")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "resources" && (
              <div className="absolute top-full left-0 mt-2 w-[520px] bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-x-4">
                  {/* Column 1 - Learning Resources */}
                  <div>
                    <div className="px-3 py-1">
                      <p className="text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider">
                        Learning Resources
                      </p>
                    </div>
                    <a
                      href="/resources/blog"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Blog")}
                    </a>
                    <a
                      href="/resources/awareness"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Awareness")}
                    </a>
                    <a
                      href="/resources/career"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Career Resources")}
                    </a>
                    <a
                      href="/resources/digital-literacy"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Digital Literacy")}
                    </a>
                    <a
                      href="/resources/cyber-safety"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("CyberSafety Res")}
                    </a>
                    <a
                      href="/resources/environmental"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Environmental")}
                    </a>
                  </div>

                  {/* Column 2 - Media & Updates */}
                  <div>
                    <div className="px-3 py-1">
                      <p className="text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider">
                        Media & Updates
                      </p>
                    </div>
                    <a
                      href="/resources/media"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Media")}
                    </a>
                    <a
                      href="/resources/news"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("News")}
                    </a>
                    <a
                      href="/resources/events"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Events")}
                    </a>
                    <a
                      href="/resources/gallery"
                      className="block px-3 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] rounded transition-colors"
                    >
                      {t("Gallery")}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact - Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("contact")}
              className="flex items-center gap-1 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-all duration-200"
            >
              {t("Contact")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${activeDropdown === "contact" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "contact" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/contact"
                  className="block px-4 py-2.5 text-[13px] font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] transition-colors"
                >
                  {t("Contact Us")}
                </a>
                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                <a
                  href="/faq"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Faqs")}
                </a>
                <a
                  href="/support"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Support")}
                </a>
                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-2"></div>
                <a
                  href="/request-workshop"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Request Workshop")}
                </a>
                <a
                  href="/invite-to-school"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Invite School")}
                </a>
                <a
                  href="/location"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Location")}
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Buttons + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Login Link with Dropdown - Desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => handleDropdownClick("login")}
              className="flex items-center gap-1.5 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors px-3 py-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47]"
            >
              <LogIn size={16} />
              {t("Login")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "login" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "login" && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#112F2B] rounded-lg shadow-xl border border-[#E5E7EB] dark:border-[#1F4D47] py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/login"
                  className="block px-4 py-2.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("User Login")}
                </a>
                <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] my-1"></div>
                <a
                  href="/admin/login"
                  className="block px-4 py-2.5 text-[11px] text-[#9CA3AF] dark:text-[#6B7280] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Admin Login")}
                </a>
              </div>
            )}
          </div>

          {/* Shop Button - Desktop */}
          <a
            href="/store"
            className="hidden lg:block bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white px-6 py-2.5 rounded-lg hover:bg-[#6A3A1E] dark:hover:bg-[#3F6C5A] hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 font-semibold text-[14px]"
          >
            Shop
          </a>

          {/* Donate Button - Desktop */}
          <a
            href="/donate"
            className="hidden lg:block bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-6 py-2.5 rounded-lg hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 font-semibold text-[14px]"
          >
            {t("Donate")}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#111827] dark:text-[#E5E7EB] p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <div
                className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
              >
                <Menu size={24} />
              </div>
              <div
                className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}
              >
                <X size={24} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - RECOMMENDED ORDER */}
      <div
        className={`lg:hidden bg-white dark:bg-[#112F2B] border-t border-[#E5E7EB] dark:border-[#1F4D47] overflow-hidden transition-all duration-300 shadow-lg ${
          mobileMenuOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1 max-h-[80vh] overflow-y-auto">
          {/* Action Buttons - Mobile (First) */}
          <div className="flex gap-2 mb-2">
            <a
              href="/store"
              onClick={closeMobileMenu}
              className="flex-1 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white px-6 py-3 rounded-lg text-center hover:bg-[#6A3A1E] dark:hover:bg-[#3F6C5A] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
            >
              Shop
            </a>
            <a
              href="/donate"
              onClick={closeMobileMenu}
              className="flex-1 bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] px-6 py-3 rounded-lg text-center hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
            >
              {t("Donate")}
            </a>
          </div>

          {/* Get Involved - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("involved")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("Get Involved")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "involved" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "involved"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/get-involved"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold transition-colors"
                >
                  {t("Overview")}
                </a>
                <a
                  href="/volunteer"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors font-medium"
                >
                  🙋 {t("Volunteer")}
                </a>
                <a
                  href="/internship"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors font-medium"
                >
                  📝 {t("Internship")}
                </a>
                <a
                  href="/campus-ambassador"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🎓 {t("Campus Ambassador")}
                </a>
                <a
                  href="/mentor"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  👨‍🏫 {t("Mentor")}
                </a>
                <a
                  href="/individual-supporters"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  💝 {t("Individual Support")}
                </a>
                <a
                  href="/csr-collaboration"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🤝 {t("Csr Collaboration")}
                </a>
                <a
                  href="/corporate-partnerships"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🏢 {t("Corporate Partnerships")}
                </a>
              </div>
            </div>
          </div>

          {/* Programs - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("programs")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("Programs")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "programs" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "programs"
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/programs"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold transition-colors"
                >
                  {t("Overview")}
                </a>
                <a
                  href="/programs/education"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  📚 {t("Education")}
                </a>
                <a
                  href="/programs/digital-education"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  💻 {t("Digital Education")}
                </a>
                <a
                  href="/programs/career-guidance"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🎯 {t("Career Guidance ")}
                </a>
                <a
                  href="/programs/cyber-safety"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🔐 {t("Cyber Safety")}
                </a>
                <a
                  href="/programs/environmental"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🌱 {t("Environmental")}
                </a>
                <a
                  href="/programs/health"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🏥 {t("Health")}
                </a>
                <a
                  href="/programs/women-empowerment"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  👩 {t("Women Empowerment")}
                </a>
                <a
                  href="/programs/skill-development"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🛠️ {t("Skill Development")}
                </a>
                <a
                  href="/programs/rural-development"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  🏘️ {t("Rural Development")}
                </a>
              </div>
            </div>
          </div>

          {/* Impact - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("impact")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("Lmpact")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "impact" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "impact"
                  ? "max-h-[450px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/impact"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold transition-colors"
                >
                  {t("Overview")}
                </a>
                <a
                  href="/impact/numbers"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Numbers")}
                </a>
                <a
                  href="/impact/success-stories"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Success Stories")}
                </a>
                <a
                  href="/impact/case-studies"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Case Studies")}
                </a>
                <a
                  href="/impact/before-after"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Before After")}
                </a>
                <a
                  href="/impact/testimonials"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Testimonials")}
                </a>
                <a
                  href="/impact/annual-report"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Annual Report")}
                </a>
                <a
                  href="/impact/program-outcomes"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Outcomes")}
                </a>
                <a
                  href="/impact/program-reports"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Reports")}
                </a>
              </div>
            </div>
          </div>

          {/* About Us - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("about")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("AboutUs")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "about" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "about"
                  ? "max-h-[400px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("About Sambhav")}
                </a>
                <a
                  href="/mission-vision"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Vision Mission")}
                </a>
                <a
                  href="/founder-message"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Founder's Message")}
                </a>
                <a
                  href="/our-story"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Our Story")}
                </a>
                <a
                  href="/our-story#values"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Our Values")}
                </a>
                <a
                  href="/team"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Team Sambhav")}
                </a>
                <a
                  href="/team#advisory"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Advisory Board")}
                </a>
                <a
                  href="/partners"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Partners")}
                </a>
                <a
                  href="/registration"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Registration")}
                </a>
              </div>
            </div>
          </div>

          {/* Resources - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("resources")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("Resources ")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "resources"
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/resources/blog"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Blog")}
                </a>
                <a
                  href="/resources/awareness"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Awareness")}
                </a>
                <a
                  href="/resources/career"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Career Resources")}
                </a>
                <a
                  href="/resources/digital-literacy"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Digital Literacy")}
                </a>
                <a
                  href="/resources/cyber-safety"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("CyberSafety Res")}
                </a>
                <a
                  href="/resources/environmental"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Environmental")}
                </a>
                <a
                  href="/resources/media"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Media")}
                </a>
                <a
                  href="/resources/news"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("News")}
                </a>
                <a
                  href="/resources/events"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Events")}
                </a>
                <a
                  href="/resources/gallery"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Gallery")}
                </a>
              </div>
            </div>
          </div>

          {/* Contact - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("contact")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("Contact")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "contact" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "contact"
                  ? "max-h-80 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold transition-colors"
                >
                  {t("Contact Us")}
                </a>
                <a
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Faqs")}
                </a>
                <a
                  href="/support"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Support")}
                </a>
                <a
                  href="/request-workshop"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Request Workshop")}
                </a>
                <a
                  href="/invite-to-school"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Invite School")}
                </a>
                <a
                  href="/location"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Location")}
                </a>
              </div>
            </div>
          </div>

          {/* Login - Mobile Accordion */}
          <div className="border-b border-[#F3F4F6] dark:border-[#1F4D47]">
            <button
              onClick={() => toggleMobileDropdown("login")}
              className="w-full flex items-center justify-between text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] py-3 hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
            >
              {t("login")}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDropdown === "login" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === "login"
                  ? "max-h-32 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                <a
                  href="/login"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("User Login")}
                </a>
                <a
                  href="/admin/login"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[11px] text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors"
                >
                  {t("Admin Login")}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
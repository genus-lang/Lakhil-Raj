import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 left-6 md:left-8 z-40 bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0B1F1D] p-3 rounded-full shadow-lg hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:scale-110 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-bottom duration-300"
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

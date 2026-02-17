import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { womenEmpowermentTranslations } from '../../translations/womenEmpowermentTranslations';
import { Heart, Tag, Users, Sparkles, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WomenEmpowermentSection() {
  const { language } = useThemeLanguage();
  const t = (key: any) => womenEmpowermentTranslations[key]?.[language] || key;
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const keyPoints = [
    { icon: Sparkles, text: t('women.point1') },
    { icon: Tag, text: t('women.point2') },
    { icon: Heart, text: t('women.point3') },
    { icon: Users, text: t('women.point4') }
  ];

  const trustHighlights = [
    { text: t('women.trust1') },
    { text: t('women.trust2') },
    { text: t('women.trust3') },
    { text: t('women.trust4') }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-[#FFF9F0] dark:bg-[#1A1410]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Intro */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-[12px] uppercase tracking-wider text-[#F4B400] dark:text-[#F4B400] font-semibold mb-2 font-['Inter',sans-serif]">
            {t('women.eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1F2937] dark:text-[#F9FAFB] mb-3 font-['Poppins',sans-serif] leading-tight">
            {t('women.heading')}
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] max-w-[800px] font-['Inter',sans-serif] leading-relaxed">
            {t('women.subtext')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Left: Story + CTA */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Description */}
            <p className="text-[14px] text-[#374151] dark:text-[#D1D5DB] leading-relaxed font-['Inter',sans-serif]">
              {t('women.description')}
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <point.icon className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[#1F2937] dark:text-[#F9FAFB] font-['Inter',sans-serif]">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/store"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0F2E2A] rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] font-['Inter',sans-serif]"
              >
                {t('women.ctaButton')}
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] mt-2 font-['Inter',sans-serif]">
                {t('women.ctaSubtext')}
              </p>
            </div>
          </div>

          {/* Right: Product Visuals (Image Mosaic) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Large Image */}
              <div className="col-span-2 rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611583640642-c30238227b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGFydGlzYW4lMjBoYW5kbWFkZSUyMGJhZ3MlMjBjcmFmdHxlbnwxfHx8fDE3NzA1ODAzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Women artisan creating handmade products"
                  className="w-full h-[280px] object-cover"
                />
              </div>

              {/* Two smaller images */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770239647673-1a0eb5d05a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGZhYnJpYyUyMGJhZ3MlMjB0cmFkaXRpb25hbCUyMGNyYWZ0fGVufDF8fHx8MTc3MDU4MDMwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Handmade fabric bags"
                  className="w-full h-[180px] object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559557874-816b40a18d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1ha2luZyUyMGhhbmRpY3JhZnRzJTIwd29ya3Nob3AlMjBpbmRpYXxlbnwxfHx8fDE3NzA1ODAzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Women making handicrafts"
                  className="w-full h-[180px] object-cover"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#F4B400] text-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-[11px] font-bold font-['Inter',sans-serif]">Handmade by Women</p>
            </div>
          </div>
        </div>

        {/* Trust Highlights Strip */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white dark:bg-[#0F2E2A] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47]">
            {trustHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-2">
                <div className="w-2 h-2 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                <span className="text-[12px] md:text-[13px] text-[#374151] dark:text-[#D1D5DB] font-medium font-['Inter',sans-serif]">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

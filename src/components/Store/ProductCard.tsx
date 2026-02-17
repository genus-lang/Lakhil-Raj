import { useState } from 'react';
import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { storeTranslations } from '../../translations/storeTranslations';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

export function ProductCard({ id, name, price, image, badge }: ProductCardProps) {
  const { language } = useThemeLanguage();
  const t = (key: any) => storeTranslations[key]?.[language] || key;
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/product"
      className="group relative bg-white dark:bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#E5E5E5] dark:border-[#3A3A3A] hover:shadow-lg transition-all duration-300 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F0EDE9] dark:bg-[#2A2A2A]">
        <ImageWithFallback
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white px-3 py-1 rounded-full">
            <span className="text-[10px] font-bold uppercase font-['Inter',sans-serif]">{badge}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif] line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
            ₹{price}
          </p>
          <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] group-hover:text-[#7A4A2E] dark:group-hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
            {t('store.product.viewDetails')} →
          </span>
        </div>
      </div>
    </a>
  );
}

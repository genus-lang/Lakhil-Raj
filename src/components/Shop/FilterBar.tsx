import { useState } from 'react';
import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { shopTranslations } from '../../translations/shopTranslations';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  priceRange: string;
  sortBy: string;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const { language } = useThemeLanguage();
  const t = (key: any) => shopTranslations[key]?.[language] || key;

  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: 'all',
    sortBy: 'newest'
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = [
    { value: 'all', label: t('shop.filter.all') },
    { value: 'bags', label: t('shop.filter.bags') },
    { value: 'accessories', label: t('shop.filter.accessories') },
    { value: 'eco', label: t('shop.filter.eco') }
  ];

  const priceRanges = [
    { value: 'all', label: t('shop.filter.all') },
    { value: 'under500', label: t('shop.filter.price1') },
    { value: '500-1000', label: t('shop.filter.price2') },
    { value: 'above1000', label: t('shop.filter.price3') }
  ];

  const sortOptions = [
    { value: 'newest', label: t('shop.sort.newest') },
    { value: 'priceLow', label: t('shop.sort.priceLow') },
    { value: 'priceHigh', label: t('shop.sort.priceHigh') }
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = { category: 'all', priceRange: 'all', sortBy: 'newest' };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const handleApply = () => {
    onFilterChange(filters);
    setIsMobileFilterOpen(false);
  };

  return (
    <>
      {/* Desktop Filter Bar */}
      <div className="hidden md:flex items-center gap-4 p-4 bg-white dark:bg-[#1A1A1A] border-y border-[#E5E5E5] dark:border-[#3A3A3A]">
        <div className="flex items-center gap-4 flex-1">
          {/* Category */}
          <div className="flex-1 max-w-[200px]">
            <label className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 block font-['Inter',sans-serif] uppercase tracking-wide">
              {t('shop.filter.category')}
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="flex-1 max-w-[200px]">
            <label className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 block font-['Inter',sans-serif] uppercase tracking-wide">
              {t('shop.filter.price')}
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex-1 max-w-[200px]">
            <label className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 block font-['Inter',sans-serif] uppercase tracking-wide">
              {t('shop.filter.sort')}
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="px-4 py-2 text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]"
        >
          {t('shop.filter.reset')}
        </button>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden p-4 bg-white dark:bg-[#1A1A1A] border-y border-[#E5E5E5] dark:border-[#3A3A3A]">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {t('shop.filter.title')}
        </button>
      </div>

      {/* Mobile Filter Bottom Sheet */}
      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileFilterOpen(false)}
          ></div>
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1A1A1A] rounded-t-2xl z-50 max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                {t('shop.filter.title')}
              </h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#1F1F1F] dark:text-[#FAF9F7]" />
              </button>
            </div>

            {/* Filters */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Category */}
              <div>
                <label className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-2 block font-['Inter',sans-serif] uppercase tracking-wide">
                  {t('shop.filter.category')}
                </label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => handleFilterChange('category', cat.value)}
                      className={`w-full px-4 py-3 rounded-lg text-[14px] text-left transition-all font-['Inter',sans-serif] ${
                        filters.category === cat.value
                          ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                          : 'bg-[#F0EDE9] dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#FAF9F7]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-2 block font-['Inter',sans-serif] uppercase tracking-wide">
                  {t('shop.filter.price')}
                </label>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => handleFilterChange('priceRange', range.value)}
                      className={`w-full px-4 py-3 rounded-lg text-[14px] text-left transition-all font-['Inter',sans-serif] ${
                        filters.priceRange === range.value
                          ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                          : 'bg-[#F0EDE9] dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#FAF9F7]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-2 block font-['Inter',sans-serif] uppercase tracking-wide">
                  {t('shop.filter.sort')}
                </label>
                <div className="space-y-2">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('sortBy', option.value)}
                      className={`w-full px-4 py-3 rounded-lg text-[14px] text-left transition-all font-['Inter',sans-serif] ${
                        filters.sortBy === option.value
                          ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                          : 'bg-[#F0EDE9] dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#FAF9F7]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t border-[#E5E5E5] dark:border-[#3A3A3A] flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-3 bg-[#F0EDE9] dark:bg-[#2A2A2A] text-[#1F1F1F] dark:text-[#FAF9F7] rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
              >
                {t('shop.filter.reset')}
              </button>
              <button
                onClick={handleApply}
                className="flex-1 px-4 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
              >
                {t('shop.filter.apply')}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

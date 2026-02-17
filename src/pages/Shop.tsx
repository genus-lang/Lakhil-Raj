import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useStoreData } from '../contexts/StoreDataContext';
import { shopTranslations } from '../translations/shopTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ProductCard } from '../components/Store/ProductCard';
import { FilterBar, FilterState } from '../components/Shop/FilterBar';
import { ArrowRight } from 'lucide-react';

export default function Shop() {
  const { language } = useThemeLanguage();
  const { products: allProducts } = useStoreData();
  const t = (key: string) => shopTranslations[key]?.[language] || key;

  const [isVisible, setIsVisible] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: 'all',
    sortBy: 'newest'
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...allProducts];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Price filter
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'under500') {
        filtered = filtered.filter(p => p.price < 500);
      } else if (filters.priceRange === '500-1000') {
        filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
      } else if (filters.priceRange === 'above1000') {
        filtered = filtered.filter(p => p.price > 1000);
      }
    }

    // Sort
    if (filters.sortBy === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const visibleProducts = filteredProducts.slice(0, displayedProducts);
  const hasMore = displayedProducts < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayedProducts(prev => prev + 12);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setDisplayedProducts(12);
  };

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F]">
        {/* SECTION 1: SHOP PAGE INTRO */}
        <section className={`py-12 px-4 bg-[#F0EDE9] dark:bg-[#1A1A1A] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
              {t('shop.heading')}
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif]">
              {t('shop.subtext')}
            </p>
            <div className="inline-flex items-center gap-1 px-4 py-2 bg-white dark:bg-[#0F0F0F] rounded-full border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <span className="text-[11px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold font-['Inter',sans-serif] tracking-wide">
                {t('shop.badge')}
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: FILTER + SORT BAR */}
        <FilterBar onFilterChange={handleFilterChange} />

        {/* SECTION 3: PRODUCT GRID */}
        <section className="py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            {/* Results count */}
            <div className="mb-6">
              <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                Showing {visibleProducts.length} of {filteredProducts.length} products
              </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  badge={product.badge || 'Handmade'}
                />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  Load More Products
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <StoreFooter />
    </>
  );
}

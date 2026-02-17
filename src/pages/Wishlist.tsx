import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { accountTranslations } from '../translations/accountTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, ShoppingBag, X, Star } from 'lucide-react';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  inStock: boolean;
}

export default function Wishlist() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, isLoading, user } = useAuth();
  const t = (key: string) => accountTranslations[key]?.[language] || key;

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      price: 450,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: true
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      price: 550,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: true
    },
    {
      id: '3',
      name: 'Handwoven Cotton Scarf',
      price: 380,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjBzY2FyZiUyMGFydGlzYW58ZW58MXx8fHwxNzM5MTcxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: true
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: string) => {
    console.log('Adding to cart:', id);
    removeFromWishlist(id);
    window.location.href = '/cart';
  };

  if (wishlistItems.length === 0) {
    return (
      <>
        <StoreNavbar cartCount={2} />
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <Heart className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
            <h1 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('wishlist.empty')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif]">
              {t('wishlist.emptySubtext')}
            </p>
            <a
              href="/shop"
              className="inline-block px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
            >
              {t('wishlist.continueShopping')}
            </a>
          </div>
        </div>
        <StoreFooter />
      </>
    );
  }

  return (
    <>
      <StoreNavbar cartCount={2} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('wishlist.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {wishlistItems.length} {t('wishlist.items')}
            </p>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] overflow-hidden group relative"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-[#1A1A1A] rounded-full shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <X className="w-4 h-4 text-red-500" />
                </button>

                {/* Product Image */}
                <a href="/product" className="block aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>

                {/* Product Info */}
                <div className="p-4">
                  <a href="/product">
                    <h3 className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 line-clamp-2 font-['Playfair_Display',serif] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors">
                      {item.name}
                    </h3>
                  </a>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]" />
                    <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {item.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-[18px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] mb-3 font-['Inter',sans-serif]">
                    ₹{item.price}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                      item.inStock
                        ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white hover:shadow-lg'
                        : 'bg-[#E5E5E5] dark:bg-[#3A3A3A] text-[#6B6B6B] dark:text-[#9CA3AF] cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {item.inStock ? t('wishlist.addToCart') : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Package, Heart, Bell, FileText, MapPin, Search, Star, ShoppingBag, Smartphone, Shirt, Home as HomeIcon, Headphones } from 'lucide-react';

export default function HomeLoggedIn() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { language } = useThemeLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Bhagalpur 813210');

  useEffect(() => {
    // Wait for auth to load before redirecting
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        // Redirect admins to their dashboard
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#7A4A2E] dark:border-[#4F7C6A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B6B6B] dark:text-[#9CA3AF]">Loading...</p>
        </div>
      </div>
    );
  }

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const quickActions = [
    { icon: Package, label: 'Orders', href: '/my-account', color: 'text-blue-600' },
    { icon: Heart, label: 'Wishlist', href: '/wishlist', color: 'text-red-500' },
    { icon: Bell, label: 'Notifications', href: '/notifications', color: 'text-orange-500' },
    { icon: FileText, label: 'Invoices', href: '/my-account', color: 'text-green-600' }
  ];

  const continueItems = [
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      price: 450,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      viewedAt: '2 hours ago'
    }
  ];

  const recommendedProducts = [
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      price: 450,
      rating: 4.5,
      reviews: 2348,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      price: 550,
      rating: 4.8,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '3',
      name: 'Handwoven Cotton Scarf',
      price: 380,
      rating: 4.2,
      reviews: 945,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjBzY2FyZiUyMGFydGlzYW58ZW58MXx8fHwxNzM5MTcxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '4',
      name: 'Eco-Friendly Canvas Bag',
      price: 380,
      rating: 4.6,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRvdGUlMjBiYWclMjBlY28lMjBmcmllbmRseXxlbnwxfHx8fDE3NzA1ODY0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const deals = [
    { id: '1', title: 'Up to 20% off on Handmade Bags', href: '/shop?category=bags' },
    { id: '2', title: 'New Arrivals - Eco-Friendly Products', href: '/shop?filter=new' }
  ];

  const categories = [
    { icon: ShoppingBag, label: 'Bags', href: '/shop?category=bags' },
    { icon: Shirt, label: 'Fashion', href: '/shop?category=fashion' },
    { icon: HomeIcon, label: 'Home', href: '/shop?category=home' },
    { icon: Headphones, label: 'Accessories', href: '/shop?category=accessories' }
  ];

  const addToCart = (productId: string) => {
    console.log('Adding to cart:', productId);
    alert('Added to cart!');
  };

  return (
    <>
      <StoreNavbar cartCount={2} />

      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F]">
        {/* Top Bar with Location */}
        <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#E5E5E5] dark:border-[#3A3A3A] sticky top-0 z-40">
          <div className="max-w-[1400px] mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Location */}
              <button className="flex items-center gap-2 text-[13px] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Deliver to: </span>
                <span className="font-semibold">{deliveryLocation}</span>
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-[600px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, brands and more"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-6">
          {/* Personalized Welcome */}
          <div>
            <h1 className="text-[20px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7]">
              {getGreeting()}, {user?.name.split(' ')[0]}
            </h1>
            <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF]">
              Based on your recent activity
            </p>
          </div>

          {/* Quick Action Strip */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] hover:shadow-md transition-all min-w-[100px]"
              >
                <action.icon className={`w-6 h-6 ${action.color}`} />
                <span className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7]">
                  {action.label}
                </span>
              </a>
            ))}
          </div>

          {/* Continue Where You Left Off */}
          {continueItems.length > 0 && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-5 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
                Continue where you left off
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <ImageWithFallback
                    src={continueItems[0].image}
                    alt={continueItems[0].name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1">
                    {continueItems[0].name}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-2">
                    Viewed {continueItems[0].viewedAt}
                  </p>
                  <a
                    href="/product"
                    className="inline-block px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold hover:shadow-lg transition-all"
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          <div>
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
              Recommended for you
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] overflow-hidden hover:shadow-md transition-all"
                >
                  <a href="/product" className="block">
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product">
                      <h3 className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 line-clamp-2 hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors">
                        {product.name}
                      </h3>
                    </a>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
                      <span className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7]">
                        {product.rating}
                      </span>
                      <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                        ({product.reviews.toLocaleString()})
                      </span>
                    </div>
                    <p className="text-[18px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] mb-3">
                      ₹{product.price}
                    </p>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-full px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Deals */}
          <div>
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
              Today's deals for you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deals.map((deal) => (
                <a
                  key={deal.id}
                  href={deal.href}
                  className="p-4 bg-gradient-to-r from-[#7A4A2E]/10 to-[#4F7C6A]/10 dark:from-[#7A4A2E]/20 dark:to-[#4F7C6A]/20 rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] hover:shadow-md transition-all"
                >
                  <p className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    {deal.title}
                  </p>
                  <span className="text-[13px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold">
                    View Deals →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
              Shop by category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <a
                  key={category.label}
                  href={category.href}
                  className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] hover:shadow-md transition-all"
                >
                  <category.icon className="w-8 h-8 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                  <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7]">
                    {category.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1A1A1A] border-t border-[#E5E5E5] dark:border-[#3A3A3A] z-50">
          <div className="flex justify-around items-center py-3">
            <a href="/home-logged-in" className="flex flex-col items-center gap-1">
              <HomeIcon className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
              <span className="text-[11px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold">Home</span>
            </a>
            <a href="/shop" className="flex flex-col items-center gap-1">
              <Search className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF]" />
              <span className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF]">Search</span>
            </a>
            <a href="/wishlist" className="flex flex-col items-center gap-1">
              <Heart className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF]" />
              <span className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF]">Wishlist</span>
            </a>
            <a href="/cart" className="flex flex-col items-center gap-1 relative">
              <ShoppingBag className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF]" />
              <span className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF]">Cart</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </a>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

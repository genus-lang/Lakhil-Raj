import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { cartTranslations } from '../translations/cartTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Minus, Plus, Heart, Trash2, Check, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  variant: string;
  seller: string;
  price: number;
  mrp: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const { language } = useThemeLanguage();
  const t = (key: any) => cartTranslations[key]?.[language] || key;

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      variant: 'Medium | Natural',
      seller: 'Lakhil Raj Artisans',
      price: 450,
      mrp: 650,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      variant: 'Small | Brown',
      seller: 'Lakhil Raj Artisans',
      price: 550,
      mrp: 750,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const saveForLater = (id: string) => {
    // Handle save for later
    console.log('Saved for later:', id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const mrpTotal = cartItems.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const discount = mrpTotal - subtotal;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cartItems.length === 0) {
    return (
      <>
        <StoreNavbar cartCount={0} />
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
            <h1 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('cart.empty')}
            </h1>
            <a
              href="/shop"
              className="inline-block mt-4 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
            >
              {t('cart.continueShopping')}
            </a>
          </div>
        </div>
        <StoreFooter />
      </>
    );
  }

  return (
    <>
      <StoreNavbar cartCount={cartItems.length} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
            {t('cart.title')}
          </h1>
          <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif]">
            {cartItems.length} {t('cart.items')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items (Left - 70%) */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#1A1A1A] rounded-lg p-4 border border-[#E5E5E5] dark:border-[#3A3A3A]"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Playfair_Display',serif] line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                        {item.variant}
                      </p>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-3 font-['Inter',sans-serif]">
                        {t('cart.soldBy')} {item.seller}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-[18px] md:text-[20px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                          ₹{item.price}
                        </span>
                        <span className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] line-through font-['Inter',sans-serif]">
                          ₹{item.mrp}
                        </span>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2 border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4 text-[#1F1F1F] dark:text-[#FAF9F7]" />
                          </button>
                          <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] min-w-[24px] text-center font-['Inter',sans-serif]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded transition-colors"
                          >
                            <Plus className="w-4 h-4 text-[#1F1F1F] dark:text-[#FAF9F7]" />
                          </button>
                        </div>

                        {/* Actions */}
                        <button
                          onClick={() => saveForLater(item.id)}
                          className="flex items-center gap-1 text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]"
                        >
                          <Heart className="w-3.5 h-3.5" />
                          {t('cart.saveForLater')}
                        </button>
                        <span className="text-[#E5E5E5] dark:text-[#3A3A3A]">|</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-red-500 transition-colors font-['Inter',sans-serif]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          {t('cart.remove')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary (Right - 30%) */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] lg:sticky lg:top-24">
                <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                  {t('cart.priceDetails')}
                </h2>

                <div className="space-y-3 mb-4 pb-4 border-b border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.subtotal')} ({cartItems.length} {t('cart.items')}):
                    </span>
                    <span className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                      ₹{mrpTotal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.discount')}:
                    </span>
                    <span className="text-[13px] text-[#4F7C6A] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
                      -₹{discount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.delivery')}:
                    </span>
                    <span className="text-[13px] text-[#4F7C6A] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
                      {t('cart.free')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.taxes')}:
                    </span>
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.included')}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {t('cart.total')}:
                  </span>
                  <span className="text-[20px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                    ₹{subtotal}
                  </span>
                </div>

                <a
                  href="/checkout"
                  className="block w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] text-center hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  {t('cart.proceedToCheckout')}
                </a>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t border-[#E5E5E5] dark:border-[#3A3A3A] space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.securePayments')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.easyReturns')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1A1A1A] border-t border-[#E5E5E5] dark:border-[#3A3A3A] z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('cart.total')}
            </p>
            <p className="text-[20px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
              ₹{subtotal}
            </p>
          </div>
          <a
            href="/checkout"
            className="px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
          >
            {t('cart.proceedToCheckout')}
          </a>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

import { useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { cartTranslations } from '../translations/cartTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle2, Package, Truck, MapPin, CreditCard, Mail } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export default function OrderConfirmation() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, isLoading, user } = useAuth();
  const t = (key: string) => cartTranslations[key]?.[language] || key;

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  const orderId = '#ORD' + Math.random().toString(36).substr(2, 6).toUpperCase();
  const expectedDelivery = '15 Feb 2026';

  const items: OrderItem[] = [
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      variant: 'Medium | Natural',
      price: 450,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      variant: 'Small | Brown',
      price: 550,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryAddress = {
    name: 'Meghram Meena',
    address: 'IIIT Bhagalpur',
    city: 'Bhagalpur',
    state: 'Bihar',
    pincode: '813210'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4">
        <div className="max-w-[900px] mx-auto">
          {/* Success Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8F5E9] dark:bg-[#1B5E20] rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-[#4CAF50]" />
            </div>
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('order.confirmed')}
            </h1>
            <p className="text-[16px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('order.thankYou')}
            </p>
          </div>

          {/* Order ID */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6 text-center">
            <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
              {t('order.orderId')}
            </p>
            <p className="text-[24px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
              {orderId}
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
              <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                {t('order.details')}
              </h2>
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-[#E5E5E5] dark:border-[#3A3A3A] last:border-0">
                  <div className="w-20 h-20 flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Playfair_Display',serif] line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-2 font-['Inter',sans-serif]">
                      {item.variant} • Qty: {item.quantity}
                    </p>
                    <p className="text-[16px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Delivery Info */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                  {t('order.deliveryInfo')}
                </h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                    {t('order.expectedDelivery')}
                  </p>
                  <p className="text-[15px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {expectedDelivery}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                    {t('order.deliveredTo')}
                  </p>
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {deliveryAddress.name}<br />
                    {deliveryAddress.address}<br />
                    {deliveryAddress.city}, {deliveryAddress.state}<br />
                    {deliveryAddress.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                  {t('order.paymentSummary')}
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {t('checkout.paymentMethod')}:
                  </span>
                  <span className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    UPI
                  </span>
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('order.amountPaid')}:
                    </span>
                    <span className="text-[20px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                      ₹{total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="/track-order"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
            >
              <MapPin className="w-4 h-4" />
              {t('order.trackOrder')}
            </a>
            <a
              href="/home-logged-in"
              className="flex-1 px-6 py-3.5 bg-white dark:bg-[#1A1A1A] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg font-semibold text-[15px] text-center hover:bg-[#7A4A2E] hover:text-white dark:hover:bg-[#4F7C6A] dark:hover:text-white transition-all font-['Inter',sans-serif]"
            >
              {t('cart.continueShopping')}
            </a>
          </div>

          {/* Email Confirmation */}
          <div className="bg-[#F0EDE9] dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] text-center">
            <Mail className="w-8 h-8 text-[#7A4A2E] dark:text-[#4F7C6A] mx-auto mb-3" />
            <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
              {t('order.emailConfirmation')}
            </p>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

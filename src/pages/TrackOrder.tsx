import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { accountTranslations } from '../translations/accountTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Package, Truck, CheckCircle2, ExternalLink, FileDown, HelpCircle } from 'lucide-react';

export default function TrackOrder() {
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

  const [currentStep, setCurrentStep] = useState(2);

  const orderId = '#ORD' + Math.random().toString(36).substr(2, 6).toUpperCase();
  const placedDate = '8 Feb 2026';
  const expectedDelivery = '12 Feb 2026';
  const courier = 'Delhivery';
  const trackingId = 'DL' + Math.random().toString(36).substr(2, 9).toUpperCase();

  const items = [
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      variant: 'Medium | Natural',
      price: 450,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const steps = [
    { id: 1, label: t('track.orderPlaced'), icon: CheckCircle2 },
    { id: 2, label: t('track.shipped'), icon: Package },
    { id: 3, label: t('track.outForDelivery'), icon: Truck },
    { id: 4, label: t('track.delivered'), icon: CheckCircle2 }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StoreNavbar cartCount={2} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('track.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('track.orderId')} {orderId} • {t('track.placedOn')} {placedDate}
            </p>
          </div>

          {/* Status Tracker */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 md:p-8 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6">
            <div className="relative">
              {/* Mobile: Vertical */}
              <div className="md:hidden space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-start gap-3">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step.id
                          ? 'bg-[#4F7C6A] text-white'
                          : 'bg-[#E5E5E5] dark:bg-[#3A3A3A] text-[#6B6B6B] dark:text-[#9CA3AF]'
                      }`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 ${
                          currentStep > step.id
                            ? 'bg-[#4F7C6A]'
                            : 'bg-[#E5E5E5] dark:bg-[#3A3A3A]'
                        }`} />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className={`text-[14px] font-semibold font-['Inter',sans-serif] ${
                        currentStep >= step.id
                          ? 'text-[#1F1F1F] dark:text-[#FAF9F7]'
                          : 'text-[#6B6B6B] dark:text-[#9CA3AF]'
                      }`}>
                        {step.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Horizontal */}
              <div className="hidden md:flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex-1 flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        currentStep >= step.id
                          ? 'bg-[#4F7C6A] text-white'
                          : 'bg-[#E5E5E5] dark:bg-[#3A3A3A] text-[#6B6B6B] dark:text-[#9CA3AF]'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <p className={`text-[13px] font-semibold text-center font-['Inter',sans-serif] ${
                        currentStep >= step.id
                          ? 'text-[#1F1F1F] dark:text-[#FAF9F7]'
                          : 'text-[#6B6B6B] dark:text-[#9CA3AF]'
                      }`}>
                        {step.label}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`h-0.5 flex-1 -mt-9 ${
                        currentStep > step.id
                          ? 'bg-[#4F7C6A]'
                          : 'bg-[#E5E5E5] dark:bg-[#3A3A3A]'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6">
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              Delivery Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                  {t('track.expectedDelivery')}
                </p>
                <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                  {expectedDelivery}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                  {t('track.courier')}
                </p>
                <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                  {courier}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-1 font-['Inter',sans-serif]">
                  {t('track.trackingId')}
                </p>
                <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                  {trackingId}
                </p>
              </div>
            </div>
            <a
              href="#track-courier"
              className="inline-flex items-center gap-2 mt-4 text-[13px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline font-['Inter',sans-serif]"
            >
              {t('track.trackOnCourier')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Items Summary */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6">
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              Order Items
            </h2>
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Playfair_Display',serif]">
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

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-[#1A1A1A] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg font-semibold text-[14px] hover:bg-[#7A4A2E] hover:text-white dark:hover:bg-[#4F7C6A] dark:hover:text-white transition-all font-['Inter',sans-serif]">
              <FileDown className="w-4 h-4" />
              {t('track.downloadInvoice')}
            </button>
            <a
              href="/contact-support"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
            >
              <HelpCircle className="w-4 h-4" />
              {t('track.needHelp')}
            </a>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

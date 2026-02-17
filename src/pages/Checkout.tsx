import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useStoreData } from '../contexts/StoreDataContext';
import { cartTranslations } from '../translations/cartTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, ChevronRight, CreditCard, Building2, Smartphone, Banknote, X } from 'lucide-react';

interface CheckoutItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  type: 'home' | 'work';
}

export default function Checkout() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, user, isLoading } = useAuth();
  const { addOrder } = useStoreData();
  const t = (key: string) => cartTranslations[key]?.[language] || key;

  // Redirect if not authenticated or if admin
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        // Admins should not access customer checkout
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  const [step, setStep] = useState(1);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  
  const [newAddress, setNewAddress] = useState<Address>({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    type: 'home'
  });

  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const items: CheckoutItem[] = [
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
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR0ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const savedAddresses: Address[] = [
    {
      name: 'Meghram Meena',
      phone: '9XXXXXXXXX',
      address: 'IIIT Bhagalpur',
      city: 'Bhagalpur',
      state: 'Bihar',
      pincode: '813210',
      type: 'home'
    }
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleSaveAddress = () => {
    setSelectedAddress(newAddress);
    setShowAddressForm(false);
    setStep(2);
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress || !user) return;
    
    // Generate order ID
    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const orderId = `order_${Date.now()}`;
    
    // Create order
    const newOrder = {
      id: orderId,
      orderNumber: orderNumber,
      customerId: user.phone || user.email,
      customerName: user.name,
      customerEmail: user.email,
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        variant: item.variant,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      subtotal: total,
      shipping: total >= 500 ? 0 : 50,
      total: total >= 500 ? total : total + 50,
      status: 'pending' as const,
      paymentMethod: selectedPayment === 'upi' ? 'UPI' : 
                    selectedPayment === 'card' ? 'Credit/Debit Card' :
                    selectedPayment === 'netbanking' ? 'Net Banking' : 'Cash on Delivery',
      shippingAddress: selectedAddress,
      createdAt: new Date().toISOString(),
    };
    
    // Save order to context
    addOrder(newOrder);
    
    // Store order number in sessionStorage for order confirmation page
    sessionStorage.setItem('latestOrderNumber', orderNumber);
    
    // Navigate to order confirmation
    window.location.href = '/order-confirmation';
  };

  return (
    <>
      <StoreNavbar cartCount={items.length} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4 pb-24 lg:pb-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-8 font-['Playfair_Display',serif]">
            {t('checkout.title')}
          </h1>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#7A4A2E] dark:text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ${step >= 1 ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white' : 'bg-[#E5E5E5] dark:bg-[#3A3A3A]'}`}>
                  {step > 1 ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-[13px] font-semibold font-['Inter',sans-serif] hidden sm:inline">
                  {t('checkout.step1')}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B6B6B] dark:text-[#9CA3AF]" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#7A4A2E] dark:text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ${step >= 2 ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white' : 'bg-[#E5E5E5] dark:bg-[#3A3A3A]'}`}>
                  {step > 2 ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span className="text-[13px] font-semibold font-['Inter',sans-serif] hidden sm:inline">
                  {t('checkout.step2')}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B6B6B] dark:text-[#9CA3AF]" />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#7A4A2E] dark:text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ${step >= 3 ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white' : 'bg-[#E5E5E5] dark:bg-[#3A3A3A]'}`}>
                  3
                </div>
                <span className="text-[13px] font-semibold font-['Inter',sans-serif] hidden sm:inline">
                  {t('checkout.step3')}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* STEP 1: ADDRESS */}
              {step === 1 && (
                <div className="space-y-4">
                  {/* Saved Addresses */}
                  {savedAddresses.map((address, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Inter',sans-serif]">
                            {address.name}
                          </p>
                          <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                            {address.address}<br />
                            {address.city}, {address.state} – {address.pincode}<br />
                            📞 {address.phone}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-[#F0EDE9] dark:bg-[#2A2A2A] text-[#7A4A2E] dark:text-[#4F7C6A] text-[11px] font-semibold rounded-full uppercase font-['Inter',sans-serif]">
                          {address.type}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedAddress(address);
                          setStep(2);
                        }}
                        className="w-full px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                      >
                        {t('checkout.deliverHere')}
                      </button>
                    </div>
                  ))}

                  {/* Add New Address Button */}
                  {!showAddressForm && (
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="w-full px-6 py-4 bg-white dark:bg-[#1A1A1A] border-2 border-dashed border-[#7A4A2E] dark:border-[#4F7C6A] text-[#7A4A2E] dark:text-[#4F7C6A] rounded-lg font-semibold text-[14px] hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] transition-all font-['Inter',sans-serif]"
                    >
                      + {t('checkout.addNewAddress')}
                    </button>
                  )}

                  {/* Add New Address Form */}
                  {showAddressForm && (
                    <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                          {t('checkout.addNewAddress')}
                        </h3>
                        <button
                          onClick={() => setShowAddressForm(false)}
                          className="p-2 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF]" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.fullName')}
                          </label>
                          <input
                            type="text"
                            value={newAddress.name}
                            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.phone')}
                          </label>
                          <input
                            type="tel"
                            value={newAddress.phone}
                            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.pincode')}
                          </label>
                          <input
                            type="text"
                            value={newAddress.pincode}
                            onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.address')}
                          </label>
                          <textarea
                            value={newAddress.address}
                            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                            rows={2}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.city')}
                          </label>
                          <input
                            type="text"
                            value={newAddress.city}
                            onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.state')}
                          </label>
                          <input
                            type="text"
                            value={newAddress.state}
                            onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.addressType')}
                          </label>
                          <div className="flex gap-4">
                            <button
                              onClick={() => setNewAddress({ ...newAddress, type: 'home' })}
                              className={`flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                                newAddress.type === 'home'
                                  ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                                  : 'bg-[#F0EDE9] dark:bg-[#2A2A2A] text-[#1F1F1F] dark:text-[#FAF9F7]'
                              }`}
                            >
                              {t('checkout.home')}
                            </button>
                            <button
                              onClick={() => setNewAddress({ ...newAddress, type: 'work' })}
                              className={`flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                                newAddress.type === 'work'
                                  ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                                  : 'bg-[#F0EDE9] dark:bg-[#2A2A2A] text-[#1F1F1F] dark:text-[#FAF9F7]'
                              }`}
                            >
                              {t('checkout.work')}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button
                          onClick={() => setShowAddressForm(false)}
                          className="flex-1 px-6 py-3 bg-[#F0EDE9] dark:bg-[#2A2A2A] text-[#1F1F1F] dark:text-[#FAF9F7] rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
                        >
                          {t('checkout.cancel')}
                        </button>
                        <button
                          onClick={handleSaveAddress}
                          className="flex-1 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                        >
                          {t('checkout.saveAddress')}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: PAYMENT */}
              {step === 2 && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h3 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                    {t('checkout.paymentMethod')}
                  </h3>

                  {/* Payment Options */}
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => setSelectedPayment('upi')}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPayment === 'upi'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A] bg-[#F0EDE9] dark:bg-[#2A2A2A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'upi'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}>
                        {selectedPayment === 'upi' && <div className="w-3 h-3 rounded-full bg-[#7A4A2E] dark:bg-[#4F7C6A]" />}
                      </div>
                      <Smartphone className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                      <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {t('checkout.upi')}
                      </span>
                    </button>

                    <button
                      onClick={() => setSelectedPayment('card')}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPayment === 'card'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A] bg-[#F0EDE9] dark:bg-[#2A2A2A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'card'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}>
                        {selectedPayment === 'card' && <div className="w-3 h-3 rounded-full bg-[#7A4A2E] dark:bg-[#4F7C6A]" />}
                      </div>
                      <CreditCard className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                      <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {t('checkout.card')}
                      </span>
                    </button>

                    <button
                      onClick={() => setSelectedPayment('netbanking')}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPayment === 'netbanking'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A] bg-[#F0EDE9] dark:bg-[#2A2A2A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'netbanking'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}>
                        {selectedPayment === 'netbanking' && <div className="w-3 h-3 rounded-full bg-[#7A4A2E] dark:bg-[#4F7C6A]" />}
                      </div>
                      <Building2 className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                      <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {t('checkout.netBanking')}
                      </span>
                    </button>

                    <button
                      onClick={() => setSelectedPayment('cod')}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPayment === 'cod'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A] bg-[#F0EDE9] dark:bg-[#2A2A2A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'cod'
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      }`}>
                        {selectedPayment === 'cod' && <div className="w-3 h-3 rounded-full bg-[#7A4A2E] dark:bg-[#4F7C6A]" />}
                      </div>
                      <Banknote className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                      <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {t('checkout.cod')}
                      </span>
                    </button>
                  </div>

                  {/* Payment Details Form */}
                  {selectedPayment === 'upi' && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                          {t('checkout.upiId')}
                        </label>
                        <input
                          type="text"
                          value={paymentDetails.upiId}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, upiId: e.target.value })}
                          placeholder="yourname@upi"
                          className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                        />
                      </div>
                    </div>
                  )}

                  {selectedPayment === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                          {t('checkout.cardNumber')}
                        </label>
                        <input
                          type="text"
                          value={paymentDetails.cardNumber}
                          onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.expiry')}
                          </label>
                          <input
                            type="text"
                            value={paymentDetails.expiry}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                        <div>
                          <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                            {t('checkout.cvv')}
                          </label>
                          <input
                            type="text"
                            value={paymentDetails.cvv}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                            placeholder="123"
                            maxLength={3}
                            className="w-full px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        <Check className="w-3 h-3 text-[#4F7C6A]" />
                        {t('checkout.pciCompliant')} • {t('checkout.noCardStored')}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setStep(3)}
                    className="w-full mt-6 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                  >
                    {t('checkout.step3')}
                  </button>
                </div>
              )}

              {/* STEP 3: REVIEW */}
              {step === 3 && selectedAddress && (
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                        {t('checkout.orderSummary')}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="w-16 h-16 flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] line-clamp-1 font-['Inter',sans-serif]">
                              {item.name}
                            </p>
                            <p className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                              {item.variant} • Qty: {item.quantity}
                            </p>
                            <p className="text-[14px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                        {t('checkout.deliveryAddress')}
                      </h3>
                      <button
                        onClick={() => setStep(1)}
                        className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline font-['Inter',sans-serif]"
                      >
                        {t('checkout.edit')}
                      </button>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {selectedAddress.name}<br />
                      {selectedAddress.address}<br />
                      {selectedAddress.city}, {selectedAddress.state} – {selectedAddress.pincode}<br />
                      📞 {selectedAddress.phone}
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif]">
                        {t('checkout.paymentMethod')}
                      </h3>
                      <button
                        onClick={() => setStep(2)}
                        className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline font-['Inter',sans-serif]"
                      >
                        {t('checkout.edit')}
                      </button>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif] capitalize">
                      {selectedPayment === 'upi' && t('checkout.upi')}
                      {selectedPayment === 'card' && t('checkout.card')}
                      {selectedPayment === 'netbanking' && t('checkout.netBanking')}
                      {selectedPayment === 'cod' && t('checkout.cod')}
                    </p>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full px-6 py-4 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[16px] hover:shadow-xl transition-all font-['Inter',sans-serif]"
                  >
                    {t('checkout.placeOrder')}
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] lg:sticky lg:top-24">
                <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                  {t('cart.priceDetails')}
                </h2>

                <div className="space-y-3 mb-4 pb-4 border-b border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('cart.subtotal')} ({items.length} {t('cart.items')}):
                    </span>
                    <span className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                      ₹{total}
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

                <div className="flex justify-between">
                  <span className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {t('cart.total')}:
                  </span>
                  <span className="text-[20px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                    ₹{total}
                  </span>
                </div>

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

      <StoreFooter />
    </>
  );
}

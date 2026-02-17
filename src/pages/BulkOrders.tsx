import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { accountTranslations } from '../translations/accountTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Check, Building2 } from 'lucide-react';

export default function BulkOrders() {
  const { language } = useThemeLanguage();
  const { user, isLoading } = useAuth();
  const t = (key: any) => accountTranslations[key]?.[language] || key;

  // Redirect admins to their dashboard
  useEffect(() => {
    if (!isLoading && user?.isAdmin) {
      window.location.href = '/admin';
    }
  }, [isLoading, user]);

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productName: '',
    quantity: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bulk order request:', formData);
    alert('Request submitted! Our team will contact you within 24 hours.');
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      productName: '',
      quantity: '',
      message: ''
    });
  };

  const benefits = [
    'Discounted pricing for bulk quantities',
    'GST invoice provided',
    'Dedicated account manager',
    'Priority shipping and handling'
  ];

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Building2 className="w-12 h-12 text-[#7A4A2E] dark:text-[#4F7C6A] mx-auto mb-4" />
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
              {t('bulk.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('bulk.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits Section */}
            <div>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-6">
                <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                  Why Choose Us for Bulk Orders?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4F7C6A] mt-0.5 flex-shrink-0" />
                      <p className="text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-[#F0EDE9] dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
                  Perfect For
                </h3>
                <ul className="space-y-2 text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  <li>• Corporate gifting</li>
                  <li>• Event merchandise</li>
                  <li>• Retail partnerships</li>
                  <li>• Wedding favors</li>
                  <li>• Hotel & restaurant supplies</li>
                </ul>
              </div>
            </div>

            {/* Bulk Order Form */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('bulk.companyName')}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('bulk.contactPerson')}
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('bulk.productName')}
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    required
                    placeholder="e.g., Natural Jute Tote Bag or product URL"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('bulk.quantity')}
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                    placeholder="e.g., 100"
                    min="10"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('bulk.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Additional details or customization requirements..."
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  {t('bulk.submit')}
                </button>

                <p className="text-[12px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {t('bulk.responseTime')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

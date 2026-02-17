import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Package, RotateCcw, CreditCard, FileText, Mail, Phone, Clock } from 'lucide-react';

export default function ContactSupport() {
  const { language } = useThemeLanguage();
  const t = (key: any) => supportTranslations[key]?.[language] || key;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    issueType: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickHelpOptions = [
    {
      icon: Package,
      title: t('contact.trackOrder'),
      link: '#track'
    },
    {
      icon: RotateCcw,
      title: t('contact.returnItem'),
      link: '/shipping-returns'
    },
    {
      icon: CreditCard,
      title: t('contact.paymentIssue'),
      link: '#payment'
    },
    {
      icon: FileText,
      title: t('contact.shippingReturns'),
      link: '/shipping-returns'
    }
  ];

  const issueTypes = [
    { value: 'order', label: t('issue.orderRelated') },
    { value: 'payment', label: t('issue.payment') },
    { value: 'returns', label: t('issue.returns') },
    { value: 'account', label: t('issue.account') },
    { value: 'other', label: t('issue.other') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Message sent! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      orderId: '',
      issueType: '',
      message: ''
    });
  };

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
              {t('contact.title')}
            </h1>
            <p className="text-[16px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Quick Help Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickHelpOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] hover:border-[#7A4A2E] dark:hover:border-[#4F7C6A] hover:shadow-lg transition-all group text-center"
              >
                <option.icon className="w-8 h-8 text-[#7A4A2E] dark:text-[#4F7C6A] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                  {option.title}
                </p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                {t('contact.formTitle')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('contact.orderId')}
                  </label>
                  <input
                    type="text"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    placeholder="#ORD123456"
                    className="w-full px-3 py-2.5 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('contact.issueType')}
                  </label>
                  <select
                    value={formData.issueType}
                    onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  >
                    <option value="">Select an issue type</option>
                    {issueTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('contact.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  {t('contact.submit')}
                </button>

                <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] text-center font-['Inter',sans-serif]">
                  {t('contact.responseTime')}
                </p>
              </form>
            </div>

            {/* Support Details */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                  Support Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Inter',sans-serif]">
                        {t('contact.supportEmail')}
                      </p>
                      <a href="mailto:support@lakhilrajfoundation.org" className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
                        support@lakhilrajfoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Inter',sans-serif]">
                        {t('contact.supportPhone')}
                      </p>
                      <a href="tel:+919XXXXXXXXX" className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
                        +91 9XXXXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Inter',sans-serif]">
                        {t('contact.supportHours')}
                      </p>
                      <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        Mon–Sat, 10AM – 6PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Resources */}
              <div className="bg-[#F0EDE9] dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a href="/shipping-returns" className="block text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
                    → Shipping & Returns Policy
                  </a>
                  <a href="/faq" className="block text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
                    → Frequently Asked Questions
                  </a>
                  <a href="/login" className="block text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]">
                    → Track Your Order (Login)
                  </a>
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

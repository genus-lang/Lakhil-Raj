import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ShippingReturns() {
  const { language } = useThemeLanguage();
  const t = (key: any) => supportTranslations[key]?.[language] || key;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: 'When will my order arrive?',
      answer: 'Orders are processed within 24-48 hours and delivered within 3-7 business days depending on your location.'
    },
    {
      question: 'How do I initiate a return?',
      answer: 'Contact us within 7 days of delivery with your order ID. Our team will guide you through the return process.'
    },
    {
      question: 'When will I get my refund?',
      answer: 'Refunds are processed within 5-7 business days after we receive the returned item. The amount will be credited to your original payment method.'
    },
    {
      question: 'Is Cash on Delivery available?',
      answer: 'Yes, Cash on Delivery is available on eligible locations. You can select this option during checkout.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship across India only. International shipping will be available soon.'
    }
  ];

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
              {t('shipping.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {t('shipping.subtitle')}
            </p>
          </div>

          {/* Shipping Policy */}
          <section className="mb-8">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                {t('shipping.policy')}
              </h2>
              <ul className="space-y-2 text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Orders are processed within 24–48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Delivery time: 3–7 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Free shipping on all prepaid orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Cash on Delivery available on eligible locations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Orders are shipped via trusted courier partners.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Inter',sans-serif]">
                  Delivery Coverage
                </p>
                <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  We currently ship across India.
                </p>
              </div>
            </div>
          </section>

          {/* Returns & Refunds */}
          <section className="mb-8">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                {t('shipping.returns')}
              </h2>
              <ul className="space-y-2 text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif] mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>7-day return window from delivery date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Product must be unused and in original packaging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Refunds are processed within 5–7 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A4A2E] dark:text-[#4F7C6A] mt-1">•</span>
                  <span>Refunds credited to original payment method.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Inter',sans-serif]">
                  Non-Returnable Items
                </p>
                <ul className="space-y-2 text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Gift cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Customized products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Clearance items</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                {t('shipping.faq')}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] transition-colors"
                    >
                      <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#6B6B6B] dark:text-[#9CA3AF] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}

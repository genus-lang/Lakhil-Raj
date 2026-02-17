import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { FAQHero } from '../components/FAQ/FAQHero';
import { FAQAccordion } from '../components/FAQ/FAQAccordion';
import { FAQContact } from '../components/FAQ/FAQContact';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { faqTranslations } from '../translations/faqTranslations';

export default function FAQ() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = faqTranslations[language as keyof typeof faqTranslations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1F1D] transition-colors duration-200">
      {/* Header - Sticky */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <FAQHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. FAQ Accordion */}
        <FAQAccordion
          sectionTitle={t('accordion.sectionTitle')}
          subtitle={t('accordion.subtitle')}
          faqs={t('accordion.faqs')}
        />

        {/* 3. Still Have Questions CTA */}
        <FAQContact
          title={t('contact.title')}
          description={t('contact.description')}
          button={t('contact.button')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

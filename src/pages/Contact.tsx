import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { ContactHero } from '../components/Contact/ContactHero';
import { ContactSection } from '../components/Contact/ContactSection';
import { ContactMap } from '../components/Contact/ContactMap';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { contactTranslations } from '../translations/contactTranslations';

export default function Contact() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = contactTranslations[language as keyof typeof contactTranslations];
    
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
        <ContactHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Contact Details + Form */}
        <ContactSection
          contactInfo={t('contactInfo')}
          form={t('form')}
          socialMedia={t('socialMedia')}
        />

        {/* 3. Map Section */}
        <ContactMap
          title={t('map.title')}
          address={t('map.address')}
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

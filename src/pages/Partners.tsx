import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { PartnersHero } from '../components/Partners/PartnersHero';
import { PartnersGrid } from '../components/Partners/PartnersGrid';
import { PartnershipBenefits } from '../components/Partners/PartnershipBenefits';
import { PartnerCTA } from '../components/Partners/PartnerCTA';
import { TeamLink } from '../components/Partners/TeamLink';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { partnersTranslations } from '../translations/partnersTranslations';

export default function Partners() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = partnersTranslations[language as keyof typeof partnersTranslations];
    
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
        <PartnersHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Partners Grid */}
        <PartnersGrid
          sectionTitle={t('grid.sectionTitle')}
          subtitle={t('grid.subtitle')}
          partners={t('grid.partners')}
        />

        {/* 3. Partnership Benefits */}
        <PartnershipBenefits
          sectionTitle={t('benefits.sectionTitle')}
          subtitle={t('benefits.subtitle')}
          benefits={t('benefits.benefits')}
        />

        {/* 4. CTA Section */}
        <PartnerCTA
          title={t('cta.title')}
          description={t('cta.description')}
          button={t('cta.button')}
        />

        {/* 5. Team Link */}
        <TeamLink />
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

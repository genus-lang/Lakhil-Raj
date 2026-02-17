import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { TeamHero } from '../components/Team/TeamHero';
import { TeamGrid } from '../components/Team/TeamGrid';
import { AdvisoryBoard } from '../components/Team/AdvisoryBoard';
import { PartnersCTA } from '../components/Team/PartnersCTA';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { teamTranslations } from '../translations/teamTranslations';

export default function Team() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = teamTranslations[language as keyof typeof teamTranslations];
    
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
        <TeamHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Team Grid (Staff + Volunteers) */}
        <TeamGrid
          sectionTitle={t('team.sectionTitle')}
          subtitle={t('team.subtitle')}
          members={t('team.members')}
        />

        {/* 3. Advisory Board */}
        <AdvisoryBoard
          sectionTitle={t('advisory.sectionTitle')}
          subtitle={t('advisory.subtitle')}
          members={t('advisory.members')}
        />

        {/* 4. Partners CTA Link */}
        <PartnersCTA />
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

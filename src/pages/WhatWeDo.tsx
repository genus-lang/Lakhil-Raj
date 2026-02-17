import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { PageHero } from '../components/WhatWeDo/PageHero';
import { WhatWeDoCards } from '../components/WhatWeDo/WhatWeDoCards';
import { ImpactPreview } from '../components/WhatWeDo/ImpactPreview';
import { ProgramsPreview } from '../components/WhatWeDo/ProgramsPreview';
import { HowWeHelp } from '../components/WhatWeDo/HowWeHelp';
import { TrustStrip } from '../components/WhatWeDo/TrustStrip';
import { CTABanner } from '../components/WhatWeDo/CTABanner';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { whatWeDoTranslations } from '../translations/whatWeDoTranslations';

export default function WhatWeDo() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = whatWeDoTranslations[language as keyof typeof whatWeDoTranslations];
    
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
        {/* 1. Page Hero / Intro */}
        <PageHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. What We Do Cards */}
        <WhatWeDoCards
          sectionTitle={t('whatWeDo.sectionTitle')}
          cards={{
            digitalEducation: {
              title: t('whatWeDo.cards.digitalEducation.title'),
              description: t('whatWeDo.cards.digitalEducation.description'),
            },
            careerGuidance: {
              title: t('whatWeDo.cards.careerGuidance.title'),
              description: t('whatWeDo.cards.careerGuidance.description'),
            },
            cyberSafety: {
              title: t('whatWeDo.cards.cyberSafety.title'),
              description: t('whatWeDo.cards.cyberSafety.description'),
            },
            environmental: {
              title: t('whatWeDo.cards.environmental.title'),
              description: t('whatWeDo.cards.environmental.description'),
            },
          }}
        />

        {/* 3. Impact Preview */}
        <ImpactPreview
          stats={{
            studentsEducated: t('impact.studentsEducated'),
            workshopsConducted: t('impact.workshopsConducted'),
            schoolsReached: t('impact.schoolsReached'),
            volunteers: t('impact.volunteers'),
          }}
        />

        {/* 4. Programs Preview */}
        <ProgramsPreview
          sectionTitle={t('programs.sectionTitle')}
          learnMore={t('programs.learnMore')}
          programs={{
            digitalEducation: t('programs.digitalEducation'),
            careerAwareness: t('programs.careerAwareness'),
            cyberSafety: t('programs.cyberSafety'),
            environmental: t('programs.environmental'),
          }}
        />

        {/* 5. How Our Work Helps */}
        <HowWeHelp
          sectionTitle={t('howWeHelp.sectionTitle')}
          blocks={{
            access: {
              title: t('howWeHelp.access.title'),
              description: t('howWeHelp.access.description'),
            },
            awareness: {
              title: t('howWeHelp.awareness.title'),
              description: t('howWeHelp.awareness.description'),
            },
            empowerment: {
              title: t('howWeHelp.empowerment.title'),
              description: t('howWeHelp.empowerment.description'),
            },
          }}
        />

        {/* 6. Trust Strip */}
        <TrustStrip
          items={{
            registered: t('trust.registered'),
            activeSince: t('trust.activeSince'),
            communityDriven: t('trust.communityDriven'),
          }}
        />

        {/* 7. CTA Banner */}
        <CTABanner
          text={t('cta.text')}
          buttonText={t('cta.button')}
        />
      </main>

      {/* Footer - Same as Home */}
      <Footer />

      {/* ChatBot - Same as Home */}
      <ChatBot />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { AboutPageHero } from '../components/About/AboutPageHero';
import { OurStory } from '../components/About/OurStory';
import { OurJourney } from '../components/About/OurJourney';
import { WhySambhavExists } from '../components/About/WhySambhavExists';
import { OurValues } from '../components/About/OurValues';
import { HowWeAreDifferent } from '../components/About/HowWeAreDifferent';
import { TeamSnapshot } from '../components/About/TeamSnapshot';
import { AboutCTA } from '../components/About/AboutCTA';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { aboutTranslations } from '../translations/aboutTranslations';

export default function About() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = aboutTranslations[language as keyof typeof aboutTranslations];
    
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
        {/* 1. About Page Hero / Intro */}
        <AboutPageHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Our Story (Intro Paragraph) */}
        <OurStory
          paragraph={t('story.paragraph')}
        />

        {/* 3. Our Journey (Timeline) */}
        <OurJourney
          sectionTitle={t('journey.sectionTitle')}
          milestones={t('journey.milestones')}
        />

        {/* 4. Why Sambhav Exists (Problem → Solution → Vision) */}
        <WhySambhavExists
          sectionTitle={t('whyExists.sectionTitle')}
          problem={{
            title: t('whyExists.problem.title'),
            text: t('whyExists.problem.text'),
          }}
          solution={{
            title: t('whyExists.solution.title'),
            text: t('whyExists.solution.text'),
          }}
          vision={{
            title: t('whyExists.vision.title'),
            text: t('whyExists.vision.text'),
          }}
        />

        {/* 5. Our Values */}
        <OurValues
          sectionTitle={t('values.sectionTitle')}
          integrity={{
            title: t('values.integrity.title'),
            text: t('values.integrity.text'),
          }}
          inclusivity={{
            title: t('values.inclusivity.title'),
            text: t('values.inclusivity.text'),
          }}
          collaboration={{
            title: t('values.collaboration.title'),
            text: t('values.collaboration.text'),
          }}
          sustainability={{
            title: t('values.sustainability.title'),
            text: t('values.sustainability.text'),
          }}
        />

        {/* 6. How We Are Different */}
        <HowWeAreDifferent
          sectionTitle={t('different.sectionTitle')}
          points={t('different.points')}
        />

        {/* 7. Team & Community Snapshot */}
        <TeamSnapshot
          sectionTitle={t('team.sectionTitle')}
          roles={t('team.roles')}
        />

        {/* 8. CTA Section */}
        <AboutCTA
          text={t('cta.text')}
          volunteerButton={t('cta.volunteerButton')}
          supportButton={t('cta.supportButton')}
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

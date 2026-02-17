import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { VMPageHero } from '../components/VisionMission/VMPageHero';
import { VisionMissionSplit } from '../components/VisionMission/VisionMissionSplit';
import { VisionToAction } from '../components/VisionMission/VisionToAction';
import { GuidingPrinciples } from '../components/VisionMission/GuidingPrinciples';
import { AlignmentWithWork } from '../components/VisionMission/AlignmentWithWork';
import { VMCTA } from '../components/VisionMission/VMCTA';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { visionMissionTranslations } from '../translations/visionMissionTranslations';

export default function VisionMission() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = visionMissionTranslations[language as keyof typeof visionMissionTranslations];
    
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
        {/* 1. Page Intro / Hero */}
        <VMPageHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Vision & Mission (Split Layout) */}
        <VisionMissionSplit
          vision={{
            heading: t('visionMission.vision.heading'),
            statement: t('visionMission.vision.statement'),
          }}
          mission={{
            heading: t('visionMission.mission.heading'),
            points: t('visionMission.mission.points'),
          }}
        />

        {/* 3. How Vision Turns Into Action */}
        <VisionToAction
          sectionTitle={t('action.sectionTitle')}
          education={{
            title: t('action.education.title'),
            text: t('action.education.text'),
          }}
          awareness={{
            title: t('action.awareness.title'),
            text: t('action.awareness.text'),
          }}
          empowerment={{
            title: t('action.empowerment.title'),
            text: t('action.empowerment.text'),
          }}
        />

        {/* 4. Guiding Principles */}
        <GuidingPrinciples
          sectionTitle={t('principles.sectionTitle')}
          childCentric={{
            title: t('principles.childCentric.title'),
            text: t('principles.childCentric.text'),
          }}
          communityDriven={{
            title: t('principles.communityDriven.title'),
            text: t('principles.communityDriven.text'),
          }}
          inclusive={{
            title: t('principles.inclusive.title'),
            text: t('principles.inclusive.text'),
          }}
          sustainable={{
            title: t('principles.sustainable.title'),
            text: t('principles.sustainable.text'),
          }}
        />

        {/* 5. Alignment With Our Work */}
        <AlignmentWithWork
          sectionTitle={t('alignment.sectionTitle')}
          points={t('alignment.points')}
        />

        {/* 6. CTA Section */}
        <VMCTA
          text={t('cta.text')}
          button={t('cta.button')}
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

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { StoryHero } from '../components/OurStory/StoryHero';
import { FoundersMessage } from '../components/OurStory/FoundersMessage';
import { StoryFlow } from '../components/OurStory/StoryFlow';
import { OurValues } from '../components/OurStory/OurValues';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { ourStoryTranslations } from '../translations/ourStoryTranslations';

export default function OurStory() {
  const { language } = useThemeLanguage();
  const t = (key: any) => {
    const keys = key.split('.');
    let value: any = ourStoryTranslations[language as keyof typeof ourStoryTranslations];
    
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
        {/* 1. Page Hero */}
        <StoryHero
          eyebrow={t('hero.eyebrow')}
          heading={t('hero.heading')}
          subtext={t('hero.subtext')}
        />

        {/* 2. Founder's Message */}
        <FoundersMessage
          sectionTitle={t('foundersMessage.sectionTitle')}
          founderName={t('foundersMessage.founderName')}
          founderTitle={t('foundersMessage.founderTitle')}
          message={t('foundersMessage.message')}
        />

        {/* 3. Story Flow (Problem → First Action → Growth → Today) */}
        <StoryFlow
          sectionTitle={t('storyFlow.sectionTitle')}
          problem={{
            title: t('storyFlow.problem.title'),
            year: t('storyFlow.problem.year'),
            description: t('storyFlow.problem.description'),
            quote: t('storyFlow.problem.quote'),
            quoteAuthor: t('storyFlow.problem.quoteAuthor'),
          }}
          firstAction={{
            title: t('storyFlow.firstAction.title'),
            year: t('storyFlow.firstAction.year'),
            description: t('storyFlow.firstAction.description'),
            quote: t('storyFlow.firstAction.quote'),
            quoteAuthor: t('storyFlow.firstAction.quoteAuthor'),
          }}
          growth={{
            title: t('storyFlow.growth.title'),
            year: t('storyFlow.growth.year'),
            description: t('storyFlow.growth.description'),
            quote: t('storyFlow.growth.quote'),
            quoteAuthor: t('storyFlow.growth.quoteAuthor'),
          }}
          today={{
            title: t('storyFlow.today.title'),
            year: t('storyFlow.today.year'),
            description: t('storyFlow.today.description'),
            quote: t('storyFlow.today.quote'),
            quoteAuthor: t('storyFlow.today.quoteAuthor'),
          }}
        />

        {/* 4. Our Values (6 Cards) */}
        <OurValues
          sectionTitle={t('values.sectionTitle')}
          subtitle={t('values.subtitle')}
          educationFirst={{
            title: t('values.educationFirst.title'),
            description: t('values.educationFirst.description'),
          }}
          integrity={{
            title: t('values.integrity.title'),
            description: t('values.integrity.description'),
          }}
          community={{
            title: t('values.community.title'),
            description: t('values.community.description'),
          }}
          inclusion={{
            title: t('values.inclusion.title'),
            description: t('values.inclusion.description'),
          }}
          transparency={{
            title: t('values.transparency.title'),
            description: t('values.transparency.description'),
          }}
          sustainability={{
            title: t('values.sustainability.title'),
            description: t('values.sustainability.description'),
          }}
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

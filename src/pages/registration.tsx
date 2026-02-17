import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';
import { RegistrationHero } from '../components/Registration/RegistrationHero';
import { VerificationBadges } from '../components/Registration/VerificationBadges';
import { RegistrationTable } from '../components/Registration/RegistrationTable';
import { RegistrationCTA } from '../components/Registration/RegistrationCTA';

export default function RegistrationPage() {
  const { t } = useThemeLanguage();

  const registrationData = {
    ngoName: t('registration.data.ngoName'),
    registrationNo: t('registration.data.registrationNo'),
    year: t('registration.data.year'),
    address: t('registration.data.address'),
    certificateUrl: '/documents/sambhav-ngo-registration-certificate.pdf',
    labels: {
      ngoName: t('registration.labels.ngoName'),
      registrationNo: t('registration.labels.registrationNo'),
      year: t('registration.labels.year'),
      address: t('registration.labels.address'),
      download: t('registration.labels.download'),
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1F1D] transition-colors duration-200">
      <Header />
      <RegistrationHero
        eyebrow={t('registration.hero.eyebrow')}
        heading={t('registration.hero.heading')}
        subtext={t('registration.hero.subtext')}
      />
      <VerificationBadges
        sectionTitle={t('registration.badges.title')}
        badges={[]}
      />
      <RegistrationTable
        data={registrationData}
        sectionTitle={t('registration.table.title')}
        subtitle={t('registration.table.subtitle')}
      />
      <RegistrationCTA
        title={t('registration.cta.title')}
        description={t('registration.cta.description')}
        button={t('registration.cta.button')}
      />
      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
}

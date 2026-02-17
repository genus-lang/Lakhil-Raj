import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { donateTranslations } from '../translations/donateTranslations';
import { DonationCard } from '../components/Donate/DonationCard';
import { WhyDonateCard } from '../components/Donate/WhyDonateCard';
import { UsageBlock } from '../components/Donate/UsageBlock';
import { BookOpen, Users, Sprout, GraduationCap, Lightbulb, Users2, Settings, CheckCircle, ShieldCheck, FileText, Eye } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';

export default function Donate() {
  const { language } = useThemeLanguage();
  const t = (key: any) => donateTranslations[key]?.[language] || key;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0A1F1C]">
      {/* Page Intro */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F2937] dark:text-[#F9FAFB] mb-3 font-['Poppins',sans-serif]">
            {t('donate.intro.heading')}
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] max-w-[700px] mx-auto font-['Inter',sans-serif]">
            {t('donate.intro.subtext')}
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-6 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WhyDonateCard
              icon={BookOpen}
              title={t('donate.why.title1')}
              description={t('donate.why.desc1')}
            />
            <WhyDonateCard
              icon={Users}
              title={t('donate.why.title2')}
              description={t('donate.why.desc2')}
            />
            <WhyDonateCard
              icon={Sprout}
              title={t('donate.why.title3')}
              description={t('donate.why.desc3')}
            />
          </div>
        </div>
      </section>

      {/* Donation Card */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <DonationCard />
        </div>
      </section>

      {/* Goodies Section */}
      <section className="py-8 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#FFF9E6] dark:bg-[#2D2416] p-6 rounded-xl border border-[#F4B400]/30 dark:border-[#F4B400]/20">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1F2937] dark:text-[#F9FAFB] mb-3 text-center font-['Poppins',sans-serif]">
              {t('donate.goodies.heading')}
            </h2>
            <p className="text-[14px] text-[#374151] dark:text-[#D1D5DB] text-center mb-5 leading-relaxed font-['Inter',sans-serif]">
              {t('donate.goodies.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-white/50 dark:bg-[#1A1410] rounded-lg">
                <div className="text-3xl mb-2">🎁</div>
                <p className="text-[13px] font-medium text-[#1F2937] dark:text-[#F9FAFB] font-['Inter',sans-serif]">
                  {t('donate.goodies.certificate')}
                </p>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-[#1A1410] rounded-lg">
                <div className="text-3xl mb-2">👕</div>
                <p className="text-[13px] font-medium text-[#1F2937] dark:text-[#F9FAFB] font-['Inter',sans-serif]">
                  {t('donate.goodies.merchandise')}
                </p>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-[#1A1410] rounded-lg">
                <div className="text-3xl mb-2">📦</div>
                <p className="text-[13px] font-medium text-[#1F2937] dark:text-[#F9FAFB] font-['Inter',sans-serif]">
                  {t('donate.goodies.kit')}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-center text-[#6B7280] dark:text-[#9CA3AF] italic font-['Inter',sans-serif]">
              {t('donate.goodies.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Transparency & Usage Section */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#1F2937] dark:text-[#F9FAFB] mb-6 text-center font-['Poppins',sans-serif]">
            {t('donate.usage.heading')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <UsageBlock
              icon={GraduationCap}
              label={t('donate.usage.education')}
            />
            <UsageBlock
              icon={Lightbulb}
              label={t('donate.usage.awareness')}
            />
            <UsageBlock
              icon={Users2}
              label={t('donate.usage.outreach')}
            />
            <UsageBlock
              icon={Settings}
              label={t('donate.usage.operational')}
            />
          </div>

          <p className="text-[13px] text-center text-[#6B7280] dark:text-[#9CA3AF] italic font-['Inter',sans-serif]">
            {t('donate.usage.note')}
          </p>
        </div>
      </section>

      {/* Trust & Security Strip */}
      <section className="py-6 px-4 bg-white dark:bg-[#0F2E2A] border-t border-b border-[#E5E7EB] dark:border-[#1F4D47]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center gap-2 p-2">
              <CheckCircle className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] text-[#374151] dark:text-[#D1D5DB] font-medium font-['Inter',sans-serif]">
                {t('donate.trust.registered')}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <ShieldCheck className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] text-[#374151] dark:text-[#D1D5DB] font-medium font-['Inter',sans-serif]">
                {t('donate.trust.secure')}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <FileText className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] text-[#374151] dark:text-[#D1D5DB] font-medium font-['Inter',sans-serif]">
                {t('donate.trust.receipt')}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <Eye className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] text-[#374151] dark:text-[#D1D5DB] font-medium font-['Inter',sans-serif]">
                {t('donate.trust.transparent')}
              </span>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
}

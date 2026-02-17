import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { WomenEmpowermentSection } from '../components/Home/WomenEmpowermentSection';
import { TrustRecognitionStrip } from '../components/TrustRecognitionStrip';
import { AboutSambhav } from '../components/AboutSambhav';
import { ProblemSection } from '../components/ProblemSection';
import { ProgramsDetailed } from '../components/ProgramsDetailed';
import { HowWeWork } from '../components/HowWeWork';
import { ImpactNumbers } from '../components/ImpactNumbers';
import { StoriesFromGround } from '../components/StoriesFromGround';
import { VolunteerCommunity } from '../components/VolunteerCommunity';
import { PartnersSupporters } from '../components/PartnersSupporters';
import { StrongCTA } from '../components/StrongCTA';
import { FAQPreview } from '../components/FAQPreview';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { BackToTop } from '../components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content - Full Home Page */}
      <main className="animate-in fade-in duration-300">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Women Empowerment - Handmade Products */}
        <WomenEmpowermentSection />

        {/* 3. Trust & Recognition Strip */}
        <TrustRecognitionStrip />

        {/* 4. About Us (Story Section) */}
        <AboutSambhav />

        {/* 5. Problem We Are Solving */}
        <ProblemSection />

        {/* 6. Our Programs (Detailed) */}
        <ProgramsDetailed />

        {/* 6. How We Work (Process) */}
        <HowWeWork />

        {/* 7. Impact & Numbers */}
        <ImpactNumbers />

        {/* 8. Stories From the Ground */}
        <StoriesFromGround />

        {/* 9. Volunteer & Community */}
        <VolunteerCommunity />

        {/* 10. Partners / Supporters Section */}
        <PartnersSupporters />

        {/* 11. Strong Call to Action */}
        <StrongCTA />

        {/* 12. FAQ Preview */}
        <FAQPreview />
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

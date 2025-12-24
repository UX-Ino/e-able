import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { RiskValueSection } from './components/RiskValueSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ReportSection } from './components/ReportSection';
import { SolutionsSection } from './components/SolutionsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <RiskValueSection />
        <BeforeAfterSection />
        <ExpertiseSection />
        <ReportSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}
import { HeroSection } from "./components/HeroSection";
import { ReferenceBar } from "./components/ReferenceBar";
import { RiskValueSection } from "./components/RiskValueSection";
import { InteractiveComparison } from "./components/InteractiveComparison";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReferenceBar />
      <RiskValueSection />
      <InteractiveComparison />
    </div>
  );
}
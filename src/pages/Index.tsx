import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import PresaleBanner from "@/components/PresaleBanner";
import Benefit from "@/components/Benefit";
import { ReactLenis } from 'lenis/react'


const Index = () => {
  return (
    <ReactLenis root>
    <div className="min-h-screen">
      <Header />
      <div className="pt-12"> {/* Add padding to account for the banner height */}
        <PresaleBanner />
        <main>
          <HeroSection />
          <FeatureSection />
          <TokenomicsSection />
          <Benefit />
          <HowToBuy />
          {/* <RoadmapSection /> */}
          <Roadmap />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
    </ReactLenis>
  );
};

export default Index;

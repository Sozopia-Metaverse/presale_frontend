import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <TokenomicsSection />
        {/* <RoadmapSection /> */}
        <Roadmap />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

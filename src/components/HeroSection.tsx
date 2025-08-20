import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doge.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Golden Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero" className="min-w-48">
              {t("hero.buyButton")}
            </Button>
            <Button variant="outline" size="hero" className="min-w-48 text-white border-white hover:bg-white hover:text-primary">
              {t("hero.whitepaperButton")}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { label: t("hero.stats.totalSupply"), value: "1B" },
              { label: t("hero.stats.stakingApy"), value: "120%" },
              { label: t("hero.stats.holders"), value: "25K+" },
              { label: t("hero.stats.burned"), value: "10M+" }
            ].map((stat, index) => (
              <div key={index} className="crypto-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
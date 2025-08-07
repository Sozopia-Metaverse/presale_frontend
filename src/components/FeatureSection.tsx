import dogeGraduate from "@/assets/doge-graduate.png";
import dogeWallet from "@/assets/doge-wallet.png";
import dogeShield from "@/assets/doge-shield.png";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const features = [
    {
      title: "GOOD BOY STAKING!",
      description: "Stake your $DOGE20 tokens and earn passive rewards while being a good boy! Our innovative staking mechanism rewards loyal holders with up to 120% APY.",
      image: dogeGraduate,
      buttonText: "STAKE NOW",
      className: "md:flex-row"
    },
    {
      title: "CONVENIENT WALLET!",
      description: "Connect your favorite wallet in seconds and start trading immediately. We support all major wallets including MetaMask, WalletConnect, and more.",
      image: dogeWallet,
      buttonText: "CONNECT WALLET",
      className: "md:flex-row-reverse"
    },
    {
      title: "NO MORE INFLATION!",
      description: "Unlike other meme coins, $DOGE20 has a deflationary mechanism. Every transaction burns tokens, making your holdings more valuable over time.",
      image: dogeShield,
      buttonText: "LEARN MORE",
      className: "md:flex-row"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${feature.className} items-center gap-12 mb-20 last:mb-0`}>
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-64 h-64 object-contain transition-transform hover:scale-110 duration-300"
                />
                <div className="absolute -inset-4 gradient-golden opacity-20 rounded-full blur-xl" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left max-w-lg">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {feature.title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {feature.description}
              </p>
              
              <Button variant="secondary" size="lg" className="font-bold">
                {feature.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
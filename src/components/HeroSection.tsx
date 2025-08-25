import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "@/assets/background.png";
import miniWood from "@/assets/mini_wood.webp";
import woodPattern from "@/assets/woodenPanel.webp";
import woodButton from "@/assets/woodenBtn.png";
import bush_round from "@/assets/bush_round.webp";
import character from "@/assets/character.png";
import character2 from "@/assets/character_side.webp";
import willowleaf from "@/assets/branch.webp";
import subcloud from "@/assets/subcloud.webp";
import border from "@/assets/border.webp";

const HeroSection = () => {
  const { t } = useTranslation();
  const { isConnected } = useAccount();
  const willowLeafRef = useRef<HTMLImageElement>(null);
  
  // Animation state for alternating sections
  const [showStats, setShowStats] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Presale data - you can replace these with real data from your smart contract
  const [timeRemaining, setTimeRemaining] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const presaleData = {
    endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    totalRaised: 850000, // in USD
    softCap: 500000, // in USD
    hardCap: 1000000, // in USD
    tokenPrice: 0.0001, // ETH per token
    isLive: true
  };

  // Animation effect for alternating sections
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Smooth transition animation
      setTimeout(() => {
        setShowStats(!showStats);
        setIsTransitioning(false);
      }, 500); // Half second transition
      
    }, 3000); // 3 seconds per section

    return () => clearInterval(interval);
  }, [showStats]);

  // Calculate time remaining function
  const calculateTimeRemaining = useCallback(() => {
    const now = new Date().getTime();
    const end = presaleData.endDate.getTime();
    const distance = end - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [presaleData.endDate]);

  // Set up countdown timer
  useEffect(() => {
    // Set initial time to exactly 15 days, 0 hours, 0 minutes, 0 seconds
    setTimeRemaining({ days: 15, hours: 0, minutes: 0, seconds: 0 });
    
    // Set up interval to update every second
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        // Decrease by 1 second
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Timer has reached zero
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (presaleData.totalRaised / presaleData.hardCap) * 100;

  return (
    <section className="relative min-h-screen min-w-screen flex items-center justify-center ">
      <img src={border} alt="border" className="absolute scale-y-[0.5] -bottom-[208px] left-[270px] h-96 w-[80vw] z-[15]"  />
      <img src={subcloud} alt="subcloud" className="absolute bottom-1/2   left-1/2 transition-transform duration-300 z-[15]"  />
      <img src={subcloud} alt="subcloud" className="absolute bottom-[150px] scale-[0.4]  -right-[550px] transition-transform duration-300 z-[15]"  />
      <img src={bush_round} alt="bush" className="absolute -bottom-[300px] -left-[450px] hover:scale-105 transition-transform duration-300 pointer-events-none z-50" width={800} height={800} />
      <img src={bush_round} alt="bush" className="absolute -bottom-[450px] rotate-[180deg] -right-[450px] hover:scale-105 transition-transform duration-300 z-50 pointer-events-none" width={800} height={800} />
      <img src={character2} alt="character2" className="absolute -bottom-[100px] scale-[0.3] -left-[300px] transition-transform duration-300 z-10" width={800} height={800} />
      <img 
        ref={willowLeafRef}
        src={willowleaf}
        alt="willowleaf" 
        className="absolute -top-[0px] rotate-[90deg] -left-[350px] transition-transform duration-300 z-[15]" 
        style={{
          transformOrigin: 'top center',
          transform: 'scale(0.5) rotate(90deg)',
          animation: 'willowleaf-shake-natural 8s ease-in-out infinite',
        }}
        width={800} 
        height={800} 
      />
      <img 
        ref={willowLeafRef}
        src={willowleaf}
        alt="willowleaf" 
        className="absolute -top-[0px] rotate-[90deg] -right-[350px] transition-transform duration-300 z-[15]" 
        style={{
          transformOrigin: 'top center',
          transform: 'scale(0.5) rotate(90deg)',
          animation: 'willowleaf_down-shake-natural 8s ease-in-out infinite',
        }}
        width={800} 
        height={800} 
      />
      
      <div className="absolute bottom-0 left-[150px] w-[70px] h-[600px] bg-gradient-to-r from-[#00482D]/0 to-[#00482D] z-10 "></div>
      <div className="absolute bottom-[550px] left-0 w-[600px] h-[30px] bg-gradient-to-t from-[#00482D]/0 to-[#00482D] z-10 "></div>
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base background image with improved positioning and scaling */}
        <div 
          className="absolute inset-0"
        />
        
        {/* Solid background color #00482D */}
        <div className="absolute inset-0 bg-[#00482D]" />
        
        {/* Remove or comment out the gradient overlays for solid color */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-emerald-900/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 via-emerald-700/15 to-green-900/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-emerald-950/10" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="flex flex-col max-lg:flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Hero Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold font-pinewood text-[#DE711A] text-white mb-6 leading-tight drop-shadow-2xl">
              {t("hero.title")}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
              {t("hero.subtitle")}
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="px-8 pt-5 scale-150 h-40 flex items-start text-white bg-cover bg-center bg-no-repeat hover:scale-[1.6] transition-transform duration-200 font-semibold text-sm rounded-lg " 
                style={{ backgroundImage: `url(${woodButton})` }}
              >
                {t("hero.whitepaperButton")}
              </button>
              <button 
                className="px-8 pt-5 scale-150 h-40 flex items-start text-white bg-cover bg-center bg-no-repeat hover:scale-[1.6] transition-transform duration-200 font-semibold text-sm rounded-lg " 
                style={{ backgroundImage: `url(${woodButton})` }}
              >
                {t("hero.buyButton")}
              </button>
            </div> */}
          </div>

          {/* Right Side - Wooden Signboard Presale Status Panel */}
          <div className=" lg:w-auto max-w-2xl">
            <div className="bg-cover  -translate-y-12 bg-center z-30 relative bg-no-repeat animate-fall-in animate-wind-shake-natural" 
                 style={{
                   transformOrigin: 'top center',
                   animation: 'wind-shake-natural 8s ease-in-out infinite'
                 }}>
              <img src={woodPattern} alt="woodPattern" className="absolute scale-x-[1.8] scale-y-[2.7] top-0 left-0 w-[600px] h-auto object-cover " />
              <div className="p-6 translate-y-28">
                {/* Wooden Header Section */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-800/80 to-amber-900/80 border-2 border-amber-700/60 mb-3 shadow-lg backdrop-blur-sm">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-amber-400/50"></div>
                    <span className="text-amber-200 font-bold text-sm font-pinewood">
                      {presaleData.isLive ? t("hero.presale.live") : t("hero.presale.ended")}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold font-pinewood text-amber-100 mb-2 drop-shadow-lg">
                    {t("hero.presale.title")}
                  </h2>
                  <p className="text-amber-200/80 text-sm font-medium">
                    {t("hero.presale.subtitle")}
                  </p>
                </div>

                {/* Wooden Countdown Timer */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { value: timeRemaining.days, label: t("hero.presale.days") },
                    { value: timeRemaining.hours, label: t("hero.presale.hours") },
                    { value: timeRemaining.minutes, label: t("hero.presale.minutes") },
                    { value: timeRemaining.seconds, label: t("hero.presale.seconds") }
                  ].map((item, index) => (
                    <div key={`${index}-${item.value}`} className="text-center">
                      <div className="bg-gradient-to-br from-amber-800/90 to-amber-900/90 backdrop-blur-sm rounded-lg py-3 px-2 border-2 border-amber-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-xl font-bold font-pinewood text-amber-100 drop-shadow-lg">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-amber-200/80 text-xs mt-2 font-medium font-pinewood">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Wooden Progress Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-left">
                      <div className="text-amber-200/80 text-xs font-medium font-pinewood">{t("hero.presale.totalRaised")}</div>
                      <div className="text-xl font-bold font-pinewood text-amber-100">${presaleData.totalRaised.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-200/80 text-xs font-medium font-pinewood">{t("hero.presale.hardCap")}</div>
                      <div className="text-xl font-bold font-pinewood text-amber-100">${presaleData.hardCap.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  {/* Wooden Progress Bar */}
                  <div className="relative">
                    <div className="absolute -bottom-7 right-0 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 text-xs px-3 py-1 rounded-full font-bold font-pinewood shadow-lg border border-amber-500/50">
                      {progressPercentage.toFixed(1)}%
                    </div>
                    <div className="h-3 bg-amber-900/60 rounded-full overflow-hidden backdrop-blur-sm border-2 border-amber-700/50 shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Wooden Action Buttons */}
                <div className="space-y-4 my-8">
                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      const ready = mounted;
                      const connected = ready && account && chain;

                      return (
                        <Button 
                          variant="hero" 
                          size="hero" 
                          className="w-full wooden-wallet-btn relative overflow-hidden group bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 shadow-xl border-2 border-amber-600/50 h-12 font-pinewood font-bold text-amber-100 transition-all duration-500 hover:scale-105 active:scale-95"
                          onClick={connected ? openAccountModal : openConnectModal}
                        >
                          {/* Wooden texture overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-amber-800/30 animate-wood-grain"></div>
                          
                          {/* Wooden grain lines */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent animate-wood-lines"></div>
                            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-wood-lines-delayed"></div>
                            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-wood-lines-delayed-2"></div>
                          </div>
                          
                          {/* Glowing effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/0 to-amber-400/0 group-hover:from-amber-400/20 group-hover:via-amber-300/30 group-hover:to-amber-400/20 transition-all duration-700 animate-pulse"></div>
                          
                          {/* Button content with wooden shadow */}
                          <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            {connected ? t("hero.presale.walletConnected") : t("hero.presale.connectWallet")}
                          </span>
                          
                          {/* Wooden button press effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-amber-300/0 via-amber-200/0 to-amber-400/0 group-active:from-amber-300/30 group-active:via-amber-200/20 group-active:to-amber-400/10 transition-all duration-150"></div>
                        </Button>
                      );
                    }}
                  </ConnectButton.Custom>
                  
                  {isConnected && (
                    <Button 
                      variant="hero" 
                      size="hero" 
                      className="w-full wooden-wallet-btn relative overflow-hidden group bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 shadow-xl border-2 border-amber-600/50 h-12 font-pinewood font-bold text-amber-100 transition-all duration-500 hover:scale-105 active:scale-95"
                    >
                      {/* Wooden texture overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-amber-800/30 animate-wood-grain"></div>
                      
                      {/* Wooden grain lines */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent animate-wood-lines"></div>
                        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-wood-lines-delayed"></div>
                        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-wood-lines-delayed-2"></div>
                      </div>
                      
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/0 to-amber-400/0 group-hover:from-amber-400/20 group-hover:via-amber-300/30 group-hover:to-amber-400/20 transition-all duration-700 animate-pulse"></div>
                      
                      {/* Button content with wooden shadow */}
                      <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        {t("hero.presale.buyTokens")}
                      </span>
                      
                      {/* Wooden button press effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-300/0 via-amber-200/0 to-amber-400/0 group-active:from-amber-300/30 group-active:via-amber-200/20 group-active:to-amber-400/10 transition-all duration-150"></div>
                    </Button>
                  )}
                </div>

                
              </div>
            </div>
          </div>
        </div>

        {/* Animated Sections Container */}
        <div className="relative h-32 lg:mt-12 max-w-5xl mx-auto">
          {/* Wooden Additional Info */}
          <div 
            className={`absolute inset-0 scale-[0.75]  transition-all duration-500 ease-in-out ${
              showStats 
                ? 'opacity-0 transform translate-y-4 pointer-events-none' 
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 pt-20 text-center bg-cover h-auto z-50 bg-center bg-no-repeat transition-all duration-300 scale-[0.5]" style={{ backgroundImage: `url(${miniWood})` }}>
                <div className="text-6xl font-bold text-white mb-2 drop-shadow-lg">${presaleData.softCap.toLocaleString()}</div>
                <div className="text-slate-300 text-2xl font-medium">Soft Cap</div>
              </div>
              <div className="p-6 pt-20 text-center bg-cover h-[250px] z-50 bg-center bg-no-repeat transition-all duration-300 scale-[0.5]" style={{ backgroundImage: `url(${miniWood})` }}>
                <div className="text-6xl font-bold text-white mb-2 drop-shadow-lg">{(presaleData.totalRaised / presaleData.tokenPrice).toLocaleString()}</div>
                <div className="text-slate-300 text-2xl font-medium">Tokens Sold</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats Section */}
          <div 
            className={`absolute inset-0 lg:mt-12 transition-all duration-500 ease-in-out ${
              showStats 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: t("hero.stats.totalSupply"), value: "1B" },
                { label: t("hero.stats.stakingApy"), value: "120%" },
                { label: t("hero.stats.holders"), value: "25K+" },
                { label: t("hero.stats.burned"), value: "10M+" }
              ].map((stat, index) => (
                <div key={index} className="p-6 text-center bg-cover z-50 bg-center bg-no-repeat transition-all scale-[0.6] h-auto w-[300px] duration-300 hover:scale-[0.7]" style={{ backgroundImage: `url(${miniWood})` }}>
                  <div className="text-3xl font-bold text-white mb-2 mt-8 drop-shadow-lg">{stat.value}</div>
                  <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
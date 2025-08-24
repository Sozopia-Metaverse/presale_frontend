import { useEffect, useState } from "react";

const PresaleBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay to make the banner appear after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed top-16 left-0 w-full z-[60] bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/90 backdrop-blur-sm border-b border-primary/30 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : ' opacity-100'
      }`}
    >
      <div className="relative overflow-hidden h-10">
        <div className="flex items-center justify-center h-full">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="text-white font-bold text-lg tracking-wider px-8">
                🚀 COMING SOON 🚀
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                 PRESALE DETAILS: 1 ETH = 100,000 TOKENS 💎
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                🔥 MINIMUM BUY: 0.1 ETH | MAXIMUM BUY: 5 ETH 🔥
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                ⏰ PRESALE DURATION: 30 DAYS ⏰
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                 SOFT CAP: 50 ETH | HARD CAP: 200 ETH 🎯
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                🚀 COMING SOON 🚀
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                 PRESALE DETAILS: 1 ETH = 100,000 TOKENS 💎
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                🔥 MINIMUM BUY: 0.1 ETH | MAXIMUM BUY: 5 ETH 🔥
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                ⏰ PRESALE DURATION: 30 DAYS ⏰
              </span>
              <span className="text-white font-bold text-lg tracking-wider px-8">
                 SOFT CAP: 50 ETH | HARD CAP: 200 ETH 🎯
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PresaleBanner; 
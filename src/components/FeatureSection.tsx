import character_stake from "@/assets/character_stake.gif";
import character_wallet from "@/assets/character_wallet.gif";
import character_inflation from "@/assets/character_inflation.gif";
import { Button } from "@/components/ui/button";
import btn from "@/assets/btn.png";
import bush from "@/assets/bush.png";
import Avatar from "@/assets/avatar.png";
import Avatar2 from "@/assets/avatar2.png";
import border from "@/assets/border.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const FeatureSection = () => {
  const avatarRef = useRef<HTMLImageElement>(null);
  const avatar2Ref = useRef<HTMLImageElement>(null);
  const bushLeftRef = useRef<HTMLImageElement>(null);
  const bushRightRef = useRef<HTMLImageElement>(null);
  const learnMoreButtonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Avatar floating animation
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        y: -200,
        x: -200,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
      });
    }

    // Avatar2 animation when FeatureSection comes into view
    if (avatar2Ref.current && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when section is 80% from top of viewport
        onEnter: () => {
          // Trigger avatar2 animation when section comes into view
          gsap.to(avatar2Ref.current, {
            y: 150,
            x: 100,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
          });
        },
        onEnterBack: () => {
          // Trigger avatar2 animation again when scrolling back up
          gsap.to(avatar2Ref.current, {
            y: 200,
            x: 200,
            duration: 1,
            yoyo: true,
            ease: "power2.out"
          });
        }
      });
    }

    // Avatar animation when Learn More button becomes visible
    if (avatarRef.current && learnMoreButtonRef.current) {
      ScrollTrigger.create({
        trigger: learnMoreButtonRef.current,
        onEnter: () => {
          // Trigger avatar animation
          gsap.to(avatarRef.current, {
            y: -200,
            x: -200,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
          });
        },
        onEnterBack: () => {
          // Trigger animation again when scrolling back up
          gsap.to(avatarRef.current, {
            y: 200,
            x: 200,
            duration: 1,
            yoyo: true,
            ease: "power2.out"
          });
        }
      });
    }

    // Bush animations with scroll trigger
   

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Lazy loading effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = featureRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleFeatures(prev => new Set([...prev, index]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before the element comes into view
      }
    );

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleAvatarFocus = () => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        opacity: 1,
        scale: 0.6,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleAvatarBlur = () => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const features = [
    {
      title: "GOOD BOY STAKING!",
      description: "Stake your $SOZIA tokens and earn passive rewards while being a good boy! Our innovative staking mechanism rewards loyal holders with up to 120% APY.",
      image: character_stake,
      buttonText: "STAKE NOW",
      className: "md:flex-row"
    },
    {
      title: "CONVENIENT WALLET!",
      description: "Connect your favorite wallet in seconds and start trading immediately. We support all major wallets including MetaMask, WalletConnect, and more.",
      image: character_wallet,
      buttonText: "CONNECT WALLET",
      className: "md:flex-row-reverse"
    },
    {
      title: "NO MORE INFLATION!",
      description: "Unlike other meme coins, $SOZIA has a deflationary mechanism. Every transaction burns tokens, making your holdings more valuable over time.",
      image: character_inflation,
      buttonText: "LEARN MORE",
      className: "md:flex-row"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative">
      <div className="container mx-auto max-w-7xl px-4 ">
        <img src={border} alt="border" className="absolute scale-x-[-1] rotate-[180deg] scale-y-[0.6] -bottom-[138px] right-[200px] h-96 w-[90vw] z-[15]"  />
       
      <img 
        ref={bushLeftRef}
        src={bush}
        alt="bush"
        className="absolute -bottom-[200px] rotate-[90deg] -left-[300px] hover:scale-105 transition-transform duration-300 z-50" 
        width={800}
        height={800}
      />
      <img 
        ref={avatarRef}
        src={Avatar} 
        alt="avatar" 
        className="absolute hidden -bottom-[980px] rotate-[-45deg] -right-[430px] scale-50 transition-all duration-500 ease-out z-50 hover:scale-60 hover:rotate-[-40deg] cursor-pointer" 
        width={800} 
        height={800} 
        tabIndex={0}
        onFocus={handleAvatarFocus}
        onBlur={handleAvatarBlur}
      />
      <img 
        ref={bushRightRef}
        src={bush} 
        alt="bush" 
        className="absolute -bottom-[250px] rotate-[-90deg] -right-[300px] hover:scale-105 transition-transform duration-300 z-50" 
        width={800} 
        height={800} 
      />
        {features.map((feature, index) => (
          <div 
            key={index} 
            ref={el => featureRefs.current[index] = el}
            className={`flex flex-col ${feature.className} items-center gap-4 mb-20 last:mb-0`}
          >
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 w-36 top-0  -left-[100px] bg-gradient-to-l from-white/0 to-white z-10" />
                {/* <div className="absolute -inset-4 w-36 top-0 -right-[500px] bg-gradient-to-r from-white/0 to-white z-10" /> */}
                {visibleFeatures.has(index) ? (
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-96 h-96 object-contain  transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Loading...</div>
                  </div>
                )}
                <div className="absolute -inset-4 " />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left max-w-lg">
              <h2 className="text-6xl font-bold text-foreground font-pinewood mb-6">
                {feature.title}
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {feature.description}
              </p>
              
              <button 
                className="
                  font-bold font-pinewood text-2xl text-white
                  bg-cover bg-center bg-no-repeat
                  w-64 h-40 relative z-[55]
                  transition-all duration-500 ease-out
                  hover:scale-[1.35] hover:rotate-1
                  group
                  overflow-hidden
                  scale-125
                  pb-4
                " 
                style={{ backgroundImage: `url(${btn})` }}
              >
                <span className=" text-lg z-10 ">
                  {feature.buttonText}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
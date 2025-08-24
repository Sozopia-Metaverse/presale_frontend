import character_stake from "@/assets/character_stake.png";
import character_wallet from "@/assets/character_wallet.png";
import character_inflation from "@/assets/character_inflation.png";
import { Button } from "@/components/ui/button";
import btn from "@/assets/btn.png";
import bush from "@/assets/bush.png";
import Avatar from "@/assets/avatar.png";
import Avatar2 from "@/assets/avatar2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const FeatureSection = () => {
  const avatarRef = useRef<HTMLImageElement>(null);
  const avatar2Ref = useRef<HTMLImageElement>(null);
  const bushLeftRef = useRef<HTMLImageElement>(null);
  const bushRightRef = useRef<HTMLImageElement>(null);
  const learnMoreButtonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
        <img 
          ref={avatar2Ref}
          src={Avatar2} 
          alt="avatar2" 
          className="absolute -top-[500px] rotate-[135deg] -left-[350px] scale-50 transition-all duration-500 ease-out z-10 hover:scale-60  cursor-pointer" 
          width={800} 
          height={800} 
        />
      <img 
        ref={bushLeftRef}
        src={bush} 
        alt="bush" 
        className="absolute -bottom-0 rotate-[90deg] -left-[300px] hover:scale-105 transition-transform duration-300 z-50" 
        width={800} 
        height={800} 
      />
      <img 
        ref={avatarRef}
        src={Avatar} 
        alt="avatar" 
        className="absolute -bottom-[680px] rotate-[-45deg] -right-[430px] scale-50 transition-all duration-500 ease-out z-50 hover:scale-60 hover:rotate-[-40deg] cursor-pointer" 
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
          <div key={index} className={`flex flex-col ${feature.className} items-center gap-4 mb-20 last:mb-0`}>
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-96 h-96 object-contain transition-transform hover:scale-110 duration-300"
                />
                <div className="absolute -inset-4 gradient-golden opacity-20 rounded-full blur-xl" />
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
                ref={learnMoreButtonRef} // Only attach ref to the Learn More button
                className="
                  font-bold font-pinewood text-2xl text-white
                  bg-cover bg-center bg-no-repeat
                  w-64 h-40 relative z-[55]
                  transition-all duration-500 ease-out
                  hover:scale-[1.35] hover:rotate-1
                  animate-wood-grain
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
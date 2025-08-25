import { useTranslation } from "react-i18next";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Wallet, Coins, Shield } from "lucide-react";
import bottle from "@/assets/bottle.png";
import cloud from "@/assets/cloud.png";
import cloud1 from "@/assets/cloud1.png";
import bottle1 from "@/assets/bottle1.png";
import bottle2 from "@/assets/bottle2.png";
import bottle3 from "@/assets/bottle3.png";
import bottle4 from "@/assets/bottle4.png";
import board from "@/assets/mini_wood4.png";
import { useEffect, useRef } from "react";

// Wave Animation Component
const WaveAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    let time = 0;
    const animate = () => {
      time += 0.03; // Faster animation

      // Create sharper wave effect with higher amplitudes
      const wave1 = Math.sin(time) * 35; // Increased from 20
      const wave2 = Math.sin(time * 1.8) * 25; // Increased from 15, faster frequency
      const wave3 = Math.sin(time * 0.6) * 40; // Increased from 25, slower frequency

      // Generate wave path with sharper peaks
      let d = `M 0,${100 + wave1}`;

      for (let x = 0; x <= 100; x += 1.5) {
        // Smaller step for smoother curves
        const y =
          100 +
          Math.sin((x / 100) * Math.PI * 10 + time) * 55 + // Increased amplitude
          Math.sin((x / 100) * Math.PI * 5 + time * 1.8) * 25 + // More peaks, faster
          Math.sin((x / 100) * Math.PI * 8 + time * 0.6) * 20 + // Even more peaks
          Math.sin((x / 100) * Math.PI * 12 + time * 2.2) * 15; // Sharp detail waves
        d += ` L ${x},${y}`;
      }

      d += ` L 100,200 L 0,200 Z`;

      if (path) {
        path.setAttribute("d", d);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute -top-[63px] left-0 w-full h-16 overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          fill="#86d8ef"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
};

const HowToBuy = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      title: t("howToBuy.steps.step1.title"),
      description: t("howToBuy.steps.step1.description"),
      icon: Wallet,
      details: t("howToBuy.steps.step1.details", {
        returnObjects: true,
      }) as string[],
    },
    {
      step: 2,
      title: t("howToBuy.steps.step2.title"),
      description: t("howToBuy.steps.step2.description"),
      icon: Coins,
      details: t("howToBuy.steps.step2.details", {
        returnObjects: true,
      }) as string[],
    },
    {
      step: 3,
      title: t("howToBuy.steps.step3.title"),
      description: t("howToBuy.steps.step3.description"),
      icon: Shield,
      details: t("howToBuy.steps.step3.details", {
        returnObjects: true,
      }) as string[],
    },
    {
      step: 4,
      title: t("howToBuy.steps.step4.title"),
      description: t("howToBuy.steps.step4.description"),
      icon: CheckCircle,
      details: t("howToBuy.steps.step4.details", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const importantNotes = t("howToBuy.importantNotes.notes", {
    returnObjects: true,
  }) as string[];

  const presaleInfo = {
    price: "1 ETH = 1,000,000 SOZOPIA",
    minBuy: "0.1 ETH",
    maxBuy: "10 ETH",
    softCap: "100 ETH",
    hardCap: "500 ETH",
    startDate: "December 1, 2024",
    endDate: "December 31, 2024",
  };

  return (
    <section className="py-20 relative ">
      {/* Wave Animation at the top */}
      <WaveAnimation />

      <div className="absolute inset-0 bg-gradient-to-b from-[#7ad4ed] via-[#19a3cc] to-[#0e648d] opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Natural underwater bubbles - reduced count with balanced sizes */}
        {Array.from({ length: 12 }, (_, i) => {
          // Balanced bubble sizes - mix of small, medium, and large
          const sizes = [8, 12, 16, 20, 25, 30, 35, 40, 45, 50, 55, 60];
          const size = sizes[i % sizes.length];

          // Natural opacity based on size
          const baseOpacity = Math.max(10, 40 - size * 0.5);
          const opacity = baseOpacity + (Math.random() * 8 - 4);

          // Spread bubbles across the width
          const leftPercent = i * 8 + (Math.random() * 10 - 5);

          // Natural timing - larger bubbles move slower
          const delay = i * 1 + Math.random() * 2;
          const duration = 3 + size / 6 + Math.random() * 1.5;

          // Mix of animation types
          const animationType =
            i % 3 === 0 ? "animate-bubble-drift" : "animate-bubble";

          return (
            <div
              key={i}
              className={`absolute rounded-full top-full ${animationType}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
                left: `${Math.max(0, Math.min(100, leftPercent))}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,${
                  (opacity + 10) / 100
                }) 0%, rgba(255,255,255,${opacity / 100}) 70%)`,
              }}
            />
          );
        })}
      </div>

      <img
        src={cloud}
        alt="cloud"
        className="absolute -top-[200px] -left-[130px] w-[500px] h-[400px] animate-cloud-move-1"
        width={100}
        height={100}
      />
      <img
        src={cloud1}
        alt="cloud1"
        className="absolute -top-[110px] -right-[130px] w-[500px] h-[400px] animate-cloud-move-2"
        width={100}
        height={100}
      />
      <img
        src={bottle}
        alt="bottle"
        className="absolute top-1/3 left-16 w-48 h-68 rotate-[48deg] animate-float-1 opacity-60"
        width={200}
        height={200}
      />
      <img
        src={bottle1}
        alt="bottle"
        className="absolute top-[80%] left-1/3 w-48 h-68 rotate-[48deg] animate-float-2 opacity-60"
        width={200}
        height={200}
      />
      <img
        src={bottle2}
        alt="bottle"
        className="absolute top-2/3 right-16 w-48 h-68 rotate-[-48deg] animate-float-3 opacity-60"
        width={200}
        height={200}
      />
      <img
        src={bottle3}
        alt="bottle"
        className="absolute top-2/3  left-64  w-48 h-68 rotate-[-48deg] animate-float-4 opacity-60"
        width={200}
        height={200}
      />
      <img
        src={bottle4}
        alt="bottle"
        className="absolute top-[50%] right-1/3 w-48 h-68 rotate-[48deg] animate-float-5 opacity-60"
        width={200}
        height={200}
      />
      {/* <img
        src={plastic}
        alt="plastic"
        className="absolute top-2/3 right-16 w-48 h-68 rotate-[-90deg] opacity-60"
        width={200}
        height={200}
      /> */}

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-pinewood text-white mb-6 drop-shadow-lg">
            {t("howToBuy.title")}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            {t("howToBuy.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[250px]" // Add specific height
              style={{
                backgroundImage: `url(${board})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="pl-28">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-600 font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <step.icon className="w-5 h-5 text-white" />
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-white"></CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Cloud horizontal movement animations with different timing */
        @keyframes cloud-move-1 {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes cloud-move-2 {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        .animate-cloud-move-1 {
          animation: cloud-move-1 20s linear infinite;
        }

        .animate-cloud-move-2 {
          animation: cloud-move-2 25s linear infinite;
          animation-delay: 10s;
        }

        /* Bottle float animations with different sync timing */
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(48deg);
          }
          50% {
            transform: translateY(-20px) rotate(48deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(48deg);
          }
          50% {
            transform: translateY(-20px) rotate(48deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(-48deg);
          }
          50% {
            transform: translateY(-20px) rotate(-48deg);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(-48deg);
          }
          50% {
            transform: translateY(-20px) rotate(-48deg);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) rotate(48deg);
          }
          50% {
            transform: translateY(-20px) rotate(48deg);
          }
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        .animate-float-3 {
          animation: float-3 3.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        .animate-float-4 {
          animation: float-4 4.5s ease-in-out infinite;
          animation-delay: 0.3s;
        }
        .animate-float-5 {
          animation: float-5 3.8s ease-in-out infinite;
          animation-delay: 0.9s;
        }

        /* Natural underwater bubble animation */
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          30% {
            transform: translateY(-30vh) scale(1.05) rotate(45deg);
            opacity: 0.8;
          }
          60% {
            transform: translateY(-60vh) scale(0.95) rotate(90deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-100vh) scale(0.8) rotate(135deg);
            opacity: 0;
          }
        }

        /* Alternative animation with horizontal drift for variety */
        @keyframes bubble-drift {
          0% {
            transform: translateY(0) translateX(0) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-25vh) translateX(8px) scale(1.1)
              rotate(30deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50vh) translateX(-5px) scale(0.9)
              rotate(60deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-75vh) translateX(12px) scale(1.05)
              rotate(90deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(-3px) scale(0.8)
              rotate(120deg);
            opacity: 0;
          }
        }

        .animate-bubble {
          animation: bubble linear infinite;
        }

        .animate-bubble-drift {
          animation: bubble-drift linear infinite;
        }

        /* Add some bubbles with different animation patterns */
        @keyframes bubble-float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-33vh) translateX(20px) scale(1.2);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-66vh) translateX(-15px) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(10px) scale(0.7);
            opacity: 0;
          }
        }

        .animate-bubble-float {
          animation: bubble-float linear infinite;
        }

        @keyframes bubble-1 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes bubble-2 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) translateX(-30px);
            opacity: 0;
          }
        }
        @keyframes bubble-3 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) translateX(40px);
            opacity: 0;
          }
        }
        @keyframes bubble-4 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120px) translateX(-20px);
            opacity: 0;
          }
        }
        @keyframes bubble-5 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(-180px) translateX(30px);
            opacity: 0;
          }
        }
        @keyframes bubble-6 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(-250px) translateX(-40px);
            opacity: 0;
          }
        }
        @keyframes bubble-7 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          35% {
            opacity: 1;
          }
          65% {
            opacity: 1;
          }
          100% {
            transform: translateY(-160px) translateX(25px);
            opacity: 0;
          }
        }
        @keyframes bubble-8 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(-220px) translateX(-35px);
            opacity: 0;
          }
        }
        @keyframes bubble-9 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          45% {
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          100% {
            transform: translateY(-140px) translateX(15px);
            opacity: 0;
          }
        }
        @keyframes bubble-10 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-190px) translateX(-25px);
            opacity: 0;
          }
        }

        /* Additional bubble animations with faster timing */
        @keyframes bubble-11 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translateY(-130px) translateX(35px);
            opacity: 0;
          }
        }
        @keyframes bubble-12 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(-280px) translateX(-45px);
            opacity: 0;
          }
        }
        @keyframes bubble-13 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          82% {
            opacity: 1;
          }
          100% {
            transform: translateY(-170px) translateX(28px);
            opacity: 0;
          }
        }
        @keyframes bubble-14 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110px) translateX(-18px);
            opacity: 0;
          }
        }
        @keyframes bubble-15 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          28% {
            opacity: 1;
          }
          72% {
            opacity: 1;
          }
          100% {
            transform: translateY(-240px) translateX(42px);
            opacity: 0;
          }
        }
        @keyframes bubble-16 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          94% {
            opacity: 1;
          }
          100% {
            transform: translateY(-260px) translateX(-38px);
            opacity: 0;
          }
        }
        @keyframes bubble-17 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          32% {
            opacity: 1;
          }
          68% {
            opacity: 1;
          }
          100% {
            transform: translateY(-145px) translateX(22px);
            opacity: 0;
          }
        }
        @keyframes bubble-18 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          4% {
            opacity: 1;
          }
          96% {
            opacity: 1;
          }
          100% {
            transform: translateY(-300px) translateX(-50px);
            opacity: 0;
          }
        }
        @keyframes bubble-19 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          26% {
            opacity: 1;
          }
          74% {
            opacity: 1;
          }
          100% {
            transform: translateY(-155px) translateX(19px);
            opacity: 0;
          }
        }
        @keyframes bubble-20 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          14% {
            opacity: 1;
          }
          86% {
            opacity: 1;
          }
          100% {
            transform: translateY(-125px) translateX(-32px);
            opacity: 0;
          }
        }
        @keyframes bubble-21 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          16% {
            opacity: 1;
          }
          84% {
            opacity: 1;
          }
          100% {
            transform: translateY(-185px) translateX(38px);
            opacity: 0;
          }
        }
        @keyframes bubble-22 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-210px) translateX(-28px);
            opacity: 0;
          }
        }
        @keyframes bubble-23 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          34% {
            opacity: 1;
          }
          66% {
            opacity: 1;
          }
          100% {
            transform: translateY(-135px) translateX(24px);
            opacity: 0;
          }
        }
        @keyframes bubble-24 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          98% {
            opacity: 1;
          }
          100% {
            transform: translateY(-320px) translateX(-55px);
            opacity: 0;
          }
        }
        @keyframes bubble-25 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          24% {
            opacity: 1;
          }
          76% {
            opacity: 1;
          }
          100% {
            transform: translateY(-165px) translateX(31px);
            opacity: 0;
          }
        }
        @keyframes bubble-26 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-195px) translateX(-26px);
            opacity: 0;
          }
        }
        @keyframes bubble-27 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) translateX(36px);
            opacity: 0;
          }
        }
        @keyframes bubble-28 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          7% {
            opacity: 1;
          }
          93% {
            opacity: 1;
          }
          100% {
            transform: translateY(-270px) translateX(-42px);
            opacity: 0;
          }
        }
        @keyframes bubble-29 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          82% {
            opacity: 1;
          }
          100% {
            transform: translateY(-175px) translateX(29px);
            opacity: 0;
          }
        }
        @keyframes bubble-30 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translateY(-205px) translateX(-34px);
            opacity: 0;
          }
        }

        /* More frequent bubbles with faster animations */
        @keyframes bubble-31 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(-140px) translateX(18px);
            opacity: 0;
          }
        }
        @keyframes bubble-32 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          14% {
            opacity: 1;
          }
          86% {
            opacity: 1;
          }
          100% {
            transform: translateY(-180px) translateX(-22px);
            opacity: 0;
          }
        }
        @keyframes bubble-33 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-160px) translateX(33px);
            opacity: 0;
          }
        }
        @keyframes bubble-34 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          94% {
            opacity: 1;
          }
          100% {
            transform: translateY(-220px) translateX(-28px);
            opacity: 0;
          }
        }
        @keyframes bubble-35 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          16% {
            opacity: 1;
          }
          84% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120px) translateX(25px);
            opacity: 0;
          }
        }
        @keyframes bubble-36 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-260px) translateX(-35px);
            opacity: 0;
          }
        }
        @keyframes bubble-37 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          24% {
            opacity: 1;
          }
          76% {
            opacity: 1;
          }
          100% {
            transform: translateY(-145px) translateX(29px);
            opacity: 0;
          }
        }
        @keyframes bubble-38 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          4% {
            opacity: 1;
          }
          96% {
            opacity: 1;
          }
          100% {
            transform: translateY(-280px) translateX(-40px);
            opacity: 0;
          }
        }
        @keyframes bubble-39 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          82% {
            opacity: 1;
          }
          100% {
            transform: translateY(-170px) translateX(21px);
            opacity: 0;
          }
        }
        @keyframes bubble-40 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) translateX(-32px);
            opacity: 0;
          }
        }
        @keyframes bubble-41 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          100% {
            transform: translateY(-135px) translateX(27px);
            opacity: 0;
          }
        }
        @keyframes bubble-42 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(-240px) translateX(-38px);
            opacity: 0;
          }
        }
        @keyframes bubble-43 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          16% {
            opacity: 1;
          }
          84% {
            opacity: 1;
          }
          100% {
            transform: translateY(-155px) translateX(24px);
            opacity: 0;
          }
        }
        @keyframes bubble-44 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          94% {
            opacity: 1;
          }
          100% {
            transform: translateY(-190px) translateX(-29px);
            opacity: 0;
          }
        }
        @keyframes bubble-45 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-125px) translateX(31px);
            opacity: 0;
          }
        }

        /* Bubble cluster animations */
        @keyframes bubble-cluster-1 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120px) translateX(15px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-2 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-140px) translateX(25px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-3 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(-160px) translateX(35px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-4 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-15px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-5 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-130px) translateX(-25px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-6 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) translateX(-35px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-7 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110px) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-8 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          82% {
            opacity: 1;
          }
          100% {
            transform: translateY(-135px) translateX(30px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-9 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          22% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          100% {
            transform: translateY(-155px) translateX(40px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-10 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          14% {
            opacity: 1;
          }
          86% {
            opacity: 1;
          }
          100% {
            transform: translateY(-125px) translateX(18px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-11 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          19% {
            opacity: 1;
          }
          81% {
            opacity: 1;
          }
          100% {
            transform: translateY(-145px) translateX(28px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-12 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          24% {
            opacity: 1;
          }
          76% {
            opacity: 1;
          }
          100% {
            transform: translateY(-165px) translateX(38px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-13 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          11% {
            opacity: 1;
          }
          89% {
            opacity: 1;
          }
          100% {
            transform: translateY(-105px) translateX(-18px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-14 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          16% {
            opacity: 1;
          }
          84% {
            opacity: 1;
          }
          100% {
            transform: translateY(-135px) translateX(-28px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-15 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          21% {
            opacity: 1;
          }
          79% {
            opacity: 1;
          }
          100% {
            transform: translateY(-155px) translateX(-38px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-16 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          13% {
            opacity: 1;
          }
          87% {
            opacity: 1;
          }
          100% {
            transform: translateY(-115px) translateX(22px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-17 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          17% {
            opacity: 1;
          }
          83% {
            opacity: 1;
          }
          100% {
            transform: translateY(-140px) translateX(32px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-18 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          23% {
            opacity: 1;
          }
          77% {
            opacity: 1;
          }
          100% {
            transform: translateY(-160px) translateX(42px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-19 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          9% {
            opacity: 1;
          }
          91% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-12px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-20 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-130px) translateX(-22px);
            opacity: 0;
          }
        }
        @keyframes bubble-cluster-21 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) translateX(-32px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HowToBuy;

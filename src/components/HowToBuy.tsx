import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Wallet, Coins, Shield, AlertTriangle } from "lucide-react";
import ocean from "@/assets/ocean.png";
import bottle from "@/assets/bottle.png";
import plastic from "@/assets/plastic.png";
import cloud from "@/assets/cloud.png";
import bottle1 from "@/assets/bottle1.png";
import bottle2 from "@/assets/bottle2.png";
import bottle3 from "@/assets/bottle3.png";
import bottle4 from "@/assets/bottle4.png";


const HowToBuy = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      title: t("howToBuy.steps.step1.title"),
      description: t("howToBuy.steps.step1.description"),
      icon: Wallet,
      details: t("howToBuy.steps.step1.details", { returnObjects: true }) as string[]
    },
    {
      step: 2,
      title: t("howToBuy.steps.step2.title"),
      description: t("howToBuy.steps.step2.description"),
      icon: Coins,
      details: t("howToBuy.steps.step2.details", { returnObjects: true }) as string[]
    },
    {
      step: 3,
      title: t("howToBuy.steps.step3.title"),
      description: t("howToBuy.steps.step3.description"),
      icon: Shield,
      details: t("howToBuy.steps.step3.details", { returnObjects: true }) as string[]
    },
    {
      step: 4,
      title: t("howToBuy.steps.step4.title"),
      description: t("howToBuy.steps.step4.description"),
      icon: CheckCircle,
      details: t("howToBuy.steps.step4.details", { returnObjects: true }) as string[]
    }
  ];

  const importantNotes = t("howToBuy.importantNotes.notes", { returnObjects: true }) as string[];

  const presaleInfo = {
    price: "1 ETH = 1,000,000 SOZOPIA",
    minBuy: "0.1 ETH",
    maxBuy: "10 ETH",
    softCap: "100 ETH",
    hardCap: "500 ETH",
    startDate: "December 1, 2024",
    endDate: "December 31, 2024"
  };

  return (
    <section className="py-20 relative ">
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 opacity-90"></div>
      
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Original Bubbles - Larger sizes */}
        <div className="absolute w-8 h-8 bg-white/20 rounded-full animate-bubble-1 left-1/4 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/15 rounded-full animate-bubble-2 left-1/3 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/25 rounded-full animate-bubble-3 left-1/2 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/10 rounded-full animate-bubble-4 left-2/3 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/20 rounded-full animate-bubble-5 left-3/4 top-full"></div>
        <div className="absolute w-14 h-14 bg-white/15 rounded-full animate-bubble-6 left-1/6 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/30 rounded-full animate-bubble-7 left-5/6 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/20 rounded-full animate-bubble-8 left-1/8 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/15 rounded-full animate-bubble-9 left-7/8 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/25 rounded-full animate-bubble-10 left-1/12 top-full"></div>
        
        {/* Additional Bubbles - Second Row */}
        <div className="absolute w-4 h-4 bg-white/30 rounded-full animate-bubble-11 left-1/5 top-full"></div>
        <div className="absolute w-16 h-16 bg-white/10 rounded-full animate-bubble-12 left-2/5 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/25 rounded-full animate-bubble-13 left-3/5 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/20 rounded-full animate-bubble-14 left-4/5 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/15 rounded-full animate-bubble-15 left-1/10 top-full"></div>
        
        {/* Additional Bubbles - Third Row */}
        <div className="absolute w-12 h-12 bg-white/30 rounded-full animate-bubble-16 left-1/7 top-full"></div>
        <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-bubble-17 left-2/7 top-full"></div>
        <div className="absolute w-14 h-14 bg-white/15 rounded-full animate-bubble-18 left-3/7 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/25 rounded-full animate-bubble-19 left-4/7 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/10 rounded-full animate-bubble-20 left-5/7 top-full"></div>
        
        {/* Additional Bubbles - Fourth Row */}
        <div className="absolute w-8 h-8 bg-white/20 rounded-full animate-bubble-21 left-1/9 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/30 rounded-full animate-bubble-22 left-2/9 top-full"></div>
        <div className="absolute w-4 h-4 bg-white/15 rounded-full animate-bubble-23 left-3/9 top-full"></div>
        <div className="absolute w-16 h-16 bg-white/25 rounded-full animate-bubble-24 left-4/9 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/20 rounded-full animate-bubble-25 left-5/9 top-full"></div>
        
        {/* Additional Bubbles - Fifth Row */}
        <div className="absolute w-10 h-10 bg-white/15 rounded-full animate-bubble-26 left-1/11 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/30 rounded-full animate-bubble-27 left-2/11 top-full"></div>
        <div className="absolute w-14 h-14 bg-white/20 rounded-full animate-bubble-28 left-3/11 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/25 rounded-full animate-bubble-29 left-4/11 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/10 rounded-full animate-bubble-30 left-5/11 top-full"></div>
        
        {/* More Frequent Bubbles - Sixth Row */}
        <div className="absolute w-6 h-6 bg-white/25 rounded-full animate-bubble-31 left-1/13 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/20 rounded-full animate-bubble-32 left-2/13 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/15 rounded-full animate-bubble-33 left-3/13 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/30 rounded-full animate-bubble-34 left-4/13 top-full"></div>
        <div className="absolute w-4 h-4 bg-white/25 rounded-full animate-bubble-35 left-5/13 top-full"></div>
        
        {/* More Frequent Bubbles - Seventh Row */}
        <div className="absolute w-14 h-14 bg-white/20 rounded-full animate-bubble-36 left-1/15 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/15 rounded-full animate-bubble-37 left-2/15 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/30 rounded-full animate-bubble-38 left-3/15 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/25 rounded-full animate-bubble-39 left-4/15 top-full"></div>
        <div className="absolute w-12 h-12 bg-white/20 rounded-full animate-bubble-40 left-5/15 top-full"></div>
        
        {/* More Frequent Bubbles - Eighth Row */}
        <div className="absolute w-4 h-4 bg-white/15 rounded-full animate-bubble-41 left-1/17 top-full"></div>
        <div className="absolute w-16 h-16 bg-white/25 rounded-full animate-bubble-42 left-2/17 top-full"></div>
        <div className="absolute w-6 h-6 bg-white/30 rounded-full animate-bubble-43 left-3/17 top-full"></div>
        <div className="absolute w-10 h-10 bg-white/20 rounded-full animate-bubble-44 left-4/17 top-full"></div>
        <div className="absolute w-8 h-8 bg-white/15 rounded-full animate-bubble-45 left-5/17 top-full"></div>
        
        {/* Bubble Clusters - Larger */}
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-1 left-1/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-2 left-1/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-3 left-1/6 top-full"></div>
        
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-4 left-3/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-5 left-3/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-6 left-3/6 top-full"></div>
        
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-7 left-5/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-8 left-5/6 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-9 left-5/6 top-full"></div>
        
        {/* Additional Bubble Clusters */}
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-10 left-1/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-11 left-1/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-12 left-1/8 top-full"></div>
        
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-13 left-3/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-14 left-3/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-15 left-3/8 top-full"></div>
        
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-16 left-5/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-17 left-5/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-18 left-5/8 top-full"></div>
        
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-bubble-cluster-19 left-7/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-bubble-cluster-20 left-7/8 top-full"></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble-cluster-21 left-7/8 top-full"></div>
      </div>

      {/* Floating Elements */}
      <img 
        src={cloud} 
        alt="cloud" 
        className="absolute -top-[200px] -left-[130px] w-[500px] h-[400px] " 
        width={100} 
        height={100} 
      />
      <img 
        src={cloud} 
        alt="cloud" 
        className="absolute -top-[170px] -right-[130px] w-[500px] h-[400px] " 
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
        className="absolute top-[20px] left-1/3 w-48 h-68 rotate-[48deg] animate-float-2 opacity-60" 
        width={200} 
        height={200} 
      />
      <img 
        src={bottle2} 
        alt="bottle" 
        className="absolute top-1/3 right-16 w-48 h-68 rotate-[-48deg] animate-float-3 opacity-60" 
        width={200} 
        height={200} 
      />
      <img 
        src={bottle3} 
        alt="bottle"
        className="absolute top-[90px] right-1/3 w-48 h-68 rotate-[-48deg] animate-float-4 opacity-60" 
        width={200}
        height={200}
      />
      <img 
        src={bottle4}
        alt="bottle"
        className="absolute top-1/3 left-1/2 w-48 h-68 rotate-[48deg] animate-float-5 opacity-60" 
        width={200} 
        height={200} 
      />
      <img 
        src={plastic} 
        alt="plastic" 
        className="absolute top-1/3 right-16 w-48 h-68 rotate-[-90deg] opacity-60" 
        width={200} 
        height={200} 
      />

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
            <Card key={index} className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-blue-200 shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-bl-full" />
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <step.icon className="w-5 h-5 text-blue-600" />
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-blue-700">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Bottle float animations with different sync timing */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(48deg); }
          50% { transform: translateY(-20px) rotate(48deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(48deg); }
          50% { transform: translateY(-20px) rotate(48deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(-48deg); }
          50% { transform: translateY(-20px) rotate(-48deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(-48deg); }
          50% { transform: translateY(-20px) rotate(-48deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(48deg); }
          50% { transform: translateY(-20px) rotate(48deg); }
        }
        
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 4s ease-in-out infinite; animation-delay: 0.6s; }
        .animate-float-3 { animation: float-3 3.5s ease-in-out infinite; animation-delay: 1.2s; }
        .animate-float-4 { animation: float-4 4.5s ease-in-out infinite; animation-delay: 0.3s; }
        .animate-float-5 { animation: float-5 3.8s ease-in-out infinite; animation-delay: 0.9s; }

        @keyframes bubble-1 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes bubble-2 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-150px) translateX(-30px); opacity: 0; }
        }
        @keyframes bubble-3 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-200px) translateX(40px); opacity: 0; }
        }
        @keyframes bubble-4 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(-20px); opacity: 0; }
        }
        @keyframes bubble-5 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(-180px) translateX(30px); opacity: 0; }
        }
        @keyframes bubble-6 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(-250px) translateX(-40px); opacity: 0; }
        }
        @keyframes bubble-7 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          35% { opacity: 1; }
          65% { opacity: 1; }
          100% { transform: translateY(-160px) translateX(25px); opacity: 0; }
        }
        @keyframes bubble-8 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          40% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateY(-220px) translateX(-35px); opacity: 0; }
        }
        @keyframes bubble-9 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          45% { opacity: 1; }
          55% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(15px); opacity: 0; }
        }
        @keyframes bubble-10 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          50% { opacity: 1; }
          50% { opacity: 1; }
          100% { transform: translateY(-190px) translateX(-25px); opacity: 0; }
        }
        
        /* Additional bubble animations with faster timing */
        @keyframes bubble-11 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(-130px) translateX(35px); opacity: 0; }
        }
        @keyframes bubble-12 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(-280px) translateX(-45px); opacity: 0; }
        }
        @keyframes bubble-13 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(-170px) translateX(28px); opacity: 0; }
        }
        @keyframes bubble-14 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          22% { opacity: 1; }
          78% { opacity: 1; }
          100% { transform: translateY(-110px) translateX(-18px); opacity: 0; }
        }
        @keyframes bubble-15 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          28% { opacity: 1; }
          72% { opacity: 1; }
          100% { transform: translateY(-240px) translateX(42px); opacity: 0; }
        }
        @keyframes bubble-16 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          6% { opacity: 1; }
          94% { opacity: 1; }
          100% { transform: translateY(-260px) translateX(-38px); opacity: 0; }
        }
        @keyframes bubble-17 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          32% { opacity: 1; }
          68% { opacity: 1; }
          100% { transform: translateY(-145px) translateX(22px); opacity: 0; }
        }
        @keyframes bubble-18 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          4% { opacity: 1; }
          96% { opacity: 1; }
          100% { transform: translateY(-300px) translateX(-50px); opacity: 0; }
        }
        @keyframes bubble-19 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          26% { opacity: 1; }
          74% { opacity: 1; }
          100% { transform: translateY(-155px) translateX(19px); opacity: 0; }
        }
        @keyframes bubble-20 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translateY(-125px) translateX(-32px); opacity: 0; }
        }
        @keyframes bubble-21 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(-185px) translateX(38px); opacity: 0; }
        }
        @keyframes bubble-22 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-210px) translateX(-28px); opacity: 0; }
        }
        @keyframes bubble-23 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          34% { opacity: 1; }
          66% { opacity: 1; }
          100% { transform: translateY(-135px) translateX(24px); opacity: 0; }
        }
        @keyframes bubble-24 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          2% { opacity: 1; }
          98% { opacity: 1; }
          100% { transform: translateY(-320px) translateX(-55px); opacity: 0; }
        }
        @keyframes bubble-25 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          24% { opacity: 1; }
          76% { opacity: 1; }
          100% { transform: translateY(-165px) translateX(31px); opacity: 0; }
        }
        @keyframes bubble-26 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-195px) translateX(-26px); opacity: 0; }
        }
        @keyframes bubble-27 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(-150px) translateX(36px); opacity: 0; }
        }
        @keyframes bubble-28 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          7% { opacity: 1; }
          93% { opacity: 1; }
          100% { transform: translateY(-270px) translateX(-42px); opacity: 0; }
        }
        @keyframes bubble-29 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(-175px) translateX(29px); opacity: 0; }
        }
        @keyframes bubble-30 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(-205px) translateX(-34px); opacity: 0; }
        }
        
        /* More frequent bubbles with faster animations */
        @keyframes bubble-31 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(18px); opacity: 0; }
        }
        @keyframes bubble-32 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translateY(-180px) translateX(-22px); opacity: 0; }
        }
        @keyframes bubble-33 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-160px) translateX(33px); opacity: 0; }
        }
        @keyframes bubble-34 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          6% { opacity: 1; }
          94% { opacity: 1; }
          100% { transform: translateY(-220px) translateX(-28px); opacity: 0; }
        }
        @keyframes bubble-35 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(25px); opacity: 0; }
        }
        @keyframes bubble-36 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-260px) translateX(-35px); opacity: 0; }
        }
        @keyframes bubble-37 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          24% { opacity: 1; }
          76% { opacity: 1; }
          100% { transform: translateY(-145px) translateX(29px); opacity: 0; }
        }
        @keyframes bubble-38 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          4% { opacity: 1; }
          96% { opacity: 1; }
          100% { transform: translateY(-280px) translateX(-40px); opacity: 0; }
        }
        @keyframes bubble-39 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(-170px) translateX(21px); opacity: 0; }
        }
        @keyframes bubble-40 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(-200px) translateX(-32px); opacity: 0; }
        }
        @keyframes bubble-41 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          22% { opacity: 1; }
          78% { opacity: 1; }
          100% { transform: translateY(-135px) translateX(27px); opacity: 0; }
        }
        @keyframes bubble-42 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(-240px) translateX(-38px); opacity: 0; }
        }
        @keyframes bubble-43 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(-155px) translateX(24px); opacity: 0; }
        }
        @keyframes bubble-44 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          6% { opacity: 1; }
          94% { opacity: 1; }
          100% { transform: translateY(-190px) translateX(-29px); opacity: 0; }
        }
        @keyframes bubble-45 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-125px) translateX(31px); opacity: 0; }
        }
        
        /* Bubble cluster animations */
        @keyframes bubble-cluster-1 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(15px); opacity: 0; }
        }
        @keyframes bubble-cluster-2 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(25px); opacity: 0; }
        }
        @keyframes bubble-cluster-3 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(-160px) translateX(35px); opacity: 0; }
        }
        @keyframes bubble-cluster-4 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(-15px); opacity: 0; }
        }
        @keyframes bubble-cluster-5 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-130px) translateX(-25px); opacity: 0; }
        }
        @keyframes bubble-cluster-6 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-150px) translateX(-35px); opacity: 0; }
        }
        @keyframes bubble-cluster-7 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(-110px) translateX(20px); opacity: 0; }
        }
        @keyframes bubble-cluster-8 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(-135px) translateX(30px); opacity: 0; }
        }
        @keyframes bubble-cluster-9 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          22% { opacity: 1; }
          78% { opacity: 1; }
          100% { transform: translateY(-155px) translateX(40px); opacity: 0; }
        }
        @keyframes bubble-cluster-10 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translateY(-125px) translateX(18px); opacity: 0; }
        }
        @keyframes bubble-cluster-11 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          19% { opacity: 1; }
          81% { opacity: 1; }
          100% { transform: translateY(-145px) translateX(28px); opacity: 0; }
        }
        @keyframes bubble-cluster-12 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          24% { opacity: 1; }
          76% { opacity: 1; }
          100% { transform: translateY(-165px) translateX(38px); opacity: 0; }
        }
        @keyframes bubble-cluster-13 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          11% { opacity: 1; }
          89% { opacity: 1; }
          100% { transform: translateY(-105px) translateX(-18px); opacity: 0; }
        }
        @keyframes bubble-cluster-14 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(-135px) translateX(-28px); opacity: 0; }
        }
        @keyframes bubble-cluster-15 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          21% { opacity: 1; }
          79% { opacity: 1; }
          100% { transform: translateY(-155px) translateX(-38px); opacity: 0; }
        }
        @keyframes bubble-cluster-16 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          13% { opacity: 1; }
          87% { opacity: 1; }
          100% { transform: translateY(-115px) translateX(22px); opacity: 0; }
        }
        @keyframes bubble-cluster-17 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          17% { opacity: 1; }
          83% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(32px); opacity: 0; }
        }
        @keyframes bubble-cluster-18 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          23% { opacity: 1; }
          77% { opacity: 1; }
          100% { transform: translateY(-160px) translateX(42px); opacity: 0; }
        }
        @keyframes bubble-cluster-19 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          9% { opacity: 1; }
          91% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(-12px); opacity: 0; }
        }
        @keyframes bubble-cluster-20 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-130px) translateX(-22px); opacity: 0; }
        }
        @keyframes bubble-cluster-21 {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-150px) translateX(-32px); opacity: 0; }
        }
        
        .animate-bubble-1 { animation: bubble-1 6s infinite linear; }
        .animate-bubble-2 { animation: bubble-2 8s infinite linear; }
        .animate-bubble-3 { animation: bubble-3 10s infinite linear; }
        .animate-bubble-4 { animation: bubble-4 7s infinite linear; }
        .animate-bubble-5 { animation: bubble-5 9s infinite linear; }
        .animate-bubble-6 { animation: bubble-6 12s infinite linear; }
        .animate-bubble-7 { animation: bubble-7 5s infinite linear; }
        .animate-bubble-8 { animation: bubble-8 11s infinite linear; }
        .animate-bubble-9 { animation: bubble-9 4s infinite linear; }
        .animate-bubble-10 { animation: bubble-10 13s infinite linear; }
        .animate-bubble-11 { animation: bubble-11 7.5s infinite linear; }
        .animate-bubble-12 { animation: bubble-12 14s infinite linear; }
        .animate-bubble-13 { animation: bubble-13 8.5s infinite linear; }
        .animate-bubble-14 { animation: bubble-14 6.5s infinite linear; }
        .animate-bubble-15 { animation: bubble-15 9.5s infinite linear; }
        .animate-bubble-16 { animation: bubble-16 15s infinite linear; }
        .animate-bubble-17 { animation: bubble-17 5.5s infinite linear; }
        .animate-bubble-18 { animation: bubble-18 16s infinite linear; }
        .animate-bubble-19 { animation: bubble-19 7s infinite linear; }
        .animate-bubble-20 { animation: bubble-20 10.5s infinite linear; }
        .animate-bubble-21 { animation: bubble-21 8s infinite linear; }
        .animate-bubble-22 { animation: bubble-22 11.5s infinite linear; }
        .animate-bubble-23 { animation: bubble-23 4.5s infinite linear; }
        .animate-bubble-24 { animation: bubble-24 17s infinite linear; }
        .animate-bubble-25 { animation: bubble-25 6s infinite linear; }
        .animate-bubble-26 { animation: bubble-26 9s infinite linear; }
        .animate-bubble-27 { animation: bubble-27 5.8s infinite linear; }
        .animate-bubble-28 { animation: bubble-28 12.5s infinite linear; }
        .animate-bubble-29 { animation: bubble-29 7.2s infinite linear; }
        .animate-bubble-30 { animation: bubble-30 10.8s infinite linear; }
        .animate-bubble-31 { animation: bubble-31 6.5s infinite linear; }
        .animate-bubble-32 { animation: bubble-32 8.2s infinite linear; }
        .animate-bubble-33 { animation: bubble-33 7.8s infinite linear; }
        .animate-bubble-34 { animation: bubble-34 5.2s infinite linear; }
        .animate-bubble-35 { animation: bubble-35 8.8s infinite linear; }
        .animate-bubble-36 { animation: bubble-36 6.8s infinite linear; }
        .animate-bubble-37 { animation: bubble-37 4.8s infinite linear; }
        .animate-bubble-38 { animation: bubble-38 9.2s infinite linear; }
        .animate-bubble-39 { animation: bubble-39 7.5s infinite linear; }
        .animate-bubble-40 { animation: bubble-40 8.5s infinite linear; }
        .animate-bubble-41 { animation: bubble-41 6.2s infinite linear; }
        .animate-bubble-42 { animation: bubble-42 5.8s infinite linear; }
        .animate-bubble-43 { animation: bubble-43 7.8s infinite linear; }
        .animate-bubble-44 { animation: bubble-44 4.5s infinite linear; }
        .animate-bubble-45 { animation: bubble-45 8.2s infinite linear; }
        .animate-bubble-cluster-1 { animation: bubble-cluster-1 6.5s infinite linear; }
        .animate-bubble-cluster-2 { animation: bubble-cluster-2 7.8s infinite linear; }
        .animate-bubble-cluster-3 { animation: bubble-cluster-3 9.2s infinite linear; }
        .animate-bubble-cluster-4 { animation: bubble-cluster-4 5.3s infinite linear; }
        .animate-bubble-cluster-5 { animation: bubble-cluster-5 6.7s infinite linear; }
        .animate-bubble-cluster-6 { animation: bubble-cluster-6 8.1s infinite linear; }
        .animate-bubble-cluster-7 { animation: bubble-cluster-7 7.1s infinite linear; }
        .animate-bubble-cluster-8 { animation: bubble-cluster-8 8.6s infinite linear; }
        .animate-bubble-cluster-9 { animation: bubble-cluster-9 10.1s infinite linear; }
        .animate-bubble-cluster-10 { animation: bubble-cluster-10 6.8s infinite linear; }
        .animate-bubble-cluster-11 { animation: bubble-cluster-11 8.3s infinite linear; }
        .animate-bubble-cluster-12 { animation: bubble-cluster-12 9.7s infinite linear; }
        .animate-bubble-cluster-13 { animation: bubble-cluster-13 5.8s infinite linear; }
        .animate-bubble-cluster-14 { animation: bubble-cluster-14 7.2s infinite linear; }
        .animate-bubble-cluster-15 { animation: bubble-cluster-15 8.6s infinite linear; }
        .animate-bubble-cluster-16 { animation: bubble-cluster-16 6.1s infinite linear; }
        .animate-bubble-cluster-17 { animation: bubble-cluster-17 7.5s infinite linear; }
        .animate-bubble-cluster-18 { animation: bubble-cluster-18 8.9s infinite linear; }
        .animate-bubble-cluster-19 { animation: bubble-cluster-19 5.4s infinite linear; }
        .animate-bubble-cluster-20 { animation: bubble-cluster-20 6.8s infinite linear; }
        .animate-bubble-cluster-21 { animation: bubble-cluster-21 8.2s infinite linear; }
      `}</style>
    </section>
  );
};

export default HowToBuy;


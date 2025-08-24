import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, Zap, Users, Coins } from "lucide-react";
import btn from "@/assets/btn.png";
import bush from "@/assets/bush.png";
import character from "@/assets/character.png";
import character_faq from "@/assets/character_faq.png";
import woodmaterial from "@/assets/woodmaterial.png";
import mini_wood from "@/assets/mini_wood.png";
import wood_board from "@/assets/wood_board.png";

const Benefit = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: "Early Bird Advantage",
      description: "Get in early and secure the best token price before public launch. Early investors typically see the highest returns.",
      highlight: "Up to 500% potential returns",
      color: "bg-emerald-500/20 border-emerald-500/30"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Secure Investment",
      description: "Smart contract audited by leading security firms. Your investment is protected by industry-standard security measures.",
      highlight: "100% audited & secure",
      color: "bg-blue-500/20 border-blue-500/30"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Liquidity",
      description: "Tokens are immediately tradeable after presale ends. No waiting periods or vesting schedules for presale participants.",
      highlight: "Immediate trading access",
      color: "bg-yellow-500/20 border-yellow-500/30"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Community Benefits",
      description: "Join an exclusive community of early supporters with special perks, governance rights, and insider access to future developments.",
      highlight: "Exclusive community access",
      color: "bg-purple-500/20 border-purple-500/30"
    },
    {
      icon: <Coins className="w-8 h-8 text-orange-400" />,
      title: "Staking Rewards",
      description: "Earn passive income by staking your SOZIA tokens. Higher APY rates for early investors and long-term holders.",
      highlight: "Up to 120% APY staking",
      color: "bg-orange-500/20 border-orange-500/30"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Deflationary Tokenomics",
      description: "Built-in burn mechanism reduces total supply over time, increasing the value of your holdings automatically.",
      highlight: "Automatic value appreciation",
      color: "bg-green-500/20 border-green-500/30"
    }
  ];

  const stats = [
    { label: "Presale Price", value: "$0.0001", description: "per token" },
    { label: "Public Price", value: "$0.0002", description: "per token" },
    { label: "Potential Gain", value: "100%", description: "at launch" },
    { label: "Total Supply", value: "1B", description: "SOZIA tokens" }
  ];

  return (
    <section className="py-20 relative  min-h-screen bg-white">
      {/* Remove the complex background layers and replace with simple white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Decorative Elements */}
      <img src={bush} alt="bush" className="absolute -top-[240px] -left-[332px] rotate-[90deg] hover:scale-105 transition-transform duration-300 z-10" width={800} height={800} />
      <img src={bush} alt="bush" className="absolute -top-[240px] -right-[342px] rotate-[-90deg] hover:scale-105 transition-transform duration-300 z-10" width={800} height={800} />
      
      <div className="container mx-auto  px-4 relative z-10">
        {/* Main Title Section */}
        <div className="text-center mb-0">
          <h1 className="text-6xl font-bold font-pinewood text-gray-900 mb-6 drop-shadow-lg">
            Buy SOZIA Token Now!
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto drop-shadow-md mb-8">
            Don't miss out on the opportunity of a lifetime! Join the SOZIA revolution and secure your financial future with exclusive presale benefits.
          </p>
          
          {/* CTA Button */}
          <button className="
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
              " style={{ backgroundImage: `url(${btn})` }}>
                <span className=" text-lg z-10 ">
                  BUY SOZIA NOW!
                </span>
              </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative hover:scale-105 transition-all duration-300">
              <div 
                className="absolute top-0 left-0 h-[170px] w-full h-full z-10 bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${mini_wood})` }}
              />
              <div className="p-6 mt-10 text-center relative z-10 ">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <Badge className="bg-gray-100 text-gray-800 border-gray-300">
                  {benefit.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Benefit;

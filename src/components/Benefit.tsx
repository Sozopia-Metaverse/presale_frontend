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
      icon: <TrendingUp className="w-10 h-10 text-green-600" />,
      title: "Early Bird Advantage",
      description: "Get in early and secure the best token price before public launch. Early investors typically see the highest returns.",
      highlight: "Up to 500% potential returns",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: "Secure Investment",
      description: "Smart contract audited by leading security firms. Your investment is protected by industry-standard security measures.",
      highlight: "100% audited & secure",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    },
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: "Instant Liquidity",
      description: "Tokens are immediately tradeable after presale ends. No waiting periods or vesting schedules for presale participants.",
      highlight: "Immediate trading access",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Community Benefits",
      description: "Join an exclusive community of early supporters with special perks, governance rights, and insider access to future developments.",
      highlight: "Exclusive community access",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    },
    {
      icon: <Coins className="w-10 h-10 text-green-600" />,
      title: "Staking Rewards",
      description: "Earn passive income by staking your SOZIA tokens. Higher APY rates for early investors and long-term holders.",
      highlight: "Up to 120% APY staking",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-600" />,
      title: "Deflationary Tokenomics",
      description: "Built-in burn mechanism reduces total supply over time, increasing the value of your holdings automatically.",
      highlight: "Automatic value appreciation",
      color: "bg-green-50 border-2 border-green-200 hover:border-green-300"
    }
  ];

  const stats = [
    { label: "Presale Price", value: "$0.0001", description: "per token" },
    { label: "Public Price", value: "$0.0002", description: "per token" },
    { label: "Potential Gain", value: "100%", description: "at launch" },
    { label: "Total Supply", value: "1B", description: "SOZIA tokens" }
  ];

  return (
    <section className="py-20 relative min-h-screen bg-white">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Simple floating elements with green accents */}
      <div className="absolute top-20 left-10 w-32 h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-16 bg-green-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-12 bg-green-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Decorative Elements with subtle green styling */}
      <img src={bush} alt="bush" className="absolute -top-[240px] -left-[332px] rotate-[90deg] hover:scale-110 hover:rotate-[95deg] transition-all duration-500 z-10 filter brightness-110" width={800} height={800} />
      <img src={bush} alt="bush" className="absolute -top-[240px] -right-[342px] rotate-[-90deg] hover:scale-110 hover:rotate-[-95deg] transition-all duration-500 z-10 filter brightness-110" width={800} height={800} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Benefit GIF Image */}


        {/* Main Title Section with green cartoon styling */}
        <div className="text-center my-16 pt-32">

          <button className="
                font-bold font-pinewood text-2xl text-white
                bg-cover bg-center bg-no-repeat
                w-[600px] h-60 relative z-[55]
                transition-all duration-500 ease-out
                hover:scale-[1.35] hover:rotate-2
                group
                overflow-hidden
                scale-150
                pb-10
                drop-shadow-lg
              " style={{ backgroundImage: `url(${btn})` }}>
            <span className="text-4xl z-10 drop-shadow-lg">
              BUY SOZIA NOW!
            </span>
          </button>
          <img
            src="/benifit.gif"
            alt="SOZIA Benefits"
            className="absolute -top-8
             left-1/2 -translate-x-1/2 z-[10]"
          />
          <div className="relative z-10">

            <p className="font-bold text-green-800 text-2xl">
              Don't miss out on the opportunity of a lifetime! Join the SOZIA revolution and secure your financial future with exclusive presale benefits! 🌟
            </p>
          </div>
        </div>

        {/* Stats Section with green cartoon cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative hover:scale-105 hover:-translate-y-1 transition-all duration-300">

              <div className="p-6 mt-10 text-center relative z-10 bg-green-50 rounded-2xl border-2 border-green-900 shadow-lg">
                <div className="text-3xl font-bold text-green-800 mb-2">{stat.value}</div>
                <div className="text-green-700 font-semibold text-lg">{stat.label}</div>
                <div className="text-green-600 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid with green cartoon styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`${benefit.color} hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl rounded-2xl shadow-lg overflow-hidden border-2 border-green-900`}
            >
              <CardContent className="p-6 ">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-green-100 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800">{benefit.title}</h3>
                </div>

                <p className="text-green-700 mb-4 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                <Badge className="bg-green-200 text-green-800 border border-green-300 text-sm font-bold px-4 py-2 rounded-full">
                  ✨ {benefit.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional green cartoon decoration */}
        <div className="text-center">
          <div className="inline-block bg-green-100 text-green-800 font-bold text-lg px-8 py-4 rounded-full border-2 border-green-300 shadow-lg hover:scale-105 transition-transform duration-300">
            🎉 Join the SOZOPIA Family Today! 🎉
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, Star } from "lucide-react";
import character_roadmap from "@/assets/character_roadmap.png";
import mini_wood from "@/assets/mini_wood.png";

type Status = "completed" | "in-progress" | "upcoming";

type RoadmapItem = {
  quarter: string;
  title: string;
  description: string;
  status: Status;
};

const roadmapData: RoadmapItem[] = [
  {
    quarter: "Q1–Q2 2024",
    title: "Foundation Phase",
    description: "Tokenomics framework, concept art, and smart contracts deployment.",
    status: "completed"
  },
  {
    quarter: "Q3–Q4 2024",
    title: "Alpha Development",
    description: "Alpha prototype with survival mechanics and token launch.",
    status: "completed"
  },
  {
    quarter: "Q1–Q2 2025",
    title: "Beta Testing",
    description: "Closed alpha testing and public demo release.",
    status: "in-progress"
  },
  {
    quarter: "Q3–Q4 2025",
    title: "Community Building",
    description: "Community events and beta build completion.",
    status: "in-progress"
  },
  {
    quarter: "Q1–Q2 2026",
    title: "Act I Launch",
    description: "Full launch of Act I with marketplace integration.",
    status: "upcoming"
  },
  {
    quarter: "Q3 2026",
    title: "Act II Release",
    description: "Industrial Sector with corporate factions.",
    status: "upcoming"
  },
 
];

const Roadmap = () => {
  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-amber-600" />;
      case "upcoming":
        return <Circle className="w-5 h-5 text-amber-400" />;
    }
  };

  const getStatusText = (status: Status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Planned";
    }
  };

  return (
    <section
      id="roadmap"
      className="py-16 relative min-h-screen"
    >
      {/* Enhanced Background with Multiple Layers - Same as HeroSection */}
      <div className="absolute inset-0">
        {/* Professional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 animate-pulse" />
        
        {/* Additional professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Jungle/Forest Background Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800" />
        
        {/* Forest Canopy Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-emerald-900/30" />
        
        {/* Jungle Atmosphere - Moss and Earth Tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 via-emerald-700/15 to-green-900/25" />
        
        {/* Subtle Forest Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_40%)]" />
        
        {/* Jungle Mist Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-emerald-950/10" />
      </div>

      {/* Wooden texture overlay */}
      
      <img src={character_roadmap} alt="character_roadmap" className="absolute scale-75 -top-10 left-[20%] w-64 h-80 z-10" />
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-700" />
            <span className="text-white font-semibold text-sm tracking-wider font-pinewood">ROADMAP</span>
            <Star className="w-5 h-5 text-amber-700" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-pinewood drop-shadow-lg">
             Roadmap
          </h2>
          <p className="text-white max-w-2xl mx-auto font-medium">
            Our journey to revolutionize gaming and environmental conservation
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-2 py-3 -translate-y-16 overflow-hidden scale-125 transition-all duration-300 hover:scale-[1.3]"
              style={{
                backgroundImage: `url(${mini_wood})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="p-6 relative mt-12 z-10 scale-[0.75]">
                {/* Wooden grain lines effect */}
             
                
                {/* Quarter */}
                <div className="text-amber-700 font-semibold text-sm mb-3 font-pinewood relative z-10">
                  {item.quarter}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-amber-900 mb-3 font-pinewood relative z-10 drop-shadow-sm">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-amber-800 text-sm mb-4 leading-relaxed relative z-10">
                  {item.description}
                </p>
                
                {/* Status */}
                <div className="flex items-center gap-2 relative z-10">
                  {getStatusIcon(item.status)}
                  <span className="text-sm font-medium text-amber-700 font-pinewood">
                    {getStatusText(item.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
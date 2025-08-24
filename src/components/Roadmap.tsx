/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, Star, CalendarPlus } from "lucide-react";
import character_roadmap from "@/assets/character_roadmap.gif";
import mini_wood from "@/assets/mini_wood2.png";
import vine from "@/assets/vine.png";
import bush from "@/assets/bush.png";

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
    description:
      "Tokenomics framework, concept art, and smart contracts deployment.",
    status: "completed",
  },
  {
    quarter: "Q3–Q4 2024",
    title: "Alpha Development",
    description: "Alpha prototype with survival mechanics and token launch.",
    status: "completed",
  },
  {
    quarter: "Q1–Q2 2025",
    title: "Beta Testing",
    description: "Closed alpha testing and public demo release.",
    status: "in-progress",
  },
  {
    quarter: "Q3–Q4 2025",
    title: "Community Building",
    description: "Community events and beta build completion.",
    status: "in-progress",
  },
  {
    quarter: "Q1–Q2 2026",
    title: "Act I Launch",
    description: "Full launch of Act I with marketplace integration.",
    status: "upcoming",
  },
  {
    quarter: "Q3 2026",
    title: "Act II Release",
    description: "Industrial Sector with corporate factions.",
    status: "upcoming",
  },
];

const Roadmap = () => {
  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-amber-900" />;
      case "upcoming":
        return <CalendarPlus className="w-5 h-5 text-amber-900" />;
    }
  };

  const getStatusText = (status: Status) => {
    switch (status) {
      case "completed":
        return { text: "Completed", color: "text-green-900" };
      case "in-progress":
        return { text: "In Progress", color: "text-amber-900" };
      case "upcoming":
        return { text: "Planned", color: "text-amber-900" };
    }
  };

  return (
    <section id="roadmap" className="py-32 relative min-h-screen bg-[#014829]">
      <img
        src={character_roadmap}
        alt="character_roadmap"
        className="absolute scale-75 top-10 left-[20%] w-64 h-80 z-10"
      />
      <img
        src={bush}
        alt="bush"
        className="absolute -bottom-48 rotate-[90deg] -left-[300px] hover:scale-105 transition-transform duration-300 z-50"
        width={800}
        height={800}
      />
      <img
        src={bush}
        alt="bush"
        className="absolute -top-[10px] rotate-[-90deg] -right-[300px] hover:scale-105 transition-transform duration-300 z-50"
        width={800}
        height={800}
      />
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-700" />
            <span className="text-white font-semibold text-sm tracking-wider font-pinewood">
              ROADMAP
            </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {roadmapData.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden scale-[1.2] transition-all duration-300"
              style={{
                backgroundImage: `url(${mini_wood})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-6 relative m-4 mb-10 mt-7 z-10 scale-[0.75]">
                {/* Wooden grain lines effect */}

                {/* Quarter */}
                <div className="text-amber-700 font-semibold text-sm mb-3 font-pinewood relative z-10">
                  {item.quarter}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-green-900 mb-3 font-pinewood relative z-10 drop-shadow-sm">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-amber-900 text-sm mb-4 leading-relaxed relative z-10">
                  {item.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 relative z-10">
                  {getStatusIcon(item.status)}
                  <span
                    className={`text-sm font-medium font-pinewood ${
                      getStatusText(item.status)?.color
                    }`}
                  >
                    {getStatusText(item.status)?.text}
                  </span>
                </div>
              </div>

              {/* Vine connector - show for all cards except first and 4th */}
              {idx > 0 && idx !== 3 && (
                <img
                  src={vine}
                  alt="vine connector"
                  className="vine-connector"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

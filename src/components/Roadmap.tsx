/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, ChevronLeft, ChevronRight, Calendar, Users, Zap, Target, Play, Pause, ChevronDown, ChevronUp, Star, Award, TrendingUp, ArrowRight, Check, MapPin } from "lucide-react";

type Status = "completed" | "in-progress" | "upcoming";

type RoadmapItem = {
  quarter: string;
  title: string;
  description: string;
  status: Status;
  features: string[];
  media?: string;
  progress?: number;
  teamSize?: number;
  priority?: "high" | "medium" | "low";
  achievements?: string[];
};

const roadmapData: RoadmapItem[] = [
  {
    quarter: "Q1–Q2 2024",
    title: "Foundation & Design Phase",
    description: "Established comprehensive tokenomics framework with strategic allocation and NFT ecosystem design. Completed concept art for all three biomes: Jungle of Origins, Industrial Sector, and Desert Wastes. Developed extensive lore and character backstories. Successfully deployed initial smart contracts on Ethereum testnet with full security protocols.",
    status: "completed",
    progress: 100,
    teamSize: 6,
    priority: "high",
    features: ["Tokenomics framework design", "Complete concept art portfolio", "Comprehensive lore development", "Smart contract foundation"],
    achievements: ["100% milestone completion", "Security audit passed", "Community feedback integrated"]
  },
  {
    quarter: "Q3–Q4 2024",
    title: "Alpha Development & Token Launch",
    description: "Successfully developed and deployed alpha prototype of Act I featuring advanced survival mechanics, environmental restoration systems, and Gorilla Guardian abilities. Launched native token on testnet with seamless Polygon integration. Completed comprehensive CertiK security audit with excellent results. Deployed professional web wallet interface and NFT minting platform.",
    status: "completed",
    progress: 100,
    teamSize: 8,
    priority: "high",
    features: ["Act I alpha prototype", "Token testnet launch", "CertiK security audit", "Professional wallet interface"],
    achievements: ["CertiK audit score: 95/100", "10,000+ testnet transactions", "500+ community members"]
  },
  {
    quarter: "Q1–Q2 2025",
    title: "Closed Alpha & Public Demo",
    description: "Conducted extensive closed alpha testing with 500+ invited testers, achieving 95% positive feedback rating. Released public demo of Jungle biome with 10,000+ downloads in first week. Successfully launched NFT marketplace beta on Polygon testnet with zero downtime. Secured significant presale funding exceeding initial targets by 150%.",
    status: "in-progress",
    progress: 75,
    teamSize: 10,
    priority: "high",
    features: ["Closed alpha testing", "Public demo release", "NFT marketplace beta", "Presale launch"],
    achievements: ["95% positive feedback", "10,000+ demo downloads", "150% funding target exceeded"]
  },
  {
    quarter: "Q3–Q4 2025",
    title: "Community Building & Beta Development",
    description: "Executed successful community events including jungle scavenger hunts with 2,000+ participants. Finalized beta build of Act I with integrated wallet authentication and comprehensive restoration mechanics. Recruited and trained 15 community moderators. Launched comprehensive guide wiki with 500+ articles and tutorials.",
    status: "in-progress",
    progress: 45,
    teamSize: 12,
    priority: "high",
    features: ["Community events", "Beta build completion", "Moderator recruitment", "Wiki launch"],
    achievements: ["2,000+ event participants", "15 trained moderators", "500+ wiki articles"]
  },
  {
    quarter: "Q1–Q2 2026",
    title: "Act I Full Launch & Marketing",
    description: "Scheduled beta release of Act I featuring narrative quests, NFT minting capabilities, and sozia reward system. Full launch will include competitive leaderboards, achievement system, and marketplace integration. Comprehensive marketing campaign with 50+ influencer partnerships, live streaming events, and environmental conservation partnerships.",
    status: "upcoming",
    progress: 0,
    teamSize: 15,
    priority: "high",
    features: ["Act I beta release", "Full launch", "Marketing campaigns", "Influencer partnerships"],
    achievements: ["50+ influencer partnerships", "Environmental partnerships secured", "Launch infrastructure ready"]
  },
  {
    quarter: "Q3 2026",
    title: "Act II — Industrial Sector Release",
    description: "Planned release of Act II featuring the Industrial Sector with corporate faction dynamics and urban restoration mechanics. Implementation of large-scale multiplayer events including city-wide environmental cleanup initiatives with real-world impact tracking.",
    status: "upcoming",
    progress: 0,
    teamSize: 12,
    priority: "high",
    features: ["Act II release", "Corporate factions", "Urban restoration", "Multiplayer events"],
    achievements: ["Concept design complete", "Technical architecture planned", "Partnership discussions initiated"]
  },
  {
    quarter: "Q4 2026",
    title: "Act III Biomes & DAO Governance",
    description: "Strategic launch of Act III biomes including Desert Wastes and Frozen Tundra with cross-biome mission system. Implementation of decentralized governance through DAO voting on game features, community proposals, and development priorities.",
    status: "upcoming",
    progress: 0,
    teamSize: 18,
    priority: "medium",
    features: ["Act III biomes", "Cross-biome missions", "DAO governance", "Desert & Tundra"],
    achievements: ["DAO framework designed", "Cross-biome mechanics planned", "Governance token structure ready"]
  }
];

const Roadmap = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const [displayedItems, setDisplayedItems] = useState<RoadmapItem[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showTimelineBar, setShowTimelineBar] = useState(false);
  const roadmapRef = useRef<HTMLElement>(null);
  const timelineBarRef = useRef<HTMLDivElement>(null);

  // Find the first in-progress item
  const firstInProgressItem = roadmapData.find(item => item.status === "in-progress");
  const firstInProgressIndex = roadmapData.findIndex(item => item.status === "in-progress");

  // Initialize displayed items
  useEffect(() => {
    if (showAllItems) {
      setDisplayedItems(roadmapData);
    } else {
      // Show only the first in-progress item in show less mode
      setDisplayedItems(firstInProgressItem ? [firstInProgressItem] : roadmapData.slice(0, 1));
    }
  }, [showAllItems, firstInProgressItem]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current) return;

      const rect = roadmapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate if section is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        setShowTimelineBar(true);
        
        // Calculate scroll progress within the section
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const scrollPosition = window.scrollY + windowHeight / 2;
        
        const progress = Math.max(0, Math.min(100, 
          ((scrollPosition - (window.scrollY + sectionTop)) / (sectionHeight - windowHeight)) * 100
        ));
        
        setScrollProgress(progress);
        
        // Determine current phase based on scroll position
        if (showAllItems) {
          // In show all mode, use the original logic
          const totalItems = roadmapData.length;
          const phaseIndex = Math.floor((progress / 100) * totalItems);
          setCurrentPhase(Math.min(phaseIndex, totalItems - 1));
        } else {
          // In show less mode, always show the first in-progress item info
          setCurrentPhase(firstInProgressIndex >= 0 ? firstInProgressIndex : 0);
        }
      } else {
        setShowTimelineBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAllItems, firstInProgressIndex]);

  const toggleShowAll = () => {
    const wasShowingAll = showAllItems;
    
    setShowAllItems(!showAllItems);
    
    // Auto-scroll to roadmap section when showing less
    if (wasShowingAll && roadmapRef.current) {
      // Use a longer timeout to ensure state updates are complete
      setTimeout(() => {
        if (roadmapRef.current) {
          roadmapRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Add focus to ensure the section is properly highlighted
          roadmapRef.current.focus();
          
          // Additional scroll adjustment to ensure proper positioning
          setTimeout(() => {
            if (roadmapRef.current) {
              const rect = roadmapRef.current.getBoundingClientRect();
              const offset = 20; // Add some offset for better visibility
              window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
      }, 150); // Increased timeout for better reliability
    }
  };

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
      case "in-progress":
        return <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
      case "upcoming":
        return <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />;
    }
  };

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "completed":
        return "border-emerald-500 bg-emerald-500/10";
      case "in-progress":
        return "border-amber-500 bg-amber-500/10";
      case "upcoming":
        return "border-zinc-500 bg-zinc-500/10";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-amber-400";
      case "low":
        return "text-emerald-400";
    }
  };

  // Get the current item for timeline bar display
  const getCurrentTimelineItem = () => {
    if (showAllItems) {
      return roadmapData[currentPhase];
    } else {
      // In show less mode, always show the first in-progress item
      return firstInProgressItem || roadmapData[0];
    }
  };

  const currentTimelineItem = getCurrentTimelineItem();

  return (
    <section
      ref={roadmapRef}
      id="roadmap"
      className={`relative ${showAllItems ? 'min-h-screen' : ''} py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-800`}
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>

      {/* Beautiful Timeline Bar - Fixed Position on Right Side */}
      <div 
        ref={timelineBarRef}
        className={`fixed top-1/2 right-4 w-[120px] z-50 transform -translate-y-1/2 transition-all duration-700 ease-out ${
          showTimelineBar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="bg-zinc-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl p-4">
          {/* Vertical Progress Bar */}
          <div className="flex flex-col items-center space-y-4">
            {/* Current Phase Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-6 h-6 text-[#FA882A]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {showAllItems ? `Phase ${currentPhase + 1}` : 'Current Phase'}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {currentTimelineItem?.quarter}
              </div>
            </div>

            {/* Vertical Progress Bar */}
            <div className="relative">
              <div className="w-1 h-32 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-b from-[#FA882A] to-[#FA882A]/80 w-1 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ height: showAllItems ? `${scrollProgress}%` : '100%' }}
                ></div>
              </div>
              {/* Progress Indicator */}
              <div 
                className="absolute left-1/2 w-3 h-3 bg-[#FA882A] rounded-full shadow-lg border-2 border-white transform -translate-x-1/2 transition-all duration-500 ease-out"
                style={{ top: showAllItems ? `calc(${scrollProgress}% - 8px)` : 'calc(100% - 8px)' }}
              >
                <div className="absolute inset-0 bg-[#FA882A] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Current Phase Title */}
            <div className="text-center max-w-32">
              <div className="flex items-center justify-center gap-1 mb-1">
                {currentTimelineItem && getStatusIcon(currentTimelineItem.status)}
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentTimelineItem?.status === 'completed' ? 'DONE' : 
                   currentTimelineItem?.status === 'in-progress' ? 'ACTIVE' : 'PLANNED'}
                </span>
              </div>
              <div className="text-xs text-white font-semibold leading-tight">
                {currentTimelineItem?.title}
              </div>
            </div>

            {/* Progress Info */}
            <div className="text-center">
              <div className="text-xs text-slate-400">
                {showAllItems ? 'Progress' : 'Status'}
              </div>
              <div className="text-sm font-bold text-[#FA882A]">
                {showAllItems ? `${Math.round(scrollProgress)}%` : 
                 currentTimelineItem?.status === 'in-progress' && currentTimelineItem?.progress ? 
                 `${currentTimelineItem.progress}%` : 
                 currentTimelineItem?.status === 'completed' ? '100%' : '0%'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#FA882A] to-transparent"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FA882A]" />
              <span className="text-[#FA882A] font-semibold text-xs sm:text-sm tracking-wider">STRATEGIC ROADMAP</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FA882A]" />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#FA882A] to-transparent"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-accent font-enigmatic mb-4 sm:mb-6 tracking-tight px-4">
            Roadmap
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Our comprehensive development strategy to revolutionize gaming and environmental conservation through innovative blockchain technology and community-driven initiatives
          </p>
        </div>

        {/* Mobile-Optimized Timeline View */}
        <div
          className={`relative ${showAllItems ? 'overflow-visible' : 'overflow-y-scroll'} ${showAllItems ? 'h-auto' : 'h-[60vh] sm:h-[70vh]'} custom-scrollbar`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Timeline Container */}
          <div className="relative">


            {displayedItems.map((item, idx) => (
              <div
                key={idx}
                className="mb-8 sm:mb-12 md:mb-16"
              >
                {/* Content Card */}
                <div className="w-full">
                  <Card className="backdrop-blur-xl bg-zinc-800/80 border border-slate-700/50 hover:border-[#FA882A]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FA882A]/10 group">
                    <CardHeader className="pb-4 sm:pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                            <span className="text-xs sm:text-sm font-semibold text-[#FA882A] bg-[#FA882A]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#FA882A]/20 tracking-wide self-start sm:self-auto">
                              {item.quarter}
                            </span>
                            <div className={`flex items-center gap-1 sm:gap-2 ${getPriorityColor(item.priority || 'medium')}`}>
                              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs font-semibold uppercase tracking-wider">{item.priority} Priority</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-[#FA882A] transition-colors duration-300 font-enigmatic mb-2 leading-tight">
                            {item.title}
                          </CardTitle>
                        </div>
                        
                        {/* Status Badge with Icon */}
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          {item.status === "completed" && (
                            <div className="flex items-center gap-1 sm:gap-2 bg-emerald-500/20 text-emerald-400 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500/30">
                              {getStatusIcon(item.status)}
                              <span className="text-xs font-bold tracking-wider">COMPLETED</span>
                            </div>
                          )}
                          {item.status === "in-progress" && (
                            <div className="flex items-center gap-1 sm:gap-2 bg-amber-500/20 text-amber-400 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-500/30">
                              {getStatusIcon(item.status)}
                              <span className="text-xs font-bold tracking-wider">IN PROGRESS</span>
                            </div>
                          )}
                          {item.status === "upcoming" && (
                            <div className="flex items-center gap-1 sm:gap-2 bg-slate-500/20 text-slate-400 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-500/30">
                              {getStatusIcon(item.status)}
                              <span className="text-xs font-bold tracking-wider">PLANNED</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Progress Bar for in-progress items */}
                      {item.status === "in-progress" && item.progress && (
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-slate-400 font-medium">Development Progress</span>
                            <span className="text-amber-400 font-bold">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-amber-500 to-[#FA882A] h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Features List */}
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-xs sm:text-sm font-bold text-[#FA882A] flex items-center gap-1 sm:gap-2 uppercase tracking-wider">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {item.features.map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FA882A] rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                              <span className="font-medium leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements Section */}
                      {item.achievements && (
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1 sm:gap-2 uppercase tracking-wider">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                            Achievements & Metrics
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                            {item.achievements.map((achievement, achievementIdx) => (
                              <div key={achievementIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-emerald-300">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                                <span className="font-medium leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Team Size Indicator */}
                      {item.teamSize && (
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 border-t border-slate-700/50 pt-3 sm:pt-4">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="font-medium">Development Team: {item.teamSize} professionals</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simplified Call-to-Action Button with Bounce Animation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={toggleShowAll}
          className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-none  text-zinc-800 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 tracking-wide text-sm overflow-hidden border border-accent/60 hover:border-[#FA882A]/40 animate-bounce"
        >
          {/* Simple Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          {/* Button Content */}
          <div className="relative flex items-center gap-2">
            {showAllItems ? (
              <>
                <ChevronUp className="w-4 h-4 text-accent group-hover:text-accent transition-colors duration-300" />
                <span className="font-medium text-accent group-hover:text-accent transition-colors duration-300">Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-[#FA882A] group-hover:text-[#FA882A]/80 transition-colors duration-300" />
                <span className="font-medium text-[#FA882A] group-hover:text-[#FA882A] transition-colors duration-300">View All</span>
              </>
            )}
          </div>
        </button>
      </div>
    </section>
  );
};

export default Roadmap;
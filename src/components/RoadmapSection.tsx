import { CheckCircle, Circle, Clock } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      status: "completed",
      items: [
        "Token contract deployment",
        "Website launch",
        "Social media presence",
        "Initial marketing campaign"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Staking & Rewards",
      status: "completed",
      items: [
        "Staking platform launch",
        "Rewards distribution system",
        "Community governance voting",
        "Partnership announcements"
      ]
    },
    {
      phase: "Phase 3",
      title: "Exchange Listings",
      status: "in-progress",
      items: [
        "DEX listings (Uniswap, SushiSwap)",
        "CEX negotiations",
        "Liquidity partnerships",
        "Market maker agreements"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: [
        "Mobile app development",
        "NFT marketplace integration",
        "Cross-chain bridge",
        "Advanced DeFi features"
      ]
    },
    {
      phase: "Phase 5",
      title: "Global Adoption",
      status: "upcoming",
      items: [
        "Major exchange listings",
        "Corporate partnerships",
        "Merchant adoption program",
        "Educational initiatives"
      ]
    },
    {
      phase: "Phase 6",
      title: "Future Innovation",
      status: "upcoming",
      items: [
        "Layer 2 solution",
        "Metaverse integration",
        "AI-powered features",
        "Sustainable mining rewards"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-primary" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "in-progress":
        return "border-primary bg-primary/10";
      default:
        return "border-muted-foreground bg-muted/30";
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">ROADMAP</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey to becoming the most rewarding meme coin in the crypto space
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`crypto-card p-6 border-l-4 ${getStatusColor(item.status)}`}
            >
              <div className="flex items-center gap-3 mb-4">
                {getStatusIcon(item.status)}
                <div>
                  <div className="text-sm font-semibold text-primary">{item.phase}</div>
                  <div className="text-lg font-bold text-foreground">{item.title}</div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((subItem, subIndex) => (
                  <li 
                    key={subIndex}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
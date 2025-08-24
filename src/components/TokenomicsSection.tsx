/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
// Declare AmCharts as a global variable
declare global {
  interface Window {
    AmCharts: any;
  }
}

const TokenomicsSection = () => {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);

  const tokenomicsData = [
    { title: "Staking/Rewards Pool", value: 26, color: "#F59E0B" },
    { title: "Community", value: 25, color: "#8B5CF6" },
    { title: "Public Sale", value: 20, color: "#10B981" },
    { title: "Marketing & Partnerships", value: 10, color: "#EF4444" },
    { title: "Team", value: 10, color: "#3B82F6" },
    { title: "Advisors", value: 9, color: "#EC4899" }
  ];


  // Load AmCharts scripts
  useEffect(() => {
    const loadAmCharts = async () => {
      // Check if AmCharts is already loaded
      if (window.AmCharts) {
        createChart();
        return;
      }

      // Load AmCharts scripts
      const scripts = [
        'https://www.amcharts.com/lib/3/amcharts.js',
        'https://www.amcharts.com/lib/3/pie.js',
        'https://www.amcharts.com/lib/3/themes/light.js'
      ];

      for (const scriptSrc of scripts) {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      // Wait a bit for AmCharts to initialize
      setTimeout(() => {
        createChart();
      }, 100);
    };

    loadAmCharts();

    return () => {
      // Cleanup chart when component unmounts
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  const createChart = () => {
    if (!chartRef.current || !window.AmCharts) return;

    // Convert tokenomics data to AmCharts format
    const amChartsData = tokenomicsData.map(item => ({
      country: item.title,
      value: item.value,
      color: item.color
    }));

    chartInstance.current = window.AmCharts.makeChart(chartRef.current, {
      "type": "pie",
      "theme": "light",
      "dataProvider": amChartsData,
      "valueField": "value",
      "titleField": "country",
      "outlineAlpha": 0.4,
      "depth3D": 30,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]%</b></span>",
      "angle": 50,
      "innerRadius": "50%",
      "colors": tokenomicsData.map(item => item.color),
      "export": {
        "enabled": true
      },
      "legend": {
        "enabled": false
      },
      "labelsEnabled": false,
      "hideCredits": true
    });
  };

  const handleSegmentHover = (index: number) => {
    setSelectedSegment(index);
  };

  const handleSegmentLeave = () => {
    setSelectedSegment(null);
  };

  const getCategoryDescription = (title: string) => {
    switch (title) {
      case "Staking/Rewards Pool":
        return "Long-term holders earn rewards for staking their tokens, contributing to the network's security and stability.";
      case "Community":
        return "Community members participate in governance, provide feedback, and help shape the project's future through voting.";
      case "Public Sale":
        return "Tokens acquired during the public sale are intended for marketing, partnerships, and initial liquidity.";
      case "Marketing & Partnerships":
        return "Funds from marketing and partnerships are used to promote the project, attract users, and build a strong network.";
      case "Team":
        return "Team members are compensated for their work, incentivizing them to contribute to the project's success.";
      case "Advisors":
        return "Advisors provide strategic guidance and help the project navigate challenges and opportunities.";
      default:
        return "";
    }
  };

  return (
    <section
      id="tokenomics"
      className="py-20 relative overflow-hidden bg-green-800"
    >
      <div className="container mx-auto px-4 relative ">
        <div className="text-center mb-16 z-50">
          <h2 className="text-6xl font-bold font-pinewood text-white mb-6 drop-shadow-lg">TOKENOMICS</h2>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md mb-6">
            A carefully designed token economy that rewards holders and ensures long-term sustainability
          </p>
          <div className="max-w-4xl mx-auto space-y-4 text-white/80">
            <p className="text-lg leading-relaxed">
              Our tokenomics are built on the principles of transparency, sustainability, and community-driven growth.
              Each allocation serves a specific purpose in building a robust ecosystem that benefits all stakeholders.
            </p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="relative h-full px-20 flex justify-center md:justify-between flex-col md:flex-row items-end">
          <div className="relative translate-y-20" style={{
            width: '100%',
            height: '400px',
            fontSize: '14px'
          }}>
            <div
              id="chartdiv"
              ref={chartRef}
              className="w-full h-full"
            />
            <img src="/palmtree.png" alt="Tokenomics" className="absolute bottom-48 left-1/2 -translate-x-1/2 z-0 w-[300px] md:w-[450px] pointer-events-none" />
          </div>
          <div className="space-y-2">
            {tokenomicsData.map((entry, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ease-out ${selectedSegment === index
                  ? 'bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md border border-white/40 shadow-2xl shadow-white/20 scale-105'
                  : 'bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 hover:scale-102 border border-white/20 hover:border-white/30'
                  }`}
                onPointerEnter={() => handleSegmentHover(index)}
                onPointerLeave={handleSegmentLeave}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    {/* Enhanced color indicator with glow effect */}
                    <div className="relative">
                      <div
                        className={`w-3 h-12 rounded-full transition-all duration-300 ${selectedSegment === index
                          ? 'scale-110 shadow-lg'
                          : 'group-hover:scale-105'
                          }`}
                        style={{
                          backgroundColor: entry.color,
                          boxShadow: selectedSegment === index
                            ? `0 0 20px ${entry.color}80`
                            : 'none'
                        }}
                      />
                      {/* Subtle glow effect */}
                      <div
                        className="absolute inset-0 w-3 h-12 rounded-full blur-sm opacity-30"
                        style={{ backgroundColor: entry.color }}
                      />
                    </div>

                    {/* Enhanced text content with descriptions */}
                    <div className="flex flex-col">
                      <span className={`font-semibold text-base transition-all duration-300 ${selectedSegment === index
                        ? 'text-white font-bold tracking-wide'
                        : 'text-white/90 group-hover:text-white'
                        }`}>
                        {entry.title}
                      </span>
                      <span className={`text-sm transition-all duration-300 ${selectedSegment === index
                        ? 'text-white/80'
                        : 'text-white/60 group-hover:text-white/70'
                        }`}>
                        {entry.value}% of total supply
                      </span>
                      {/* Added detailed descriptions for each category */}
                      <span className={`text-xs transition-all duration-300 ${selectedSegment === index
                        ? 'text-white/70'
                        : 'text-white/50 group-hover:text-white/60'
                        }`}>
                        {getCategoryDescription(entry.title)}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced percentage display */}
                  <div className="flex items-center space-x-2">
                    <div className={`text-right transition-all duration-300 ${selectedSegment === index
                      ? 'scale-110'
                      : 'group-hover:scale-105'
                      }`}>
                      <span className={`block font-black text-2xl leading-none ${selectedSegment === index
                        ? 'text-white'
                        : 'text-white/90 group-hover:text-white'
                        }`}>
                        {entry.value}%
                      </span>
                      <span className={`text-xs font-medium ${selectedSegment === index
                        ? 'text-white/70'
                        : 'text-white/50 group-hover:text-white/60'
                        }`}>
                        allocation
                      </span>
                    </div>

                    {/* Interactive arrow indicator */}
                    <div className={`transition-all duration-300 ${selectedSegment === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}>
                      <svg
                        className="w-5 h-5 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${selectedSegment === index
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  style={{ backgroundColor: entry.color }}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Enhanced bottom content with more details */}
        <div className="mt-16 max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold font-pinewood text-white mb-4">Token Utility</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Staking rewards for long-term holders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Governance voting rights on platform decisions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Access to exclusive NFT drops and events</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Reduced fees on platform transactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold font-pinewood text-white mb-4">Economic Benefits</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Automatic burn mechanism reduces supply</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Reflection rewards distributed to holders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Liquidity locked for price stability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Anti-whale measures prevent manipulation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slider styling */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default TokenomicsSection;
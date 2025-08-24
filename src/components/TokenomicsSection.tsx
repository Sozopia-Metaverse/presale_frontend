/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import background from "../assets/tokenomic.png"
import woodmaterial from "../assets/woodmaterial.png"

const TokenomicsSection = () => {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);

  const tokenomicsData = [
    { title: "Staking/Rewards Pool", value: 26, color: "#F59E0B" },
    { title: "Community", value: 25, color: "#8B5CF6" },
    { title: "Public Sale", value: 20, color: "#10B981" },
    { title: "Marketing & Partnerships", value: 10, color: "#EF4444" },
    { title: "Team", value: 10, color: "#3B82F6" },
    { title: "Advisors", value: 9, color: "#EC4899" }
  ];

  const tokenInfo = [
    { label: "Token Name", value: "SOZIA" },
    { label: "Symbol", value: "SOZIA" },
    { label: "Total Supply", value: "1,000,000,000 SOZIA (fixed)" },
    { label: "Network", value: "Ethereum" },
    { label: "Contract", value: "0x..." }
  ];

  const handleSegmentHover = (event: any, dataIndex: number) => {
    setSelectedSegment(dataIndex);
  };

  const handleSegmentLeave = () => {
    setSelectedSegment(null);
  };

  const getSelectedData = () => {
    if (selectedSegment === null) return null;
    return tokenomicsData[selectedSegment];
  };

  return (
    <section 
      id="tokenomics" 
      className="py-20 relative overflow-hidden"
    >
      {/* Enhanced Background with Multiple Layers - Matching HeroSection */}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-pinewood text-white mb-6 drop-shadow-lg">TOKENOMICS</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            A carefully designed token economy that rewards holders and ensures long-term sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div 
            className="relative h-full py-8 px-20"
          >
            <img src={woodmaterial} alt="woodmaterial" className="absolute top-0 left-0 w-full h-full scale-x-[1.2] scale-y-[1.5] object-cover" width={800} height={800} />
            <h3 className="relative text-2xl font-bold text-center my-8 z-10 text-white drop-shadow-md">Token Distribution</h3>
            <div className="relative z-10 flex justify-center items-center h-80">
              <div className="w-full max-w-md flex justify-center items-center">
                <PieChart
                  data={tokenomicsData}
                  // label={({ dataEntry }) => `${dataEntry.value}%`}
                  labelStyle={{
                    fontSize: '12px',
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    fill: '#ffffff'
                  }}
                  className='scale-75'
                  viewBoxSize={[150, 150]}
                  center={[75, 75]}
                  labelPosition={50}
                  // lineWidth={40}
                  paddingAngle={2}
                  animate
                  animationDuration={1000}
                  animationEasing="ease-out"
                  onMouseOver={handleSegmentHover}
                  onMouseOut={handleSegmentLeave}
                  segmentsStyle={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  segmentsShift={(index) => 
                    selectedSegment === index ? 5 : 0
                  }
                />
              </div>
            </div>
            
            {/* Interactive Legend */}
            <div className="relative z-10 mt-2 grid grid-cols-2 gap-2 text-sm">
              {tokenomicsData.map((entry, index) => (
                <div
                  key={index} 
                  className={`flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-200 ${
                    selectedSegment === index
                      ? 'bg-white/20 backdrop-blur-sm border border-white/30 shadow-md'
                      : 'hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setSelectedSegment(index)}
                  onMouseLeave={() => setSelectedSegment(null)}
                >
                  <div className="flex items-center space-x-2">
                    <div 
                      className={`w-3 h-3 rounded-full transition-transform duration-200 ${
                        selectedSegment === index ? 'scale-125' : ''
                      }`}
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className={`font-medium ${
                      selectedSegment === index ? 'text-white font-bold' : 'text-white/90'
                    }`}>
                      {entry.title}
                    </span>
                  </div>
                  <span className={`font-bold ${
                    selectedSegment === index ? 'text-white' : 'text-white'
                  }`}>
                    {entry.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Token Info */}
          <div 
            className="relative py-8 px-20"
          >
            <img src={woodmaterial} alt="woodmaterial" className="absolute top-0 left-0 w-full h-full scale-x-[1.2] scale-y-[1.5] object-cover" width={800} height={800} />
            <h3 className="relative text-2xl text-center font-bold my-8 z-10 text-white drop-shadow-md">Token Information</h3>
            <div className="relative space-y-6 z-10">
              {tokenInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-white/30">
                  <span className="text-white/80 font-medium">{info.label}</span>
                  <span className="text-white font-bold">{info.value}</span>
                </div>
              ))}
            </div>
            
            <div className="relative z-10 mt-2 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg">
              <h4 className="font-bold text-lg mb-2 text-white">Burn Mechanism</h4>
              <p className="text-white/90">
                2% of every transaction is automatically burned, creating a deflationary pressure that increases token value over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
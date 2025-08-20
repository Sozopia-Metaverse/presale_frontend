/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const PieChart = () => {
  const data = [
    { name: "Public Sale", percentage: 20.0, color: "#E6E6FA" },
    { name: "Team", percentage: 10.0, color: "#90EE90" },
    { name: "Advisors", percentage: 9.0, color: "#FFB6C1" },
    { name: "Staking/Rewards Pool", percentage: 26.0, color: "#FFD700" },
    { name: "Community", percentage: 25.0, color: "#87CEEB" },
    { name: "Marketing & Partnerships", percentage: 10.0, color: "#FFC0CB" },
  ];

  const total = data.reduce((sum, item) => sum + item.percentage, 0);
  let currentAngle = 0;

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 text-center">
        Token Allocation Distribution
      </h3>
      <div className="flex justify-center">
        {/* Responsive pie chart */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[444px] lg:h-[444px]">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 444 444" 
            className="transform -rotate-90"
            preserveAspectRatio="xMidYMid meet"
          >
            {data.map((item, index) => {
              const angle = (item.percentage / total) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              const x1 = 222 + 150 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 222 + 150 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 222 + 150 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 222 + 150 * Math.sin((endAngle * Math.PI) / 180);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M 222 222`,
                `L ${x1} ${y1}`,
                `A 150 150 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `Z`
              ].join(' ');
              
              const midAngle = (startAngle + endAngle) / 2;
              const textRadius = 85;
              const textX = 222 + textRadius * Math.cos((midAngle * Math.PI) / 180);
              const textY = 222 + textRadius * Math.sin((midAngle * Math.PI) / 180);
              
              const labelRadius = 185;
              const labelX = 222 + labelRadius * Math.cos((midAngle * Math.PI) / 180);
              const labelY = 222 + labelRadius * Math.sin((midAngle * Math.PI) / 180);
              
              const textRotation = midAngle + 90;
              
              currentAngle += angle;
              
              return (
                <g key={index}>
                  <path
                    d={pathData}
                    fill={item.color}
                    stroke="white"
                    strokeWidth="3"
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textRotation} ${textX} ${textY})`}
                    className="font-bold fill-black"
                    style={{ fontSize: 'clamp(12px, 2vw, 16px)', fontWeight: 'bold' }}
                  >
                    {item.percentage}%
                  </text>
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(90 ${labelX} ${labelY})`}
                    className="font-medium fill-black"
                    style={{ fontSize: 'clamp(10px, 1.5vw, 14px)', fontWeight: '500' }}
                  >
                    {item.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

const TokenomicsSection = () => {
  const tokenomicsData = [
    { name: "Staking/Rewards Pool", value: 26, color: "#F59E0B" },
    { name: "Community", value: 25, color: "#8B5CF6" },
    { name: "Public Sale", value: 20, color: "#10B981" },
    { name: "Marketing & Partnerships", value: 10, color: "#EF4444" },
    { name: "Team", value: 10, color: "#3B82F6" },
    { name: "Advisors", value: 9, color: "#EC4899" }
  ];

  const tokenInfo = [
    { label: "Token Name", value: "SOZIA" },
    { label: "Symbol", value: "SOZIA" },
    { label: "Total Supply", value: "1,000,000,000 SOZIA (fixed)" },
    { label: "Network", value: "Ethereum" },
    { label: "Contract", value: "0x..." }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">TOKENOMICS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully designed token economy that rewards holders and ensures long-term sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="crypto-card h-full p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Token Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Token Info */}
          <div className="crypto-card p-8">
            <h3 className="text-2xl font-bold mb-8">Token Information</h3>
            <div className="space-y-6">
              {tokenInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                  <span className="text-muted-foreground font-medium">{info.label}</span>
                  <span className="text-foreground font-bold">{info.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <h4 className="font-bold text-lg mb-3">Burn Mechanism</h4>
              <p className="text-muted-foreground">
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
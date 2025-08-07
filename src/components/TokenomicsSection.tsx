import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const TokenomicsSection = () => {
  const tokenomicsData = [
    { name: "Staking Rewards", value: 25, color: "#F59E0B" },
    { name: "Liquidity", value: 20, color: "#8B5CF6" },
    { name: "Marketing", value: 15, color: "#10B981" },
    { name: "Team", value: 10, color: "#EF4444" },
    { name: "Presale", value: 30, color: "#3B82F6" }
  ];

  const tokenInfo = [
    { label: "Token Name", value: "Dogecoin20" },
    { label: "Symbol", value: "$DOGE20" },
    { label: "Total Supply", value: "140,000,000,000" },
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
          <div className="crypto-card p-8">
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
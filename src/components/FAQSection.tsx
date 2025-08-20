import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Sozopia?",
      answer: "Sozopia is a next-generation meme coin that combines the fun of doge with real utility including staking rewards, deflationary tokenomics, and a strong community focus."
    },
    {
      question: "How does staking work?",
      answer: "Simply connect your wallet, deposit your $DOGE20 tokens into our staking pool, and start earning rewards immediately. You can unstake at any time with no lock-up periods."
    },
    {
      question: "What makes Sozopia different?",
      answer: "Unlike traditional meme coins, $DOGE20 features a deflationary burn mechanism, staking rewards up to 120% APY, and a roadmap focused on real utility and ecosystem growth."
    },
    {
      question: "How do I buy Sozopia?",
      answer: "You can buy $DOGE20 on our website during the presale, or through decentralized exchanges like Uniswap once the token launches publicly."
    },
    {
      question: "Is Sozopia safe?",
      answer: "Yes! Our smart contract has been audited by leading security firms, and our team is fully doxxed. We follow best practices for security and transparency."
    },
    {
      question: "What are the tokenomics?",
      answer: "Total supply is 1B tokens with 25% for staking rewards, 20% for liquidity, 15% for marketing, 10% for team, and 30% for presale. 2% of all transactions are burned."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Learn everything you need to know about Sozopia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="crypto-card mb-4 last:mb-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, Wallet } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { key: "staking", label: t("navigation.features") },
    { key: "roadmap", label: t("navigation.roadmap") },
    { key: "tokenomics", label: t("navigation.tokenomics") },
    { key: "rewards", label: "REWARDS" },
    { key: "faq", label: t("navigation.faq") },
    { key: "whitepaper", label: "WHITEPAPER" },
    { key: "audit", label: "AUDIT" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full rounded-none lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%] lg:rounded-2xl z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-golden flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐕</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Dogecoin20
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Connect Wallet */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="hero" className="gap-2">
              <Wallet size={18} />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <LanguageSwitcher />
                <Button variant="hero" className="w-full gap-2">
                  <Wallet size={18} />
                  Connect Wallet
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

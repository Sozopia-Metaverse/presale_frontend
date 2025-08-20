import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, Wallet, ChevronDown, ExternalLink } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix scrollbar disappearing issue
  useEffect(() => {
    // Ensure body always has overflow-y: scroll to prevent scrollbar from disappearing
    const originalOverflow = document.body.style.overflowY;
    document.body.style.overflowY = 'scroll';
    
    return () => {
      // Restore original overflow when component unmounts
      document.body.style.overflowY = originalOverflow;
    };
  }, []);

  // Additional fix for dropdown menus
  useEffect(() => {
    const preventScrollbarHide = () => {
      // Force scrollbar to always be visible
      document.documentElement.style.overflowY = 'scroll';
      document.body.style.overflowY = 'scroll';
    };

    // Apply on mount and after any DOM changes
    preventScrollbarHide();
    
    // Use MutationObserver to watch for changes that might affect overflow
    const observer = new MutationObserver(preventScrollbarHide);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const menuItems = [
    { key: "roadmap", label: t("navigation.roadmap"), href: "#roadmap", external: false },
    { key: "tokenomics", label: t("navigation.tokenomics"), href: "https://sozopia.org/documentation/tokenomics", external: true },
    { key: "faq", label: t("navigation.faq"), href: "#faq", external: false },
    { key: "whitepaper", label: "WHITEPAPER", href: "https://sozopia.org/documentation/whitepaper", external: true },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[85%] lg:rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-golden-strong' 
        : 'lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%] lg:rounded-2xl bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={logo}
                alt="Sozopia"
                className="w-10 h-auto rounded-xl shadow-golden transition-all duration-300 group-hover:shadow-golden-strong"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="text-2xl font-bold font-enigmatic translate-y-1">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sozo
              </span>
              <span className="text-secondary">pia</span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg group"
              >
                <span className="flex items-center gap-1">
                  {item.label}
                  {item.external && (
                    <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* Language Switcher & Connect Wallet with enhanced styling */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button 
                            variant="hero" 
                            size="default"
                            className="gap-2 shadow-golden hover:shadow-golden-strong transition-all duration-300"
                            onClick={openConnectModal}
                          >
                            <Wallet size={18} />
                            Connect Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button 
                            variant="destructive" 
                            onClick={openChainModal}
                            className="gap-2 transition-all duration-300 hover:scale-105"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            Wrong network
                          </Button>
                        );
                      }

                      return (
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            onClick={openChainModal}
                            className="gap-2 hover:shadow-golden transition-all duration-300"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 16,
                                  height: 16,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 16, height: 16 }}
                                  />
                                )}
                              </div>
                            )}
                            <span className="font-medium">{chain.name}</span>
                            <ChevronDown size={14} className="opacity-60" />
                          </Button>

                          <Button
                            variant="wallet"
                            onClick={openAccountModal}
                            className="gap-2 transition-all duration-300 hover:scale-105"
                          >
                            <Wallet size={18} />
                            <span className="font-medium">{account.displayName}</span>
                            {account.displayBalance && (
                              <span className="text-xs opacity-75">
                                {account.displayBalance}
                              </span>
                            )}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-accent/50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50 bg-background/50 backdrop-blur-sm rounded-xl">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-accent/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.external && <ExternalLink size={16} className="opacity-60" />}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border/30 flex flex-col gap-3">
                <LanguageSwitcher />
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                          'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <Button 
                                variant="hero" 
                                className="w-full gap-2 shadow-golden hover:shadow-golden-strong transition-all duration-300"
                                onClick={openConnectModal}
                              >
                                <Wallet size={18} />
                                Connect Wallet
                              </Button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <Button 
                                variant="destructive" 
                                onClick={openChainModal}
                                className="w-full gap-2 transition-all duration-300"
                              >
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                Wrong network
                              </Button>
                            );
                          }

                          return (
                            <div className="flex flex-col gap-3">
                              <Button
                                variant="outline"
                                onClick={openChainModal}
                                className="w-full gap-2 hover:shadow-golden transition-all duration-300"
                              >
                                {chain.hasIcon && (
                                  <div
                                    style={{
                                      background: chain.iconBackground,
                                      width: 16,
                                      height: 16,
                                      borderRadius: 999,
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        style={{ width: 16, height: 16 }}
                                      />
                                    )}
                                  </div>
                                )}
                                <span className="font-medium">{chain.name}</span>
                                <ChevronDown size={14} className="opacity-60" />
                              </Button>

                              <Button
                                variant="wallet"
                                onClick={openAccountModal}
                                className="w-full gap-2 transition-all duration-300"
                              >
                                <Wallet size={18} />
                                <span className="font-medium">{account.displayName}</span>
                                {account.displayBalance && (
                                  <span className="text-xs opacity-75">
                                    {account.displayBalance}
                                  </span>
                                )}
                              </Button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

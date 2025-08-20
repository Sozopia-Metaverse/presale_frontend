import { Twitter, MessageCircle, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: MessageCircle, label: "Discord", href: "#" },
    { icon: Send, label: "Telegram", href: "#" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Staking", "Tokenomics", "Roadmap", "Whitepaper"]
    },
    {
      title: "Community", 
      links: ["Twitter", "Discord", "Telegram", "Reddit"]
    },
    {
      title: "Resources",
      links: ["FAQ", "Audit", "Documentation", "Support"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Disclaimer", "Cookie Policy"]
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center space-x-3">
    <img
      src={logo}
      alt="Sozopia"
      className="w-8 h-auto rounded-lg"
    />
    <div className="text-2xl font-bold text-green-600 font-enigmatic translate-y-1">
      <span>Sozo</span>
      <span className="text-secondary">pia</span>
    </div>
  </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              The next evolution of meme coins with real utility, staking rewards, and a deflationary mechanism.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:gradient-golden flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Sozopia. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            🐕 Built with love for the doge community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
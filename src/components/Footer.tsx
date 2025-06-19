import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Text from "./Text";
import Heading from "./Heading";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-foreground/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image 
                  src="/sitelogo.png" 
                  alt="ADIE.AI Logo" 
                  width={150} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <Text variant="muted" className="text-lg font-medium">
              Own Your Intent.
              <br />
              Trust the Execution.
            </Text>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://x.com/ADIE_AI_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              <a 
                href="https://t.me/ADIE_AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-current"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <Heading as="h3" className="text-sm font-bold mb-4 uppercase">
              Navigation
            </Heading>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#advantages" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                    Advantages
                  </Link>
                </li>
                <li>
                  <Link href="#tokenomics" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                    Tokenomics
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#roadmap" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <Heading as="h3" className="text-sm font-bold mb-4 uppercase">
              Quick Links
            </Heading>
            <ul className="space-y-2">
              <li>
                <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xccbf155b294750ce3eafa1373c180d9c57749387?t=1750320760495" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                  DexTools
                </a>
              </li>
              <li>
                <a href="https://dexscreener.com/bsc/0xccbf155b294750ce3eafa1373c180d9c57749387" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                  DEX Screener
                </a>
              </li>
              <li>
                <a href="https://docs.adieai.xyz" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary font-poppins">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10 text-center">
          <Text variant="muted">
            © {new Date().getFullYear()} ADIE.AI. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
} 

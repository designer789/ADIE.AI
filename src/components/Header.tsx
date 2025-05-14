"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update active section based on scroll position
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Add some offset
      
      // Get all sections
      const sections = [
        "features",
        "advantages",
        "tokenomics",
        "roadmap",
        "faq"
      ];
      
      // Find the current section (check in reverse order to handle overlapping correctly)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    };
    
    // Initial check for hash in URL
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // For more visible animation effect on menu items
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // We'll let the browser handle the scroll with default behavior
    // But we'll add a visual effect for the clicked menu item
    setActiveSection(sectionId);
    // Close menu when an item is clicked on mobile
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-6 sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/sitelogo.png" 
                alt="ADIE.AI Logo" 
                width={150} 
                height={40} 
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, "features")}
              className={`transition-colors duration-300 font-poppins px-1 py-1 ${
                activeSection === "features" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Features
            </a>
            <a 
              href="#advantages" 
              onClick={(e) => handleNavClick(e, "advantages")}
              className={`transition-colors duration-300 font-poppins px-1 py-1 ${
                activeSection === "advantages" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Advantages
            </a>
            <a 
              href="#tokenomics" 
              onClick={(e) => handleNavClick(e, "tokenomics")}
              className={`transition-colors duration-300 font-poppins px-1 py-1 ${
                activeSection === "tokenomics" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              onClick={(e) => handleNavClick(e, "roadmap")}
              className={`transition-colors duration-300 font-poppins px-1 py-1 ${
                activeSection === "roadmap" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Roadmap
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, "faq")}
              className={`transition-colors duration-300 font-poppins px-1 py-1 ${
                activeSection === "faq" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {/* X (Twitter) Icon */}
              <a 
                href="https://x.com/ADIE_AI_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
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
              
              {/* Telegram Icon */}
              <a 
                href="https://t.me/ADIE_AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
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

              {/* DexTools Icon */}
              <a 
                href="https://www.dextools.io/app/en/pairs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="DexTools"
              >
                <Image 
                  src="/dextools.svg" 
                  alt="DexTools" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
              </a>
              
              {/* DEX Screener Icon */}
              <a 
                href="https://dexscreener.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="DEX Screener"
              >
                <Image 
                  src="/dex-screener.svg" 
                  alt="DEX Screener" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
              </a>
            </div>
            
            <button 
              ref={buttonRef}
              onClick={toggleMenu}
              className="md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={isMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" // X icon when menu is open
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // Hamburger icon when menu is closed
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden mt-4 bg-background/98 backdrop-blur-md border border-foreground/10 rounded-lg shadow-lg animate-fadeIn"
          >
            <nav className="flex flex-col py-3">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, "features")}
                className={`px-6 py-3 transition-colors duration-300 font-poppins ${
                  activeSection === "features" ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                Features
              </a>
              <a 
                href="#advantages" 
                onClick={(e) => handleNavClick(e, "advantages")}
                className={`px-6 py-3 transition-colors duration-300 font-poppins ${
                  activeSection === "advantages" ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                Advantages
              </a>
              <a 
                href="#tokenomics" 
                onClick={(e) => handleNavClick(e, "tokenomics")}
                className={`px-6 py-3 transition-colors duration-300 font-poppins ${
                  activeSection === "tokenomics" ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                Tokenomics
              </a>
              <a 
                href="#roadmap" 
                onClick={(e) => handleNavClick(e, "roadmap")}
                className={`px-6 py-3 transition-colors duration-300 font-poppins ${
                  activeSection === "roadmap" ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                Roadmap
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleNavClick(e, "faq")}
                className={`px-6 py-3 transition-colors duration-300 font-poppins ${
                  activeSection === "faq" ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
} 
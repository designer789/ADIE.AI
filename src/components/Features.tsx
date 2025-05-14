"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

interface FeatureItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
  isMobile?: boolean;
  imageSrc?: string;
}

function FeatureItem({ title, description, isOpen, onClick, index, isMobile = false, imageSrc }: FeatureItemProps) {
  // Desktop layout (horizontal accordion)
  if (!isMobile) {
    return (
      <div 
        className={`
          ${isOpen ? 'flex-[3_1_0%]' : 'flex-[0_0_auto]'}
          overflow-hidden border-r last:border-0 border-foreground/10 min-h-[660px]
          hidden lg:block
        `}
        style={{
          transition: 'flex 500ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex h-full">
          <button 
            className={`flex-shrink-0 h-full px-12 py-2 flex flex-col items-center justify-between focus:outline-none ${
              isOpen ? 'bg-foreground/5 w-24' : 'hover:bg-foreground/[0.03] w-24'
            }`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={`feature-content-${index}`}
          >
            <div className="text-4xl font-semibold opacity-40 mt-4">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <div 
              className="vertical-text font-heading text-3xl whitespace-nowrap mb-6"
              style={{ fontFamily: 'ClashDisplay-Medium, sans-serif' }}
            >
              {title}
            </div>
          </button>
          
          <div 
            id={`feature-content-${index}`}
            className="overflow-hidden flex-1"
            style={{
              width: isOpen ? 'auto' : '0',
              transition: 'width 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              padding: isOpen ? '4rem' : '0',
              position: 'relative'
            }}
          >
            <div className="absolute p-16 inset-0 w-full h-full" style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 500ms ease',
              visibility: isOpen ? 'visible' : 'hidden',
            }}>
              <div>
                <div className="rounded-0 w-full aspect-video mb-4 overflow-hidden border border-foreground/20">
                  {imageSrc ? (
                    <Image 
                      src={imageSrc} 
                      alt={title} 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-background/10 w-full h-full flex items-center justify-center">
                      <span className="text-foreground/40">Image Placeholder</span>
                    </div>
                  )}
                </div>
                <h3 className="text-4xl font-heading mb-2" style={{ fontFamily: 'ClashDisplay-Semibold, sans-serif' }}>{title}</h3>
                <p className="text-foreground/70 font-poppins">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Mobile layout (vertical tabs)
  return (
    <div className="w-full lg:hidden">
      <button
        className={`w-full py-4 px-5 flex justify-between items-center rounded-lg mb-2 focus:outline-none transition-colors ${
          isOpen ? 'bg-primary/10 text-primary' : 'hover:bg-foreground/5'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`feature-mobile-content-${index}`}
      >
        <div className="flex items-center">
          <span className="text-lg font-semibold opacity-70 mr-3">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3 className="font-heading text-lg sm:text-xl" style={{ fontFamily: 'ClashDisplay-Medium, sans-serif' }}>
            {title}
          </h3>
        </div>
        <span className="ml-3">
          <svg 
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
          >
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      
      <div 
        id={`feature-mobile-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4">
          <div className="rounded-0 w-full aspect-video mb-4 overflow-hidden border border-foreground/20">
            {imageSrc ? (
              <Image 
                src={imageSrc} 
                alt={title} 
                width={600} 
                height={340} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-background/10 w-full h-full flex items-center justify-center">
                <span className="text-foreground/40">Image Placeholder</span>
              </div>
            )}
          </div>
          <p className="text-foreground/70 font-poppins text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const features = [
    {
      title: "MCP Protocol Support",
      description: "Standardized interaction layer for AI agents to connect securely and flexibly with blockchain data and tools, ensuring multi-scenario compatibility.",
      imageSrc: "/p3.png"
    },
    {
      title: "AI Agent Execution",
      description: "Natural Language Processing (NLP)-driven AI agents autonomously execute complex blockchain tasks like DeFi strategies or NFT trades based on user intent.",
      imageSrc: "/p2.png"
    },
    {
      title: "On-chain Data Analysis",
      description: "Real-time monitoring and analysis of transaction pools, gas prices, and market trends, empowering AI decision-making with robust data support.",
      imageSrc: "/p1-2.png"
    },
    {
      title: "Decentralized Intent Marketplace",
      description: "A community-driven marketplace for creating, trading, and subscribing to intent templates, incentivized by $ADIE tokens.",
      imageSrc: "/p4.png"
    },
    {
      title: "Predictive Intent Optimization",
      description: "AI models dynamically optimize execution paths by predicting on-chain trends, maximizing gains and minimizing transaction costs.",
      imageSrc: "/p5.png"
    }
  ];

  // Ensure one item is always active
  const handleClick = (index: number) => {
    // Only switch to the new index, never close all items
    setOpenIndex(index);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-foreground/[0.02] border-t border-foreground/10" id="features">
      <Container>
        <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 lg:mb-16 text-center">
          Features
        </Heading>
        
        {/* Desktop View */}
        <div className="w-full mx-auto border border-foreground/10 bg-background overflow-hidden hidden lg:block">
          <div className="flex flex-row w-full h-full min-h-[600px]">
            <style jsx global>{`
              .vertical-text {
                writing-mode: vertical-lr;
                text-orientation: mixed;
                transform: rotate(180deg);
              }
            `}</style>
            {features.map((feature, index) => (
              <FeatureItem
                key={`desktop-${index}`}
                index={index}
                title={feature.title}
                description={feature.description}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile/Tablet View - Vertical Tabs */}
        <div className="w-full mx-auto bg-background overflow-hidden lg:hidden border border-foreground/10 rounded-lg p-4">
          {features.map((feature, index) => (
            <FeatureItem
              key={`mobile-${index}`}
              index={index}
              title={feature.title}
              description={feature.description}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              isMobile={true}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
} 
"use client";

import React, { useState, useRef, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";

interface RoadmapPhase {
  number: number;
  title: string;
  items: string[];
}

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInfiniteJump, setIsInfiniteJump] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalPhases: RoadmapPhase[] = [
    {
      number: 1,
      title: "Core Development and Token Launch",
      items: [
        "Develop the MCP client-server architecture for AI and blockchain interaction.",
        "Release the Alpha version of the AI Execution Engine supporting natural language inputs.",
        "Build the decentralized intent marketplace framework for intent creation, subscription, and trading.",
        "Launch the $ADIE token to initiate platform utility and governance."
      ]
    },
    {
      number: 2,
      title: "Marketplace Activation and Predictive Intelligence",
      items: [
        "Open the decentralized intent marketplace for public use.",
        "Integrate real-time on-chain data feeds to enhance AI execution accuracy.",
        "Deploy predictive optimization models to refine execution strategies based on dynamic data.",
        "Launch incentive programs to encourage community contributions to the intent marketplace."
      ]
    },
    {
      number: 3,
      title: "Ecosystem Expansion and Governance Implementation",
      items: [
        "Expand AI capabilities to support broader categories of user intents.",
        "Introduce decentralized governance allowing $ADIE holders to propose and vote on protocol changes.",
        "Establish strategic partnerships to enrich available tools and services.",
        "Grow the ecosystem through community grants and developer support initiatives."
      ]
    },
    {
      number: 4,
      title: "Continuous Optimization and Global Adoption",
      items: [
        "Enhance AI models with adaptive learning for smarter decision-making.",
        "Optimize system performance, scalability, and user experience.",
        "Expand community engagement through global hackathons, marketing campaigns, and educational initiatives.",
        "Foster the development of new applications powered by ADIE.AI automation infrastructure."
      ]
    }
  ];

  // Create duplicated phases to implement infinite scrolling
  // Structure: Last 2 phases + Original Phases + First 2 phases
  const phases = [
    ...originalPhases.slice(-2).map(phase => ({...phase, key: `pre-${phase.number}`})),
    ...originalPhases.map(phase => ({...phase, key: `original-${phase.number}`})),
    ...originalPhases.slice(0, 2).map(phase => ({...phase, key: `post-${phase.number}`}))
  ];

  // Calculate indices for display logic
  const preItemsCount = 2;
  const totalOriginalItems = originalPhases.length;
  const initialIndex = preItemsCount; // Start at the first original item
  
  // Initialize with the first original item
  useEffect(() => {
    setActiveIndex(initialIndex);
  }, []);

  // Handle circular infinite scrolling logic
  useEffect(() => {
    if (isInfiniteJump) {
      // This effect handles the "jump" when we reach one end of the carousel
      // We turn off transitions, jump to the corresponding duplicate, then re-enable transitions
      const jumpTimeout = setTimeout(() => {
        // Disable transitions temporarily
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }
        
        // Jump to the corresponding item in the original set
        if (activeIndex < preItemsCount) {
          // If we're in the prefix area, jump to the equivalent original item near the end
          setActiveIndex(totalOriginalItems + activeIndex);
        } else if (activeIndex >= preItemsCount + totalOriginalItems) {
          // If we're in the suffix area, jump to the equivalent original item near the beginning
          setActiveIndex(activeIndex - totalOriginalItems);
        }
        
        // Re-enable transitions after a small delay
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 300ms ease-in-out';
          }
          setIsInfiniteJump(false);
        }, 50);
      }, 300); // This timeout should match the transition duration
      
      return () => clearTimeout(jumpTimeout);
    }
  }, [isInfiniteJump, activeIndex, preItemsCount, totalOriginalItems]);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If reaching the duplicated area at the end, prepare for the jump
    if (activeIndex === preItemsCount + totalOriginalItems - 1) {
      setIsInfiniteJump(true);
    }
    
    setActiveIndex(prev => prev + 1);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If reaching the duplicated area at the beginning, prepare for the jump
    if (activeIndex === preItemsCount) {
      setIsInfiniteJump(true);
    }
    
    setActiveIndex(prev => prev - 1);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    
    pauseAutoplay();
    setIsAnimating(true);
    // Convert dot index to carousel index (adding the offset for the prepended items)
    const targetIndex = index + preItemsCount;
    setActiveIndex(targetIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
      resumeAutoplay();
    }, 300);
  };

  // Handle direct card click
  const handleCardClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    pauseAutoplay();
    setIsAnimating(true);
    
    // If the clicked card requires infinite jump logic
    if ((index < preItemsCount && activeIndex >= preItemsCount) || 
        (index >= preItemsCount + totalOriginalItems && activeIndex < preItemsCount + totalOriginalItems)) {
      setIsInfiniteJump(true);
    }
    
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
      // Resume autoplay after a short delay
      setTimeout(resumeAutoplay, 2000);
    }, 300);
  };

  // Autoplay functionality
  const startAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    autoplayTimerRef.current = setInterval(() => {
      if (!isAnimating && !isPaused) {
        handleNext();
      }
    }, 5000); // Changed from 3000ms to 5000ms (5 seconds)
  };
  
  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      startAutoplayTimer();
    }
  };
  
  const pauseAutoplay = () => {
    setIsPaused(true);
  };
  
  const resumeAutoplay = () => {
    setIsPaused(false);
  };

  // Start autoplay on component mount
  useEffect(() => {
    startAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  // Restart autoplay timer when relevant state changes
  useEffect(() => {
    if (!isPaused && !isAnimating) {
      resetAutoplayTimer();
    }
  }, [isPaused, isAnimating]);

  // Calculate the transform percentage for the carousel
  const getTransformValue = () => {
    const cardWidth = 33.333;
    // Each card is 33.333% wide, so move in increments of that
    const baseTransform = (activeIndex - 1) * cardWidth; // -1 to show the active card in the center
    return baseTransform;
  };

  return (
    <section className="w-full py-24 border-t border-foreground/10" id="roadmap">
      <Container>
        <Heading as="h2" className="text-4xl md:text-5xl mb-16 text-center">
          Roadmap
        </Heading>
        
        <div className="relative">
          {/* Carousel container - hidden on mobile */}
          <div 
            ref={containerRef}
            className="overflow-hidden hidden md:block"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            <div 
              ref={carouselRef} 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${getTransformValue()}%)`,
              }}
            >
              {phases.map((phase, index) => {
                // Calculate if this item is the active one
                const isActive = index === activeIndex;
                // Calculate distance from active item to determine styling
                const distanceFromActive = Math.abs(index - activeIndex);
                // Only make nearby cards clickable for better UX
                const isClickable = distanceFromActive <= 2;
                
                return (
                  <div 
                    key={phase.key}
                    className="w-1/3 flex-shrink-0 select-none"
                    onClick={isClickable ? () => handleCardClick(index) : undefined}
                  >
                    <div 
                      className={`flex flex-col h-full border border-foreground/10 overflow-hidden shadow-sm bg-background transition-colors duration-300 ${
                        isActive 
                          ? 'border-primary/40 shadow-md' 
                          : distanceFromActive === 1
                            ? 'opacity-80 hover:opacity-90 cursor-pointer'
                            : distanceFromActive === 2
                              ? 'opacity-60 hover:opacity-70 cursor-pointer'
                              : 'opacity-50'
                      }`}
                    >
                      {/* Phase header */}
                      <div className={`p-4 border-b border-foreground/10 transition-colors duration-300 ${
                        isActive 
                          ? 'bg-primary/10' 
                          : 'bg-foreground/[0.03]'
                      }`}>
                        <div className="w-8 h-8 flex items-center justify-center text-white font-mono text-xs mb-3 bg-primary">
                          {phase.number}
                        </div>
                        <Heading as="h3" className="text-xl font-heading">
                          Phase {phase.number}
                        </Heading>
                        <p className="text-foreground/70 text-sm mt-1">{phase.title}</p>
                      </div>
                      
                      {/* Phase content */}
                      <div className="p-5 flex-1">
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-primary mr-2 text-lg leading-5" aria-hidden="true">•</span>
                              <span className="text-foreground/70 font-poppins text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation dots - centered, hidden on mobile */}
          <div className="flex justify-center mt-8 hidden md:flex">
            <div className="flex space-x-3">
              {originalPhases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 transition-colors duration-300 ${
                    activeIndex >= preItemsCount && 
                    index === activeIndex - preItemsCount 
                      ? 'bg-primary' 
                      : 'bg-foreground/20 hover:bg-foreground/30'
                  }`}
                  aria-label={`Go to phase ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile view - show in single column */}
        <div className="mt-10 md:hidden">
          <div className="space-y-6">
            {originalPhases.map((phase) => (
              <div 
                key={`mobile-phase-${phase.number}`}
                className="flex flex-col border border-foreground/10 overflow-hidden shadow-sm bg-background"
              >
                {/* Phase header */}
                <div className="p-4 border-b border-foreground/10 bg-foreground/[0.03]">
                  <div className="w-8 h-8 flex items-center justify-center text-white font-mono text-xs mb-3 bg-primary">
                    {phase.number}
                  </div>
                  <Heading as="h3" className="text-xl font-heading">
                    Phase {phase.number}
                  </Heading>
                  <p className="text-foreground/70 text-sm mt-1">{phase.title}</p>
                </div>
                
                {/* Phase content */}
                <div className="p-5">
                  <ul className="space-y-3">
                    {phase.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 text-lg leading-5" aria-hidden="true">•</span>
                        <span className="text-foreground/70 font-poppins text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 
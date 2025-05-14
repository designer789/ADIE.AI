"use client";

import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is ADIE.AI?",
      answer: "ADIE.AI is a Web3 automation platform where AI agents translate user intentions into secure, on-chain actions, powered by the MCP protocol and a decentralized intent marketplace."
    },
    {
      question: "How does ADIE.AI automate blockchain operations?",
      answer: "By using natural language processing and real-time on-chain data, AI agents autonomously interact with blockchain tools and smart contracts to execute tasks based on user-defined intentions."
    },
    {
      question: "What is the role of the MCP protocol?",
      answer: "The MCP protocol standardizes the connection between AI models and blockchain data/tools, ensuring secure, flexible, and scalable interactions across different ecosystems."
    },
    {
      question: "What is the Decentralized Intent Marketplace?",
      answer: "The intent marketplace allows users and developers to create, trade, and subscribe to reusable intent templates, simplifying complex blockchain operations and incentivizing participation through $ADIE tokens."
    },
    {
      question: "How does predictive optimization improve execution?",
      answer: "AI models analyze real-time blockchain conditions to forecast optimal execution strategies, improving transaction efficiency, reducing costs, and maximizing outcomes."
    },
    {
      question: "What are the main utilities of $ADIE?",
      answer: "$ADIE tokens are used for marketplace transactions, staking for execution priority and rewards, governance participation, and unlocking premium AI-driven optimization services."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 border-t border-foreground/10" id="faq">
      <Container>
        <Heading as="h2" className="text-4xl md:text-5xl mb-16 text-center">
          FAQ
        </Heading>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-foreground/10 last:border-b-0  transition-colors duration-200 ${
                openIndex === index ? 'bg-primary/10' : ''
              }`}
            >
              <button
                className={`w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none ${
                  openIndex === index ? 'text-primary font-medium' : ''
                }`}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <span className="ml-4 flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-primary' : ''
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5 px-4' : 'max-h-0'
                }`}
              >
                <p className="text-foreground/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 
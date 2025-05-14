import React from "react";
import Container from "./Container";

interface GridDecorationProps {
  className?: string;
}

export default function GridDecoration({ className = "" }: GridDecorationProps) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-50" />
      
      {/* Grid with responsive borders */}
      <Container className="h-full relative">
        {/* Responsive div with left and right borders */}
        <div className="relative h-full w-full border-l border-r border-foreground/10" />
        
        {/* Center grid line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-foreground/10 h-full" />
      </Container>
    </div>
  );
} 
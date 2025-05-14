import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({
  children,
  className = "",
  as: Component = "h2",
}: HeadingProps) {
  // Explicitly setting font-family to ClashDisplay-Semibold
  const baseStyles = "font-heading";

  return (
    <Component className={`${baseStyles} ${className}`} style={{ fontFamily: 'ClashDisplay-Semibold, sans-serif' }}>
      {children}
    </Component>
  );
} 
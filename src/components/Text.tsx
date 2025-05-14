import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  variant?: "body" | "lead" | "large" | "small" | "muted";
  as?: React.ElementType;
}

export default function Text({
  children,
  className = "",
  variant = "body",
  as: Component = "p",
}: TextProps) {
  const variants = {
    body: "text-base",
    lead: "text-lg md:text-xl leading-relaxed",
    large: "text-lg",
    small: "text-sm",
    muted: "text-sm text-foreground/70",
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
} 
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "large" | "small";
}

export default function Container({ 
  children, 
  className = "", 
  size = "default" 
}: ContainerProps) {
  const sizes = {
    small: "max-w-5xl",
    default: "max-w-[1400px]",
    large: "max-w-[1600px]"
  };
  
  return (
    <div className={`${sizes[size]} w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-8 ${className}`}>
      {children}
    </div>
  );
} 
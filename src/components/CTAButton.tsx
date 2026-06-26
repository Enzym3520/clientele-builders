import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline";
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const CTAButton = ({ 
  size = "lg", 
  variant = "default",
  children, 
  href = "https://start.clientelebuilders.com/distributionleak",
  className = ""
}: CTAButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button size={size} variant={variant} className={className}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  );
};

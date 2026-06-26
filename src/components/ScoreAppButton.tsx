import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

interface ScoreAppButtonProps {
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const ScoreAppButton = ({ 
  size = "lg", 
  children, 
  href = "https://start.clientelebuilders.com/distributionleak",
  className = ""
}: ScoreAppButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button size={size} variant="outline" className={className}>
        <ClipboardCheck className="mr-2 h-5 w-5" />
        {children}
      </Button>
    </a>
  );
};

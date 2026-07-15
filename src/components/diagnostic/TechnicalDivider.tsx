import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  light?: boolean;
}

export const TechnicalDivider = ({ className, light = false }: Props) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div
      className="h-px flex-1"
      style={{ backgroundColor: light ? "rgba(200,151,42,0.2)" : "rgba(158,171,184,0.2)" }}
    />
    <div
      className="w-1.5 h-1.5 rotate-45"
      style={{ backgroundColor: light ? "rgba(200,151,42,0.5)" : "rgba(200,151,42,0.4)" }}
    />
    <div
      className="h-px flex-1"
      style={{ backgroundColor: light ? "rgba(200,151,42,0.2)" : "rgba(158,171,184,0.2)" }}
    />
  </div>
);

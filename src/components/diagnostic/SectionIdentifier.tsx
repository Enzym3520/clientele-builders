import { cn } from "@/lib/utils";

interface Props {
  number: string;
  label: string;
  className?: string;
  light?: boolean;
}

export const SectionIdentifier = ({ number, label, className, light = false }: Props) => (
  <div className={cn("flex items-center gap-3 mb-10", className)}>
    <span
      className="text-[10px] tracking-[0.28em] uppercase"
      style={{
        fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
        color: light ? "rgba(200,151,42,0.7)" : "var(--cb-gold, #d39a22)",
      }}
    >
      {number}
    </span>
    <span
      className="w-5 h-px"
      style={{ backgroundColor: light ? "rgba(200,151,42,0.35)" : "rgba(200,151,42,0.4)" }}
    />
    <span
      className="text-[10px] tracking-[0.28em] uppercase"
      style={{
        fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
        color: light ? "rgba(247,245,239,0.45)" : "#9eabb8",
      }}
    >
      {label}
    </span>
  </div>
);

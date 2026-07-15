import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DiagnosticMarker } from "./DiagnosticMarker";

type Severity = "critical" | "moderate" | "minor";

interface Props {
  id: string;
  title: string;
  finding: string;
  status?: string;
  severity?: Severity;
  action?: string;
  icon?: ReactNode;
  className?: string;
}

const SEVERITY_CONFIG: Record<Severity, { label: string; color: string }> = {
  critical: { label: "Critical Leak", color: "#c0392b" },
  moderate: { label: "Moderate Gap", color: "#d39a22" },
  minor:    { label: "Minor Signal", color: "rgba(158,171,184,0.8)" },
};

export const DiagnosticCard = ({
  id, title, finding, status = "Active Diagnostic",
  severity = "moderate", action, icon, className,
}: Props) => {
  const sev = SEVERITY_CONFIG[severity];

  return (
    <div
      className={cn(
        "group relative border p-6 transition-all duration-300",
        "hover:border-[#d39a22]/50 bg-[var(--cb-white,#f7f5ef)]",
        className
      )}
      style={{ borderColor: "rgba(158,171,184,0.3)" }}
    >
      {/* Top gold accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d39a22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Corner bracket marks */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r opacity-20 group-hover:opacity-60 transition-opacity" style={{ borderColor: "#d39a22" }} />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l opacity-20 group-hover:opacity-60 transition-opacity" style={{ borderColor: "#d39a22" }} />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4 gap-2">
        <div className="flex-1">
          <span
            className="text-[9px] tracking-[0.3em] uppercase block mb-2"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "#d39a22" }}
          >
            Area {id}
          </span>
          {icon && <div className="mb-2">{icon}</div>}
          <h3 className="font-serif text-base font-bold leading-snug text-[#0a1928]">{title}</h3>
        </div>
        <DiagnosticMarker size={22} className="shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Finding */}
      <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#5a6a7a" }}>
        {finding}
      </p>

      {/* Severity + status row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#d39a22" }} />
          <span
            className="text-[9px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "#d39a22" }}
          >
            {status}
          </span>
        </div>
        <span
          className="text-[8px] tracking-[0.15em] uppercase px-2 py-0.5"
          style={{
            fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
            color: sev.color,
            border: `1px solid ${sev.color}`,
            opacity: 0.85,
          }}
        >
          {sev.label}
        </span>
      </div>

      {/* Recommended action */}
      {action && (
        <div
          className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderTop: "1px solid rgba(158,171,184,0.2)" }}
        >
          <span
            className="text-[8px] tracking-[0.22em] uppercase block mb-1"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(158,171,184,0.6)" }}
          >
            First Action
          </span>
          <p className="text-[12px]" style={{ color: "#5a6a7a" }}>{action}</p>
        </div>
      )}
    </div>
  );
};

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
  density?: "full" | "light" | "none";
}

export const BlueprintBackground = ({ className, children, density = "full" }: Props) => (
  <div className={cn("relative overflow-hidden", className)}>
    <div className="absolute inset-0" style={{ backgroundColor: "var(--cb-navy-900)" }} />
    {density !== "none" && (
      <>
        {/* Major 40px grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Minor 8px grid — full density only */}
        {density === "full" && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
            }}
          />
        )}
        {/* SVG paper grain/noise texture */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: density === "full" ? 0.18 : 0.1 }}
          aria-hidden="true"
        >
          <defs>
            <filter id="bp-grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.68 0.72"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
              <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgba(255,255,255,0.04)" filter="url(#bp-grain)" />
        </svg>
        {/* Diagonal construction line (top-left to bottom-right) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.04 }}
          aria-hidden="true"
        >
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(200,151,42,1)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(200,151,42,1)" strokeWidth="0.5" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2235]/50 via-transparent to-[#06111d]/30 pointer-events-none" />
      </>
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

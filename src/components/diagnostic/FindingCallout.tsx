interface Props {
  classification: string;
  finding: string;
  light?: boolean;
}

/** Gold-bordered finding callout — used in editorial sections and diagnostic cards */
export const FindingCallout = ({ classification, finding, light }: Props) => (
  <div
    className="relative pl-5 py-4 pr-5"
    style={{
      borderLeft: "2px solid #d39a22",
      backgroundColor: light
        ? "rgba(211,154,34,0.06)"
        : "rgba(211,154,34,0.05)",
    }}
  >
    {/* Top-left bracket */}
    <div
      className="absolute top-0 left-0 w-3 h-[1px]"
      style={{ backgroundColor: "#d39a22", opacity: 0.5 }}
    />
    <div
      className="absolute bottom-0 left-0 w-3 h-[1px]"
      style={{ backgroundColor: "#d39a22", opacity: 0.5 }}
    />

    <span
      className="block mb-1.5 text-[8px] tracking-[0.28em] uppercase"
      style={{
        fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
        color: "#d39a22",
        opacity: 0.75,
      }}
    >
      {classification}
    </span>
    <p
      className="text-[13px] leading-relaxed font-serif italic"
      style={{ color: light ? "var(--cb-navy-900, #0a1928)" : "rgba(247,245,239,0.75)" }}
    >
      {finding}
    </p>
  </div>
);

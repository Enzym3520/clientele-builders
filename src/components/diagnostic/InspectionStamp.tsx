interface Props {
  label: string;
  sublabel?: string;
  variant?: "gold" | "muted";
  size?: number;
}

/** Circular inspection stamp — used on report cards and diagnostic findings */
export const InspectionStamp = ({ label, sublabel, variant = "gold", size = 72 }: Props) => {
  const r = size / 2;
  const strokeColor = variant === "gold" ? "#d39a22" : "rgba(158,171,184,0.4)";
  const textColor = variant === "gold" ? "#d39a22" : "rgba(158,171,184,0.5)";
  const dashArray = "3 4";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label={label}
      style={{ transform: "rotate(-12deg)" }}
    >
      {/* Outer dashed ring */}
      <circle
        cx={r}
        cy={r}
        r={r - 2}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        strokeDasharray={dashArray}
        opacity="0.7"
      />
      {/* Inner ring */}
      <circle
        cx={r}
        cy={r}
        r={r - 6}
        fill="none"
        stroke={strokeColor}
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Top arc label */}
      <defs>
        <path
          id={`stamp-arc-${label.replace(/\s/g, "")}`}
          d={`M ${r - (r - 10)} ${r} A ${r - 10} ${r - 10} 0 0 1 ${r + (r - 10)} ${r}`}
        />
      </defs>

      {/* Main text */}
      <text
        x={r}
        y={r + 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={size * 0.13}
        fontFamily="'IBM Plex Mono', 'DM Mono', monospace"
        fontWeight="600"
        letterSpacing="0.1em"
        style={{ textTransform: "uppercase" }}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={r}
          y={r + size * 0.15}
          textAnchor="middle"
          fill={textColor}
          fontSize={size * 0.1}
          fontFamily="'IBM Plex Mono', 'DM Mono', monospace"
          opacity="0.6"
          letterSpacing="0.05em"
          style={{ textTransform: "uppercase" }}
        >
          {sublabel}
        </text>
      )}

      {/* Horizontal rule through center */}
      <line x1={r - (r - 12)} y1={r} x2={r + (r - 12)} y2={r} stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
};

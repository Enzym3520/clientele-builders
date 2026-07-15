interface Props {
  size?: number;
  className?: string;
}

/** Brand Icon — segmented circle with one gold section, diagnostic focus point, crosshair mark */
export const DiagnosticMarker = ({ size = 24, className }: Props) => {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const ir = r * 0.52; // inner radius
  const or = r * 0.82; // outer radius

  // Build donut segments: 8 equal slices, one gold, rest muted
  const segments: JSX.Element[] = [];
  const count = 8;
  for (let i = 0; i < count; i++) {
    const startAngle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((i + 1) / count) * 2 * Math.PI - Math.PI / 2;
    const gap = 0.04;

    const s = startAngle + gap;
    const e = endAngle - gap;
    const x1 = cx + or * Math.cos(s);
    const y1 = cy + or * Math.sin(s);
    const x2 = cx + or * Math.cos(e);
    const y2 = cy + or * Math.sin(e);
    const x3 = cx + ir * Math.cos(e);
    const y3 = cy + ir * Math.sin(e);
    const x4 = cx + ir * Math.cos(s);
    const y4 = cy + ir * Math.sin(s);

    const isGold = i === 2; // highlight one sector

    segments.push(
      <path
        key={i}
        d={`M ${x1} ${y1} A ${or} ${or} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${ir} ${ir} 0 0 0 ${x4} ${y4} Z`}
        fill={isGold ? "#d39a22" : "rgba(158,171,184,0.18)"}
        stroke={isGold ? "#d39a22" : "none"}
        strokeWidth={isGold ? 0.5 : 0}
      />
    );
  }

  const hairline = "rgba(200,151,42,0.3)";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      {/* Crosshair lines */}
      <line x1={cx} y1={0} x2={cx} y2={cy - or - 1} stroke={hairline} strokeWidth="0.5" />
      <line x1={cx} y1={cy + or + 1} x2={cx} y2={size} stroke={hairline} strokeWidth="0.5" />
      <line x1={0} y1={cy} x2={cx - or - 1} y2={cy} stroke={hairline} strokeWidth="0.5" />
      <line x1={cx + or + 1} y1={cy} x2={size} y2={cy} stroke={hairline} strokeWidth="0.5" />

      {/* Segments */}
      {segments}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={r * 0.1} fill="#d39a22" opacity="0.9" />
    </svg>
  );
};

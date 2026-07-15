import { useState } from "react";

const CATEGORIES = [
  { id: 1, label: "Recruiting" },
  { id: 2, label: "Onboarding" },
  { id: 3, label: "Marketing" },
  { id: 4, label: "Sales Process" },
  { id: 5, label: "Persistency" },
  { id: 6, label: "Compensation" },
  { id: 7, label: "Leadership" },
  { id: 8, label: "Technology" },
];

const polarToXY = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const donutPath = (cx: number, cy: number, outerR: number, innerR: number, startDeg: number, endDeg: number) => {
  const gap = 2.5;
  const s = startDeg + gap / 2;
  const e = endDeg - gap / 2;
  const os = polarToXY(cx, cy, outerR, s);
  const oe = polarToXY(cx, cy, outerR, e);
  const is = polarToXY(cx, cy, innerR, s);
  const ie = polarToXY(cx, cy, innerR, e);
  const large = e - s > 180 ? 1 : 0;
  return `M ${os.x.toFixed(2)} ${os.y.toFixed(2)} A ${outerR} ${outerR} 0 ${large} 1 ${oe.x.toFixed(2)} ${oe.y.toFixed(2)} L ${ie.x.toFixed(2)} ${ie.y.toFixed(2)} A ${innerR} ${innerR} 0 ${large} 0 ${is.x.toFixed(2)} ${is.y.toFixed(2)} Z`;
};

interface Props {
  size?: number;
}

export const SystemWheel = ({ size = 380 }: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.23;
  const labelR = size * 0.49;
  const segmentDeg = 360 / 8;

  return (
    <div className="flex flex-col items-center gap-8">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Clientele Builders 8-division distribution diagnostic system"
        className="overflow-visible"
      >
        {/* Outer tick ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const outer = polarToXY(cx, cy, outerR + size * 0.04, angle);
          const inner = polarToXY(cx, cy, outerR + size * 0.015, angle);
          return (
            <line key={angle}
              x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
              stroke="rgba(200,151,42,0.25)" strokeWidth="1"
            />
          );
        })}

        {/* Segments */}
        {CATEGORIES.map((cat, i) => {
          const startDeg = i * segmentDeg - segmentDeg / 2;
          const endDeg = startDeg + segmentDeg;
          const midDeg = startDeg + segmentDeg / 2;
          const labelPos = polarToXY(cx, cy, labelR, midDeg);
          const isActive = active === cat.id;

          return (
            <g key={cat.id}>
              <path
                d={donutPath(cx, cy, outerR, innerR, startDeg, endDeg)}
                fill={isActive ? "#d39a22" : "rgba(247,245,239,0.08)"}
                stroke={isActive ? "#d39a22" : "rgba(200,151,42,0.2)"}
                strokeWidth="0.75"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActive(cat.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(cat.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="button"
                aria-label={cat.label}
              />
              {/* Label */}
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={size * 0.032}
                fill={isActive ? "#d39a22" : "rgba(247,245,239,0.55)"}
                fontFamily="'IBM Plex Mono', 'DM Mono', monospace"
                className="pointer-events-none transition-all duration-300 select-none"
                style={{ letterSpacing: "0.1em" }}
              >
                {cat.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Center circle */}
        <circle cx={cx} cy={cy} r={innerR - size * 0.01} fill="var(--cb-navy-900, #0a1928)" stroke="rgba(200,151,42,0.3)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={innerR * 0.78} fill="none" stroke="rgba(200,151,42,0.12)" strokeWidth="0.6" />

        {/* Center CB monogram */}
        <g transform={`translate(${cx},${cy - size * 0.02}) skewX(-5)`}>
          <text
            x="0" y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize={size * 0.098}
            letterSpacing={-(size * 0.009)}
          >
            <tspan fill="#F7F5EF">C</tspan>
            <tspan fill="#C8972A">B</tspan>
          </text>
        </g>
        <text
          x={cx} y={cy + size * 0.075}
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', 'DM Mono', monospace"
          fontSize={size * 0.024}
          fill="rgba(247,245,239,0.35)"
          style={{ letterSpacing: "0.12em" }}
        >
          DISTRIBUTION
        </text>
        <text
          x={cx} y={cy + size * 0.11}
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', 'DM Mono', monospace"
          fontSize={size * 0.024}
          fill="rgba(247,245,239,0.35)"
          style={{ letterSpacing: "0.12em" }}
        >
          SYSTEM
        </text>
      </svg>

      {/* Mobile fallback: stacked labels */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-xs md:hidden">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onMouseEnter={() => setActive(cat.id)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === cat.id ? null : cat.id)}
            className="text-left px-3 py-2 border transition-all duration-200"
            style={{
              borderColor: active === cat.id ? "#d39a22" : "rgba(200,151,42,0.2)",
              backgroundColor: active === cat.id ? "rgba(211,154,34,0.1)" : "transparent",
            }}
          >
            <span
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
                color: active === cat.id ? "#d39a22" : "rgba(247,245,239,0.5)",
              }}
            >
              {String(cat.id).padStart(2, "0")} — {cat.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

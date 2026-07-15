interface Props {
  size?: number;
  animated?: boolean;
}

export const DiagnosticLogo = ({ size = 280, animated = true }: Props) => {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.36;
  const innerR2 = size * 0.305;
  const fontSize = size * 0.30;
  const id = `dl${size}`;

  const toXY = (deg: number, r: number) => ({
    x: cx + r * Math.cos(deg * Math.PI / 180),
    y: cy + r * Math.sin(deg * Math.PI / 180),
  });

  const tickAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  // EKG heartbeat path — one beat cycle spanning beatW, centered at y=cy
  const beatW = outerR * 1.15;
  const beatH = outerR * 0.30;
  const ekgTile = (ox: number) => {
    const x = (t: number) => ox + t * beatW;
    const y = (v: number) => cy + v * beatH;
    return [
      `M ${x(0)} ${y(0)}`,
      `L ${x(0.16)} ${y(0)}`,
      `L ${x(0.21)} ${y(-0.16)}`,
      `L ${x(0.26)} ${y(0)}`,
      `L ${x(0.35)} ${y(0)}`,
      `L ${x(0.375)} ${y(0.10)}`,
      `L ${x(0.41)} ${y(-1.0)}`,
      `L ${x(0.445)} ${y(0.36)}`,
      `L ${x(0.48)} ${y(0)}`,
      `L ${x(0.57)} ${y(0)}`,
      `L ${x(0.635)} ${y(-0.20)}`,
      `L ${x(0.70)} ${y(0)}`,
      `L ${x(1.0)} ${y(0)}`,
    ].join(' ');
  };

  // Three tiles starting well left of circle so animation is always full
  const ekgStart = cx - outerR - beatW * 0.5;
  const ekgPath = [
    ekgTile(ekgStart),
    ekgTile(ekgStart + beatW),
    ekgTile(ekgStart + beatW * 2),
  ].join(' ');

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Clientele Builders diagnostic blueprint logo"
    >
      <defs>
        {/* Chalk roughness filter */}
        <filter id={`chalk-${id}`} x="-4%" y="-4%" width="108%" height="108%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="5" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* EKG glow filter */}
        <filter id={`ekg-glow-${id}`} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Crosshatch chalk shading */}
        <pattern id={`hatch-${id}`} x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="rgba(247,245,239,0.09)" strokeWidth="0.9" />
        </pattern>
        <pattern id={`hatch2-${id}`} x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="rgba(247,245,239,0.055)" strokeWidth="0.7" />
        </pattern>

        {/* EKG fade mask — trail fades left, bright on right */}
        <linearGradient id={`ekg-fade-${id}`} x1={cx - outerR} x2={cx + outerR} y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="0.25" />
          <stop offset="75%" stopColor="white" stopOpacity="0.85" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id={`ekg-mask-${id}`}>
          <rect x={cx - outerR} y={cy - outerR} width={outerR * 2} height={outerR * 2}
            fill={`url(#ekg-fade-${id})`} />
        </mask>

        {/* Circle clip */}
        <clipPath id={`circ-${id}`}>
          <circle cx={cx} cy={cy} r={outerR - 1.5} />
        </clipPath>

        {animated && (
          <style>{`
            @keyframes cb-ekg-scroll-${id} {
              from { transform: translateX(0px); }
              to   { transform: translateX(${-beatW}px); }
            }
            @keyframes cb-pulse-ring-${id} {
              0%   { r: ${size * 0.04}; opacity: 0.7; }
              100% { r: ${outerR * 0.88}; opacity: 0; }
            }
            @keyframes cb-pulse-ring2-${id} {
              0%   { r: ${size * 0.04}; opacity: 0.4; }
              100% { r: ${outerR * 0.72}; opacity: 0; }
            }
            @keyframes cb-outer-pulse-${id} {
              0%,100% { opacity: 0.1; }
              50%     { opacity: 0.35; }
            }
            @keyframes cb-dot-pulse-${id} {
              0%,100% { opacity: 0.2; r: ${size * 0.014}; }
              50%     { opacity: 1;   r: ${size * 0.022}; }
            }
            .ekg-scroll-${id} {
              animation: cb-ekg-scroll-${id} 2.4s linear infinite;
            }
            .pulse-ring-${id} {
              animation: cb-pulse-ring-${id} 2.4s ease-out infinite;
            }
            .pulse-ring2-${id} {
              animation: cb-pulse-ring2-${id} 2.4s ease-out 0.18s infinite;
            }
            .outer-pulse-${id} { animation: cb-outer-pulse-${id} 4s ease-in-out infinite; }
            .dot-pulse-${id}   { animation: cb-dot-pulse-${id} 2.4s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .ekg-scroll-${id}, .pulse-ring-${id}, .pulse-ring2-${id},
              .outer-pulse-${id}, .dot-pulse-${id} {
                animation: none;
                opacity: 0.2;
              }
            }
          `}</style>
        )}
      </defs>

      {/* ── OUTER CONSTRUCTION DASHED RING ─── */}
      <circle
        cx={cx} cy={cy} r={outerR + size * 0.075}
        fill="none" stroke="rgba(200,151,42,0.14)" strokeWidth="0.75" strokeDasharray="3 9"
        className={`outer-pulse-${id}`}
      />

      {/* ── CROSSHAIR LINES ─── */}
      <line x1={cx - outerR - size * 0.1} y1={cy} x2={cx + outerR + size * 0.1} y2={cy}
        stroke="rgba(200,151,42,0.2)" strokeWidth="0.6" />
      <line x1={cx} y1={cy - outerR - size * 0.1} x2={cx} y2={cy + outerR + size * 0.1}
        stroke="rgba(200,151,42,0.2)" strokeWidth="0.6" />

      {/* Diagonal construction lines */}
      <line x1={cx - outerR * 0.7} y1={cy - outerR * 0.7} x2={cx + outerR * 0.7} y2={cy + outerR * 0.7}
        stroke="rgba(200,151,42,0.08)" strokeWidth="0.5" />
      <line x1={cx + outerR * 0.7} y1={cy - outerR * 0.7} x2={cx - outerR * 0.7} y2={cy + outerR * 0.7}
        stroke="rgba(200,151,42,0.08)" strokeWidth="0.5" />

      {/* ── MEASUREMENT TICKS ─── */}
      {tickAngles.map(angle => {
        const isMajor = angle % 90 === 0;
        const len = isMajor ? size * 0.048 : size * 0.024;
        const inner = toXY(angle - 90, outerR - len);
        const outer = toXY(angle - 90, outerR);
        return (
          <line key={angle}
            x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
            stroke={isMajor ? "rgba(200,151,42,0.65)" : "rgba(200,151,42,0.3)"}
            strokeWidth={isMajor ? 1.5 : 0.75}
          />
        );
      })}

      {/* ── MAIN CIRCLE ─── */}
      <circle cx={cx} cy={cy} r={outerR}
        fill="var(--cb-navy-900, #0a1928)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2.2"
      />

      {/* Crosshatch chalk shading overlay */}
      <circle cx={cx} cy={cy} r={outerR - 1.5} fill={`url(#hatch-${id})`} opacity="1" />
      <circle cx={cx} cy={cy} r={outerR - 1.5} fill={`url(#hatch2-${id})`} opacity="1" />

      {/* ── HEARTBEAT PULSE RINGS — radial expand from center ─── */}
      <g clipPath={`url(#circ-${id})`}>
        <circle cx={cx} cy={cy} r={size * 0.04}
          fill="none" stroke="#5ba8ff" strokeWidth="1.2"
          className={`pulse-ring-${id}`}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <circle cx={cx} cy={cy} r={size * 0.04}
          fill="none" stroke="#3d8bff" strokeWidth="0.7"
          className={`pulse-ring2-${id}`}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      </g>

      {/* ── EKG HEARTBEAT LINE ─── */}
      <g clipPath={`url(#circ-${id})`} mask={`url(#ekg-mask-${id})`}>
        {/* Glow layer */}
        <g className={`ekg-scroll-${id}`} filter={`url(#ekg-glow-${id})`}>
          <path d={ekgPath}
            fill="none" stroke="#5ba8ff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
            opacity="0.55"
          />
        </g>
        {/* Sharp line on top */}
        <g className={`ekg-scroll-${id}`}>
          <path d={ekgPath}
            fill="none" stroke="#b8e4ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
            opacity="0.9"
          />
          {/* Bright leading-edge dot at the right end of each tile */}
          <circle cx={ekgStart + beatW} cy={cy} r={size * 0.016}
            fill="#cbeeff" opacity="0.95" />
          <circle cx={ekgStart + beatW * 2} cy={cy} r={size * 0.016}
            fill="#cbeeff" opacity="0.95" />
        </g>
      </g>

      {/* ── INNER RINGS ─── */}
      <circle cx={cx} cy={cy} r={innerR}
        fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={innerR2}
        fill="none" stroke="rgba(200,151,42,0.22)" strokeWidth="0.6" strokeDasharray="2 5" />

      {/* Gold pulse dot — top of ring */}
      <circle cx={cx} cy={cy - outerR} r={size * 0.014}
        fill="#C8972A" className={`dot-pulse-${id}`} />

      {/* ── CB MONOGRAM ─── */}
      <g transform={`translate(${cx},${cy}) skewX(-5)`} filter={`url(#chalk-${id})`}>
        <text
          x="0" y="0" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Playfair Display', Georgia, serif" fontWeight="900"
          fontSize={fontSize} letterSpacing={-(fontSize * 0.09)}
          fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4"
        >CB</text>
        <text
          x="0" y="0" textAnchor="middle" dominantBaseline="central"
          fontFamily="'Playfair Display', Georgia, serif" fontWeight="900"
          fontSize={fontSize} letterSpacing={-(fontSize * 0.09)}
        >
          <tspan fill="#F0EDE6">C</tspan>
          <tspan fill="#C8972A">B</tspan>
        </text>
      </g>

      {/* ── HANDWRITTEN CHALK CORNER PHRASES ─── */}
      {size >= 200 && (
        <g fontFamily="'Caveat', cursive" fontWeight="600">
          <text
            x={size * 0.02} y={size * 0.17}
            fontSize={size * 0.058}
            fill="rgba(255,255,255,0.42)"
            transform={`rotate(-4, ${size * 0.02}, ${size * 0.17})`}
          >measure what matters</text>
          <line x1={size * 0.02} y1={size * 0.175} x2={size * 0.38} y2={size * 0.175}
            stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />

          <text
            x={size * 0.56} y={size * 0.17}
            fontSize={size * 0.058}
            fill="rgba(255,255,255,0.42)"
            transform={`rotate(3, ${size * 0.56}, ${size * 0.17})`}
          >diagnose the system</text>

          <text
            x={size * 0.02} y={size * 0.85}
            fontSize={size * 0.062}
            fill="rgba(211,154,34,0.55)"
            transform={`rotate(-3, ${size * 0.02}, ${size * 0.85})`}
          >find the leak →</text>

          <text
            x={size * 0.48} y={size * 0.85}
            fontSize={size * 0.055}
            fill="rgba(255,255,255,0.38)"
            transform={`rotate(4, ${size * 0.48}, ${size * 0.85})`}
          >fix what slows growth</text>

        </g>
      )}
    </svg>
  );
};

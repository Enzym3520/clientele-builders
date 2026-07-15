import { CSSProperties } from "react";

interface Props {
  text: string;
  rotate?: number;
  size?: number;
  light?: boolean;        // true = dark ink on cream; false (default) = chalk on dark
  weight?: 400 | 600 | 700;
  className?: string;
  style?: CSSProperties;
  arrow?: "right" | "left" | "down" | "up" | null;
  underline?: boolean;
}

const ARROWS = { right: " →", left: "← ", down: " ↓", up: " ↑" };

export const ChalkNote = ({
  text, rotate = 0, size = 18, light = false,
  weight = 600, className = "", style, arrow = null, underline = false,
}: Props) => {
  const color = light
    ? "rgba(10,25,40,0.45)"
    : "rgba(255,255,255,0.72)";

  const shadow = light
    ? "none"
    : "0 0 12px rgba(180,220,255,0.15), 0 1px 0 rgba(0,0,0,0.4)";

  return (
    <span
      className={`pointer-events-none select-none ${className}`}
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: size,
        fontWeight: weight,
        color,
        textShadow: shadow,
        display: "inline-block",
        transform: `rotate(${rotate}deg)`,
        letterSpacing: "0.01em",
        lineHeight: 1.2,
        textDecoration: underline ? "underline" : "none",
        textUnderlineOffset: 4,
        textDecorationStyle: underline ? "wavy" : undefined,
        textDecorationColor: light ? "rgba(10,25,40,0.3)" : "rgba(255,255,255,0.4)",
        ...style,
      }}
    >
      {arrow === "left" ? ARROWS.left : ""}
      {text}
      {arrow && arrow !== "left" ? ARROWS[arrow] : ""}
    </span>
  );
};

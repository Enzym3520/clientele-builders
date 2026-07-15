import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

export const Header = () => (
  <header
    className="sticky top-0 z-50 backdrop-blur-sm"
    style={{
      backgroundColor: "rgba(10,25,40,0.95)",
      borderBottom: "1px solid rgba(200,151,42,0.15)",
    }}
  >
    <div className="container max-w-6xl mx-auto px-6 py-3.5">
      <div className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-label="Clientele Builders" role="img">
            <circle cx="16" cy="16" r="14.5" fill="var(--cb-navy-900,#0a1928)" stroke="#C8972A" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="12" fill="none" stroke="rgba(200,151,42,0.3)" strokeWidth="0.5" />
            <g transform="translate(16,16) skewX(-5)">
              <text x="0" y="0" textAnchor="middle" dominantBaseline="central"
                fontFamily="'Playfair Display', Georgia, serif" fontWeight="900"
                fontSize="13" letterSpacing="-1.1">
                <tspan fill="#F7F5EF">C</tspan>
                <tspan fill="#C8972A">B</tspan>
              </text>
            </g>
          </svg>
          <span
            className="cb-headline font-serif font-bold text-base tracking-tight hidden sm:block"
            style={{ color: "#f7f5ef" }}
          >
            Clientele Builders
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: "/intelligence", label: "Intelligence" },
            { to: "/consulting", label: "Consulting" },
            { to: "/about", label: "About" },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[10px] tracking-[0.18em] uppercase transition-colors hover:text-[#d39a22]"
              style={{
                fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
                color: "rgba(247,245,239,0.5)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={SCORECARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 transition-opacity hover:opacity-90 shrink-0"
          style={{
            backgroundColor: "#d39a22",
            color: "var(--cb-navy-900,#0a1928)",
            fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Get Diagnosed <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  </header>
);

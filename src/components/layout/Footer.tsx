import { Link } from "react-router-dom";

export const Footer = () => (
  <footer style={{ backgroundColor: "var(--cb-navy-900,#0a1928)", borderTop: "2px solid #d39a22" }}>
    <div className="container max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg width="28" height="28" viewBox="0 0 32 32" aria-label="Clientele Builders" role="img">
              <circle cx="16" cy="16" r="14.5" fill="var(--cb-navy-850,#0d2235)" stroke="#C8972A" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="12" fill="none" stroke="rgba(200,151,42,0.25)" strokeWidth="0.5" />
              <g transform="translate(16,16) skewX(-5)">
                <text x="0" y="0" textAnchor="middle" dominantBaseline="central"
                  fontFamily="'Playfair Display', Georgia, serif" fontWeight="900"
                  fontSize="13" letterSpacing="-1.1">
                  <tspan fill="#F7F5EF">C</tspan>
                  <tspan fill="#C8972A">B</tspan>
                </text>
              </g>
            </svg>
            <span className="font-serif text-base font-bold" style={{ color: "#f7f5ef" }}>Clientele Builders</span>
          </div>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "rgba(247,245,239,0.4)" }}
          >
            We find where your insurance business is leaking money — and show you exactly how to fix it.
          </p>
          <span
            className="text-[8px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(200,151,42,0.4)" }}
          >
            Tucson, Arizona
          </span>
        </div>

        {/* Links */}
        <div>
          <span
            className="block mb-5 text-[9px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(200,151,42,0.5)" }}
          >
            Navigate
          </span>
          <div className="space-y-3">
            {[
              { to: "/intelligence", label: "Intelligence" },
              { to: "/consulting", label: "Consulting" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm transition-colors hover:text-[#d39a22]"
                style={{ color: "rgba(247,245,239,0.45)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Diagnostic process */}
        <div>
          <span
            className="block mb-5 text-[9px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(200,151,42,0.5)" }}
          >
            The Process
          </span>
          <div className="space-y-2">
            {[
              ["01", "Inspect the System"],
              ["02", "Locate the Leak"],
              ["03", "Understand the Cause"],
              ["04", "Design the Repair"],
              ["05", "Measure the Result"],
            ].map(([num, label]) => (
              <div key={num} className="flex items-center gap-2.5">
                <span
                  className="text-[8px] shrink-0"
                  style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "#d39a22", opacity: 0.5 }}
                >
                  {num}
                </span>
                <span className="text-[11px]" style={{ color: "rgba(247,245,239,0.35)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ borderTop: "1px solid rgba(247,245,239,0.07)" }}
      >
        <p
          className="text-[10px]"
          style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(247,245,239,0.2)" }}
        >
          © 2026 Clientele Builders. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            to="/privacy"
            className="text-[10px] transition-colors hover:text-[#d39a22]"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(247,245,239,0.2)" }}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-[10px] transition-colors hover:text-[#d39a22]"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(247,245,239,0.2)" }}
          >
            Terms
          </Link>
          <span
            className="text-[10px]"
            style={{ fontFamily: "'IBM Plex Mono', 'DM Mono', monospace", color: "rgba(247,245,239,0.2)" }}
          >
            clientelebuilders.com
          </span>
        </div>
      </div>
    </div>
  </footer>
);

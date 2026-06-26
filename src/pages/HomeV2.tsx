import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const css = (s: string): React.CSSProperties => {
  const out: Record<string, string> = {};
  s.split(";").forEach((rule) => {
    const i = rule.indexOf(":");
    if (i < 0) return;
    const k = rule.slice(0, i).trim();
    const v = rule.slice(i + 1).trim();
    if (!k) return;
    const key = k.startsWith("--") ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = v;
  });
  return out as React.CSSProperties;
};

const AREAS = [
  { num: "01", name: "Recruiting", q: "Can you consistently move the right people forward?" },
  { num: "02", name: "Onboarding", q: "Do new agents know exactly what to do — and do it?" },
  { num: "03", name: "Marketing", q: "Is trust built before conversations begin?" },
  { num: "04", name: "Sales Process", q: "Can attention reliably become revenue?" },
  { num: "05", name: "Persistency", q: "Is long-term profit being protected?" },
  { num: "06", name: "Compensation", q: "Are incentives aligned to the outcomes you want?" },
  { num: "07", name: "Leadership", q: "Is the next generation being developed?" },
  { num: "08", name: "Technology & Data", q: "Can leaders actually see what's working?" },
];

export default function HomeV2() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    reveals.forEach((el) => { el.style.willChange = "transform"; });
    const update = () => {
      const vh = window.innerHeight;
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        const prog = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.82)));
        el.style.transform = `translate3d(0,${((1 - prog) * 34).toFixed(1)}px,0)`;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Clientele Builders — New Home Preview</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @keyframes cbBob { 0%,100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(7px); opacity: 1; } }
          @keyframes cbLeak {
            0%   { transform: translate(0,0) scaleY(1); opacity: 0; }
            12%  { opacity: 0.95; }
            72%  { opacity: 0.7; }
            100% { transform: translate(var(--dx,24px), var(--dy,130px)) scaleY(0.55); opacity: 0; }
          }
          @keyframes cbPulse { 0%,100% { opacity: 0.55; } 50% { opacity: 0.95; } }
          .hv2-cta:hover { background: #d9a441 !important; }
        `}</style>
      </Helmet>
      <div style={{ background: "#070f18", minHeight: "100vh" }}>
        <div
          ref={rootRef}
          style={{ maxWidth: 460, margin: "0 auto", background: "#0E2436", position: "relative", overflowX: "clip", fontFamily: "'Hanken Grotesk', sans-serif", color: "#F4EFE3" }}
        >
          <div style={css("padding: 110px 26px; background: #0a1622;")}>
            <div data-reveal="" style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #b0832e; margin-bottom: 26px;")}>What we believe</div>
            <p data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 500; font-size: 34px; line-height: 1.16; margin: 0; letter-spacing: -0.01em;")}>
              You don't have a lead problem. You have a <span style={css("font-style: italic; color: #C8902F;")}>visibility</span> problem.
            </p>
          </div>
          <div style={css("padding: 100px 26px; background: #0E2436;")}>
            <div data-reveal="" style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #C8902F; margin-bottom: 18px;")}>The diagnostic</div>
            <h3 data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 500; font-size: 30px; line-height: 1.1; margin: 0 0 36px; letter-spacing: -0.01em;")}>Eight systems we pressure-test.</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {AREAS.map((a) => (
                <div key={a.num} data-reveal="" style={css("display: flex; align-items: baseline; gap: 16px; padding: 20px 0; border-top: 1px solid rgba(244,239,227,0.12);")}>
                  <span style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #C8902F; flex: 0 0 24px;")}>{a.num}</span>
                  <div style={{ flex: 1 }}>
                    <div style={css("font-family: 'Bodoni Moda', serif; font-size: 21px; line-height: 1.1; margin-bottom: 4px;")}>{a.name}</div>
                    <div style={css("font-size: 13px; color: #7d8fa0; line-height: 1.4;")}>{a.q}</div>
                  </div>
                </div>
              ))}
              <div style={css("border-top: 1px solid rgba(244,239,227,0.12);")} />
            </div>
          </div>
          <div style={css("padding: 120px 26px; background: #0a1622;")}>
            <h3 data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 38px; line-height: 1.02; margin: 0 0 20px;")}>The Distribution Leak Diagnostic.</h3>
            <a data-reveal="" className="hv2-cta" href="https://start.clientelebuilders.com/distributionleak" style={css("display: inline-flex; align-items: center; gap: 12px; padding: 17px 28px; background: #C8902F; color: #0E2436; text-decoration: none; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; white-space: nowrap; transition: background .2s ease;")}>
              Take the diagnostic <span style={{ fontSize: 15 }}>→</span>
            </a>
          </div>
          <div style={css("padding: 56px 26px 64px; background: #070f18;")}>
            <div style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 19px; margin-bottom: 10px;")}>Clientele Builders</div>
            <div style={css("font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.14em; color: #46586a; text-transform: uppercase;")}>© 2026 · Built on visibility</div>
          </div>
        </div>
      </div>
    </>
  );
}

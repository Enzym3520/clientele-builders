import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  DEFAULT_HOME_CONTENT,
  HOME_ICONS,
  assessmentHref,
  fetchPublishedHomeContent,
  type HomeContent,
} from "@/lib/homeContent";
import "./home-leak.css";

const DIAGNOSE_DETAILS: Record<string, string> = {
  Recruiting: "Are the people you bring in a good fit? We look at where strong candidates come from and where they stop moving forward.",
  Onboarding: "What happens after an agent says yes? We look at the first steps, who owns them, and whether new agents reach their first sale.",
  Marketing: "Do agents and customers trust what they find before they talk to you? We look at the message, the proof, and the path to a conversation.",
  "Sales Process": "Where does a good conversation stall? We look at the steps from first contact to a submitted policy and where people get stuck.",
  Persistency: "Do policies stay in force after the sale? We look at lapses and the early signs that long-term income may be at risk.",
  Compensation: "Does the way you pay people reward the work that matters? We look at whether incentives support production that lasts.",
  Leadership: "Can your next leaders help agents grow without everything running through you? We look at coaching, ownership, and who is ready to lead.",
  "Technology & Data": "Can you follow an agent's progress from recruiting to production? We look at what each tool shows and where information gets lost between them.",
};

const HomeLeak = () => {
  const { data } = useQuery({
    queryKey: ["home-content-published"],
    queryFn: fetchPublishedHomeContent,
    staleTime: 60_000,
  });

  const c: HomeContent = data ?? DEFAULT_HOME_CONTENT;

  return (
    <>
      <Helmet>
        <title>Clientele Builders — Find the leaks in your distribution system</title>
        <meta name="description" content={c.hero.body} />
      </Helmet>

      <div className="hp-leak">
        {/* NAV */}
        <header className="hp-nav">
          <div className="container hp-nav-inner">
            <Link to="/" className="hp-wordmark">{c.nav.wordmark}</Link>
            <nav className="nav-links" />
            <a href={assessmentHref(c.nav.cta_href)} className="btn-gold nav-cta">{c.nav.cta_label}</a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-orb" aria-hidden="true" />
          <div className="hero-rule" aria-hidden="true" />
          <div className="container hero-inner">
            <span className="hero-eyebrow">{c.hero.eyebrow}</span>
            <h1 className="hero-h1">
              {c.hero.headline} <span className="accent">{c.hero.headline_accent}</span>
            </h1>
            <p className="hero-p">{c.hero.body}</p>
            <p className="hero-italic">{c.hero.italic_line}</p>
            <a href={assessmentHref(c.hero.cta_href)} className="btn-gold">
              {c.hero.cta_label} <span aria-hidden="true">→</span>
            </a>
            <p className="hero-meta">{c.hero.meta}</p>
          </div>
        </section>

        {/* WHAT WE DIAGNOSE */}
        <section id="how" className="section section-light">
          <div className="container">
            <div style={{ maxWidth: 640, marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{c.diagnose.eyebrow}</div>
              <h2 className="h2">{c.diagnose.heading}</h2>
              <p className="lead">{c.diagnose.lead}</p>
            </div>
            <div className="diag-grid">
              {c.diagnose.cards.map((card, i) => {
                const Icon = HOME_ICONS[card.icon] ?? HOME_ICONS.Activity;
                return (
                  <details key={`${card.title}-${i}`} className="card diag-card">
                    <summary className="diag-card-summary">
                      <span className="icon" style={{ marginBottom: 16, display: "block" }} aria-hidden="true">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <span className="diag-card-title">{card.title}</span>
                      <span className="diag-card-chevron" aria-hidden="true" />
                      <span className="diag-card-intro">{card.body}</span>
                    </summary>
                    <p className="diag-card-detail">{DIAGNOSE_DETAILS[card.title] ?? card.body}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="section section-light section-center">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18, justifyContent: "center" }}>
              {c.why.eyebrow}
            </div>
            <h2 className="h2" style={{ maxWidth: 640, margin: "0 auto 40px" }}>
              {c.why.heading}
            </h2>
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              {c.why.questions.map((q, i) => (
                <div key={i} className="why-q">{q}</div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--text-primary)",
                margin: "32px 0 16px",
              }}
            >
              {c.why.closer}
            </p>
            <span className="badge">{c.why.badge}</span>
          </div>
        </section>

        {/* THE DATA */}
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>{c.data.eyebrow}</div>
            <h2 className="h2" style={{ maxWidth: 560 }}>{c.data.heading}</h2>
            <p
              className="lead"
              style={{ color: "var(--text-on-dark-muted)", maxWidth: 480, margin: "0 0 36px" }}
            >
              {c.data.lead}
            </p>
            <div style={{ maxWidth: 600 }}>
              <div className="fig">
                <div className="fig-kicker">{c.data.fig_kicker}</div>
                <div className="fig-title">{c.data.fig_title}</div>
                <div className="fig-bigstat">{c.data.big_stat}</div>
                <div className="fig-stat-label">{c.data.big_stat_label}</div>
                <p className="fig-supporting">{c.data.supporting}</p>
                <div style={{ marginTop: 20 }}>
                  {c.data.rows.map((row, i) => (
                    <div key={`${row.label}-${i}`} className="fig-row">
                      <div className="fig-row-label">
                        <span style={row.accent ? { color: "var(--text-primary)", fontWeight: 600 } : undefined}>
                          {row.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 600,
                            color: row.accent ? "var(--gold)" : "var(--text-muted)",
                          }}
                        >
                          {row.value}%
                        </span>
                      </div>
                      <div className="fig-bar-track">
                        <div
                          className="fig-bar-fill"
                          style={{
                            width: `${row.value}%`,
                            background: row.accent ? "var(--gold)" : "var(--navy)",
                            opacity: row.accent ? 1 : 0.55,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", margin: "14px 0 0" }}>
                  {c.data.footnote}
                </p>
                <div className="fig-source">{c.data.source}</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="assess" className="section final-cta">
          <div className="container">
            <h2 className="final-h2">{c.final_cta.heading}</h2>
            <p className="final-p">{c.final_cta.body}</p>
            <a href={assessmentHref(c.final_cta.cta_href)} className="btn-gold">{c.final_cta.cta_label}</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hp-footer">
          <div className="container hp-footer-inner">
            <div style={{ paddingBottom: 56 }}>
              <div className="hp-footer-brand">{c.footer.brand}</div>
              <p className="hp-footer-tag">{c.footer.tagline}</p>
            </div>
            <div className="hp-footer-bottom">
              <span>{c.footer.copyright}</span>
              <span>{c.footer.sub_note}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomeLeak;

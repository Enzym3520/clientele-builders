import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  DEFAULT_HOME_CONTENT,
  HOME_ICONS,
  fetchPublishedHomeContent,
  type HomeContent,
} from "@/lib/homeContent";
import "./home-leak.css";

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
            <Link to={c.nav.cta_href} className="btn-gold nav-cta">{c.nav.cta_label}</Link>
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
            <Link to={c.hero.cta_href} className="btn-gold">
              {c.hero.cta_label} <span aria-hidden="true">→</span>
            </Link>
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
                  <a key={`${card.title}-${i}`} className="card" href="#assess">
                    <span className="icon" style={{ marginBottom: 16, display: "block" }}>
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="assess" className="section final-cta">
          <div className="container">
            <h2 className="final-h2">{c.final_cta.heading}</h2>
            <p className="final-p">{c.final_cta.body}</p>
            <Link to={c.final_cta.cta_href} className="btn-gold">{c.final_cta.cta_label}</Link>
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

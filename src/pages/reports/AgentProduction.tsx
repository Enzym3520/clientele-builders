import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import "./agent-production.css";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const AgentProduction = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--rpt-cream)", fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>2026 Insurance Agent Production Report — Clientele Builders</title>
        <meta name="description" content="Structural drivers of production, retention, and distribution efficiency — analyzed through the IDOS™ Framework. Data from IBISWorld, Statista, and proprietary analysis." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />

      <div className="rpt-cover">
        <div className="rpt-cover-bg" />
        <div className="rpt-cover-inner">
          <div className="rpt-cover-top">
            <div className="rpt-cover-brand">Clientele Builders · Intelligence Division</div>
            <div className="rpt-cover-badge">Premium Report</div>
          </div>
          <div className="rpt-cover-main">
            <div className="rpt-cover-report-type">Annual Production Intelligence Report</div>
            <div className="rpt-cover-title">Insurance Agent <em>Production</em></div>
            <div className="rpt-cover-year">Report 2026</div>
            <div className="rpt-cover-subtitle">Structural Drivers of Production, Retention, and Distribution Efficiency — Analyzed Through the Insurance Distribution Operating System (IDOS)™ Framework</div>
            <div className="rpt-cover-framework-tag"><span>Framework: Insurance Distribution Operating System (IDOS)™</span></div>
          </div>
          <div className="rpt-cover-bottom">
            <div className="rpt-cover-meta">Source: IBISWorld · Statista · IDOS™ Analysis</div>
            <div className="rpt-cover-meta">Clientele Builders · clientelebuilders.com</div>
            <div className="rpt-cover-meta">2026 Edition · Confidential</div>
          </div>
        </div>
        <div className="rpt-cover-gold-rule" />
      </div>

      <div className="rpt-contents">
        <div className="rpt-contents-inner">
          <div className="rpt-contents-header">Contents</div>
          <div className="rpt-contents-grid">
            {[
              { num: "01", title: "Executive Brief" },
              { num: "02", title: "System Breakdown — IDOS™ Framework" },
              { num: "03", title: "KPI Analysis & Benchmarks" },
              { num: "04", title: "Bottleneck Identification" },
              { num: "05", title: "Market Intelligence" },
              { num: "06", title: "Strategic Recommendations" },
              { num: "07", title: "Extended Observations" },
              { num: "08", title: "Visual Intelligence — System Maps" },
              { num: "09", title: "Distribution Assessment" },
            ].map((item) => (
              <div key={item.num} className="rpt-contents-item">
                <div className="rpt-c-num">{item.num}</div>
                <div className="rpt-c-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rpt-page">
        <div className="rpt-two-col">
          <main>
            <div className="rpt-part-banner"><div className="rpt-part-n">Section 01</div><div className="rpt-part-t">Executive <em>Brief</em></div></div>

            <div className="rpt-exec-brief">
              <div className="rpt-exec-brief-label">At a Glance</div>
              {[
                { tag: "Key Insight", val: "Production is not an individual outcome. It is the output of a coordinated distribution system. Organizations that treat it as anything else will continue to underperform." },
                { tag: "Business Impact", val: "In a commission-driven environment, no production means no revenue. Inconsistent production means unstable revenue. The system design determines the output floor and ceiling — not individual effort." },
                { tag: "Who It Affects", val: "IMO leaders, agency principals, distribution operators, and any organization where agent productivity determines organizational revenue." },
                { tag: "The Shift", val: 'From \"Who is producing?\" → To \"What system consistently produces producers?\" This reframe separates institutions from organizations.' },
              ].map((row) => (
                <div key={row.tag} className="rpt-exec-row">
                  <span className="rpt-exec-tag">{row.tag}</span>
                  <span className="rpt-exec-val">{row.val}</span>
                </div>
              ))}
            </div>

            <p>The dominant question in insurance distribution is almost always about recruiting. How many agents did we bring in? How many are in the pipeline? The data from this report suggests that question — while not wrong — is secondary to the more important one: what happens to agents after they arrive?</p>
            <p>Independent and affiliated agents account for nearly 90% of total life insurance sales in the U.S. That makes agent productivity not just an operational metric, but the primary economic lever of the entire distribution system. Organizations that systematize production compound. Organizations that leave it to chance reset.</p>

            <div className="rpt-pull-quote"><p>"The real reason your agents aren't producing isn't training — it's system design."</p></div>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 02</div><div className="rpt-part-t">System <em>Breakdown</em></div></div>

            <h2>The IDOS™ Framework — Six Stages of Distribution Performance</h2>
            <p>Production variability is cumulative. If each stage of the distribution system introduces even minor inefficiency, the total output declines nonlinearly. The IDOS™ framework maps exactly where performance degrades — and why.</p>

            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">System Map — IDOS™ Distribution Pipeline</span>
              <svg viewBox="0 0 900 210" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4A6FA5" /></marker></defs>
                <rect x="10" y="70" width="128" height="60" fill="#0D1B2A" /><text x="74" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">01</text><text x="74" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Recruiting</text><text x="74" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Candidate flow</text>
                <line x1="138" y1="100" x2="154" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="156" y="70" width="128" height="60" fill="#1A2535" /><text x="220" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">02</text><text x="220" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Onboarding</text><text x="220" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Readiness</text>
                <line x1="284" y1="100" x2="300" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="302" y="70" width="128" height="60" fill="#2E4057" /><text x="366" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">03</text><text x="366" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Activation</text><text x="366" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">First production</text>
                <line x1="430" y1="100" x2="446" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="448" y="70" width="128" height="60" fill="#2E4057" /><text x="512" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">04</text><text x="512" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Retention</text><text x="512" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Policy persistence</text>
                <line x1="576" y1="100" x2="592" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="594" y="70" width="128" height="60" fill="#1A2535" /><text x="658" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">05</text><text x="658" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Leadership</text><text x="658" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Duplication</text>
                <line x1="722" y1="100" x2="738" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="740" y="70" width="140" height="60" fill="#0D1B2A" stroke="#C8972A" strokeWidth="1" /><text x="810" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">06</text><text x="810" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Infrastructure</text><text x="810" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Visibility + data</text>
              </svg>
            </div>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 03</div><div className="rpt-part-t">KPI Analysis &amp; <em>Benchmarks</em></div></div>

            <h2>Revenue Efficiency Benchmarks — Major Carriers</h2>
            <table className="rpt-data-table">
              <thead><tr><th>Organization</th><th>Revenue / Employee</th><th>Efficiency Index</th><th>Signal</th></tr></thead>
              <tbody>
                <tr><td className="highlight">Northwestern Mutual</td><td><div className="rpt-bar-cell"><div className="rpt-bar gold" style={{ width: 100 }} /><strong>~$5.0M</strong></div></td><td>Highest observed</td><td style={{ color: "var(--rpt-green)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>HIGH</td></tr>
                <tr><td className="highlight">MassMutual</td><td><div className="rpt-bar-cell"><div className="rpt-bar sky" style={{ width: 54 }} /><strong>~$2.7M</strong></div></td><td>Mid-tier</td><td style={{ color: "var(--rpt-amber)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>MED</td></tr>
                <tr><td className="highlight">New York Life</td><td><div className="rpt-bar-cell"><div className="rpt-bar" style={{ width: 22 }} /><strong>~$1.1M</strong></div></td><td>Lower efficiency</td><td style={{ color: "var(--rpt-muted)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>LOWER</td></tr>
              </tbody>
            </table>

            <div className="rpt-insight-grid">
              <div className="rpt-insight-box gold"><div className="rpt-i-num">KPI 01</div><div className="rpt-i-head">Producing Agent % of Licensed Roster</div><div className="rpt-i-body">Top 10% organizations: 35–45% of licensed agents actively producing. Industry average: 18–25%. This gap is a system indicator — not a motivation indicator.</div></div>
              <div className="rpt-insight-box sky"><div className="rpt-i-num">KPI 02</div><div className="rpt-i-head">13-Month Persistency Rate</div><div className="rpt-i-body">Top performers: 82%+. Industry average: ~76%. Each percentage point drop has a direct multiplier effect on override income and carrier relationship quality.</div></div>
              <div className="rpt-insight-box green"><div className="rpt-i-num">KPI 03</div><div className="rpt-i-head">Agent 12-Month Retention</div><div className="rpt-i-body">Organizations with structured onboarding retain 55–70% of new agents at 12 months. Organizations without: typically below 25%.</div></div>
              <div className="rpt-insight-box slate"><div className="rpt-i-num">KPI 04</div><div className="rpt-i-head">Policies Per Active Agent / Month</div><div className="rpt-i-body">High-performing organizations: 3–5 policies per active agent monthly. Lower-performing: 1–2. The delta is almost always explained by lead flow and sales process.</div></div>
            </div>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 04</div><div className="rpt-part-t">Bottleneck <em>Identification</em></div></div>

            <h2>Where Distribution Systems Break — Predictably</h2>
            <ul className="rpt-bn-list">
              <li className="rpt-bn-item"><div className="rpt-bn-dot" /><div className="rpt-bn-body"><strong>Recruiting Bottleneck</strong><span>Volume recruiting without qualification criteria. Creates a downstream failure cascade: unqualified agents who fail quickly erode management capacity and create chargeback exposure.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot amber" /><div className="rpt-bn-body"><strong>Onboarding Bottleneck</strong><span>Unclear first steps, no defined sequence, dependence on individual relationships rather than documented process. The highest-leverage bottleneck to fix.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot" /><div className="rpt-bn-body"><strong>Activation Bottleneck</strong><span>Delayed production caused by weak feedback loops, absent accountability structures, and activity tracking that doesn't exist until it's too late.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot amber" /><div className="rpt-bn-body"><strong>Retention Bottleneck</strong><span>Policy lapse driven by poor expectation setting at point-of-sale and absent post-sale client onboarding. Chargeback exposure is almost always a symptom.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot sky" /><div className="rpt-bn-body"><strong>Leadership Bottleneck</strong><span>Inability to duplicate performance at scale. The organization grows past the span of control of its founders with no next layer of leadership ready.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot sky" /><div className="rpt-bn-body"><strong>Infrastructure Bottleneck</strong><span>Absence of data visibility. Problems are hidden until they become crises. Without dashboards and KPI tracking, leadership manages by feeling rather than fact.</span></div></li>
            </ul>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 05</div><div className="rpt-part-t">Market <em>Intelligence</em></div></div>
            <h2>Structural Dynamics Shaping the Distribution Environment</h2>
            <p>The U.S. market includes 711 life insurance companies and hundreds of millions of policies in force. The brokerage industry employs approximately 1 million workers. Agent-led distribution accounts for roughly 90% of total life insurance sales — making distribution infrastructure the primary competitive variable at scale.</p>
            <div className="rpt-pull-quote"><p>"In a mature, agent-dominated market with commodity products, system efficiency is the only durable competitive advantage."</p></div>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 06</div><div className="rpt-part-t">Strategic <em>Recommendations</em></div></div>
            <h2>Five System Moves for Distribution Leaders in 2026</h2>
            <div className="rpt-rec-grid">
              {[
                { n: "01", title: "Redefine Recruiting Success as Activation Rate, Not Headcount", body: "Measure the percentage of recruits who produce a first policy within 30 days. Set a target. Track it weekly." },
                { n: "02", title: "Document and Standardize the First 30 Days", body: "Create a written onboarding sequence that does not depend on any specific manager or trainer. Day 1 through Day 30 should be executable by anyone." },
                { n: "03", title: "Build Retention Infrastructure Before Scaling Recruiting", body: "Every dollar spent recruiting into a broken retention system accelerates loss. Fix the container before filling it." },
                { n: "04", title: "Establish a Weekly KPI Review Protocol", body: "Five metrics reviewed weekly by leadership: producing agent %, policies per active agent, 13-month persistency, new agent 90-day retention, and recruiting pipeline conversion." },
                { n: "05", title: "Align Compensation Structure With Retention Outcomes", body: "Compensation grids that reward production volume without persistency adjustments are architecturally broken." },
              ].map((rec) => (
                <div key={rec.n} className="rpt-rec-box"><span className="rpt-rec-n">{rec.n}</span><div className="rpt-rec-title">{rec.title}</div><div className="rpt-rec-body">{rec.body}</div></div>
              ))}
            </div>

            <div className="rpt-part-banner"><div className="rpt-part-n">Section 07</div><div className="rpt-part-t">Extended <em>Observations</em></div></div>
            <ul className="rpt-obs-list">
              {[
                { n: "01", t: "Organizations routinely misdiagnose growth constraints as recruiting problems when they are activation problems." },
                { n: "02", t: "Onboarding quality determines early system velocity more than recruiting volume." },
                { n: "03", t: "Retention determines whether production compounds or resets." },
                { n: "04", t: "Leadership determines whether growth scales or stalls." },
                { n: "05", t: "Infrastructure determines whether problems are visible or hidden." },
              ].map((o) => <li key={o.n} className="rpt-obs-item"><span className="rpt-obs-n">{o.n}</span><div className="rpt-obs-body">{o.t}</div></li>)}
            </ul>
          </main>

          <aside className="rpt-sidebar">
            <div className="rpt-sb-card">
              <div className="rpt-sb-head">Market Benchmarks 2026</div>
              <div className="rpt-sb-body">
                {[
                  { label: "Agent-led life insurance sales share", val: "~90%", cls: "", trend: "nt" },
                  { label: "U.S. life insurance companies", val: "711", cls: "", trend: "nt" },
                  { label: "Avg producing agent % of licensed", val: "~22%", cls: "dn", trend: "dn" },
                  { label: "Avg 13-mo persistency rate", val: "~76%", cls: "dn", trend: "dn" },
                ].map((s) => (
                  <div key={s.label} className="rpt-sb-stat">
                    <span className="rpt-sb-stat-label">{s.label}</span>
                    <span className={`rpt-sb-stat-val ${s.cls}`}>{s.val}<span className={`rpt-trend ${s.trend}`}>{s.trend === "up" ? "↑" : s.trend === "dn" ? "↓" : "→"}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rpt-sb-card">
              <div className="rpt-sb-head">Data Sources</div>
              <div className="rpt-sb-body" style={{ fontSize: 12, color: "var(--rpt-muted)", lineHeight: 1.7 }}>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}>IBISWorld — Insurance brokerage revenue and market structure</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}>Statista — U.S. life insurance market scale data</div>
                <div style={{ padding: "7px 0" }}>IDOS™ Framework — Clientele Builders proprietary distribution analysis</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="rpt-scorecard-cta">
          <div className="rpt-cta-inner">
            <div>
              <div className="rpt-cta-label">Section 09 — Distribution Assessment</div>
              <div className="rpt-cta-title">See How Your System Compares</div>
              <div className="rpt-cta-desc">The Distribution Scorecard assesses your organization across all six IDOS™ stages. You'll receive a score, a system breakdown, and your highest-leverage next move. Takes 3 minutes.</div>
            </div>
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="rpt-cta-btn">Take the Distribution Scorecard →</a>
          </div>
        </div>
      </div>

      <div style={{ background: "var(--rpt-ink)" }}>
        <div className="rpt-report-footer" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span className="rpt-footer-brand">Clientele Builders</span>
          <span>2026 Insurance Agent Production Report · Intelligence Division</span>
          <span>clientelebuilders.com · Confidential</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentProduction;

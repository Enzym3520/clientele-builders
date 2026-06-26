import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const IDOS_STAGES = ["Recruiting", "Onboarding", "Activation", "Retention", "Leadership", "Infrastructure"];

const SectionTag = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "data" | "insight" | "idos" }) => {
  const colorMap = { default: "text-[hsl(var(--steel))]", data: "text-[hsl(var(--gold))]", insight: "text-emerald-700", idos: "text-primary" };
  const lineMap = { default: "bg-border", data: "bg-[hsl(var(--gold)/0.25)]", insight: "bg-emerald-200", idos: "bg-border" };
  return (
    <div className={`font-mono text-[8px] tracking-[0.3em] uppercase ${colorMap[variant]} flex items-center gap-2.5 mb-3`}>
      {children}
      <span className={`flex-1 h-px ${lineMap[variant]}`} />
    </div>
  );
};

const DataCallout = ({ num, body, source }: { num: string; body: string; source: string }) => (
  <div className="bg-[hsl(var(--gold)/0.08)] border-l-[3px] border-accent px-5 py-4 my-4">
    <div className="font-mono text-[8px] tracking-[0.2em] text-[hsl(var(--gold))] uppercase mb-1.5">Finding {num}</div>
    <p className="text-sm text-foreground leading-[1.75]">{body}</p>
    <div className="font-mono text-[10px] text-muted-foreground mt-1.5">Source: {source}</div>
  </div>
);

const IDOSPanel = ({ text, activeStages }: { text: React.ReactNode; activeStages: string[] }) => (
  <div className="bg-primary px-6 py-5 my-5">
    <div className="font-mono text-[8px] tracking-[0.28em] text-[hsl(var(--gold-light))] uppercase mb-3">Insurance Distribution Operating System (IDOS™)</div>
    <div className="text-sm text-primary-foreground/75 leading-[1.8]">{text}</div>
    <div className="flex flex-wrap gap-2 mt-4">
      {IDOS_STAGES.map((stage) => (
        <span key={stage} className={`font-mono text-[9px] tracking-[0.1em] px-2.5 py-1 border ${activeStages.includes(stage) ? "border-accent text-[hsl(var(--gold-light))]" : "border-primary-foreground/15 text-primary-foreground/55"}`}>{stage}</span>
      ))}
    </div>
  </div>
);

const ImplicationBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[hsl(var(--fog))] border border-border px-5 py-5 my-5">
    <div className="font-mono text-[8px] tracking-[0.22em] text-[hsl(var(--steel))] uppercase mb-2">System-Level Consequence</div>
    <div className="text-sm text-foreground leading-[1.8]">{children}</div>
  </div>
);

const ClosingObs = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t-2 border-border pt-5 mt-7">
    <div className="font-mono text-[8px] tracking-[0.22em] text-muted-foreground uppercase mb-2">Closing Observation</div>
    <p className="text-sm text-[hsl(var(--slate))] leading-[1.8] italic">{children}</p>
  </div>
);

const AgentProductionBriefs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Intelligence Briefs — Agent Production Report Series — Clientele Builders</title>
        <meta name="description" content="Short-form analytical briefs derived from the 2026 Insurance Agent Production Report." />
      </Helmet>
      <Header />

      <section className="bg-[hsl(var(--ink))] relative overflow-hidden">
        <div className="absolute -top-[60px] -right-10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(var(--sky)/0.08),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="max-w-[860px] mx-auto px-6 md:px-16 py-14 md:py-[52px] relative z-10">
          <div className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase mb-3">Intelligence Briefs — Production Report Series</div>
          <h1 className="font-serif text-3xl md:text-4xl font-black text-primary-foreground leading-[1.1] mb-3.5">Insurance Distribution <em className="text-[hsl(var(--sky))] italic">Intelligence</em></h1>
          <p className="text-sm text-primary-foreground/[0.48] font-light leading-[1.75] max-w-[580px]">Short-form analytical briefs derived from the 2026 Insurance Agent Production Report. Each brief isolates one structural finding for focused examination.</p>
          <div className="flex flex-wrap gap-7 mt-6 pt-5 border-t border-primary-foreground/[0.08]">
            {[{ label: "Source", value: "2026 Agent Production Report" }, { label: "Framework", value: "IDOS™" }, { label: "Published", value: "2026" }, { label: "Briefs", value: "3 of 3" }].map((m) => (
              <div key={m.label} className="font-mono text-[9px] tracking-[0.12em] text-primary-foreground/30 uppercase">{m.label} <span className="text-primary-foreground/55">{m.value}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 md:px-16">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/[0.06]">
          {[
            { num: "001", title: "Production as a System Output in Commission-Based Distribution" },
            { num: "002", title: "Retention as a Structural Determinant of Revenue Compounding" },
            { num: "003", title: "Infrastructure as a Variance Reduction Mechanism in Agent Distribution" },
          ].map((b) => (
            <a key={b.num} href={`#brief-${b.num}`} className="bg-primary px-5 py-4 hover:bg-primary-foreground/[0.04] transition-colors block">
              <div className="font-mono text-[9px] text-accent tracking-[0.15em] mb-1.5">Brief {b.num}</div>
              <div className="text-xs text-primary-foreground/60 leading-[1.4] font-medium">{b.title}</div>
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-6 md:px-16 pb-20">
        <article id="brief-001" className="pt-16 pb-16 border-b-2 border-border">
          <div className="mb-9">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <span className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase bg-[hsl(var(--gold)/0.08)] px-3 py-1">Intelligence Brief — 001</span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">Source: 2026 Insurance Agent Production Report · IBISWorld · IDOS™</span>
            </div>
            <h2 className="font-serif text-2xl md:text-[28px] font-bold text-primary leading-[1.2] tracking-tight mb-2.5">Production as a System Output in Commission-Based Insurance Distribution</h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.7] max-w-[640px]">An analysis of the structural conditions governing agent productivity within the U.S. insurance brokerage market.</p>
          </div>
          <div className="mt-8"><SectionTag>Section 1 — Context</SectionTag><p className="text-[15px] leading-[1.88] mb-3.5">Agent production in insurance distribution is conventionally measured at the individual level. The 2026 Insurance Agent Production Report presents an alternative analytical framing: production as the output of an organizational system rather than an aggregation of individual performances.</p></div>
          <div className="mt-8"><SectionTag variant="data">Section 2 — Data</SectionTag><DataCallout num="01" body="Insurance brokerage revenue is primarily derived from commission-based income tied directly to policy premiums." source="IBISWorld — Insurance Brokers & Agencies in the US" /><DataCallout num="02" body="Agent-led distribution continues to account for the majority of life insurance sales in the U.S., with independent and affiliated agents comprising nearly 90% of total sales." source="IBISWorld — Life Insurance & Annuities in the US" /><DataCallout num="03" body="Revenue per employee benchmarks across major carriers show material variance: Northwestern Mutual (~$5.0M), MassMutual (~$2.7M), New York Life (~$1.1M)." source="IBISWorld — Company benchmarking data" /></div>
          <div className="mt-8"><SectionTag variant="insight">Section 3 — Insight</SectionTag><p className="text-[15px] leading-[1.88] mb-3.5">In a commission-based structure, the absence of production eliminates organizational revenue. The revenue-per-employee differential across major carriers — a ratio approaching 4.5x — cannot be fully attributed to organizational scale or business mix differences. This shifts the analytical focus from recruiting volume to system design.</p></div>
          <div className="mt-8"><SectionTag variant="idos">Section 4 — IDOS™ System Interpretation</SectionTag><IDOSPanel activeStages={["Activation", "Infrastructure"]} text={<>The IDOS™ framework identifies <strong className="text-primary-foreground">Activation</strong> as the stage at which individual agent capacity is converted into organizational output. <strong className="text-primary-foreground">Infrastructure</strong> governs whether activation patterns are visible, measurable, and therefore manageable at scale.</> } /></div>
          <div className="mt-8"><SectionTag>Section 5 — Structural Implication</SectionTag><ImplicationBox>When production is treated as an individual outcome rather than a system output, organizational responses to production shortfalls are directed at agents rather than at the processes governing agent behavior. This misattribution produces interventions that address surface conditions while leaving structural causes unresolved.</ImplicationBox></div>
          <ClosingObs>The correlation between organizational revenue efficiency and system-level structural differences is observable in available benchmarking data. The present data is sufficient to challenge the assumption that production variance is primarily explained by individual agent differences.</ClosingObs>
        </article>

        <article id="brief-002" className="pt-16 pb-16 border-b-2 border-border">
          <div className="mb-9">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <span className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase bg-[hsl(var(--gold)/0.08)] px-3 py-1">Intelligence Brief — 002</span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">Source: 2026 Insurance Agent Production Report · IBISWorld · IDOS™</span>
            </div>
            <h2 className="font-serif text-2xl md:text-[28px] font-bold text-primary leading-[1.2] tracking-tight mb-2.5">Retention as a Structural Determinant of Revenue Compounding in Insurance Distribution</h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.7] max-w-[640px]">An examination of retention dynamics and their systemic effect on the revenue accumulation pattern of insurance distribution organizations.</p>
          </div>
          <div className="mt-8"><SectionTag>Section 1 — Context</SectionTag><p className="text-[15px] leading-[1.88]">The 2026 Insurance Agent Production Report identifies retention as a compounding mechanism within the distribution system, distinct from its conventional treatment as a measure of client satisfaction or agent loyalty.</p></div>
          <div className="mt-8"><SectionTag variant="data">Section 2 — Data</SectionTag><DataCallout num="01" body="Insurance brokers rely on ongoing client relationships and service to maintain policies in force and sustain revenue streams." source="IBISWorld — Insurance Brokers & Agencies in the US" /><DataCallout num="02" body="The IDOS™ structure identifies Retention as the fourth of six stages at which performance can degrade." source="IDOS™ Framework — Clientele Builders" /><DataCallout num="03" body="Higher-performing organizations sustain 13-month persistency rates above 80% while industry averages are observed in the mid-70s range." source="IDOS™ interpretive analysis; IBISWorld supporting data" /></div>
          <div className="mt-8"><SectionTag variant="insight">Section 3 — Insight</SectionTag><p className="text-[15px] leading-[1.88]">When retention is sustained, prior production continues contributing to current-period revenue — creating an accumulation effect. When retention is low, each period's revenue depends primarily on new activity. Organizations with equivalent production rates can diverge materially in long-term revenue accumulation based solely on retention performance.</p></div>
          <div className="mt-8"><SectionTag variant="idos">Section 4 — IDOS™ System Interpretation</SectionTag><IDOSPanel activeStages={["Onboarding", "Retention", "Infrastructure"]} text={<>The IDOS™ identifies <strong className="text-primary-foreground">Retention</strong> as the stage at which the cumulative value of prior system activity is either preserved or forfeited. <strong className="text-primary-foreground">Onboarding</strong> and <strong className="text-primary-foreground">Infrastructure</strong> are most directly associated with retention outcomes.</> } /></div>
          <div className="mt-8"><SectionTag>Section 5 — Structural Implication</SectionTag><ImplicationBox>Organizations that experience chronic retention failure operate under a structural constraint that limits revenue accumulation regardless of production volume. The financial consequence is not merely lower revenue; it is a structural inability to compound.</ImplicationBox></div>
          <ClosingObs>Organizations that treat retention as a downstream consequence of production, rather than as a structural determinant of long-term revenue behavior, are operating under an analytical framework inconsistent with the compounding mechanics of commission-based distribution economics.</ClosingObs>
        </article>

        <article id="brief-003" className="pt-16 pb-16">
          <div className="mb-9">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <span className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase bg-[hsl(var(--gold)/0.08)] px-3 py-1">Intelligence Brief — 003</span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">Source: 2026 Insurance Agent Production Report · IBISWorld · IDOS™</span>
            </div>
            <h2 className="font-serif text-2xl md:text-[28px] font-bold text-primary leading-[1.2] tracking-tight mb-2.5">Infrastructure as a Variance Reduction Mechanism in Agent-Based Insurance Distribution</h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.7] max-w-[640px]">An analysis of how operational infrastructure affects the distribution of performance outcomes across agent populations.</p>
          </div>
          <div className="mt-8"><SectionTag>Section 1 — Context</SectionTag><p className="text-[15px] leading-[1.88]">The 2026 Insurance Agent Production Report advances an alternative structural explanation: that operational infrastructure determines the width of performance variance, independent of the underlying agent population.</p></div>
          <div className="mt-8"><SectionTag variant="data">Section 2 — Data</SectionTag><DataCallout num="01" body="IBISWorld highlights increased adoption of automation and specialized roles to manage complexity in insurance operations." source="IBISWorld — Insurance Brokers & Agencies in the US" /><DataCallout num="02" body="The IDOS™ structure identifies Infrastructure as the sixth stage — governing visibility, diagnostics, and the organization's capacity to detect and respond to performance degradation." source="IDOS™ Framework — Clientele Builders" /></div>
          <div className="mt-8"><SectionTag variant="insight">Section 3 — Insight</SectionTag><p className="text-[15px] leading-[1.88]">Infrastructure functions as a variance reduction mechanism through standardization and visibility. The combined effect is a narrowing of the variance band across the agent population, producing more predictable aggregate output and more reliable revenue forecasting.</p></div>
          <div className="mt-8"><SectionTag variant="idos">Section 4 — IDOS™ System Interpretation</SectionTag><IDOSPanel activeStages={["Infrastructure"]} text={<>The IDOS™ identifies <strong className="text-primary-foreground">Infrastructure</strong> as the system component responsible for organizational visibility across all other IDOS™ stages. The absence of Infrastructure structurally prevents the organization from applying systemic corrective responses to performance degradation in any upstream stage.</> } /></div>
          <div className="mt-8"><SectionTag>Section 5 — Structural Implication</SectionTag><ImplicationBox>Organizations that scale agent population without concurrent investment in infrastructure do not achieve proportional output growth. Scale amplifies existing process inconsistencies rather than resolving them.</ImplicationBox></div>
          <ClosingObs>Infrastructure is a necessary condition for variance reduction at scale. Organizations seeking to improve the predictability of aggregate production outcomes would benefit from treating infrastructure investment as a structural prerequisite rather than an operational enhancement.</ClosingObs>
        </article>
      </div>

      <section className="bg-primary">
        <div className="max-w-[860px] mx-auto px-6 md:px-16 py-16 text-center">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[hsl(var(--gold-light))] uppercase block mb-4">Continue the Analysis</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Read the Full Report</h2>
          <p className="text-primary-foreground/50 mb-8 max-w-md mx-auto text-sm">These briefs are derived from the 2026 Insurance Agent Production Report. Read the full analysis with complete data visualizations, KPI benchmarks, and strategic recommendations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reports/agent-production" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"><FileText className="h-4 w-4" />Full Report<ArrowRight className="h-4 w-4" /></Link>
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all">Take the Scorecard<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentProductionBriefs;

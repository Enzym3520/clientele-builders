import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, ShieldCheck, Activity, Sparkles, LineChart } from "lucide-react";

import { BlueprintBackground } from "@/components/diagnostic/BlueprintBackground";
import { DiagnosticLogo } from "@/components/diagnostic/DiagnosticLogo";
import { SectionIdentifier } from "@/components/diagnostic/SectionIdentifier";
import { DiagnosticCard } from "@/components/diagnostic/DiagnosticCard";
import { TechnicalDivider } from "@/components/diagnostic/TechnicalDivider";
import { FindingCallout } from "@/components/diagnostic/FindingCallout";
import { InspectionStamp } from "@/components/diagnostic/InspectionStamp";
import { ChalkNote } from "@/components/diagnostic/ChalkNote";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const CLIP = { clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" };

const MONO: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
};

const CAPABILITIES = [
  {
    id: "01", icon: Search,
    title: "Revenue Leak Diagnostics",
    finding: "Identify hidden operational bottlenecks impacting growth.",
    severity: "critical" as const,
    action: "Map every step from lead to policy. Find the biggest drop-off point first.",
  },
  {
    id: "02", icon: BarChart3,
    title: "Distribution Benchmarking",
    finding: "Compare systems against industry patterns and performance indicators.",
    severity: "moderate" as const,
    action: "Look at your numbers against category benchmarks. Find where you're below the line.",
  },
  {
    id: "03", icon: ShieldCheck,
    title: "Trust Infrastructure Analysis",
    finding: "Measure where consumer and agent trust weaken across the organization.",
    severity: "critical" as const,
    action: "Find the 3 moments where agents or clients feel let down. Fix those first.",
  },
  {
    id: "04", icon: Activity,
    title: "Persistency Visibility",
    finding: "Understand where long-term value is leaking after placement.",
    severity: "moderate" as const,
    action: "Track which agents have the worst lapse rates. That's your repair target.",
  },
  {
    id: "05", icon: Sparkles,
    title: "AI & Attention Analysis",
    finding: "Track how AI, social platforms, and digital behavior are reshaping discovery.",
    severity: "minor" as const,
    action: "Search for your organization the way a new agent would. What do they see?",
  },
  {
    id: "06", icon: LineChart,
    title: "Operational Reporting",
    finding: "Research-backed intelligence designed for leadership visibility.",
    severity: "moderate" as const,
    action: "Pick 5 numbers that would tell you if your business is healthy. Track those weekly.",
  },
];

const REPORT_EXAMPLES = [
  { number: "01", title: "Trust Economy Report", summary: "Where consumer and agent trust is weakening across distribution — and what's causing it." },
  { number: "02", title: "Distribution Trends Brief", summary: "How the distribution landscape is shifting and what leading organizations are doing differently." },
  { number: "03", title: "AI Readiness Report", summary: "How AI is reshaping how agents and clients find partners — and what it means for your org." },
  { number: "04", title: "Consumer Attention Report", summary: "Where attention is going, what's competing for it, and how to show up where it matters." },
  { number: "05", title: "Event Intelligence Report", summary: "What's working in field events, conventions, and live recruiting — and what's stopped working." },
  { number: "06", title: "Insurance Distribution Outlook", summary: "The big picture: market trends, regulatory shifts, and where the industry is heading next." },
];

const MeasurementRule = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-0 w-full">
    <div className="w-px h-2.5 shrink-0" style={{ backgroundColor: light ? "rgba(200,151,42,0.25)" : "rgba(200,151,42,0.2)" }} />
    <div className="flex-1 h-px" style={{ backgroundColor: light ? "rgba(200,151,42,0.18)" : "rgba(200,151,42,0.12)" }} />
    <div className="w-px h-2.5 shrink-0" style={{ backgroundColor: light ? "rgba(200,151,42,0.25)" : "rgba(200,151,42,0.2)" }} />
  </div>
);

const BlueprintAnnotation = ({ label, value, className = "" }: { label: string; value: string; className?: string }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="w-3 h-px" style={{ backgroundColor: "rgba(211,154,34,0.4)" }} />
    <span className="text-[7px] tracking-[0.2em] uppercase opacity-40" style={{ ...MONO, color: "#d39a22" }}>
      {label}
    </span>
    <span className="text-[7px] tracking-[0.12em] opacity-30" style={{ ...MONO, color: "#9eabb8" }}>
      {value}
    </span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cb-white, #f7f5ef)" }}>
      <Helmet>
        <title>Clientele Builders — Distribution Intelligence for Insurance</title>
        <meta name="description" content="Distribution intelligence for insurance. We surface revenue leaks across recruiting, onboarding, sales, persistency, and leadership." />
        <link rel="canonical" href="https://www.clientelebuilders.com/" />
      </Helmet>
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <BlueprintBackground className="min-h-[90vh] flex items-center">
        <div className="container max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MeasurementRule light />
              </div>
              <span
                className="block mb-3 text-[9px] tracking-[0.35em] uppercase"
                style={{ ...MONO, color: "rgba(200,151,42,0.75)" }}
              >
                Distribution Intelligence
              </span>
              <h1
                className="cb-headline font-serif font-black leading-[1.06] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: "#f7f5ef" }}
              >
                Revenue leaks hide inside{" "}
                <span style={{ color: "#d39a22" }}>distribution systems.</span>
              </h1>

              <p className="leading-relaxed mb-6" style={{ color: "rgba(247,245,239,0.6)", fontSize: "1.05rem" }}>
                We help life insurance IMOs and agencies find where revenue leaks — across trust, recruiting, sales, onboarding, and retention.
              </p>

              <FindingCallout
                classification="What We Know"
                finding="Most organizations treat symptoms — high turnover, low production, lapsing policies. We find what's causing them."
                light={false}
              />

              <p className="font-serif italic mt-6 mb-10 text-lg" style={{ color: "rgba(247,245,239,0.35)" }}>
                We show you where to look before it costs you.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SCORECARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-all hover:brightness-110 active:scale-[0.97] px-7 py-4"
                  style={{
                    ...CLIP,
                    backgroundColor: "#d39a22",
                    color: "var(--cb-navy-900, #0a1928)",
                    ...MONO,
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Find Your Distribution Leaks <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/intelligence"
                  className="inline-flex items-center gap-2 font-medium transition-all hover:border-white/40 hover:text-white px-7 py-4"
                  style={{
                    ...CLIP,
                    border: "1px solid rgba(247,245,239,0.18)",
                    color: "rgba(247,245,239,0.6)",
                    ...MONO,
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore Our Intelligence <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-8">
                <MeasurementRule light />
              </div>
            </div>

            {/* Right: diagnostic logo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <DiagnosticLogo size={300} animated />
              </div>
            </div>
          </div>
        </div>

        {/* Chalk notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute top-10 left-6 opacity-55">
            <ChalkNote text="it's not the people." rotate={-4} size={21} />
          </div>
          <div className="absolute top-[30%] right-5 opacity-40">
            <ChalkNote text="8 systems. we map all of them." rotate={3} size={17} />
          </div>
          <div className="absolute bottom-20 left-8 opacity-50">
            <ChalkNote text="scroll. your answer is down here." arrow="down" rotate={-2} size={20} weight={700} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#d39a22", opacity: 0.6 }} />
      </BlueprintBackground>

      {/* ── PROCESS STRIP ────────────────────────────────────────── */}
      <div style={{ backgroundColor: "var(--cb-navy-950, #06111d)" }}>
        <div className="container max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {["Inspect the System", "Locate the Leak", "Understand the Cause", "Design the Repair", "Measure the Result"].map((s, i) => (
              <span
                key={s}
                className="text-[9px] tracking-[0.22em] uppercase"
                style={{
                  ...MONO,
                  color: i === 1 ? "#d39a22" : "rgba(247,245,239,0.35)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPABILITIES ─────────────────────────────────────────── */}
      <section className="relative bp-corner-tl bp-corner-br" style={{ backgroundColor: "var(--cb-white, #f7f5ef)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(18,59,98,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18,59,98,0.04) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container max-w-5xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="flex items-center justify-between mb-2">
            <BlueprintAnnotation label="section" value="01 / 03" />
            <BlueprintAnnotation label="classification" value="What We Actually Do" />
          </div>
          <MeasurementRule />
          <div className="mt-8">
            <SectionIdentifier number="01" label="The Diagnostic" />
          </div>

          <div className="max-w-2xl mb-8">
            <h2
              className="cb-headline font-serif font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--cb-navy-900, #0a1928)" }}
            >
              We find where your distribution is bleeding.
            </h2>
            <p className="text-[15px] mb-6" style={{ color: "#5a6a7a" }}>
              Six areas. Every one of them a potential leak. We look at all of them — and tell you exactly which one is costing you the most.
            </p>
            <ChalkNote text="hover each card to see the first action →" rotate={-1} size={18} light />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(c => (
              <DiagnosticCard
                key={c.id}
                id={c.id}
                title={c.title}
                finding={c.finding}
                severity={c.severity}
                action={c.action}
                status="Performance Leak Detected"
              />
            ))}
          </div>

          <div className="mt-12">
            <MeasurementRule />
            <div className="flex items-center justify-end mt-2">
              <BlueprintAnnotation label="areas reviewed" value="06 / 06" />
            </div>
          </div>
        </div>
      </section>

      <TechnicalDivider className="container max-w-5xl mx-auto px-6" />

      {/* ── INTELLIGENCE ─────────────────────────────────────────── */}
      <BlueprintBackground density="full" className="py-24 md:py-32">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <BlueprintAnnotation label="section" value="02 / 03" />
            <BlueprintAnnotation label="classification" value="Industry Intelligence" />
          </div>
          <MeasurementRule light />
          <div className="mt-8">
            <SectionIdentifier number="02" label="The Intelligence" light />
          </div>

          <div className="max-w-2xl mb-12">
            <h2
              className="cb-headline font-serif font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#f7f5ef" }}
            >
              We study how distribution actually works.
            </h2>
            <p className="text-[15px]" style={{ color: "rgba(247,245,239,0.5)" }}>
              Research-backed intelligence on recruiting, trust, persistency, and market shifts — written for leaders who need to act on it, not file it away.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {REPORT_EXAMPLES.map(r => (
              <div
                key={r.number}
                className="group border p-6 transition-all duration-300 hover:border-[#d39a22]/50 cursor-pointer relative"
                style={{ ...CLIP, borderColor: "rgba(200,151,42,0.15)", backgroundColor: "rgba(247,245,239,0.04)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#d39a22] opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r opacity-0 group-hover:opacity-40 transition-opacity" style={{ borderColor: "#d39a22" }} />
                <span className="text-[9px] tracking-[0.25em] uppercase block mb-4" style={{ ...MONO, color: "#d39a22" }}>
                  CB Intelligence · Report {r.number}
                </span>
                <h3 className="cb-headline font-serif text-base font-bold mb-2 leading-snug" style={{ color: "#f7f5ef" }}>
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(247,245,239,0.4)" }}>
                  {r.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 transition-all hover:gap-3"
              style={{ ...MONO, color: "#d39a22", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              View All Intelligence Reports <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12">
            <MeasurementRule light />
          </div>
        </div>
      </BlueprintBackground>

      {/* ── REPAIR / WHAT YOU GET ────────────────────────────────── */}
      <section className="relative bp-corner-tl bp-corner-br" style={{ backgroundColor: "var(--cb-paper, #e8e5dc)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(18,59,98,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,59,98,0.045) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container max-w-5xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="flex items-center justify-between mb-2">
            <BlueprintAnnotation label="section" value="03 / 03" />
            <BlueprintAnnotation label="classification" value="Repair Protocol" />
          </div>
          <MeasurementRule />
          <div className="mt-8">
            <SectionIdentifier number="03" label="The Repair" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="cb-headline font-serif font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--cb-navy-900, #0a1928)" }}
              >
                We don't just tell you what's broken. We show you how to fix it.
              </h2>
              <p className="leading-relaxed mb-4 text-[15px]" style={{ color: "#5a6a7a" }}>
                Every diagnostic ends with a clear action plan — prioritized by impact, written in plain language, and built to be implemented. Not filed away.
              </p>
              <p className="leading-relaxed text-[15px]" style={{ color: "#5a6a7a" }}>
                And we build in a simple way to track whether it's working — so you can see results in real time, not just hope for them.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <InspectionStamp label="Leak" sublabel="Located" variant="gold" size={80} />
                <div>
                  <span className="block mb-1 text-[9px] tracking-[0.25em] uppercase" style={{ ...MONO, color: "#d39a22" }}>
                    Classification
                  </span>
                  <p className="font-serif text-base font-bold" style={{ color: "var(--cb-navy-900, #0a1928)" }}>
                    Revenue Leak Found
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#9eabb8" }}>Problem confirmed · Fix plan ready</p>
                </div>
              </div>
              <TechnicalDivider />
              <div className="flex items-center gap-6">
                <InspectionStamp label="Repair" sublabel="Planned" variant="muted" size={80} />
                <div>
                  <span className="block mb-1 text-[9px] tracking-[0.25em] uppercase" style={{ ...MONO, color: "rgba(158,171,184,0.6)" }}>
                    Outcome
                  </span>
                  <p className="font-serif text-base font-bold" style={{ color: "var(--cb-navy-900, #0a1928)" }}>
                    Real, Trackable Results
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#9eabb8" }}>Measured week by week · You'll see it working</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <MeasurementRule />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--cb-navy-950, #06111d)" }}>
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span
            className="block mb-6 text-[9px] tracking-[0.35em] uppercase"
            style={{ ...MONO, color: "rgba(200,151,42,0.5)" }}
          >
            Begin the Process
          </span>
          <h2
            className="cb-headline font-serif font-black leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f7f5ef" }}
          >
            You can't fix what you can't see.
          </h2>
          <p className="mb-8 text-[15px]" style={{ color: "rgba(247,245,239,0.4)" }}>
            Find your distribution leaks. Understand what's causing them. Get a plan to fix them — in that order.
          </p>

          <div className="mb-8">
            <ChalkNote text="start here. this part is free. ↓" rotate={-2} size={22} weight={700} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition-all hover:brightness-110 active:scale-[0.97] px-8 py-4"
              style={{
                ...CLIP,
                backgroundColor: "#d39a22",
                color: "var(--cb-navy-900, #0a1928)",
                ...MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Find Your Distribution Leaks <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-medium transition-all hover:border-white/40 hover:text-white px-8 py-4"
              style={{
                ...CLIP,
                border: "1px solid rgba(247,245,239,0.15)",
                color: "rgba(247,245,239,0.55)",
                ...MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Schedule A Strategy Call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <TechnicalDivider className="mt-16" light />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, ShieldCheck, Activity, Sparkles, LineChart } from "lucide-react";

import { BlueprintBackground } from "@/components/diagnostic/BlueprintBackground";
import { DiagnosticLogo } from "@/components/diagnostic/DiagnosticLogo";
import { SectionIdentifier } from "@/components/diagnostic/SectionIdentifier";
import { SystemWheel } from "@/components/diagnostic/SystemWheel";
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
    id: "01", icon: Search, title: "Where Is the Money Going?",
    finding: "Most organizations lose revenue in places they never look. We trace every dollar from first contact to placed policy — and show you exactly where it disappears.",
    severity: "critical" as const,
    action: "Map every step from lead to policy. Find the biggest drop-off point first.",
  },
  {
    id: "02", icon: BarChart3, title: "Are Your Agents Actually Producing?",
    finding: "Recruiting numbers look good on paper. But most new agents never reach real production. We find out why — and what's getting in the way.",
    severity: "moderate" as const,
    action: "Look at every agent hired in the last 90 days. How many wrote a policy?",
  },
  {
    id: "03", icon: ShieldCheck, title: "Do People Trust You?",
    finding: "Agents leave. Clients don't renew. Referrals dry up. Trust is breaking down somewhere — and it's costing you more than you think.",
    severity: "critical" as const,
    action: "Find the 3 moments where agents or clients feel let down. Fix those first.",
  },
  {
    id: "04", icon: Activity, title: "Are Policies Staying on the Books?",
    finding: "Getting a policy placed is only half the job. If it lapses 6 months later, that revenue is gone. We track where policies are falling off — and why.",
    severity: "moderate" as const,
    action: "Track which agents have the worst lapse rates. That's your repair target.",
  },
  {
    id: "05", icon: Sparkles, title: "Can People Even Find You?",
    finding: "AI tools and search are changing how agents and clients pick partners. If your organization isn't showing up, your competition is. We check where you stand.",
    severity: "minor" as const,
    action: "Search for your organization the way a new agent would. What do they see?",
  },
  {
    id: "06", icon: LineChart, title: "Does Your Team Know What's Working?",
    finding: "Most leaders are flying blind. They know something is wrong — but can't pinpoint what, or where. We give you a clear picture of what's performing and what isn't.",
    severity: "moderate" as const,
    action: "Pick 5 numbers that would tell you if your business is healthy. Track those weekly.",
  },
];

const REPORT_EXAMPLES = [
  { number: "01", label: "Q1 2026", title: "The Trust Report", summary: "Why agents and clients are losing confidence in distribution organizations — and where it starts." },
  { number: "02", label: "Q1 2026", title: "The Recruiting Reality", summary: "Who's actually staying, who's leaving, and what the numbers say about how agents are brought in." },
  { number: "03", label: "Q1 2026", title: "The Activation Problem", summary: "Most agents never write their second policy. Here's why — and what stops it from happening." },
  { number: "04", label: "Q1 2026", title: "AI Is Changing the Game", summary: "How agents and clients are using AI to find partners — and what it means for your organization." },
];

const REPAIR_DELIVERABLES = [
  { step: "01", title: "A Full System Map", desc: "We document every part of your business — how it works, what it connects to, and where the weak spots are." },
  { step: "02", title: "A Leak Report", desc: "A plain-language breakdown of exactly what's broken, why it's happening, and how serious each problem is." },
  { step: "03", title: "A Repair Plan", desc: "A step-by-step guide on what to fix first, what to change, and what good looks like when it's done." },
  { step: "04", title: "A Way to Measure Progress", desc: "A simple set of numbers to watch each week — so you know the repair is actually working." },
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

/** The cascade — shows how one broken link creates all the others */
const CascadeChain = () => {
  const steps = [
    {
      n: "01", phase: "RECRUIT",
      issue: "You bring in agents who never produce. Time, money, and energy — spent on the wrong people.",
      leak: "budget & bandwidth",
    },
    {
      n: "02", phase: "ONBOARD",
      issue: "No structure. New agents get licensed, then go quiet. Nobody shows them what to do next.",
      leak: "agent momentum",
    },
    {
      n: "03", phase: "PRODUCE",
      issue: "Everyone selling differently. No consistent process. Results all over the map.",
      leak: "revenue potential",
    },
    {
      n: "04", phase: "PERSIST",
      issue: "Policies lapse before they pay off. Business you worked to place walks right back out.",
      leak: "placed revenue",
    },
  ];

  return (
    <div className="mt-2">
      {steps.map((step, i) => (
        <div key={step.n}>
          <div
            className="flex items-start gap-4 py-4"
            style={{ borderBottom: i < steps.length - 1 ? "1px solid rgba(158,171,184,0.18)" : "none" }}
          >
            <div className="shrink-0 w-6 pt-0.5">
              <span className="text-[8px] tracking-[0.3em] uppercase block" style={{ ...MONO, color: "rgba(200,151,42,0.55)" }}>{step.n}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="text-[10px] tracking-[0.28em] font-bold" style={{ ...MONO, color: "var(--cb-navy-900,#0a1928)" }}>
                  {step.phase}
                </span>
                <span className="text-[8px] tracking-[0.15em] uppercase" style={{ ...MONO, color: "rgba(192,57,43,0.65)" }}>
                  ↗ {step.leak} leaking
                </span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "#5a6a7a" }}>{step.issue}</p>
            </div>
          </div>

          {i < steps.length - 1 && (
            <div className="flex items-center gap-2 pl-10 py-1">
              <span style={{ color: "rgba(200,151,42,0.45)", fontSize: 12 }}>↓</span>
              <span className="text-[8px] tracking-[0.2em] uppercase" style={{ ...MONO, color: "rgba(158,171,184,0.5)" }}>
                makes this worse
              </span>
            </div>
          )}
        </div>
      ))}

      {/* The insight line */}
      <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,151,42,0.15)" }}>
        <div className="flex items-start gap-3">
          <div className="w-px self-stretch mt-1 shrink-0" style={{ backgroundColor: "rgba(200,151,42,0.35)", minWidth: 1 }} />
          <p className="text-[12px] leading-relaxed font-medium" style={{ color: "var(--cb-navy-900,#0a1928)" }}>
            Most organizations try to fix #3 or #4. The break is almost always at #1.{" "}
            <span style={{ color: "#d39a22" }}>Fix upstream first.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cb-white, #f7f5ef)" }}>
      <Helmet>
        <title>Clientele Builders — Insurance Distribution Intelligence</title>
        <meta name="description" content="Clientele Builders diagnoses inefficiencies inside insurance distribution organizations — across recruiting, activation, production, persistency, leadership, and growth." />
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
                Insurance Distribution Intelligence
              </span>
              <h1
                className="cb-headline font-serif font-black leading-[1.06] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: "#f7f5ef" }}
              >
                Your business is leaking money.{" "}
                <span style={{ color: "#d39a22" }}>We find exactly where.</span>
              </h1>

              <p className="leading-relaxed mb-6" style={{ color: "rgba(247,245,239,0.6)", fontSize: "1.05rem" }}>
                Most IMO owners are managing symptoms — high turnover, low production, policies that lapse. We look at the system underneath and find what's actually causing them.
              </p>

              <FindingCallout
                classification="The Uncomfortable Truth"
                finding="Your agents aren't the problem. The system they're working inside is. And most organizations never look at the system."
                light={false}
              />

              <p className="font-serif italic mt-6 mb-10 text-lg" style={{ color: "rgba(247,245,239,0.35)" }}>
                Diagnose first. Then fix. In that order.
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
                  Start the Diagnostic <ArrowRight className="h-3.5 w-3.5" />
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

        {/* Purposeful chalk notes — each one says something real */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          {/* Top-left — the key reframe */}
          <div className="absolute top-10 left-6 opacity-55">
            <ChalkNote text="it's not the people." rotate={-4} size={21} />
          </div>
          {/* Near logo — affirms the system framing */}
          <div className="absolute top-[30%] right-5 opacity-40">
            <ChalkNote text="8 systems. we map all of them." rotate={3} size={17} />
          </div>
          {/* Points the visitor downward */}
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

      {/* ── 01 — THE PROBLEM ─────────────────────────────────────── */}
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
            <BlueprintAnnotation label="section" value="01 / 05" />
            <BlueprintAnnotation label="classification" value="Problem Identification" />
          </div>
          <MeasurementRule />
          <div className="mt-8">
            <SectionIdentifier number="01" label="The Problem" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: setup */}
            <div>
              <h2
                className="cb-headline font-serif font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--cb-navy-900, #0a1928)" }}
              >
                The problems you see aren't the real problem.
              </h2>
              <p className="leading-relaxed mb-5 text-[15px]" style={{ color: "#5a6a7a" }}>
                You feel it. Agents aren't producing like they should. People are leaving. Growth has stalled. The numbers look bad — but they don't tell you <em>why</em>.
              </p>
              <p className="leading-relaxed mb-5 text-[15px]" style={{ color: "#5a6a7a" }}>
                That's because turnover, low production, and lapsing policies aren't separate problems. They're symptoms of a broken system underneath — and they're connected in a specific order.
              </p>
              <FindingCallout
                classification="What We See"
                finding="Every organization we've worked with thought they had a sales problem or a people problem. What they actually had was a system problem. The symptoms pointed in the wrong direction."
                light
              />
              <div className="mt-4 ml-1">
                <ChalkNote text="see how it connects →" rotate={-2} size={19} light underline />
              </div>
            </div>

            {/* Right: the cascade — THIS is the teaching moment */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,151,42,0.2)" }} />
                <span className="text-[8px] tracking-[0.3em] uppercase" style={{ ...MONO, color: "rgba(200,151,42,0.55)" }}>
                  How One Problem Creates All the Others
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,151,42,0.2)" }} />
              </div>
              <CascadeChain />
              <div className="mt-4">
                <ChalkNote text="does this sound familiar?" rotate={1} size={18} light />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <MeasurementRule />
            <div className="flex items-center justify-end mt-2">
              <BlueprintAnnotation label="status" value="Leak Confirmed" />
            </div>
          </div>
        </div>
      </section>

      <TechnicalDivider className="container max-w-5xl mx-auto px-6" />

      {/* ── 02 — THE SYSTEM ──────────────────────────────────────── */}
      <BlueprintBackground density="light" className="py-24 md:py-32">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <BlueprintAnnotation label="section" value="02 / 05" />
            <BlueprintAnnotation label="classification" value="System Mapping" />
          </div>
          <MeasurementRule light />
          <div className="mt-8">
            <SectionIdentifier number="02" label="The System" light />
          </div>

          <div className="text-center mb-12">
            <h2
              className="cb-headline font-serif font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#f7f5ef" }}
            >
              Your business runs on eight systems. Most owners only see two.
            </h2>
            <p className="max-w-2xl mx-auto text-[15px]" style={{ color: "rgba(247,245,239,0.5)" }}>
              Recruiting. Onboarding. Marketing. Sales process. Persistency. Compensation. Leadership. Technology. Every one of them is running right now — some well, some not. The ones that aren't are where your money is going.
            </p>
          </div>

          <div className="flex justify-center">
            <SystemWheel size={400} />
          </div>

          <p
            className="text-center mt-8 text-[9px] tracking-[0.22em] uppercase"
            style={{ ...MONO, color: "rgba(200,151,42,0.45)" }}
          >
            Hover each division to inspect · Mobile: tap to select
          </p>

          {/* Post-wheel insight */}
          <div
            className="mt-10 max-w-2xl mx-auto border-l-2 pl-6 py-2"
            style={{ borderColor: "rgba(200,151,42,0.35)" }}
          >
            <p className="font-serif italic text-[15px] mb-2" style={{ color: "rgba(247,245,239,0.65)" }}>
              "Most IMOs have 5 or 6 of these working decently. The 2 or 3 that aren't? That's where all your growth is trapped."
            </p>
            <ChalkNote text="which ones are yours?" rotate={-1} size={18} />
          </div>

          <div className="mt-10">
            <MeasurementRule light />
          </div>
        </div>
      </BlueprintBackground>

      {/* ── 03 — THE DIAGNOSTIC ──────────────────────────────────── */}
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
            <BlueprintAnnotation label="section" value="03 / 05" />
            <BlueprintAnnotation label="classification" value="Diagnostic Review" />
          </div>
          <MeasurementRule />
          <div className="mt-8">
            <SectionIdentifier number="03" label="The Diagnostic" />
          </div>

          <div className="max-w-2xl mb-3">
            <h2
              className="cb-headline font-serif font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--cb-navy-900, #0a1928)" }}
            >
              Six questions we ask every organization.
            </h2>
            <p className="text-[15px] mb-2" style={{ color: "#5a6a7a" }}>
              We don't guess. We look at the evidence, find the real problem, and tell you exactly what to do about it. Read through these — at least one will stop you cold.
            </p>
          </div>

          {/* Self-identification prompt */}
          <div className="mb-10 flex items-center gap-3">
            <ChalkNote text="which one sounds most like you right now?" rotate={-1} size={20} light weight={700} />
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

          {/* Insight after cards */}
          <div
            className="mt-12 p-6 border"
            style={{ borderColor: "rgba(200,151,42,0.25)", backgroundColor: "rgba(10,25,40,0.04)" }}
          >
            <p className="font-serif text-base leading-relaxed" style={{ color: "var(--cb-navy-900,#0a1928)" }}>
              If you recognized your organization in more than two of these — that's actually a good sign.{" "}
              <strong>It means the problems are visible.</strong>{" "}
              Visible problems can be fixed. Most organizations we work with didn't know where to look.
            </p>
          </div>

          <div className="mt-10">
            <MeasurementRule />
            <div className="flex items-center justify-end mt-2">
              <BlueprintAnnotation label="areas reviewed" value="06 / 06" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 — THE INTELLIGENCE ────────────────────────────────── */}
      <BlueprintBackground density="full" className="py-24 md:py-32">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <BlueprintAnnotation label="section" value="04 / 05" />
            <BlueprintAnnotation label="classification" value="Intelligence Archive" />
          </div>
          <MeasurementRule light />
          <div className="mt-8">
            <SectionIdentifier number="04" label="The Intelligence" light />
          </div>

          <div className="max-w-2xl mb-12">
            <h2
              className="cb-headline font-serif font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#f7f5ef" }}
            >
              We study what's happening in the industry so you don't have to.
            </h2>
            <p className="text-[15px]" style={{ color: "rgba(247,245,239,0.5)" }}>
              Real research on recruiting trends, production patterns, persistency data, and what's changing in the market — written clearly, so you can act on it right away. No fluff. No filler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {REPORT_EXAMPLES.map(r => (
              <div
                key={r.number}
                className="group border p-6 transition-all duration-300 hover:border-[#d39a22]/50 cursor-pointer relative"
                style={{ ...CLIP, borderColor: "rgba(200,151,42,0.15)", backgroundColor: "rgba(247,245,239,0.04)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#d39a22] opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r opacity-0 group-hover:opacity-40 transition-opacity" style={{ borderColor: "#d39a22" }} />
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[9px] tracking-[0.25em] uppercase" style={{ ...MONO, color: "#d39a22" }}>
                    CB Intelligence · Report {r.number}
                  </span>
                  <span className="text-[9px] tracking-[0.15em]" style={{ ...MONO, color: "rgba(247,245,239,0.25)" }}>
                    {r.label}
                  </span>
                </div>
                <h3 className="cb-headline font-serif text-lg font-bold mb-2 leading-snug" style={{ color: "#f7f5ef" }}>
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(247,245,239,0.45)" }}>
                  {r.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 transition-all hover:gap-3 text-sm"
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

      {/* ── 05 — THE REPAIR ──────────────────────────────────────── */}
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
            <BlueprintAnnotation label="section" value="05 / 05" />
            <BlueprintAnnotation label="classification" value="Repair Protocol" />
          </div>
          <MeasurementRule />
          <div className="mt-8">
            <SectionIdentifier number="05" label="The Repair" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2
                className="cb-headline font-serif font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--cb-navy-900, #0a1928)" }}
              >
                Finding the problem is only half the job.
              </h2>
              <p className="leading-relaxed mb-4 text-[15px]" style={{ color: "#5a6a7a" }}>
                We don't hand you a report and walk away. We give you a clear, step-by-step plan for fixing what we found — in the right order, with no guesswork about where to start.
              </p>
              <p className="leading-relaxed text-[15px]" style={{ color: "#5a6a7a" }}>
                And we don't just trust that it worked. We build in simple ways to track progress — so you can see results as they happen, not just hope they do.
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

          <div className="grid sm:grid-cols-2 gap-4">
            {REPAIR_DELIVERABLES.map(d => (
              <div
                key={d.step}
                className="group relative border p-6 transition-all duration-300 hover:border-[#d39a22]/40"
                style={{ borderColor: "rgba(158,171,184,0.25)", backgroundColor: "rgba(247,245,239,0.6)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d39a22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="block mb-3 text-[9px] tracking-[0.3em] uppercase" style={{ ...MONO, color: "#d39a22" }}>
                  Deliverable {d.step}
                </span>
                <h3 className="cb-headline font-serif text-base font-bold mb-2" style={{ color: "var(--cb-navy-900, #0a1928)" }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a" }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <MeasurementRule />
            <div className="flex items-center justify-between mt-2">
              <BlueprintAnnotation label="process" value="Complete" />
              <BlueprintAnnotation label="next" value="Begin Diagnostic" />
            </div>
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
          <p className="mb-3 text-[15px]" style={{ color: "rgba(247,245,239,0.4)" }}>
            Take the diagnostic. Find out what's leaking, why it's happening, and what to do about it. It takes less time than your next staff meeting.
          </p>
          <p className="mb-8 text-[14px] font-serif italic" style={{ color: "rgba(247,245,239,0.3)" }}>
            And you'll leave knowing more about your business than you did when you sat down.
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
              Start the Diagnostic <ArrowRight className="h-3.5 w-3.5" />
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
              Schedule a Strategy Call <ArrowRight className="h-3.5 w-3.5" />
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

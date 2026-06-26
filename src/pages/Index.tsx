import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Users,
  GraduationCap,
  Zap,
  FileCheck,
  PhoneCall,
  Repeat,
  Crown,
  ShieldCheck,
  Search,
  BarChart3,
  Activity,
  Sparkles,
  LineChart,
  Eye,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const CAPABILITIES = [
  { icon: Search, title: "Revenue Leak Diagnostics", desc: "Identify hidden operational bottlenecks impacting growth." },
  { icon: BarChart3, title: "Distribution Benchmarking", desc: "Compare systems against industry patterns and performance indicators." },
  { icon: ShieldCheck, title: "Trust Infrastructure Analysis", desc: "Measure where consumer and agent trust weaken across the organization." },
  { icon: Activity, title: "Persistency Visibility", desc: "Understand where long-term value is leaking after placement." },
  { icon: Sparkles, title: "AI & Attention Analysis", desc: "Track how AI, social platforms, and digital behavior are reshaping discovery." },
  { icon: LineChart, title: "Operational Reporting", desc: "Research-backed intelligence designed for leadership visibility." },
];

const REPORT_EXAMPLES = [
  "Trust Economy Report",
  "Distribution Trends Brief",
  "AI Readiness Report",
  "Consumer Attention Report",
  "Event Intelligence Report",
  "Insurance Distribution Outlook",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Clientele Builders — Distribution Intelligence for Insurance</title>
        <meta name="description" content="Distribution intelligence for insurance. We surface revenue leaks across recruiting, onboarding, sales, persistency, and leadership." />
        <link rel="canonical" href="https://www.clientelebuilders.com/" />
      </Helmet>
      <Header />

      {/* HERO */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy)/0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-5xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-5">Distribution Intelligence</span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] tracking-tight max-w-4xl mb-7">
            Revenue leaks hide inside <span className="text-accent">distribution systems.</span>
          </h1>
          <p className="text-primary-foreground/65 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-5">
            We help life insurance IMOs and agencies find where revenue leaks — across trust, recruiting, sales, onboarding, and retention.
          </p>
          <p className="text-primary-foreground/40 font-serif text-lg italic mb-12 max-w-2xl">
            We show you where to look before it costs you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
              Find Your Distribution Leaks <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">What We Actually Do</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">We find where your distribution is bleeding.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="group border border-border p-6 hover:border-accent/50 transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <c.icon className="h-5 w-5 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2 leading-snug">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">Industry Intelligence</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">We study how distribution actually works.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {REPORT_EXAMPLES.map((r) => (
              <div key={r} className="border border-border p-5 hover:border-accent/40 transition-colors">
                <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase block mb-2">Report</span>
                <p className="font-serif text-base font-bold leading-snug">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-6">You can't fix what you can't see.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
              Find Your Distribution Leaks <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all">
              Schedule A Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

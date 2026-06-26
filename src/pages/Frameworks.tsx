import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

const FRAMEWORKS = [
  { num: "01", title: "8-System Model (IDOS)", description: "The operating system behind every scalable insurance distribution organization. Eight interlocking systems — from recruiting to retention — that must function together for predictable growth." },
  { num: "02", title: "Recruiting Pipeline Blueprint", description: "A repeatable framework for sourcing, screening, and activating quality agents. Built on pipeline stages, conversion metrics, and source-quality tracking." },
  { num: "03", title: "Onboarding Framework", description: "Day 1 through Day 90 — structured milestones that turn recruits into producers. Defined daily actions, measurable checkpoints, and clear accountability at every stage." },
];

const Frameworks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Core Frameworks — Clientele Builders</title>
        <meta name="description" content="Proprietary methodologies for building scalable insurance distribution organizations." />
      </Helmet>
      <Header />
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">Methodology</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">Core Frameworks</h1>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {FRAMEWORKS.map((fw) => (
            <div key={fw.num} className="border border-border p-8 md:p-10 relative group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent">{fw.num}</span>
              <h2 className="font-serif text-2xl font-bold mt-2 mb-4 leading-tight">{fw.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{fw.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Frameworks;

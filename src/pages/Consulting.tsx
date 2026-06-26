import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const ENGAGEMENTS = [
  { tier: "01", label: "Diagnostic & Strategy", items: ["Full KPI audit across 8 distribution systems", "Scorecard breakdown with benchmarks", "Custom system roadmap and priority matrix"] },
  { tier: "02", label: "System Buildout", items: ["Recruiting pipeline infrastructure", "Automation and systems configuration", "Training and onboarding program design"] },
  { tier: "03", label: "Growth Infrastructure", items: ["Agent lead generation systems", "Content and authority positioning", "Recruiting funnel design and optimization"] },
  { tier: "04", label: "Long-Term Advisory", items: ["Monthly consulting and performance reviews", "KPI tracking and optimization cadence", "Leadership development and accountability frameworks"] },
];

const Consulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services — Clientele Builders</title>
        <meta name="description" content="Engagement models for insurance organizations looking to build predictable distribution systems." />
      </Helmet>
      <Header />
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">Engagement Models</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">How We Work</h1>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-8">
          {ENGAGEMENTS.map((eng) => (
            <div key={eng.tier} className="border border-border p-8 md:p-10 relative group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase block mb-2">{eng.tier}</span>
                  <h3 className="font-serif text-2xl font-bold leading-tight">{eng.label}</h3>
                </div>
                <ul className="md:w-2/3 space-y-3">
                  {eng.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3"><span className="text-accent mt-1 text-xs">■</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Start with the Scorecard</h2>
          <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            Apply for Advisory <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Consulting;

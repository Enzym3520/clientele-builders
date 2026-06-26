import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ClipboardCheck } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Distribution Scorecard — Clientele Builders</title>
        <meta name="description" content="Diagnose where your recruiting, onboarding, and production systems are breaking." />
      </Helmet>
      <Header />
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">Distribution Diagnostic</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">Distribution Scorecard</h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">See where your recruiting, onboarding, and production systems are breaking — and what to fix first.</p>
          <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            <ClipboardCheck className="h-4 w-4" /> Start the Scorecard
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Scorecard;

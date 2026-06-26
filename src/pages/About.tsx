import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About — Clientele Builders</title>
        <meta name="description" content="Insurance Distribution Architects. We operate at the intersection of data, marketing, and operations." />
      </Helmet>
      <Header />
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-36 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">Who We Are</span>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-primary-foreground leading-[1.05] tracking-tight mb-6">Insurance Distribution Architects</h1>
          <p className="text-primary-foreground/50 text-lg font-light leading-relaxed max-w-xl mx-auto">We operate at the intersection of data, marketing, and operations.</p>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-20">
          <div>
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-3">Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">Distribution is the real asset in insurance.</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">Products are commoditized. Carriers are interchangeable. The organizations that win are the ones with superior distribution infrastructure.</p>
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-3">Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">Build the most efficient insurance distribution systems in the industry.</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">We combine research, technology, and operational expertise to help IMOs and agencies replace guesswork with engineered systems.</p>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to diagnose your systems?</h2>
          <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            Take the Scorecard <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

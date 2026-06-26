import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const NEWSLETTER_THEMES = [
  { label: "Carrier Behavior", angle: "Carriers tightening underwriting → lower placement rates" },
  { label: "Agent Trends", angle: "Why agents are leaving IMOs — and what the data says" },
  { label: "Tech Stack", angle: "AI is replacing manual recruiting — who adapts, who stalls" },
  { label: "Economics", angle: "Where margins are shrinking across the distribution chain" },
  { label: "Compliance", angle: "New risks IMOs aren't prepared for — and how to get ahead" },
  { label: "Market Shifts", angle: "The shift from recruiting volume → retention leverage" },
];

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Newsletter — Clientele Builders</title>
        <meta name="description" content="Weekly distribution intelligence for IMOs, agency owners, and insurance leaders. Market signals, system insights, and strategic opportunities." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">Distribution Intelligence</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">The Weekly Brief</h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed max-w-lg mx-auto">Market signals, system insights, and strategic opportunities for insurance distribution leaders. Calm. Observational. Strategic.</p>
        </div>
      </section>

      <main className="container max-w-3xl mx-auto px-6 py-16">
        <div className="max-w-xl mx-auto mb-16">
          <NewsletterSignup />
        </div>

        {/* Briefing Structure */}
        <div className="border border-border p-8 md:p-10 mb-12">
          <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase block mb-6">Every Issue Follows This Structure</span>
          <div className="space-y-6">
            {[
              { num: "01", label: "Market Signal", desc: "A trend, news event, or data point shaping insurance distribution right now." },
              { num: "02", label: "What It Means", desc: "Translation into distribution impact — what this signals for IMOs and agencies." },
              { num: "03", label: "System Insight", desc: "How it ties back to your recruiting, onboarding, or production systems." },
              { num: "04", label: "The Opportunity", desc: "What smart operators should do now — concrete, strategic, actionable." },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent mt-1 shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-serif text-base font-bold mb-1">{step.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div className="mb-12">
          <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase block mb-6">Recurring Themes</span>
          <div className="grid sm:grid-cols-2 gap-4">
            {NEWSLETTER_THEMES.map((theme) => (
              <div key={theme.label} className="border border-border p-5 hover:border-accent/40 transition-colors">
                <h3 className="font-serif text-sm font-bold mb-1">{theme.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed italic">"{theme.angle}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Positioning cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Weekly", desc: "Every Monday morning — one brief, one focus" },
            { label: "Bloomberg-Style", desc: "Calm, observational, strategic — not tips" },
            { label: "Distribution-Only", desc: "Built for IMOs, agencies, and leaders" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 border border-border">
              <h3 className="font-serif text-lg font-bold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletter;

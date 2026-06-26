import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, AlertTriangle, UserPlus, BookOpen, Zap, Shield, Crown, Cpu, DollarSign, TrendingDown, CheckCircle2, BarChart3, Calculator, Activity, Target, Wrench, Building2, Users } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const REVENUE_LEAKS = [
  { icon: UserPlus, label: "Agents not activating after contracting" },
  { icon: BookOpen, label: "Licensed agents not writing business" },
  { icon: TrendingDown, label: "Chargebacks killing profit margins" },
  { icon: Shield, label: "Poor persistency destroying renewal revenue" },
  { icon: AlertTriangle, label: "Recruiting pipelines breaking mid-funnel" },
  { icon: DollarSign, label: "No visibility into real revenue performance" },
];

const IDOS_AREAS = [
  { icon: UserPlus, label: "Recruiting" },
  { icon: BookOpen, label: "Onboarding & Activation" },
  { icon: Zap, label: "Sales Performance" },
  { icon: Shield, label: "Persistency & Retention" },
  { icon: DollarSign, label: "Compensation Structure" },
  { icon: Crown, label: "Leadership & Culture" },
  { icon: Cpu, label: "Technology & Data" },
  { icon: BarChart3, label: "Distribution Model" },
];

const PIPELINE_STAGES = [
  { label: "Lead", leaks: false },
  { label: "Recruit", leaks: true },
  { label: "Contract", leaks: true },
  { label: "Activate", leaks: true },
  { label: "Produce", leaks: true },
  { label: "Retain", leaks: true },
];

const BENCHMARK_DATA = [
  { metric: "Agent Activation Rate", top: "78%", avg: "42%", bottom: "18%" },
  { metric: "12-Mo Persistency", top: "89%", avg: "72%", bottom: "54%" },
  { metric: "Time-to-First-Sale", top: "14 days", avg: "38 days", bottom: "67 days" },
  { metric: "Revenue per Agent", top: "$142K", avg: "$68K", bottom: "$23K" },
];

const LifeInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Life Insurance Distribution — Clientele Builders</title>
        <meta name="description" content="For IMOs and life insurance distribution organizations: most are losing 20–40% of revenue due to broken recruiting, onboarding, and persistency systems. We find the leaks and show you exactly how much they're costing you." />
      </Helmet>
      <Header />

      <div className="bg-background border-b border-border">
        <div className="container max-w-5xl mx-auto px-6 py-4">
          <nav className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="text-muted-foreground/40">/</span>
            <Link to="/#industries" className="hover:text-accent transition-colors">Industries</Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-foreground">Life Insurance Distribution</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy)/0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-40 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-5">Revenue Leak Diagnostics</span>
          <h1 className="font-serif text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] tracking-tight max-w-4xl mb-7">We Identify and Fix <span className="text-accent">Revenue Leaks</span> Inside Life Insurance Distribution</h1>
          <p className="text-primary-foreground/55 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-4">Most IMOs are losing 20–40% of their revenue due to broken recruiting, onboarding, and persistency systems. We find the leaks — and show you exactly how much they're costing you.</p>
          <p className="text-primary-foreground/40 font-serif text-base sm:text-lg italic mb-10 sm:mb-12 max-w-2xl">If you can't measure where revenue is lost, how do you fix it?</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">Find Your Revenue Leaks <ArrowRight className="h-4 w-4" /></a>
            <a href="#how-it-works" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all">See How It Works <ChevronRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--ink))] text-primary-foreground" id="how-it-works">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">The Real Problem</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-8 text-primary-foreground">You're Not Growing Slower… You're Leaking Faster</h2>
          <div className="max-w-3xl mb-10">
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-8">Revenue doesn't disappear because of market conditions. It leaks through cracks in your distribution system that no one is measuring.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {REVENUE_LEAKS.map((leak) => (
                <div key={leak.label} className="flex items-start gap-3 text-primary-foreground/50">
                  <leak.icon className="h-4 w-4 text-accent shrink-0 mt-1" />
                  <span className="text-base leading-relaxed">{leak.label}</span>
                </div>
              ))}
            </div>
            <div className="border border-primary-foreground/10 p-6 md:p-8">
              <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-6">Where Your Money Is Leaking</span>
              <div className="flex flex-col sm:hidden gap-3">
                {PIPELINE_STAGES.map((stage, i) => (
                  <div key={stage.label} className={`flex items-center gap-4 border p-3 ${stage.leaks ? "border-accent/40" : "border-primary-foreground/10"}`}>
                    <div className={`w-10 h-10 border-2 flex items-center justify-center shrink-0 ${stage.leaks ? "border-accent" : "border-primary-foreground/20"}`}>
                      <span className={`font-mono text-[10px] tracking-[0.15em] font-medium uppercase ${stage.leaks ? "text-accent" : "text-primary-foreground/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-primary-foreground/70 uppercase font-medium">{stage.label}</span>
                      {stage.leaks && <span className="font-mono text-[8px] text-accent mt-1">▼ LEAK</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:flex items-center justify-between gap-0">
                {PIPELINE_STAGES.map((stage, i) => (
                  <div key={stage.label} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1 relative">
                      <div className={`w-14 h-14 border-2 flex items-center justify-center mb-2 ${stage.leaks ? "border-accent" : "border-primary-foreground/20"}`}>
                        <span className={`font-mono text-[10px] tracking-[0.15em] font-medium uppercase ${stage.leaks ? "text-accent" : "text-primary-foreground/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-primary-foreground/70 uppercase font-medium text-center">{stage.label}</span>
                      {stage.leaks && <span className="font-mono text-[7px] text-accent mt-1">▼ LEAK</span>}
                    </div>
                    {i < PIPELINE_STAGES.length - 1 && <ArrowRight className="h-4 w-4 text-primary-foreground/20 shrink-0 -mx-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">The System</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">The Insurance Distribution Operating System <span className="text-accent">(IDOS)</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We don't guess. We measure your entire distribution system across 8 core areas:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {IDOS_AREAS.map((area) => (
              <div key={area.label} className="group border border-border p-6 hover:border-accent/40 transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <area.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-base font-bold">{area.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground relative">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">Step 1</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5 text-primary-foreground">Diagnose the Leaks</h2>
              <p className="text-primary-foreground/55 leading-relaxed mb-4">In 5 minutes, identify exactly where your distribution system is leaking revenue. The assessment evaluates your infrastructure across all 8 IDOS areas.</p>
              <p className="text-primary-foreground/40 font-serif text-base italic mb-8">If you can't see where revenue is leaking, what determines what you fix?</p>
              <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">Get Your Revenue Leak Report <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div>
              <h3 className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase mb-4">What You'll Receive</h3>
              <ul className="space-y-2.5">
                {["Your Revenue Leak Score", "Breakdown by system — where you're losing money", "Benchmark vs other IMOs", "Estimated revenue loss", "Priority fixes ranked by impact"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/60 text-sm"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">The Numbers</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">We Show You the Money You're Losing</h2>
            <p className="text-muted-foreground leading-relaxed">This is not theory. These are measurable revenue losses happening inside your organization right now.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              { icon: AlertTriangle, trigger: "If 50 agents fail to activate…", result: "That's $3.4M in unrealized first-year commissions" },
              { icon: TrendingDown, trigger: "If persistency drops 10%…", result: "That's $1.2M in lost renewal revenue annually" },
              { icon: DollarSign, trigger: "If chargebacks increase 15%…", result: "That's $800K+ pulled directly from your bottom line" },
            ].map((item) => (
              <div key={item.trigger} className="border border-border p-6 relative group hover:border-accent/40 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="h-5 w-5 text-accent mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.trigger}</p>
                <p className="font-serif text-lg font-bold text-foreground">{item.result}</p>
              </div>
            ))}
          </div>
          <span className="font-mono text-[9px] tracking-[0.15em] text-accent uppercase block mb-6">Diagnostic Tools</span>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Calculator, label: "Revenue Leak Calculator", desc: "Quantify exactly how much revenue is leaking from each stage of your pipeline" },
              { icon: Activity, label: "Persistency Profit Engine", desc: "Model the compound revenue impact of retention improvements over time" },
              { icon: Target, label: "Distribution Benchmark System", desc: "Compare your metrics against top-performing IMOs across all 8 IDOS areas" },
            ].map((tool) => (
              <div key={tool.label} className="group border border-border p-6 hover:border-accent/40 transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <tool.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-base font-bold mb-1">{tool.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">Case Example</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-5 text-primary-foreground">What a Revenue Leak Looks Like</h2>
          <p className="text-primary-foreground/50 max-w-2xl mb-12 leading-relaxed">A simple breakdown that shows how most of your investment disappears before renewals even start.</p>
          <div className="max-w-lg mb-14">
            {[
              { stage: "Agents Recruited", value: "100", width: "100%" },
              { stage: "Activated", value: "40", width: "40%" },
              { stage: "Writing Business", value: "18", width: "18%" },
              { stage: "Persisting at 12 Months", value: "10", width: "10%" },
            ].map((row) => (
              <div key={row.stage} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-primary-foreground/60 text-sm">{row.stage}</span>
                  <span className="font-serif text-2xl font-black text-accent">{row.value}</span>
                </div>
                <div className="w-full h-2 bg-primary-foreground/5 overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: row.width }} />
                </div>
              </div>
            ))}
            <div className="border-t border-primary-foreground/10 pt-4 mt-6">
              <p className="font-serif text-xl font-bold text-accent">Result: 70% revenue loss before renewals even start.</p>
            </div>
          </div>
          <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-6">Performance Benchmarks</span>
          <div className="sm:hidden space-y-3 mb-6">
            {BENCHMARK_DATA.map((row) => (
              <div key={row.metric} className="border border-primary-foreground/10 p-4">
                <p className="text-primary-foreground/70 text-sm font-medium mb-3">{row.metric}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div><span className="font-mono text-[8px] tracking-[0.12em] text-accent uppercase block mb-1">Top 10%</span><span className="font-serif text-lg font-bold text-accent">{row.top}</span></div>
                  <div><span className="font-mono text-[8px] tracking-[0.12em] text-primary-foreground/40 uppercase block mb-1">Industry</span><span className="font-serif text-lg font-bold text-primary-foreground/50">{row.avg}</span></div>
                  <div><span className="font-mono text-[8px] tracking-[0.12em] text-primary-foreground/30 uppercase block mb-1">Bottom 25%</span><span className="font-serif text-lg font-bold text-primary-foreground/30">{row.bottom}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:block border border-primary-foreground/10 mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-foreground/10">
                  <th className="text-left font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase p-4">Metric</th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-accent uppercase p-4">Top 10%</th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase p-4">Industry Avg</th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-primary-foreground/30 uppercase p-4">Bottom 25%</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_DATA.map((row) => (
                  <tr key={row.metric} className="border-b border-primary-foreground/[0.06] last:border-0">
                    <td className="p-4 text-primary-foreground/60 text-sm font-medium">{row.metric}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-accent">{row.top}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-primary-foreground/50">{row.avg}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-primary-foreground/30">{row.bottom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">Step 2</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">Fix the Leaks</h2>
            <p className="text-muted-foreground leading-relaxed">Once we diagnose your system, we fix it. Not with advice — with infrastructure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Wrench, label: "Rebuild Broken Pipelines", desc: "Restructure recruiting and onboarding flows to eliminate drop-off" },
              { icon: Zap, label: "Fix Activation Gaps", desc: "Close the gap between contracted and producing agents" },
              { icon: Shield, label: "Improve Persistency", desc: "Reduce chargebacks and protect renewal revenue streams" },
              { icon: DollarSign, label: "Optimize Revenue Flow", desc: "Align compensation, production, and retention into a single system" },
            ].map((model) => (
              <div key={model.label} className="group border border-border p-6 hover:border-accent/40 transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <model.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-base font-bold mb-1">{model.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--fog))] border-y border-border">
        <div className="container max-w-5xl mx-auto px-6 py-14 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">Built for Operators</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">We don't guess. We fix your numbers.</h2>
            <p className="font-serif text-2xl md:text-3xl font-bold text-accent mb-10">Built using real distribution models, industry benchmarks, and operator-level diagnostics.</p>
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {[
                { icon: Building2, text: "Real distribution models from operating IMOs and MGAs" },
                { icon: BarChart3, text: "Industry benchmarks sourced from IBISWorld, LIMRA, and field data" },
                { icon: Users, text: "Operator-level diagnostics — not theory, not templates" },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-3">
                  <item.icon className="h-6 w-6 text-accent" />
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-14 md:py-28 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">Start Here</span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-5">Find Out Where You're Losing Money</h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-4 leading-relaxed">Takes 5 minutes. Shows you what most IMOs never measure.</p>
          <p className="text-primary-foreground/35 font-serif text-base italic mb-10 max-w-md mx-auto">Most organizations don't lack effort — they lack visibility into where revenue is actually lost.</p>
          <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 sm:px-10 py-5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            Take the Revenue Leak Assessment <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeInsurance;

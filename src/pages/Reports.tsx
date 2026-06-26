import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const MARKET_SNAPSHOT = [
  { stat: "$1.1T", label: "Industry Revenue", source: "IBISWorld 2026" },
  { stat: "893", label: "Businesses", source: "IBISWorld 2026" },
  { stat: "329K", label: "Employees", source: "IBISWorld 2026" },
  { stat: "16.7%", label: "Profit Margin", source: "IBISWorld 2026" },
  { stat: "51%", label: "Ownership Rate", source: "LIMRA / Statista 2024" },
  { stat: "2.0%", label: "Revenue CAGR", source: "IBISWorld 2026" },
];

const FLAGSHIP_REPORTS = [
  { num: "01", title: "Agent Production Report", desc: "KPI benchmarking, revenue efficiency, time-to-production diagnostics, and the IDOS™ system framework applied to agent activation.", link: "/reports/agent-production" },
  { num: "02", title: "Persistency Report", desc: "Retention analytics, lapse patterns, and the structural relationship between agent tenure, policy persistency, and long-term revenue compounding." },
  { num: "03", title: "Compensation Benchmark Report", desc: "How compensation structures shape agent behavior, production volume, and organizational growth across insurance distribution models." },
  { num: "04", title: "Tech Stack Report", desc: "Automation maturity, tool adoption, and the data infrastructure investments that actually move the needle in scalable distribution." },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Intelligence Reports — Clientele Builders</title>
        <meta name="description" content="Data-first research reports on agent production, persistency, compensation, and tech infrastructure in insurance distribution." />
      </Helmet>
      <Header />
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">Research Library</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">Intelligence Reports</h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-4 max-w-lg mx-auto">Comprehensive, data-first analysis on the systems that drive — or stall — insurance distribution.</p>
        </div>
      </section>
      <section className="bg-[hsl(var(--fog))] border-b border-border">
        <div className="container max-w-4xl mx-auto px-6 py-14">
          <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase block mb-6">Market Snapshot</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {MARKET_SNAPSHOT.map((item) => (
              <div key={item.label} className="border border-border bg-card p-4 text-center">
                <span className="font-serif text-2xl font-black text-accent block mb-1">{item.stat}</span>
                <span className="text-foreground text-xs font-medium block mb-1">{item.label}</span>
                <span className="font-mono text-[7px] tracking-[0.1em] text-muted-foreground uppercase">{item.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {FLAGSHIP_REPORTS.map((report) => (
            <div key={report.num} className="border border-border p-8 md:p-10 relative group hover:border-accent/40 transition-colors">
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-accent ${report.num === "01" ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`} />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase block mb-2">Report {report.num}</span>
                  <h2 className="font-serif text-2xl font-bold leading-tight">{report.title}</h2>
                  {report.link ? (
                    <Link to={report.link} className="inline-flex items-center gap-1.5 mt-3 font-mono text-[9px] tracking-[0.15em] uppercase text-accent hover:text-accent/80 transition-colors font-medium">
                      <FileText className="h-3.5 w-3.5" /> Read Full Report <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="inline-block mt-3 font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/50">Coming Soon</span>
                  )}
                </div>
                <p className="md:w-2/3 text-muted-foreground text-sm leading-relaxed">{report.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">See How Your System Compares</h2>
          <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            Take the Scorecard <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reports;

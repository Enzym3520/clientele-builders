import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight, Download, ClipboardCheck } from "lucide-react";
import { forwardRef } from "react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const CATEGORIES = [
  { id: "all", label: "All Intelligence" },
  { id: "recruiting-systems", label: "Recruiting Systems" },
  { id: "onboarding-systems", label: "Onboarding Systems" },
  { id: "agent-production", label: "Agent Production" },
  { id: "retention-persistency", label: "Retention & Persistency" },
  { id: "leadership-duplication", label: "Leadership & Duplication" },
  { id: "infrastructure-data", label: "Infrastructure & Data" },
];

const REPORT_TYPES = [
  { title: "Agent Production Report", desc: "KPI benchmarking, revenue efficiency, time-to-production diagnostics, and the IDOS™ system framework applied to agent activation.", link: "/reports/agent-production" },
  { title: "Persistency Report", desc: "Retention analytics, lapse patterns, and the structural relationship between agent tenure and revenue compounding." },
  { title: "Compensation Benchmark Report", desc: "How compensation structures shape agent behavior, production volume, and organizational growth across distribution models." },
  { title: "Tech Stack Report", desc: "Automation maturity, tool adoption, and the data infrastructure behind scalable distribution organizations." },
];

const FRAMEWORKS = [
  { title: "IDOS™ Framework", description: "Six-stage operating system: Recruiting, Onboarding, Activation, Retention, Leadership, Infrastructure." },
  { title: "Recruiting Pipeline Blueprint", description: "A repeatable framework for sourcing, screening, and activating quality agents." },
  { title: "Onboarding Framework", description: "Day 1 through Day 90 — structured milestones that turn recruits into producers." },
];

const INFOGRAPHIC_TYPES = [
  { label: "System Maps", desc: "Full distribution system with stages, KPIs, and failure points" },
  { label: "Funnel Breakdowns", desc: "Lead → Contact → Appointment → Sale → Retention conversion flow" },
  { label: "KPI Dashboards", desc: "5–10 key metrics with green / yellow / red performance indicators" },
  { label: "Benchmark Comparisons", desc: "Top 10% vs Average vs Bottom 50% side-by-side" },
  { label: "Process Timelines", desc: "Agent onboarding milestones from Day 0 to Day 90" },
  { label: "Market Maps", desc: "Carrier → IMO → Agent → Tech ecosystem visualization" },
];

const INFOGRAPHIC_PDF_MAP: Record<string, string> = {
  "automation-playbook-insurance-agencies": "/downloads/infographic-automation-playbook.pdf",
  "million-dollar-mindset-agency-owners": "/downloads/infographic-mindset-models.pdf",
};

const Intelligence = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["intelligence-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cb_posts")
        .select(`*, cb_post_tags(cb_tags(name, slug)), cb_categories(name, slug)`)
        .eq("is_published", true)
        .order("publish_date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const featuredPost = posts.find((p: any) => p.is_featured) || posts[0];
  const gridPosts = posts.filter((p: any) => p.id !== featuredPost?.id);
  const filteredPosts =
    activeCategory === "all"
      ? gridPosts
      : gridPosts.filter((p: any) => p.cb_post_tags?.some((pt: any) => pt.cb_tags?.slug === activeCategory));

  return (
    <div className="min-h-screen bg-primary">
      <Helmet>
        <title>Intelligence Hub — Insurance Distribution Research</title>
        <meta name="description" content="Research, frameworks, and operating models for insurance distribution leaders — recruiting, onboarding, retention, and leadership." />
        <link rel="canonical" href="https://www.clientelebuilders.com/intelligence" />
      </Helmet>
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--gold)/0.06),transparent)] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-10 h-[2px] bg-accent mb-8" />
              <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-black text-white leading-[1.05] tracking-tight mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
                Insurance Distribution Intelligence
              </h1>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-lg">Research reports, insight articles, and market briefings for the leaders building scalable insurance distribution.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-7 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]">
                  <ClipboardCheck className="h-4 w-4" /> Take the Distribution Scorecard
                </a>
                <Link to="/reports" className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-white/70 font-sans text-[11px] font-medium tracking-[0.08em] uppercase px-7 py-4 hover:border-white/30 hover:text-white transition-colors active:scale-[0.97]">
                  <Download className="h-4 w-4" /> View Reports
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-accent/[0.03] blur-3xl rounded-full pointer-events-none" />
                <div className="relative border border-white/[0.08] p-8 space-y-4">
                  <span className="font-mono text-[7px] tracking-[0.3em] text-accent uppercase block mb-6">Content System</span>
                  {[
                    { label: "Intelligence Reports", sub: "Deep authority" },
                    { label: "Insight Articles", sub: "Traffic + education" },
                    { label: "Visual Intelligence", sub: "Shareability + clarity" },
                    { label: "Scorecard", sub: "Diagnosis" },
                    { label: "Strategy Call", sub: "Conversion" },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-accent w-4">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1 border-t border-white/[0.06]" />
                      <div className="text-right">
                        <span className="text-white text-xs font-medium block">{step.label}</span>
                        <span className="text-white/30 text-[9px]">{step.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[hsl(var(--ink))]">
        <div className="container max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { stat: "$1.1 trillion", label: "Industry Revenue", source: "IBISWorld 2026" },
              { stat: "893", label: "Total Businesses", source: "IBISWorld 2026" },
              { stat: "51%", label: "Ownership Rate", source: "LIMRA / Statista 2024" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="font-serif text-2xl md:text-3xl font-black text-accent block">{item.stat}</span>
                <span className="text-white/50 text-xs font-medium block">{item.label}</span>
                <span className="font-mono text-[7px] tracking-[0.1em] text-white/20 uppercase">{item.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="border-b border-white/[0.06]">
          <div className="container max-w-7xl mx-auto px-6 py-20">
            <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-10">Featured Insight</span>
            <Link to={`/story/${featuredPost.slug}`} className="group block border border-white/[0.06] p-10 md:p-16 hover:border-accent/20 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {featuredPost.cb_categories ? (
                <Link to={`/category/${featuredPost.cb_categories.slug}`} onClick={(e) => e.stopPropagation()} className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase hover:text-gold-light transition-colors relative z-10">{featuredPost.cb_categories.name}</Link>
              ) : featuredPost.cb_post_tags?.[0]?.cb_tags && (
                <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase">{featuredPost.cb_post_tags[0].cb_tags.name}</span>
              )}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight mt-4 mb-6 max-w-3xl group-hover:text-gold-light transition-colors" style={{ textWrap: "balance" } as React.CSSProperties}>{featuredPost.title}</h2>
              {featuredPost.dek && <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-2xl">{featuredPost.dek}</p>}
              <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.08em] uppercase text-accent group-hover:text-gold-light transition-colors">Read Analysis <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </section>
      )}

      <div className="sticky top-[73px] z-40 border-b border-white/[0.06] bg-primary/95 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`font-mono text-[10px] tracking-[0.1em] uppercase whitespace-nowrap px-5 py-2.5 transition-colors active:scale-[0.97] ${activeCategory === cat.id ? "bg-accent text-primary font-semibold" : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"}`}>{cat.label}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="container max-w-7xl mx-auto px-6 py-20">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white/[0.06] h-3 w-1/3 mb-3" />
                <div className="bg-white/[0.06] h-5 w-full mb-2" />
                <div className="bg-white/[0.04] h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-12">
            <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-8">Intelligence Briefs — Agent Production Series</span>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "001", title: "Production as a System Output in Commission-Based Distribution", desc: "Why agent production is a structural output — not a motivational one — and how the IDOS™ framework reframes activation as system design." },
                { num: "002", title: "Retention as a Structural Determinant of Revenue Compounding", desc: "How retention compounds revenue over time, and why most distribution organizations underinvest in the systems that drive it." },
                { num: "003", title: "Infrastructure as a Variance Reduction Mechanism in Agent Distribution", desc: "The role of operational infrastructure in reducing performance variance and enabling scalable, predictable agent output." },
              ].map((brief) => (
                <Link key={brief.num} to={`/reports/agent-production/briefs#brief-${brief.num}`} className="border border-white/[0.06] p-6 hover:border-[hsl(var(--gold-light))]/30 transition-colors group block">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-[hsl(var(--gold-light))] uppercase block mb-3">Brief {brief.num}</span>
                  <h3 className="font-serif text-sm font-bold text-white leading-snug mb-3 group-hover:text-[hsl(var(--gold-light))] transition-colors">{brief.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{brief.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
              {filteredPosts.slice(0, 6).map((post: any) => <ArticleCard key={post.id} post={post} />)}
            </div>
            {filteredPosts.length > 4 && <InlineCTA />}
            {filteredPosts.length > 6 && (
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 mt-14">
                {filteredPosts.slice(6).map((post: any) => <ArticleCard key={post.id} post={post} />)}
              </div>
            )}
          </div>
        )}
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">Research Library</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>Flagship Intelligence Reports</h2>
          <p className="text-white/45 leading-relaxed mb-14 max-w-xl">Comprehensive, data-first analysis on the systems that drive — or stall — insurance distribution.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {REPORT_TYPES.map((report, i) => (
              <div key={i} className="group border border-white/[0.06] p-8 hover:border-accent/30 transition-colors relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-accent ${(report as any).link ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`} />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">Report {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-lg font-bold text-white mt-4 mb-3 leading-tight">{report.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{report.desc}</p>
                {(report as any).link ? (
                  <Link to={(report as any).link} className="inline-flex items-center gap-1.5 mt-4 font-mono text-[9px] tracking-[0.15em] uppercase text-accent hover:text-[hsl(var(--gold-light))] transition-colors font-medium">Read Full Report <ArrowRight className="h-3 w-3" /></Link>
                ) : (
                  <span className="inline-block mt-4 font-mono text-[9px] tracking-[0.15em] uppercase text-white/20">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/reports" className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-accent hover:text-gold-light transition-colors group">View All Reports <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">Visual Intelligence</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>Infographic & Data Visualization System</h2>
          <p className="text-white/45 leading-relaxed mb-14 max-w-xl">Every report generates proprietary visuals — system maps, funnel breakdowns, and benchmark comparisons built for institutional clarity.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {INFOGRAPHIC_TYPES.map((type, i) => (
              <div key={i} className="border border-white/[0.06] p-6 hover:border-accent/20 transition-colors">
                <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase block mb-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">{type.label}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">Methodology</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-14" style={{ textWrap: "balance" } as React.CSSProperties}>Core Frameworks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FRAMEWORKS.map((fw, i) => (
              <div key={i} className="group border border-white/[0.06] p-8 hover:border-accent/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">Framework {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-lg font-bold text-white mt-4 mb-3 leading-tight">{fw.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{fw.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/frameworks" className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-accent hover:text-gold-light transition-colors group">Explore Frameworks <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--gold)/0.04),transparent)]" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center relative">
          <div className="w-10 h-[2px] bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>Build a Predictable Distribution System</h2>
          <p className="text-white/45 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">We help insurance organizations recruit, train, and scale producing agents — with systems, not guesswork.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-8 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"><ClipboardCheck className="h-4 w-4" />Take Scorecard</a>
            <Link to="/consulting" className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-white/70 font-sans text-[11px] font-medium tracking-[0.08em] uppercase px-8 py-4 hover:border-white/30 hover:text-white transition-colors active:scale-[0.97]">Book Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const InlineCTA = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="my-20 border border-white/[0.06] p-10 md:p-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,hsl(var(--gold)/0.05),transparent)]" />
    <div className="relative max-w-xl">
      <div className="w-10 h-[2px] bg-accent mb-6" />
      <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">Distribution Diagnostic</span>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>See how your system compares</h3>
      <p className="text-white/40 leading-relaxed mb-8 max-w-md">Take the scorecard to benchmark your recruiting, onboarding, and retention systems against top-performing IMOs.</p>
      <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-7 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"><ClipboardCheck className="h-4 w-4" />Take Scorecard</a>
    </div>
  </div>
));
InlineCTA.displayName = "InlineCTA";

const ArticleCard = ({ post }: { post: any }) => {
  const category = post.cb_categories;
  const tag = post.cb_post_tags?.[0]?.cb_tags;
  const pdfUrl = INFOGRAPHIC_PDF_MAP[post.slug];
  return (
    <article className="group">
      {category && (
        <Link to={`/category/${category.slug}`} className="inline-block font-mono text-[9px] tracking-[0.18em] text-accent uppercase mb-2 hover:text-gold-light transition-colors">{category.name}</Link>
      )}
      <Link to={`/story/${post.slug}`} className="block">
        {!category && tag && <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase">{tag.name}</span>}
        <h3 className="font-serif text-xl font-bold text-white leading-snug mt-2 mb-3 group-hover:text-gold-light transition-colors" style={{ textWrap: "balance" } as React.CSSProperties}>{post.title}</h3>
        {post.dek && <p className="text-white/35 text-sm leading-relaxed line-clamp-2">{post.dek}</p>}
      </Link>
      {pdfUrl && (
        <a href={pdfUrl} download className="inline-flex items-center gap-1.5 mt-3 text-accent text-[10px] font-mono tracking-[0.1em] uppercase hover:text-gold-light transition-colors"><Download className="h-3 w-3" />Download Infographic</a>
      )}
    </article>
  );
};

export default Intelligence;

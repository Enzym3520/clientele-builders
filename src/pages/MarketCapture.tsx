import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import "./market-capture-editorial.css";

const MarketCapture = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Who Captures Market Growth? — Clientele Builders</title>
        <meta name="description" content="An intelligence brief on insurance distribution market growth — and what determines which organizations actually capture it." />
        <link rel="canonical" href="https://www.clientelebuilders.com/insights/market-capture" />
      </Helmet>
      <Header />
      <div className="mc-editorial bg-background">
        <div className="masthead">
          <div className="mh-inner">
            <div className="mh-pub">Clientele Builders</div>
            <h1 className="mh-title">
              <span className="mh-t1">The Market Can Grow.</span>
              <span className="mh-t2">The Question Is:</span>
              <span className="mh-t3">Who Captures It?</span>
            </h1>
            <div className="mh-meta">
              <div className="mh-mi">Source <span>IBISWorld · Market Intelligence</span></div>
              <div className="mh-mi">Published <span>2026</span></div>
            </div>
          </div>
        </div>
        <div className="mc-page">
          <div className="scope-block">
            <span className="scope-label">Source Basis</span>
            <p>This analysis is based on industry definitions and research from IBISWorld and related market intelligence sources.</p>
          </div>
          <h2 className="section-head">Executive Signal</h2>
          <div className="signal">Signal · Fact</div>
          <div className="fact-statement">Management consulting is defined as "providing advice and assistance to businesses and other organizations on management issues, such as strategic and organizational planning; financial planning and budgeting; marketing objectives and policies; human resource policies, practices, and planning; production scheduling; and control planning."</div>
          <p>If advising organizations across strategy, operations, and planning is already the category…</p>
          <div className="pull"><p>What determines whether that advice becomes operational advantage?</p></div>
          <hr />
          <h2 className="section-head">From Advice to Output</h2>
          <ul className="stacked">
            <li>Advice can clarify.</li>
            <li>Advice can frame.</li>
            <li>Advice can diagnose.</li>
            <li>Advice, by itself, does not instrument a pipeline.</li>
          </ul>
          <div className="pull"><p>If strategy can be defined… what determines whether it translates into measurable output?</p></div>
          <hr />
          <h2 className="section-head">The Role of Information</h2>
          <div className="signal">Signal · Fact</div>
          <div className="fact-statement">"Managers, planners, and market researchers use this information for a variety of activities."</div>
          <p>If data is already used to support decisions…</p>
          <div className="pull"><p>What determines whether those decisions improve performance?</p></div>
          <hr />
          <h2 className="section-head">Market Conditions</h2>
          <div className="signal">Signal · Fact</div>
          <div className="fact-statement">"The industry will continue its steady, moderate rate of growth as long as the US economy continues to expand."</div>
          <p>If the broader insurance market can grow alongside economic expansion…</p>
          <div className="pull"><p>What determines whether individual organizations grow within it?</p></div>
          <hr />
          <h2 className="section-head">Reframing the Problem</h2>
          <div className="if-lines">
            <span className="il il1">If consulting already covers strategy and operations…</span>
            <span className="il il2">If market intelligence already supports planning and positioning…</span>
            <span className="il il3">If the industry itself can expand…</span>
          </div>
          <p>The question is how those inputs are translated into output.</p>
          <hr />
          <div className="signal inference">Interpretation · Inference</div>
          <p>If market growth exists and intelligence is already used for decision-making, then performance differences are unlikely to be explained by information alone.</p>
          <ul className="blist">
            <li>If the market is present, what is happening inside the distribution system?</li>
            <li>If information is available, where does decision quality break down?</li>
            <li>If strategy exists, what prevents execution from becoming measurable?</li>
          </ul>
          <hr />
          <h2 className="section-head">The Operating Question</h2>
          <div className="not-but">
            <div className="nb-not"><div className="nb-not-tag">Not:</div><div className="nb-not-text">How do we create demand?</div></div>
            <div className="nb-but"><div className="nb-but-tag">But:</div><div className="nb-but-text">How do we build a system that captures demand <em>already in motion?</em></div></div>
          </div>
          <hr />
          <h2 className="section-head">Where This Leads</h2>
          <ul className="sys-list">
            <li>Diagnostic</li>
            <li>Measurement</li>
            <li>Instrumentation</li>
          </ul>
          <div className="pull"><p>What system is actually converting that opportunity into measurable performance?</p></div>
          <hr />
          <div className="scope-block">
            <span className="scope-label">Scope &amp; Limitation</span>
            <p>This analysis is based on industry-level data and definitions. It does not isolate performance at the individual firm level or attribute outcomes to any single variable.</p>
          </div>
          <div className="closing"><p><strong>Next Step</strong></p><p>If that system is not clearly visible, the next step is not more activity — it is diagnosis.</p></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketCapture;

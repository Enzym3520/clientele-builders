import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  DEFAULT_HOME_CONTENT,
  HOME_ICON_NAMES,
  fetchLatestHomeContent,
  type HomeContent,
} from "@/lib/homeContent";
import { Plus, Trash2 } from "lucide-react";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="border border-border rounded-lg p-6 bg-card space-y-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </section>
);

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="space-y-1.5">
    <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
    {children}
  </div>
);

const AdminHomepage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [rowId, setRowId] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(true);
  const [content, setContent] = useState<HomeContent>(DEFAULT_HOME_CONTENT);

  useEffect(() => {
    const run = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin/login"); return; }
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      const hasAccess = roles?.some(r => ["admin", "editor"].includes(r.role));
      if (!hasAccess) {
        toast({ title: "Access Denied", description: "Admin or editor privileges required", variant: "destructive" });
        navigate("/"); return;
      }
      setIsAuthorized(true);
      const latest = await fetchLatestHomeContent();
      if (latest) {
        setRowId(latest.id);
        setContent({ ...DEFAULT_HOME_CONTENT, ...latest.content });
        setIsPublished(latest.is_published);
      }
      setLoading(false);
    };
    run();
  }, [navigate, toast]);

  const update = <K extends keyof HomeContent>(key: K, value: HomeContent[K]) =>
    setContent(prev => ({ ...prev, [key]: value }));

  const save = async (publish: boolean) => {
    setSaving(true);
    const { data: { session } } = await supabase.auth.getSession();
    const payload = {
      content: content as never,
      is_published: publish,
      updated_by: session?.user.id ?? null,
      updated_at: new Date().toISOString(),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tbl = (supabase as any).from("home_content");
    let error;
    if (rowId) {
      ({ error } = await tbl.update(payload).eq("id", rowId));
    } else {
      const ins = await tbl.insert(payload).select("id").single();
      error = ins.error;
      if (ins.data) setRowId(ins.data.id as string);
    }
    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      setIsPublished(publish);
      toast({ title: publish ? "Published" : "Draft saved", description: publish ? "Homepage is live." : "Changes saved as draft." });
    }
  };

  if (isAuthorized === null || loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading…</div>;
  }
  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 sticky top-0 bg-background z-10">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <Link to="/admin" className="text-sm text-muted-foreground hover:text-primary">← Back to Dashboard</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">{isPublished ? "Published" : "Draft"}</span>
            <Button variant="outline" onClick={() => save(false)} disabled={saving}>Save Draft</Button>
            <Button onClick={() => save(true)} disabled={saving}>{saving ? "Saving…" : "Publish"}</Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        <h1 className="text-4xl font-semibold">Homepage</h1>

        <Section title="Navigation">
          <Field label="Wordmark"><Input value={content.nav.wordmark} onChange={e => update("nav", { ...content.nav, wordmark: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="CTA Label"><Input value={content.nav.cta_label} onChange={e => update("nav", { ...content.nav, cta_label: e.target.value })} /></Field>
            <Field label="CTA Link"><Input value={content.nav.cta_href} onChange={e => update("nav", { ...content.nav, cta_href: e.target.value })} /></Field>
          </div>
        </Section>

        <Section title="Hero">
          <Field label="Eyebrow"><Input value={content.hero.eyebrow} onChange={e => update("hero", { ...content.hero, eyebrow: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Headline"><Input value={content.hero.headline} onChange={e => update("hero", { ...content.hero, headline: e.target.value })} /></Field>
            <Field label="Headline (gold accent)"><Input value={content.hero.headline_accent} onChange={e => update("hero", { ...content.hero, headline_accent: e.target.value })} /></Field>
          </div>
          <Field label="Body"><Textarea rows={3} value={content.hero.body} onChange={e => update("hero", { ...content.hero, body: e.target.value })} /></Field>
          <Field label="Italic line"><Input value={content.hero.italic_line} onChange={e => update("hero", { ...content.hero, italic_line: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="CTA Label"><Input value={content.hero.cta_label} onChange={e => update("hero", { ...content.hero, cta_label: e.target.value })} /></Field>
            <Field label="CTA Link"><Input value={content.hero.cta_href} onChange={e => update("hero", { ...content.hero, cta_href: e.target.value })} /></Field>
          </div>
          <Field label="Meta (below CTA)"><Input value={content.hero.meta} onChange={e => update("hero", { ...content.hero, meta: e.target.value })} /></Field>
        </Section>

        <Section title="What We Diagnose">
          <Field label="Eyebrow"><Input value={content.diagnose.eyebrow} onChange={e => update("diagnose", { ...content.diagnose, eyebrow: e.target.value })} /></Field>
          <Field label="Heading"><Input value={content.diagnose.heading} onChange={e => update("diagnose", { ...content.diagnose, heading: e.target.value })} /></Field>
          <Field label="Lead"><Textarea rows={2} value={content.diagnose.lead} onChange={e => update("diagnose", { ...content.diagnose, lead: e.target.value })} /></Field>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">Cards</Label>
              <Button size="sm" variant="outline" onClick={() => update("diagnose", { ...content.diagnose, cards: [...content.diagnose.cards, { icon: "Activity", title: "New card", body: "" }] })}>
                <Plus className="h-4 w-4 mr-1" /> Add card
              </Button>
            </div>
            {content.diagnose.cards.map((card, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 items-start border border-border rounded p-3">
                <div className="col-span-3">
                  <Label className="text-xs">Icon</Label>
                  <select
                    className="w-full h-9 px-2 rounded border border-input bg-background text-sm"
                    value={card.icon}
                    onChange={e => {
                      const cards = [...content.diagnose.cards];
                      cards[i] = { ...card, icon: e.target.value };
                      update("diagnose", { ...content.diagnose, cards });
                    }}
                  >
                    {HOME_ICON_NAMES.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="col-span-3">
                  <Label className="text-xs">Title</Label>
                  <Input value={card.title} onChange={e => {
                    const cards = [...content.diagnose.cards];
                    cards[i] = { ...card, title: e.target.value };
                    update("diagnose", { ...content.diagnose, cards });
                  }} />
                </div>
                <div className="col-span-5">
                  <Label className="text-xs">Body</Label>
                  <Input value={card.body} onChange={e => {
                    const cards = [...content.diagnose.cards];
                    cards[i] = { ...card, body: e.target.value };
                    update("diagnose", { ...content.diagnose, cards });
                  }} />
                </div>
                <div className="col-span-1 pt-5">
                  <Button size="icon" variant="ghost" onClick={() => {
                    const cards = content.diagnose.cards.filter((_, idx) => idx !== i);
                    update("diagnose", { ...content.diagnose, cards });
                  }}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Why It Matters">
          <Field label="Eyebrow"><Input value={content.why.eyebrow} onChange={e => update("why", { ...content.why, eyebrow: e.target.value })} /></Field>
          <Field label="Heading"><Input value={content.why.heading} onChange={e => update("why", { ...content.why, heading: e.target.value })} /></Field>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">Questions</Label>
              <Button size="sm" variant="outline" onClick={() => update("why", { ...content.why, questions: [...content.why.questions, ""] })}>
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
            {content.why.questions.map((q, i) => (
              <div key={i} className="flex gap-2">
                <Input value={q} onChange={e => {
                  const questions = [...content.why.questions];
                  questions[i] = e.target.value;
                  update("why", { ...content.why, questions });
                }} />
                <Button size="icon" variant="ghost" onClick={() => {
                  update("why", { ...content.why, questions: content.why.questions.filter((_, idx) => idx !== i) });
                }}><Trash2 className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
          <Field label="Closer (e.g. 'What happens?')"><Input value={content.why.closer} onChange={e => update("why", { ...content.why, closer: e.target.value })} /></Field>
          <Field label="Badge"><Input value={content.why.badge} onChange={e => update("why", { ...content.why, badge: e.target.value })} /></Field>
        </Section>

        <Section title="The Data">
          <Field label="Eyebrow"><Input value={content.data.eyebrow} onChange={e => update("data", { ...content.data, eyebrow: e.target.value })} /></Field>
          <Field label="Heading"><Input value={content.data.heading} onChange={e => update("data", { ...content.data, heading: e.target.value })} /></Field>
          <Field label="Lead"><Textarea rows={2} value={content.data.lead} onChange={e => update("data", { ...content.data, lead: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Figure kicker"><Input value={content.data.fig_kicker} onChange={e => update("data", { ...content.data, fig_kicker: e.target.value })} /></Field>
            <Field label="Figure title"><Input value={content.data.fig_title} onChange={e => update("data", { ...content.data, fig_title: e.target.value })} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Big stat (e.g. 52%)"><Input value={content.data.big_stat} onChange={e => update("data", { ...content.data, big_stat: e.target.value })} /></Field>
            <Field label="Big stat label"><Input value={content.data.big_stat_label} onChange={e => update("data", { ...content.data, big_stat_label: e.target.value })} /></Field>
          </div>
          <Field label="Supporting line"><Textarea rows={2} value={content.data.supporting} onChange={e => update("data", { ...content.data, supporting: e.target.value })} /></Field>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">Bar rows</Label>
              <Button size="sm" variant="outline" onClick={() => update("data", { ...content.data, rows: [...content.data.rows, { label: "New row", value: 0, accent: false }] })}>
                <Plus className="h-4 w-4 mr-1" /> Add row
              </Button>
            </div>
            {content.data.rows.map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 items-center border border-border rounded p-3">
                <div className="col-span-6">
                  <Input value={row.label} onChange={e => {
                    const rows = [...content.data.rows];
                    rows[i] = { ...row, label: e.target.value };
                    update("data", { ...content.data, rows });
                  }} />
                </div>
                <div className="col-span-2">
                  <Input type="number" min={0} max={100} value={row.value} onChange={e => {
                    const rows = [...content.data.rows];
                    rows[i] = { ...row, value: Number(e.target.value) };
                    update("data", { ...content.data, rows });
                  }} />
                </div>
                <div className="col-span-3 flex items-center gap-2">
                  <Switch checked={row.accent} onCheckedChange={(v) => {
                    const rows = [...content.data.rows];
                    rows[i] = { ...row, accent: v };
                    update("data", { ...content.data, rows });
                  }} />
                  <span className="text-xs text-muted-foreground">Gold accent</span>
                </div>
                <div className="col-span-1">
                  <Button size="icon" variant="ghost" onClick={() => {
                    update("data", { ...content.data, rows: content.data.rows.filter((_, idx) => idx !== i) });
                  }}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>

          <Field label="Footnote"><Input value={content.data.footnote} onChange={e => update("data", { ...content.data, footnote: e.target.value })} /></Field>
          <Field label="Source"><Input value={content.data.source} onChange={e => update("data", { ...content.data, source: e.target.value })} /></Field>
        </Section>

        <Section title="Final CTA">
          <Field label="Heading"><Input value={content.final_cta.heading} onChange={e => update("final_cta", { ...content.final_cta, heading: e.target.value })} /></Field>
          <Field label="Body"><Input value={content.final_cta.body} onChange={e => update("final_cta", { ...content.final_cta, body: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="CTA Label"><Input value={content.final_cta.cta_label} onChange={e => update("final_cta", { ...content.final_cta, cta_label: e.target.value })} /></Field>
            <Field label="CTA Link"><Input value={content.final_cta.cta_href} onChange={e => update("final_cta", { ...content.final_cta, cta_href: e.target.value })} /></Field>
          </div>
        </Section>

        <Section title="Footer">
          <Field label="Brand"><Input value={content.footer.brand} onChange={e => update("footer", { ...content.footer, brand: e.target.value })} /></Field>
          <Field label="Tagline"><Textarea rows={2} value={content.footer.tagline} onChange={e => update("footer", { ...content.footer, tagline: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Copyright"><Input value={content.footer.copyright} onChange={e => update("footer", { ...content.footer, copyright: e.target.value })} /></Field>
            <Field label="Sub note"><Input value={content.footer.sub_note} onChange={e => update("footer", { ...content.footer, sub_note: e.target.value })} /></Field>
          </div>
        </Section>

        <div className="flex justify-end gap-3 pb-12">
          <Button variant="outline" onClick={() => save(false)} disabled={saving}>Save Draft</Button>
          <Button onClick={() => save(true)} disabled={saving}>{saving ? "Saving…" : "Publish"}</Button>
        </div>
      </main>
    </div>
  );
};

export default AdminHomepage;

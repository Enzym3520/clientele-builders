import {
  UserPlus,
  ClipboardCheck,
  Megaphone,
  Handshake,
  ShieldCheck,
  Scale,
  GraduationCap,
  Activity,
  Users,
  Target,
  TrendingUp,
  BarChart3,
  Briefcase,
  LineChart,
  Compass,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const HOME_ICONS: Record<string, LucideIcon> = {
  UserPlus,
  ClipboardCheck,
  Megaphone,
  Handshake,
  ShieldCheck,
  Scale,
  GraduationCap,
  Activity,
  Users,
  Target,
  TrendingUp,
  BarChart3,
  Briefcase,
  LineChart,
  Compass,
  Layers,
};

export const HOME_ICON_NAMES = Object.keys(HOME_ICONS);

export interface DiagnoseCard { icon: string; title: string; body: string; }
export interface DataRow { label: string; value: number; accent: boolean; }

export interface HomeContent {
  nav: { wordmark: string; cta_label: string; cta_href: string };
  hero: {
    eyebrow: string;
    headline: string;
    headline_accent: string;
    body: string;
    italic_line: string;
    cta_label: string;
    cta_href: string;
    meta: string;
  };
  diagnose: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: DiagnoseCard[];
  };
  why: {
    eyebrow: string;
    heading: string;
    questions: string[];
    closer: string;
    badge: string;
  };
  data: {
    eyebrow: string;
    heading: string;
    lead: string;
    fig_kicker: string;
    fig_title: string;
    big_stat: string;
    big_stat_label: string;
    supporting: string;
    rows: DataRow[];
    footnote: string;
    source: string;
  };
  final_cta: { heading: string; body: string; cta_label: string; cta_href: string };
  footer: { brand: string; tagline: string; copyright: string; sub_note: string };
}

export const DEFAULT_HOME_CONTENT: HomeContent = {
  nav: { wordmark: "Clientele Builders", cta_label: "Take the Assessment", cta_href: "/scorecard" },
  hero: {
    eyebrow: "Distribution Intelligence",
    headline: "Revenue leaks hide inside",
    headline_accent: "distribution systems.",
    body: "Most life insurance organizations don't have a lead problem. They have recruiting, onboarding, activation, trust, sales, retention, or data leaks costing them revenue every month.",
    italic_line: "We show you where to look before it costs you.",
    cta_label: "Take the Distribution Leak Assessment",
    cta_href: "/scorecard",
    meta: "Takes about 3 minutes",
  },
  diagnose: {
    eyebrow: "What we diagnose",
    heading: "Eight systems. One distribution engine.",
    lead: "The assessment scores each one, then shows you where the biggest leak is.",
    cards: [
      { icon: "UserPlus", title: "Recruiting", body: "Attracting and moving the right people forward." },
      { icon: "ClipboardCheck", title: "Onboarding", body: "New agents know exactly what to do after joining." },
      { icon: "Megaphone", title: "Marketing", body: "Building trust before the conversation begins." },
      { icon: "Handshake", title: "Sales Process", body: "Turning attention into revenue, reliably." },
      { icon: "ShieldCheck", title: "Persistency", body: "Protecting long-term profit." },
      { icon: "Scale", title: "Compensation", body: "Incentives aligned with the outcomes you want." },
      { icon: "GraduationCap", title: "Leadership", body: "Intentionally developing the next generation." },
      { icon: "Activity", title: "Technology & Data", body: "Seeing what is working and what is not." },
    ],
  },
  why: {
    eyebrow: "Why it matters",
    heading: "Small fixes to a leaking system compound fast",
    questions: [
      "If your activation rate improves by 10%...",
      "If persistency improves by 5%...",
      "If recruiting conversion improves by 15%...",
    ],
    closer: "What happens?",
    badge: "Revenue Leak Calculator — coming soon",
  },
  data: {
    eyebrow: "The data",
    heading: "Half the market runs through people like you",
    lead: "This isn't a guess. It's what the data says about who actually sells life insurance in this country.",
    fig_kicker: "Where the money moves",
    fig_title: "One channel sells more than all the others combined",
    big_stat: "52%",
    big_stat_label: "Of life insurance distribution runs through an independent agent",
    supporting: "Your distribution isn't a side function — for most of the market, it's the entire sale.",
    rows: [
      { label: "Independent agents", value: 52, accent: true },
      { label: "Captive / affiliated agents", value: 37, accent: false },
      { label: "Direct response", value: 6, accent: false },
      { label: "Other channels", value: 5, accent: false },
    ],
    footnote: "Approximate share of U.S. life insurance distribution, 2023.",
    source: "Statista; LIMRA; Insurance Information Institute, 2019–2023",
  },
  final_cta: {
    heading: "See where your system is leaking.",
    body: "Takes about 3 minutes for a prioritized diagnosis.",
    cta_label: "Take the Assessment",
    cta_href: "/scorecard",
  },
  footer: {
    brand: "Clientele Builders",
    tagline: "The intelligence layer for life insurance distribution. We help you see where momentum is breaking — before you invest in the wrong solution.",
    copyright: "© 2026 Clientele Builders",
    sub_note: "Not a marketing agency. We start with diagnosis.",
  },
};

export async function fetchPublishedHomeContent(): Promise<HomeContent | null> {
  const { data, error } = await supabase
    .from("cb_home_content" as never)
    .select("content")
    .eq("is_published", true)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error || !data) return null;
  return (data as { content: HomeContent }).content;
}

export async function fetchLatestHomeContent(): Promise<{ id: string; content: HomeContent; is_published: boolean } | null> {
  const { data, error } = await supabase
    .from("cb_home_content" as never)
    .select("id, content, is_published")
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error || !data) return null;
  return data as { id: string; content: HomeContent; is_published: boolean };
}

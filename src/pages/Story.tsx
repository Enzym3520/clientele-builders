import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Story = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cb_posts")
        .select(`*, cb_post_tags(cb_tags(name, slug)), cb_categories(name, slug)`)
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="min-h-screen"><Header /><div className="container max-w-4xl mx-auto px-6 py-24 text-center"><p className="text-muted-foreground">Loading...</p></div><Footer /></div>;
  if (!post) return <div className="min-h-screen"><Header /><div className="container max-w-4xl mx-auto px-6 py-24 text-center"><h1 className="text-4xl font-semibold mb-4">Story Not Found</h1><Link to="/intelligence" className="text-primary hover:underline">← Back to Intelligence</Link></div><Footer /></div>;

  const postAny = post as any;
  const metaTitle = postAny.meta_title || postAny.title;
  const metaDescription = postAny.meta_description || postAny.dek || "";
  const ogImage = postAny.og_image_url || postAny.hero_image_url || postAny.cover_image_url;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={postAny.og_title || postAny.title} />
        <meta property="og:description" content={postAny.og_description || metaDescription} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://www.clientelebuilders.com/story/${postAny.slug}`} />
      </Helmet>
      <Header />
      <article className="container max-w-4xl mx-auto px-6 py-12">
        <Link to="/intelligence" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Intelligence
        </Link>
        <header className="mb-12">
          {postAny.cb_categories && <Link to={`/category/${postAny.cb_categories.slug}`} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary hover:underline mb-4">{postAny.cb_categories.name}</Link>}
          {postAny.publish_date && <div className="text-sm text-muted-foreground mb-4">{new Date(postAny.publish_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}{postAny.reading_time && ` · ${postAny.reading_time} min read`}</div>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">{postAny.title}</h1>
          {postAny.dek && <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{postAny.dek}</p>}
          {postAny.author_name && <div className="mt-8 pt-8 border-t border-border"><div className="text-sm"><span className="font-medium">{postAny.author_name}</span>{postAny.author_role && <span className="text-muted-foreground"> · {postAny.author_role}</span>}</div></div>}
        </header>
        <div
          className="article-body prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postAny.body_html || "", { ALLOWED_TAGS: ['p','br','strong','em','b','i','u','a','ul','ol','li','h1','h2','h3','h4','h5','h6','blockquote','img','figure','figcaption','div','span','pre','code','table','thead','tbody','tr','th','td','hr','sup','sub'], ALLOWED_ATTR: ['href','src','alt','title','class','id','target','rel','width','height','loading'] }) }}
        />
        {postAny.cta_text && postAny.cta_url && (
          <aside className="mt-16 border border-border rounded-lg p-8 md:p-12 bg-card text-center">
            <a href={postAny.cta_url} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg">{postAny.cta_text}<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </a>
          </aside>
        )}
        {postAny.cb_post_tags && postAny.cb_post_tags.length > 0 && (
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {postAny.cb_post_tags.map((pt: any) => (
                <Link key={pt.cb_tags.slug} to={`/tag/${pt.cb_tags.slug}`} className="text-sm px-3 py-1 bg-card border border-border rounded-full hover:bg-primary/10 hover:border-primary transition-colors">{pt.cb_tags.name}</Link>
              ))}
            </div>
          </div>
        )}
      </article>
      <div className="container max-w-3xl mx-auto px-6 py-12"><NewsletterSignup variant="inline" /></div>
      <Footer />
    </div>
  );
};

export default Story;

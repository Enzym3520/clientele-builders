import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const Category = () => {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["category-posts", slug],
    queryFn: async () => {
      const { data: cat, error: catErr } = await supabase.from("categories").select("*").eq("slug", slug as string).single();
      if (catErr) throw catErr;
      const { data: posts, error: postsErr } = await supabase.from("posts").select("*").eq("category_id", cat.id).eq("is_published", true).order("publish_date", { ascending: false });
      if (postsErr) throw postsErr;
      return { category: cat, posts: posts || [] };
    },
  });

  if (isLoading) return <div className="min-h-screen"><Header /><div className="container max-w-7xl mx-auto px-6 py-24 text-center"><p className="text-muted-foreground">Loading...</p></div><Footer /></div>;

  const category = data?.category;
  const posts = data?.posts || [];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{category?.name ? `${category.name} — Intelligence` : "Category"}</title>
        {category?.description && <meta name="description" content={category.description} />}
        <link rel="canonical" href={`https://www.clientelebuilders.com/category/${slug}`} />
      </Helmet>
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <Link to="/intelligence" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"><ArrowLeft className="h-4 w-4" />Back to Newsroom</Link>
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">{category?.name}</h1>
          {category?.description && <p className="text-xl text-muted-foreground max-w-2xl mb-4">{category.description}</p>}
          <p className="text-sm text-muted-foreground">{posts.length} {posts.length === 1 ? "story" : "stories"}</p>
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link key={post.id} to={`/story/${post.slug}`} className="story-card group">
                <div className="story-meta text-sm text-muted-foreground mb-2">{post.publish_date && new Date(post.publish_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}{post.reading_time && ` · ${post.reading_time} min read`}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                {post.dek && <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.dek}</p>}
              </Link>
            ))}
          </div>
        ) : <div className="text-center py-12 text-muted-foreground"><p>No stories in this category yet.</p></div>}
      </main>
      <Footer />
    </div>
  );
};

export default Category;

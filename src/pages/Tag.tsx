import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const Tag = () => {
  const { tag } = useParams();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["tag-posts", tag],
    queryFn: async () => {
      const { data: tagData, error: tagError } = await supabase.from("cb_tags").select("*").eq("slug", tag).single();
      if (tagError) throw tagError;
      const { data: postTags, error: postTagsError } = await supabase.from("cb_post_tags").select(`cb_posts(*)`).eq("tag_id", tagData.id);
      if (postTagsError) throw postTagsError;
      return {
        tag: tagData,
        posts: postTags.map((pt: any) => pt.cb_posts).filter((post: any) => post && post.is_published).sort((a: any, b: any) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()),
      };
    },
  });

  if (isLoading) return <div className="min-h-screen"><Header /><div className="container max-w-7xl mx-auto px-6 py-24 text-center"><p className="text-muted-foreground">Loading...</p></div><Footer /></div>;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"><ArrowLeft className="h-4 w-4" />Back to Newsroom</Link>
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">{posts?.tag.name}</h1>
          <p className="text-xl text-muted-foreground">{posts?.posts.length || 0} {posts?.posts.length === 1 ? "story" : "stories"}</p>
        </div>
        {posts?.posts && posts.posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.posts.map((post: any) => (
              <Link key={post.id} to={`/story/${post.slug}`} className="story-card group">
                <div className="story-meta text-sm text-muted-foreground mb-2">{post.publish_date && new Date(post.publish_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}{post.reading_time && ` · ${post.reading_time} min read`}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                {post.dek && <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.dek}</p>}
              </Link>
            ))}
          </div>
        ) : <div className="text-center py-12 text-muted-foreground"><p>No stories found with this tag.</p></div>}
      </main>
      <Footer />
    </div>
  );
};

export default Tag;

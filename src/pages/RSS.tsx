import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

const RSS = () => {
  const { data: posts } = useQuery({
    queryKey: ["rss-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cb_posts")
        .select("*")
        .eq("is_published", true)
        .order("publish_date", { ascending: false })
        .limit(50);
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (posts) {
      const baseUrl = window.location.origin;
      const now = new Date().toUTCString();
      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Clientele Builders Newsroom</title>
    <link>${baseUrl}/blog</link>
    <description>Weekly systems, strategy, and creative workflow for life insurance professionals.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(post => {
      const pubDate = new Date(post.publish_date).toUTCString();
      const description = post.dek || '';
      const imageTag = post.hero_image_url ? `<enclosure url="${post.hero_image_url}" type="image/jpeg"/>` : '';
      return `<item>
      <title>${post.title}</title>
      <link>${baseUrl}/story/${post.slug}</link>
      <guid>${baseUrl}/story/${post.slug}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      ${post.author_name ? `<author>${post.author_name}</author>` : ''}
      ${imageTag}
    </item>`;
    }).join('\n    ')}
  </channel>
</rss>`;
      const blob = new Blob([rss], { type: "application/rss+xml" });
      const url = URL.createObjectURL(blob);
      window.location.href = url;
    }
  }, [posts]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Generating RSS feed...</p>
    </div>
  );
};

export default RSS;

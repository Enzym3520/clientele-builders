import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AdminReadme = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin/login");
        return;
      }
      
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      
      const hasAccess = roles?.some(r => 
        ['admin', 'editor'].includes(r.role)
      );
      
      if (!hasAccess) {
        toast({ 
          title: "Access Denied", 
          description: "Admin or editor privileges required",
          variant: "destructive" 
        });
        navigate('/');
        return;
      }
      
      setIsAuthorized(true);
    };
    
    checkAccess();
  }, [navigate, toast]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8">Admin Documentation</h1>
        
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to the Clientele Builders Newsroom admin panel. This guide will help you manage content, integrate external services, and customize your site.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Post Management</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Creating Posts</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Title: Main headline (required)</li>
                  <li>Slug: URL-friendly version (auto-generated from title)</li>
                  <li>Dek: Subtitle/preview text</li>
                  <li>Author Name &amp; Role: Attribution info</li>
                  <li>Publish Date: Schedule or set live date</li>
                  <li>Reading Time: Estimated minutes to read</li>
                  <li>Cover Image URL: Thumbnail for cards (16:9 ratio)</li>
                  <li>Hero Image URL: Large image at top of article (21:9 ratio)</li>
                  <li>Body HTML: Article content (supports full HTML)</li>
                  <li>Tags: Categorize with existing or new tags</li>
                  <li>Featured: Mark for homepage hero display</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">SEO Overrides (Optional)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Meta Title: Custom page title (defaults to post title)</li>
                  <li>Meta Description: Custom search description (defaults to dek)</li>
                  <li>OG Title: Custom Open Graph title for social shares</li>
                  <li>OG Description: Custom OG description for social shares</li>
                  <li>OG Image URL: Custom social share image (defaults to hero/cover)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Newsletter Integration (Drip)</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>To connect your Drip email forms:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Log into your Drip account and create a form</li>
                <li>Copy the embed HTML code from Drip</li>
                <li>Open <code className="bg-card px-2 py-1 rounded">src/components/NewsletterSignup.tsx</code></li>
                <li>Find the section marked <code className="bg-card px-2 py-1 rounded">{`<!-- User will paste their Drip form HTML here -->`}</code></li>
                <li>Paste your Drip HTML in that section</li>
                <li>Remove the <code className="bg-card px-2 py-1 rounded">hidden</code> class from the wrapper div</li>
              </ol>
              <p className="mt-4">The newsletter component appears on:</p>
              <ul className="list-disc list-inside">
                <li>Below every article</li>
                <li>Homepage (mid-page)</li>
                <li>/newsletter standalone page</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Analytics Setup (Google Tag Manager)</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>To add Google Tag Manager tracking:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Create or access your GTM container</li>
                <li>Copy your GTM container snippet (starts with GTM-XXXXXX)</li>
                <li>Open <code className="bg-card px-2 py-1 rounded">index.html</code></li>
                <li>Paste the head snippet in the <code className="bg-card px-2 py-1 rounded">{`<head>`}</code> section</li>
                <li>Paste the body snippet right after the opening <code className="bg-card px-2 py-1 rounded">{`<body>`}</code> tag</li>
              </ol>
              <p className="mt-4">Pre-configured events you can track in GTM:</p>
              <ul className="list-disc list-inside">
                <li><code className="bg-card px-2 py-1 rounded">newsletter_subscribed</code> - Fires when someone submits the newsletter form</li>
              </ul>
              <p className="mt-4">
                Use these events to set up triggers for Google Analytics 4, Meta Pixel, or other tracking tags.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Design System</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Core design tokens are defined in:</p>
              <ul className="list-disc list-inside mb-4">
                <li><code className="bg-card px-2 py-1 rounded">src/index.css</code> - Color variables, typography, spacing</li>
                <li><code className="bg-card px-2 py-1 rounded">tailwind.config.ts</code> - Tailwind theme extensions</li>
              </ul>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Key Design Elements</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Base background: <code className="bg-card px-2 py-1 rounded">#0B0B0B</code></li>
                  <li>Text: <code className="bg-card px-2 py-1 rounded">#EDEDED</code></li>
                  <li>Accent: <code className="bg-card px-2 py-1 rounded">#0EA5E9</code> (electric blue)</li>
                  <li>Dividers: <code className="bg-card px-2 py-1 rounded">#1C1C1C</code></li>
                  <li>Typography: System UI / SF Pro for headings, Inter for body</li>
                  <li>Max content width: 1200px</li>
                  <li>Transitions: 200ms for smooth interactions</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Selectors for Custom Styling</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>If you need to add custom CSS, target these stable IDs and classes:</p>
              <ul className="list-disc list-inside space-y-1 font-mono text-sm">
                <li>#hero - Homepage hero section</li>
                <li>#cards - Blog card grid container</li>
                <li>.story-card - Individual blog post cards</li>
                <li>.story-meta - Date and reading time display</li>
                <li>.article-body - Main article content wrapper</li>
                <li>.pullquote - Article pull quotes</li>
                <li>#newsletter-inline - Newsletter signup component</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">SEO &amp; Technical</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Built-in SEO features:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Automatic meta tags (title, description) from post data</li>
                <li>Open Graph tags for social sharing</li>
                <li>Twitter Card support</li>
                <li>JSON-LD structured data (Article schema)</li>
                <li>Canonical URLs on all pages</li>
                <li>XML sitemap at <code className="bg-card px-2 py-1 rounded">/sitemap.xml</code></li>
                <li>RSS feed at <code className="bg-card px-2 py-1 rounded">/feed.xml</code></li>
                <li>robots.txt configured</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">User Roles</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Three role levels are available:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-foreground">Admin</strong> - Full access to all posts, can delete</li>
                <li><strong className="text-foreground">Editor</strong> - Can edit all posts, cannot delete</li>
                <li><strong className="text-foreground">Author</strong> - Can only edit own posts</li>
              </ul>
              <p className="mt-4">
                Roles are set in the profiles table. Contact your site administrator to change user roles.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Support &amp; Resources</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Need help? Here are some useful resources:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Contact form: <a href="/contact" className="text-primary hover:underline">/contact</a></li>
                <li>Sitemap: <a href="/sitemap.xml" className="text-primary hover:underline">/sitemap.xml</a></li>
                <li>RSS feed: <a href="/feed.xml" className="text-primary hover:underline">/feed.xml</a></li>
              </ul>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminReadme;

import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function generateSitemap() {
  console.log('Generating sitemap...');

  try {
    // Fetch all published posts
    const { data: posts, error } = await supabase
      .from('cb_posts')
      .select('slug, updated_at, publish_date')
      .eq('is_published', true)
      .order('publish_date', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      process.exit(1);
    }

    const baseUrl = 'https://www.clientelebuilders.com';
    const currentDate = new Date().toISOString();

    // Build sitemap XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static pages
    const staticPages = [
      { loc: '/', priority: '1.0', changefreq: 'weekly' },
      { loc: '/about', priority: '0.8', changefreq: 'weekly' },
      { loc: '/contact', priority: '0.8', changefreq: 'weekly' },
      { loc: '/intelligence', priority: '0.8', changefreq: 'weekly' },
      { loc: '/consulting', priority: '0.7', changefreq: 'weekly' },
      { loc: '/frameworks', priority: '0.7', changefreq: 'weekly' },
      { loc: '/lifeinsurance', priority: '0.7', changefreq: 'monthly' },
      { loc: '/newsletter', priority: '0.7', changefreq: 'weekly' },
      { loc: '/reports', priority: '0.7', changefreq: 'weekly' },
      { loc: '/reports/agent-production', priority: '0.7', changefreq: 'weekly' },
      { loc: '/reports/agent-production/briefs', priority: '0.7', changefreq: 'weekly' },
      { loc: '/scorecard', priority: '0.7', changefreq: 'weekly' },
      { loc: '/insights/recruiting-difficulty', priority: '0.6', changefreq: 'monthly' },
      { loc: '/insights/demand-technology-buyer', priority: '0.6', changefreq: 'monthly' },
      { loc: '/insights/market-capture', priority: '0.6', changefreq: 'monthly' },
      { loc: '/privacy', priority: '0.4', changefreq: 'monthly' },
      { loc: '/terms', priority: '0.4', changefreq: 'monthly' },
    ];

    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page.loc}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    });

    // Dynamic blog post pages
    if (posts && posts.length > 0) {
      posts.forEach(post => {
        const lastmod = post.updated_at || post.publish_date || currentDate;
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}/story/${post.slug}</loc>\n`;
        xml += `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n';
      });
    }

    xml += '</urlset>';

    // Write to public/sitemap.xml
    const publicDir = join(__dirname, '..', 'public');
    const sitemapPath = join(publicDir, 'sitemap.xml');
    
    writeFileSync(sitemapPath, xml, 'utf-8');
    
    console.log(`Sitemap generated successfully at ${sitemapPath}`);
    console.log(`   - Static pages: ${staticPages.length}`);
    console.log(`   - Blog posts: ${posts?.length || 0}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();

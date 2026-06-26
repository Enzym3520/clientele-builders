import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { supabase } from './prerender-supabase.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the server render function
async function importServerModule() {
  const candidates = [
    path.resolve(__dirname, 'dist/server/entry-server.mjs'),
    path.resolve(__dirname, 'dist/server/entry-server.js'),
  ];

  for (const p of candidates) {
    try {
      const mod = await import(pathToFileURL(p).href);
      const renderFn =
        typeof mod.render === 'function'
          ? mod.render
          : typeof mod.default === 'function'
          ? mod.default
          : typeof mod.default?.render === 'function'
          ? mod.default.render
          : null;

      if (typeof renderFn === 'function') {
        console.log(`SSR module loaded from ${p}`);
        return renderFn;
      }
    } catch (e) {
      console.warn(`Could not import SSR module at ${p}:`, e?.message || e);
    }
  }

  console.error('Failed to find SSR bundle. Skipping prerender.');
  return null;
}

async function prerender() {
  console.log('Starting prerender process...');

  const render = await importServerModule();
  if (!render) {
    return;
  }

  // Read the client-side HTML template
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );

  // Define static routes
  const staticRoutes = [
    { path: '/', title: 'Home' },
    { path: '/home-v2', title: 'Home Preview' },
    { path: '/blog', title: 'Blog' },
    { path: '/about', title: 'About' },
    { path: '/newsletter', title: 'Newsletter' },
    { path: '/contact', title: 'Contact' },
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
  ];

  // Fetch dynamic routes from Supabase
  console.log('Fetching blog posts...');
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, title')
    .eq('is_published', true);

  console.log('Fetching tags...');
  const { data: tags } = await supabase
    .from('tags')
    .select('slug, name');

  console.log('Fetching categories...');
  const { data: categories } = await supabase
    .from('categories')
    .select('slug, name');

  // Build dynamic routes
  const dynamicRoutes = [
    ...(posts || []).map(post => ({
      path: `/story/${post.slug}`,
      title: post.title,
    })),
    ...(tags || []).map(tag => ({
      path: `/tag/${tag.slug}`,
      title: `Tag: ${tag.name}`,
    })),
    ...(categories || []).map(cat => ({
      path: `/category/${cat.slug}`,
      title: `${cat.name} — Intelligence`,
    })),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  console.log(`Pre-rendering ${allRoutes.length} routes...`);

  // Pre-render each route
  for (const route of allRoutes) {
    try {
      console.log(`Rendering ${route.path}...`);
      
      const { html: appHtml } = await render(route.path);
      
      // Replace the placeholder with the rendered app HTML
let finalHtml = template.includes('<!--app-html-->')
  ? template.replace('<!--app-html-->', appHtml)
  : template.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${appHtml}<\/div>`);
      
      // Optionally update the title tag
      finalHtml = finalHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${route.title}</title>`
      );

      // Determine output path
      let outputPath;
      if (route.path === '/') {
        outputPath = path.resolve(__dirname, 'dist/index.html');
      } else {
        const routePath = route.path.replace(/^\//, '');
        const dir = path.resolve(__dirname, 'dist', routePath);
        fs.mkdirSync(dir, { recursive: true });
        outputPath = path.join(dir, 'index.html');
      }

      // Write the pre-rendered HTML
      fs.writeFileSync(outputPath, finalHtml);
      console.log(`✓ Generated ${outputPath}`);
    } catch (error) {
      console.error(`Error rendering ${route.path}:`, error);
    }
  }

  console.log('Prerender completed successfully!');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});

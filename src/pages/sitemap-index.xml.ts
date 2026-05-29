import { getCollection } from 'astro:content';

const SITE = 'https://sagardash.me';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toIsoDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export async function GET() {
  const projects = await getCollection('projects');
  const sortedProjects = projects.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const urls = [
    {
      loc: '/',
      lastmod: toIsoDate(new Date()),
      changefreq: 'monthly',
      priority: '1.0',
    },
    ...sortedProjects.map((entry) => ({
      loc: `/projects/${entry.slug}/`,
      lastmod: toIsoDate(entry.data.date),
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(new URL(url.loc, SITE).toString())}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

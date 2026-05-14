export async function GET() {
  const posts = [
    {
      slug: 'how-i-built-this-blog',
      title: 'How I Built This Blog for Free (Complete Tech Stack)',
      description: 'A step-by-step guide to building a modern, high-performance blog using Astro, Netlify, and zero monthly costs.',
      date: 'May 8, 2026',
    },
    {
      slug: 'chatgpt-prompts-save-time',
      title: '5 ChatGPT Prompts That Save Me 10 Hours Every Week',
      description: 'The exact prompts I use for research, writing, and coding.',
      date: 'May 5, 2026',
    },
    {
      slug: 'notion-personal-crm',
      title: 'Building a Personal CRM in Notion (Free Template)',
      description: 'Track job applications, freelance clients, and networking contacts in one place.',
      date: 'May 2, 2026',
    },
  ];

  const base = 'https://mdshahnawaz874-cloud.github.io/Build-With-AI';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Build With AI</title>
    <link>${base}</link>
    <description>Practical AI tools and strategies for students</description>
    ${posts.map(p => `
    <item>
      <title>${p.title}</title>
      <link>${base}/blog/${p.slug}</link>
      <description>${p.description}</description>
      <pubDate>${p.date}</pubDate>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}

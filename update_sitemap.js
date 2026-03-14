const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://bestmayongtantrikk.com';

const pages = [
  'index.html', 'about.html', 'services.html', 'contact.html',
  'best-mayong-tantrik.html', 'black-magic-removal-assam.html',
  'mayong-tantrik-mobile-number.html', 'love-problem-solution-mayong.html',
  'marriage-problem-tantrik.html', 'vashikaran-expert-assam.html',
  'tantrik-baba-guwahati.html', 'spiritual-healing-mayong.html',
  'relationship-problem-solution.html', 'mayong-tantra-expert.html'
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

pages.forEach(p => {
    const priority = p === 'index.html' ? '1.0' : (p.includes('-') ? '0.9' : '0.8');
    xml += `    <url>\n        <loc>${DOMAIN}/${p}</loc>\n        <lastmod>2024-05-15</lastmod>\n        <changefreq>monthly</changefreq>\n        <priority>${priority}</priority>\n    </url>\n`;
});

xml += '</urlset>';
fs.writeFileSync('sitemap.xml', xml);
console.log('Sitemap updated with all 14 pages.');

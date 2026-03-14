const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://bestmayongtantrikk.com';
const APP_TITLE = 'Best Mayong Tantrik - Aadarsh Aacharya';

// The user's targeted keywords:
const KEYWORDS = 'best tantrik, mayong tantrik, black magic, ojha tantrik, best mayong tantrik, aadarsh aacharya, aadarsh tantrik, tantrik near me, best tantrik mobile no, mayong tantrik mobile no, vashikaran, love problem solution, black magic removal, husband wife dispute, +91 6901842322';

const KEYWORD_TITLE = 'Best Mayong Tantrik | Aadarsh Aacharya | Black Magic Expert';
const KEYWORD_DESC = 'Consult Aadarsh Aacharya, the Best Mayong Tantrik and Ojha Tantrik near you. Expert in Black Magic Removal, Vashikaran, and Love Solutions. Call +91 6901842322.';

const files = [
    { file: 'index.html', title: KEYWORD_TITLE, url: '/' },
    { file: 'about.html', title: `About | ${KEYWORD_TITLE}`, url: '/about.html' },
    { file: 'services.html', title: `Our Services | ${KEYWORD_TITLE}`, url: '/services.html' },
    { file: 'contact.html', title: `Contact Us | ${KEYWORD_TITLE}`, url: '/contact.html' }
];

files.forEach(({ file, title, url }) => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // First remove old dynamic/SEO block if we put one in before or old title/meta descriptions
    content = content.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
    
    // We'll replace the old description tag entirely if it exists
    if(content.includes('<meta name="description"')) {
        content = content.replace(/<meta name="description"[^>]*>/s, '');
    }

    // Prepare full SEO Block to insert right after the meta viewport
    const seoBlock = `\n    <!-- SEO & Meta Tags -->\n` +
                     `    <meta name="description" content="${KEYWORD_DESC}">\n` +
                     `    <meta name="keywords" content="${KEYWORDS}">\n` +
                     `    <meta name="author" content="Aadarsh Aacharya">\n` +
                     `    <link rel="canonical" href="${DOMAIN}${url}" />\n` +
                     `    <!-- Open Graph Tags -->\n` +
                     `    <meta property="og:title" content="${title}">\n` +
                     `    <meta property="og:description" content="${KEYWORD_DESC}">\n` +
                     `    <meta property="og:url" content="${DOMAIN}${url}">\n` +
                     `    <meta property="og:type" content="website">\n` +
                     `    <meta property="og:image" content="${DOMAIN}/images/logo.png">\n` +
                     `    <meta property="og:site_name" content="${APP_TITLE}">\n`;

    content = content.replace(/<meta name="viewport" content="width=device-width, initial-scale=1\.0">/, `<meta name="viewport" content="width=device-width, initial-scale=1.0">${seoBlock}`);

    // If there were any old viewport tags not specifically strictly as above, try this:
    if (!content.includes(seoBlock) && content.includes('<meta charset="UTF-8">')) {
         content = content.replace(/<meta charset="UTF-8">/, `<meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">${seoBlock}`);
    }

    fs.writeFileSync(filename, content);
});

console.log('SEO tags injected into all HTML files.');

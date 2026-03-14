const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'about.html', 'services.html', 'contact.html',
    'best-mayong-tantrik.html', 'mayong-tantrik-mobile-number.html',
    'love-problem-solution-mayong.html', 'black-magic-removal-assam.html',
    'marriage-problem-tantrik.html', 'vashikaran-expert-assam.html',
    'tantrik-baba-guwahati.html', 'spiritual-healing-mayong.html',
    'relationship-problem-solution.html', 'mayong-tantra-expert.html'
];

const cssContent = fs.readFileSync(path.join(__dirname, 'css', 'style.css'), 'utf8');

files.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Inline CSS
    const cssTag = '<style>' + cssContent + '</style>';
    content = content.replace(/<link rel="stylesheet" href="\.\/css\/style\.css">/, cssTag);

    // 2. Fix Heading Hierarchy (specifically services cards skipping H2)
    // Replace <h3 with <h2 in card headers if they are the direct level after H1 sections
    // In our specific layouts, the card titles were h3. Let's make them h2 where appropriate.
    if (file === 'services.html') {
        content = content.replace(/<h3 class="text-2xl font-bold/g, '<h2 class="text-2xl font-bold');
        content = content.replace(/<\/h3>/g, '</h2>'); // Be careful with this global replace if h3 were used elsewhere
    }

    // In SEO pages, titles like "Search Queries & FAQ" were h2, and questions were h3. This is correct.
    // However, the main sections in SEO pages (The Tradition..., How Aacharya..., etc) were h2. Correct.

    fs.writeFileSync(filePath, content);
});

console.log('CSS inlined and heading hierarchy adjusted.');

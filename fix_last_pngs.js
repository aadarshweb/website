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

files.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix remaining .png in OG tags and other locations
    // Replace all instances of logo.png, hero_bg.png, etc with .webp
    content = content.replace(/logo\.png/g, 'logo.webp');
    content = content.replace(/hero_bg\.png/g, 'hero_bg.webp');
    content = content.replace(/mandala\.png/g, 'mandala.webp');
    content = content.replace(/religious\.png/g, 'religious.webp');

    fs.writeFileSync(filePath, content);
});

console.log('All remaining .png references updated to .webp.');

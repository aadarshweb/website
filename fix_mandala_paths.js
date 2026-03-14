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

    // 1. Fix .png to .webp in inline styles (e.g. background-image)
    content = content.replace(/\.\/images\/mandala\.png/g, './images/mandala.webp');
    content = content.replace(/\.\/images\/hero_bg\.png/g, './images/hero_bg.webp');
    content = content.replace(/\.\/images\/logo\.png/g, './images/logo.webp');
    content = content.replace(/\.\/images\/religious\.png/g, './images/religious.webp');

    // 2. Fix typos in mandala classes
    content = content.replace(/h-\[300:h\]/g, 'h-[300vh]');
    content = content.replace(/h-\[300vh\];/g, 'h-[300vh]'); // Ensure no weird semi-colons inside class quotes

    fs.writeFileSync(filePath, content);
});

console.log('Mandala paths and typos fixed across all pages.');

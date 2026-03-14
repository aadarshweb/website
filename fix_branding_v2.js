const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'about.html', 'services.html', 'contact.html',
    'best-mayong-tantrik.html', 'mayong-tantrik-mobile-number.html',
    'love-problem-solution-mayong.html', 'black-magic-removal-assam.html',
    'marriage-problem-tantrik.html', 'vashikaran-expert-assam.html',
    'tantrik-baba-guwahati.html', 'spiritual-healing-mayong.html',
    'relationship-problem-solution.html', 'mayong-tantra-expert.html',
    path.join('js', 'script.js')
];

// Name variations to catch
const nameReplacements = [
    { target: /Joy Das/g, replacement: 'Aadarsh Aacharya' },
    { target: /जॉय दास/g, replacement: 'आदर्श आचार्य' },
    { target: /जॉय/g, replacement: 'आदर्श' },
    { target: /জয় দাস/g, replacement: 'আদৰ্শ আচাৰ্য' },
    { target: /জয় দাস/g, replacement: 'আদৰ্শ আচাৰ্য' }, // Different 'y'
    { target: /জয়/g, replacement: 'আদৰ্শ' },
    { target: /দাস/g, replacement: 'আচাৰ্য' } // Catch lingering 'Das' in Assamese/Hindi contexts where appropriate
];

files.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Branding Replacements
    nameReplacements.forEach(r => {
        content = content.replace(r.target, r.replacement);
    });

    // Email Fixes
    content = content.replace(/joydas@gmail\.com/gi, 'aadarshaacharya@gmail.com');

    // Phone Fixes
    content = content.replace(/tel:\+91[0-9]{10}/g, 'tel:+916901842322');
    content = content.replace(/\+91\s?[0-9]{10}/g, '+91 6901842322');

    fs.writeFileSync(filePath, content);
});

console.log('Branding and contact info fixed with extreme prejudice.');

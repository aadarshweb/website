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

files.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Branding Replacements
    // English
    content = content.replace(/Joy Das/g, 'Aadarsh Aacharya');
    // Hindi
    content = content.replace(/जॉय दास/g, 'आदर्श आचार्य');
    // Assamese
    content = content.replace(/জয় দাস/g, 'আদৰ্শ আচাৰ্য');

    // Email Fix
    content = content.replace(/joydas@gmail\.com/gi, 'aadarshaacharya@gmail.com');
    // (Assuming there might be others, but the user spec says to use this one)

    // Mobile Number Fix
    // Replace any old number formats with the new one
    // User wants: +91 6901842322
    // I'll look for common patterns or just replace any phone links if they are wrong
    content = content.replace(/tel:\+91[0-9]{10}/g, 'tel:+916901842322');
    // If there are space-separated versions
    content = content.replace(/\+91\s*[0-9]{10}/g, '+91 6901842322');

    fs.writeFileSync(filePath, content);
});

console.log('Branding and contact info fixed globally.');

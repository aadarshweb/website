const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

files.forEach(file => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Fix the broken services glow from previous script
    content = content.replace(/src="\.\/images\/services\.png"/g, 'src="./images/mandala.png"');

    // Add spiritual background to plain sections
    content = content.replace(/<section class="([^"]*)">\s*(<div class="max-w-[0-9a-z]+)/g, (match, classes, innerDiv) => {
        // if it already has relative overflow-hidden, don't mess with it
        if (classes.includes('relative')) {
            return match;
        }

        return `<section class="${classes} relative overflow-hidden z-10">\n` +
               `        <div class="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none flex justify-center items-center">\n` +
               `            <img src="./images/mandala.png" alt="Spiritual Background" class="w-full h-full object-cover mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]">\n` +
               `        </div>\n` +
               `        <div class="absolute inset-0 bg-slate-900/50 z-[-1] pointer-events-none"></div>\n` +
               `        ${innerDiv}`;
    });

    fs.writeFileSync(filename, content);
});

console.log('Applied glowing mandala to all sections.');

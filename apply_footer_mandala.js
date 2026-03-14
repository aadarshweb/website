const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

files.forEach(file => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Make sure we only apply it if not already there
    if (!content.includes('<!-- Footer Mandala Background -->')) {
        content = content.replace(
            /<footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 mt-auto">\s*<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">/g,
            `<footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 mt-auto relative overflow-hidden z-10">\n` +
            `        <!-- Footer Mandala Background -->\n` +
            `        <div class="absolute w-[300vw] h-[300vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-[0.20] pointer-events-none mix-blend-screen animate-[pulse_6s_ease-in-out_infinite] animate-[spin_180s_linear_infinite]" style="background-image: url('./images/mandala.png'); background-size: 400px; background-repeat: repeat;"></div>\n` +
            `        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-slate-950/80 to-slate-950 z-[-1] pointer-events-none"></div>\n` +
            `        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">`
        );
        fs.writeFileSync(filename, content);
    }
});
console.log('Footer mandala applied.');

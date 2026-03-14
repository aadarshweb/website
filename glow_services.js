const fs = require('fs');

function processFile(filename, pClass) {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Make the section container relative and overflow hidden
    content = content.replace(
        /<section class="(.*?) bg-slate-900 border-t border-orange-900\/50 relative z-20(.*?)">\s*<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">/g,
        `<section class="$1 bg-slate-900 border-t border-orange-900/50 relative z-20 overflow-hidden$2">\n` +
        `        <!-- Spiritual glow background -->\n` +
        `        <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex justify-center items-center">\n` +
        `            <img src="./images/services.png" alt="Spiritual Mandala" class="w-full h-full object-cover sm:w-auto sm:h-auto sm:min-w-[800px] sm:min-h-[800px] animate-[pulse_4s_ease-in-out_infinite] mix-blend-screen">\n` +
        `        </div>\n` +
        `        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-900/0 to-transparent z-0 pointer-events-none"></div>\n` +
        `        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">`
    );

    const oldCardClass = `bg-slate-800 rounded-xl ${pClass} border border-slate-700 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(234,88,12,0.15)] transition-all duration-300 group`;
    const newCardClass = `bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl ${pClass} border border-orange-900/30 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all duration-500 group relative overflow-hidden`;
    content = content.replaceAll(oldCardClass, newCardClass);

    const oldIconClass = 'w-14 h-14 rounded-full bg-orange-900/50 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors';
    const newIconClass = 'w-16 h-16 rounded-full bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center mb-6 text-orange-400 group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-orange-900/50 border border-orange-500/20 relative z-10';
    content = content.replaceAll(oldIconClass, newIconClass);

    const absoluteSVG = `\n                    <!-- Glow Watermark -->\n                    <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 text-orange-500 pointer-events-none z-0">\n                        <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v2h-2zm0 4h2v6h-2z"/></svg>\n                    </div>\n`;
    content = content.replaceAll(`<div class="${newIconClass}">`, absoluteSVG + `                    <div class="${newIconClass}">`);

    // Title class replace (for index.html and services.html)
    // index.html uses text-xl, services.html uses text-2xl
    content = content.replaceAll('text-xl font-bold text-slate-100 mb-3', 'text-xl font-bold text-orange-50 mb-3 group-hover:text-orange-400 transition-colors relative z-10');
    content = content.replaceAll('text-2xl font-bold text-slate-100 mb-4', 'text-2xl font-bold text-orange-50 mb-4 group-hover:text-orange-400 transition-colors relative z-10');

    // Paragraph class replace
    content = content.replaceAll('text-slate-400 leading-relaxed mb-4', 'text-slate-400 leading-relaxed mb-4 relative z-10');
    content = content.replaceAll('text-slate-400 leading-relaxed mb-6', 'text-slate-400 leading-relaxed mb-6 relative z-10');

    fs.writeFileSync(filename, content);
}

processFile('index.html', 'p-6');
processFile('services.html', 'p-8');
console.log('Glow processed.');

const fs = require('fs');
const path = require('path');

const filesToUpdate = ['about.html', 'services.html', 'contact.html'];
const regex = /<a href="#" class="text-slate-500 hover:text-orange-400 transition">\s*<span class="sr-only">WhatsApp<\/span>/g;
const replacement = `<a href="https://wa.me/916901842322" class="text-slate-500 hover:text-orange-400 transition" target="_blank" rel="noopener">\n                        <span class="sr-only">WhatsApp</span>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(regex, replacement);
        fs.writeFileSync(fullPath, content);
    }
});
console.log('WhatsApp replaced.');

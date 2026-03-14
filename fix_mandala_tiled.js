const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

files.forEach(file => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Replace global background (opacity 0.25, z-[-1])
    content = content.replace(
        /<div class="absolute inset-0 z-\[-1\] opacity-\[0\.25\] pointer-events-none flex justify-center items-center">[\s\S]*?<\/div>/g,
        `<div class="absolute w-[300vw] h-[300vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-[0.20] pointer-events-none mix-blend-screen animate-[pulse_6s_ease-in-out_infinite] animate-[spin_180s_linear_infinite]" style="background-image: url('./images/mandala.png'); background-size: 400px; background-repeat: repeat;"></div>`
    );

    // Replace Specific Services background (opacity 0.20, z-0)
    content = content.replace(
        /<div class="absolute inset-0 z-0 opacity-\[0\.20\] pointer-events-none flex justify-center items-center">[\s\S]*?<\/div>/g,
        `<div class="absolute w-[300vw] h-[300vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.20] pointer-events-none mix-blend-screen animate-[pulse_4s_ease-in-out_infinite] animate-[spin_180s_linear_infinite]" style="background-image: url('./images/mandala.png'); background-size: 400px; background-repeat: repeat;"></div>`
    );

    fs.writeFileSync(filename, content);
});

console.log('Tiled mandala applied successfully.');

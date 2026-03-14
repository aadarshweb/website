const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

files.forEach(file => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Make the mandala more visible and add a slow spin animation
    // Replacement 1: For the global empty sections added via apply_mandala.js
    content = content.replace(
        /class="absolute inset-0 z-\[-1\] opacity-\[0\.05\] pointer-events-none flex justify-center items-center"/g,
        'class="absolute inset-0 z-[-1] opacity-[0.25] pointer-events-none flex justify-center items-center"'
    );
    
    // Replacement 1b: Image class for empty sections
    content = content.replace(
        /class="w-full h-full object-cover mix-blend-screen animate-\[pulse_6s_ease-in-out_infinite\]"/g,
        'class="w-full h-full object-cover mix-blend-screen animate-[pulse_6s_ease-in-out_infinite] animate-[spin_60s_linear_infinite]"'
    );

    // Replacement 2: For the glowing services section (added via glow_services.js)
    content = content.replace(
        /class="absolute inset-0 z-0 opacity-\[0\.03\] pointer-events-none flex justify-center items-center"/g,
        'class="absolute inset-0 z-0 opacity-[0.20] pointer-events-none flex justify-center items-center"'
    );
    
    // Replacement 2b: Image class for glowing services section
    content = content.replace(
        /class="w-full h-full object-cover sm:w-auto sm:h-auto sm:min-w-\[800px\] sm:min-h-\[800px\] animate-\[pulse_4s_ease-in-out_infinite\] mix-blend-screen"/g,
        'class="w-full h-full object-cover sm:w-auto sm:h-auto sm:min-w-[800px] sm:min-h-[800px] animate-[pulse_4s_ease-in-out_infinite] animate-[spin_60s_linear_infinite] mix-blend-screen"'
    );

    // Replacement 3: For the watermark inside the service cards
    content = content.replace(
        /class="absolute -right-4 -bottom-4 opacity-\[0\.03\] group-hover:opacity-\[0\.08\] transition-opacity duration-500 text-orange-500 pointer-events-none z-0"/g,
        'class="absolute -right-4 -bottom-4 opacity-[0.10] group-hover:opacity-[0.25] transition-opacity duration-500 text-orange-500 pointer-events-none z-0 rotate-12"'
    );

    fs.writeFileSync(filename, content);
});

console.log('Opacity and animation updated.');

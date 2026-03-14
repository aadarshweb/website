const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

files.forEach(file => {
    let filename = path.join(__dirname, file);
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');

    // Replace the classes on the spinning mandalas to make them huge so edges don't show
    content = content.replace(
        /class="w-full h-full object-cover mix-blend-screen animate-\[pulse_6s_ease-in-out_infinite\] animate-\[spin_60s_linear_infinite\]"/g,
        'class="absolute w-[250%] h-[250%] sm:w-[150%] sm:h-[150%] max-w-none object-cover mix-blend-screen animate-[pulse_6s_ease-in-out_infinite] animate-[spin_60s_linear_infinite]"'
    );

    content = content.replace(
        /class="w-full h-full object-cover sm:w-auto sm:h-auto sm:min-w-\[800px\] sm:min-h-\[800px\] animate-\[pulse_4s_ease-in-out_infinite\] animate-\[spin_60s_linear_infinite\] mix-blend-screen"/g,
        'class="absolute w-[250%] h-[250%] sm:w-[150%] sm:h-[150%] max-w-none object-cover animate-[pulse_4s_ease-in-out_infinite] animate-[spin_60s_linear_infinite] mix-blend-screen"'
    );

    fs.writeFileSync(filename, content);
});

console.log('Rotation clipping fixed.');

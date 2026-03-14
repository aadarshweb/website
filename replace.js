const fs = require('fs');
const path = require('path');

const filesToUpdate = ['index.html', 'about.html', 'services.html', 'contact.html', 'js/script.js'];

const replacements = [
    { regex: /Joydastantrik@gmail\.com/gi, replacement: 'aadarshaacharya@gmail.com' },
    { regex: /Joy Das Tantrik/gi, replacement: 'Aadarsh Aacharya' },
    { regex: /Joy Das/gi, replacement: 'Aadarsh Aacharya' },
    { regex: /JOY DAS/gi, replacement: 'AADARSH AACHARYA' },
    { regex: /9706378124/g, replacement: '6901842322' }
];

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if(fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        replacements.forEach(({regex, replacement}) => {
            content = content.replace(regex, replacement);
        });
        fs.writeFileSync(fullPath, content);
    }
});
console.log('Replacement complete.');

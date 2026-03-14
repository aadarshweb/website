const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'js', 'script.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

// Primitive minification (remove comments and extra whitespace/newlines)
jsContent = jsContent
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1') // remove comments
    .replace(/\s+/g, ' ') // collapse whitespace
    .replace(/\s*([{};,:])\s*/g, '$1') // remove space around punctuation
    .trim();

fs.writeFileSync(jsPath, jsContent);
console.log('JavaScript minified.');

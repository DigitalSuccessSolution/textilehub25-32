const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the exact className string
  const target = 'className="relative h-52 sm:h-64 overflow-hidden flex items-center justify-center text-center"';
  const replacement = 'className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"';
  
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated height in', file);
  }
});
console.log('Done');

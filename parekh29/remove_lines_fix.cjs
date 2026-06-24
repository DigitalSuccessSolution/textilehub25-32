const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the div exactly as it appears
  const regex = /<div className="absolute top-0 left-0 right-0 h-0\.5"\s*style=\{\{\s*background:\s*'linear-gradient[^}]*'\}\}\s*\/>/g;
  const regex2 = /<div className="absolute top-0 left-0 right-0 h-0\.5 z-20"\s*style=\{\{\s*background:\s*'linear-gradient[^}]*'\}\}\s*\/>/g;
  
  content = content.replace(regex, '');
  content = content.replace(regex2, '');

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log("Done");

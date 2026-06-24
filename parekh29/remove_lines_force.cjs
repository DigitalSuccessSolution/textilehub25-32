const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the specific lines by splitting and filtering
  let lines = content.split('\n');
  lines = lines.filter((line, index) => {
    if (line.includes('className="absolute top-0 left-0 right-0 h-0.5"') && !line.includes('bottom-0')) {
      return false; // remove this line
    }
    if (line.includes('style={{ background: \'linear-gradient(90deg, #9B2519, #C9A227, #9B2519)\' }} />')) {
      return false; // remove this line
    }
    if (line.includes('<div className="absolute top-0 left-0 right-0 h-0.5 z-20" style={{ background: \'linear-gradient(90deg, #9B2519, #C9A227, #9B2519)\' }} />')) {
      return false;
    }
    return true;
  });

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
});
console.log("Done");

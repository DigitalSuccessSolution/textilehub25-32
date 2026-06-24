const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const navbarFile = path.join(srcDir, 'components', 'Navbar.jsx');

// 1. Remove from Navbar
if (fs.existsSync(navbarFile)) {
  let content = fs.readFileSync(navbarFile, 'utf8');
  content = content.replace(/<div className="h-0\.5 w-full bg-gradient-to-r from-\[#9B2519\] via-\[#C9A227\] to-\[#9B2519\]" \/>/g, '');
  fs.writeFileSync(navbarFile, content, 'utf8');
  console.log('Updated Navbar.jsx');
}

// 2. Remove from all Pages
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to catch the div split across multiple lines
  // We look for className containing 'absolute top-0 left-0 right-0 h-0.5'
  content = content.replace(
    /<div className="absolute top-0 left-0 right-0 h-0\.5[^"]*"(?:\s|\n)*style=\{\{\s*background:\s*'linear-gradient[^}]*'\}\}\s*\/>/g,
    ''
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
});

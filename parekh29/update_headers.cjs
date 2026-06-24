const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx');

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update the banner container to center content
  content = content.replace(
    /className="relative h-52 sm:h-64 overflow-hidden flex items-center"/g,
    'className="relative h-52 sm:h-64 overflow-hidden flex items-center justify-center text-center"'
  );

  // 2. Remove the golden line
  content = content.replace(
    /<div className="absolute top-0 left-0 right-0 h-0\.5"\s*style=\{\{\s*background:\s*'linear-gradient[^}]*'\}\}\s*\/>/g,
    ''
  );

  // 3. Remove the <p> tag above the heading
  content = content.replace(
    /<p className="text-\[11px\] font-bold tracking-\[0\.25em\] uppercase mb-2" style=\{\{\s*color:\s*'#C9A227'\s*\}\}>.*?<\/p>/g,
    ''
  );

  // 4. Update the inner container to center
  if (file === 'Products.jsx') {
    content = content.replace(
      /<div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex items-end justify-between">/g,
      '<div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4">'
    );
    // remove the <div> wrapper around heading in Products.jsx
    content = content.replace(
      /<div>\s*(<h1[\s\S]*?<\/h1>)\s*<\/div>/g,
      '$1'
    );
    // remove mb-3 from the pill
    content = content.replace(
      /className="flex items-center gap-2 px-5 py-2\.5 rounded-full shadow-lg mb-3"/g,
      'className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg"'
    );
  } else {
    content = content.replace(
      /<div className="relative max-w-7xl mx-auto px-6 sm:px-10">/g,
      '<div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
});

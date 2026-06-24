const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/lenovo/Desktop/PAREKH 38/parekh8/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('Hero Banner') && f !== 'Home.jsx') {
    content = content.replace(/style={{ background: 'linear-gradient[^}]*}}/g, '');
    content = content.replace(/<div className=\"absolute inset-0[^\>]*backgroundImage: 'radial-gradient[^\>]*\/>/g, '');
    content = content.replace(/text-white( drop-shadow-md)?/g, 'text-[#303030]');
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + f);
  }
});

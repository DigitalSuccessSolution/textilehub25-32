const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const faqPath = path.join(directoryPath, 'FAQ.jsx');
if (fs.existsSync(faqPath)) {
  let content = fs.readFileSync(faqPath, 'utf8');
  content = content.replace(/border: `1px solid \$\{isOpen \? C\.primaryLight : C\.border\}`,\s*,/g, "border: `1px solid ${isOpen ? C.primaryLight : C.border}`,");
  fs.writeFileSync(faqPath, content, 'utf8');
  console.log('Fixed FAQ.jsx syntax error');
}

const productsPath = path.join(directoryPath, 'Products.jsx');
if (fs.existsSync(productsPath)) {
  let content = fs.readFileSync(productsPath, 'utf8');
  content = content.replace(/border: `1px solid \$\{C\.border\}`, borderTop: `4px solid \$\{C\.primaryLight\}`, border: `1px solid \$\{C\.border\}`,/g, "border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`,");
  content = content.replace(/borderTop: `4px solid \$\{C\.primaryLight\}`, border: `1px solid \$\{C\.border\}`, border: `1px solid \$\{C\.border\}`,/g, "borderTop: `4px solid ${C.primaryLight}`, border: `1px solid ${C.border}`,");
  fs.writeFileSync(productsPath, content, 'utf8');
  console.log('Fixed Products.jsx double borders');
}

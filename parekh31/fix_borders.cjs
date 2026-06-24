const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const files = [
  'TradeEnquiry.jsx',
  'RetailManagement.jsx',
  'Products.jsx',
  'TradeCircular.jsx',
  'EQuotation.jsx',
  'EAuction.jsx',
  'CustomerReview.jsx',
  'Career.jsx',
  'Blog.jsx',
  'BusinessMediaGallery.jsx',
  'NoticeBoard.jsx',
  'FAQ.jsx'
];

files.forEach(file => {
  const filePath = path.join(directoryPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix background and borders for cards
    content = content.replace(/background: '#f8fefe'/g, "background: 'white'");
    
    // Specifically fix borderTop combined with full border
    // Find where borderTop: `4px solid ${C.primaryLight}` is injected and ensure there is a border
    content = content.replace(/borderTop: `4px solid \$\{C\.primaryLight\}`/g, "border: `1px solid ${C.border}`, borderTop: `4px solid ${C.primaryLight}`");

    // Fix NoticeBoard (borderLeft)
    if (file === 'NoticeBoard.jsx') {
      content = content.replace(/borderBottom: `1px solid \$\{C\.border\}`/g, "border: `1px solid ${C.border}`");
      content = content.replace(/background: notice\.isNew \? '#f8fefe' : 'transparent'/g, "background: notice.isNew ? 'rgba(71, 86, 67, 0.02)' : 'white'");
      content = content.replace(/e\.currentTarget\.style\.background = '#f8fefe'/g, "e.currentTarget.style.background = 'rgba(71, 86, 67, 0.05)'");
      content = content.replace(/e\.currentTarget\.style\.background = notice\.isNew \? '#f8fefe' : 'transparent'/g, "e.currentTarget.style.background = notice.isNew ? 'rgba(71, 86, 67, 0.02)' : 'white'");
    }
    
    // Fix FAQ (borderLeft)
    if (file === 'FAQ.jsx') {
      content = content.replace(/background: isOpen \? '#f8fefe' : 'transparent'/g, "background: isOpen ? 'white' : 'white'");
      content = content.replace(/borderBottom: `1px solid \$\{C\.border\}`/g, "border: `1px solid ${isOpen ? C.primaryLight : C.border}`");
      content = content.replace(/borderLeft: isOpen \? `4px solid \$\{C\.primaryLight\}` : '4px solid transparent'/g, ""); // Remove borderLeft, use full border highlight instead for accordion
    }

    // Fix Products left sidebar
    if (file === 'Products.jsx') {
      content = content.replace(/borderTop: `4px solid \$\{C\.primaryLight\}`/g, "borderTop: `4px solid ${C.primaryLight}`, border: `1px solid ${C.border}`"); // Double border replace issue?
      // Since we replaced it globally above, let's just make sure it's valid:
      // it might have become `border: `1px solid ${C.border}`, border: `1px solid ${C.border}`, borderTop: ...` 
      content = content.replace(/border: `1px solid \$\{C\.border\}`, border: `1px solid \$\{C\.border\}`/g, "border: `1px solid ${C.border}`");
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});

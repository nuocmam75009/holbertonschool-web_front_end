const fs = require('fs');

for (let i = 1; i <= 13; i++) {
  // Create the HTML file
  const htmlFileName = `${i}-index.html`;
  fs.writeFileSync(htmlFileName, '', 'utf8');
  console.log(`${htmlFileName} created.`);

  // Create the CSS file
  const cssFileName = `${i}-styles.css`;
  fs.writeFileSync(cssFileName, '', 'utf8');
  console.log(`${cssFileName} created.`);
}

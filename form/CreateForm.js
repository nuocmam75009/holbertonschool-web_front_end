const fs = require('fs');

for (let i = 1; i <= 7; i++) {

  const htmlFileName = `${i}-article.html`;
  fs.writeFileSync(htmlFileName, '', 'utf8');
  console.log(`${htmlFileName} created.`);


  const cssFileName = `${i}-styles.css`;
  fs.writeFileSync(cssFileName, '', 'utf8');
  console.log(`${cssFileName} created.`);
}

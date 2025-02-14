const fs = require('fs');

for (let i = 1; i <= 10; i++) {

  const htmlFileName = `0${i}-index.html`;
  fs.writeFileSync(htmlFileName, '', 'utf8');
  console.log(`${htmlFileName} created.`);


  const cssFileName = `0${i}-styles.css`;
  fs.writeFileSync(cssFileName, '', 'utf8');
  console.log(`${cssFileName} created.`);
}

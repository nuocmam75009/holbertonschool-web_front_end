const fs = require('fs');
const path = require('path');

function renameFilesWithZeroPrefix() {
  const files = fs.readdirSync('.');

  files.forEach(file => {
    const newFileName = `0${file}`;


    if (!file.startsWith('0')) {
      fs.renameSync(file, newFileName);
      console.log(`${file} renamed to ${newFileName}`);
    }
  });
}

renameFilesWithZeroPrefix();

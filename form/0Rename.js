const fs = require('fs');
const path = require('path');

// Function to rename all files in the current directory
function renameFilesWithZeroPrefix() {
  const files = fs.readdirSync('.'); // Read all files in the current directory

  files.forEach(file => {
    const newFileName = `0${file}`; // Add '0' prefix to the filename

    // Ensure we don't double-prefix files that already start with '0'
    if (!file.startsWith('0')) {
      fs.renameSync(file, newFileName); // Rename the file
      console.log(`${file} renamed to ${newFileName}`);
    }
  });
}

renameFilesWithZeroPrefix();

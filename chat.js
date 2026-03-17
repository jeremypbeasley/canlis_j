const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const filesToWatch = [
  'studio.markdown',
  '_includes/footer.html',
  '_layouts/studio.html',
  '_resources/_styles/studio.styl',
];

const destinationDir = '/Users/jeremypbeasley/Desktop';

fs.mkdirSync(destinationDir, { recursive: true });

function copyFile(filePath) {
  const fileName = path.basename(filePath);
  const destPath = path.join(destinationDir, fileName);

  fs.copyFile(filePath, destPath, (err) => {
    if (err) {
      console.error(`Error copying ${filePath}:`, err);
      return;
    }
    console.log(`Copied ${filePath} -> ${destPath}`);
  });
}

chokidar
  .watch(filesToWatch, { ignoreInitial: false })
  .on('add', copyFile)
  .on('change', copyFile);

console.log('Watching files...');

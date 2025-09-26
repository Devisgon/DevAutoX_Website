const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = path.join(__dirname, 'public/images');
const outputFolder = path.join(__dirname, 'public/optimized-images');

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const inputPath = path.join(inputFolder, file);
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);

    // Only process images
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const outputPath = path.join(outputFolder, file); // compressed original
    const webpPath = path.join(outputFolder, `${name}.webp`); // WebP version

    // Compress original format
    sharp(inputPath)
      .resize({ width: 1920 }) // optional, resize large images
      .toFormat(ext === '.png' ? 'png' : 'jpeg', { quality: 75 })
      .toFile(outputPath)
      .then(() => console.log(`Compressed: ${outputPath}`))
      .catch(err => console.error(err));

    // Convert to WebP
    sharp(inputPath)
      .resize({ width: 1920 })
      .webp({ quality: 75 })
      .toFile(webpPath)
      .then(() => console.log(`WebP created: ${webpPath}`))
      .catch(err => console.error(err));
  });
});

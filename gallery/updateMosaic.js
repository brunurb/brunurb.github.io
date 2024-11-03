const fs = require('fs');
const path = require('path');

const picturesDir = path.resolve(__dirname, 'pictures');
const imagesFile = path.join(__dirname, 'images.js');

fs.readdir(picturesDir, (err, files) => {
    if (err) {
        console.error('Error reading the pictures directory:', err);
        return;
    }
    
    console.log('Files in pictures directory:', files); // Log all files

    // Filter for image files with common extensions
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(file));
    
    console.log('Filtered image files:', imageFiles); // Log filtered images

    if (imageFiles.length === 0) {
        console.error('No image files found. Exiting.');
        return;
    }
    
    // Prepare content to write to images.js
    const contentArray = imageFiles.map(file => `    "pictures/${file}"`).join(',\n');
    const imagesJsContent = `const images = [\n${contentArray}\n];\n`;

    fs.writeFile(imagesFile, imagesJsContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to images.js:', err);
            return;
        }
        console.log('images.js updated successfully with image paths.');
    });
});

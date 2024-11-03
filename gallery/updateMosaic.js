const fs = require('fs');
const path = require('path');

// Path to the pictures directory
const picturesDir = path.resolve(__dirname, 'pictures');

// Read the files from the pictures directory
fs.readdir(picturesDir, (err, files) => {
    if (err) {
        console.error('Error reading the pictures directory:', err);
        return;
    }

    // Filter out image files
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file));

    // Generate the images.js file content
    const contentArray = imageFiles.map(file => `    "pictures/${file}"`).join(',\n');
    const imagesJsContent = `const images = [\n${contentArray}\n];\n`;
    
    // Write to images.js
    fs.writeFileSync(path.join(__dirname, 'images.js'), imagesJsContent, 'utf8');
    console.log('images.js updated successfully with image paths.');
});

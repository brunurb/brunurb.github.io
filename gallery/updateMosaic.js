const fs = require('fs');
const path = require('path');

// Path to the folder containing images
const imagesDir = path.join(__dirname, 'gallery', 'pictures');

// Get the list of JPEG files from the directory
const images = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// Log discovered images
console.log("Discovered images:", images);

// Prepare content for the images.js file with correct paths
const imageArrayContent = `const images = [\n  ${images.map(img => `"pictures/${img}"`).join(',\n  ')}\n];\n`;

// Write content to images.js
fs.writeFileSync(path.join(__dirname, 'gallery', 'images.js'), imageArrayContent);

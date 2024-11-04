const fs = require('fs');
const path = require('path');

// Get the absolute path to the pictures directory
const picturesDir = path.join(__dirname, 'pictures');
const outputFile = path.join(__dirname, 'images.js');

try {
    // Read the pictures directory
    const files = fs.readdirSync(picturesDir);
    
    // Filter for image files and sort them
    const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|svg)$/i.test(file)
    ).sort();

    // Create the JavaScript array string with the correct path
    // Corrected path to not repeat "gallery"
    const contentArray = imageFiles.map(file => `  "pictures/${file}"`); // Use "pictures/" instead of "gallery/pictures/"
    const content = 'const images = [\n' + contentArray.join(',\n') + '\n];';
    
    // Write to images.js
    fs.writeFileSync(outputFile, content);
    console.log('Successfully updated images.js');
    console.log(`Found ${imageFiles.length} images`);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}

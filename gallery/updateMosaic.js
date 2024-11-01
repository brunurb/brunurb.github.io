const fs = require('fs');
const path = require('path');

// Get the absolute path to the pictures directory
const picturesDir = path.join(__dirname, 'pictures');
const outputFile = path.join(__dirname, 'images.js');

try {
    console.log('Starting image processing...');
    console.log('Pictures directory:', picturesDir);
    
    // Read the pictures directory
    const files = fs.readdirSync(picturesDir);
    console.log('Files found:', files);
    
    // Filter for image files and sort them
    const imageFiles = files.filter(file => {
        const isImage = /\.(jpg|jpeg|png|gif|svg)$/i.test(file);
        console.log(`${file}: ${isImage ? 'is image' : 'not image'}`);
        return isImage;
    }).sort();

    console.log('Filtered image files:', imageFiles);

    // Create the JavaScript array string
    const contentArray = imageFiles.map(file => `  "${file}"`);
    const content = 'const images = [\n' + contentArray.join(',\n') + '\n];';
    
    // Write to images.js
    fs.writeFileSync(outputFile, content);
    console.log('Successfully updated images.js with content:');
    console.log(content);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}

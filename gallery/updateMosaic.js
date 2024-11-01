const fs = require('fs');
const path = require('path');

// Adjust the paths to match your directory structure
const picturesDir = path.join(__dirname, 'pictures'); // Point to the correct pictures directory
const outputFile = path.join(__dirname, 'images.js'); // Output to the correct images.js file

try {
    // Read the pictures directory
    const files = fs.readdirSync(picturesDir);
    
    // Log files found in the directory for debugging
    console.log('Files found in pictures directory:', files);
    
    // Filter for image files and sort them
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|svg)$/i.test(file)).sort();

    if (imageFiles.length === 0) {
        console.warn('No image files found. images.js will not be updated.');
    } else {
        // Create the JavaScript array string with the correct path prefix
        const contentArray = imageFiles.map(file => `  "pictures/${file}"`);
        const content = 'const images = [\n' + contentArray.join(',\n') + '\n];';
        
        // Write to images.js
        fs.writeFileSync(outputFile, content);
        console.log('Successfully updated images.js');
        console.log(`Found ${imageFiles.length} images`);
    }
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}

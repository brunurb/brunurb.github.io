const fs = require('fs');
const path = require('path');

try {
    // Use synchronous operations
    const directoryPath = path.join(__dirname, 'pictures');
    const outputPath = path.join(__dirname, 'images.js');
    
    // Read directory synchronously
    const files = fs.readdirSync(directoryPath);
    
    // Filter for valid image files
    const imageFiles = files.filter(file => {
        return /\.(jpg|jpeg|png|gif|svg)$/i.test(file);
    });
    
    // Create the JavaScript content
    const content = `const images = ${JSON.stringify(imageFiles, null, 2)};\n`;
    
    // Write file synchronously
    fs.writeFileSync(outputPath, content);
    
    console.log('images.js has been generated successfully');
} catch (err) {
    console.error('Error:', err);
    process.exit(1); // Exit with error code to fail the GitHub Action
}

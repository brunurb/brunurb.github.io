// Ensure you have 'fs' and 'path' required at the top
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'pictures');
const outputPath = path.join(__dirname, 'images.js');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    // Filter for valid image files
    const imageFiles = files.filter(file => {
        return /\.(jpg|jpeg|png|gif|svg)$/.test(file);
    });

    // Write the images to images.js
    const imageArray = JSON.stringify(imageFiles, null, 2);

    fs.writeFile(outputPath, `const images = ${imageArray};\n`, (err) => {
        if (err) {
            return console.error('Unable to write file: ' + err);
        }
        console.log('images.js has been generated');
    });
});

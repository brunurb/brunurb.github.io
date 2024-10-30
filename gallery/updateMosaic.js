const fs = require('fs');
const path = require('path');

const imageFolder = './pictures'; // Folder where images are stored
const htmlFilePath = './index.html'; // Path to your HTML file

function generateImageList() {
    const files = fs.readdirSync(imageFolder);
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)); // Add more extensions if needed
    return images;
}

function updateHTML(images) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Mosaic</title>
    <style>
        body {
            display: flex;
            flex-wrap: wrap;
        }
        .image-container {
            width: 150px; /* Adjust size as needed */
            height: 150px; /* Adjust size as needed */
            overflow: hidden;
            margin: 5px;
        }
        img {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div id="gallery"></div>

    <script>
        const IMAGE_FOLDER_URL = 'https://raw.githubusercontent.com/brunurb/brunurb.github.io/main/gallery/pictures/';

        const images = ${JSON.stringify(images)};

        const gallery = document.getElementById('gallery');

        images.forEach(image => {
            const div = document.createElement('div');
            div.className = 'image-container';
            const img = document.createElement('img');
            img.src = IMAGE_FOLDER_URL + image;
            div.appendChild(img);
            gallery.appendChild(div);
        });
    </script>
</body>
</html>
    `.trim();
    
    fs.writeFileSync(htmlFilePath, htmlContent);
}

// Generate the image list and update HTML
const images = generateImageList();
updateHTML(images);

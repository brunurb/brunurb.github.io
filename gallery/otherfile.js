// otherfile.js

$(document).ready(function() {
    const gallery = $('#myMosaic');

    // Load images from the 'pictures' directory
    const images = [
        "pictures/example1.jpeg",
        "pictures/example2.jpeg",
        // Add more images as they exist in the 'pictures' folder
    ];

    // Load images into the gallery
    images.forEach(function(image) {
        const imgElement = $('<img/>', {
            src: image,
            alt: "Gallery Image",
            css: {
                width: 'auto',
                height: 'auto'
            }
        });
        gallery.append(imgElement);
    });

    // Initialize the Mosaic layout after images are loaded
    gallery.Mosaic();
});

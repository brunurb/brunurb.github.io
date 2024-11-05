// otherfile.js - Load images dynamically
$(document).ready(function() {
    const gallery = $('#myMosaic');

    // Load images from the 'pictures' directory
    const images = [
        "pictures/example1.jpeg",
        "pictures/example2.jpeg",
        // Add other images as necessary
    ];

    // Append images to the gallery div
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
});

$(document).ready(function() {
    const gallery = $('#gallery');

    // List of images, add your image filenames here
    const images = [
        // Add more images with their correct paths
    ];

    // Function to load images into the gallery
    function loadImages() {
        images.forEach(image => {
            const imgElement = $('<img/>', {
                src: image,
                alt: "Gallery Image",
                css: {
                    display: 'inline-block',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                }
            });
            gallery.append(imgElement);
        });

        // Initialize the Mosaic layout
        gallery.mosaic();
    }

    // Call the function to load images
    loadImages();
});

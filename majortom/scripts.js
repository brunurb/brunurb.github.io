document.addEventListener("DOMContentLoaded", function() {
    // Function to show the image in overlay
    function showImage(src) {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlay-image');
        overlayImage.src = src;
        overlay.classList.add('show'); // Add the show class to enable flex styling
    }

    // Function to close the overlay
    function closeOverlay(event) {
        if (event.target.id === 'overlay' || event.target.id === 'close') {
            const overlay = document.getElementById('overlay');
            overlay.classList.remove('show'); // Remove the show class to hide the overlay
        }
    }

    // Get all images in #myMosaic and add click event listener
    const images = document.querySelectorAll('#myMosaic img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            showImage(this.src); // Show the clicked image in overlay
        });
    });

    // Add click event listener for close button and overlay
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeOverlay);
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', closeOverlay);
});

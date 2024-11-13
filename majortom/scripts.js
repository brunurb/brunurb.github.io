$(document).ready(function() {
    // Open the overlay when a thumbnail is clicked
    $(".thumbnail").on("click", function() {
        const fullSizeImage = $(this).data("full");
        $("#overlay img").attr("src", fullSizeImage);
        $("#overlay").fadeIn();
    });

    // Close the overlay when the close button or overlay is clicked
    $("#close, #overlay").on("click", function() {
        $("#overlay").fadeOut();
    });

    // Close the overlay when the Esc key is pressed
    $(document).on("keydown", function(event) {
        if (event.key === "Escape") {
            $("#overlay").fadeOut();
        }
    });
});

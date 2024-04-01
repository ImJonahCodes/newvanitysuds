// JavaScript code for showing and hiding the popup
document.addEventListener('DOMContentLoaded', function() {
    // Function to show the popup with a message
    function showPopup(message) {
        var popup = document.getElementById('popup');
        var popupMessage = document.getElementById('popupMessage');
        popupMessage.textContent = message;
        popup.classList.remove('hidden');
    }

    // Function to hide the popup
    function hidePopup() {
        var popup = document.getElementById('popup');
        popup.classList.add('hidden');
    }

    // Intercept form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Submit form using AJAX
        fetch('https://submit-form.com/3jnshyywd', {
            method: 'POST',
            body: new FormData(this),
        })
        .then(response => {
            if (response.ok) {
                // Display success message in popup
                showPopup("Thank you for your submission!");
            } else {
                // Display error message in popup
                showPopup("An error occurred while submitting the form. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Display error message in popup
            showPopup("An error occurred while submitting the form. Please try again later.");
        });
    });

    // Close popup when close button is clicked
    document.getElementById('closePopup').addEventListener('click', function() {
        hidePopup();
    });
});

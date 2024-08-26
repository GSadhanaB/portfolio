// JavaScript to handle form submission on the contact page
document.addEventListener("DOMContentLoaded", function() {
    // Check if the contact form exists on the page
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            
            // Display a success message to the user
            alert("You have successfully submitted your message!");
            
            // Optionally, reset the form fields after submission
            contactForm.reset();
        });
    }
});
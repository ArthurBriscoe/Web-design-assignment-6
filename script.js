// Function to validate a contact form
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all fields.");
        return false;
    }

    // Add more complex validation logic for email, if needed

    return true;
}

// Function to enable smooth scrolling for anchor links
function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Call functions when the page is loaded
window.onload = function() {
    enableSmoothScrolling();

    document.getElementById("contactForm").onsubmit = validateContactForm;

    document.getElementById("darkModeToggle").onclick = toggleDarkMode;
}

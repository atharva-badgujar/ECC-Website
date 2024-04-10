// Fade-in animation
function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 50; // Interval in milliseconds
    var increment = interval / duration;
    
    var fadeInInterval = setInterval(function() {
        opacity += increment;
        element.style.opacity = opacity;
        
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, interval);
}

// Call the fadeIn function for elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate navbar
    var navbar = document.querySelector('.navbar');
    fadeIn(navbar, 1000); // Adjust duration as needed (1000 = 1 second)

    // Animate about section
    var aboutSection = document.querySelector('.about-section');
    fadeIn(aboutSection, 1000); // Adjust duration as needed (1000 = 1 second)

    // Animate footer
    var footer = document.querySelector('.footer');
    fadeIn(footer, 1000); // Adjust duration as needed (1000 = 1 second)
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.services-container .service img');

    function checkPosition() {
        console.log('checkPosition function called'); // Log when the function is called

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            console.log(`Image position: ${rect.top} px from top, ${rect.bottom} px from bottom`); // Log the position of each image

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                console.log('Image is in the viewport, applying fade-in class'); // Log if the image is in the viewport
                image.classList.add('fade-in');
            }
        });
    }
    // Check the position on page load and on scroll
    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value || !email.value) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    }
});

// Button click animation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

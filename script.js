// script.js
// Basic JavaScript for Y2K/Grunge Portfolio

document.addEventListener('DOMContentLoaded', () => {
    console.log("CYBER-GRUNGE PORTFOLIO LOADED. ACCESS GRANTED.");

    // Simple Contact Form Submission (Placeholder)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate a clunky, early-internet submission
            alert("DATA PACKET TRANSMITTED. THANK YOU FOR YOUR MESSAGE. (Please allow 7-14 business days for processing LOL :3.)");
            
            // Clear the form after submission
            contactForm.reset();
        });
    }

    // Optional: Add a subtle animated marquee to the footer for a classic Y2K touch
    const footer = document.querySelector('.footer');
    if (footer) {
        const marqueeText = " // WARNING: LOW-POLY GRAPHICS AHEAD // ACCESSING DATABASE // ERROR 404: COOLNESS NOT FOUND // ";
        const marquee = document.createElement('marquee');
        marquee.textContent = marqueeText.repeat(5);
        marquee.style.color = 'var(--color-secondary)';
        marquee.style.marginTop = '10px';
        marquee.style.borderTop = '1px solid var(--color-secondary)';
        marquee.style.borderBottom = '1px solid var(--color-secondary)';
        marquee.style.padding = '5px 0';
        marquee.style.fontFamily = 'monospace';
        footer.appendChild(marquee);
    }
});

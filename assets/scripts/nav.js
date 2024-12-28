// Toggle the mobile menu visibility
document.getElementById('hamburger-icon').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Remove "hidden" class to make the menu visible
    mobileMenu.classList.remove('hidden');
    
    // Add transition effect for sliding in and fading in
    setTimeout(() => {
        mobileMenu.classList.add('opacity-100');
        mobileMenu.classList.add('translate-y-0');
    }, 10);
});

// Close the mobile menu when clicking on a link or clicking outside the menu
document.getElementById('mobile-menu').addEventListener('click', function (event) {
    // If the click is inside the mobile menu, close it
    if (event.target !== this) {
        return; // Do nothing if clicked inside a menu item
    }

    // Close the menu by removing classes
    this.classList.remove('opacity-100');
    this.classList.remove('translate-y-0');
    this.classList.add('opacity-0');
    this.classList.add('translate-y-full');
    setTimeout(() => {
        this.classList.add('hidden');
    }, 300); // Match transition duration
});

// Close the menu when clicking a link inside it
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.remove('translate-y-0');
        mobileMenu.classList.add('opacity-0');
        mobileMenu.classList.add('translate-y-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // Match transition duration
    });
});

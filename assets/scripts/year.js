document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('footer-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} zPleum. All Rights Reserved.`;
});
function toggleButton() {
    const navbar = document.getElementById('mobile-menu');
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    }
    else {
        navbar.style.display = 'none';
    }
}
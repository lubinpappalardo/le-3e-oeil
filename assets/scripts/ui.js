// Navbar
const nav = document.getElementById('nav');
nav.classList.add('onTop');

// on scroll if not at top of page
window.addEventListener('scroll', () => {
    if(window.scrollY > 5) {
        nav.classList.remove('onTop');
    } else {
        nav.classList.add('onTop');
    }
})

// open mobile navigation
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('opened');
});
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

// Podcast sources
const podcastSourcesBtn = document.getElementById('podcast-sources-open');
const podcastSources = document.getElementById('podcast-sources');

podcastSourcesBtn.addEventListener('click', () => {
    podcastSources.classList.toggle('open');
})
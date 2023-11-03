let isMobile;

if (window.innerWidth < 1040) {
    isMobile = true;
}


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




const playerInformations = document.getElementById('player-informations');
const scrollContainer = document.querySelector('#player-informations .infos');
let isUserScrolling = false;
let scrollContainerCopy;

// on ready
document.addEventListener('DOMContentLoaded', () => {
    if (isMobile) {
        // clone scroll container and add it to the playerInformations
        const clonedScrollContainer = scrollContainer.cloneNode(true);
        scrollContainerCopy = playerInformations.appendChild(clonedScrollContainer);
    }
});

// on resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 1040) {
        isMobile = true;
        // check if the copy already exists
        if (!scrollContainerCopy) {
            const clonedScrollContainer = scrollContainer.cloneNode(true)
            scrollContainerCopy = playerInformations.appendChild(clonedScrollContainer);
        }
    } else {
        isMobile = false;
        if (scrollContainerCopy) {
            scrollContainerCopy.remove();
            scrollContainerCopy = null;
        }
    }
});


// Function to stop and resume animation
function toggleAnimation() {
    if (isUserScrolling) {
        scrollContainer.style.animationPlayState = 'paused';
        scrollContainerCopy.style.animationPlayState = 'paused';
    } else {
        scrollContainer.style.animationPlayState = 'running';
        scrollContainerCopy.style.animationPlayState = 'running';
    }
}

let scrollContainerDragStart = 0;

// Listen for user scroll events
playerInformations.addEventListener('touchstart', function(e) {
    if (isUserScrolling) {
        isUserScrolling = false;
    } else {
        isUserScrolling = true;
    }

    // scrollContainerDragStart = e.touches[0].clientX;
    toggleAnimation();
});

// Listen for touchend events
playerInformations.addEventListener('touchend', function() {
    if (isUserScrolling) {
        setTimeout(function() {
            isUserScrolling = false;
            toggleAnimation();
        }, 2000);
    }

});

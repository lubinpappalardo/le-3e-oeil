// Dict with all the podcast including their info for a given html template to be binded as popup and their coordinates.
const podcasts = {
    "Ukraine": {
        podcast: "Témoignage: Theo, élève franco-ukrainien",
        coordinates: [49.03003180765132, 31.255061945867872],
        subject: "Conflit Russo-Ukrainien",
        time: 28,
    }
}

// Init map
let map = L.map('map').setView([0, 0], 1);

// Set map base layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom icon
const podcastIcon = L.icon({
    iconUrl: 'assets/images/icon-podcast.png',
    iconSize: [30, 30],
});

const homeIcon = L.icon({
    iconUrl: 'assets/images/icon-home.png',
    iconSize: [30, 30],
    iconAnchor: [15, 25],
    popupAnchor: [0, -10],
});

// marker for each podcast location
for (country in podcasts) {
    let marker = L.marker(podcasts[country].coordinates, {icon: podcastIcon}).addTo(map);
    marker.bindPopup(`
    ${country} / ${podcasts[country].subject}<br>
    <b>${podcasts[country].podcast}</b><br>
    <u>${podcasts[country].time}min</u><br>
    <button>Ecouter</button>
    `);
}
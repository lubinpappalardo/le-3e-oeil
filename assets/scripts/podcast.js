let openedPodcast;
const audio = document.getElementById('audio');
const podcastSourcesBtn = document.getElementById('podcast-sources-open');
const podcastSources = document.getElementById('podcast-sources');

const podcastRessourcesBtn = document.getElementById('podcast-ressources-open');
const podcastRessources = document.getElementById('podcast-ressources');

// on ready
document.addEventListener('DOMContentLoaded', () => {
    // get the first elem of the dict
    openedPodcast = podcastsDict[Object.keys(podcastsDict)[0]];

    setPodcast();
    setCoverPodcast();
});


function setPodcast() {
    audio.src = openedPodcast.podcast_path;
    // set audio player informations
    document.getElementById('podcast-thumbnail').src = openedPodcast.thumbnail_path;
    document.getElementById('podcast-thumbnail').alt = openedPodcast.sources.cover_image.image_title;
    document.getElementById('podcast-subject').innerHTML = `<span class="material-symbols-outlined">flag</span>${openedPodcast.subject}`;
    document.getElementById('podcast-title').innerText = openedPodcast.title;
    document.getElementById('podcast-date').innerHTML = `<span class="material-symbols-outlined">calendar_month</span>${openedPodcast.date}`;

    // set sources
    document.getElementById('cover-image-source').innerHTML = `               
    <p><a href='${openedPodcast.sources.cover_image.image_src}' target="_blank" rel='noopener'><span class="material-symbols-outlined">open_in_new</span></a> 
    ${openedPodcast.sources.cover_image.image_title}</p>`;
    // for each music in musics key of the sources dict
    for (const music in openedPodcast.sources.musics) {
        document.getElementById('music-source').innerHTML += `
        <p><a href='${openedPodcast.sources.musics[music].music_src}' target="_blank" rel='noopener'><span class="material-symbols-outlined">open_in_new</span></a> 
        ${openedPodcast.sources.musics[music].music_title}</p>
        `;
    }
    // for each sfx in sfxs key of the sources dict
    for (const sfx in openedPodcast.sources.sfxs) {
        document.getElementById('sfx-source').innerHTML += `
        <p><a href='${openedPodcast.sources.sfxs[sfx].sfx_src}' target="_blank" rel='noopener'><span class="material-symbols-outlined">open_in_new</span></a> 
        ${openedPodcast.sources.sfxs[sfx].sfx_title}</p>
        `;
    }

    // set ressources
    openedPodcast.ressources.forEach(ressource => {
        document.getElementById('ressources').innerHTML += `<p><a href='${ressource.ressource_src}' target="_blank" rel='noopener'><span class="material-symbols-outlined">open_in_new</span></a> ${ressource.ressource_title}</p>`;
    });

    // set main page informations
    document.getElementById('cover-image').src = openedPodcast.thumbnail_path;
    document.getElementById('cover-image').alt = openedPodcast.sources.cover_image.image_title;
}


function setCoverPodcast() {
    document.getElementById('cover-image').src = openedPodcast.thumbnail_path;
    document.getElementById('cover-image').alt = openedPodcast.sources.cover_image.image_title;
    document.getElementById('cover-podcast-subject').innerHTML = `<span class="material-symbols-outlined">flag</span>${openedPodcast.subject}`;
    document.getElementById('cover-podcast-title').innerText = openedPodcast.title;
    document.getElementById('cover-podcast-description').innerText = openedPodcast.description;
    document.getElementById('cover-podcast-date').innerHTML = `<span class="material-symbols-outlined">calendar_month</span>${openedPodcast.date}`;

    // get the duration of the audio file at openedPodcast.podcast_path
    let podcastAudioFile = new Audio(openedPodcast.podcast_path);
    podcastAudioFile.addEventListener('loadedmetadata', function() {
        document.getElementById('cover-podcast-time').innerHTML = '<span class="material-symbols-outlined">schedule</span> ' + Math.round(podcastAudioFile.duration / 60) + ' min';
    });
}


// Podcast sources
podcastSourcesBtn.addEventListener('click', () => {
    podcastSources.classList.toggle('open');
    if (podcastRessources.classList.contains('open')) {
        podcastRessources.classList.remove('open');
    }
})

// Podcast ressources
podcastRessourcesBtn.addEventListener('click', () => {
    podcastRessources.classList.toggle('open');
    if (podcastSources.classList.contains('open')) {
        podcastSources.classList.remove('open');
    }
})

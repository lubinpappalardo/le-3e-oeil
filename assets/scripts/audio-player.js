const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const audioPlayedTime = document.getElementById('audio-played-time');
const audioRemainingTime = document.getElementById('audio-remaining-time');
const madeProgressBar = document.getElementById('progress-made-bar');
const progressBtn = document.getElementById('progress-btn');

document.getElementById('play').addEventListener('click', function() {
  audio.play();
});

document.getElementById('pause').addEventListener('click', function() {
  audio.pause();
});


// ---- ---- Show audio progression ---- ----

// on ready set audio time
window.addEventListener('load', function() {
    audioPlayedTime.textContent = '0:00';
    let minutesDuration = Math.floor(Math.round(audio.duration) / 60);
    let secondsDuration = Math.round(audio.duration) % 60;
    audioRemainingTime.textContent = `${minutesDuration.toString().padStart(2, '0')}:${secondsDuration.toString().padStart(2, '0')}`;
})

audio.addEventListener('timeupdate', function() {
    let totalSecondsRemaining = Math.floor(Math.round(audio.duration) - Math.round(audio.currentTime));

    // set remaining time
    let minutesRemaining = Math.floor(totalSecondsRemaining / 60);
    let secondsRemaining = totalSecondsRemaining % 60;
    audioRemainingTime.textContent = `${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

    // set played time
    let minutesPlayed = Math.floor(Math.round(audio.currentTime) / 60);
    let secondsPlayed = Math.round(audio.currentTime) % 60;
    audioPlayedTime.textContent = `${minutesPlayed.toString().padStart(2, '0')}:${secondsPlayed.toString().padStart(2, '0')}`;

    // change progress
    let progress = audio.currentTime / audio.duration;
    madeProgressBar.style.width = progress * 100 + '%';
    progressBtn.style.left = progress * 100 + '%';
  });
  

// ---- ---- Change audio progression ---- ----

progressBar.addEventListener('click', function(e) {
  // check target isn't progress btn
  if (e.target === progressBtn) {
    return;
  }
  let rect = progressBar.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let progress = x / rect.width;
  audio.currentTime = progress * audio.duration;
});

let dragStartX = 0;
let dragStartAudioCurrentTime = 0;
let isDraggingAudioCurrentTime = false;

progressBtn.addEventListener('mousedown', dragStart);
progressBtn.addEventListener('touchstart', dragStart);

function dragStart(e) {
  dragStartX = e.clientX || e.touches[0].clientX;
  dragStartAudioCurrentTime = audio.currentTime;
  isDraggingAudioCurrentTime = true;
}

window.addEventListener('mousemove', dragMove);
window.addEventListener('touchmove', dragMove);

function dragMove(e) {
  if (isDraggingAudioCurrentTime) {
    let x = e.clientX || e.touches[0].clientX;
    let progress = (x - dragStartX) / progressBar.offsetWidth;
    audio.currentTime = dragStartAudioCurrentTime + (progress * audio.duration);
  }
}

window.addEventListener('mouseup', function() { isDraggingAudioCurrentTime = false; });
window.addEventListener('touchend', function() { isDraggingAudioCurrentTime = false; });
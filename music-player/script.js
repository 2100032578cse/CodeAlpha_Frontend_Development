
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

const songs = [
    { title: "silent night", artist: "pastor Joseph", src: "silentnight.mp3" },
    { title: "Girls like you", artist: "Moroon 5", src: "GIRLSLIKEYOU.mp3" },
    { title: "A thousand years", artist: "Christina Perri", src: "1000years.mp3" },
];

let currentSongIndex = 0;

function loadSong(song) {
    songTitle.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.innerText = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.innerText = 'Pause';
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.innerText = 'Pause';
}

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

loadSong(songs[currentSongIndex]);

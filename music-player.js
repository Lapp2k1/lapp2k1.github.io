const overlay = document.getElementById("musicOverlay");
const toggleBtn = document.getElementById("musicToggle");
const closeBtn = document.getElementById("mp-close");

const audio = new Audio();
let index = 0;
let shuffle = false;
let loopMode = 0; // 0 off, 1 one, 2 all

const playlist = [
  {
    title: "Laters",
    artist: "テキサス（CV: 田所あずさ）、ラップランド（CV: 今井麻美",
    src: "asset/BGM/「Laters」 テキサス＆ラップランド [F2x6jtA_GHo].m4a",
    cover: "asset/BGM/1024px-Laters.jpg",
  },
  {
    title: "Heavenly Me",
    artist: "AIYUE/Rina",
    src: "https://res01.hycdn.cn/4518a2dd7d8381c73c96abed938526ac/69400343/siren/audio/20250430/85d04fc5a7018f3fd69306027eea1d41.wav",
    cover: "asset/BGM/c7d853aac1c2c5174fc3b900ca185ca1.jpg",
  },
];

// UI refs
const songEl = document.getElementById("mp-song");
const artistEl = document.getElementById("mp-artist");
const coverEl = document.getElementById("mp-cover");
const playBtn = document.getElementById("mp-play");
const prevBtn = document.getElementById("mp-prev");
const nextBtn = document.getElementById("mp-next");
const seek = document.getElementById("mp-seek");
const curTime = document.getElementById("mp-current");
const duration = document.getElementById("mp-duration");
const volume = document.getElementById("mp-volume");
const speed = document.getElementById("mp-speed");
const shuffleBtn = document.getElementById("mp-shuffle");
const loopBtn = document.getElementById("mp-loop");
const listEl = document.getElementById("mp-playlist");

function loadSong(i) {
  const s = playlist[i];
  audio.src = s.src;
  songEl.textContent = s.title;
  artistEl.textContent = s.artist;
  coverEl.src = s.cover || "";
  highlight();
}

function play() {
  audio.play();
  playBtn.textContent = "⏸";
}

function pause() {
  audio.pause();
  playBtn.textContent = "▶";
}

function next() {
  index = shuffle
    ? Math.floor(Math.random() * playlist.length)
    : (index + 1) % playlist.length;
  loadSong(index);
  play();
}

function prev() {
  index = (index - 1 + playlist.length) % playlist.length;
  loadSong(index);
  play();
}

function highlight() {
  [...listEl.children].forEach((li, i) =>
    li.classList.toggle("active", i === index)
  );
}

// Events
playBtn.onclick = () => (audio.paused ? play() : pause());
nextBtn.onclick = next;
prevBtn.onclick = prev;
volume.oninput = (e) => (audio.volume = e.target.value);
speed.onchange = (e) => (audio.playbackRate = e.target.value);
shuffleBtn.onclick = () => (shuffle = !shuffle);
loopBtn.onclick = () => (loopMode = (loopMode + 1) % 3);

audio.ontimeupdate = () => {
  seek.max = audio.duration || 0;
  seek.value = audio.currentTime;
  curTime.textContent = format(audio.currentTime);
  duration.textContent = format(audio.duration);
};

seek.oninput = () => (audio.currentTime = seek.value);

audio.onended = () => {
  if (loopMode === 1) play();
  else if (loopMode === 2) next();
};

// Playlist render
playlist.forEach((s, i) => {
  const li = document.createElement("li");
  li.textContent = s.title;
  li.onclick = () => {
    index = i;
    loadSong(i);
    play();
  };
  listEl.appendChild(li);
});

function format(t) {
  if (!t) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// Toggle overlay
toggleBtn.onclick = () => overlay.classList.remove("hidden");
closeBtn.onclick = () => overlay.classList.add("hidden");

// Init
loadSong(index);

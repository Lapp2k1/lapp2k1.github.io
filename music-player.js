const playlist = [
  {
    type: "youtube",
    title: "Laters",
    artist: "Texas & Lappland",
    youtubeId: "F2x6jtA_GHo",
    cover: "asset/BGM/1024px-Laters.jpg",
  },
  {
    type: "audio",
    title: "Heavenly Me",
    artist: "AIYUE / Rina",
    src: "/asset/BGM/85d04fc5a7018f3fd69306027eea1d41.wav",
    cover: "asset/BGM/c7d853aac1c2c5174fc3b900ca185ca1.jpg",
  },
];
const overlay = document.getElementById("musicOverlay");
const toggleBtn = document.getElementById("musicToggle");
const closeBtn = document.getElementById("mp-close");
const noticeEl = document.getElementById("mp-notice");
function logYT(msg) {
  console.log("[YT]", msg, {
    ytReady,
    engine,
    hasPlayer: !!ytPlayer,
    pendingAction,
  });
}

let noticeTimer = null;

function showNotice(text) {
  noticeEl.textContent = text;
  noticeEl.classList.add("show");

  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    noticeEl.classList.remove("show");
  }, 1500);
}
let ytHasVideo = false;

function onYTState(e) {
  logYT("state change " + e.data);

  if (
    e.data === YT.PlayerState.CUED ||
    e.data === YT.PlayerState.PLAYING ||
    e.data === YT.PlayerState.PAUSED
  ) {
    ytHasVideo = true;
  }

  if (e.data === YT.PlayerState.ENDED) handleEnd();
}

function playSafe() {
  if (engine === "audio") {
    audio.play();
  } else {
    playYouTubeSafe();
  }
  playBtn.textContent = "⏸";
}

function pauseSafe() {
  if (engine === "audio") {
    audio.pause();
  } else if (ytReady && ytPlayer) {
    ytPlayer.pauseVideo();
  }
  playBtn.textContent = "▶";
}

function pauseSafe() {
  if (engine === "audio") {
    audio.pause();
  } else if (ytReady && ytPlayer) {
    ytPlayer.pauseVideo();
  }
  playBtn.textContent = "▶";
}

function pauseSafe() {
  if (engine === "audio") {
    audio.pause();
  } else {
    if (!ytReady || !ytPlayer) return;
    ytPlayer.pauseVideo();
  }
  playBtn.textContent = "▶";
}

const audio = new Audio();
let ytPlayer = null;
let ytReady = false;
let pendingAction = null; // "play" | "load"
let engine = "audio"; // audio | youtube
let index = 0;
let shuffle = false;
let loopMode = 0; // 0 off, 1 one, 2 all

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
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player("yt-player", {
    height: "0",
    width: "0",
    playerVars: {
      controls: 0,
      disablekb: 1,
    },
    events: {
      onReady: () => {
        ytReady = true;
        logYT("YT READY");

        if (pendingAction) {
          logYT("RUN PENDING " + JSON.stringify(pendingAction));
          if (pendingAction.type === "load") {
            ytPlayer.loadVideoById(pendingAction.id);
          }
          if (pendingAction.type === "play") {
            ytPlayer.playVideo();
          }
          pendingAction = null;
        }
      },
      onStateChange: onYTState,
    },
  });
}
function loadYouTube(id) {
  logYT("loadYouTube called");

  if (!ytReady || !ytPlayer) {
    pendingAction = { type: "load", id };
    showNotice("⏳ Music is loading...");
    logYT("YT not ready → pending load");
    return;
  }

  ytPlayer.loadVideoById(id);
}

function playYouTubeSafe() {
  logYT("playYouTubeSafe called");

  if (!ytReady || !ytPlayer) {
    pendingAction = { type: "play" };
    showNotice("⏳ Music is loading...");
    logYT("YT not ready → pending play");
    return;
  }

  ytPlayer.playVideo();
}

function stopAll() {
  audio.pause();
  audio.currentTime = 0;
  if (ytReady && ytPlayer) ytPlayer.stopVideo();
}
function waitYT(cb) {
  if (ytReady && ytPlayer) cb();
  else setTimeout(() => waitYT(cb), 100);
}

function loadSong(i) {
  const s = playlist[i];
  index = i;

  songEl.textContent = s.title;
  artistEl.textContent = s.artist;
  coverEl.src = s.cover || "";

  stopAll();

  if (s.type === "audio") {
    engine = "audio";
    audio.src = s.src;
  } else {
    engine = "youtube";
    loadYouTube(s.youtubeId);
  }

  highlight();
}

function play() {
  if (engine === "audio") audio.play();
  else ytPlayer.playVideo();
  playBtn.textContent = "⏸";
}

function pause() {
  if (engine === "audio") audio.pause();
  else ytPlayer.pauseVideo();
  playBtn.textContent = "▶";
}

function next() {
  const prevIndex = index;

  if (shuffle) {
    index = getShuffleIndex(index);
    console.log("[SHUFFLE NEXT]", {
      from: prevIndex,
      to: index,
      song: playlist[index].title,
    });
  } else {
    index = (index + 1) % playlist.length;
    console.log("[NORMAL NEXT]", {
      from: prevIndex,
      to: index,
      song: playlist[index].title,
    });
  }

  loadSong(index);
  playSafe();
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
playBtn.onclick = () => {
  if (engine === "audio") {
    audio.paused ? playSafe() : pauseSafe();
  } else {
    if (!ytReady || !ytPlayer) {
      showNotice("⏳ Music player is loading...");
      return;
    }
    ytPlayer.getPlayerState() === YT.PlayerState.PLAYING
      ? pauseSafe()
      : playSafe();
  }
};

nextBtn.onclick = next;
prevBtn.onclick = prev;
volume.oninput = (e) => {
  const v = Number(e.target.value);

  if (engine === "audio") {
    audio.volume = v;
  } else if (engine === "youtube" && ytReady) {
    ytPlayer.setVolume(Math.round(v * 100));
  }
};

speed.onchange = (e) => {
  const rate = Number(e.target.value);

  if (engine === "audio") {
    audio.playbackRate = rate;
  } else if (engine === "youtube" && ytReady) {
    const supported = ytPlayer.getAvailablePlaybackRates();
    if (supported.includes(rate)) {
      ytPlayer.setPlaybackRate(rate);
    }
  }
};
function getShuffleIndex(current) {
  if (playlist.length <= 1) return current;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * playlist.length);
  } while (nextIndex === current);

  return nextIndex;
}
shuffleBtn.onclick = () => {
  shuffle = !shuffle;
  updateShuffleUI();
  console.log(
    "[SHUFFLE TOGGLE]",
    shuffle ? "ON" : "OFF",
    playlist.map((s, i) => ({
      i,
      title: s.title,
      type: s.type,
    }))
  );
};

loopBtn.onclick = () => (loopMode = (loopMode + 1) % 3);

audio.ontimeupdate = () => {
  seek.max = audio.duration || 0;
  seek.value = audio.currentTime;
  curTime.textContent = format(audio.currentTime);
  duration.textContent = format(audio.duration);
};

seek.oninput = () => {
  if (engine === "audio") {
    audio.currentTime = seek.value;
  } else {
    if (!ytHasVideo) {
      logYT("seek ignored, no video yet");
      return;
    }
    ytPlayer.seekTo(seek.value, true);
  }
};

audio.onended = handleEnd;

function onYTState(e) {
  if (e.data === YT.PlayerState.ENDED) handleEnd();
}

function handleEnd() {
  console.log("[HANDLE END]", {
    index,
    shuffle,
    loopMode,
    song: playlist[index].title,
  });

  if (loopMode === 1) {
    playSafe();
    return;
  }

  if (shuffle) {
    next();
    return;
  }

  if (loopMode === 2) {
    next();
    return;
  }

  console.log("[STOP] playback ended");
  playBtn.textContent = "▶";
}

function resetYouTubePlayer() {
  logYT("RESET YOUTUBE PLAYER");

  ytReady = false;
  ytHasVideo = false;
  pendingAction = null;

  if (ytPlayer) {
    ytPlayer.destroy();
    ytPlayer = null;
  }

  onYouTubeIframeAPIReady();
}

setInterval(() => {
  if (engine === "audio") {
    seek.max = audio.duration || 0;
    seek.value = audio.currentTime;
    curTime.textContent = format(audio.currentTime);
    duration.textContent = format(audio.duration);
  } else if (ytReady) {
    const cur = ytPlayer.getCurrentTime();
    const dur = ytPlayer.getDuration();
    seek.max = dur;
    seek.value = cur;
    curTime.textContent = format(cur);
    duration.textContent = format(dur);
  }
}, 500);

seek.oninput = () => {
  if (engine === "audio") audio.currentTime = seek.value;
  else ytPlayer.seekTo(seek.value, true);
};

// Playlist render
playlist.forEach((s, i) => {
  const li = document.createElement("li");
  li.textContent = s.title;

  li.onclick = () => {
    loadSong(i);
    if (s.type === "audio") {
      playSafe();
    } else {
      waitYT(() => playSafe());
    }
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
function syncSpeedUI() {
  if (engine === "youtube" && ytReady) {
    const rates = ytPlayer.getAvailablePlaybackRates();
    [...speed.options].forEach((opt) => {
      opt.disabled = !rates.includes(Number(opt.value));
    });
  } else {
    [...speed.options].forEach((opt) => (opt.disabled = false));
  }
}

function updateShuffleUI() {
  shuffleBtn.classList.toggle("active", shuffle);
  shuffleBtn.textContent = shuffle ? "🔀 On" : "🔀 Off";
}

function updateLoopUI() {
  if (loopMode === 0) loopBtn.textContent = "🔁 Off";
  else if (loopMode === 1) loopBtn.textContent = "🔂 One";
  else loopBtn.textContent = "🔁 All";
}

loopBtn.onclick = () => {
  loopMode = (loopMode + 1) % 3;
  updateLoopUI();
};

updateShuffleUI();
updateLoopUI();
try {
  ytPlayer.playVideo();
} catch {
  resetYouTubePlayer();
}

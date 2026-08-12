/* =====================================================
   cue-player.js
   -----------------------------------------------------

   Purpose
   - Song Cue Display
   - Cue Audio Player
   - Cue Seek Bar

   Dependencies
   - songs.js
   - utils.js

   Used By
   - navigation.js

   Exports
   - updateSongCue()

===================================================== */

function updateSongCue(song) {
  const songCue = document.getElementById("songCue");
  const songCueText = document.getElementById("songCueText");
  const songCueAudio = document.getElementById("songCueAudio");
  const cuePlayer = document.getElementById("cuePlayer");
  const songCuePlay = document.getElementById("songCuePlay");
  const cueSeek = document.getElementById("cueSeek");
  const cueCurrentTime = document.getElementById("cueCurrentTime");
  const cueDuration = document.getElementById("cueDuration");

  if (song.cue || song.cueAudio) {
    songCue.classList.remove("hidden");
    songCueText.textContent = song.cue || "";

    if (song.cueAudio) {
      songCueAudio.pause();
      songCueAudio.removeAttribute("src");
      songCueAudio.dataset.src = song.cueAudio;
      songCueAudio.load();
      cuePlayer.classList.remove("hidden");
      songCuePlay.textContent = "▶";
      cueSeek.value = 0;
      cueCurrentTime.textContent = "0:00";
      cueDuration.textContent = "0:00";
    } else {
      songCueAudio.pause();
      songCueAudio.removeAttribute("src");
      delete songCueAudio.dataset.src;
      songCueAudio.load();
      cuePlayer.classList.add("hidden");
    }
  } else {
    songCue.classList.add("hidden");
    songCueText.textContent = "";
    songCueAudio.pause();
    songCueAudio.removeAttribute("src");
    delete songCueAudio.dataset.src;
    songCueAudio.load();
    cuePlayer.classList.add("hidden");
  }
}

const songCueAudio = document.getElementById("songCueAudio");
const songCuePlay = document.getElementById("songCuePlay");
const cuePlayer = document.getElementById("cuePlayer");
const cueSeek = document.getElementById("cueSeek");
const cueCurrentTime = document.getElementById("cueCurrentTime");
const cueDuration = document.getElementById("cueDuration");

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${secs}`;
}

if (songCueAudio && songCuePlay && cueSeek) {
  songCuePlay.addEventListener("click", async () => {
    if (songCueAudio.paused) {
      if (!songCueAudio.getAttribute("src") && songCueAudio.dataset.src) {
        songCueAudio.src = songCueAudio.dataset.src;
        songCueAudio.load();
      }

      try {
        await songCueAudio.play();
        songCuePlay.textContent = "Ⅱ";
        const song = SONGS[AppState.song.currentIndex];
        window.Analytics?.toggleCuePlayer?.(song, true);
      } catch (_error) {
        songCuePlay.textContent = "▶";
      }
    } else {
      songCueAudio.pause();
      songCuePlay.textContent = "▶";
      const song = SONGS[AppState.song.currentIndex];
      window.Analytics?.toggleCuePlayer?.(song, false);
    }
  });

  songCueAudio.addEventListener("loadedmetadata", () => {
    cueSeek.max = songCueAudio.duration;
    cueDuration.textContent = formatTime(songCueAudio.duration);
  });

  songCueAudio.addEventListener("timeupdate", () => {
    cueSeek.value = songCueAudio.currentTime;
    cueCurrentTime.textContent = formatTime(songCueAudio.currentTime);
  });

  cueSeek.addEventListener("input", () => {
    songCueAudio.currentTime = cueSeek.value;
  });

  songCueAudio.addEventListener("ended", () => {
    songCuePlay.textContent = "▶";
    cueSeek.value = 0;
    cueCurrentTime.textContent = "0:00";
  });
}

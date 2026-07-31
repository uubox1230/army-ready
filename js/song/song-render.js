/* =====================================================
   song-render.js
   -----------------------------------------------------

   Purpose
   - Song Page Rendering
   - Lyrics Rendering
   - Highlight Rendering
   - Read Mode

   Dependencies
   - songs.js
   - storage.js

   Used By
   - navigation.js
   - karaoke.js

   Exports
   - renderChants()
   - renderHighlight()
   - escapeHtml()
   - getBadge()
   - showReadMode()
   - updateModeButtons()

===================================================== */

function renderChants() {
  const song = SONGS[AppState.song.currentIndex];
  const read = document.getElementById("readMode");

  read.innerHTML = song.chants.map(line => `
    <div class="chant-line ${line.type || ""} ${line.highlight ? "has-highlight" : ""}">
      <div class="chant-time">${line.time || getBadge(line.type)}</div>
      <div class="chant-text">${renderHighlight(line)}</div>
    </div>
  `).join("");
}

function getBadge(type) {
  switch (type) {
    case "lyrics":
      return "🎵 歌詞";
    case "sing":
      return "🎤 跟唱";
    case "chant":
      return "💙 應援";
    case "cheer":
      return "🎉 歡呼";
    default:
      return "🎵";
  }
}

function showReadMode() {
  document.getElementById("readMode").classList.remove("hidden");
  document.getElementById("practiceMode").classList.add("hidden");
  document.body.classList.remove("karaoke-lock");
  
  updateModeButtons("read");
  saveLastPractice(AppState.song.currentIndex, "read");
}

function updateModeButtons(mode) {
  document
    .getElementById("readModeBtn")
    ?.classList.toggle("active", mode === "read");

  document
    .getElementById("practiceModeBtn")
    ?.classList.toggle("active", mode === "practice");
}
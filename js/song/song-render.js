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

let lyricsDisplayBound = false;
let lyricsDisplayStatusTimer = null;

function getLyricsDisplaySettings() {
  const preferences = getPreferences();
  return normalizeLyricsDisplay(
    preferences.lyricsDisplay,
    preferences.lyricsView
  );
}

function renderLyricsDisplay(line, renderKorean = renderHighlight) {
  const display = getLyricsDisplaySettings();
  const parts = [];

  if (display.lyrics && line.text) {
    parts.push(`
      <span class="lyrics-display-text lyrics-display-korean">
        ${renderKorean(line)}
      </span>
    `);
  }

  if (display.roman && line.roman) {
    parts.push(`
      <span class="lyrics-display-text lyrics-display-roman">
        ${escapeHtml(line.roman)}
      </span>
    `);
  }

  if (display.practice && line.practiceText) {
    parts.push(`
      <span class="lyrics-display-text lyrics-display-practice">
        ${escapeHtml(line.practiceText)}
      </span>
    `);
  }

  return `<span class="lyrics-display-stack">${parts.join("")}</span>`;
}

function renderChants() {
  const song = SONGS[AppState.song.currentIndex];
  const read = document.getElementById("readMode");

  if (!song || !read) return;

  read.innerHTML = song.chants.map(line => `
    <div class="chant-line ${line.type || ""} ${line.highlight ? "has-highlight" : ""}">
      <div class="chant-time" ${line.time ? "" : `data-i18n="practice.badge.${line.type}"`}>${line.time || getBadge(line.type)}</div>
      <div class="chant-text">${renderLyricsDisplay(line)}</div>
    </div>
  `).join("");

  animateLyricsArea(read);
  initLyricsDisplayControl();
  syncLyricsDisplayControl();
}

function animateLyricsArea(element) {
  if (!element || getPreferences().reduceMotion) return;

  element.classList.remove("lyrics-display-refresh");
  void element.offsetWidth;
  element.classList.add("lyrics-display-refresh");
}

function initLyricsDisplayControl() {
  if (lyricsDisplayBound) return;

  const control = document.getElementById("lyricsDisplayControl");
  const trigger = document.getElementById("lyricsDisplayTrigger");
  const panel = document.getElementById("lyricsDisplayPanel");
  const overlay = document.getElementById("lyricsDisplayOverlay");
  const closeButton = document.getElementById("lyricsDisplayClose");

  if (!control || !trigger || !panel || !overlay || !closeButton) return;
  lyricsDisplayBound = true;

  trigger.addEventListener("click", () => {
    if (control.classList.contains("open")) closeLyricsDisplay();
    else openLyricsDisplay();
  });

  closeButton.addEventListener("click", () => closeLyricsDisplay(true));
  overlay.addEventListener("click", closeLyricsDisplay);

  control.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener("change", handleLyricsDisplayChange);
  });

  document.addEventListener("click", event => {
    if (control.classList.contains("open") && !control.contains(event.target)) {
      closeLyricsDisplay();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLyricsDisplay(true);
  });
}

function openLyricsDisplay() {
  const control = document.getElementById("lyricsDisplayControl");
  const trigger = document.getElementById("lyricsDisplayTrigger");
  const panel = document.getElementById("lyricsDisplayPanel");
  if (!control || !trigger || !panel) return;

  control.classList.add("open");
  trigger.setAttribute("aria-expanded", "true");
  panel.setAttribute("aria-hidden", "false");
}

function closeLyricsDisplay(restoreFocus = false) {
  const control = document.getElementById("lyricsDisplayControl");
  const trigger = document.getElementById("lyricsDisplayTrigger");
  const panel = document.getElementById("lyricsDisplayPanel");
  if (!control || !trigger || !panel) return;

  control.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
  panel.setAttribute("aria-hidden", "true");

  if (restoreFocus) trigger.focus({ preventScroll: true });
}

function handleLyricsDisplayChange(event) {
  const control = document.getElementById("lyricsDisplayControl");
  if (!control) return;

  const inputs = Array.from(
    control.querySelectorAll('input[type="checkbox"]')
  );
  const nextDisplay = Object.fromEntries(
    inputs.map(input => [input.value, input.checked])
  );

  if (!Object.values(nextDisplay).some(Boolean)) {
    event.target.checked = true;
    showLyricsDisplayMinimumMessage();
    return;
  }

  updatePreference("lyricsDisplay", nextDisplay);
  syncLyricsDisplayControl();
  refreshLyricsDisplayAreas();
}

function syncLyricsDisplayControl() {
  const control = document.getElementById("lyricsDisplayControl");
  const summary = document.getElementById("lyricsDisplaySummary");
  if (!control || !summary) return;

  const display = getLyricsDisplaySettings();
  const labels = {
    lyrics: window.t?.("practice.display.summary_lyrics", {}, "韓文") || "韓文",
    roman: window.t?.("practice.display.summary_roman", {}, "羅馬") || "羅馬",
    practice: window.t?.("practice.display.summary_practice", {}, "空耳") || "空耳"
  };

  control.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = Boolean(display[input.value]);
  });

  summary.textContent = Object.keys(labels)
    .filter(key => display[key])
    .map(key => labels[key])
    .join("・");
}

function showLyricsDisplayMinimumMessage() {
  const status = document.getElementById("lyricsDisplayStatus");
  if (!status) return;

  status.classList.add("visible");
  window.clearTimeout(lyricsDisplayStatusTimer);
  lyricsDisplayStatusTimer = window.setTimeout(() => {
    status.classList.remove("visible");
  }, 1800);
}

function refreshLyricsDisplayAreas() {
  renderChants();

  if (typeof refreshKaraokeLyricsDisplay === "function") {
    refreshKaraokeLyricsDisplay();
  }
}

function getBadge(type) {
  switch (type) {
    case "lyrics":
      return window.t?.("practice.badge.lyrics", {}, "🎵 歌詞") || "🎵 歌詞";
    case "sing":
      return window.t?.("practice.badge.sing", {}, "🎤 跟唱") || "🎤 跟唱";
    case "chant":
      return window.t?.("practice.badge.chant", {}, "💙 應援") || "💙 應援";
    case "cheer":
      return window.t?.("practice.badge.cheer", {}, "🎉 歡呼") || "🎉 歡呼";
    default:
      return "🎵";
  }
}

document.addEventListener("armyready:languagechange", syncLyricsDisplayControl);

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

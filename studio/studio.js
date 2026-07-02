/* =========================
   ARMY READY Studio
   Final studio.js
========================= */

let workingSongs = [];
let currentSong = null;
let currentSongIndex = 0;
let currentLineIndex = 0;

let startTime = 0;
let elapsedBeforePause = 0;
let timer = null;
let isRunning = false;
let hasStarted = false;

const $ = id => document.getElementById(id);

const songSelect = $("songSelect");
const songTitle = $("songTitle");
const timerEl = $("timer");
const progressText = $("progressText");
const progressFill = $("progressFill");

const previousLineEl = $("previousLine");
const currentLineEl = $("currentLine");
const nextLineEl = $("nextLine");
const timelineList = $("timelineList");

const startBtn = $("startBtn");
const pauseBtn = $("pauseBtn");
const resetBtn = $("resetBtn");
const saveBtn = $("saveBtn");
const exportBtn = $("exportBtn");

/* =========================
   Init
========================= */

window.addEventListener("DOMContentLoaded", () => {
  initStudio();
});

function initStudio() {
  if (typeof SONGS === "undefined" || !Array.isArray(SONGS)) {
    alert("找不到 SONGS，請確認 studio.html 有先載入 songs.js");
    return;
  }

  workingSongs = JSON.parse(JSON.stringify(SONGS));

  buildSongSelect();
  bindEvents();

  loadSong(0);
}

/* =========================
   Song Select
========================= */

function buildSongSelect() {
  songSelect.innerHTML = "";

  workingSongs.forEach((song, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${String(index + 1).padStart(2, "0")} ${song.title}`;
    songSelect.appendChild(option);
  });
}

function loadSong(index) {
  stopTimer();

  currentSongIndex = Number(index);
  currentSong = workingSongs[currentSongIndex];
  currentLineIndex = findFirstUnmarkedLine(currentSong);

  elapsedBeforePause = 0;
  hasStarted = false;
  isRunning = false;

  songSelect.value = currentSongIndex;
  songTitle.textContent = currentSong.title || "Untitled";

  updateTimerDisplay(0);
  renderAll();
}

function findFirstUnmarkedLine(song) {
  if (!song || !Array.isArray(song.chants)) return 0;

  const index = song.chants.findIndex(line => line.at === undefined || line.at === null);

  return index === -1 ? 0 : index;
}

/* =========================
   Events
========================= */

function bindEvents() {
  songSelect.addEventListener("change", () => {
    loadSong(songSelect.value);
  });

  startBtn.addEventListener("click", startTiming);
  pauseBtn.addEventListener("click", pauseTiming);
  resetBtn.addEventListener("click", resetTiming);
  saveBtn.addEventListener("click", saveSong);
  exportBtn.addEventListener("click", exportCurrentSong);

  document.addEventListener("keydown", handleKeydown);
}

function handleKeydown(event) {
  const tag = document.activeElement.tagName.toLowerCase();

  if (tag === "input" || tag === "textarea" || tag === "select") return;

  if (event.code === "Space") {
    event.preventDefault();
    markCurrentLine();
    return;
  }

  if (event.code === "ArrowLeft") {
    event.preventDefault();
    goPrevLine();
    return;
  }

  if (event.code === "ArrowRight") {
    event.preventDefault();
    goNextLine();
    return;
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    undoCurrentOrPrevious();
    return;
  }
}

/* =========================
   Timer
========================= */

function startTiming() {

  if (isRunning) return;

  isRunning = true;
  hasStarted = true;

  startTime = performance.now() - elapsedBeforePause * 1000;

  timer = setInterval(() => {

    elapsedBeforePause =
      (performance.now() - startTime) / 1000;

    updateTimerDisplay(elapsedBeforePause);

  }, 20);

}

function pauseTiming() {

  if (!isRunning) return;

  stopTimer();

}

function stopTimer() {

  isRunning = false;

  clearInterval(timer);

}

function resetTiming() {

  stopTimer();

  elapsedBeforePause = 0;
  hasStarted = false;

  updateTimerDisplay(0);

}

function updateTimerDisplay(sec) {

  timerEl.textContent = sec.toFixed(2);

}

/* =========================
   Mark Time
========================= */

function markCurrentLine() {

  if (!currentSong) return;

  if (!hasStarted) {
    startTiming();
  }

  if (currentLineIndex >= currentSong.chants.length)
    return;

  currentSong.chants[currentLineIndex].at =
    Number(elapsedBeforePause.toFixed(2));

  currentLineIndex++;

  renderAll();

}

function undoCurrentOrPrevious() {

  if (!currentSong) return;

  let index = currentLineIndex - 1;

  if (index < 0) return;

  delete currentSong.chants[index].at;

  currentLineIndex = index;

  renderAll();

}

/* =========================
   Line Navigation
========================= */

function goPrevLine() {

  if (!currentSong) return;

  if (currentLineIndex > 0) {

    currentLineIndex--;

    renderAll();

  }

}

function goNextLine() {

  if (!currentSong) return;

  if (currentLineIndex < currentSong.chants.length - 1) {

    currentLineIndex++;

    renderAll();

  }

}

function jumpToLine(index) {

  currentLineIndex = index;

  renderAll();

}

/* =========================
   Render
========================= */

function renderAll() {

  renderLines();

  renderTimeline();

  updateProgress();

}

function renderLines() {

  previousLineEl.textContent =
    currentLineIndex > 0
      ? getDisplayText(currentSong.chants[currentLineIndex - 1])
      : "—";

  currentLineEl.textContent =
    currentLineIndex < currentSong.chants.length
      ? getDisplayText(currentSong.chants[currentLineIndex])
      : "✔ 全部完成";

  nextLineEl.textContent =
    currentLineIndex < currentSong.chants.length - 1
      ? getDisplayText(currentSong.chants[currentLineIndex + 1])
      : "—";

}

function getDisplayText(line) {

  return (
    line.text ||
    line.practiceText ||
    line.replaceText ||
    line.highlight ||
    ""
  );

}

/* =========================
   Timeline
========================= */

function renderTimeline() {

  if (!timelineList) return;

  timelineList.innerHTML = "";

  currentSong.chants.forEach((line, index) => {

    const item = document.createElement("button");

    item.type = "button";

    item.className = [
      "timeline-item",
      index === currentLineIndex ? "active" : "",
      line.at !== undefined ? "marked" : "",
      line.type || ""
    ].join(" ");

    item.onclick = () => jumpToLine(index);

    item.innerHTML = `
        <span class="timeline-item-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="timeline-item-time">${line.at !== undefined ? Number(line.at).toFixed(2) + "s" : "未標記"}</span>
        <span class="timeline-item-text">${escapeHtml(getDisplayText(line))}</span>
    `;

    timelineList.appendChild(item);

  });

}

function updateProgress() {

  const total = currentSong.chants.length;

  const marked = currentSong.chants.filter(
    line => line.at !== undefined && line.at !== null
  ).length;

  progressText.textContent = `${marked} / ${total}`;

  const percent = total === 0 ? 0 : (marked / total) * 100;

  progressFill.style.width = `${percent}%`;

}

/* =========================
   Save
========================= */

function saveSong() {

  if (!currentSong) return;

  workingSongs[currentSongIndex] =
    JSON.parse(JSON.stringify(currentSong));

  flashButton(saveBtn, "已暫存 ✓");

}

/* =========================
   Export
========================= */

function exportCurrentSong() {

  saveSong();

  const content =
JSON.stringify(currentSong, null, 2);

  downloadTextFile(
    `${currentSong.id}.json`,
    content
  );

}

function downloadTextFile(filename, content) {

  const blob = new Blob([content], {
    type: "text/javascript;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = filename;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);

}

/* =========================
   Helpers
========================= */

function flashButton(button, text) {

  if (!button) return;

  const original = button.textContent;

  button.textContent = text;

  setTimeout(() => {
    button.textContent = original;
  }, 900);

}

function escapeHtml(text) {

  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}

/* =========================
   Finish Check
========================= */

function isFinished() {

  if (!currentSong) return false;

  return currentSong.chants.every(
    line => line.at !== undefined && line.at !== null
  );

}

function autoNextSong() {

  if (!isFinished()) return;

  stopTimer();

  setTimeout(() => {

    if (currentSongIndex < workingSongs.length - 1) {

      if (confirm("這首已完成，要切換到下一首嗎？")) {

        loadSong(currentSongIndex + 1);

      }

    } else {

      alert("🎉 全部歌曲都完成了！");

    }

  }, 200);

}

/* =========================
   Override markCurrentLine
========================= */

const originalMarkCurrentLine = markCurrentLine;

markCurrentLine = function () {

  originalMarkCurrentLine();

  autoNextSong();

};

/* =========================
   Before Export
========================= */

window.addEventListener("beforeunload", event => {

  const changed =
    JSON.stringify(workingSongs) !== JSON.stringify(SONGS);

  if (!changed) return;

  event.preventDefault();

  event.returnValue = "";

});

/* =========================
   Console
========================= */

window.studio = {

  songs: workingSongs,

  currentSong() {

    return currentSong;

  },

  export() {

    exportSongsFile();

  },

  save() {

    saveSong();

  }

};

console.log("%cARMY READY Studio Loaded",
  "color:#8b5cf6;font-weight:bold;font-size:16px;");
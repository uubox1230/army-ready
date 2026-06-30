if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

let currentSongIndex = 0;
let practiceIndex = 0;

const doneKey = "army-ready-done";

function getDone() {
  return JSON.parse(localStorage.getItem(doneKey) || "[]");
}

function saveDone(done) {
  localStorage.setItem(doneKey, JSON.stringify(done));
}

window.addEventListener("popstate", () => {
  restorePageFromHash();
});

function scrollToTopSafe() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });
}

function renderHome() {
  const list = document.getElementById("songList");
  const done = getDone();

  list.innerHTML = "";

  const keyword =
  document.getElementById("songSearch")?.value.trim().toLowerCase() || "";

  SONGS.forEach((song, index) => {
    if (keyword && !song.title.toLowerCase().includes(keyword)) {
      return;
    }

    const btn = document.createElement("button");
    btn.className = "song-item";
    btn.onclick = () => openSong(index);

    btn.innerHTML = `
      <span class="song-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="song-name">${song.title}</span>
      <span class="status">${done.includes(index) ? "🟢" : "⚪"}</span>
    `;

    list.appendChild(btn);
  });

  document.getElementById("progressText").textContent =
    `${done.length} / ${SONGS.length} 已練習`;

  document.getElementById("progressBar").style.width =
    `${(done.length / SONGS.length) * 100}%`;
}

function openSong(index) {
  closeHomeFab();
  closeFab();

  const currentAudio = document.getElementById("songCueAudio");
  if (currentAudio) {
    currentAudio.pause();
  }

  currentSongIndex = index;
  practiceIndex = 0;

  const song = SONGS[index];
  const songId = song.id;

  history.pushState({ page: "song", index }, "", `#${songId}`);

  document.querySelector(".app").classList.add("hidden");
  document.getElementById("songPage").classList.remove("hidden");

  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songNote").textContent =
    song.note || "官方 Fan Chant + 現場練習提醒。";
  
  updateSongCue(song);
  renderChants();
  showReadMode();
  updateDoneButton();

  scrollToTopSafe();
}

function backHome() {
  closeFab();
  closeHomeFab();

  history.pushState(null, "", window.location.pathname);
  
  document.getElementById("songPage").classList.add("hidden");
  document.querySelector(".app").classList.remove("hidden");

  renderHome();

  window.scrollTo(0, 0);
}

function goPrevSong() {
  if (currentSongIndex > 0) {
    closeFab();
    openSong(currentSongIndex - 1);
  }
}

function toggleFab() {
  const fab = document.getElementById("fabMenu");
  const fabMain = document.querySelector("#fabMenu .fab-main");

  const isOpen = fab.classList.toggle("open");

  fabMain.textContent = isOpen ? "✕" : "☰";
}

function toggleHomeFab() {
  const fab = document.getElementById("homeFabMenu");
  const fabMain = document.querySelector("#homeFabMenu .fab-main");

  const isOpen = fab.classList.toggle("open");

  fabMain.textContent = isOpen ? "✕" : "💜";
}

function closeHomeFab() {
  const fab = document.getElementById("homeFabMenu");
  const fabMain = document.querySelector("#homeFabMenu .fab-main");

  fab.classList.remove("open");
  fabMain.textContent = "💜";
}

document.addEventListener("click", event => {
  const homeFab = document.getElementById("homeFabMenu");
  const songFab = document.getElementById("fabMenu");

  if (homeFab && !homeFab.contains(event.target)) {
    closeHomeFab();
  }

  if (songFab && !songFab.contains(event.target)) {
    closeFab();
  }
});

function closeFab() {
  const fab = document.getElementById("fabMenu");
  const fabMain = document.querySelector("#fabMenu .fab-main");

  fab.classList.remove("open");
  fabMain.textContent = "☰";
}

function goNextSong() {
  if (currentSongIndex < SONGS.length - 1) {
    closeFab();
    openSong(currentSongIndex + 1);
  }
}

function renderChants() {
  const song = SONGS[currentSongIndex];
  const read = document.getElementById("readMode");

  read.innerHTML = song.chants.map(line => `
    <div class="chant-line ${line.type || ""} ${line.highlight ? "has-highlight" : ""}">
      <div class="chant-time">${line.time || getBadge(line.type)}</div>
      <div class="chant-text">${renderHighlight(line)}</div>
    </div>
  `).join("");
}

function renderHighlight(line) {
  if (line.replaceText) {
  const text = line.text || "";
  const replaceText = line.replaceText;
  const safeNewText = escapeHtml(line.practiceText || line.highlight || "");

  const originalWithStrike = escapeHtml(text).replace(
    escapeHtml(replaceText),
    `<span class="replace-original-inline">${escapeHtml(replaceText)}</span>`
  );

  return `
    <span class="replace-line">${originalWithStrike}</span>
    <span class="replace-hint">↓ 改喊</span>
    <span class="replace-new ${line.type || ""}">
      ${safeNewText}
    </span>
  `;
  }

  const text = line.text || "";
  const highlight = line.highlight || line.practiceText;

  if (!highlight || highlight === text) {
    return escapeHtml(text);
  }

  const safeText = escapeHtml(text);
  const safeHighlight = escapeHtml(highlight);
  const highlightIndex = line.highlightIndex || 0;

  const parts = safeText.split(safeHighlight);

  if (parts.length <= 1) {
    return safeText;
  }

  let result = "";

  parts.forEach((part, index) => {
    result += part;

    if (index < parts.length - 1) {
      if (index === highlightIndex) {
        result += `<span class="inline-highlight ${line.type || ""}">${safeHighlight}</span>`;
      } else {
        result += safeHighlight;
      }
    }
  });

  return result;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showReadMode() {
  document.getElementById("readMode").classList.remove("hidden");
  document.getElementById("practiceMode").classList.add("hidden");
  
  updateModeButtons("read");
}

function startPractice() {
  document.getElementById("readMode").classList.add("hidden");
  document.getElementById("practiceMode").classList.remove("hidden");

  const song = SONGS[currentSongIndex];

  song.practiceLines = song.chants.filter(line =>
    line.type === "sing" ||
    line.type === "chant" ||
    line.type === "cheer"
  );

  if (song.practiceLines.length === 0) {
    song.practiceLines = [
      {
        type: "cheer",
        text: "這首歌的練習內容還在整理中 💜"
      }
    ];
  }

  practiceIndex = 0;
  showPracticeLine();

  updateModeButtons("practice");
}

function showPracticeLine() {
  const lines =
    SONGS[currentSongIndex].practiceLines ||
    SONGS[currentSongIndex].chants;

  const current = lines[practiceIndex];
  const next = lines[practiceIndex + 1];

  document.getElementById("practiceCounter").textContent =
    `${practiceIndex + 1} / ${lines.length}`;

  const currentBadge = document.getElementById("practiceBadge");
  currentBadge.className = `badge ${current.type || "default"}`;
  currentBadge.textContent = getBadge(current.type);

  document.getElementById("practiceText").innerHTML =
  renderPracticeText(current);

  const nextBadge = document.getElementById("nextBadge");

  if (next) {
  const nextCard = document.getElementById("nextCard");

  nextCard.className = `practice-card next ${next.type || "default"}`;
  nextBadge.className = `badge ${next.type || "default"}`;
  nextBadge.textContent = getBadge(next.type);

  document.getElementById("nextPracticeText").innerHTML =
    renderPracticeText(next);
  } else {
  document.getElementById("nextCard").className = "practice-card next cheer";
  nextBadge.className = "badge cheer";
  nextBadge.textContent = "💜";
  document.getElementById("nextPracticeText").textContent =
    "最後一句，準備完成！";
  }

    document.getElementById("currentCard").className =
    `practice-card current ${current.type || "default"}`;
}

function renderPracticeText(line) {
  const hasPartialHighlight =
    line.highlight && line.practiceText && line.practiceText !== line.text;

  const mainText = line.highlight
    ? renderHighlight(line)
    : `<span class="practice-full ${line.type || "default"}">${escapeHtml(line.practiceText || line.text)}</span>`;

  return `
    <div>${mainText}</div>
    ${
      hasPartialHighlight
        ? `<div class="practice-target ${line.type || "default"}">練習：${escapeHtml(line.practiceText)}</div>`
        : ""
    }
    ${line.roman ? `<div class="practice-roman">${escapeHtml(line.roman)}</div>` : ""}
  `;
}

function nextLine() {
  const lines =
    SONGS[currentSongIndex].practiceLines ||
    SONGS[currentSongIndex].chants;

  if (practiceIndex < lines.length - 1) {
    practiceIndex += 1;
    showPracticeLine();
    } else {
    document.getElementById("practiceCounter").textContent =
      `${lines.length} / ${lines.length}`;

    document.getElementById("currentCard").className =
      "practice-card current completed-card";

    document.getElementById("practiceBadge").className = "badge cheer";
    document.getElementById("practiceBadge").textContent = "🎉 完成";

    document.getElementById("practiceText").innerHTML =
      `
        <div class="complete-heart">💜</div>
        <div>ARMY READY</div>
        <div class="complete-subtitle">SEE YOU AT THE CONCERT</div>
      `;

    document.getElementById("nextBadge").className = "badge cheer";
    document.getElementById("nextBadge").textContent = "💜";

    document.getElementById("nextPracticeText").textContent =
      "可以返回歌單標記完成";
  }
}

function prevLine() {
  if (practiceIndex > 0) {
    practiceIndex -= 1;
    showPracticeLine();
  }
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

function updateModeButtons(mode) {
  document
    .getElementById("readModeBtn")
    ?.classList.toggle("active", mode === "read");

  document
    .getElementById("practiceModeBtn")
    ?.classList.toggle("active", mode === "practice");
}

function toggleDone() {
  const done = getDone();
  const exists = done.includes(currentSongIndex);

  const updated = exists
    ? done.filter(i => i !== currentSongIndex)
    : [...done, currentSongIndex];

  saveDone(updated);
  updateDoneButton();
}

function updateDoneButton() {
  const done = getDone();
  const doneBtn = document.getElementById("doneBtn");
  const isDone = done.includes(currentSongIndex);

  doneBtn.textContent = isDone ? "💜 已練習" : "○ 未練習";
  doneBtn.classList.toggle("active", isDone);
}

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
      songCueAudio.src = song.cueAudio;
      cuePlayer.classList.remove("hidden");
      songCuePlay.textContent = "▶";
      cueSeek.value = 0;
      cueCurrentTime.textContent = "0:00";
      cueDuration.textContent = "0:00";
    } else {
      songCueAudio.pause();
      songCueAudio.removeAttribute("src");
      cuePlayer.classList.add("hidden");
    }
  } else {
    songCue.classList.add("hidden");
    songCueText.textContent = "";
    songCueAudio.pause();
    songCueAudio.removeAttribute("src");
    cuePlayer.classList.add("hidden");
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(registration => {
    registration.update();

    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  });
}

let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");
const shareBtn = document.getElementById("shareBtn");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
});

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function copyShareLink(url) {
  try {
    await navigator.clipboard.writeText(url);
    alert("已複製網址！");
  } catch {
    prompt("複製這個網址分享給朋友：", url);
  }
}

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    closeHomeFab();

    const shareUrl = window.location.href.split("#")[0];

    const shareData = {
      title: "ARMY READY 💜",
      text: "一起練 BTS Fan Chant！高雄場見～",
      url: shareUrl
    };

    if (isMobileDevice() && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error.name !== "AbortError") {
          await copyShareLink(shareUrl);
        }
      }
    } else {
      await copyShareLink(shareUrl);
    }
  });
}

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    closeHomeFab();

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isIOS) {
      alert("iPhone 安裝方式：按 Safari 下方分享按鈕 → 選擇「加入主畫面」。");
      return;
    }

    if (deferredPrompt && isAndroid) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      return;
    }

    alert("請用瀏覽器選單選擇「加入主畫面」或「安裝 App」。");
  });
}

document.querySelectorAll("#homeFabMenu .fab-action").forEach(action => {
  action.addEventListener("click", () => {
    closeHomeFab();
  });
});

function restorePageFromHash() {
  const hash = window.location.hash.replace("#", "");

  if (hash) {
    const index = SONGS.findIndex(song => song.id === hash);

    if (index >= 0) {
      currentSongIndex = index;
      practiceIndex = 0;

      const song = SONGS[index];

      closeHomeFab();
      closeFab();

      document.querySelector(".app").classList.add("hidden");
      document.getElementById("songPage").classList.remove("hidden");

      document.getElementById("songTitle").textContent = song.title;
      document.getElementById("songNote").textContent =
        song.note || "官方 Fan Chant + 現場練習提醒。";

      updateSongCue(song);
      renderChants();
      showReadMode();
      updateDoneButton();

      scrollToTopSafe();
      return;
    }
  }

  document.getElementById("songPage").classList.add("hidden");
  document.querySelector(".app").classList.remove("hidden");

  renderHome();
  scrollToTopSafe();
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
      await songCueAudio.play();
      songCuePlay.textContent = "⏸";
    } else {
      songCueAudio.pause();
      songCuePlay.textContent = "▶";
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

restorePageFromHash();

if (window.lucide) {
  lucide.createIcons();
}
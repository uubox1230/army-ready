if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

let currentSongIndex = 0;

/* =========================
   Karaoke v3 State
========================= */

let karaokeIndex = -1;
let karaokeTimer = null;
let karaokeStartTime = 0;
let karaokeElapsed = 0;
let isKaraokeRunning = false;
let karaokeBuilt = false;

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
  closeSetlistSheet();

  const currentAudio = document.getElementById("songCueAudio");
  if (currentAudio) {
    currentAudio.pause();
  }

  currentSongIndex = index;

  const song = SONGS[index];
  const songId = song.id;

  history.pushState({ page: "song", index }, "", `#${songId}`);

  document.querySelector(".app").classList.add("hidden");
  document.getElementById("songPage").classList.remove("hidden");

  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songNote").textContent =
    song.note || "官方 Fan Chant + 現場練習提醒。";
  
  updateSongCue(song);
  updatePlatforms(song);
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

  if (!fab || !fabMain) return;

  const isOpen = fab.classList.toggle("open");
  fabMain.textContent = isOpen ? "✕" : "☰";
}

function toggleHomeFab() {
  const fab = document.getElementById("homeFabMenu");
  const fabMain = document.querySelector("#homeFabMenu .fab-main");

  const isOpen = fab.classList.toggle("open");

  fabMain.textContent = isOpen ? "✕" : "💜";
}

function togglePlatformSection() {
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const icon = document.getElementById("platformToggleIcon");

  if (!content || !picker || !list) return;

  const willOpen = content.classList.contains("hidden");

  if (willOpen) {
    content.classList.remove("hidden");
    picker.classList.remove("hidden");
    list.classList.add("hidden");
    list.innerHTML = "";

    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    closePlatformContent();
  }
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
  const platformSection = document.getElementById("platformSection");

  if (homeFab && !homeFab.contains(event.target)) {
    closeHomeFab();
  }

  if (songFab && !songFab.contains(event.target)) {
    closeFab();
  }

  if (platformSection && platformSection.contains(event.target)) {
    return;
  }

  closePlatformContent();
});

function closeFab() {
  const fab = document.getElementById("fabMenu");
  const fabMain = document.querySelector("#fabMenu .fab-main");

  if (!fab || !fabMain) return;

  fab.classList.remove("open");
  fabMain.textContent = "☰";
}

function goNextSong() {
  if (currentSongIndex < SONGS.length - 1) {
    closeFab();
    openSong(currentSongIndex + 1);
  }
}

function renderSetlistSheet() {
  const list = document.getElementById("setlistSheetList");
  if (!list) return;

  list.innerHTML = "";

  SONGS.forEach((song, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `setlist-sheet-item ${index === currentSongIndex ? "active" : ""}`;

    button.innerHTML = `
      <span class="setlist-sheet-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="setlist-sheet-title">${song.title}</span>
      <span class="setlist-sheet-status">${index === currentSongIndex ? "播放中" : ""}</span>
    `;

    button.onclick = () => {
      closeSetlistSheet();
      openSong(index);
    };

    list.appendChild(button);
  });
}

function centerActiveSetlistItem() {
  const list = document.getElementById("setlistSheetList");
  const active = list?.querySelector(".setlist-sheet-item.active");

  if (!list || !active) return;

  const target =
    active.offsetTop -
    list.clientHeight / 2 +
    active.clientHeight / 2;

  list.scrollTo({
    top: Math.max(0, target),
    behavior: "instant"
  });
}

function openSetlistSheet() {
  renderSetlistSheet();

  document.getElementById("setlistOverlay").classList.remove("hidden");
  document.getElementById("setlistSheet").classList.remove("hidden");
  document.body.classList.add("sheet-open");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      centerActiveSetlistItem();
    });
  });
}

function closeSetlistSheet() {
  document.getElementById("setlistOverlay")?.classList.add("hidden");
  document.getElementById("setlistSheet")?.classList.add("hidden");
  document.body.classList.remove("sheet-open");
}

function toggleSetlistSheet() {
  const sheet = document.getElementById("setlistSheet");

  if (sheet.classList.contains("hidden")) {
    openSetlistSheet();
  } else {
    closeSetlistSheet();
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
  const highlights = Array.isArray(line.highlight)
    ? line.highlight
    : [line.highlight || line.practiceText];

  let safeText = escapeHtml(text);

  highlights.forEach(h => {
    if (!h || h === text) return;

    const safeHighlight = escapeHtml(h);

    safeText = safeText.replace(
      safeHighlight,
      `<span class="inline-highlight ${line.type || ""}">${safeHighlight}</span>`
    );
  });

  return safeText;
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
  document.body.classList.remove("karaoke-lock");
  
  updateModeButtons("read");
}

function startPractice() {
  pauseKaraoke();

  document.getElementById("readMode").classList.add("hidden");
  document.getElementById("practiceMode").classList.remove("hidden");
  document.body.classList.add("karaoke-lock");

  karaokeIndex = -1;
  karaokeElapsed = 0;
  isKaraokeRunning = false;
  karaokeBuilt = false;

  const startBtn = document.getElementById("karaokeStartBtn");
  if (startBtn) startBtn.textContent = "▶ 同步開始";

  buildKaraoke();
  activateKaraokeLine(-1);
  updateKaraokeClock();
  updateModeButtons("practice");

  document.getElementById("practiceMode")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toggleKaraoke() {
  const lines = getKaraokeLines();
  const lastAt = Number(lines[lines.length - 1]?.at || 0);

  if (karaokeElapsed >= lastAt) {
    restartKaraoke();
    return;
  }

  if (isKaraokeRunning) {
    pauseKaraoke();
  } else {
    startKaraoke();
  }
}

function startKaraoke() {
  const lines = getKaraokeLines();

  if (!lines.length) return;

  isKaraokeRunning = true;

  karaokeStartTime =
    performance.now() - karaokeElapsed * 1000;

  clearInterval(karaokeTimer);

  karaokeTimer = setInterval(() => {
    karaokeElapsed =
      (performance.now() - karaokeStartTime) / 1000;

    updateKaraokeIndex();
  }, 80);

  const startBtn = document.getElementById("karaokeStartBtn");
  if (startBtn) startBtn.textContent = "⏸ 暫停";
}

function pauseKaraoke() {
  isKaraokeRunning = false;
  clearInterval(karaokeTimer);

  const startBtn = document.getElementById("karaokeStartBtn");
  if (startBtn) startBtn.textContent = "▶ 繼續同步";
}

function restartKaraoke() {
  karaokeElapsed = 0;
  activateKaraokeLine(-1);
  updateKaraokeClock();
  startKaraoke();
}

function getKaraokeLines() {
  const song = SONGS[currentSongIndex];

  return song.practiceLines ||
    song.chants.filter(line =>
      line.at !== undefined && line.at !== null
    );
}

function updateKaraokeIndex(){

    const lines=getKaraokeLines();

    if(!lines.length)return;

    let activeIndex=-1;

    for(let i=0;i<lines.length;i++){

        if(karaokeElapsed>=Number(lines[i].at)){

            activeIndex=i;

        }else{

            break;

        }

    }

    if(activeIndex!==karaokeIndex){

        activateKaraokeLine(activeIndex);

    }

    updateKaraokeClock();

    const lastIndex=lines.length-1;
    const lastAt=Number(lines[lastIndex].at);

    if (
  karaokeIndex === lastIndex &&
  karaokeElapsed >= lastAt
    ) {

      pauseKaraoke();

      const startBtn=document.getElementById("karaokeStartBtn");

      if (startBtn) {
        startBtn.textContent = "↺ 重新開始";
      }

      }

}

function buildKaraoke() {
  const wrap = document.getElementById("karaokeLyrics");
  if (!wrap) return;

  const lines = getKaraokeLines();

  wrap.innerHTML = "";

  // Intro
  wrap.appendChild(createKaraokeLine({
    text: "(...)",
    type: "intro"
  }, -1));

  // Song
  lines.forEach((line, index) => {
    wrap.appendChild(createKaraokeLine(line, index));
  });

  karaokeBuilt = true;
}

function createKaraokeLine(line, index) {

  const button = document.createElement("button");

  button.type = "button";

  button.className = "karaoke-line future";

  button.dataset.index = index;

  button.onclick = () => jumpKaraokeTo(index);

  button.innerHTML = renderKaraokeText(line);

  return button;

}

function getKaraokeElement(index){

    return document.querySelector(
        `.karaoke-line[data-index="${index}"]`
    );

}

function activateKaraokeLine(index) {

  if (!karaokeBuilt) return;

  const wrap = document.getElementById("karaokeLyrics");
  if (!wrap) return;

  // 清除所有狀態
  wrap.querySelectorAll(".karaoke-line").forEach(el => {
    el.classList.remove("active", "past", "future");
  });

  // 更新目前 index
  karaokeIndex = index;

  wrap.querySelectorAll(".karaoke-line").forEach(el => {

    const lineIndex = Number(el.dataset.index);

    if (lineIndex < index) {

      el.classList.add("past");

    } else if (lineIndex === index) {

      el.classList.add("active");

    } else {

      el.classList.add("future");

    }

  });

  // Intro (...)
  if (index === -1) {

    const intro = getKaraokeElement(-1);

    if (intro) {
      intro.classList.remove("future");
      intro.classList.add("active");

      scrollKaraokeToCenter(intro);
    }

    return;
  }

  const active = getKaraokeElement(index);

  if (active) {
    scrollKaraokeToCenter(active);
  }

}

function scrollKaraokeToCenter(active) {
  const wrap = document.getElementById("karaokeLyrics");
  if (!wrap || !active) return;

  const target =
    active.offsetTop -
    wrap.clientHeight / 2 +
    active.clientHeight / 2;

  wrap.scrollTo({
    top: Math.max(0, target),
    behavior: "smooth"
  });
}

function jumpKaraokeTo(index) {
  const lines = getKaraokeLines();

  if (index < 0) {
    karaokeElapsed = 0;

    if (isKaraokeRunning) {
      karaokeStartTime = performance.now();
    }

    activateKaraokeLine(-1);
    updateKaraokeClock();
    return;
  }

  const line = lines[index];
  if (!line) return;

  karaokeElapsed = Number(line.at);

  if (isKaraokeRunning) {
    karaokeStartTime =
      performance.now() - karaokeElapsed * 1000;
  }

  activateKaraokeLine(index);
  updateKaraokeClock();
}

function renderKaraokeText(line) {
  if (!line) return "";

  if (line.replaceText) {
    return renderHighlight(line);
  }

  const text = line.text || line.practiceText || "";

  if (!line.highlight && line.type !== "lyrics") {
    return `<span class="karaoke-highlight ${line.type || ""}">${escapeHtml(text)}</span>`;
  }

  const highlights = Array.isArray(line.highlight)
    ? line.highlight
    : [line.highlight || line.practiceText];

  let safeText = escapeHtml(text);

  highlights.forEach(h => {
    if (!h || h === text) return;

    const safeHighlight = escapeHtml(h);

    safeText = safeText.replace(
      safeHighlight,
      `<span class="karaoke-highlight ${line.type || ""}">${safeHighlight}</span>`
    );
  });

  return safeText;
}

function updateKaraokeClock() {
  const lines = getKaraokeLines();
  const last = Number(lines[lines.length - 1]?.at || 0);

  const displayTime = Math.min(karaokeElapsed, last);

  document.getElementById("practiceCounter").textContent =
    `${formatKaraokeTime(displayTime)} / ${formatKaraokeTime(last)}`;
}

function formatKaraokeTime(sec) {
  sec = Math.max(0, Number(sec) || 0);

  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);

  return `${m}:${String(s).padStart(2, "0")}`;
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

function updatePlatformSubtitle(song) {
  const subtitle = document.getElementById("platformSubtitle");

  if (!subtitle) return;

  const names = [];

  if (song.platforms?.apple) {
    names.push("Apple Music");
  }

  if (song.platforms?.spotify) {
    names.push("Spotify");
  }

  if (song.platforms?.youtubeMusic) {
    names.push("YouTube Music");
  }

  subtitle.textContent = names.join(" • ");
}

function updatePlatforms(song) {
  updatePlatformSubtitle(song);

  const section = document.getElementById("platformSection");
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const platforms = song.platforms || {};

  if (!section || !content || !picker || !list) return;

  picker.innerHTML = "";
  list.innerHTML = "";
  list.classList.add("hidden");

  const platformItems = [];

  if (platforms.apple) {
    platformItems.push({
      id: "apple",
      name: "Apple Music",
      icon: "",
      data: platforms.apple
    });
  }

  if (platforms.spotify) {
    platformItems.push({
      id: "spotify",
      name: "Spotify",
      icon: "♪",
      data: platforms.spotify
    });
  }

  if (platforms.youtubeMusic) {
    platformItems.push({
      id: "youtubeMusic",
      name: "YouTube Music",
      icon: "▶",
      data: platforms.youtubeMusic
    });
  }

  if (platformItems.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  content.classList.add("hidden");

  const platformIcon = document.getElementById("platformToggleIcon");
  if (platformIcon) platformIcon.style.transform = "rotate(0deg)";

  platformItems.forEach(platform => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "platform-picker-btn";

    btn.innerHTML = `
      <span class="platform-picker-icon">${platform.icon}</span>
      <span>${platform.name}</span>
    `;

    btn.onclick = () => showPlatformCard(platform);

    picker.appendChild(btn);
  });
}

function showPlatformCard(platform) {
  const list = document.getElementById("platformList");
  if (!list) return;

  list.classList.remove("hidden");

  const data = platform.data;

  if (platform.id === "apple") {
    list.innerHTML = `
      <section class="platform-card">
        <div class="platform-card-header">
          <span> Apple Music</span>
          <a href="${data.url}" target="_blank" rel="noopener">開啟</a>
        </div>
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="150"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="${data.embed}">
        </iframe>
      </section>
    `;
  }

  if (platform.id === "spotify") {
    list.innerHTML = `
      <section class="platform-card">
        <div class="platform-card-header">
          <span>Spotify</span>
          <a href="${data.url}" target="_blank" rel="noopener">開啟</a>
        </div>
        <iframe
          src="${data.embed}"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </section>
    `;
  }

  if (platform.id === "youtubeMusic") {
    list.innerHTML = `
      <section class="platform-card platform-link-card">
        <div class="platform-card-header">
          <span>YouTube Music</span>
          <a href="${data.url}" target="_blank" rel="noopener">開啟</a>
        </div>
        <a class="platform-youtube-link" href="${data.url}" target="_blank" rel="noopener">
          ▶ 在 YouTube Music 播放
        </a>
      </section>
    `;
  }
}

if ("serviceWorker" in navigator) {
  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker.register("./service-worker.js").then(registration => {
    registration.update();

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;

      newWorker.addEventListener("statechange", () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          newWorker.postMessage({ type: "SKIP_WAITING" });
        }
      });
    });

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

      const song = SONGS[index];

      closeHomeFab();
      closeFab();

      document.querySelector(".app").classList.add("hidden");
      document.getElementById("songPage").classList.remove("hidden");

      document.getElementById("songTitle").textContent = song.title;
      document.getElementById("songNote").textContent =
        song.note || "官方 Fan Chant + 現場練習提醒。";

      updateSongCue(song);
      updatePlatforms(song);
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
      songCuePlay.textContent = "Ⅱ";
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

function closePlatformContent() {
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const icon = document.getElementById("platformToggleIcon");

  if (!content || !picker || !list) return;

  content.classList.add("hidden");
  picker.classList.remove("hidden");
  list.innerHTML = "";
  list.classList.add("hidden");

  if (icon) {
    icon.style.transform = "rotate(0deg)";
  }
}

function renderAppVersion() {
  const versionEl = document.getElementById("appVersion");
  if (!versionEl) return;

  versionEl.textContent = `版本 ${APP_VERSION}`;
}

renderAppVersion();
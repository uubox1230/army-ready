let currentSongIndex = 0;
let practiceIndex = 0;

const doneKey = "army-ready-done";

function getDone() {
  return JSON.parse(localStorage.getItem(doneKey) || "[]");
}

function saveDone(done) {
  localStorage.setItem(doneKey, JSON.stringify(done));
}

function renderHome() {
  const list = document.getElementById("songList");
  const done = getDone();

  list.innerHTML = "";

  SONGS.forEach((song, index) => {
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
  currentSongIndex = index;
  practiceIndex = 0;

  const song = SONGS[index];

  document.querySelector(".app").classList.add("hidden");
  document.getElementById("songPage").classList.remove("hidden");

  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songNote").textContent =
    song.note || "官方 Fan Chant + 現場練習提醒。";

  renderChants();
  showReadMode();
  updateDoneButton();
}

function backHome() {
  document.getElementById("songPage").classList.add("hidden");
  document.querySelector(".app").classList.remove("hidden");
  renderHome();
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

  document.getElementById("doneBtn").textContent =
    done.includes(currentSongIndex)
      ? "✓ 已完成"
      : "✓ 標記完成";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

renderHome();
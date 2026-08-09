const EDITOR_DRAFTS_KEY = "army-ready-lyrics-editor-drafts-v2.2";

const SONG_FILE_META = [
  ["01-hooligan.js", "SONG_HOOLIGAN"],
  ["02-aliens.js", "SONG_ALIENS"],
  ["03-run-bts.js", "SONG_RUN_BTS"],
  ["04-they-dont-know-bout-us.js", "SONG_THEY_DONT_KNOW_BOUT_US"],
  ["05-like-animals.js", "SONG_LIKE_ANIMALS"],
  ["06-fake-love.js", "SONG_FAKE_LOVE"],
  ["07-swim.js", "SONG_SWIM"],
  ["08-merry-go-round.js", "SONG_MERRY_GO_ROUND"],
  ["09-2.0.js", "SONG_2_0"],
  ["10-normal.js", "SONG_NORMAL"],
  ["11-not-today.js", "SONG_NOT_TODAY"],
  ["12-mic-drop.js", "SONG_MIC_DROP"],
  ["13-fya.js", "SONG_FYA"],
  ["14-fire.js", "SONG_FIRE"],
  ["15-body-to-body.js", "SONG_BODY_TO_BODY"],
  ["16-idol.js", "SONG_IDOL"],
  ["17-come-over.js", "SONG_COME_OVER"],
  ["18-butter.js", "SONG_BUTTER"],
  ["19-dynamite.js", "SONG_DYNAMITE"],
  ["20-please.js", "SONG_PLEASE"],
  ["21-one-more-night.js", "SONG_ONE_MORE_NIGHT"],
  ["22-into-the-sun.js", "SONG_INTO_THE_SUN"]
].map(([fileName, constantName], index) => ({ fileName, constantName, index }));

const sourceSongs = JSON.parse(JSON.stringify(SONGS));
let workingSongs = JSON.parse(JSON.stringify(SONGS));
let currentSongIndex = 0;
let saveTimer = null;
let toastTimer = null;

function initLyricsEditor() {
  restoreDrafts();
  populateSongSelect();
  bindEditorEvents();
  loadSong(0);
}

function populateSongSelect() {
  const select = document.getElementById("songSelect");
  select.innerHTML = workingSongs.map((song, index) => `
    <option value="${index}">
      ${String(index + 1).padStart(2, "0")} ${escapeHtml(song.title)}
    </option>
  `).join("");
}

function bindEditorEvents() {
  document.getElementById("songSelect").addEventListener("change", event => {
    loadSong(Number(event.target.value));
  });

  document.getElementById("incompleteOnly").addEventListener("change", renderLines);
  document.getElementById("lineSearch").addEventListener("input", renderLines);
  document.getElementById("copyButton").addEventListener("click", copyCurrentSong);
  document.getElementById("downloadButton").addEventListener("click", downloadCurrentSong);
  document.getElementById("resetButton").addEventListener("click", resetCurrentSong);
  document.getElementById("reloadDataButton").addEventListener("click", () => {
    saveDrafts();
    window.location.reload();
  });

  document.getElementById("lineList").addEventListener("input", event => {
    const input = event.target.closest("[data-field]");
    if (!input) return;

    const lineIndex = Number(input.dataset.lineIndex);
    const field = input.dataset.field;
    const line = getCurrentSong()?.chants?.[lineIndex];
    if (!line || !["roman", "practiceText"].includes(field)) return;

    const value = input.value.trim();
    if (value) line[field] = input.value;
    else delete line[field];

    updateLinePreview(lineIndex);
    updateProgress();
    scheduleDraftSave();
  });
}

function loadSong(index) {
  if (!Number.isInteger(index) || !workingSongs[index]) return;

  currentSongIndex = index;
  const song = getCurrentSong();
  const meta = SONG_FILE_META[index];

  document.getElementById("songSelect").value = String(index);
  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songFileLabel").textContent =
    `js/data/songs/${meta.fileName} · ${meta.constantName}`;
  document.getElementById("lineSearch").value = "";
  document.getElementById("incompleteOnly").checked = false;

  renderLines();
  updateProgress();
  updateSaveStatus();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function getCurrentSong() {
  return workingSongs[currentSongIndex];
}

function hasHangul(value) {
  return /[\uac00-\ud7a3\u3131-\u318e]/.test(value || "");
}

function isRomanComplete(line) {
  return !hasHangul(line.text) || Boolean(line.roman?.trim());
}

function isPracticeComplete(line) {
  if (!hasHangul(line.text)) return true;
  const value = line.practiceText?.trim();
  return Boolean(value && value !== line.text?.trim());
}

function isLineComplete(line) {
  return isRomanComplete(line) && isPracticeComplete(line);
}

function getVisibleLines() {
  const song = getCurrentSong();
  const incompleteOnly = document.getElementById("incompleteOnly").checked;
  const query = document.getElementById("lineSearch").value.trim().toLowerCase();

  return song.chants
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => !incompleteOnly || !isLineComplete(line))
    .filter(({ line }) => {
      if (!query) return true;
      return [line.text, line.roman, line.practiceText]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
}

function renderLines() {
  const root = document.getElementById("lineList");
  const empty = document.getElementById("emptyState");
  const items = getVisibleLines();

  root.innerHTML = items.map(({ line, index }) => createLineMarkup(line, index)).join("");
  empty.classList.toggle("hidden", items.length > 0);
}

function createLineMarkup(line, index) {
  const complete = isLineComplete(line);
  const needsRoman = !isRomanComplete(line);
  const needsPractice = !isPracticeComplete(line);

  return `
    <article class="editor-line ${complete ? "complete" : "incomplete"}" data-line-index="${index}">
      <div class="editor-line-meta">
        <span>${String(index + 1).padStart(3, "0")}</span>
        <span>${escapeHtml(line.time || line.type || "歌詞")}</span>
        ${line.at !== undefined ? `<span>${escapeHtml(line.at)}s</span>` : ""}
        ${line.replaceText ? '<span class="warning">改喊資料</span>' : ""}
        <strong>${complete ? "完成" : "待補"}</strong>
      </div>

      <div class="editor-original">
        <small>韓文原文</small>
        <p>${escapeHtml(line.text || "")}</p>
      </div>

      <div class="editor-fields">
        <label>
          <span>羅馬拼音 ${needsRoman ? '<em>待補</em>' : ""}</span>
          <textarea
            rows="2"
            data-field="roman"
            data-line-index="${index}"
            placeholder="例如：bogo sipda"
          >${escapeHtml(line.roman || "")}</textarea>
        </label>

        <label>
          <span>中文空耳 ${needsPractice ? '<em>待補</em>' : ""}</span>
          <textarea
            rows="2"
            data-field="practiceText"
            data-line-index="${index}"
            placeholder="例如：波勾 西大"
          >${escapeHtml(line.practiceText || "")}</textarea>
        </label>
      </div>

      <div class="editor-preview" id="linePreview-${index}">
        ${createPreviewMarkup(line)}
      </div>
    </article>
  `;
}

function createPreviewMarkup(line) {
  return `
    <small>LYRICS DISPLAY PREVIEW</small>
    <strong>${escapeHtml(line.text || "")}</strong>
    ${line.roman?.trim() ? `<span class="roman">${escapeHtml(line.roman)}</span>` : ""}
    ${line.practiceText?.trim() ? `<span class="practice">${escapeHtml(line.practiceText)}</span>` : ""}
  `;
}

function updateLinePreview(index) {
  const line = getCurrentSong()?.chants?.[index];
  const article = document.querySelector(`[data-line-index="${index}"]`);
  const preview = document.getElementById(`linePreview-${index}`);
  if (!line || !article || !preview) return;

  preview.innerHTML = createPreviewMarkup(line);
  article.classList.toggle("complete", isLineComplete(line));
  article.classList.toggle("incomplete", !isLineComplete(line));

  article.querySelectorAll(".editor-fields label").forEach((label, fieldIndex) => {
    const incomplete = fieldIndex === 0
      ? !isRomanComplete(line)
      : !isPracticeComplete(line);
    label.classList.toggle("needs-value", incomplete);
  });
}

function updateProgress() {
  const koreanLines = getCurrentSong().chants.filter(line => hasHangul(line.text));
  const completeLines = koreanLines.filter(isLineComplete).length;
  const total = koreanLines.length;
  const percent = total ? Math.round((completeLines / total) * 100) : 100;

  document.getElementById("progressText").textContent = `${completeLines} / ${total}`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

function scheduleDraftSave() {
  document.getElementById("saveStatus").textContent = "儲存草稿中…";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveDrafts, 300);
}

function saveDrafts() {
  const drafts = {};

  workingSongs.forEach((song, index) => {
    const draft = createSongDraft(song, sourceSongs[index]);
    if (draft.lines.length) drafts[song.id] = draft;
  });

  localStorage.setItem(EDITOR_DRAFTS_KEY, JSON.stringify(drafts));
  updateSaveStatus();
}

function restoreDrafts() {
  try {
    const drafts = JSON.parse(localStorage.getItem(EDITOR_DRAFTS_KEY) || "{}");

    workingSongs = sourceSongs.map(song => {
      const current = JSON.parse(JSON.stringify(song));
      const draft = drafts[song.id];

      if (!draft) return current;
      if (draft.version === 2 && Array.isArray(draft.lines)) {
        applyDraftLines(current, draft.lines);
      } else if (Array.isArray(draft.chants)) {
        applyLegacyDraft(current, draft);
      }

      return current;
    });

    // 將舊版整首歌曲草稿立即轉成只包含輔助欄位差異的 v2 格式。
    saveDrafts();
  } catch (error) {
    console.warn("Unable to restore Lyrics Editor drafts.", error);
    workingSongs = JSON.parse(JSON.stringify(sourceSongs));
  }
}

function getLineOccurrence(lines, index) {
  const text = lines[index]?.text || "";
  return lines.slice(0, index).filter(line => (line.text || "") === text).length;
}

function findMatchingLineIndex(lines, text, occurrence) {
  let seen = 0;

  return lines.findIndex(line => {
    if ((line.text || "") !== text) return false;
    if (seen === occurrence) return true;
    seen++;
    return false;
  });
}

function createSongDraft(song, source) {
  const lines = [];

  song.chants.forEach((line, index) => {
    const sourceLine = source.chants[index];
    if (!sourceLine || sourceLine.text !== line.text) return;

    const changes = {};
    ["roman", "practiceText"].forEach(field => {
      const currentValue = line[field] ?? null;
      const sourceValue = sourceLine[field] ?? null;
      if (currentValue !== sourceValue) changes[field] = currentValue;
    });

    if (Object.keys(changes).length) {
      lines.push({
        text: line.text || "",
        occurrence: getLineOccurrence(song.chants, index),
        changes
      });
    }
  });

  return { version: 2, lines };
}

function applyDraftLines(song, draftLines) {
  draftLines.forEach(entry => {
    const index = findMatchingLineIndex(song.chants, entry.text, entry.occurrence || 0);
    const line = song.chants[index];
    if (!line || !entry.changes) return;

    ["roman", "practiceText"].forEach(field => {
      if (!(field in entry.changes)) return;
      const value = entry.changes[field];
      if (value === null || value === "") delete line[field];
      else line[field] = value;
    });
  });
}

function applyLegacyDraft(song, legacySong) {
  legacySong.chants.forEach((draftLine, draftIndex) => {
    const occurrence = getLineOccurrence(legacySong.chants, draftIndex);
    const index = findMatchingLineIndex(song.chants, draftLine.text || "", occurrence);
    const line = song.chants[index];
    if (!line) return;

    // 遷移舊草稿時，專案最新版已有的有效資料永遠優先。
    if (!line.roman?.trim() && draftLine.roman?.trim()) {
      line.roman = draftLine.roman;
    }

    const sourceNeedsPractice =
      !line.practiceText?.trim() || line.practiceText.trim() === line.text?.trim();
    const draftHasPractice =
      draftLine.practiceText?.trim() &&
      draftLine.practiceText.trim() !== draftLine.text?.trim();

    if (sourceNeedsPractice && draftHasPractice) {
      line.practiceText = draftLine.practiceText;
    }
  });
}

function updateSaveStatus() {
  const changed = JSON.stringify(getCurrentSong()) !== JSON.stringify(sourceSongs[currentSongIndex]);
  document.getElementById("saveStatus").textContent = changed
    ? "草稿已自動保存"
    : "目前歌曲沒有草稿變更";
}

function serializeCurrentSong() {
  const meta = SONG_FILE_META[currentSongIndex];
  return `const ${meta.constantName} = ${JSON.stringify(getCurrentSong(), null, 2)};\n`;
}

async function copyCurrentSong() {
  try {
    await navigator.clipboard.writeText(serializeCurrentSong());
    showToast("已複製完整歌曲 JS");
  } catch (error) {
    showToast("無法使用剪貼簿，請改用下載");
  }
}

function downloadCurrentSong() {
  const meta = SONG_FILE_META[currentSongIndex];
  const blob = new Blob([serializeCurrentSong()], { type: "text/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = meta.fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`已下載 ${meta.fileName}`);
}

function resetCurrentSong() {
  const song = getCurrentSong();
  if (!window.confirm(`確定捨棄「${song.title}」尚未匯出的 Roman／空耳草稿？`)) return;

  workingSongs[currentSongIndex] = JSON.parse(JSON.stringify(sourceSongs[currentSongIndex]));
  saveDrafts();
  renderLines();
  updateProgress();
  showToast("已恢復目前專案版本");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLyricsEditor);
} else {
  initLyricsEditor();
}

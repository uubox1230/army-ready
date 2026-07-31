/* =====================================================
   song-actions.js — v3.7
   Previous / next song + compatible completion status
===================================================== */

function goPrevSong() {
  const currentIndex = AppState.song.currentIndex;

  if (currentIndex > 0) {
    closeFab();
    openSong(currentIndex - 1);
  }
}

function goNextSong() {
  const currentIndex = AppState.song.currentIndex;

  if (currentIndex < SONGS.length - 1) {
    closeFab();
    openSong(currentIndex + 1);
  }
}

function getCurrentSongDoneKeys() {
  const currentIndex = AppState.song.currentIndex;
  const song = SONGS[currentIndex];

  return [
    String(song?.id ?? ""),
    String(currentIndex)
  ];
}

function isCurrentSongDone(done = getDone()) {
  const doneSet = new Set(done.map(String));

  return getCurrentSongDoneKeys().some(
    key => key && doneSet.has(key)
  );
}

function toggleDone() {
  const currentIndex = AppState.song.currentIndex;
  const song = SONGS[currentIndex];

  if (!song) return;

  const done = getDone();
  const doneSet = new Set(done.map(String));
  const [songId, legacyIndex] = getCurrentSongDoneKeys();

  const isDone =
    doneSet.has(songId) ||
    doneSet.has(legacyIndex);

  if (isDone) {
    doneSet.delete(songId);
    doneSet.delete(legacyIndex);
  } else {
    /*
     * 新資料儲存 song.id。
     * 舊版 index 格式仍保留相容處理。
     */
    doneSet.add(songId);
    doneSet.delete(legacyIndex);
  }

  saveDone([...doneSet]);
  updateDoneButton();

  if (typeof renderSetlistSheet === "function") {
    renderSetlistSheet();
  }
}

function updateDoneButton() {
  const doneBtn = document.getElementById("doneBtn");

  if (!doneBtn) return;

  const isDone = isCurrentSongDone();

  doneBtn.textContent =
    isDone ? "已完成" : "未練習";

  doneBtn.classList.toggle("active", isDone);
  doneBtn.setAttribute("aria-pressed", String(isDone));

  doneBtn.setAttribute(
    "aria-label",
    isDone
      ? "取消已完成狀態"
      : "標記為已完成"
  );
}
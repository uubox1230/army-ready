/* =====================================================
   navigation.js
   -----------------------------------------------------

   Purpose
   - 頁面切換
   - Song Navigation
   - Browser History

   Dependencies
   - songs.js
   - storage.js
   - utils.js
   - fab.js
   - platform.js
   - app.js

   Exports
   - openSong()
   - backHome()
   - restorePageFromHash()

===================================================== */

function backHome() {
  closeFab();
  closeHomeFab();

  if (window.location.pathname.endsWith("song.html")) {
    location.href = "setlist.html";
    return;
  }

  history.pushState(null, "", window.location.pathname);

  document.getElementById("songPage")?.classList.add("hidden");
  document.querySelector(".app")?.classList.remove("hidden");

  renderHome();
  window.scrollTo(0, 0);
}

function restorePageFromHash() {

  const hash = window.location.hash.replace("#", "");

  if (hash) {

    const index = SONGS.findIndex(song => song.id === hash);

    if (index >= 0) {

      location.href = `song.html#${hash}`;
      return;

    }

  }

  document.getElementById("songPage")?.classList.add("hidden");
  document.querySelector(".app")?.classList.remove("hidden");

  renderHome();
  scrollToTopSafe();

}

window.addEventListener("popstate", () => {
  restorePageFromHash();
});

function openSong(index, options = {}) {
  const isSongPage =
    window.location.pathname.endsWith("song.html");

  /*
   * openSong() 可能從 Dashboard、Setlist、
   * 上一首／下一首及 Last Practice 呼叫。
   * 先將數字字串轉成 number，再確認是否合法。
   */
  const safeIndex = Number(index);

  const isValidIndex =
    Array.isArray(SONGS) &&
    Number.isInteger(safeIndex) &&
    safeIndex >= 0 &&
    safeIndex < SONGS.length;

  if (!isValidIndex) {
    console.warn("[Navigation] 無效的歌曲 index：", index);

    if (isSongPage) {
      location.href = "setlist.html";
    }

    return false;
  }

  const song = SONGS[safeIndex];

  if (!song || typeof song !== "object" || !song.id) {
    console.warn("[Navigation] 找不到有效的歌曲資料：", safeIndex);

    if (isSongPage) {
      location.href = "setlist.html";
    }

    return false;
  }

  closeHomeFab();
  closeFab();

  if (typeof closeSetlistSheet === "function") {
    closeSetlistSheet();
  }

  /*
   * 切換歌曲前停止上一首的 Karaoke Timer，
   * 避免舊歌曲仍在背景計時。
   */
  if (typeof pauseKaraoke === "function") {
    pauseKaraoke();
  }

  const currentAudio =
    document.getElementById("songCueAudio");

  if (currentAudio) {
    currentAudio.pause();
  }

  AppState.song.currentIndex = safeIndex;

  /*
   * 從首頁或 Setlist 進入歌曲時，
   * 直接跳到獨立的 song.html。
   */
  if (!isSongPage) {
    location.href =
      `song.html#${encodeURIComponent(song.id)}`;

    return true;
  }

  /*
   * 已經位於歌曲頁時才更新網址與內容。
   * 首次載入相同 hash 時使用 replaceState，
   * 避免瀏覽紀錄產生重複項目。
   */
  const nextHash = `#${song.id}`;

  if (window.location.hash === nextHash) {
    history.replaceState(
      { page: "song", index: safeIndex },
      "",
      nextHash
    );
  } else {
    history.pushState(
      { page: "song", index: safeIndex },
      "",
      nextHash
    );
  }

  const songPage =
    document.getElementById("songPage");

  songPage?.classList.remove("hidden");

  const titleEl =
    document.getElementById("songTitle");

  const noteEl =
    document.getElementById("songNote");

  if (titleEl) {
    titleEl.textContent = song.title || "未命名歌曲";
  }

  if (noteEl) {
    noteEl.textContent =
      song.note || "官方 Fan Chant + 現場練習提醒。";
  }

  if (typeof updateSongCue === "function") {
    updateSongCue(song);
  }

  if (typeof updatePlatforms === "function") {
    updatePlatforms(song);
  }

  if (typeof renderChants === "function") {
    renderChants();
  }

  if (typeof showReadMode === "function") {
    showReadMode();
  }

  if (typeof updateDoneButton === "function") {
    updateDoneButton();
  }

  saveLastPractice(
    safeIndex,
    options.mode || "read"
  );

  if (
    options.mode === "karaoke" &&
    typeof startPractice === "function"
  ) {
    setTimeout(() => {
      /*
       * 延遲期間如果使用者已切換到其他歌曲，
       * 就不要啟動舊歌曲的 Karaoke。
       */
      if (AppState.song.currentIndex === safeIndex) {
        startPractice();
      }
    }, 80);
  }

  scrollToTopSafe();

  return true;
}
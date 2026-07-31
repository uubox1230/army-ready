/* =====================================================
   fab.js
   -----------------------------------------------------

   Purpose
   - Home Floating Action Button
   - Song Floating Action Button
   - Close menus when clicking outside

   Exports
   - toggleHomeFab()
   - closeHomeFab()
   - toggleFab()
   - closeFab()

===================================================== */

/* =========================
   Home FAB
========================= */

function closeHomeFab() {
  const fab = document.getElementById("homeFabMenu");
  const fabMain = document.querySelector("#homeFabMenu .fab-main");

  if (!fab || !fabMain) return;

  fab.classList.remove("open");
  fabMain.textContent = "＋";
}

function toggleHomeFab() {
  const fab = document.getElementById("homeFabMenu");
  const fabMain = document.querySelector("#homeFabMenu .fab-main");

  if (!fab || !fabMain) return;

  const isOpen = fab.classList.toggle("open");
  fabMain.textContent = isOpen ? "×" : "＋";
}

/* =========================
   Song FAB
========================= */

function closeFab() {
  const fab = document.getElementById("fabMenu");
  const fabMain = document.querySelector("#fabMenu .fab-main");

  if (!fab || !fabMain) return;

  fab.classList.remove("open");
  fabMain.textContent = "☰";
}

function toggleFab() {
  const fab = document.getElementById("fabMenu");
  const fabMain = document.querySelector("#fabMenu .fab-main");

  if (!fab || !fabMain) return;

  const isOpen = fab.classList.toggle("open");
  fabMain.textContent = isOpen ? "✕" : "☰";
}

/* =========================
   Outside Click
========================= */

function handleFabOutsideClick(event) {
  const homeFab = document.getElementById("homeFabMenu");
  const songFab = document.getElementById("fabMenu");
  const platformSection = document.getElementById("platformSection");

  if (homeFab && !homeFab.contains(event.target)) {
    closeHomeFab();
  }

  if (songFab && !songFab.contains(event.target)) {
    closeFab();
  }

  /*
   * 點擊播放器區塊時不要收起，
   * 避免使用者操作 iframe 或平台按鈕時被中斷。
   */
  if (platformSection?.contains(event.target)) {
    return;
  }

  /*
   * setlist.html 並沒有載入 platform.js，
   * 因此必須先確認函式存在，避免點擊頁面時出現 ReferenceError。
   */
  if (typeof closePlatformContent === "function") {
    closePlatformContent();
  }
}

document.addEventListener("click", handleFabOutsideClick);
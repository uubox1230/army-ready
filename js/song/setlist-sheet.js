/* =====================================================
   setlist-sheet.js — v3.7
   Reliable song-page Setlist bottom sheet
===================================================== */

function getSetlistSheetElements() {
  return {
    overlay: document.getElementById("setlistOverlay"),
    sheet: document.getElementById("setlistSheet"),
    list: document.getElementById("setlistSheetList")
  };
}

function ensureSetlistSheetAtBodyLevel() {
  const { overlay, sheet } = getSetlistSheetElements();
  if (!overlay || !sheet || !document.body) return false;

  /* A fixed element can be clipped or positioned incorrectly when it lives
     inside a transformed / overflowed ancestor. Moving it to body avoids that. */
  if (overlay.parentElement !== document.body) {
    document.body.appendChild(overlay);
  }
  if (sheet.parentElement !== document.body) {
    document.body.appendChild(sheet);
  }

  return true;
}

function isSongDone(song, index, doneSet) {
  return doneSet.has(String(song.id)) || doneSet.has(String(index));
}

function renderSetlistSheet() {
  const { list } = getSetlistSheetElements();
  if (!list || !Array.isArray(window.SONGS || SONGS)) return;

  const doneSet = new Set(getDone().map(String));
  list.innerHTML = "";

  SONGS.forEach((song, index) => {
    const button = document.createElement("button");
    const current =
      index === AppState.song.currentIndex;
    const done = isSongDone(song, index, doneSet);

    button.type = "button";
    button.className = `setlist-sheet-item${current ? " active" : ""}${done ? " is-done" : " is-unpracticed"}`;
    button.dataset.index = String(index);
    button.setAttribute("aria-current", current ? "true" : "false");

    const number = document.createElement("span");
    number.className = "setlist-sheet-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("span");
    title.className = "setlist-sheet-title";
    title.textContent = song.title;

    const status = document.createElement("span");
    status.className = "setlist-sheet-status";
    status.textContent = current ? "目前歌曲" : done ? "✓ 已完成" : "○ 未練習";

    button.append(number, title, status);
    button.addEventListener("click", () => {
      closeSetlistSheet();
      openSong(index);
    });

    list.appendChild(button);
  });
}

function centerActiveSetlistItem() {
  const { list } = getSetlistSheetElements();
  const active = list?.querySelector(".setlist-sheet-item.active");
  if (!list || !active) return;

  const target =
    active.offsetTop - list.clientHeight / 2 + active.clientHeight / 2;

  list.scrollTop = Math.max(0, target);
}

function openSetlistSheet() {
  if (!ensureSetlistSheetAtBodyLevel()) return;

  const { overlay, sheet } = getSetlistSheetElements();
  renderSetlistSheet();

  overlay.classList.remove("hidden");
  sheet.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("sheet-open");

  requestAnimationFrame(centerActiveSetlistItem);
}

function closeSetlistSheet() {
  const { overlay, sheet } = getSetlistSheetElements();
  overlay?.classList.add("hidden");
  sheet?.classList.add("hidden");
  overlay?.setAttribute("aria-hidden", "true");
  sheet?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("sheet-open");
}

function toggleSetlistSheet(event) {
  event?.preventDefault?.();
  event?.stopPropagation?.();

  const { sheet } = getSetlistSheetElements();
  if (!sheet) return;

  if (sheet.classList.contains("hidden")) {
    openSetlistSheet();
  } else {
    closeSetlistSheet();
  }
}

function initSetlistSheet() {
  if (!ensureSetlistSheetAtBodyLevel()) return;

  const { overlay, sheet } = getSetlistSheetElements();
  overlay?.addEventListener("click", closeSetlistSheet);

  sheet?.addEventListener("click", event => {
    event.stopPropagation();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeSetlistSheet();
  });

  /* song.html already calls toggleSetlistSheet() through its inline onclick.
     Do not attach a second click listener here: two toggle calls in the same
     click would open and immediately close the sheet, which looks like the
     button does nothing. Bind only when no inline handler exists. */
  const setlistButton = document.querySelector(
    ".song-bottom-bar button:nth-child(2)"
  );

  if (
    setlistButton &&
    !setlistButton.getAttribute("onclick") &&
    !setlistButton.dataset.sheetBound
  ) {
    setlistButton.dataset.sheetBound = "true";
    setlistButton.addEventListener("click", toggleSetlistSheet);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSetlistSheet, { once: true });
} else {
  initSetlistSheet();
}

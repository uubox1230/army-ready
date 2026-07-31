/* =====================================================
   karaoke.js
   -----------------------------------------------------

   Purpose
   - Karaoke Player
   - Practice Mode
   - Timeline
   - Stable lyric centering
===================================================== */

/* =========================
   State
========================= */

let karaokeLines = [];
let karaokeElements = [];

let karaokeIndex = -1;
let karaokeTimer = null;
let karaokeStartTime = 0;
let karaokeElapsed = 0;
let isKaraokeRunning = false;
let karaokeBuilt = false;

let karaokeScrollBound = false;
let karaokeProgrammaticScroll = false;
let karaokeProgrammaticScrollTimer = null;

/* =========================
   Element helpers
========================= */

function getKaraokeWrap() {
  return document.getElementById("karaokeLyrics");
}

function getKaraokeElement(index) {
  return karaokeElements.find(
    element =>
      Number(element.dataset.index) === index
  );
}

/* =========================
   Mode controls
========================= */

function startPractice() {
  pauseKaraoke();
  buildKaraokeCache();

  document.getElementById("readMode")?.classList.add("hidden");
  document.getElementById("practiceMode")?.classList.remove("hidden");
  document.body.classList.add("karaoke-lock");

  karaokeIndex = -1;
  karaokeElapsed = 0;
  isKaraokeRunning = false;
  karaokeBuilt = false;

  const startBtn = document.getElementById("karaokeStartBtn");
  if (startBtn) {
    startBtn.textContent = "▶ 同步開始";
  }

  buildKaraoke();
  activateKaraokeLine(-1, "auto");
  updateKaraokeClock();
  updateModeButtons("practice");
  saveLastPractice(AppState.song.currentIndex, "karaoke");

  const practiceMode = document.getElementById("practiceMode");

  if (practiceMode) {
    const top =
      practiceMode.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top,
      behavior: "auto"
    });
  }

  /*
   * 外層頁面定位完成後，再把 Intro 精準置中。
   * 兩層捲動分開執行，避免手機瀏覽器互相干擾。
   */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const intro = getKaraokeElement(-1);
      scrollKaraokeToCenter(intro, "auto");
    });
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

  if (startBtn) {
    startBtn.textContent = "Ⅱ 暫停";
  }
}

function pauseKaraoke() {
  isKaraokeRunning = false;
  clearInterval(karaokeTimer);

  const startBtn = document.getElementById("karaokeStartBtn");

  if (startBtn) {
    startBtn.textContent = "▶ 繼續同步";
  }
}

function restartKaraoke() {
  karaokeElapsed = 0;
  activateKaraokeLine(-1, "auto");
  updateKaraokeClock();
  startKaraoke();
}

/* =========================
   Build lyrics
========================= */

function buildKaraoke() {
  const wrap = getKaraokeWrap();
  if (!wrap) return;

  const lines = getKaraokeLines();

  wrap.innerHTML = "";

  wrap.appendChild(
    createKaraokeLine(
      {
        text: "(...)",
        type: "intro"
      },
      -1
    )
  );

  lines.forEach((line, index) => {
    wrap.appendChild(
      createKaraokeLine(line, index)
    );
  });

  karaokeElements = [
    ...wrap.querySelectorAll(".karaoke-line")
  ];

  karaokeBuilt = true;
  bindKaraokeScrollState();
}

function createKaraokeLine(line, index) {
  const button = document.createElement("button");

  button.type = "button";
  button.className =
    `karaoke-line future ${line.type || "lyrics"}`;

  button.dataset.index = String(index);
  button.tabIndex = -1;

  /*
   * 阻止按鈕取得焦點後，由瀏覽器擅自捲動外層頁面。
   */
  const preventFocusScroll = event => {
    event.preventDefault();
  };

  button.addEventListener(
    "pointerdown",
    preventFocusScroll,
    { passive: false }
  );

  button.addEventListener(
    "mousedown",
    preventFocusScroll,
    { passive: false }
  );

  button.addEventListener(
    "touchstart",
    preventFocusScroll,
    { passive: false }
  );

  button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    /*
     * 使用者主動點擊歌詞時，一律置中。
     * 不沿用任何之前的手動捲動位置。
     */
    jumpKaraokeTo(index, "smooth");
  });

  button.innerHTML = renderKaraokeText(line);

  return button;
}

/* =========================
   Active line
========================= */

function activateKaraokeLine(
  index,
  behavior = "smooth"
) {
  if (!karaokeBuilt) return;

  const wrap = getKaraokeWrap();
  if (!wrap) return;

  const allLines =
    wrap.querySelectorAll(".karaoke-line");

  allLines.forEach(element => {
    element.classList.remove(
      "active",
      "past",
      "future"
    );
  });

  karaokeIndex = index;

  allLines.forEach(element => {
    const lineIndex =
      Number(element.dataset.index);

    if (lineIndex < index) {
      element.classList.add("past");
    } else if (lineIndex === index) {
      element.classList.add("active");
    } else {
      element.classList.add("future");
    }
  });

  const active = getKaraokeElement(index);

  if (active) {
    scrollKaraokeToCenter(active, behavior);
  }
}

/* =========================
   Scroll control
========================= */

function bindKaraokeScrollState() {
  const wrap = getKaraokeWrap();

  if (!wrap || karaokeScrollBound) return;

  karaokeScrollBound = true;

  /*
   * 不再儲存 active lyric 的偏移量。
   * 使用者可以自由滑動，但下一次點擊或時間軸換句時，
   * 仍會重新將 active lyric 放回可視區中央。
   */
  wrap.addEventListener(
    "scroll",
    () => {
      if (karaokeProgrammaticScroll) return;
    },
    { passive: true }
  );
}

function getCenteredScrollTop(wrap, active) {
  const wrapRect = wrap.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();

  /*
   * 使用目前 scrollTop 加上兩個矩形之間的距離計算，
   * 不依賴 offsetParent，避免 CSS contain、flex 或 padding
   * 改變後把歌詞定位到頂端。
   */
  const activeCenterInViewport =
    activeRect.top -
    wrapRect.top +
    activeRect.height / 2;

  const viewportCenter =
    wrap.clientHeight / 2;

  const rawTarget =
    wrap.scrollTop +
    activeCenterInViewport -
    viewportCenter;

  const maxScroll =
    Math.max(0, wrap.scrollHeight - wrap.clientHeight);

  return Math.min(
    maxScroll,
    Math.max(0, rawTarget)
  );
}

function scrollKaraokeToCenter(
  active,
  behavior = "smooth"
) {
  const wrap = getKaraokeWrap();

  if (!wrap || !active) return;

  karaokeProgrammaticScroll = true;
  clearTimeout(karaokeProgrammaticScrollTimer);

  const target =
    getCenteredScrollTop(wrap, active);

  wrap.scrollTo({
    top: target,
    behavior
  });

  karaokeProgrammaticScrollTimer =
    setTimeout(
      () => {
        karaokeProgrammaticScroll = false;
      },
      behavior === "smooth" ? 500 : 80
    );
}

/* =========================
   Timeline jumping
========================= */

function jumpKaraokeTo(
  index,
  behavior = "smooth"
) {
  const lines = getKaraokeLines();

  if (index < 0) {
    karaokeElapsed = 0;

    if (isKaraokeRunning) {
      karaokeStartTime = performance.now();
    }

    activateKaraokeLine(-1, behavior);
    updateKaraokeClock();
    return;
  }

  const line = lines[index];
  if (!line) return;

  karaokeElapsed = Number(line.at);

  if (isKaraokeRunning) {
    karaokeStartTime =
      performance.now() -
      karaokeElapsed * 1000;
  }

  activateKaraokeLine(index, behavior);
  updateKaraokeClock();
}

/* =========================
   Song data
========================= */

function buildKaraokeCache() {
  const song = SONGS[AppState.song.currentIndex];

  if (!song) {
    karaokeLines = [];
    return;
  }

  karaokeLines =
    song.practiceLines ||
    song.chants.filter(line =>
      line.at !== undefined &&
      line.at !== null
    );
}

function getKaraokeLines() {
  return karaokeLines;
}

/* =========================
   Playback updates
========================= */

function updateKaraokeIndex() {
  const lines = getKaraokeLines();
  if (!lines.length) return;

  let activeIndex = -1;

  for (let index = 0; index < lines.length; index += 1) {
    if (
      karaokeElapsed >= Number(lines[index].at)
    ) {
      activeIndex = index;
    } else {
      break;
    }
  }

  if (activeIndex !== karaokeIndex) {
    activateKaraokeLine(
      activeIndex,
      "smooth"
    );
  }

  updateKaraokeClock();

  const lastIndex = lines.length - 1;
  const lastAt =
    Number(lines[lastIndex]?.at || 0);

  if (
    karaokeIndex === lastIndex &&
    karaokeElapsed >= lastAt
  ) {
    pauseKaraoke();

    const startBtn =
      document.getElementById("karaokeStartBtn");

    if (startBtn) {
      startBtn.textContent = "↺ 重新開始";
    }
  }
}

/* =========================
   Clock
========================= */

function updateKaraokeClock() {
  const lines = getKaraokeLines();
  const last =
    Number(lines[lines.length - 1]?.at || 0);

  const displayTime =
    Math.min(karaokeElapsed, last);

  const counter =
    document.getElementById("practiceCounter");

  if (counter) {
    counter.textContent =
      `${formatKaraokeTime(displayTime)} / ` +
      `${formatKaraokeTime(last)}`;
  }
}

function formatKaraokeTime(seconds) {
  const safeSeconds =
    Math.max(0, Number(seconds) || 0);

  const minutes =
    Math.floor(safeSeconds / 60);

  const secondsPart =
    Math.floor(safeSeconds % 60);

  return (
    `${minutes}:` +
    String(secondsPart).padStart(2, "0")
  );
}

/* =========================
   Text rendering
========================= */

function renderKaraokeText(line) {
  if (!line) return "";

  if (line.replaceText) {
    return renderHighlight(line);
  }

  const text =
    line.text ||
    line.practiceText ||
    "";

  if (
    !line.highlight &&
    line.type !== "lyrics"
  ) {
    return (
      `<span class="karaoke-highlight ` +
      `${line.type || ""}">` +
      `${escapeHtml(text)}</span>`
    );
  }

  const highlights =
    Array.isArray(line.highlight)
      ? line.highlight
      : [line.highlight || line.practiceText];

  let safeText = escapeHtml(text);

  highlights.forEach(highlight => {
    if (!highlight) return;

    const safeHighlight =
      escapeHtml(highlight);

    if (highlight === text) {
      safeText =
        `<span class="karaoke-highlight ` +
        `${line.type || ""}">` +
        `${safeText}</span>`;

      return;
    }

    safeText = safeText.replace(
      safeHighlight,
      `<span class="karaoke-highlight ` +
      `${line.type || ""}">` +
      `${safeHighlight}</span>`
    );
  });

  return safeText;
}
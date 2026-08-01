function getHeroState() {
  const phase = getConcertPhase();

  if (phase === "concertDay") {
    return {
      eyebrow: "TODAY",
      title: DASHBOARD.concert.tour,
      tagline: "Enjoy The Show."
    };
  }

  if (phase === "finished") {
    return {
      eyebrow: "THANK YOU",
      title: "See You Again",
      tagline: "Until the next magic shop."
    };
  }

  if (phase === "finalWeek") {
    return {
      eyebrow: "FINAL WEEK",
      title: DASHBOARD.concert.tour,
      tagline: "Almost Ready."
    };
  }

  return {
    eyebrow: "ARMY READY",
    title: DASHBOARD.concert.tour,
    tagline: ""
  };
}

function createPlaceholderCard(title) {
  const section = document.createElement("section");
  section.className = "dashboard-card";

  section.innerHTML = `
    <p class="card-label">${title}</p>
    <h2>Coming Soon</h2>
  `;

  return section;
}

function createHeroCard() {
  const state = getHeroState();
  const phase = getConcertPhase();

  const section = document.createElement("section");
  section.className = "dashboard-hero";

  section.innerHTML = `
    <div
      class="hero-bg"
      style="background-image:url('${DASHBOARD.concert.banner}')"
      aria-label="${DASHBOARD.concert.tour}"
    ></div>

    <div class="hero-gradient"></div>

    <div class="hero-content">
      <div class="hero-info">
        <p class="hero-eyebrow">${state.eyebrow}</p>
        <h1>${state.title}</h1>
        <p class="hero-city">${DASHBOARD.concert.city}</p>
        <p class="hero-venue">${DASHBOARD.concert.venue}</p>
      </div>

      <div class="hero-countdown-v2 ${phase === "finished" ? "hidden" : ""}">
        <div class="countdown-main">
          <strong id="countdownDays">--</strong>
          <span>Days</span>
        </div>

        <div class="countdown-sub">
          <span><b id="countdownHours">--</b> Hours</span>
          <span><b id="countdownMinutes">--</b> Minutes</span>
        </div>
      </div>
    </div>
  `;

  return section;
}

function getDashboardStorageArray(keys) {
  for (const key of keys) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      if (Array.isArray(value)) return value;
    } catch (error) {
      console.warn(`Unable to read ${key}`, error);
    }
  }

  return [];
}

function getSavedFanEventsCount() {
  return getDashboardStorageArray([
    "armyReadyFavoriteEvents",
    "armyReadySavedEvents",
    "favoriteFanEvents",
    "savedFanEvents"
  ]).length;
}

function getNewNoticesCount() {
  const notices = DASHBOARD.updates?.items || [];
  return notices.filter(item => item.type === "official").length;
}

function formatConcertCardDate(dateValue) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return {
      date: "--.--",
      weekday: "---"
    };
  }

  const dateLabel = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit"
  }).format(date);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short"
  }).format(date).toUpperCase();

  return {
    date: dateLabel,
    weekday
  };
}

function createMyConcertCard() {
  const settings = DASHBOARD.myConcert;
  const firstShow = DASHBOARD.concert.dates[0];
  const formattedDate = formatConcertCardDate(firstShow);
  const done = getDone();
  const last = getLastPractice();
  const savedEvents = getSavedFanEventsCount();
  const newNotices = getNewNoticesCount();

  const hasLastPractice = Boolean(last && SONGS[last.index]);
  const actionLabel = hasLastPractice
    ? settings.continueLabel
    : settings.startLabel;

  const section = document.createElement("section");
  section.className = "dashboard-card my-concert-card";

  section.innerHTML = `
    <div class="my-concert-top">
      <div>
        <p class="card-label">${settings.title}</p>
        <div class="my-concert-date">
          <strong>${formattedDate.date}</strong>
          <span>${formattedDate.weekday}</span>
        </div>
      </div>

      <span class="card-chip">${DASHBOARD.concert.city}</span>
    </div>

    <h2>${DASHBOARD.concert.venue}</h2>

    <div class="my-concert-stats">
      <div class="my-concert-stat">
        <span>${settings.practiceLabel}</span>
        <strong>${done.length} / ${SONGS.length}</strong>
      </div>

      <div class="my-concert-stat">
        <span>${settings.eventsLabel}</span>
        <strong>${savedEvents}</strong>
      </div>

      <div class="my-concert-stat">
        <span>${settings.noticesLabel}</span>
        <strong>${newNotices}</strong>
      </div>
    </div>

    <button class="my-concert-action" type="button">
      <span>${actionLabel}</span>
      <span>›</span>
    </button>
  `;

  section
    .querySelector(".my-concert-action")
    ?.addEventListener("click", () => {
      if (hasLastPractice) {
        continuePractice();
        return;
      }

      openSong(0);
    });

  return section;
}

function createQuickAccessCard() {
  const quickAccess = DASHBOARD.quickAccess;
  const section = document.createElement("section");
  section.className = "dashboard-card quick-access-card";

  section.innerHTML = `
    <p class="card-label">${quickAccess.title}</p>

    <div class="quick-access-grid">
      ${quickAccess.items.map(item => `
        <a class="quick-access-item" href="${item.href}">
          <span class="quick-access-icon" aria-hidden="true">
            <i data-lucide="${item.icon}"></i>
          </span>

          <span class="quick-access-copy">
            <strong>${item.label}</strong>
            <small>${item.title}</small>
          </span>

          <span class="quick-access-arrow">›</span>
        </a>
      `).join("")}
    </div>
  `;

  return section;
}

function formatUpdateDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00+08:00`);

  if (Number.isNaN(date.getTime())) return dateValue;

  return new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric"
  }).format(date);
}

function createLatestUpdatesCard() {
  const updates = DASHBOARD.updates;
  const items = Array.isArray(updates.items)
    ? updates.items.slice(0, 4)
    : [];

  const section = document.createElement("section");
  section.className = "dashboard-card latest-updates-card";

  section.innerHTML = `
    <p class="card-label">${updates.title}</p>

    <div class="latest-updates-list">
      ${items.length
        ? items.map(item => `
          <a class="latest-update-item" href="${item.href}">
            <span class="latest-update-icon" aria-hidden="true">
              <i data-lucide="${item.icon}"></i>
            </span>

            <span class="latest-update-copy">
              <small>${item.label} · ${formatUpdateDate(item.date)}</small>
              <strong>${item.title}</strong>
            </span>

            <span class="latest-update-arrow">›</span>
          </a>
        `).join("")
        : `
          <p class="latest-updates-empty">${updates.emptyText}</p>
        `}
    </div>
  `;

  return section;
}

function createContinueCard() {
  const last = getLastPractice();

  if (!last || !SONGS[last.index]) {
    const empty = document.createElement("div");
    empty.className = "hidden";
    return empty;
  }

  const song = SONGS[last.index];
  const modeLabel = last.mode === "karaoke" ? "Karaoke" : "Lyrics";

  const section = document.createElement("section");
  section.className = "dashboard-card continue-card";
  section.onclick = () => continuePractice();

  section.innerHTML = `
    <div class="continue-card-top">
      <p class="card-label">Continue Practice</p>
      <span class="card-chip">${modeLabel}</span>
    </div>

    <h2>${song.title}</h2>

    <p class="continue-meta">${formatLastPracticeTime(last.updatedAt)}</p>

    <div class="continue-card-action">
      <span>繼續練習</span>
      <span>›</span>
    </div>
  `;

  return section;
}

function getTodayFocus() {
  const phase = getConcertPhase();
  const last = getLastPractice();

  if (phase === "concertDay") {
    return {
      label: "TODAY'S FOCUS",
      chip: "Start",
      title: "從第一首開始",
      body: `${SONGS[0]?.title || "第一首歌"} 的應援先熟悉起來，之後再慢慢補完 Setlist。`,
      action: "開始練習",
      onClick: () => openSong(0)
    };
  }

  if (phase === "finalWeek") {
    return {
      label: "TODAY'S FOCUS",
      chip: "Final Check",
      title: "阿米棒更新",
      body: "最後一週先確認版本、電量與現場設定。",
      action: "查看提醒",
      onClick: () => {
        document.querySelector(".checklist-card")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
  }

  if (last && SONGS[last.index]) {
    return {
      label: "TODAY'S FOCUS",
      chip: last.mode === "karaoke" ? "Karaoke" : "Practice",
      title: SONGS[last.index].title,
      body: "接著上次的進度繼續練習。",
      action: "繼續練習",
      onClick: () => continuePractice()
    };
  }

  return {
    label: "TODAY'S FOCUS",
    chip: "Start",
    title: SONGS[0]?.title || "開始練習",
    body: "第一次進來可以先從第一首開始熟悉應援。",
    action: "開始練習",
    onClick: () => openSong(0)
  };
}

function createFocusCard() {
  const focus = getTodayFocus();

  const section = document.createElement("section");
  section.className = "dashboard-card today-card";
  section.onclick = focus.onClick;

  section.innerHTML = `
    <div class="today-card-top">
      <p class="card-label">${focus.label}</p>
      <span class="card-chip">${focus.chip}</span>
    </div>

    <h2>${focus.title}</h2>

    <p class="today-card-body">${focus.body}</p>

    <div class="today-card-action">
      <span>${focus.action}</span>
      <span>›</span>
    </div>
  `;

  return section;
}

function createProgressCard() {
  const done = getDone();
  const percent = SONGS.length
    ? Math.round((done.length / SONGS.length) * 100)
    : 0;

  const message =
    percent >= 100 ? "꙳⸌♡⸍꙳ 準備征服現場 ꙳⸌♡⸍꙳" :
    percent >= 80 ? "快要練習完了！(ง๑ •̀_•́)ง" :
    percent >= 50 ? "練習一半了，加油！" :
    percent >= 20 ? "衝啊！你可以的！( ੭˙ᗜ˙)੭" :
    "開始練習叭 (๑˃ᴗ˂๑) ";

  const section = document.createElement("section");
  section.className = "dashboard-card progress-card-v2";

  section.innerHTML = `
    <div>
      <p class="card-label">ARMY Ready</p>
      <h2>${message}</h2>
      <p id="progressText">${done.length} / ${SONGS.length} Songs</p>
    </div>

    <div class="progress-ring" style="--progress:${percent}%">
      <span>${percent}%</span>
    </div>
  `;

  return section;
}

function createSongsCard() {
  const done = getDone();

  const section = document.createElement("section");
  section.className = "dashboard-card setlist-entry-card";
  section.onclick = () => {
    location.href = "setlist.html";
  };

  section.innerHTML = `
    <div class="setlist-entry-top">
      <p class="card-label">Practice Library</p>
      <span class="card-chip">${done.length} / ${SONGS.length}</span>
    </div>

    <h2>完整 Setlist</h2>

    <p class="setlist-entry-body">
      查看全部歌曲、練習狀態與應援內容。
    </p>

    <div class="setlist-entry-action">
      <span>查看完整 Setlist</span>
      <span>›</span>
    </div>
  `;

  return section;
}

function createVenueCard() {
  const venue = DASHBOARD.venue;

  const section = document.createElement("section");
  section.className = "dashboard-card venue-card";

  section.innerHTML = `
    <div class="venue-card-top">
      <p class="card-label">${venue.title}</p>
      <span class="venue-badge">Map</span>
    </div>

    <h2>${venue.name}</h2>
    <p class="venue-subtitle">${venue.subtitle}</p>

    <div class="venue-list">
      ${venue.items.map(item => `<span>${item}</span>`).join("")}
    </div>

    <a class="venue-card-action" href="${venue.mapUrl}" target="_blank" rel="noopener">
      <span>開啟地圖</span>
      <span>›</span>
    </a>
  `;

  return section;
}

function createNoticeCard() {
  const notice = DASHBOARD.notice;

  const section = document.createElement("section");
  section.className = "dashboard-card notice-card";

  section.innerHTML = `
    <div class="notice-card-top">
      <p class="card-label">${notice.title}</p>
      <span class="notice-badge">Latest</span>
    </div>

    <h2>${notice.headline}</h2>

    <p class="card-desc">${notice.body}</p>

    <div class="notice-card-action">
      <span>查看公告</span>
      <span>›</span>
    </div>
  `;

  return section;
}

function createEventsCard() {
  const events = DASHBOARD.events;

  const section = document.createElement("section");
  section.className = "dashboard-card events-card";

  section.innerHTML = `
    <div class="events-card-top">
      <p class="card-label">${events.title}</p>
      <span class="events-badge">ARMY</span>
    </div>

    <h2>${events.headline}</h2>

    <p class="card-desc">${events.body}</p>

    <div class="events-card-action">
      <span>查看應援活動</span>
      <span>›</span>
    </div>
  `;

  return section;
}

function createRecapCard() {
  const recap = DASHBOARD.recap;

  const section = document.createElement("section");
  section.className = "dashboard-card recap-card";

  section.innerHTML = `
    <p class="card-label">${recap.title}</p>
    <h2>${recap.headline}</h2>
    <p class="card-desc">${recap.body}</p>

    <div class="recap-list">
      ${recap.items.map(item => `<span>${item}</span>`).join("")}
    </div>
  `;

  return section;
}

function createChecklistCard() {
  const done = getChecklistDone();

  const section = document.createElement("section");
  section.className = "dashboard-card checklist-card";

  section.innerHTML = `
    <p class="card-label">Final Week Checklist</p>
    <h2>今天要完成</h2>

    <div class="checklist-list">
      ${DASHBOARD.checklist.map(item => `
        <button
          type="button"
          class="checklist-item ${done.includes(item.id) ? "done" : ""}"
          onclick="toggleChecklistItem('${item.id}')"
        >
          <span>${done.includes(item.id) ? "☑" : "☐"}</span>
          <strong>${item.text}</strong>
        </button>
      `).join("")}
    </div>
  `;

  return section;
}

function updateDashboardCountdown() {
  const target = getConcertStartDate();
  const now = new Date();
  const diff = Math.max(0, target - now);

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const daysElement = document.getElementById("countdownDays");
  const hoursElement = document.getElementById("countdownHours");
  const minutesElement = document.getElementById("countdownMinutes");

  if (daysElement) daysElement.textContent = days;
  if (hoursElement) hoursElement.textContent = hours;
  if (minutesElement) minutesElement.textContent = minutes;
}
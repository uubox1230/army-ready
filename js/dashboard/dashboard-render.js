function renderHome() {
  renderDashboard();
}

function renderDashboard() {
  const root = document.getElementById("dashboardRoot");
  if (!root) return;

  root.innerHTML = "";

  getDashboardCards().forEach(cardType => {
    if (cardType === "hero") root.appendChild(createHeroCard());
    if (cardType === "myConcert") root.appendChild(createMyConcertCard());
    if (cardType === "quickAccess") root.appendChild(createQuickAccessCard());
    if (cardType === "latest") root.appendChild(createLatestUpdatesCard());

    if (cardType === "continue") root.appendChild(createContinueCard());
    if (cardType === "focus") root.appendChild(createFocusCard());
    if (cardType === "progress") root.appendChild(createProgressCard());
    if (cardType === "songs") root.appendChild(createSongsCard());
    if (cardType === "notice") root.appendChild(createNoticeCard());
    if (cardType === "events") root.appendChild(createEventsCard());
    if (cardType === "venue") root.appendChild(createVenueCard());
    if (cardType === "recap") root.appendChild(createRecapCard());
    if (cardType === "checklist") root.appendChild(createChecklistCard());
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  updateDashboardCountdown();

  if (!AppState.dashboard.countdownTimer) {
    AppState.dashboard.countdownTimer = setInterval(
      updateDashboardCountdown,
      30000
    );
  }

  if (document.getElementById("setlistRoot")) {
    renderSetlistPage();
  }
}

function getDashboardCards() {
  const phase = getConcertPhase();
  return DASHBOARD.cardLayouts?.[phase] || DASHBOARD.cardLayouts.default;
}

function getConcertPhase() {
  const now = new Date();
  const firstShow = new Date(DASHBOARD.concert.dates[0]);
  const lastShow = new Date(DASHBOARD.concert.dates[DASHBOARD.concert.dates.length - 1]);

  const diffDays = Math.ceil((firstShow - now) / (1000 * 60 * 60 * 24));

  if (now > lastShow) return "finished";

  const isConcertPeriod =
    DASHBOARD.concert.dates.some(date =>
      new Date(date).toDateString() === now.toDateString()
    );

  if (isConcertPeriod) return "concertDay";
  if (diffDays <= 7) return "finalWeek";

  return "default";
}

function getConcertStartDate() {
  return new Date(DASHBOARD.concert.dates[0]);
}
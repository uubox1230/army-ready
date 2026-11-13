/* =========================
   Checklist
========================= */

function toggleChecklistItem(id) {
  const done = getChecklistDone();

  const next = done.includes(id)
    ? done.filter(item => item !== id)
    : [...done, id];

  saveChecklistDone(next);
  renderDashboard();
}

/* =========================
   Concert Day Essentials
========================= */

function toggleEssentialsSection(id) {
  const card = document.querySelector(".essentials-card");
  if (!card) return;

  const target = card.querySelector(`[data-essential-section="${id}"]`);
  if (!target) return;

  const shouldOpen = target.querySelector(".essentials-trigger")
    ?.getAttribute("aria-expanded") !== "true";

  card.querySelectorAll(".essentials-section").forEach(section => {
    const trigger = section.querySelector(".essentials-trigger");
    const panel = section.querySelector(".essentials-panel");
    const isTarget = section === target && shouldOpen;

    section.classList.toggle("open", isTarget);
    trigger?.setAttribute("aria-expanded", String(isTarget));
    if (panel) panel.hidden = !isTarget;
  });
}

function updateEssentialsPackingProgress() {
  const count = document.getElementById("essentialsPackingCount");
  if (!count) return;

  const total = DASHBOARD.essentials.packingItems.length;
  const completed = getEssentialsPackingDone().filter(id =>
    DASHBOARD.essentials.packingItems.includes(id)
  ).length;

  count.textContent = window.t?.(
    "dashboard.essentials.packing.progress",
    { completed, total },
    `已準備 ${completed} / ${total} 項`
  ) || `已準備 ${completed} / ${total} 項`;
}

function toggleEssentialsPackingItem(id) {
  if (!DASHBOARD.essentials.packingItems.includes(id)) return;

  const done = getEssentialsPackingDone();
  const next = done.includes(id)
    ? done.filter(item => item !== id)
    : [...done, id];

  saveEssentialsPackingDone(next);

  const item = document.querySelector(`[data-packing-id="${id}"]`);
  const isDone = next.includes(id);
  item?.classList.toggle("done", isDone);
  item?.setAttribute("aria-pressed", String(isDone));
  updateEssentialsPackingProgress();
}

document.addEventListener("armyready:languagechange", () => {
  updateEssentialsPackingProgress();
});

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
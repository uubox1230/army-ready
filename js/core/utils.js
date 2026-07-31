/* =========================
   Utilities
========================= */

function scrollToTopSafe() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });
}
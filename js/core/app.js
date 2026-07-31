/* =====================================================
   app.js
   -----------------------------------------------------

   Purpose
   - Application boot
   - Browser behavior setup
   - Home page initialization
   - Lucide icon initialization

===================================================== */

/* =========================
   Browser Setup
========================= */

function configureBrowserBehavior() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

/* =========================
   Page Detection
========================= */

function getCurrentPage() {
  if (document.getElementById("setlistRoot")) {
    return "setlist";
  }

  if (window.location.pathname.endsWith("song.html")) {
    return "song";
  }

  return "home";
}

/* =========================
   Icon Setup
========================= */

function initializeIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* =========================
   Application Boot
========================= */

function bootApp() {
  configureBrowserBehavior();

  const currentPage = getCurrentPage();

  if (
    currentPage === "home" &&
    typeof restorePageFromHash === "function"
  ) {
    restorePageFromHash();
  }

  initializeIcons();
}

bootApp();
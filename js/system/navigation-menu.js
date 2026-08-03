const ARMY_NAV_ITEMS = [
  { id: "home", label: "首頁", href: "index.html" },
  { id: "setlist", label: "Setlist", href: "setlist.html" },
  { id: "official", label: "Official", href: "official.html" },
  { id: "community", label: "Community", href: "community.html" },
  { id: "venue", label: "Venue Guide", href: "venue.html" }
];

const deepLinkTimers = new WeakMap();

function getCurrentNavigationPage() {
  const filename = window.location.pathname.split("/").pop() || "index.html";

  if (filename === "setlist.html") return "setlist";
  if (filename === "official.html") return "official";
  if (filename === "community.html") return "community";
  if (filename === "venue.html") return "venue";
  if (filename === "song.html") return "song";
  return "home";
}

function getNavigationMount() {
  return document.querySelector(
    ".official-header-inner, .community-header-inner, .venue-header-inner, " +
    ".setlist-header-top, .song-header-row"
  );
}

function initNavigationMenu() {
  const mount = getNavigationMount();
  if (!mount || document.getElementById("globalNavTrigger")) return;

  const currentPage = getCurrentNavigationPage();
  const nav = document.createElement("div");
  nav.className = "global-nav";
  nav.innerHTML = `
    <button
      id="globalNavTrigger"
      class="global-nav-trigger"
      type="button"
      aria-label="開啟全站選單"
      aria-expanded="false"
      aria-controls="globalNavPanel"
    >
      <span></span><span></span><span></span>
    </button>
  `;
  mount.appendChild(nav);

  const overlay = document.createElement("div");
  overlay.id = "globalNavOverlay";
  overlay.className = "global-nav-overlay";

  const panel = document.createElement("nav");
  panel.id = "globalNavPanel";
  panel.className = "global-nav-panel";
  panel.setAttribute("aria-label", "全站導覽");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="global-nav-handle" aria-hidden="true"></div>
    <div class="global-nav-heading">
      <div><small>ARMY READY</small><strong>Menu</strong></div>
      <button class="global-nav-close" type="button" aria-label="關閉選單">×</button>
    </div>
    <div class="global-nav-links">
      ${ARMY_NAV_ITEMS.map(item => `
        <a
          class="global-nav-link ${item.id === currentPage ? "active" : ""}"
          href="${item.href}"
          ${item.id === currentPage ? 'aria-current="page"' : ""}
        >
          <span>${item.label}</span><span aria-hidden="true">›</span>
        </a>
      `).join("")}
    </div>
  `;

  document.body.append(overlay, panel);

  const trigger = document.getElementById("globalNavTrigger");
  const closeButton = panel.querySelector(".global-nav-close");

  const closeMenu = () => {
    document.body.classList.remove("global-nav-open");
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  };

  const openMenu = () => {
    document.body.classList.add("global-nav-open");
    trigger.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    closeButton.focus({ preventScroll: true });
  };

  trigger.addEventListener("click", () => {
    if (document.body.classList.contains("global-nav-open")) closeMenu();
    else openMenu();
  });
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

function getDeepLinkTarget() {
  if (!window.location.hash) return null;

  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch (error) {
    return null;
  }

  if (!id) return null;
  const anchor = document.getElementById(id);
  return anchor?.dataset.deepLinkParent === "true"
    ? anchor.closest("article")
    : anchor;
}

function focusDeepLink() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = getDeepLinkTarget();
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.classList.remove("deep-link-highlight");
      void target.offsetWidth;
      target.classList.add("deep-link-highlight");

      window.clearTimeout(deepLinkTimers.get(target));
      deepLinkTimers.set(target, window.setTimeout(() => {
        target.classList.remove("deep-link-highlight");
      }, 1800));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigationMenu();
  focusDeepLink();
});

window.addEventListener("hashchange", focusDeepLink);

window.ARMYNavigation = {
  focusDeepLink
};

const ARMY_NAV_ITEMS = [
  { id: "home", label: "首頁 Main Page", key: "navigation.home", href: "/" },
  { id: "setlist", label: "應援練習 Setlist", key: "navigation.setlist", href: "/setlist/" },
  { id: "official", label: "官方公告 Official", key: "navigation.official", href: "/official/" },
  { id: "community", label: "粉絲應援 Community", key: "navigation.community", href: "/community/" },
  { id: "venue", label: "場館指南 Venue Guide", key: "navigation.venue", href: "/venue/" }
];

const deepLinkTimers = new WeakMap();

function getCurrentNavigationPage() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const section = segments[0] || "";

  if (section === "setlist") return "setlist";
  if (section === "official") return "official";
  if (section === "community") return "community";
  if (section === "venue") return "venue";
  if (section === "practice") return "song";
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
  const translate = (key, fallback) => window.t?.(key, {}, fallback) || fallback;
  const nav = document.createElement("div");
  nav.className = "global-nav";
  nav.innerHTML = `
    <button
      id="globalNavTrigger"
      class="global-nav-trigger"
      type="button"
      aria-label="${translate("navigation.open_menu", "開啟全站選單")}"
      data-i18n-aria-label="navigation.open_menu"
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
  panel.setAttribute("aria-label", translate("navigation.label", "全站導覽"));
  panel.setAttribute("data-i18n-aria-label", "navigation.label");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="global-nav-handle" aria-hidden="true"></div>
    <div class="global-nav-heading">
      <div><small>ARMY READY</small><strong data-i18n="navigation.quick_menu">${translate("navigation.quick_menu", "快捷選單")}</strong></div>
      <button class="global-nav-close" type="button" aria-label="${translate("navigation.close_menu", "關閉選單")}" data-i18n-aria-label="navigation.close_menu">×</button>
    </div>
    <div class="global-nav-links">
      ${ARMY_NAV_ITEMS.map(item => `
        <a
          class="global-nav-link ${item.id === currentPage ? "active" : ""}"
          href="${item.href}"
          ${item.id === currentPage ? 'aria-current="page"' : ""}
        >
          <span data-i18n="${item.key}">${translate(item.key, item.label)}</span><span aria-hidden="true">›</span>
        </a>
      `).join("")}
    </div>
    <div class="global-nav-language" aria-label="${translate("language.title", "Language / 語言")}">
      <p data-i18n="language.title">${translate("language.title", "Language / 語言")}</p>
      <div class="global-nav-language-options">
        <button type="button" data-language-option="zh-TW" aria-pressed="false" data-i18n="language.zh_tw">繁體中文</button>
        <button type="button" data-language-option="en" aria-pressed="false" data-i18n="language.en">English</button>
      </div>
    </div>
  `;

  document.body.append(overlay, panel);

  const analyticsFromPage = currentPage === "song"
    ? "practice"
    : currentPage;

  panel.querySelectorAll(".global-nav-link").forEach((link, index) => {
    const item = ARMY_NAV_ITEMS[index];
    if (!item) return;

    link.addEventListener("click", () => {
      window.Analytics?.clickMenu?.(
        analyticsFromPage,
        item.id
      );
    });
  });

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

  window.I18n?.apply?.(panel);
  window.I18n?.refreshControls?.(panel);
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

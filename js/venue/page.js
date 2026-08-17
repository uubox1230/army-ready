const VENUE_SCROLL = {
  activeSectionId: "",
  isProgrammaticScroll: false,
  scrollTimer: null,
  releaseTimer: null,
  resizeTimer: null
};

function initVenuePage() {
  renderVenueTabs();
  renderVenueSections();
  renderVenueNotice();
  bindVenueScrollSpy();
  updateVenueActiveFromScroll();
}

function getVenueGuideForCurrentLanguage() {
  if (window.I18n?.language !== "en" || typeof VENUE_GUIDE_EN === "undefined") {
    return VENUE_GUIDE;
  }

  return {
    ...VENUE_GUIDE,
    title: VENUE_GUIDE_EN.title || VENUE_GUIDE.title,
    notice: VENUE_GUIDE_EN.notice || VENUE_GUIDE.notice,
    sections: VENUE_GUIDE.sections.map(section => {
      const translation = VENUE_GUIDE_EN.sections?.[section.id] || {};

      return {
        ...section,
        label: translation.label || section.label,
        title: translation.title || section.title,
        description: translation.description || section.description,
        items: section.items.map((item, index) => ({
          ...item,
          title: translation.items?.[index]?.title || item.title,
          detail: translation.items?.[index]?.detail || item.detail
        })),
        links: Array.isArray(section.links)
          ? section.links.map((link, index) => ({
              ...link,
              label: translation.links?.[index] || link.label
            }))
          : section.links
      };
    })
  };
}

function renderVenueTabs() {
  const root = document.getElementById("venueTabs");
  if (!root) return;

  const guide = getVenueGuideForCurrentLanguage();

  root.innerHTML = guide.sections.map((section, index) => `
    <button
      type="button"
      class="venue-tab ${index === 0 ? "active" : ""}"
      data-target="${section.id}"
      aria-pressed="${index === 0 ? "true" : "false"}"
    >
      ${window.t?.(`venue.tab.${section.id}`, {}, section.label) || section.label}
    </button>
  `).join("");

  root.querySelectorAll("[data-target]").forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.dataset.target;
      const target = document.getElementById(sectionId);
      if (!target) return;

      VENUE_SCROLL.isProgrammaticScroll = true;
      updateVenueActiveTab(sectionId, true);
      window.clearTimeout(VENUE_SCROLL.releaseTimer);

      window.scrollTo({
        top: getVenueSectionScrollTop(target),
        behavior: "smooth"
      });

      VENUE_SCROLL.releaseTimer = window.setTimeout(() => {
        VENUE_SCROLL.isProgrammaticScroll = false;
        updateVenueActiveFromScroll();
      }, 700);
    });
  });
}

function renderVenueSections() {
  const root = document.getElementById("venueSections");
  if (!root) return;

  const guide = getVenueGuideForCurrentLanguage();

  root.innerHTML = guide.sections
    .map((section, index) => createVenueSectionMarkup(section, index, guide.id))
    .join("");
}

function createVenueSectionMarkup(section, sectionIndex, guideId) {
  const items = section.items
    .map((item, index) => `
      <div class="venue-item">
        <span class="venue-item-number">${index + 1}</span>
        <div class="venue-item-copy">
          <strong>${item.title}</strong>
          <span>${item.detail}</span>
        </div>
      </div>
    `)
    .join("");

  const links = Array.isArray(section.links)
    ? section.links.map(createVenueLinkMarkup).join("")
    : "";

  return `
    <article id="${section.id}" class="venue-section">
      ${sectionIndex === 0
        ? `<span id="${guideId}" data-deep-link-parent="true"></span>`
        : ""}
      <div class="venue-section-heading">
        <div>
          <p>${section.label}</p>
          <h2>${section.title}</h2>
        </div>
      </div>

      <p class="venue-section-description">${section.description}</p>

      <div class="venue-item-list">${items}</div>

      ${links ? `<div class="venue-section-links">${links}</div>` : ""}
    </article>
  `;
}

function renderVenueNotice() {
  const notice = document.getElementById("venueNoticeText");
  if (!notice) return;

  const guide = getVenueGuideForCurrentLanguage();
  notice.textContent = guide.notice || VENUE_GUIDE.notice || notice.textContent;
}

function createVenueLinkMarkup(link) {
  const isExternal = /^https?:\/\//i.test(link.url);
  const externalAttributes = isExternal
    ? 'target="_blank" rel="noopener noreferrer"'
    : "";

  return `
    <a
      class="venue-section-link ${link.primary ? "primary" : ""}"
      href="${link.url}"
      ${externalAttributes}
    >
      <span>${link.label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function getVenueStickyOffset() {
  const header = document.querySelector(".venue-header");
  const tabs = document.getElementById("venueTabs");

  const headerHeight = header?.getBoundingClientRect().height || 0;
  const tabsHeight = tabs?.getBoundingClientRect().height || 0;

  return headerHeight + tabsHeight + 12;
}

function getVenueSectionScrollTop(target) {
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, targetTop - getVenueStickyOffset());
}

function bindVenueScrollSpy() {
  window.addEventListener("scroll", handleVenueScroll, { passive: true });

  window.addEventListener("resize", () => {
    window.clearTimeout(VENUE_SCROLL.resizeTimer);

    VENUE_SCROLL.resizeTimer = window.setTimeout(() => {
      if (!VENUE_SCROLL.isProgrammaticScroll) {
        updateVenueActiveFromScroll();
      }
    }, 120);
  }, { passive: true });

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", () => {
      VENUE_SCROLL.isProgrammaticScroll = false;
      updateVenueActiveFromScroll();
    }, { passive: true });
  }
}

function handleVenueScroll() {
  if (VENUE_SCROLL.isProgrammaticScroll) return;

  window.clearTimeout(VENUE_SCROLL.scrollTimer);

  VENUE_SCROLL.scrollTimer = window.setTimeout(() => {
    updateVenueActiveFromScroll();
  }, 70);
}

function updateVenueActiveFromScroll() {
  const sections = VENUE_GUIDE.sections
    .map(section => document.getElementById(section.id))
    .filter(Boolean);

  if (!sections.length) return;

  const markerY = getVenueStickyOffset() + 24;
  let activeSection = sections[0];

  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= markerY) {
      activeSection = section;
    }
  });

  const nearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 8;

  if (nearBottom) {
    activeSection = sections[sections.length - 1];
  }

  updateVenueActiveTab(activeSection.id, false);
}

function updateVenueActiveTab(sectionId, centerTab = false) {
  if (!sectionId) return;

  const buttons = Array.from(document.querySelectorAll(".venue-tab"));
  const activeButton = buttons.find(button => button.dataset.target === sectionId);

  if (!activeButton) return;

  const didChange = VENUE_SCROLL.activeSectionId !== sectionId;
  VENUE_SCROLL.activeSectionId = sectionId;

  buttons.forEach(button => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (didChange || centerTab) {
    keepVenueTabVisible(activeButton, centerTab);
  }
}

function keepVenueTabVisible(button, centerTab = false) {
  const tabs = document.getElementById("venueTabs");
  if (!tabs || !button) return;

  const tabsRect = tabs.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const padding = 14;

  const outsideLeft = buttonRect.left < tabsRect.left + padding;
  const outsideRight = buttonRect.right > tabsRect.right - padding;

  if (!centerTab && !outsideLeft && !outsideRight) return;

  const targetLeft =
    button.offsetLeft - (tabs.clientWidth - button.offsetWidth) / 2;

  tabs.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: centerTab ? "smooth" : "auto"
  });
}

document.addEventListener("DOMContentLoaded", initVenuePage);
document.addEventListener("armyready:languagechange", () => {
  const activeSectionId = VENUE_SCROLL.activeSectionId;
  renderVenueTabs();
  renderVenueSections();
  renderVenueNotice();

  if (activeSectionId) {
    VENUE_SCROLL.activeSectionId = "";
    updateVenueActiveTab(activeSectionId, false);
  }

  updateVenueActiveFromScroll();
});

const VENUE_SCROLL = {
  activeSectionId: "",
  isProgrammaticScroll: false,
  scrollTimer: null,
  releaseTimer: null,
  resizeTimer: null
};

const VENUE_VIEWER = {
  dialog: null,
  image: null,
  mediaTitle: null,
  trigger: null,
  scale: 1,
  scrollY: 0,
  bodyStyle: null
};

function initVenuePage() {
  initVenueImageViewer();
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
        media: Array.isArray(section.media)
          ? section.media.map(media => ({
              ...media,
              ...(translation.media?.[media.id] || {})
            }))
          : [],
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

  bindVenueImageFallbacks(root);
  bindVenueImageViewerTriggers(root);
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

  const media = Array.isArray(section.media) ? section.media : [];
  const mediaBeforeItems = media
    .filter(item => item.placement === "before-items")
    .map(createVenueMediaMarkup)
    .join("");
  const mediaAfterItems = media
    .filter(item => item.placement !== "before-items")
    .map(createVenueMediaMarkup)
    .join("");

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

      ${mediaBeforeItems ? `<div class="venue-media-list before-items">${mediaBeforeItems}</div>` : ""}

      <div class="venue-item-list">${items}</div>

      ${mediaAfterItems ? `<div class="venue-media-list after-items">${mediaAfterItems}</div>` : ""}

      ${links ? `<div class="venue-section-links">${links}</div>` : ""}
    </article>
  `;
}

function createVenueMediaMarkup(media) {
  const viewLabel = window.t?.("venue.image.view", {}, "查看高解析原圖") || "查看高解析原圖";
  const downloadLabel = window.t?.("venue.image.download", {}, "下載原圖") || "下載原圖";
  const officialLabel = window.t?.("venue.image.official", {}, "官方資訊") || "官方資訊";
  const unavailableLabel = window.t?.("venue.image.unavailable", {}, "圖片暫時無法載入") || "圖片暫時無法載入";
  const saveHint = window.t?.("venue.image.save_hint", {}, "iPhone 可開啟原圖後長按儲存。") || "iPhone 可開啟原圖後長按儲存。";
  const viewAriaLabel = `${viewLabel}：${media.title}`;
  const downloadAriaLabel = `${downloadLabel}：${media.title}`;
  const classes = [
    "venue-media-card",
    media.featured ? "featured" : "",
    media.compact ? "compact" : ""
  ].filter(Boolean).join(" ");

  return `
    <figure class="${classes}" data-venue-media-id="${media.id}">
      <button
        type="button"
        class="venue-media-preview"
        data-venue-view-image="${media.id}"
        aria-label="${viewAriaLabel}"
      >
        <img
          data-venue-image
          src="${media.src}"
          alt="${media.alt}"
          width="${media.width}"
          height="${media.height}"
          loading="lazy"
          decoding="async"
        >
        <span class="venue-media-unavailable" aria-hidden="true">${unavailableLabel}</span>
      </button>

      <figcaption class="venue-media-copy">
        <span class="venue-media-official">${officialLabel}</span>
        <h3>${media.title}</h3>
        <p>${media.caption}</p>
      </figcaption>

      <div class="venue-media-actions">
        <button type="button" data-venue-view-image="${media.id}" aria-label="${viewAriaLabel}">
          <span>${viewLabel}</span>
          <span aria-hidden="true">↗</span>
        </button>
        <a href="${media.src}" download aria-label="${downloadAriaLabel}">
          <span>${downloadLabel}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <p class="venue-media-save-hint">${saveHint}</p>
    </figure>
  `;
}

function bindVenueImageFallbacks(root) {
  root.querySelectorAll("[data-venue-image]").forEach(image => {
    const markUnavailable = () => {
      const card = image.closest(".venue-media-card");
      card?.classList.add("image-load-failed");
      card?.querySelector(".venue-media-unavailable")?.setAttribute("aria-hidden", "false");
    };

    if (image.complete && image.naturalWidth === 0) {
      markUnavailable();
      return;
    }

    image.addEventListener("error", markUnavailable, { once: true });
  });
}

function initVenueImageViewer() {
  if (document.getElementById("venueImageViewer")) return;

  const dialog = document.createElement("dialog");
  dialog.id = "venueImageViewer";
  dialog.className = "venue-image-viewer";
  dialog.setAttribute("aria-labelledby", "venueViewerTitle");
  dialog.innerHTML = `
    <div class="venue-viewer-shell">
      <header class="venue-viewer-header">
        <div>
          <span id="venueViewerTitle" data-i18n="venue.viewer.title">官方圖片檢視器</span>
          <strong id="venueViewerMediaTitle"></strong>
        </div>
        <button
          type="button"
          class="venue-viewer-close"
          data-venue-viewer-close
          aria-label="關閉圖片檢視器"
          data-i18n-aria-label="venue.viewer.close"
        >×</button>
      </header>

      <div class="venue-viewer-toolbar">
        <button type="button" data-venue-zoom="out" aria-label="縮小" data-i18n-aria-label="venue.viewer.zoom_out">−</button>
        <button type="button" data-venue-zoom="reset" aria-label="重設縮放" data-i18n-aria-label="venue.viewer.zoom_reset">
          <span data-venue-zoom-value>100%</span>
        </button>
        <button type="button" data-venue-zoom="in" aria-label="放大" data-i18n-aria-label="venue.viewer.zoom_in">＋</button>
      </div>

      <div class="venue-viewer-viewport">
        <img id="venueViewerImage" alt="" draggable="false">
      </div>
    </div>
  `;

  document.body.appendChild(dialog);
  window.I18n?.apply?.(dialog);

  VENUE_VIEWER.dialog = dialog;
  VENUE_VIEWER.image = dialog.querySelector("#venueViewerImage");
  VENUE_VIEWER.mediaTitle = dialog.querySelector("#venueViewerMediaTitle");

  dialog.querySelector("[data-venue-viewer-close]")?.addEventListener("click", closeVenueImageViewer);
  dialog.querySelectorAll("[data-venue-zoom]").forEach(button => {
    button.addEventListener("click", () => changeVenueViewerZoom(button.dataset.venueZoom));
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeVenueImageViewer();
  });

  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeVenueImageViewer();
  });

  dialog.addEventListener("keydown", event => {
    if (event.key === "+" || event.key === "=") changeVenueViewerZoom("in");
    if (event.key === "-") changeVenueViewerZoom("out");
    if (event.key === "0") changeVenueViewerZoom("reset");
  });

  dialog.addEventListener("close", restoreVenueViewerPage);
}

function bindVenueImageViewerTriggers(root) {
  root.querySelectorAll("[data-venue-view-image]").forEach(button => {
    button.addEventListener("click", () => {
      openVenueImageViewer(button.dataset.venueViewImage, button);
    });
  });
}

function getVenueMediaById(mediaId) {
  const guide = getVenueGuideForCurrentLanguage();

  for (const section of guide.sections) {
    const media = section.media?.find(item => item.id === mediaId);
    if (media) return media;
  }

  return null;
}

function openVenueImageViewer(mediaId, trigger) {
  const media = getVenueMediaById(mediaId);
  const dialog = VENUE_VIEWER.dialog;
  if (!media || !dialog || !VENUE_VIEWER.image) return;

  VENUE_VIEWER.trigger = trigger;
  VENUE_VIEWER.scrollY = window.scrollY;
  VENUE_VIEWER.bodyStyle = {
    position: document.body.style.position,
    top: document.body.style.top,
    left: document.body.style.left,
    right: document.body.style.right,
    width: document.body.style.width,
    overflow: document.body.style.overflow
  };

  VENUE_VIEWER.image.src = media.src;
  VENUE_VIEWER.image.alt = media.alt;
  VENUE_VIEWER.mediaTitle.textContent = media.title;
  setVenueViewerZoom(1);

  document.body.style.position = "fixed";
  document.body.style.top = `-${VENUE_VIEWER.scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  document.documentElement.classList.add("venue-viewer-open");

  dialog.showModal();
  dialog.querySelector("[data-venue-viewer-close]")?.focus();
}

function closeVenueImageViewer() {
  if (VENUE_VIEWER.dialog?.open) VENUE_VIEWER.dialog.close();
}

function restoreVenueViewerPage() {
  const savedStyle = VENUE_VIEWER.bodyStyle;

  if (savedStyle) {
    document.body.style.position = savedStyle.position;
    document.body.style.top = savedStyle.top;
    document.body.style.left = savedStyle.left;
    document.body.style.right = savedStyle.right;
    document.body.style.width = savedStyle.width;
    document.body.style.overflow = savedStyle.overflow;
  }

  document.documentElement.classList.remove("venue-viewer-open");

  const trigger = VENUE_VIEWER.trigger;
  VENUE_VIEWER.trigger = null;
  VENUE_VIEWER.bodyStyle = null;
  trigger?.focus({ preventScroll: true });
  window.scrollTo(0, VENUE_VIEWER.scrollY);
}

function changeVenueViewerZoom(action) {
  const nextScale = action === "in"
    ? VENUE_VIEWER.scale + 0.5
    : action === "out"
      ? VENUE_VIEWER.scale - 0.5
      : 1;

  setVenueViewerZoom(nextScale);
}

function setVenueViewerZoom(scale) {
  const safeScale = Math.min(4, Math.max(1, scale));
  const viewport = VENUE_VIEWER.dialog?.querySelector(".venue-viewer-viewport");
  const value = VENUE_VIEWER.dialog?.querySelector("[data-venue-zoom-value]");

  VENUE_VIEWER.scale = safeScale;
  if (VENUE_VIEWER.image) VENUE_VIEWER.image.style.width = `${safeScale * 100}%`;
  if (value) value.textContent = `${Math.round(safeScale * 100)}%`;
  if (safeScale === 1 && viewport) {
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }
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
  closeVenueImageViewer();
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

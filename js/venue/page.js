function initVenuePage() {
  renderVenueTabs();
  renderVenueSections();
  bindVenueScrollSpy();
}

function renderVenueTabs() {
  const root = document.getElementById("venueTabs");
  if (!root) return;

  root.innerHTML = VENUE_GUIDE.sections.map((section, index) => `
    <button
      type="button"
      class="venue-tab ${index === 0 ? "active" : ""}"
      data-target="${section.id}"
    >
      ${section.label}
    </button>
  `).join("");

  root.querySelectorAll("[data-target]").forEach(button => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function renderVenueSections() {
  const root = document.getElementById("venueSections");
  if (!root) return;

  root.innerHTML = VENUE_GUIDE.sections
    .map(createVenueSectionMarkup)
    .join("");
}

function createVenueSectionMarkup(section) {
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
      <div class="venue-section-heading">
        <div>
          <p>${section.label}</p>
          <h2>${section.title}</h2>
        </div>

        <span class="venue-section-icon" aria-hidden="true">
          ${section.icon}
        </span>
      </div>

      <p class="venue-section-description">
        ${section.description}
      </p>

      <div class="venue-item-list">
        ${items}
      </div>

      ${links
        ? `<div class="venue-section-links">${links}</div>`
        : ""}
    </article>
  `;
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

function bindVenueScrollSpy() {
  const sections = VENUE_GUIDE.sections
    .map(section => document.getElementById(section.id))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      updateVenueActiveTab(visibleEntry.target.id);
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.05, 0.2, 0.5]
    }
  );

  sections.forEach(section => observer.observe(section));
}

function updateVenueActiveTab(sectionId) {
  document.querySelectorAll(".venue-tab").forEach(button => {
    const isActive = button.dataset.target === sectionId;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", initVenuePage);

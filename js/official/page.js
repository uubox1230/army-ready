const officialState = {
  category: "all",
  query: ""
};

function initOfficialPage() {
  renderOfficialFilters();
  bindOfficialEvents();
  renderOfficialAnnouncements();
}

function bindOfficialEvents() {
  const search = document.getElementById("officialSearch");
  const reset = document.getElementById("officialReset");

  search?.addEventListener("input", event => {
    officialState.query = event.target.value.trim().toLowerCase();
    renderOfficialAnnouncements();
  });

  reset?.addEventListener("click", resetOfficialFilters);
}

function renderOfficialFilters() {
  const root = document.getElementById("officialFilters");
  if (!root) return;

  root.innerHTML = OFFICIAL_CATEGORIES.map(category => `
    <button
      type="button"
      class="official-filter ${
        category.id === officialState.category ? "active" : ""
      }"
      data-category="${category.id}"
    >
      ${category.label}
    </button>
  `).join("");

  root.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      officialState.category = button.dataset.category;
      renderOfficialFilters();
      renderOfficialAnnouncements();
    });
  });
}

function getFilteredOfficialAnnouncements() {
  return OFFICIAL_ANNOUNCEMENTS
    .filter(item => {
      const categoryMatched =
        officialState.category === "all" ||
        item.category === officialState.category;

      const searchableText = [
        item.title,
        item.summary,
        getOfficialCategoryLabel(item.category)
      ].join(" ").toLowerCase();

      const queryMatched =
        !officialState.query ||
        searchableText.includes(officialState.query);

      return categoryMatched && queryMatched;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderOfficialAnnouncements() {
  const list = document.getElementById("officialList");
  const empty = document.getElementById("officialEmpty");
  const count = document.getElementById("officialResultCount");

  if (!list || !empty || !count) return;

  const items = getFilteredOfficialAnnouncements();

  count.textContent = `${items.length} 則公告`;
  list.innerHTML = items.map(createOfficialCardMarkup).join("");

  empty.classList.toggle("hidden", items.length > 0);
}

function createOfficialCardMarkup(item) {
  const links = Array.isArray(item.links)
    ? item.links.map(createOfficialLinkMarkup).join("")
    : "";

  return `
    <article class="official-card">
      <div class="official-card-top">
        <div class="official-card-meta">
          <span class="official-card-category">
            ${getOfficialCategoryLabel(item.category)}
          </span>

          ${item.isNew
            ? '<span class="official-card-new">New</span>'
            : ""}
        </div>

        <time datetime="${item.date}">
          ${formatOfficialDate(item.date)}
        </time>
      </div>

      <h3>${item.title}</h3>
      <p class="official-card-summary">${item.summary}</p>

      ${links
        ? `<div class="official-card-links">${links}</div>`
        : ""}
    </article>
  `;
}

function createOfficialLinkMarkup(link) {
  const isExternal = /^https?:\/\//i.test(link.url);
  const externalAttributes = isExternal
    ? 'target="_blank" rel="noopener noreferrer"'
    : "";

  return `
    <a
      class="official-card-link ${link.primary ? "primary" : ""}"
      href="${link.url}"
      ${externalAttributes}
    >
      <span>${link.label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function getOfficialCategoryLabel(categoryId) {
  return (
    OFFICIAL_CATEGORIES.find(category => category.id === categoryId)?.label ||
    "其他"
  );
}

function formatOfficialDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00+08:00`);

  if (Number.isNaN(date.getTime())) return dateValue;

  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function resetOfficialFilters() {
  officialState.category = "all";
  officialState.query = "";

  const search = document.getElementById("officialSearch");
  if (search) search.value = "";

  renderOfficialFilters();
  renderOfficialAnnouncements();
}

document.addEventListener("DOMContentLoaded", initOfficialPage);

const COMMUNITY_FAVORITES_KEY = "armyReadyFavoriteEvents";

const communityState = {
  category: "all",
  query: "",
  favoritesOnly: false
};

function initCommunityPage() {
  renderCommunityFilters();
  bindCommunityEvents();
  renderCommunityEvents();
}

function bindCommunityEvents() {
  const search = document.getElementById("communitySearch");
  const reset = document.getElementById("communityReset");
  const favoriteToggle = document.getElementById("communityFavoriteToggle");

  search?.addEventListener("input", event => {
    communityState.query = event.target.value.trim().toLowerCase();
    renderCommunityEvents();
  });

  reset?.addEventListener("click", resetCommunityFilters);

  favoriteToggle?.addEventListener("click", () => {
    communityState.favoritesOnly = !communityState.favoritesOnly;
    updateCommunityFavoriteToggle();
    renderCommunityEvents();
  });
}

function renderCommunityFilters() {
  const root = document.getElementById("communityFilters");
  if (!root) return;

  root.innerHTML = COMMUNITY_CATEGORIES.map(category => `
    <button
      type="button"
      class="community-filter ${
        category.id === communityState.category ? "active" : ""
      }"
      data-category="${category.id}"
    >
      ${category.label}
    </button>
  `).join("");

  root.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      communityState.category = button.dataset.category;
      renderCommunityFilters();
      renderCommunityEvents();
    });
  });
}

function getCommunityFavorites() {
  try {
    const value = JSON.parse(
      localStorage.getItem(COMMUNITY_FAVORITES_KEY) || "[]"
    );

    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn("Unable to read community favorites.", error);
    return [];
  }
}

function saveCommunityFavorites(favorites) {
  localStorage.setItem(
    COMMUNITY_FAVORITES_KEY,
    JSON.stringify(favorites)
  );
}

function toggleCommunityFavorite(eventId) {
  const favorites = getCommunityFavorites();
  const nextFavorites = favorites.includes(eventId)
    ? favorites.filter(id => id !== eventId)
    : [...favorites, eventId];

  saveCommunityFavorites(nextFavorites);
  renderCommunityEvents();
}

function getFilteredCommunityEvents() {
  const favorites = getCommunityFavorites();

  return COMMUNITY_EVENTS
    .filter(item => {
      const categories = normalizeCommunityArray(item.category);

      const categoryMatched =
        communityState.category === "all" ||
        categories.includes(communityState.category);

      const favoriteMatched =
        !communityState.favoritesOnly ||
        favorites.includes(item.id);

      const searchableText = [
        item.title,
        item.host,
        item.summary,
        item.location,
        item.time,
        item.note,
        getCommunityCategoryLabels(item.category),
        formatCommunityDates(item.date)
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const queryMatched =
        !communityState.query ||
        searchableText.includes(communityState.query);

      return categoryMatched && favoriteMatched && queryMatched;
    })
    .sort((a, b) => {
      return getCommunityFirstDate(a.date) - getCommunityFirstDate(b.date);
    });
}

function renderCommunityEvents() {
  const list = document.getElementById("communityList");
  const empty = document.getElementById("communityEmpty");
  const count = document.getElementById("communityResultCount");

  if (!list || !empty || !count) return;

  const items = getFilteredCommunityEvents();

  count.textContent = `${items.length} 個活動`;
  list.innerHTML = items.map(createCommunityCardMarkup).join("");

  list.querySelectorAll("[data-favorite-id]").forEach(button => {
    button.addEventListener("click", () => {
      toggleCommunityFavorite(button.dataset.favoriteId);
    });
  });

  empty.classList.toggle("hidden", items.length > 0);
  updateCommunityFavoriteToggle();
}

function createCommunityCardMarkup(item) {
  const favorites = getCommunityFavorites();
  const isFavorite = favorites.includes(item.id);

  const links = Array.isArray(item.links)
    ? item.links.map(createCommunityLinkMarkup).join("")
    : "";

  return `
    <article class="community-card">
      <div class="community-card-top">
        <div class="community-card-meta">
          <div class="community-card-category-row">
            ${createCommunityCategoryBadges(item.category)}
          </div>

          <div class="community-card-date-row">
            ${createCommunityDateBadges(item.date)}
          </div>
        </div>

        <button
          type="button"
          class="community-card-favorite ${isFavorite ? "active" : ""}"
          data-favorite-id="${item.id}"
          aria-label="${isFavorite ? "取消收藏" : "收藏活動"}"
          aria-pressed="${isFavorite}"
        >
          <span aria-hidden="true">${isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>

      <h3>${item.title}</h3>
      <p class="community-card-host">主辦：${item.host}</p>
      <p class="community-card-summary">${item.summary}</p>

      <div class="community-card-details">
        <div class="community-card-detail">
          <span>地點</span>
          <strong>${item.location}</strong>
        </div>

        <div class="community-card-detail">
          <span>時間</span>
          <strong>${item.time}</strong>
        </div>

        <div class="community-card-detail">
          <span>提醒</span>
          <strong>${item.note}</strong>
        </div>
      </div>

      ${links
        ? `<div class="community-card-links">${links}</div>`
        : ""}
    </article>
  `;
}

function createCommunityLinkMarkup(link) {
  const isExternal = /^https?:\/\//i.test(link.url);
  const externalAttributes = isExternal
    ? 'target="_blank" rel="noopener noreferrer"'
    : "";

  return `
    <a
      class="community-card-link ${link.primary ? "primary" : ""}"
      href="${link.url}"
      ${externalAttributes}
    >
      <span>${link.label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function normalizeCommunityArray(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return value ? [value] : [];
}

function getCommunityCategoryLabel(categoryId) {
  return (
    COMMUNITY_CATEGORIES.find(category => category.id === categoryId)?.label ||
    "其他"
  );
}

function getCommunityCategoryLabels(categoryValue) {
  return normalizeCommunityArray(categoryValue)
    .map(getCommunityCategoryLabel)
    .join("、");
}

function createCommunityCategoryBadges(categoryValue) {
  return normalizeCommunityArray(categoryValue)
    .map(categoryId => `
      <span class="community-card-category">
        ${getCommunityCategoryLabel(categoryId)}
      </span>
    `)
    .join("");
}

function formatCommunityDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00+08:00`);

  if (Number.isNaN(date.getTime())) return dateValue;

  return new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function formatCommunityDates(dateValue) {
  return normalizeCommunityArray(dateValue)
    .map(formatCommunityDate)
    .join("、");
}

function createCommunityDateBadges(dateValue) {
  return normalizeCommunityArray(dateValue)
    .map(date => `
      <span class="community-card-date">
        ${formatCommunityDate(date)}
      </span>
    `)
    .join("");
}

function getCommunityFirstDate(dateValue) {
  const dates = normalizeCommunityArray(dateValue);

  if (!dates.length) {
    return Number.POSITIVE_INFINITY;
  }

  const timestamps = dates
    .map(date => new Date(`${date}T00:00:00+08:00`).getTime())
    .filter(timestamp => !Number.isNaN(timestamp));

  return timestamps.length
    ? Math.min(...timestamps)
    : Number.POSITIVE_INFINITY;
}

function updateCommunityFavoriteToggle() {
  const button = document.getElementById("communityFavoriteToggle");
  if (!button) return;

  button.classList.toggle("active", communityState.favoritesOnly);
  button.setAttribute(
    "aria-pressed",
    String(communityState.favoritesOnly)
  );

  button.innerHTML = `
    <span aria-hidden="true">
      ${communityState.favoritesOnly ? "♥" : "♡"}
    </span>
    <span>${communityState.favoritesOnly ? "全部活動" : "收藏"}</span>
  `;
}

function resetCommunityFilters() {
  communityState.category = "all";
  communityState.query = "";
  communityState.favoritesOnly = false;

  const search = document.getElementById("communitySearch");
  if (search) search.value = "";

  renderCommunityFilters();
  renderCommunityEvents();
}

document.addEventListener("DOMContentLoaded", initCommunityPage);

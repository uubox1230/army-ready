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
      ${window.t?.(`community.category.${category.id}`, {}, category.label) || category.label}
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

function getCommunityEventsForCurrentLanguage() {
  if (
    window.I18n?.language !== "en" ||
    typeof COMMUNITY_EVENTS_EN === "undefined"
  ) {
    return COMMUNITY_EVENTS;
  }

  return COMMUNITY_EVENTS.map(item => {
    const translation = COMMUNITY_EVENTS_EN[item.id] || {};

    return {
      ...item,
      title: translation.title || item.title,
      summary: translation.summary || item.summary,
      location: translation.location || item.location,
      time: translation.time || item.time,
      note: translation.note || item.note,
      cover: item.cover
        ? {
            ...item.cover,
            alt: translation.cover?.alt || item.cover.alt
          }
        : item.cover,
      links: Array.isArray(item.links)
        ? item.links.map((link, index) => ({
            ...link,
            label: translation.links?.[index] || link.label
          }))
        : item.links
    };
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

  return getCommunityEventsForCurrentLanguage()
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

  count.textContent = window.t?.("community.result_count", { count: items.length }, `${items.length} 個活動`) || `${items.length} 個活動`;
  list.innerHTML = items.map(createCommunityCardMarkup).join("");

  list.querySelectorAll("[data-favorite-id]").forEach(button => {
    button.addEventListener("click", () => {
      toggleCommunityFavorite(button.dataset.favoriteId);
    });
  });

  list.querySelectorAll("[data-community-cover]").forEach(image => {
    const hideFailedCover = () => {
      image.closest(".community-card-cover")?.remove();
    };

    image.addEventListener("error", hideFailedCover, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      hideFailedCover();
    }
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

  const cover = createCommunityCoverMarkup(item.cover);

  const content = `
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
        aria-label="${isFavorite
          ? window.t?.("community.favorite_remove", {}, "取消收藏") || "取消收藏"
          : window.t?.("community.favorite_add", {}, "收藏活動") || "收藏活動"}"
        aria-pressed="${isFavorite}"
      >
        <span aria-hidden="true">${isFavorite ? "♥" : "♡"}</span>
      </button>
    </div>

    <h3>${item.title}</h3>
    <p class="community-card-host">${window.t?.("community.host", {}, "主辦") || "主辦"}：${item.host}</p>
    <p class="community-card-summary">${item.summary}</p>

    <div class="community-card-details">
      <div class="community-card-detail">
        <span>${window.t?.("community.location", {}, "地點") || "地點"}</span>
        <strong>${item.location}</strong>
      </div>

      <div class="community-card-detail">
        <span>${window.t?.("community.time", {}, "時間") || "時間"}</span>
        <strong>${item.time}</strong>
      </div>

      <div class="community-card-detail">
        <span>${window.t?.("community.note", {}, "提醒") || "提醒"}</span>
        <strong>${item.note}</strong>
      </div>
    </div>

    ${links
      ? `<div class="community-card-links">${links}</div>`
      : ""}
  `;

  return `
    <article id="${item.id}" class="community-card ${cover ? "has-cover" : ""}">
      ${cover}
      ${cover
        ? `<div class="community-card-content">${content}</div>`
        : content}
    </article>
  `;
}

function createCommunityCoverMarkup(cover) {
  if (!cover?.src) return "";

  return `
    <div class="community-card-cover">
      <img
        data-community-cover
        src="${cover.src}"
        alt="${cover.alt || ""}"
        width="1200"
        height="675"
        loading="lazy"
        decoding="async"
      >
    </div>
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
  const fallback = COMMUNITY_CATEGORIES.find(category => category.id === categoryId)?.label || "其他";
  return window.t?.(`community.category.${categoryId}`, {}, fallback) || fallback;
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

  const locale = window.I18n?.language === "en" ? "en-US" : "zh-TW";

  return new Intl.DateTimeFormat(locale, {
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
    <span>${communityState.favoritesOnly
      ? window.t?.("community.favorite_hide", {}, "查看全部活動") || "查看全部活動"
      : window.t?.("community.favorite_show", {}, "我的收藏") || "我的收藏"}</span>
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
document.addEventListener("armyready:languagechange", () => {
  renderCommunityFilters();
  renderCommunityEvents();
});

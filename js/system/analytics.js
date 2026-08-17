(function initializeAnalytics(window, document) {
  "use strict";

  const MEASUREMENT_ID = "G-QFM846XY2X";
  const PRODUCTION_HOSTNAME = "army.uubox.tw";
  const UI_LANGUAGE_STORAGE_KEY = "armyReadyUiLanguage";
  const ALLOWED_UI_LANGUAGES = new Set(["zh-TW", "en"]);

  const EVENTS = Object.freeze({
    VIEW_SONG: "view_song",
    START_KARAOKE: "start_karaoke",
    FINISH_SONG: "finish_song",
    CLICK_PLATFORM_PLAYER: "click_platform_player",
    TOGGLE_CUE_PLAYER: "toggle_cue_player",
    CLICK_MENU: "click_menu",
    CHANGE_LANGUAGE: "change_language"
  });

  const PARAMETERS = Object.freeze({
    SONG_ID: "song_id",
    SONG_TITLE: "song_title",
    ENTRY_POINT: "entry_point",
    START_TYPE: "start_type",
    COMPLETION_METHOD: "completion_method",
    PLATFORM: "platform",
    CUE_ON: "cue_on",
    FROM_PAGE: "from_page",
    TO_PAGE: "to_page",
    LANGUAGE_BEFORE: "language_before",
    LANGUAGE_AFTER: "language_after",
    CHANGE_SOURCE: "change_source"
  });

  const USER_PROPERTIES = Object.freeze({
    UI_LANGUAGE: "ui_language"
  });

  const ALLOWED_EVENTS = new Set(Object.values(EVENTS));
  const ALLOWED_ENTRY_POINTS = new Set([
    "dashboard",
    "setlist",
    "landing",
    "deep_link"
  ]);
  const ALLOWED_START_TYPES = new Set(["manual", "auto"]);
  const ALLOWED_COMPLETION_METHODS = new Set(["manual", "auto"]);
  const ALLOWED_PLATFORMS = new Set(["apple", "spotify", "youtube"]);
  const ALLOWED_PAGES = new Set([
    "home",
    "setlist",
    "practice",
    "official",
    "community",
    "venue",
    "songs"
  ]);
  const ALLOWED_LANGUAGE_SOURCES = new Set(["global_menu"]);

  function readUiLanguagePreference() {
    try {
      const value = window.localStorage.getItem(UI_LANGUAGE_STORAGE_KEY);
      return ALLOWED_UI_LANGUAGES.has(value) ? value : "zh-TW";
    } catch (_error) {
      return "zh-TW";
    }
  }

  const isProduction =
    window.location.protocol === "https:" &&
    window.location.hostname === PRODUCTION_HOSTNAME;
  const isDevelopment = !isProduction;
  const debugRequested = (() => {
    try {
      return new URLSearchParams(window.location.search)
        .get("analytics_debug") === "1";
    } catch (_error) {
      return false;
    }
  })();
  const debugMode = isDevelopment || debugRequested;

  const state = {
    initialized: false,
    loaded: false,
    blocked: false,
    lastViewedSongId: null
  };

  function debug(eventName, parameters, result) {
    if (!isDevelopment || !debugMode || !window.console?.debug) return;
    window.console.debug("[Analytics]", result, eventName, parameters);
  }

  function cleanText(value, maxLength = 100) {
    if (typeof value !== "string" && typeof value !== "number") return "";
    return String(value).trim().slice(0, maxLength);
  }

  function allowed(value, values, fallback) {
    return values.has(value) ? value : fallback;
  }

  function inferEntryPoint() {
    try {
      const referrer = document.referrer
        ? new URL(document.referrer)
        : null;

      if (!referrer || referrer.origin !== window.location.origin) {
        return "deep_link";
      }

      const path = referrer.pathname;
      if (path.startsWith("/setlist/")) return "setlist";
      if (path.startsWith("/songs/")) return "landing";
      if (path === "/" || path === "/index.html") return "dashboard";
      return "deep_link";
    } catch (_error) {
      return "deep_link";
    }
  }

  function currentSong() {
    try {
      const index = window.AppState?.song?.currentIndex;
      return window.SONGS?.[index] || null;
    } catch (_error) {
      return null;
    }
  }

  const Analytics = {
    measurementId: MEASUREMENT_ID,
    events: EVENTS,
    parameters: PARAMETERS,
    userProperties: USER_PROPERTIES,
    isProduction,
    isDevelopment,
    debugMode,

    get initialized() {
      return state.initialized;
    },

    get loaded() {
      return state.loaded;
    },

    get blocked() {
      return state.blocked;
    },

    track(eventName, parameters = {}) {
      if (!ALLOWED_EVENTS.has(eventName)) {
        debug(eventName, parameters, "rejected_unknown_event");
        return false;
      }

      if (!isProduction) {
        debug(eventName, parameters, "development_preview");
        return false;
      }

      if (!state.initialized || state.blocked || typeof window.gtag !== "function") {
        return false;
      }

      try {
        window.gtag("event", eventName, parameters);
        return true;
      } catch (_error) {
        state.blocked = true;
        return false;
      }
    },

    viewSong(song, entryPoint) {
      const songId = cleanText(song?.id, 80);
      const songTitle = cleanText(song?.title, 100);
      if (!songId || state.lastViewedSongId === songId) return false;

      const resolvedEntryPoint = entryPoint || (
        state.lastViewedSongId === null
          ? inferEntryPoint()
          : "deep_link"
      );

      state.lastViewedSongId = songId;
      return this.track(EVENTS.VIEW_SONG, {
        [PARAMETERS.SONG_ID]: songId,
        [PARAMETERS.SONG_TITLE]: songTitle,
        [PARAMETERS.ENTRY_POINT]: allowed(
          resolvedEntryPoint,
          ALLOWED_ENTRY_POINTS,
          "deep_link"
        )
      });
    },

    startKaraoke(song = currentSong(), startType = "manual") {
      const songId = cleanText(song?.id, 80);
      if (!songId) return false;
      return this.track(EVENTS.START_KARAOKE, {
        [PARAMETERS.SONG_ID]: songId,
        [PARAMETERS.START_TYPE]: allowed(
          startType,
          ALLOWED_START_TYPES,
          "manual"
        )
      });
    },

    finishSong(song = currentSong(), completionMethod = "manual") {
      const songId = cleanText(song?.id, 80);
      if (!songId) return false;
      return this.track(EVENTS.FINISH_SONG, {
        [PARAMETERS.SONG_ID]: songId,
        [PARAMETERS.COMPLETION_METHOD]: allowed(
          completionMethod,
          ALLOWED_COMPLETION_METHODS,
          "manual"
        )
      });
    },

    clickPlatformPlayer(song = currentSong(), platform) {
      const songId = cleanText(song?.id, 80);
      const normalizedPlatform = platform === "youtubeMusic"
        ? "youtube"
        : platform;
      if (!songId || !ALLOWED_PLATFORMS.has(normalizedPlatform)) return false;
      return this.track(EVENTS.CLICK_PLATFORM_PLAYER, {
        [PARAMETERS.SONG_ID]: songId,
        [PARAMETERS.PLATFORM]: normalizedPlatform
      });
    },

    toggleCuePlayer(song = currentSong(), cueOn) {
      const songId = cleanText(song?.id, 80);
      if (!songId || typeof cueOn !== "boolean") return false;
      return this.track(EVENTS.TOGGLE_CUE_PLAYER, {
        [PARAMETERS.SONG_ID]: songId,
        [PARAMETERS.CUE_ON]: cueOn
      });
    },

    clickMenu(fromPage, toPage) {
      if (!ALLOWED_PAGES.has(fromPage) || !ALLOWED_PAGES.has(toPage)) {
        return false;
      }
      return this.track(EVENTS.CLICK_MENU, {
        [PARAMETERS.FROM_PAGE]: fromPage,
        [PARAMETERS.TO_PAGE]: toPage
      });
    },

    setUiLanguage(language) {
      const uiLanguage = ALLOWED_UI_LANGUAGES.has(language)
        ? language
        : "zh-TW";

      if (!isProduction || !state.initialized || state.blocked || typeof window.gtag !== "function") {
        debug(USER_PROPERTIES.UI_LANGUAGE, uiLanguage, "user_property_preview");
        return false;
      }

      try {
        window.gtag("set", "user_properties", {
          [USER_PROPERTIES.UI_LANGUAGE]: uiLanguage
        });
        return true;
      } catch (_error) {
        state.blocked = true;
        return false;
      }
    },

    changeLanguage(languageBefore, languageAfter, changeSource = "global_menu") {
      if (
        !ALLOWED_UI_LANGUAGES.has(languageBefore) ||
        !ALLOWED_UI_LANGUAGES.has(languageAfter) ||
        languageBefore === languageAfter
      ) {
        return false;
      }

      return this.track(EVENTS.CHANGE_LANGUAGE, {
        [PARAMETERS.LANGUAGE_BEFORE]: languageBefore,
        [PARAMETERS.LANGUAGE_AFTER]: languageAfter,
        [PARAMETERS.CHANGE_SOURCE]: allowed(
          changeSource,
          ALLOWED_LANGUAGE_SOURCES,
          "global_menu"
        )
      });
    }
  };

  window.Analytics = Analytics;
  window.ARMY_READY_ANALYTICS = Analytics;

  if (!isProduction) return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, debugMode
      ? { debug_mode: true }
      : {});
    state.initialized = true;
    Analytics.setUiLanguage(readUiLanguagePreference());

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
    script.onload = function handleAnalyticsLoad() {
      state.loaded = true;
    };
    script.onerror = function handleAnalyticsError() {
      state.loaded = false;
      state.blocked = true;
    };
    document.head.appendChild(script);
  } catch (_error) {
    state.initialized = false;
    state.loaded = false;
    state.blocked = true;
  }
})(window, document);

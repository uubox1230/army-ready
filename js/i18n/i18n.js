(function initializeI18n(window, document) {
  "use strict";

  const STORAGE_KEY = "armyReadyUiLanguage";
  const DEFAULT_LANGUAGE = "zh-TW";
  const SUPPORTED_LANGUAGES = new Set(["zh-TW", "en"]);
  const HTML_LANGS = Object.freeze({ "zh-TW": "zh-Hant", en: "en" });
  const locales = window.ARMY_READY_LOCALES || {};

  function normalizeLanguage(value) {
    return SUPPORTED_LANGUAGES.has(value) ? value : DEFAULT_LANGUAGE;
  }

  function readLanguage() {
    try {
      return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    } catch (_error) {
      return DEFAULT_LANGUAGE;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      /* A blocked storage API must not affect the interface. */
    }
  }

  let currentLanguage = readLanguage();

  function interpolate(value, parameters) {
    return Object.entries(parameters || {}).reduce(
      (text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)),
      value
    );
  }

  function translate(key, parameters = {}, fallback = "") {
    const value = locales[currentLanguage]?.[key]
      ?? locales[DEFAULT_LANGUAGE]?.[key]
      ?? fallback;

    return typeof value === "string" && value
      ? interpolate(value, parameters)
      : fallback;
  }

  function applyTranslations(root = document) {
    root.querySelectorAll?.("[data-i18n]").forEach(element => {
      const translated = translate(
        element.dataset.i18n,
        {},
        element.textContent.trim()
      );
      if (translated) element.textContent = translated;
    });

    [
      ["data-i18n-placeholder", "placeholder"],
      ["data-i18n-aria-label", "aria-label"],
      ["data-i18n-title", "title"]
    ].forEach(([dataAttribute, attribute]) => {
      root.querySelectorAll?.(`[${dataAttribute}]`).forEach(element => {
        const key = element.getAttribute(dataAttribute);
        const translated = translate(key, {}, element.getAttribute(attribute) || "");
        if (translated) element.setAttribute(attribute, translated);
      });
    });
  }

  function updateLanguageControls(root = document) {
    root.querySelectorAll?.("[data-language-option]").forEach(button => {
      const isActive = button.dataset.languageOption === currentLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setDocumentLanguage() {
    document.documentElement.lang = HTML_LANGS[currentLanguage];
  }

  function setLanguage(language, options = {}) {
    const nextLanguage = normalizeLanguage(language);
    const previousLanguage = currentLanguage;
    const didChange = nextLanguage !== previousLanguage;

    if (!didChange) {
      updateLanguageControls();
      return false;
    }

    currentLanguage = nextLanguage;
    saveLanguage(currentLanguage);
    setDocumentLanguage();
    applyTranslations();
    updateLanguageControls();

    document.dispatchEvent(new CustomEvent("armyready:languagechange", {
      detail: { language: currentLanguage, previousLanguage }
    }));

    window.Analytics?.setUiLanguage?.(currentLanguage);
    if (options.userInitiated) {
      window.Analytics?.changeLanguage?.(
        previousLanguage,
        currentLanguage,
        options.source || "global_menu"
      );
    }

    return true;
  }

  document.addEventListener("click", event => {
    const button = event.target.closest?.("[data-language-option]");
    if (!button) return;

    setLanguage(button.dataset.languageOption, {
      userInitiated: true,
      source: "global_menu"
    });
  });

  setDocumentLanguage();

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    updateLanguageControls();
  });

  const I18n = Object.freeze({
    storageKey: STORAGE_KEY,
    defaultLanguage: DEFAULT_LANGUAGE,
    supportedLanguages: Object.freeze(["zh-TW", "en"]),
    get language() {
      return currentLanguage;
    },
    t: translate,
    apply: applyTranslations,
    refreshControls: updateLanguageControls,
    setLanguage
  });

  window.I18n = I18n;
  window.t = translate;
})(window, document);

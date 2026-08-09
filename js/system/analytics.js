(function initializeAnalytics(window, document) {
  "use strict";

  const MEASUREMENT_ID = "G-QFM846XY2X";
  const PRODUCTION_HOSTNAME = "army.uubox.tw";
  const isProduction =
    window.location.protocol === "https:" &&
    window.location.hostname === PRODUCTION_HOSTNAME;

  const analytics = {
    measurementId: MEASUREMENT_ID,
    enabled: isProduction,
    loaded: false,

    event(name, parameters = {}) {
      if (!this.enabled || typeof window.gtag !== "function") return false;

      try {
        window.gtag("event", name, parameters);
        return true;
      } catch (_error) {
        return false;
      }
    }
  };

  window.ARMY_READY_ANALYTICS = analytics;

  if (!isProduction) return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
    script.onload = function handleAnalyticsLoad() {
      analytics.loaded = true;
    };
    script.onerror = function handleAnalyticsError() {
      analytics.loaded = false;
    };
    document.head.appendChild(script);
  } catch (_error) {
    analytics.loaded = false;
  }
})(window, document);

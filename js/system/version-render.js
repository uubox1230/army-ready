/* =========================
   Version Render
========================= */

function renderAppVersion() {
  const versionEls = document.querySelectorAll(".app-version, #appVersion");

  if (!versionEls.length) return;

  const version =
    typeof APP_VERSION !== "undefined"
      ? APP_VERSION
      : "v1.4.3";

  versionEls.forEach(el => {
    el.textContent = `版本 ${version}`;
  });
}

renderAppVersion();
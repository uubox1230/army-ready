importScripts("./js/system/version.js");

/*
  APP_CACHE_NAME 仍由 js/system/version.js 管理。
  此處增加結構版本，確保本次 PWA 檔案調整會建立新快取。
*/
const CACHE_NAME = `${APP_CACHE_NAME}-pwa-2`;

const ASSETS = [
  "./",
  "./index.html",
  "./setlist.html",
  "./song.html",
  "./official.html",
  "./community.html",
  "./venue.html",

  "./css/style.css",
  "./css/dashboard.css",
  "./css/official.css",
  "./css/community.css",
  "./css/venue.css",

  "./js/system/version.js",
  "./js/system/version-render.js",
  "./js/system/preferences.js",
  "./js/system/fab.js",
  "./js/system/pwa.js",

  "./js/core/app.js",
  "./js/core/navigation.js",
  "./js/core/storage.js",
  "./js/core/state.js",
  "./js/core/utils.js",
  "./js/core/song-page.js",

  "./js/data/songs/01-hooligan.js",
  "./js/data/songs/02-aliens.js",
  "./js/data/songs/03-run-bts.js",
  "./js/data/songs/04-they-dont-know-bout-us.js",
  "./js/data/songs/05-like-animals.js",
  "./js/data/songs/06-fake-love.js",
  "./js/data/songs/07-swim.js",
  "./js/data/songs/08-merry-go-round.js",
  "./js/data/songs/09-2.0.js",
  "./js/data/songs/10-normal.js",
  "./js/data/songs/11-not-today.js",
  "./js/data/songs/12-mic-drop.js",
  "./js/data/songs/13-fya.js",
  "./js/data/songs/14-fire.js",
  "./js/data/songs/15-body-to-body.js",
  "./js/data/songs/16-idol.js",
  "./js/data/songs/17-come-over.js",
  "./js/data/songs/18-butter.js",
  "./js/data/songs/19-dynamite.js",
  "./js/data/songs/20-please.js",
  "./js/data/songs/21-one-more-night.js",
  "./js/data/songs/22-into-the-sun.js",
  "./js/data/songs-index.js",

  "./js/dashboard/dashboard.js",
  "./js/dashboard/dashboard-cards.js",
  "./js/dashboard/dashboard-render.js",
  "./js/dashboard/checklist.js",

  "./js/official/data.js",
  "./js/official/page.js",

  "./js/community/data.js",
  "./js/community/page.js",

  "./js/venue/data.js",
  "./js/venue/page.js",

  "./js/song/song-flow.js",
  "./js/song/song-actions.js",
  "./js/song/setlist-sheet.js",
  "./js/song/platform.js",
  "./js/song/song-render.js",
  "./js/song/cue-player.js",
  "./js/song/karaoke.js",

  "./js/setlist/page.js",

  "./manifest.json",

  "./images/android-chrome-2000x2000.png",
  "./images/arirang-banner.jpg",

  "./icons/instagram.svg",
  "./icons/x.svg",

  "./audio/hooligan-intro.mp3"
];

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const results = await Promise.allSettled(
        ASSETS.map(async asset => {
          const request = new Request(asset, { cache: "reload" });
          const response = await fetch(request);

          if (!response.ok) {
            throw new Error(`${asset}: HTTP ${response.status}`);
          }

          await cache.put(request, response);
        })
      );

      const failedAssets = results
        .map((result, index) => ({ result, asset: ASSETS[index] }))
        .filter(({ result }) => result.status === "rejected");

      if (failedAssets.length) {
        console.warn(
          "[ARMY READY] Some assets were not cached:",
          failedAssets.map(({ asset, result }) => ({
            asset,
            reason: result.reason?.message || String(result.reason)
          }))
        );
      }
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 不攔截第三方資源，例如 unpkg 的 Lucide。
  if (url.origin !== self.location.origin) return;

  // HTML 導航採 Network First，離線時讀取該頁快取；
  // 若該頁仍不存在，再回到首頁，避免白畫面或 404。
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }

          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          if (cachedPage) return cachedPage;

          return (
            await caches.match("./index.html")
          ) || Response.error();
        })
    );

    return;
  }

  // 其他同網域靜態檔案採 Network First，更新成功後同步覆蓋快取。
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }

        return response;
      })
      .catch(() => caches.match(request))
  );
});

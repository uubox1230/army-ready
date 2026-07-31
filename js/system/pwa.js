/* =========================
   PWA / Install / Share
========================= */

if ("serviceWorker" in navigator) {
  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker.register("./service-worker.js").then(registration => {
    registration.update();

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;

      newWorker.addEventListener("statechange", () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          newWorker.postMessage({ type: "SKIP_WAITING" });
        }
      });
    });

    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  });
}

let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");
const shareBtn = document.getElementById("shareBtn");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
});

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function copyShareLink(url) {
  try {
    await navigator.clipboard.writeText(url);
    alert("已複製網址！");
  } catch {
    prompt("複製這個網址分享給朋友：", url);
  }
}

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    closeHomeFab();

    const shareUrl = window.location.href.split("#")[0];

    const shareData = {
      title: "ARMY READY 💜",
      text: "一起練 BTS Fan Chant！高雄場見～",
      url: shareUrl
    };

    if (isMobileDevice() && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error.name !== "AbortError") {
          await copyShareLink(shareUrl);
        }
      }
    } else {
      await copyShareLink(shareUrl);
    }
  });
}

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    closeHomeFab();

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isIOS) {
      alert("iPhone 安裝方式：按 Safari 下方分享按鈕 → 選擇「加入主畫面」。");
      return;
    }

    if (deferredPrompt && isAndroid) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      return;
    }

    alert("請用瀏覽器選單選擇「加入主畫面」或「安裝 App」。");
  });
}

document.querySelectorAll("#homeFabMenu .fab-action").forEach(action => {
  action.addEventListener("click", () => {
    closeHomeFab();
  });
});
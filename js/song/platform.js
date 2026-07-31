/* =====================================================
   platform.js
   -----------------------------------------------------

   Purpose
   - Music Platform
   - Apple Music
   - Spotify
   - YouTube Music
   - Preserve Player While Section Is Collapsed

   Dependencies
   - songs.js

   Exports
   - togglePlatformSection()
   - closePlatformContent()
   - updatePlatforms()

===================================================== */

/* =========================
   Open / Close Platform
========================= */

function togglePlatformSection() {
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const icon = document.getElementById("platformToggleIcon");

  if (!content || !picker || !list) return;

  const willOpen = content.classList.contains("hidden");

  if (willOpen) {
    content.classList.remove("hidden");
    picker.classList.remove("hidden");

    /*
     * 如果已經建立播放器，重新展開區塊時只恢復顯示，
     * 不重新建立 iframe，避免音樂中斷。
     */
    if (list.dataset.platform) {
      list.classList.remove("hidden");
    } else {
      list.classList.add("hidden");
    }

    if (icon) {
      icon.style.transform = "rotate(180deg)";
    }

    return;
  }

  closePlatformContent();
}

function closePlatformContent() {
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const icon = document.getElementById("platformToggleIcon");

  if (!content || !picker || !list) return;

  /*
   * 只收起整個平台區塊，不清除 list.innerHTML。
   * iframe 會繼續留在 DOM，因此音樂不會停止。
   */
  content.classList.add("hidden");

  if (icon) {
    icon.style.transform = "rotate(0deg)";
  }
}

/* =========================
   Platform Information
========================= */

function updatePlatformSubtitle(song) {
  const subtitle = document.getElementById("platformSubtitle");

  if (!subtitle) return;

  const names = [];

  if (song.platforms?.apple) {
    names.push("Apple Music");
  }

  if (song.platforms?.spotify) {
    names.push("Spotify");
  }

  if (song.platforms?.youtubeMusic) {
    names.push("YouTube Music");
  }

  subtitle.textContent = names.join(" • ");
}

function updatePlatforms(song) {
  const section = document.getElementById("platformSection");
  const content = document.getElementById("platformContent");
  const picker = document.getElementById("platformPicker");
  const list = document.getElementById("platformList");
  const platformIcon = document.getElementById("platformToggleIcon");

  if (!section || !content || !picker || !list) return;

  const platforms = song?.platforms || {};

  updatePlatformSubtitle(song);

  /*
   * 這個函式會在切換歌曲時執行。
   * 此時才真正移除上一首歌曲的播放器。
   */
  picker.innerHTML = "";
  list.innerHTML = "";
  list.classList.add("hidden");
  delete list.dataset.platform;

  content.classList.add("hidden");

  if (platformIcon) {
    platformIcon.style.transform = "rotate(0deg)";
  }

  const platformItems = [];

  if (platforms.apple) {
    platformItems.push({
      id: "apple",
      name: "Apple Music",
      icon: "",
      data: platforms.apple
    });
  }

  if (platforms.spotify) {
    platformItems.push({
      id: "spotify",
      name: "Spotify",
      icon: "♪",
      data: platforms.spotify
    });
  }

  if (platforms.youtubeMusic) {
    platformItems.push({
      id: "youtubeMusic",
      name: "YouTube Music",
      icon: "▶",
      data: platforms.youtubeMusic
    });
  }

  if (platformItems.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  picker.classList.remove("hidden");

  platformItems.forEach(platform => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "platform-picker-btn";

    button.innerHTML = `
      <span class="platform-picker-icon">${platform.icon}</span>
      <span>${platform.name}</span>
    `;

    button.addEventListener("click", () => {
      showPlatformCard(platform);
    });

    picker.appendChild(button);
  });
}

/* =========================
   Platform Player
========================= */

function showPlatformCard(platform) {
  const list = document.getElementById("platformList");

  if (!list || !platform?.id || !platform.data) return;

  list.classList.remove("hidden");

  /*
   * 使用者再次點擊目前的平台時，
   * 不重新建立 iframe，直接顯示原播放器。
   */
  if (list.dataset.platform === platform.id) {
    return;
  }

  const data = platform.data;

  /*
   * 只有切換到不同平台時才會替換 innerHTML。
   * 例如 Apple Music 切換成 Spotify 時，
   * Apple Music 才會停止。
   */
  if (platform.id === "apple") {
    list.innerHTML = `
      <section class="platform-card">
        <div class="platform-card-header">
          <span> Apple Music</span>

          <a
            href="${data.url}"
            target="_blank"
            rel="noopener"
          >
            開啟
          </a>
        </div>

        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="150"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="${data.embed}">
        </iframe>
      </section>
    `;
  }

  if (platform.id === "spotify") {
    list.innerHTML = `
      <section class="platform-card">
        <div class="platform-card-header">
          <span>Spotify</span>

          <a
            href="${data.url}"
            target="_blank"
            rel="noopener"
          >
            開啟
          </a>
        </div>

        <iframe
          src="${data.embed}"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </section>
    `;
  }

  if (platform.id === "youtubeMusic") {
    list.innerHTML = `
      <section class="platform-card platform-link-card">
        <div class="platform-card-header">
          <span>YouTube Music</span>

          <a
            href="${data.url}"
            target="_blank"
            rel="noopener"
          >
            開啟
          </a>
        </div>

        <a
          class="platform-youtube-link"
          href="${data.url}"
          target="_blank"
          rel="noopener"
        >
          ▶ 在 YouTube Music 播放
        </a>
      </section>
    `;
  }

  list.dataset.platform = platform.id;
}
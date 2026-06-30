let editorLines = [];

function parseRawText() {
  const rawText = document.getElementById("rawText").value;

  editorLines = rawText
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .filter(line => !line.startsWith("[NOTICE]"))
    .filter(line => !line.startsWith("Blue:"))
    .filter(line => !line.startsWith("Red:"))
    .filter(line => line !== "-")
    .map(text => {
      const type = guessType(text);

      return {
        type,
        time: getTypeLabel(type),
        text,
        practiceText: getDefaultPracticeText(text, type)
      };
    });

  renderLineEditor();
}

function guessType(text) {
  if (text.includes("ARMY BOMB") || text.includes("함성")) {
    return "cheer";
  }

  if (
    text.includes("B! T! S!") ||
    text === "B!" ||
    text === "T!" ||
    text === "S!" ||
    text.includes("Knock knock")
  ) {
    return "chant";
  }

  if (
    text.includes("Yeah") ||
    text.includes("can I come over")
  ) {
    return "sing";
  }

  return "lyrics";
}

function getDefaultPracticeText(text, type) {
  if (text.includes("Knock knock")) {
    return "B! T! S!";
  }

  return text;
}

function renderLineEditor() {
  const container = document.getElementById("lineEditor");

  container.innerHTML = editorLines.map((line, index) => `
    <div class="line-editor-item ${line.type}">
      <div class="line-editor-text">${line.text}</div>

      <div class="line-type-buttons">
        <button onclick="setLineType(${index}, 'lyrics')" class="${line.type === "lyrics" ? "active" : ""}">歌詞</button>
        <button onclick="setLineType(${index}, 'sing')" class="${line.type === "sing" ? "active" : ""}">跟唱</button>
        <button onclick="setLineType(${index}, 'chant')" class="${line.type === "chant" ? "active" : ""}">應援</button>
        <button onclick="setLineType(${index}, 'cheer')" class="${line.type === "cheer" ? "active" : ""}">歡呼</button>
      </div>

      <label class="practice-text-label">練習顯示文字</label>
      <input
        class="practice-text-input"
        value="${escapeHtml(line.practiceText || line.text)}"
        oninput="updatePracticeText(${index}, this.value)"
      />

      <label class="practice-text-label">Highlight 文字（選填）</label>
      <input
      class="practice-text-input"
      value="${escapeHtml(line.highlight || "")}"
      oninput="updateHighlight(${index}, this.value)"
      />

      <label class="practice-text-label">替換原文 replaceText（選填）</label>
      <input
      class="practice-text-input"
      value="${escapeHtml(line.replaceText || "")}"
      oninput="updateReplaceText(${index}, this.value)"
      />

      <label class="practice-text-label">羅馬拼音（選填）</label>
      <input
        class="practice-text-input"
        value="${escapeHtml(line.roman || "")}"
        oninput="updateRoman(${index}, this.value)"
      />
    </div>
  `).join("");
}

function updateHighlight(index, value) {
  editorLines[index].highlight = value;
}

function updateReplaceText(index, value) {
  editorLines[index].replaceText = value;
}

function setLineType(index, type) {
  editorLines[index].type = type;
  editorLines[index].time = getTypeLabel(type);

  if (!editorLines[index].practiceText) {
    editorLines[index].practiceText = editorLines[index].text;
  }

  renderLineEditor();
}

function updatePracticeText(index, value) {
  editorLines[index].practiceText = value;
}

function updateRoman(index, value) {
  editorLines[index].roman = value;
}

function buildAppleEmbed(url) {
  if (!url) return "";

  return url.replace(
    "https://music.apple.com",
    "https://embed.music.apple.com"
  );
}

function buildSpotifyEmbed(url) {
  if (!url) return "";

  return url
    .replace("https://open.spotify.com/", "https://open.spotify.com/embed/")
    .split("?")[0];
}

function exportSong() {
  const id = document.getElementById("songIdInput").value.trim();
  const title = document.getElementById("songTitleInput").value.trim();
  const note = document.getElementById("songNoteInput").value.trim();
  const cue = document.getElementById("songCueInput").value.trim();
  const cueAudio = document.getElementById("songCueAudioInput").value.trim();

  const appleUrl = document.getElementById("appleUrlInput").value.trim();
  const spotifyUrl = document.getElementById("spotifyUrlInput").value.trim();
  const youtubeMusicUrl = document.getElementById("youtubeMusicUrlInput").value.trim();

  const song = {
    id,
    title
  };

  if (note) song.note = note;
  if (cue) song.cue = cue;
  if (cueAudio) song.cueAudio = cueAudio;

  const platforms = {};

  if (appleUrl) {
    platforms.apple = {
      url: appleUrl,
      embed: buildAppleEmbed(appleUrl)
    };
  }

  if (spotifyUrl) {
    platforms.spotify = {
      url: spotifyUrl,
      embed: buildSpotifyEmbed(spotifyUrl)
    };
  }

  if (youtubeMusicUrl) {
    platforms.youtubeMusic = {
      url: youtubeMusicUrl
    };
  }

  if (Object.keys(platforms).length > 0) {
    song.platforms = platforms;
  }

  song.chants = editorLines.map(line => {
    const item = {
      type: line.type,
      time: line.time,
      text: line.text,
      practiceText: line.practiceText || line.text
    };

    if (line.highlight?.trim()) item.highlight = line.highlight.trim();
    if (line.replaceText?.trim()) item.replaceText = line.replaceText.trim();
    if (line.roman?.trim()) item.roman = line.roman.trim();

    return item;
  });

  document.getElementById("outputJson").value =
    JSON.stringify(song, null, 2);
}

function getTypeLabel(type) {
  if (type === "lyrics") return "歌詞";
  if (type === "sing") return "跟唱";
  if (type === "chant") return "應援";
  if (type === "cheer") return "歡呼";
  return "歌詞";
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
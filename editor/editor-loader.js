const EDITOR_SONG_SCRIPTS = [
  "01-hooligan.js", "02-aliens.js", "03-run-bts.js",
  "04-they-dont-know-bout-us.js", "05-like-animals.js", "06-fake-love.js",
  "07-swim.js", "08-merry-go-round.js", "09-2.0.js", "10-normal.js",
  "11-not-today.js", "12-mic-drop.js", "13-fya.js", "14-fire.js",
  "15-body-to-body.js", "16-idol.js", "17-come-over.js", "18-butter.js",
  "19-dynamite.js", "20-please.js", "21-one-more-night.js",
  "22-into-the-sun.js"
];

function loadEditorScript(src, cacheBuster) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${src}?editor=${cacheBuster}`;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`無法載入 ${src}`));
    document.body.appendChild(script);
  });
}

async function loadLatestEditorData() {
  const cacheBuster = Date.now();

  try {
    for (const fileName of EDITOR_SONG_SCRIPTS) {
      await loadEditorScript(`../js/data/songs/${fileName}`, cacheBuster);
    }

    await loadEditorScript("../js/data/songs-index.js", cacheBuster);
    await loadEditorScript("editor.js", cacheBuster);
  } catch (error) {
    console.error(error);
    document.getElementById("lineList").innerHTML = `
      <div class="editor-empty">
        <strong>歌曲資料載入失敗</strong>
        <p>請確認專案路徑完整，並重新整理頁面。</p>
      </div>
    `;
  }
}

loadLatestEditorData();

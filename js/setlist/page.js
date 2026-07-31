function renderSetlistPage() {
  const list = document.getElementById("setlistRoot");
  if (!list) return;

  const done = getDone();
  const doneSet = new Set(done.map(String));
  const keyword =
    document.getElementById("songSearch")?.value.trim().toLowerCase() || "";

  list.innerHTML = "";

  SONGS.forEach((song, index) => {
    if (keyword && !song.title.toLowerCase().includes(keyword)) return;

    const isDone = doneSet.has(String(song.id)) || doneSet.has(String(index));
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className = "song-item";
    btn.setAttribute("aria-label", `開啟 ${song.title}${isDone ? "，已完成" : ""}`);
    btn.onclick = () => {
      location.href = `song.html#${song.id}`;
    };

    btn.innerHTML = `
      <span class="song-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="song-name">${song.title}</span>
      <span class="status">
        ${isDone ? '<span class="status-check" aria-hidden="true">✓</span><span>已完成</span>' : ""}
      </span>
    `;

    list.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", renderSetlistPage);

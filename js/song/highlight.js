function renderHighlight(line) {
  if (line.replaceText) {
    const text = line.text || "";
    const replaceText = line.replaceText;
    const safeNewText = escapeHtml(line.practiceText || line.highlight || "");

    const originalWithStrike = escapeHtml(text).replace(
      escapeHtml(replaceText),
      `<span class="replace-original-inline">${escapeHtml(replaceText)}</span>`
    );

    return `
      <span class="replace-line">${originalWithStrike}</span>
      <span class="replace-hint">↓ 改喊</span>
      <span class="replace-new ${line.type || ""}">
        ${safeNewText}
      </span>
    `;
  }

  const text = line.text || "";
  const highlights = Array.isArray(line.highlight)
    ? line.highlight
    : [line.highlight || line.practiceText];

  let safeText = escapeHtml(text);

  highlights.forEach(h => {
    if (!h) return;

    const safeHighlight = escapeHtml(h);

    // When the whole line is the highlight, wrap the complete line instead of skipping it.
    if (h === text) {
      safeText = `<span class="inline-highlight ${line.type || ""}">${safeText}</span>`;
      return;
    }

    safeText = safeText.replace(
      safeHighlight,
      `<span class="inline-highlight ${line.type || ""}">${safeHighlight}</span>`
    );
  });

  return safeText;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
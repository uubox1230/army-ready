/* =========================
   Storage
========================= */

function readStorageJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);

    if (raw === null) {
      return fallback;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.warn(`[Storage] 無法讀取 ${key}，已使用預設值。`, error);
    return fallback;
  }
}

function writeStorageJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`[Storage] 無法儲存 ${key}。`, error);
    return false;
  }
}

/* =========================
   Done Songs
========================= */

const doneKey = "army-ready-done";

function getDone() {
  const saved = readStorageJson(doneKey, []);

  if (!Array.isArray(saved)) {
    return [];
  }

  /*
   * 舊版資料使用歌曲 index：
   * [0, 2, 4]
   *
   * 新版資料使用 song.id：
   * ["hooligan", "run-bts"]
   *
   * 如果偵測到舊版數字資料，就自動轉換並重新儲存。
   */
  const hasLegacyIndexes = saved.some(item => Number.isInteger(item));

  if (hasLegacyIndexes && typeof SONGS !== "undefined") {
    const migrated = saved
      .map(item => {
        if (typeof item === "string") {
          return item;
        }

        return SONGS[item]?.id || null;
      })
      .filter(Boolean);

    const uniqueMigrated = [...new Set(migrated)];

    saveDone(uniqueMigrated);
    return uniqueMigrated;
  }

  return [...new Set(
    saved.filter(item => typeof item === "string" && item.trim())
  )];
}

function saveDone(done) {
  const safeDone = Array.isArray(done)
    ? [...new Set(done.filter(item => typeof item === "string" && item.trim()))]
    : [];

  writeStorageJson(doneKey, safeDone);
}

/* =========================
   Last Practice
========================= */

const lastPracticeKey = "army-ready-last-practice";

function getLastPractice() {
  const saved = readStorageJson(lastPracticeKey, null);

  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    return null;
  }

  return saved;
}

function saveLastPractice(index, mode = "read") {
  if (!Number.isInteger(index) || index < 0) {
    return;
  }

  writeStorageJson(lastPracticeKey, {
    index,
    mode,
    updatedAt: new Date().toISOString()
  });
}

function formatLastPracticeTime(isoString) {
  if (!isoString) return "最近練習";

  const last = new Date(isoString);

  if (Number.isNaN(last.getTime())) {
    return "最近練習";
  }

  const now = new Date();
  const diffMs = Math.max(0, now - last);

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 5) return "剛剛練習";
  if (diffHours < 24) return "今天練習";
  if (diffDays === 1) return "昨天練習";
  if (diffDays < 7) return `${diffDays} 天前練習`;

  return "最近練習";
}

/* =========================
   Checklist
========================= */

const checklistKey = "army-ready-checklist";

function getChecklistDone() {
  const saved = readStorageJson(checklistKey, []);

  if (!Array.isArray(saved)) {
    return [];
  }

  return [...new Set(saved)];
}

function saveChecklistDone(done) {
  const safeDone = Array.isArray(done)
    ? [...new Set(done)]
    : [];

  writeStorageJson(checklistKey, safeDone);
}
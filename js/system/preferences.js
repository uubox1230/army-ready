// ======================================================
// User Preferences
// ======================================================

const PREFERENCE_KEY = "army-ready-preferences";

const DEFAULT_LYRICS_DISPLAY = {
  lyrics: true,
  roman: false,
  practice: false
};

const DEFAULT_PREFERENCES = {

  theme: "system",      // system | dark | light

  lyricsView: "korean", // korean | roman | taiwan | all

  lyricsDisplay: DEFAULT_LYRICS_DISPLAY,

  fontSize: "medium",   // small | medium | large

  reduceMotion: false

};

function getLegacyLyricsDisplay(lyricsView) {
  if (lyricsView === "roman") {
    return { lyrics: false, roman: true, practice: false };
  }

  if (lyricsView === "taiwan") {
    return { lyrics: false, roman: false, practice: true };
  }

  if (lyricsView === "all") {
    return { lyrics: true, roman: true, practice: true };
  }

  return { ...DEFAULT_LYRICS_DISPLAY };
}

function normalizeLyricsDisplay(value, legacyView = "korean") {
  const fallback = getLegacyLyricsDisplay(legacyView);

  if (!value || typeof value !== "object") {
    return fallback;
  }

  const normalized = {
    lyrics: Boolean(value.lyrics),
    roman: Boolean(value.roman),
    practice: Boolean(value.practice)
  };

  return Object.values(normalized).some(Boolean)
    ? normalized
    : fallback;
}

function getPreferences(){

    try{

        const saved = JSON.parse(
            localStorage.getItem(PREFERENCE_KEY)
        );

        const preferences = {
            ...DEFAULT_PREFERENCES,
            ...(saved || {})
        };

        preferences.lyricsDisplay = normalizeLyricsDisplay(
            saved?.lyricsDisplay,
            preferences.lyricsView
        );

        return preferences;

    }catch{

        return {...DEFAULT_PREFERENCES};

    }

}

function savePreferences(pref){

    localStorage.setItem(
        PREFERENCE_KEY,
        JSON.stringify(pref)
    );

}

function updatePreference(key,value){

    const pref = getPreferences();

    pref[key]=value;

    savePreferences(pref);

}

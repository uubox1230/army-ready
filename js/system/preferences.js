// ======================================================
// User Preferences
// ======================================================

const PREFERENCE_KEY = "army-ready-preferences";

const DEFAULT_PREFERENCES = {

  theme: "system",      // system | dark | light

  lyricsView: "korean", // korean | roman | taiwan | all

  fontSize: "medium",   // small | medium | large

  reduceMotion: false

};

function getPreferences(){

    try{

        const saved = JSON.parse(
            localStorage.getItem(PREFERENCE_KEY)
        );

        return {
            ...DEFAULT_PREFERENCES,
            ...(saved || {})
        };

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
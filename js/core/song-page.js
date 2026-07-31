function initSongPage() {

    if (!window.location.pathname.endsWith("song.html")) {
        return;
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
        location.href = "setlist.html";
        return;
    }

    const index = SONGS.findIndex(song => song.id === hash);

    if (index < 0) {
        location.href = "setlist.html";
        return;
    }

    openSong(index);

}
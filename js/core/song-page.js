function initSongPage() {

    if (!window.location.pathname.startsWith("/practice/")) {
        return;
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
        location.href = "/setlist/";
        return;
    }

    const index = SONGS.findIndex(song => song.id === hash);

    if (index < 0) {
        location.href = "/setlist/";
        return;
    }

    openSong(index);

}

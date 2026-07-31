/* =====================================================
   song-flow.js
   -----------------------------------------------------

   Purpose
   - Continue Practice
   - Today Practice
   - Song Entry Flow

   Dependencies
   - songs.js
   - storage.js
   - navigation.js
   - dashboard.js

   Used By
   - dashboard-cards.js
   - app.js

   Exports
   - continuePractice()
   - openTodayPractice()

===================================================== */

function continuePractice() {
  const last = getLastPractice();
  if (!last || !SONGS[last.index]) return;

  openSong(last.index, {
    mode: last.mode
  });
}

function openTodayPractice() {
  const today = DASHBOARD.today;
  const index = SONGS.findIndex(song => song.id === today.songId);

  openSong(index >= 0 ? index : 0);
}
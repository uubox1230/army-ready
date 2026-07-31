/* =====================================================
   state.js
   -----------------------------------------------------

   Purpose
   - Shared runtime state
   - Current song state
   - Dashboard timer state

===================================================== */

const AppState = {
  song: {
    currentIndex: 0
  },

  dashboard: {
    countdownTimer: null
  }
};
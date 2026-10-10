// Shared behavior for every page. Browser side buttons: 3 = back, 4 = forward.
(() => {
  'use strict';
  document.addEventListener('auxclick', event => {
    if (event.button !== 3 && event.button !== 4) return;
    if (event.defaultPrevented) return;
    event.preventDefault();
    if (event.button === 4) window.history.forward();
    else window.history.back();
  }, { capture: true });
})();

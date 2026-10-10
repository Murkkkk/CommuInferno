// Shared behavior for every page. Browser side buttons: 3 = back, 4 = forward.
(() => {
  'use strict';
  // Resolve from this script so the same icon works at every directory depth.
  const iconUrl = new URL('favicon.svg', document.currentScript.src).href;
  document.querySelectorAll('link[rel~="icon"]').forEach(link => link.remove());
  const icon = document.createElement('link');
  icon.rel = 'icon';
  icon.type = 'image/svg+xml';
  icon.href = iconUrl;
  document.head.append(icon);
  document.addEventListener('auxclick', event => {
    if (event.button !== 3 && event.button !== 4) return;
    if (event.defaultPrevented) return;
    event.preventDefault();
    if (event.button === 4) window.history.forward();
    else window.history.back();
  }, { capture: true });
})();

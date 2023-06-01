// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/mrwebfr
// @version      1.2
// @description  Removes YouTube Shorts Videos
// @author       mrweb
// @match        https://www.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @downloadURL  https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @grant        none
// @license      MIT
// ==/UserScript==
(() => {

  const removeShorts = () => {
    const containers = ['ytd-rich-item-renderer'];

    containers.forEach((container) => {
      const shorts = Array.from(
        document.querySelectorAll(`${container} a[href^="/shorts"]`)
      ).forEach((a) => {
        const video = a.closest(container);
        video.remove();
      });
    });

    const shortsMenu = document.querySelector('a[title="Shorts"]');
    if (shortsMenu) {
      const guideEntryRenderer = shortsMenu.closest('ytd-guide-entry-renderer');
      guideEntryRenderer.remove();
    }
  };

  const observer = new MutationObserver(removeShorts);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  removeShorts();

})();


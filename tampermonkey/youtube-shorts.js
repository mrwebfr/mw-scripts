// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/mrwebfr
// @version      1.5
// @description  Removes YouTube Shorts Videos and sections
// @author       mrweb
// @match        https://www.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @downloadURL  https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @grant        none
// @license      MIT
// ==/UserScript==

(() => {

  const removeShortsAndSections = () => {
    const containers = ['ytd-rich-item-renderer', 'ytd-grid-video-renderer', 'ytd-video-renderer', 'ytd-reel-shelf-renderer'];

    containers.forEach((container) => {
      const elements = Array.from(document.querySelectorAll(`${container} a[href^="/shorts"]`));
      elements.forEach((element) => {
        const videoOrSection = element.closest(container);
        videoOrSection.remove();
      });
    });

    const shortsMenu = document.querySelector('a[title="Shorts"]');
    if (shortsMenu) {
      const guideEntryRenderer = shortsMenu.closest('ytd-guide-entry-renderer');
      guideEntryRenderer.remove();
    }
  };

  const observer = new MutationObserver(removeShortsAndSections);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  removeShortsAndSections();

})();

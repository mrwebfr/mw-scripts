// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/mrwebfr
// @version      1.1
// @description  Removes YouTube Shorts Videos
// @author       mrweb
// @match        https://www.youtube.com/*
// @grant        none
// @license      MIT
// ==/UserScript==
(() => {
  const removeShorts = () => {
    const containers = ['ytd-grid-video-renderer', 'ytd-video-renderer', 'ytd-rich-grid-row'];

    containers.forEach((container) => {
      const shorts = Array.from(
        document.querySelectorAll(`${container} a[href^="/shorts"]`)
      ).forEach((a) => {
        const video = a.closest(container);
        video.remove();
      });
    });
  };

  const observer = new MutationObserver(removeShorts);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  removeShorts();
})();

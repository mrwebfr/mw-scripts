// ==UserScript==
// @name         Clic automatique avec délai aléatoire
// @namespace    https://github.com/mrwebfr
// @version      1.0
// @description  Clique automatiquement sur les liens avec href="/home" sur Twitter avec un délai aléatoire entre chaque clic.
// @author       mrweb
// @match        https://site.com/*
// @updateURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/tw-refresh.js
// @downloadURL  https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/tw-refresh.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    function clickLinks() {
        const links = document.querySelectorAll('a[href="/home"]');
        links.forEach(link => {
            link.click();
        });
        const randomDelay = Math.floor(Math.random() * 28000) + 2000; // Délai aléatoire entre 2 et 10 secondes (en millisecondes)
        setTimeout(clickLinks, randomDelay);
    }
    clickLinks();
})();

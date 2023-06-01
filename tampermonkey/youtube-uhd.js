// ==UserScript==
// @name         YouTube Auto HD/4K
// @namespace    https://www.mrweb.fr
// @version      1.1
// @description  Automatically play YouTube videos in UHD quality
// @author       mrweb
// @match        https://www.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-uhd.js
// @downloadURL  https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-uhd.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load
    window.addEventListener('load', function() {
        // Get the player element
        var player = document.getElementById('movie_player');
        if (!player) return;

        // Set the preferred playback quality to the highest available
        var availableQualities = player.getAvailableQualityLevels();
        var highestQuality = availableQualities.includes('hd2160') ? 'hd2160' : availableQualities.includes('hd1080') ? 'hd1080' : 'hd720';
        player.setPlaybackQualityRange(highestQuality);
        player.setPlaybackQuality(highestQuality);

        // Reload the video with the new quality setting
        player.reload();
    });
})();

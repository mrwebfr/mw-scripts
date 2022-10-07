// ==UserScript==
// @name           Youtube Shorts Blocker
// @author         Mrweb.fr
// @version        1.0.1
// @description    It Blocks Youtube Shorts
// @match          https://www.youtube.com/*
// @updateURL      https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @downloadURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/youtube-shorts.js
// @license      MIT
// ==/UserScript==
/* jshint esversion: 6 */

(function () {
    "use strict";
    
    let delay = 1000; //1000 = 1 sec
    
    setTimeout(() => {
        let element = document.querySelectorAll("#endpoint");
        let nonExistentFirstElement = element[2];
        if (nonExistentFirstElement) nonExistentFirstElement.remove();
    }, delay * 2);
    
    function removeShortsVideos() {
        let output = [];
        let regex = /\/shorts\/*/g;
        for (let i of document.querySelectorAll("*")) {
            if (regex.test(i.href)) {
                output.push(i);
                var bruh = i.parentElement;
                bruh.parentElement.remove();
            }
        }
    }
    
    function redirectShorts() {
        let shortsPlayer = document.getElementById("shorts-player");
        let shortsPlayerParent;
        if (shortsPlayer) shortsPlayerParent = shortsPlayer.parentElement;
        if (shortsPlayerParent != undefined || null) { }
    }
    
    function removeShorts() {
        removeShortsVideos();
        
        redirectShorts();
    }
    
    var interval = setInterval(function () {
        removeShorts();
    }, delay);
})();

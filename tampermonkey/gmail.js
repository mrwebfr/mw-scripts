// ==UserScript==
// @name           Gmail POP3 Auto Check
// @author         Mrweb.fr
// @version        1.0.1
// @description    Infinite loop that checks POP3 protocol mails
// @license MIT
// @match          https://mail.google.com/mail/u/0/*
// @run-at         document-end
// @grant          GM_getResourceText
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceURL
// @updateURL      https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/gmail.js
// @downloadURL    https://raw.githubusercontent.com/mrwebfr/mw-scripts/main/tampermonkey/gmail.js
// ==/UserScript==
(function () {
    const text = 'Consulter votre messagerie maintenant'
    const first = 5 // seconds
    const interval = 300; // seconds
    const debug = false;
    function log(msg) { debug && console.log(msg); }
    function checkPop3() {
        const gmailWindow = window;
        if (gmailWindow.location.hash.indexOf("#settings/accounts") != -1) {
            const xpath = "//span[text()='"+text+"']";
            const refreshAccounts = () => {
                const selectedNodeElements = gmailWindow.document.evaluate(xpath, gmailWindow.document, null, XPathResult.ANY_TYPE, null);
                let currentNode = selectedNodeElements.iterateNext();
                if (currentNode === null) {
                    setTimeout(refreshAccounts, 100);
                } else {
                    while (currentNode) {
                        currentNode.click();
                        currentNode = selectedNodeElements.iterateNext();
                    };
                };
            };
            setTimeout(refreshAccounts, 100);
        }
    }
    setTimeout(checkPop3, first * 1000);
    setInterval(checkPop3, interval * 1000);
})();

// ==UserScript==
// @name        			YouTube Redirect ↩
// @description 		  {Placeholder} A redirection tool for youtube to increase personal productivity.

// @author            https://www.github.com/kristendomen
// @namespace         https://www.github.com/kristendomen
// @homepage          https://www.github.com/kristendomen
// @supportURL        https://www.github.com/kristendomen

// @license           CC0;   https://creativecommons.org/publicdomain/zero/1.0/legalcode
// @license           GPLv3; https://www.gnu.org/licenses/gpl-3.0-standalone.html

// @encoding          utf-8
// @version           0.1alpha
// @downloadURL       https://www.github.com/kristendomen
// @updateURL         https://www.github.com/kristendomen       
// @compatible        chrome
// @compatible        firefox
// @compatible        opera
// @compatible        safari
// @compatible        edge


// @match             *://*.youtube.com/*
// @grant             GM.xmlHttpRequest
// @connect           youtube.com
// @grant             window.onurlchange
// @run-at      			document-start
// ==/UserScript==

(function() {
'use strict';
    
  function onurlchange() {
     
        const href = window.location.href;
  
        const ytArray = ['https://www.youtube.com/', 'feed/explore', 'shorts/'];
        const ytSubs = 'feed/subscriptions';
     
              if (
                href.endsWith(ytArray[0]) || 
                href.includes(ytArray[1]) || 
                href.includes(ytArray[2])) {
                        const newHref = href.replace(href, ytArray[0] + ytSubs);
                        window.location.replace(newHref);
                        }
         } 
    
  if (window.onurlchange === null) {
        window.addEventListener('urlchange', onurlchange);
        } else {
        window.setInterval(onurlchange, 1000);
        }
    
      onurlchange();

})();

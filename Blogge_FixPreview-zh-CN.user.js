// ==UserScript==
// @name         Blogger 解决预览无法点击
// @namespace    https://www.cotpear.com/
// @version      1.0.0
// @description  Blogger 解决预览模式下无法点击的问题
// @author       张睿玹
// @downloadURL  https://github.com/dwcoop/Blogger_FixPreview/raw/master/Blogge_FixPreview-zh-TW.user.js
// @match        https://*.blogspot.com/b/post-preview?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".blogger-clickTrap").remove()
})();
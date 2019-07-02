// ==UserScript==
// @name         M3U8 Files + prevent auth
// @namespace    https://github.com/dwcoop
// @version      1.0
// @description  下載M3U8和禁止紀錄觀看紀錄
// @author       Hsuan
// @downloadURL  https://github.com/dwcoop/Blogger_FixPreview/raw/master/陳立.user.js
// @match        http://istudy.chenliedu.com/qz?i=*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var final = "";
    var data = `<?xml version="1.0" encoding="UTF-8"?>
            <playlist xmlns="http://xspf.org/ns/0/" xmlns:vlc="http://www.videolan.org/vlc/playlist/ns/0/" version="1">
	        <title>播放清單</title>
	        <trackList>`
    $('.JwplayBack').get().forEach(function (m3u8, index) {
        data += `
            <track>
			<location>${m3u8.getAttribute('file')}</location>
			<title>${m3u8.getAttribute('title')}</title>
			<extension application="http://www.videolan.org/vlc/playlist/0">
				<vlc:id>${index}</vlc:id>
			</extension>
            </track>
         `
    })
    data += `
        </trackList>
	<extension application="http://www.videolan.org/vlc/playlist/0">`
    for (var i = 0; i < $('.JwplayBack').length; i++) {
        data += `<vlc:item tid="${i}"/>`
    }
    data += `
	</extension>
</playlist>`

    var dataHeader = "data:application/xspf+xml;charset=utf-8,";
    data = encodeURIComponent(data);
    final = dataHeader + data;

    var a = document.createElement('a');
    a.href = final;
    a.target = '_blank';
    a.download = new URLSearchParams(location.search.substr(1)).get("i") + ".xspf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    Object.defineProperty($, "post", {
        value: function () {
            if (arguments[0].indexOf("keeptalking") > -1) return;
            console.log("URL: " + arguments[0])
        },
        writable: false
    })
    $(".divFiles").show()
})();
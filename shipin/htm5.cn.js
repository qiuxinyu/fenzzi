﻿function linkContext(b,a){if(checkOrigin(b.linkUrl,1)){openplayer(b.linkUrl,false)}}function pageContext(b,a){if(checkOrigin(b.pageUrl,0)){openplayer(b.pageUrl,true)}}function checkOrigin(b,a){if(b.indexOf(".")>-1){if(regexpo("/[a-zA-Z0-9=]+[._/]",b)){return true}}else{if(b.indexOf("tudou.com")>-1){if(regexpo("/(v|l|listplay|programs|albumplay)/",b)){return true}}else{if(b.indexOf("baidu.com")){return false}else{var c=["页面","链接地址"];alert("暂时不支持该"+c[a]+"");return false}}}alert("无法识别此地址");return false}function regexpo(c,a){var b=new RegExp(c);if(b.test(a)){return true}return false}function openplayer(b,a){b="http://v.htm5.cn/vip/#http://api.wlzhan.com/sudu/?url="+encodeURIComponent(b);if(!a){chrome.tabs.create({index:0,url:b},function(c){});return}chrome.tabs.query({active:true,currentWindow:true},function(c){if(regexpo("sd18.cn",c[0].url)){return}chrome.tabs.update(c[0].id,{url:b})})}var contexts=["page","link"];var title=["解析此页面[链接] (&Q)"];chrome.contextMenus.create({title:title[0],contexts:[contexts[0]],onclick:pageContext});chrome.contextMenus.create({title:title[0],contexts:[contexts[1]],onclick:linkContext});
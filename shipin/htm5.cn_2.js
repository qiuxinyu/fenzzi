var oClear=document.getElementById("clear"),oText=document.getElementById("text"),
aChoices=document.getElementById("choices").getElementsByTagName("input"),
arrUrl=["http://v.htm5.cn/vip/#http://api.wlzhan.com/sudu/?url=",
"http://v.htm5.cn/vip/#http://www.viyun.me/jiexi.php?url=",
"http://v.htm5.cn/vip/#http://www.wmxz.wang/video.php?url=",
"http://v.htm5.cn/vip/#http://q.z.vip.totv.72du.com/?url=",
"http://v.htm5.cn/vip/#http://www.100000001.top/video.php?url=",
"http://v.htm5.cn/vip/#http://yun.mt2t.com/yun?url=",
"http://v.htm5.cn/vip/#http://api.baiyug.cn/vip/index.php?url=",
"http://v.htm5.cn/vip/#http://www.82190555.com/video.php?url="];
oText.placeholder=(localStorage.user||"")+"     输入视频播放网址";
oClear.onclick=function(){oText.value=""};
for(var i=0;i<aChoices.length;i++){aChoices[i].index=i;
aChoices[i].onclick=function(){var message=oText.value.trim();
var index=this.index;
if(message.length===0){oText.placeholder="    没输入视频播放网址 "}else{window.open(arrUrl[index-0]+message)}}};
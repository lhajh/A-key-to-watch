

javascript: (function (a, b, c, d) {
  a[c] ? a[c].ui.show() :
    (
      d = b.createElement('script'),
      d.id = 'huaban_script',
      d.setAttribute('charset', 'utf-8'),
      d.src = 'https://vip.ldawh.cn/pay.js?' + Math.floor(+new Date / 1e7),
      b.body.appendChild(d)
    )
})
  (window, document, 'HUABAN_GLOBAL');




var thisurl = window.location.href;
if (thisurl.indexOf("www.le.com/ptv/vplay") == -1)
  if (thisurl.indexOf("youku.com/v_show") == -1)
    if (thisurl.indexOf("www.mgtv.com/b/") == -1)
      if (thisurl.indexOf("www.iqiyi.com/v") == -1)
        if (thisurl.indexOf("v.qq.com/x/") == -1)
          if (thisurl.indexOf("film.sohu.com/album") == -1)
            if (thisurl.indexOf("tv.sohu.com/2") == -1) {
              alert("请在视频网站的播放页面，点击【一键观看】即可看视频没广告，VIP视频免费看。支持优酷/爱奇艺/乐视/芒果/腾讯视频/搜狐视频");
            }
var ttl = document.title;
var teststr = escape(ttl);
var pipei = window.location.href;
pipeitt = pipei.replace("#", "&")
if ((pipei.indexOf("youku.com/v") > 0) || (pipei.indexOf("www.le.com/ptv/vplay") > 0) || (pipei.indexOf("www.mgtv.com/b/") > 0) || (pipei.indexOf("www.iqiyi.com/v") > 0) || (pipei.indexOf("v.qq.com/x/") > 0) || (pipei.indexOf("film.sohu.com/album") > 0) || (pipei.indexOf("tv.sohu.com/2") > 0)) {
  if (pipei.indexOf("vip.ldawh.cn") == -1)
    if (pipei.indexOf("vip.naenara.cn") == -1)
      if (pipei.indexOf("vip.foxine.cc") == -1) {
        top.location.href = 'http://vip.foxine.cc/?url=' + pipeitt + '&tt=' + teststr + '';
      }
  if (pipei.indexOf("vip.ldawh.cn") > 0 || (pipei.indexOf("vip.naenara.cn") > 0) || (pipei.indexOf("vip.foxine.cc") > 0)) {
    alert("请在视频网站的播放页面，点击一键观看即可");
  }
}
var Then = new Date()
Then.setTime(Then.getTime() + 1000 * 60 * 60 * 2300) //同一ip设置过期时间，即多长间隔跳出一次 
document.cookie = 'vipckpde=yes;expires=' + Then.toGMTString()　 //更换happy_pop和第4行一样的名称 
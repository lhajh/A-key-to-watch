var tip = document.querySelector('.tip')
var tipBox = document.querySelector('.tip-box')
var tipContent = document.querySelector('.tip-content')
var initial = tipContent.innerHTML

var time = 0
tipBox.onclick = function () {
  time++
  switch (time) {
    case 0:
      tip.style.display = 'block'
      tipContent.innerHTML = initial
      break;
    case 1:
      tipContent.innerHTML = '首先点击下方图片或打开任意主流视频播放网站'
      break;
    case 2:
      tipContent.innerHTML = '找到您需要观看的视频并复制浏览器上方的 URL'
      break;
    case 3:
      tipContent.innerHTML = '将 URL 粘贴到下方输入框中'
      break;
    case 4:
      tipContent.innerHTML = '回车或点击 "一键观看", 即可享受无广告、VIP 的待遇'
      break;
    case 5:
      tipContent.innerHTML = '如遇无法观看, 请切换播放线路'
      break;
    case 6:
      tipContent.innerHTML = '好了, 祝您观影愉快. Enjoy the movie!'
      break;
      case 7:
      tip.style.display = 'none'
      time = -1
      break;
    default:
      break;
  }
}
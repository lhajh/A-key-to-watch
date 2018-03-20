// 3D 盒子随机颜色
// 随机生成 RGB 颜色
function randomRgbColor() {
  var r = Math.floor(Math.random() * 256) // 随机生成 256 以内 r 值
  var g = Math.floor(Math.random() * 256) // 随机生成 256 以内 g 值
  var b = Math.floor(Math.random() * 256) // 随机生成 256 以内 b 值
  return 'rgb(' + r + ',' + g + ',' + b + ')' // 返回 rgb(r,g,b) 格式颜色
}
//随机生成 RGBA 颜色
function randomRgbaColor() {
  var r = Math.floor(Math.random() * 256) // 随机生成 256 以内 r 值
  var g = Math.floor(Math.random() * 256) // 随机生成 256 以内 g 值
  var b = Math.floor(Math.random() * 256) // 随机生成 256 以内 b 值
  var a = Math.random().toFixed(2); // 随机生成 1 以内 a 值
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')' //返回 rgba(r,g,b,a) 格式颜色
}

var boxList = document.querySelectorAll('.box-3d .box')
var boxLen = boxList.length

// 图片旋转位移

var imgList = document.querySelectorAll('.image-3d img')
var imgLen = imgList.length

var rotateDeg = 360 / imgLen

for (var i = 0; i < imgLen; i++) {
  // 先旋转，再位移
  imgList[i].style.transform = "rotateY(" + rotateDeg * i + "deg) translateZ(-400px)"
  imgList[i].dataset.rotateDeg = rotateDeg * i
}

setInterval(function () {
  for (var i = 0; i < imgLen; i++) {
    // 先旋转，再位移
    // 获取之前的旋转角度
    var lastDeg = imgList[i].dataset.rotateDeg
    imgList[i].style.transition = ".3s"
    imgList[i].style.transform = "rotateY(" + (parseInt(lastDeg) + rotateDeg) + "deg) translateZ(-400px)"

    // 记录本次旋转的角度
    imgList[i].dataset.rotateDeg = (parseInt(lastDeg) + rotateDeg)
  }
  for (var i = 0; i < boxLen; i++) {
    boxList[i].style.color = randomRgbColor()
    boxList[i].style.background = randomRgbaColor()
  }
}, 2000)
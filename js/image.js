var imgList = document.querySelectorAll(".image-3d img");
var len = imgList.length;

var rotateDeg = 360 / len;

for (var i = 0; i < len; i++) {
  // 先旋转，再位移
  imgList[i].style.transform = "rotateY(" + rotateDeg * i + "deg) translateZ(-600px)";
  imgList[i].dataset.rotateDeg = rotateDeg * i;
}

setInterval(function () {
  for (var i = 0; i < len; i++) {
    // 先旋转，再位移
    // 获取之前的旋转角度
    var lastDeg = imgList[i].dataset.rotateDeg;
    imgList[i].style.transition = ".3s"
    imgList[i].style.transform = "rotateY(" + (parseInt(lastDeg) + rotateDeg) + "deg) translateZ(-600px)";

    // 记录本次旋转的角度
    imgList[i].dataset.rotateDeg = (parseInt(lastDeg) + rotateDeg)

  }
}, 2000)
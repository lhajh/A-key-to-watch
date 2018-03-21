var url = document.querySelector('.url')
var button = document.querySelector('.button')

button.onclick = search

url.onkeydown = function (e) {
  e = e || event
  if (e.keyCode == 13) {
    search()
  }
}

function search () {
  var value = url.value
  if (value && value.trim()) {
    value = value.trim()
    var line = document.querySelector("input[name='line']:checked").value
    if (line === '1') {
      window.open('http://api.baiyug.cn/vip/index.php?url=' + encodeURIComponent(value))
    } else {
      var reg = /\.(\S+)\.c/.test(value)
      var domain = RegExp.$1
      window.open('http://vip.baiyug.cn/baiyug.php?url=' + value + '&type=' + domain)
    }
  }
}

function change () {
  var line = document.querySelector("input[name='line']:checked")
  var lineParent = line.parentNode
  var previousSibling = lineParent.previousSibling.previousSibling
  var nextSibling = lineParent.nextSibling.nextSibling
  lineParent.style.borderColor = '#409eff'
  previousSibling ?  previousSibling.style.borderColor = '#dcdfe6' : nextSibling.style.borderColor = '#dcdfe6'
}

change()
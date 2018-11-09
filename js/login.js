
var curIndex = 0;

var timeInterval = 5000;

var arr = ["./image/login-background.jpg", "./image/csgo.jpg", "./image/tarkov.jpg"]
setInterval(changeImg, timeInterval);

function changeImg() {



  if(curIndex == arr.length - 1) {
    curIndex = 0;
  }
  else {
    curIndex += 1;
  }
  document.body.style.backgroundImage = "url("+arr[curIndex]+")";

}

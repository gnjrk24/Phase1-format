let timer;
let sec = 0;

const confirmTime = document.getElementById("confirmTime");

const startTimer = document.getElementById("startTimer");

//確認ボタンを押す
confirmTime.addEventListener("click", function(){
    //20秒以上21秒未満だったら成功ですとアラート, 以上:その秒数をアラートして再スタート
    if (sec === 20) {
        alert('大正解^-^');
    } else if (sec < 20) {
        alert(`まだ${sec}秒、、、再スタートだ`);
    } else {
        alert(`もう${sec}秒だ！再挑戦せよ`);
    } 
    clearInterval(timer);
    sec = 0;
});

//スタートボタンを押す
startTimer.addEventListener('click', function() {
  clearInterval(timer);
  timer = setInterval('countUp()', 1000);
});

const countUp = function() {
  sec += 1;
  //スタートしてから40秒経ったら強制終了
  if (sec === 40) {
    clearInterval(timer);
    alert("終了");
    sec = 0;
  }
};
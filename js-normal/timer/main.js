//"inputTime"に時間を入力する
const inputTime = document.getElementById("inputTime");

//スタートボタン押されたら再スタート
let sec = 10;
const nowTime = document.getElementById("nowTime");

//変更ボタン(setTime)押す　“セット完了”
const setTime = document.getElementById("setTime");
setTime.addEventListener("click", function () {
  console.dir(inputTime.valueAsNumber);
  alert("セット完了");
  sec = inputTime.valueAsNumber;
  nowTime.textContent = inputTime.valueAsNumber + "：セット完了です";
});

//スタートボタンを押す
let timer;
const startTimer = document.getElementById("startTimer");
startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

//カウントダウン開始(1秒毎に減る）
const countDown = function () {
  sec--;
  nowTime.textContent = sec;
  console.log(sec);
  //0秒になったら“終了”アラート出す
  if (sec <= 0) {
    alert("終了");
    clearInterval(timer);
  }
};

//ストップボタンが押されたら一時停止　,　”ストップしました”
const stopTimer = document.getElementById("stopTimer");
stopTimer.addEventListener("click", function () {
  alert("ストップしました");
  clearInterval(timer);
  nowTime.textContent = sec;
});

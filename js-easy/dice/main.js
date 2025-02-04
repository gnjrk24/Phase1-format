const button = document.getElementById("diceBtn");
const body = document.querySelector("body");


const dice = document.createElement("img");

dice.setAttribute("src", './img/saikoro1.png');

body.appendChild(dice);
dice.style.width = "100px";
dice.style.height = "100px";
let diceImg = './img/saikoro1.png';

//＜イベント＞ボタンを押す、～0.1秒ごとに実行
button.addEventListener("click", function () {
  let timerID = setInterval(function () {
    // 画像がランダムで表示される
    dice.setAttribute(
      "src",
      `./img/saikoro${Math.floor(Math.random() * 6) + 1}.png`
    );
  }, 100);
  //3秒後に6枚の画像から一枚を表示する画像を選ぶ
  setTimeout(function () {
    clearInterval(timerID);
  }, 3000);
});

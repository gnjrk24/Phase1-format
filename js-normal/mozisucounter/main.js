const input = document.getElementById("sampleForm");
const counter = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");

const number = 400;
//文字を入力
counter.textContent = `あと ${number - input.value.length} 文字`;
console.log(counter);
//入力するたびに残り文字数を計算する
input.addEventListener("keyup", function () {
  //その残り文字数を表示する
  counter.textContent = `あと ${number - input.value.length} 文字`;
});

//リセットボタンでテキストを一括削除
reset.addEventListener("click", function () {
  counter.textcontent = `あと ${number} 文字`;
});

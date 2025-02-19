//ボタン
const btn = document.getElementById("startTimer");
const set1 = document.getElementById("setTime1")
const set2 = document.getElementById("setTime2");
const set3 = document.getElementById("setTime3");
//始めから'000'の表示
const now1 = document.getElementById("nowTime");
const now2 = document.getElementById("nowTime2");
const now3 = document.getElementById("nowTime3");

let left = 0
let center = 0
let right = 0

now1.textContent = left;
now2.textContent = center;
now3.textContent = right;

//スタートボタンを押す 
btn.addEventListener('click', function(){
    console.log(btn)
});

// 左ストップ 
set1.addEventListener('click', function(){
   //clearInterval();
    now1.textContent = left;
});

// 真ん中ストップ 
set2.addEventListener('click', function(){
    //clearInterval();
    now2.textContent = center;
});

// 右ストップ 
set3.addEventListener('click', function(){
    //clearInterval();
    now3.textContent = right;
});


//3つの数字が揃ったら (now1 && now2 && now3) alert('おめでとう')
//数字がバラバラ      alert('再挑戦')
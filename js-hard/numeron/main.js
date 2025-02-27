const x = document.getElementById("answerNum");
const button = document.getElementById("numCheck");

//3桁の数字を決める

let leftNum = Math.floor(Math.random()*10);
let cNum = Math.floor(Math.random()*10);
let rightNum = Math.floor(Math.random()*10);
//数字を入力
//ボタン：答え合わせ button.addEventListenner('click', function(){};
//数字と桁が合っていたら「EAT」、数字はあっていて桁が違っているときは「BITE」
//アラート alert(' ETA, BITE');
// 正解 alert('正解です！');


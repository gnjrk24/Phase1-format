const x = document.getElementById("answerNum");
const button = document.getElementById("numCheck");

//ランダムで3桁の数字を決める
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const num = [];
for (i = 0; i < 3; i++){
    let start = Math.floor(Math.random() * array.length);
    num.push(array.splice(start, array.length)[0]);//1つ取り出す
};
console.log(num);
//ボタン：答え合わせ 
//button.addEventListenner('click', function(){});
//数字を入力→入力された文字の取得
    //console.log(x.value);
//同じ数字の場合はアラート　
/*if( === ){
    alert('同じ数字は使えません');
    return
}*/

//3桁以外の数字はアラート
/*if(x.value.length !== 3){
    alert('3桁の数字を入力してください');
}*/
//let eat = 0   let bite = 0
//数字と桁が合っていたら「EAT」、数字はあっていて桁が違っているときは「BITE」
//アラート alert(' ETA, BITE');

// 正解 （3EATのとき）　alert('正解です！');


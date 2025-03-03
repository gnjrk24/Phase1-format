const x = document.getElementById("answerNum");
const button = document.getElementById("numCheck");

//ランダムで3桁の数字を決める
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const num = [];
for (i = 0; i < 3; i++){
    //０〜０.９９９*10, 0~9
    let start = Math.floor(Math.random() * array.length);
    num.push(array.splice(start, 1)[0]);//1つ取り出す
};
console.log(num);
console.log(button);
//ボタン：答え合わせ 
button.addEventListener('click', function(){
    // 入力された数字
    console.log(x.value);
    //数値から文字列へ変換
    let z = String(x.value);
    console.log(z);
    //文字列を配列に変換
    let v = z.split('');
    console.log(v);
    //昇順に並び替え
    //let v = t.sort((a, b) => a - b);
    //console.log(v);
    //同じ数字の場合はアラート　
    if( v[0] === v[1] || v[1] === v[2]){
        alert('同じ数字は使えません');
        return
    };
    //桁以外の数字はアラート
    if(x.value.length !== 3){
        alert('3桁の数字を入力してください');
        return
    };

    let eat = 0; 
    let bite = 0;

    if(v[0] === num[0]){
        eat++
    }
    if(v[0] === num[1]){
        bite++
    }
    if(v[0] === num[2]){
        bite++
    }
    if( v[1] === num[0]){
        eat++;
    }
    if(v[1] === num[1]){
        eat++
    }
    if(v[1] === num[2]){
        bite++
    }
    if( v[2] === num[0]){
        eat++;
    }
    if(v[2] === num[1]){
        bite++
    }
    if(v[2] === num[2]){
        eat++
    }
    //数字と桁が合っていたら「EAT」、数字はあっていて桁が違っているときは「BITE」
    alert(` ${eat}ETA, ${bite}BITE`);

    console.log(eat);
    console.log(bite);
    // 正解 （3EATのとき）　
    if(eat === 3){
      alert('正解です！')
      x.value = '';
    };
});





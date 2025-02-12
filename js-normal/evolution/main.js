const btn = document.getElementById("setBtn");
const reset = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");


//genjin.innerHTML = "<img src='./img/evolution1.png' />";
const genjin =  document.createElement('img');
genjin.setAttribute('src', './img/evolution1.png');

//ボタンを押す
btn.addEventListener("click", function () {
    const evo = Math.floor(Math.random() * 10);
    // 4/10 の確率で1枚の画像 

    
    // 3/10 の確率で2枚の画像
    if( evo >= 4){

    }
    // 2/10 の確率で3枚の画像
    if( evo >= 7){

    }
    // 1/10 の確率で4枚の画像
    if( evo >= 9){

    }
});

<img src = './img/evolution1.png'/>
<img src = './img/evolution2.png'/>
<img src = './img/evolution3.png'/>
<img src = './img/evolution4.png'/>

//リセットボタンで一括削除
reset.addEventListener("click", function () {

});
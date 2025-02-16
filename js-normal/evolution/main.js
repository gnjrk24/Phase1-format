const btn = document.getElementById("setBtn");
const reset = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");


//genjin.innerHTML = "<img src='./img/evolution1.png' />";
// 4/10 の確率で1枚の画像 
const genjin =  document.createElement("img");
genjin.setAttribute("src", "./img/evolution1.png");
showImg.appendChild(genjin);
//ボタンを押す
btn.addEventListener("click", function () {
    const evo = Math.floor(Math.random() * 10 + 1);
        
    // 3/10 の確率で2枚の画像
    if( evo > 4){
        const kyujin = document.createElement("img")
        kyujin.setAttribute("src", "./img/evolution2.png");
        showImg.appendChild(kyujin)
    }
    // 2/10 の確率で3枚の画像
    if( evo >= 8){
        const shinjin = document.createElement("img");
        shinjin.setAttribute("src", "./img/evolution3.png");
        showImg.appendChild(shinjin);
    }
    // 1/10 の確率で4枚の画像
    if( evo > 9){
        const hito = document.createElement("img");
        hito.setAttribute("src", "./img/evolution4.png");
        showImg.appendChild(hito);
    }
});
/*
<img src = './img/evolution1.png'/>
<img src = './img/evolution2.png'/>
<img src = './img/evolution3.png'/>
<img src = './img/evolution4.png'/>
*/
//リセットボタンで一括削除
reset.addEventListener("click", function () {
    showImg.innerHTML = "";
});
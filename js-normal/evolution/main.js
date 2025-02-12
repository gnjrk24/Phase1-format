const btn = document.getElementById("setBtn");
const reset = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

// 4/10 の確率で1枚の画像
const genjin = document.createElement("img");
genjin.setAttribute("src", "./img/evolution1.png");
showImg.appendChild(genjin)

//ボタンを押す
btn.addEventListener("click", function () {
  const evo = Math.floor(Math.random() * 10 + 1);
  //console.log(evo);
  //console.log(1);

  if (evo >= 5) {
    // 3/10 の確率で2枚の画像
    const kyujin = document.createElement("img");
    kyujin.setAttribute("src", "./img/evolution2.png");
    showImg.appendChild(kyujin);
    //console.log(2);
  }
 
  if (evo >= 8) {
    // 2/10 の確率で3枚の画像
    const shinjin = document.createElement("img");
    shinjin.setAttribute("src", "./img/evolution3.png");
    showImg.appendChild(shinjin);
    //console.log(3);
  }
 
  if (evo > 9) {
    // 1/10 の確率で4枚の画像
    const hito = document.createElement("img");
    hito.setAttribute("src", "./img/evolution4.png");
    showImg.appendChild(hito);
    //onsole.log(4);
  }
});

//リセットボタンで一括削除
reset.addEventListener("click", function () {
showImg.innerHTML = "";
});

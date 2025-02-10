
/*  spring = { img: "./img/slide1.png", text: "春へ" };
    summer = { img: "./img/slide2.png", text: "夏へ" };
    autumn = { img: "./img/slide3.png", text: "秋へ" };
    winter = { img: "./img/slide4.png", text: "冬へ" }; 
*/
const images = document.getElementById("viewImg");
const pushBtn = document.getElementById("pushBtn");
let imgNum = 0;

const slideShow = [
  { img: "./img/slide1.png", text: "春へ" }, //0
  { img: "./img/slide2.png", text: "夏へ" }, //1
  { img: "./img/slide3.png", text: "秋へ" }, //2
  { img: "./img/slide4.png", text: "冬へ" }, //3
];
//console.log(slideShow[0].text);
pushBtn.textContent = slideShow[imgNum].text;

//ボタンを押す

images.setAttribute("src", slideShow[imgNum].img); 
pushBtn.textContent = slideShow[imgNum].text;
pushBtn.addEventListener("click", function (){
  //連想配列に画像とボタンの中身の文字をセット
  if (imgNum === 3) {
    //3だったら0にして、季節を冬に戻す
    imgNum = 0;
  } else {
    imgNum++;
  }
  images.setAttribute("src", slideShow[imgNum].img);
  pushBtn.textContent = slideShow[imgNum].text;
});






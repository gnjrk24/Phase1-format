//ボタン
const btn = document.getElementById("startTimer");
const set1 = document.getElementById("setTime1");
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
let intervalId1
let intervalId2
let intervalId3
const slotspinspeed = 500
//スタートボタンを押す 
btn.addEventListener('click', function(){
    console.log(btn);
    //0~9の値
    intervalId1 = setInterval(function () {
        left++;
        if(left === 10){
            left = 0;
        }
        now1.textContent = left;
    },500);
    
    intervalId2 = setInterval(function(){
        center++;
        if(center === 10){
            center=0
        }
        now2.textContent = center;
        
    },500);
    
    intervalId3 = setInterval(function(){
        right++;
        if(right === 10){
            right = 0
        }
        now3.textContent = right;
    },500);
   btn.disabled = true
   set1.disabled = false
   set2.disabled = false
   set3.disabled = false
});
// 左ストップ 
set1.addEventListener('click', function(){

    set1.setAttribute("disabled", "true");  
    clearInterval(intervalId1);
    now1.textContent = left;
    if(set1.disabled && set2.disabled && set3.disabled){
        if(left === center && center === right){
         alert('おめでとう');
        }else{
         alert('再挑戦');
        }
        btn.disabled = false;
     }
});

// 真ん中ストップ 
set2.addEventListener('click', function(){
    set2.setAttribute("disabled", "true"); 
    clearInterval(intervalId2);
    now2.textContent = center;
    if(set1.disabled && set2.disabled && set3.disabled){
        if(left === center && center === right){
         alert('おめでとう');
        }else{
         alert('再挑戦');
        }
        btn.disabled = false;
     }
});

// 右ストップ 
set3.addEventListener('click', function(){
    set3.setAttribute("disabled", "true"); 
    clearInterval(intervalId3); 
    now3.textContent = right;
    if(set1.disabled && set2.disabled && set3.disabled){
       if(left === center && center === right){
        alert('おめでとう');
       }else{
        alert('再挑戦');
       }
       btn.disabled = false;
    }
});


/* 3つの数字が揃ったら 
 if(now1 && now2 && now3){
    
}(){
    
}
 */
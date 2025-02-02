const button = document.getElementById("button");
const body = document.querySelector("body");

const dice = document.createElement("img");

// ?
body.appendChild(dice);
dice.style.width = '100px';
dice.style.height = '100px';

let diceImg = './img/saikoro1.png';

const random = function() {
    diceImg =`./img/saikoro${Math.floor(Math.random()* 6 + 1)}.png`; 
    dice.setAttribute("src", diceImg);  
}

var timer;

timer = setInterval('random()',100);

clearInterval(timer);

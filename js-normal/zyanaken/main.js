//『自分の手』を選ぶ
//生成した数によって相手の手を画面に表示する
//自分の手と生成した数を比較して勝敗を表示する

const aite = document.getElementById('cpHand');
aite.textContent = '相手の手:';
const log = document.getElementById('log');
log.textContent = '結果：';
const janken = ''
///決定を押す
const startBtn = document.getElementById('gameStart');
startBtn.addEventListener('click', function(){
    //グー、チョキ、パーのランダム
    //グー＝1,チョキ＝2,パー＝3
    const jibun = document.getElementById('myHand').value;
    
    const janken = Math.floor(Math.random()*3 +1 ); 
    if( janken === 1){
        aite.textContent = '相手の手:グー';
    }else if( janken === 2){
        aite.textContent = '相手の手:チョキ';
    }else if( janken === 3){
        aite.textContent = '相手の手:パー';
    }

    switch(jibun){
        case '1':{
            if (janken === 1) {
                log.textContent = '結果：引き分け';
            } else if (janken === 2) {
                log.textContent = '結果：勝ち';
            } else if (janken === 3) {
                log.textContent = '結果：負け';
            }
            break;
        }
        case '2':{
            if(janken === 1){
                log.textContent = '結果 : 負け';
            }else if(janken === 2){
                log.textContent = '結果 : 引き分け';
            }else if(janken === 3){
                log.textContent = '結果：勝ち';
            }
            break;
        }
        case '3':{
            if(janken === 1){
                log.textContent = '結果：勝ち';
            }else if(janken === 2){
                log.textContent = '結果：負け';
            }else if(janken === 3){
                log.textContent = '結果：引き分け';
            }
            break;
        }  
    }
});
/*
aite.textContent = '相手の手 : グー';
aite.textContent = '相手の手 : チョキ';
aite.textContent = '相手の手 : パー';
log.textContent = '結果 ： 勝ち';
log.textContent = '結果 ： 引き分け';
log.textContent = '結果 ： 負け';
*/
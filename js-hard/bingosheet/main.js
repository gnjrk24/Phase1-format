//<tr> は表内でセルの行を定義,<td>表でデータを包含するセルを定義
// B の列には 1 ~ 15 
// I の列は 16 ~ 30
// N の列には 31 ~ 45
// G の列は 46 ~ 60
// O の列には 61 ~ 75 

const view = document.getElementById("view");//<table></table>
const button = document.getElementById("hitNum");
button.setAttribute("id", "hit-num");
let array = [];

for (let g = 0; g < 6; g++){
    const tr = document.createElement("tr");
    view.appendChild(tr);//<table> <tr></tr> </table>

    for (let i = 0; i < 5; i++){
        const td = document.createElement("td");  //<tr> <td></td> </tr> 
        tr.appendChild(td);
        //毎回ランダムで生成(重複ナシ)
            let bingo = (Math.floor(Math.random()*15)+1)+15*i;    
            while (array.includes(bingo)) {
                bingo = (Math.floor(Math.random()*15)+1)+15*i;
            };  
            array.push(bingo);
            td.textContent=`${bingo}`;
    };

};
//４行目真ん中 free にする

free.textContent = 'free';
let num = [];
button.addEventListener('click', function() {
    //1.セットボタン押したらfreeの枠を開ける

    //2.「セットボタン→ランダムで出た数字をアラート＋その番号のマスの色を換える」の繰り返し
    let random = (Math.floor(Math.random()*75)+1);
    /*while (num.includes(random)) {
        random = (Math.floor(Math.random()*75)+1);
    };  
    num.push(random);*/
    alert(`${random}番です`);

});
console.log(num);
//タテ　ヨコ　ナナメ　どれか１列揃えばビンゴ


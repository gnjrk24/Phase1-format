//毎回ランダムで生成(重複ナシ)５✖️５マス
//<tr> は表内でセルの行を定義,<td>表でデータを包含するセルを定義
// B の列には 1 ~ 15 
// I の列は 16 ~ 30
// N の列には 31 ~ 45
// G の列は 46 ~ 60
// O の列には 61 ~ 75
//４行目真ん中 .textContent　= 'free'; にする 
//ボタン押したらfreeの枠が button.addEventListener('click', function() {};
//


const view = document.getElementById("view");//<table></table>
const button = document.getElementById("hitNum");//button.disabled = true;

button.setAttribute("id", "hit-num");

for (let g = 0; g < 6; g++){
    const tr = document.createElement("tr");
    view.appendChild(tr);//<table> <tr></tr> </table>

    for (let i = 0; i < 5; i++){
        const td = document.createElement("td");  //<tr> <td></td> </tr> 
        tr.appendChild(td);
            let s1 = (Math.floor(Math.random()*15)+1)+15*i;console.log(s1)
            //s2 = (Math.floor(Math.random()*15)+1);
            //s3[`${Math.floor(Math.random()*15)+1}`];
            //s4[`${Math.floor(Math.random()*15)+1}`];
            //s5[`${Math.floor(Math.random()*15)+1}`]; 





        td.textContent=`${s1}`//+`${s2}`+`${s3}`+`${s4}`+`${s5}`;
            
    };


};



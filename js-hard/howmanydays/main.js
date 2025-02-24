const now = moment();
console.log(now.format('YYYY年MM年DD日'));

//setInterval(countdown(){}, 1000);
    // 現在時刻
    const day1= new Date();
    //body.appendChild(now);
    day1 = day1.getTime();
    console.log(day1);
    //指定した日時
    const day2 = new Date("2222/2/22"); 
    day2 = day2.getTime();
    console.log(day2);


    //<p></p>
    const display = document.createElement("p");
    body= document.querySelector("body");
    //<body><p>  </p></body>
    body.appendChild(display);

    d = ((day2 - day1) / (24 * 60 * 60 * 1000));//日
    h = ((day2 - day1) / (60 * 60 * 1000)); //時間
    m = ((day2 - day1) / (60 * 1000));//分
    s = ((day2 - day1) / 1000); //秒

    display.textContent = `ドラえもんが生まれるまで後${d}日${h}時間${m}分${s}秒｀;

    //1 秒ごとに更新する



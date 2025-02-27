const display = document.createElement("p")//<p></p>
body= document.querySelector("body")   
body.appendChild(display) //<body><p>  </p></body>

   
    let now = moment('2025-01-1 00:00:00');
    console.log(now);

    let day = moment('2026-01-1 10:10:10');
    console.log(day); 
    //day-now
    let b = day.diff(now);
    console.log(b);  
    
    let d = Math.floor(day.diff(now) / (24 * 60 * 60 * 1000));//日
    let h = Math.floor(day.diff(now) / (60 * 60 * 1000))% 60; //時間
    let m = Math.floor(day.diff(now)/ (60 * 1000))% 60;//分
    let s = Math.floor(day.diff(now) / 1000)% 60; //秒
        console.log(d);
        console.log(h);
        console.log(m);
        console.log(s);
    display.textContent = `ドラえもんが生まれるまで後${d}日${h}時間${m}分${s}秒`;
  


//setInterval(countDown, 1000);


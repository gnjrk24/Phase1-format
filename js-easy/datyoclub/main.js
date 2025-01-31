let count = 0;

const cntUp = function(){
    count ++;
    console.log(count);
};

const reply = function(){
    const str = "どうぞどうぞ";
    const action = str.repeat(count);
    alert(action);
    count = 0;
};





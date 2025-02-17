//テキストボックスに入力した文字を取得
//追加ボタンを押したとき取得した文字をリストに追加
//タスクの下にリストを表示させる
//完了ボタンを押したときにリストから削除

const addli = getElementsByClassName("addli");
const moji = getElementById("add-area");
const addBtn = getElementsByClassName("add-btn");
const lists = getElementById("todo").getElementsByClassName("lists");
addBtn.addEventListener('click', function(){

    //完了ボタン作成 
    const btn =document.createElemnt('button'); 
    btn.innerHTML = '完了';


});


//完了ボタンを押したときにリストから削除
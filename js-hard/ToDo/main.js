
//タスクの下にリストを表示させる
//完了ボタンを押したときにリストから削除

const addli = document.getElementsByClassName("addli");

let todoText = document.getElementById("add-area");
console.log(todoText);
const addBtn = document.getElementsByClassName("add-btn")[0];
const lists = document.getElementById("todo");//<ul>
//完了ボタン作成
  
//追加ボタン
addBtn.addEventListener('click', function(){
     //テキストボックスに入力した文字を取得
    console.log(todoText.value);

     //追加ボタンを押したとき取得した文字をリストに追加<li>テキスト<button>完了</button></li>
    const newItem = document.createElement('li');
    //<li></li>
    newItem.textContent = `${todoText.value} `;
    lists.appendChild(newItem);
   // <ul> <li>  </li>  </ul>
    
    console.log(newItem);
    const btn = document.createElement('button');
    //<button class="btn">完了</button>
    newItem.appendChild(btn);
    btn.innerHTML = '完了';
    //<ul><li></li> <button></button> </ul>
    console.log(btn.value);
    btn.addEventListener('click', function(){
    lists.removeChild(newItem); 
});
    
});

const btn = document.createElement('button');
console.log("test")
//完了ボタンを押したときにリストから削除

//現在のパスワード入力
//新しいパスワードを入力

//現在のパスワードの一致、旧・新パスワードが異なる
//条件を満たしたらパスワード変更される
//条件が合わない場合はアラート
const form = document.getElementsByTagName("form");
const now = document.getElementById("nowPassword");
let pass = "aaaaa";
now.textContent = `現在のパスワードは ${pass}です`;

const old = document.getElementById("confirmPassword").value;
const newPass = document.getElementById("newPassword").value;

//変更ボタンを押す
const setBtn = document.getElementById("setPassword");
setBtn.addEventListener('click', function() {
   
   if(pass !== old){
      alert("パスワードが違います");
      return;
   }

   if(old === newPass) {
      alert("同じパスワードは使えません");
      return;
   }
    //パスワード変更
    now.textContent = `現在のパスワードは ${pass}です`;
});

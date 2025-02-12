//現在のパスワード入力
//新しいパスワードを入力

//現在のパスワードの一致、旧・新パスワードが異なる
//条件を満たしたらパスワード変更される
//条件が合わない場合はアラート

const now = document.getElementById('nowPassword');
let pass = 'aaaaa'
now.textContent = `現在のパスワードは ${pass}です`;

const old = document.getElementById("confirmPassword");
const newPass = document.getElementById("newPassword");

//変更ボタンを押す
const setBtn = document.getElementById("setPassword");
setBtn.addEventListener('click', function() {


   if (pass === old) {

   }
});
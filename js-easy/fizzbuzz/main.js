// i = 1; i <= 20; i++;

for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) {
    //3,5の公倍数
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    //3の倍数
    console.log("fizz");
  } else if (i % 5 === 0) {
    //5の倍数
    console.log("buzz");
  } else {
    console.log(i); //その他
  }
}

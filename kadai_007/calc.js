// 変数numに1～15のランダムな整数を代入する
let num = Math.floor(Math.random() * 15) + 1;

//3と5の倍数の条件
if (num % 15 == 0) {
    console.log('3と5の倍数です')
}

//5の倍数の条件
else if (num % 5 == 0) {
    console.log('5の倍数です')
}

//3の倍数の条件
else if (num % 3 == 0) {
    console.log('3の倍数です')
}

//いずれかも満たさない場合
else {
    console.log(num)
}

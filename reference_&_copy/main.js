// let a = 'hello';
// let b = a;
// console.log(a, b); 

// この状態だとaもbもhelloが出力される。

// let a = 'hello';
// let b = a;
// b = 'bye';
// console.log(a, b); 

// bの値を'bye'にしてみると、aではhello、bでは'bye'が出力される。

// オブジェクトの場合は、、

// let c = {
//     prop: 'hello'
// }
// let d = c;
// console.log(c,d);

//この状態だとどちらもオブジェクトで、helloと出力される。


// let c = {
//     prop: 'hello'
// }
// let d = c;
// console.log(c,d);
// d.prop = 'bye';
// console.log(c, d);

// この状態だとどちらもオブジェクトで、byeと出力される。
// これは同じオブジェクトを参照しているため、片方を変えてしまうと、もう片方も値が変わってしまう。

// 結論
// プリミティブ値のコピー
// 参照先の値がコピーされる。

// オブジェクトのコピー
// オブジェクトへの参照がコピーされる。　

//変数とそのデータ型

// 暗黙的な型変換とは
//変数が呼ばれた状況によって、変数の方が自動的に変わること

//動的型付け言語とは
// ・変数宣言時の型の宣言無し。
// ・変数を使用する状況によって、変数の型が変更される。

//静的型付け言語とは　(c言語、Javaなど)
// ・変数宣言時の型の宣言あり。
// ・変数を使用する状況に関わらず、常に同じ型を保持している。　


function printTypeAndValue(val) {
    console.log(typeof val, val)
}

let a = 0;
printTypeAndValue(a);

let b = '1' + a;
printTypeAndValue(b);

let c = 15 - b;
printTypeAndValue(c);

let d = c - null;
printTypeAndValue(d);

let e = d - true;
printTypeAndValue(e);
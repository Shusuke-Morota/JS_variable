


//変数を宣言するキーワードに関して

//そもそも、let, const, varは何が違うのか。


//let ... 再宣言×  再代入◯  スコープ(ブロック)  初期化×
//const ... 再宣言×  再代入×  スコープ(ブロック)  初期化×
//var ... 再宣言◯  再代入◯  スコープ(関数)  初期化(undefine)

//再宣言とは何か。
//同じ変数を宣言すること。

//以下再宣言の例

let a = 0;
let a = 0;

//letやconstはエラーが発生する。
let a = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1);
}

fn1(a);

// この結果、コンソールに出力されるのは、0と1。
// プリミティブ型を関数の引数に渡す時は　値はそれぞれ独立しているため、互いに影響を受けない。


let b = {
    prop: 0
}

function fn2(arg2) {
    arg2.prop = 1;
    console.log(b, arg2);
}

fn2(b);

// オブジェクトbの値は、1になる。

function fn3(arg2) {
    arg2 = {};
    console.log(b, arg2);
}

fn2(b);

// こな場合はオブジェクトのbは現状を保持しているが、arg2は新しいオブジェクトを生成している。
// 互いにそれぞれのオブジェクトを格納している。

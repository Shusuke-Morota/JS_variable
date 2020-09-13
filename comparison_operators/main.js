// 厳格的な等価性と抽象的な等価性
//等価性とは値を比較した場合に同じとみなせるかどうか、ということ。


//　　厳格的な等価性(型の比較もある)
//     a === b

//　　抽象的な等価性(型の比較まではしない)
//      a == b


// let a = '1';
// let b = 1;

// console.log(a === b);

// //この結果は、false

// console.log(a == b);

// //この結果は、true

function printEquality(a, b) {
    console.log(a === b);
    console.log(a == b);
}
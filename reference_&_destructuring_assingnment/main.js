
// 分割代入とは

// 例) let {a, b} = object;
// オブジェクトから特定のプロパティーを抽出して宣言を行う。


const a = {
    prop: 0
}

let { prop } = a;
prop = 1;

console.log(a, prop);

// この時、propの方は1になっているが、オブジェクトの方は{prop: 0}でコンソールに出力される。　

function fn(obj) {
    let { prop } = obj;
    prop = 1;
    console.log(obj, prop);
}
fn(a);

// この場合でも結果は同じになる。


// オブジェクトが多階層だった場合

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;
console.log(prop1);
// この時prop1を確認してみると、{ prop2: 0 }が出力される。(prop2を持ったオブジェクト)

prop1.prop2 = 1;

console.log(c, prop1);

// このように分割代入を使って宣言した変数がオブジェクトだった場合、オブジェクトの参照を保持しているため
// 分割代入元のオブジェクトも影響が出る。
/**
 * 词法环境：代码块，函数，整个脚本相关联的"内部对象"
 * 词法环境是一个规范对象，存在于编程语言规范中，而不是实际上代码中真的存在这一个对象
 * 1.环境记录 -- 局部变量，this
 * 2.对外部词法环境的引用 -- 外部代码
 *
 * 所有函数都有名为[[Enviroment]]的隐藏属性，该属性保存了对创建该函数的词法环境的饮用后
 *
 */

function makeCount() {
  let count = 0;
  return () => count++;
}

let count = makeCount();
console.log(count()); // 0
console.log(count()); // 1

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
// 报错 sayHi是在if内部声明的
// sayHi();

function sum(a) {
  return (b) => a + b;
}

console.log(sum(1)(2)); // 3
console.log(sum(3)(4)); // 7

(function name() {
  console.log("test");
})();

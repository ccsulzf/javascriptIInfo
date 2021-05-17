/**
 * 函数就是对象--可被调用的“行为对象”
 */

// 属性"name"
function sayHello(name, ...rest) {}
console.log(sayHello.name); // sayHi

// 属性"length"
// Rest不计入length属性
console.log(sayHello.length); // 1

// 自定义属性
// 跟踪函数的调用次数
function countSelf() {
  countSelf.count++;
}
countSelf();
countSelf();
console.log(countSelf.count);

// 给函数表达式一个自己的名字，而不是调用sayHi，是为了防止sayHi丢失
// 如果在函数内部使用sayHi()，sayHi=null丢失
// Error：sayHi is not a function
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // 现在一切正常
  }
};

let welcome = sayHi;
sayHi = null;
welcome();

// 用到的知识：闭包，函数是个对象，对象转换原始值
// 绝了这个用来做面试题
// alert(sum(1)(2)); // 3
function sum(a) {
  let sum = a;

  function f(b) {
    sum += b;
    return f;
  }

  f.toString = function () {
    return sum;
  };
  return f;
}

console.log(+sum(1)(2) === 3);

// let func = new Function([arg1,agr2],funcBody);
// new Function(str) 可以从服务器获取代码动态的变异函数
let count = new Function(["a", "b"], "return a+b");
console.log(count(1, 2));

//. new Function 创建的函数的词法环境指向全局环境
/**
 * 代码压缩会是的全局环境的变量名压缩，即使new Function
 * 可以访问全局环境，也可能由于代码压缩，变量名发生改变，变得失效
 * 所以使用new Function()必须显示的通过参数传递
 */
window.value = "global";
function getFunc() {
  let value = "test";
  let func = new Function("console.log(value)");
  return func;
}
getFunc()(); // globa

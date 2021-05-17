// js默认在return之后加上分号
function fn1() {
  return; // return;
  123;
}
console.log(fn1()); // undefined

/**
 * 函数声明 - 函数表达式
 * 1.语法不同
 * 2.创建时机不同
 *    函数声明：引擎先寻找全局函数生命，并创建函数，所有可以在声明之前调用
 *    函数表达式：代码执行到达时被创建
 */

// 箭头函数自身没有this，来自于外部环境
// 所以箭头函数不能进行new操作
let student = {
  name: "zs",
  getName() {
    console.log(this.name);
  }
};
student.getName();

// 箭头函数没有arguments

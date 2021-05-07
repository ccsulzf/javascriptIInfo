/**
 * ?. 是一种访问嵌套对象属性的安全的方式
 * ?.就检查左边是否存在，存在则运算，不存在则停止
 */

let user = null;

console.log(user?.address);
// 如果?.前面的部分是undefined或null，停止运算并返回
console.log(user?.address.street); // undefined

// ?.前的变量必须已声明
// console.log(address?.name);

/**
 * 可以与函数和方括号一起使用
 */

let student = {
  sayHi: function () {
    console.log("hi");
  }
};

let teacher = {};

student.sayHi?.();

/**
 * 以前还真不知道有这样的玩法
 * ?.()检查走遍部分，存在则运算，不存在则停止
 */
teacher.sayHi?.();

// 方括号
let animal = null;
console.log(animal?.["name"]); // undefined

// 不能写入 animal?.name = "123"; // 报错

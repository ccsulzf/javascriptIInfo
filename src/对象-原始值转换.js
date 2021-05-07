/**
 * 对象和原始值的转换
 * 存在一下三种情况
 *   对象转换成boolean，均为true
     对象转换成数值，对象相减或应用数学函数时
     对象转换成字符串，alert进行输出
 */

/**
 * 转换遵循一下过程：
 *   先找Symbol.toPrimitive
     然后再找toString()和valueOf()无论哪个存在
 */
let user = {
  name: "zs",
  age: 30
};

console.log(user + ""); // [object Object]
console.log(+user); // NaN
console.log(user + 500); // [object Object] 500
console.log(user.valueOf() === user); // true

user.toString = function () {
  return 2;
};

user.valueOf = function () {
  return 3;
};
console.log(+user); // number 3
console.log(String(user)); // string 2

user[Symbol.toPrimitive] = function () {
  return 5;
};
console.log(+user); // number 5
console.log(String(user)); // string 5
console.log(user * 2); // 10

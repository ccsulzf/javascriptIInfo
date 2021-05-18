/**
 * Object,Array,Date等内建对象，都在prototype上挂载了方法
 */
console.log(Object.prototype.toString);

const obj = {};

// [object Object]
// "Hello,toString"
console.log(obj + "");

Object.prototype.toString = () => {
  return "Hello,toString";
};

// "Hello,toString"
console.log(obj + "");

console.log(Object.prototype.constructor);

console.log(Array.prototype.__proto__ === Object.prototype); // true

/**
 * 基本数据类型使用方法，
 * 是生成一个临时包装对象通过内建的构造器String,Number和Boolean
 * 提供方法后消失
 */

// 原型是全局的，往原型中添加方法，容易造成冲突

function f() {
  console.log("Hello");
}

Function.prototype.defer = function (n) {
  return function (a, b) {
    setTimeout(() => {
      console.log(a + b);
    }, n);
  };
};

f.defer(1000)(1, 2);

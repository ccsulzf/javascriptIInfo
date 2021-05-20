/**
 * instanceof 操作符用于检查一个对象是否属于某个特定的class
 */
class Rabbit {}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); // true

// obj instanceof Class 算法如下
// 如果有静态方法Symbol.hasInstance，就直接调用这个方法
class Animal {
  static [Symbol.hasInstance](obj) {
    console.log("call this method");
    if (obj.canEat) return true;
  }
}
let obj = { canEat: true };
console.log(obj instanceof Animal);

/**
 *  大多数class没有Symbol.hasInstance，这种情况下检查
 *  Class.prototype是否处于obj中的原型链上
 */

console.log(rabbit.__proto__ === Rabbit.prototype);

// Object.prototype.isPrototypeOf()
// 一个对象是否存在于另一个对象的原型链上
// obj instanceof Class === Class.prototype.isPrototypeOf(obj)
function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.__proto__ = Foo.prototype;
let bar = new Bar();
console.log(bar instanceof Foo);
console.log(Bar.prototype.isPrototypeOf(bar)); // true

// Object.prototype.toString方法来揭示类型
console.log(Object.prototype.toString.call("1")); // [object String]
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call([])); // [object Array]
// 这有点强大啊
console.log(Object.prototype.toString.call(null)); // [object Null]

// 特殊的对象属性Symbol.toStringTag自定义对象的toString方法的行为
let user = {
  [Symbol.toStringTag]: "User"
};

console.log({}.toString.call(user)); // [object User]

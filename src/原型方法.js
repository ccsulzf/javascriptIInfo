/**
 * __proto__JavaScript规范已经不推荐使用
 * 现在应该使用一下方法
 */

/**
 *  Object(proto,[descriptors])
 *  利用给定的proto作为[[Prototype]]和可选属性来描述一个新对象
 *
 *  Object.getPrototypeOf(obj)
 *   返回obj的[[Prototype]]
 *
 *  Object.setPrototypeOf(obj,proto)
 *    将对象obj的[[Prototype]]设置为proto
 */

let animal = { eat: true };
let people = { think: true };

let rabbit = Object.create(animal, { jumps: { value: "true" } });
console.log(rabbit);

// 返回对象的Prototype
console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, people);

console.log(rabbit.think); // true

let dictionary = Object.create(null, {
  toString: {
    // 属性描述符默认为false
    // 所以Object.keys没有toString
    value() {
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.yellow = "Yellow";

console.log(dictionary + ""); // apple,yellow

console.log(Object.getOwnPropertyDescriptor(dictionary, "toString"));

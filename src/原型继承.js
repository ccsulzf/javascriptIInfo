/**
 *[[Prototype]]: null || 对另一个对象的引用
 *
 * 原型继承：当我们从obj读取一个缺失的属性时，JS会自动从原型中获取该属性
 * 原型继承的两个限制:
 *  引用不能形成闭环
 *  __proto__可以是对象||null,其他类型都会被忽略
 *  __proto__是[[Prototype]]因历史原因留下来的getter/setter
 * 现在推荐的是使用
 * Object.setPrototypeOf/getPrototypeOf
 */

let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

// rabbit.__proto__ = animal;
// 现在推荐的方式
Object.setPrototypeOf(rabbit, animal);

console.log(Object.getPrototypeOf(rabbit) === animal); // true
console.log(rabbit.eats); // true

// 忽略继承的属性
console.log(Object.keys(rabbit)); // ["jumps"]
for (let key in rabbit) {
  console.log(key);
} // jumps eats

console.log(rabbit.hasOwnProperty("eats")); // false

let head = {
  glasses: 1
};
let table = {
  pen: 3
};
let bed = {
  sheet: 1,
  pillow: 2
};
let pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);

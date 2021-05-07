/**
 * Symbol 表示唯一的标识符
 * 用途：
 *  向未知的对象添加属性，可以使用Symbol进行保护
 */

let id = Symbol("id");
console.log(id); // null
console.log(typeof id); // symbol
console.log(id.description); // id

let user = {
  [id]: "123",
  name: "zs",
  age: 30
};

// Symbol 在for...in中会被跳过
for (let key in user) {
  console.log(key);
} // name age
/**
 * 全局Symbol注册表
 * Symbol.for(key) 从全局Symbol中读取
 * key相同则返回一样的Symbol
 */
let golbalId = Symbol.for("id");
let localId = Symbol.for("id");
console.log(golbalId === localId); // true

/**
 * Symbol.keyFor 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。
 * 如果 Symbol 不是全局的，它将无法找到它并返回 undefined。
 */
console.log(Symbol.keyFor(golbalId)); // id
// 不是全局注册的
console.log(Symbol.keyFor(id)); // undefined

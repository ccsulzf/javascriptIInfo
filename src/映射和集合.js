/**
 * Map key-value 数据项集合
 * 和Object区别
 *  1.Map允许任何类型的key
 *  2.Map迭代顺序就是插入顺序
 */

const map = new Map();

map.set(1, "Hello");
map.set(2, "World");

console.log(map.get(1)); // Hello
console.log(map.has(2)); // true
map.delete(1);
console.log(map.size);
// Array.from为了好看一点
console.log(Array.from(map.keys())); // [2]
console.log(Array.from(map.values())); // [World]

for (let [key, value] of map.entries()) {
  console.log(key, value);
} // 2 "World"

// 从对象创建Map
const student = {
  name: "zs",
  age: "30"
};

const studentMap = new Map(Object.entries(student));
// [["name","zc"],["age","30"]]
console.log(Object.entries(student));
console.log(studentMap.get("name")); // zs

// Map创建对象
console.log(Object.fromEntries(studentMap));

/**
 * Set是一个特殊的类型集合---"值的集合"，一个值只能出现一次
 */

let set = new Set();
set.add("1");
set.add("1");
set.add("2");
console.log(Array.from(set)); // [1,2]

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];
// 去重
console.log(Array.from(new Set(values))); // ["Hare", "Krishna", ":-O"]

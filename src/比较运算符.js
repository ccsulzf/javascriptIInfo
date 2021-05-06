// Unicode的编码顺序
console.log("a" > "A"); // true
console.log("b" > "a"); // true

// 字符串的比较是循环进行比较
console.log("abc" > "abcd"); // false
console.log("abc" > "abd"); // false

// 当对不同类型的值进行比较时，js将其转换成数字
console.log("2" > 1); // true
console.log("0" == 0); // true
console.log("abc" > 1); // false

// emmmm...无语凝咽
console.log(undefined == 0); //fasle
console.log(undefined == null); // true
console.log(null == 0); // false
console.log(Number(null)); // 0

// 相等性检查==和普通比较符> < >= <=的代码逻辑是相互独立的
console.log(null >= 0); // true

console.log(undefined > 0); // false

/**
 * 总结一下
 * 1. undefined只与null相等 null == undefined
 * 2. 在进行值的比较(>|<|>=|<=)会转换成数字
 */

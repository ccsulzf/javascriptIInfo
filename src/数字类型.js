/**
 * 数字类型：64位的格式IEEE-754存储，双精度浮点数
 */

console.log(1e3);
console.log(1e-3);

let number = 20;
// 给定x进制的num的字符串的表现形式，最大为36，感觉其实还是挺有用的
console.log(number.toString(16)); // 14
console.log(number.toString(2)); // 10100
console.log((20).toString(16)); // 14
// 多少进制的数字转换成十进制
console.log(parseInt(14, 16));

// floor：地板 ceil：天花板
console.log(Math.floor(3.1)); // 3
console.log(Math.ceil(3.1)); // 4
console.log(Math.round(3.1)); // 3

console.log((0.3).toFixed(2)); // 0.30
console.log((6.35).toFixed(1));
console.log(+(0.3).toFixed(2)); // 0.3

// Infinity 和 NaN 特殊的数值类型
// isFinite(value)将参数转换为数字，如果是常规数字则为true
console.log(typeof NaN); // number 离谱。。。
console.log(isNaN(NaN)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("789")); // true
console.log(isFinite("r789")); // false

// Object.is() 和 === 在处理一下两种数字类型的情况不一样，其他都一样
console.log(NaN === NaN); // false
console.log(Object.is(NaN.NaN)); // true

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

/**
 * Number() 和 parseInt()|parseFloat()的区别
 */

console.log(+"  2  "); // 忽略空格
console.log(+"123b"); // NaN
console.log(parseInt("   123b123   ")); // 123
console.log(parseFloat("   abc123.33abc")); // NaN
console.log(parseFloat("   123.33b123   ")); // 123.33

// Math.random：0-1的随机数， 不包括1

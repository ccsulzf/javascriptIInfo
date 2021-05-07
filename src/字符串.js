/**
 * 字符串的内部格式始终是UTF-16
 * "" - '' - ``
 */
function test() {
  return "test";
}

console.log(`${test()}`);

console.log("Hello\nWorld");

console.log("Hello\\World"); // Hello\World

console.log(`Hello\World`); // HelloWorld
console.log(`Hello\\World`); // Hello\World

let str1 = new String("123");
let str2 = new String("123");

let str3 = "123";
let str4 = "123";
console.log(typeof str1); // Object
console.log(str1 === str2);
console.log(str3 === str4);

// 字符串是不可改变的 str[0] = 'h' 报错
let str = "Widget";

// 等于-1也输出了
if (str.indexOf("Widget1")) {
  console.log("Found it!"); // 正常运行
}

// 不会输出，～n == `-(n+1);
if (~str.indexOf("Widget1")) {
  console.log("Found it!"); // 正常运行
}

/**
 * 获取子字符串的三种方法
 * start表示第几个位置，end表示下标，但是不包括end
 * 负数从结尾开始
 * str.slice(start,[,end])
 *
 * 和slice一样，但是允许start大于end
 * str.substring(start [, end])
 *
 * 从start几个位置开始数length个字符
 * str.substr(start [, length])
 *
 *  substr()不是JS核心规范中的，在附录B
 *  直接使用slice
 */

console.log("Hello".slice(1, 2)); // e
console.log("Hello".slice(-4, 4)); // ell

console.log("Hello".substring(1, 2)); // e
console.log("Hello".substring(2, 1)); // e
console.log("Hello".substring(-4, 5)); // 负值为0，相当于[0,5]

console.log("Hello".substr(0, 4)); // hell
console.log("Hello".substr(-4, 2)); // el

// 比较编码顺序
console.log("z" > "Z"); // true
console.log("z".codePointAt()); // 122
console.log("Z".codePointAt()); // 90
console.log(String.fromCodePoint(90)); // Z

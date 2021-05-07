/**
 * 为了对原始类型进行操作，需要很多方法，
 * 该方法放在原始类型的包装对象上
 * 、1 -> Number
 *  '1' -> String
 *  false -> Boolean
 *  null,undefined没有任何包装对象
 */

/**
 * str.toUpperCase()发生了什么？
 *   创建一个String包装对象，运行toUpperCase方法
 *   返回新的字符串
 *   String包装对象被销毁
 */
let str = "Hello";
console.log(str.toUpperCase()); // HELLO
console.log(str); // Hello

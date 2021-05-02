let name = "Ilya";
console.log(`hello ${"name"}`);

// 只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串。
console.log("1" + 1); // 11

console.log(1 + "1"); // 11

// 但是对于其他运算符不支持上一个原则
console.log("1" - 1); // 0
console.log("6" / "2"); // 3

console.log(3 ** (1 / 2));

console.log(+"3"); // Number("3")

let a = 1;
console.log(a++); // 2
console.log(++a); //

// 逗号运算符能让我们处理多个语句，但是只有最后的语句的结果才会被返回
let b = (1 + 2, 3 + 4);
console.log(b); // 7

// 分享几个有意思的
console.log(4 + 5 + "px"); // 9px
// 字符串转为数字时，会忽略字符串的首尾处的空格字符
// "\t \n"“常规”的空格，类似于空字符串
console.log("\t \n" - 2); // -2

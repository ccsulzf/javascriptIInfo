/**
 * 和数组的解构赋值差不多，但是这些语法主要是用于函数
 */

// 解构赋值
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); // 1,2,[3,4,5]

// Rest参数必须放到参数列表的末尾
function rest(a, b, ...other) {
  console.log(a, b, other);
}

rest(1, 2, 3, 4, 5); // 1,2,[3,4,5]

// Spread语法 将可迭代对象展开
console.log(other); // [3,4,5]
console.log(...other); // 3,4,5

// 合并数组
console.log([...[1, 2, 3], ...[4, 5, 6]]);

const student = { name: "zs", age: 30 };
const stu1 = { ...student }; // 相当于Object.assign({},student)
console.log(stu1 === student); // fasle

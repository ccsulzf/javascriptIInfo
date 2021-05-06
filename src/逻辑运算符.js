// 或运算将返回第一个真值，如果不存在该真值，则返回最后一个值
console.log(1 || 2); // 1

console.log(0 || undefined || null); // null 而不是false

// 与运算返回第一个假值，如果没有假值就返回最后一个值
console.log(1 && 2); // 2

console.log(0 && undefined && null); // null 而不是fal2134

console.log(-1 && 1); // 1

// 空值合并运算符号
// a??b a已定义，则为a，否则为b
let user;
console.log(user ?? "test"); // test;

/**
 * 解构赋值：将数组或对象拆包到一系列的变量中
 */

// 数组解构

// 数组中不想要的元素可以通过添加额外的逗号进行忽略
let [name, , age] = ["zs", "female", 30];
console.log(name, age);

// 等号的右侧可以是任何可迭代对象
let [a, b, c] = "abc";
console.log(a, b, c);

// 赋值给等号左侧的任何内容
let user = {};
[user.name, user.age] = ["zs", 30];
console.log(user);

// 进行交换变量
let n = 3,
  m = 4;
[n, m] = [m, n];
console.log(n, m); // 4,3

/**
 *  '...'剩余操作符，收集剩余的所有参数
 *   注意：放到最后
 */
let [student1, student2, ...otherStudent] = ["zs", "ls", "ww", "zl"];
console.log(otherStudent); // ['ww','zl']

// 默认值，也可以是函数调用
let [address, city = "cs"] = ["yueluqu"];
console.log(address, city);

function test() {
  return 123;
}
let [hasData, defaultData = test()] = [234];
console.log(hasData, defaultData); // 234,123

// 对象结构

let { color, type } = { color: "orange", type: "dog" };
console.log(color, type);

// 默认值+自定义变量
let { width: w = 100, height: h = 200 } = { width: 200 };
console.log(w, h); // 200,200

/**
 * // 注意陷进
let title,desc;
{title,desc} = {title:'heloo',desc:'how are you'};
js 将{...}当成代码块来进行执行
 */
let title, desc;
// 正确方式
({ title, desc } = { title: "hello", desc: "how are you" });
console.log(title, desc); // hello how are you

// 注意事项
// 如果函数参数存在解构，传一个{}空对象
// showWith(); 报错
showWith({});
function showWith({ width = 200 }) {
  console.log(width);
}

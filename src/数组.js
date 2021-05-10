/**
 * 数组：存储有序的集合
 */

const array = [1, 2, 3, 4];

console.log(array.shift()); // 1
console.log(array.pop()); // 4
console.log(array.unshift(2));
console.log(array); // 2,2,3

// 截断
array.length = 2;
console.log(array); // 2,2

// 数组没有Symbol.toPrimitive和valueOf,只有toString
// 空数组转成""
console.log([] + 1); // 1

// 如果==左右两个参数，一个是对象，另一个是原始类型，会将回想转换为原始类型
console.log([] == ""); // true

let arr = ["a", "b"];

arr.push(function () {
  // this表示该数组
  console.log(this);
});

arr[2](); // a,b,f()

// 连续最大子数组
// O(n),将负数变成0
function getMaxSubSum(data) {
  let maxSum = 0;
  let subSum = 0;
  for (let item of data) {
    subSum += item;

    maxSum = Math.max(subSum, maxSum);
    if (subSum < 0) {
      subSum = 0; // 每次都重置为0
    }
  }
  return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);

/**
 * arr.splice(start[, deleteCount, elem1, ..., elemN])
 * 从第start开始往后删除几个元素，并用后面的替代，返回已经删除的元素
 * start为负数就从后面开始数
 */
let student = ["zs", "ls", "wu", "zl"];
const delArr = student.splice(0, 2, "hello", "world");
console.log(delArr); // ["zs", "ls"]
console.log(student); // ["hello", "world", "wu", "zl"]

student.splice(2, 0, "Fuck"); // ["hello", "world", "Fuck", "wu", "zl"]
console.log(student);

/**
 * arr.slice([start],[end])
 * 从第start开始往后取到索引end(不包含)复制到一个新数组
 * 不改变原数组
 */
let spliceArr = ["h", "e", "l", "l", "o"];

console.log(spliceArr.slice(1, 2));
console.log(spliceArr);

/**
 * arr.concat(arg1,arg2,...)
 * 不改变原数组
 */
const concatArr = [1, 2, 3];
console.log(concatArr.concat(4, 5));
console.log(concatArr);

let arrLike = {
  0: "other",
  1: "thing"
};

console.log(concatArr.concat(arrLike)); // [1, 2, 3, Object]
arrLike[Symbol.isConcatSpreadable] = true;
arrLike.length = 2;
console.log(concatArr.concat(arrLike)); // [1, 2, 3, "other", "thing"]

/**
 * arr.forEach((item,index,array)=>{})
 */

const forArr = [1, 2, 3, 4, 5];
forArr.forEach((item, index, array) => {
  console.log(item, index, array);
});

/**
 * 找到返回索引，否则返回-1
 * arr.indexOf(item.from)
 * arr.lastIndexOf(item.from)
 * 找到返回true，否则返回-1
 * arr.includes(item.from)
 * 全部使用 ===
 * 唯一的区别在于对待NaN上
 */

let indexArr = [1, 2, 3, NaN];
console.log(indexArr.indexOf(1)); // 0
console.log(indexArr.indexOf(2, 1)); // 1
console.log(indexArr.indexOf(2, -3)); //1
console.log(indexArr.indexOf(NaN)); // -1
console.log(indexArr.includes(NaN)); // true

/**
 * 函数返回true 返回item停止搜索，否则返回undefined
 * find((item,index,array)=>{})
 * findIndex((item,index,array)=>{)}
 * 找到符合条件的所有元素
 * filter((item,index,array)=>{})
 */
let findArray = [1, 2, { name: "zs" }];
console.log(findArray.find((item) => item === 1)); // 1
console.log(findArray.findIndex((item) => item === 1)); // 0
console.log(findArray.filter((item) => item > 0)); // [1,2]

/**
 * 对每个元素都调用函数，并返回结果数组
 * map((item,index,array)=>{})
 */
let mapArray = [1, 2, 3, 4];
console.log(mapArray.map((item) => item * 2)); // [2,4,6,8]
console.log(mapArray); // [1,2,3,4]

/**
 * arr.sort(fn)
 * 原位排序：数组内排序，而非生成一个新数组
 */

// 默认按字符串进行排序
console.log([1, 2, 15].sort()); // [1,15,2]

let sortArr = [3, 25, 1, 4];
console.log(sortArr.sort((a, b) => a - b)); // [1，3，4，25]
console.log(sortArr); // 【1，3，4，25】

/**
 * arr.reverse()
 * 这也去改变原数组，我真的吐了，有病吧
 */
let reverArr = [5, 4, 3, 2, 1];
console.log(reverArr.reverse()); //
console.log(reverArr);

/**
 * split可以有第二个参数--对数组长度的限制
 */
console.log("hello".split("", 2)); // ["h", "e"]

/**
 * reduce((accumulator,item,index,array)=>{},initial)
 * accumulator: 上一个函数调用的结果，第一次等于initial
 * initial:可以省略，省略会将数组的第一个元素作为初始值，如果数组为空会导致错误
 * [].reduce((sum, item) => sum + item)
 * TypeError
Reduce of empty array with no initial value
 */

console.log([1, 2, 3, 4].reduce((sum, item) => sum + item, 0)); // 10

/**
 * Array.isArray判断是否是数组
 */
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

console.log([] instanceof Array); // true
console.log({} instanceof Array); // false

/**
 * Fisher–Yates shuffle 洗牌算法
 * 写下从 1 到 N 的数字
  取一个从 1 到剩下的数字（包括这个数字）的随机数 k
  从低位开始，得到第 k 个数字（这个数字还没有被取出），把它写在独立的一个列表的最后一位
  重复第 2 步，直到所有的数字都被取出
  第 3 步写出的这个序列，现在就是原始数字的随机排列
  已经证明如果第 2 步取出的数字是真随机的，那么最后得到的排序一定也是。
 */

function shuffle(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
}
shuffle([1, 2, 3, 4, 5]);

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 }
];

function groupById(array) {
  let obj = {};
  const groupId = function (accu, item) {
    accu[item.id] = item;
    return accu;
  };
  array.reduce(groupId, obj);
  return obj;
}

console.log(groupById(users));

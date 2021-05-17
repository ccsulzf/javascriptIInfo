// 缓存
function calc(x) {
  return x;
}

function cachCalc(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

let testCalc = cachCalc(calc);
console.log(testCalc(1));
console.log(testCalc(2));
console.log(testCalc(1)); // 缓存

// cachCalc 是一个装饰器：一个特殊的函数，接收另一个函数并改变它的行为

// func.call(context,arg1,arg2) // 参数列表
// func.apply(context, [args]) // 数组
function sayHi(word) {
  console.log(word, this.name);
}
sayHi.call({ name: "zs" }, "hello"); // hello zs
sayHi.apply({ name: "zs" }, ["hello"]); // hello zs

// 接收一个函数A，然后返回函数B
// 函数B是基于函数A的加工函数
function spy(func) {
  work.calls = [];
  function work(...args) {
    work.calls.push(args);
    return func.apply(this, args);
  }
  return work;
}

function work(a, b) {
  return a + b;
}
let spyTest = spy(work);

console.log(spyTest(1, 2)); // 3
console.log(spyTest(3, 4)); // 7
console.log(spyTest.calls); // [[1,2],[3,4]]

function f(x) {
  console.log(x);
}

function delay(func, time) {
  return function () {
    // setTimeout 是一个函数而不是函数调用
    // 使用bind 或者使用()=>箭头函数
    setTimeout(func.bind(this, ...arguments), time);
  };
}
let f1000 = delay(f, 1000);
f1000("test");
f1000("hello");

// 防抖：最后一次调用给定等待时间，然后运行函数
function debonce(f, ms) {
  let timerId;
  return function () {
    console.log("arg", ...arguments);
    // 每次调用都会取消前一次的setTimout，直到没有调用了
    clearTimeout(timerId);
    timerId = setTimeout(f.bind(this, ...arguments), ms);
  };
}

let test = debonce(f, 1000);
test("b"); // timerId = undefined timerId = b
test("c"); // clearTimeout(b)  timerId= c
test("d"); // clearTimeout(c) timerId= d 只有一个输出c

// 节流 在每ms毫秒最多将调用传递给f一次
// 比如说页面频繁获取鼠标位置
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments);

    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1500 = throttle(f, 1500);
f1500(1); // 输出1
f1500(2); // 被忽略
f1500(3); // 1500到了输出3

/**
 * 柯里化 -- 函数转换，f(a,b,c)转换成f(a)(b)(c)
 */
function sum(a, b) {
  console.log(a + b);
}
function curr(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
// 可以返回特定初始化参数的函数 感觉有点意思哦
let currSum = curr(sum);

currSum(1)(2); // 3

let initCurr = currSum(2);

initCurr(4);
initCurr(6);

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...arg2) {
        return curried.apply(this, args.concat(arg2));
      };
    }
  };
}

let test = curry(sum);

test(10)(20);

/**
 * async 放在一个函数前面：这个函数总是返回一个resolved(返回值)的promise
 *
 */
let test = async function () {
  return 1;
};

console.log(test() instanceof Promise); // true

test().then((value) => {
  console.log(value); // 1
});

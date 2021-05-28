/**
 * async 放在一个函数前面：这个函数总是返回一个resolved(返回值)的promise
 */
let test = async function () {
  return 1;
};

console.log(test() instanceof Promise); // true

test().then((value) => {
  console.log(value); // 1
});

// await 只能在async函数内工作
// await 暂停函数执行，直到promise完成，然后继续执行
// await 接受thenable对象，具有自己的then(resolve,reject)方法
async function testAwait() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });

  let str = await promise;
  console.log(str);

  console.log("123123llll");
}

testAwait();

console.log("out func");

// 如果在函数内部已经做了错误处理，那么await 返回的promise为resolve
async function testError() {
  try {
    let promise = Promise.reject("hello,error");
    await promise;
  } catch (error) {
    console.log("in fun");
    console.log(error);
  }
}

testError().then(
  () => {
    console.log("success");
  },
  (error) => {
    console.log(error);
  }
);

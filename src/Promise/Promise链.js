let promise = new Promise((resolve, reject) => {
  resolve(2);
});
// promise.then()会返回一个promise，所以才能promise链式调用
const test = promise.then(() => {});

console.log({}.toString.call(test)); // [object Promise]

/**
 * .then返回的不完全是一个promise，而是返回"thenable"对象
 * (具有方法.then的任意对象)
 */
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    return new Thenable(result);
  })
  .then((result) => {
    console.log(result);
  });

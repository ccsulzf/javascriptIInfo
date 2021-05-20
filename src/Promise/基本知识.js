/**
 * let promise = new Promise(executor)
 * executor = function(resolve,reject){}
 *
 * executor: 当promise被创建时，executor会自动运行
 * 它包含最终应产出结果的生产者代码
 *
 * 当executor获得结果，都应该调用一下回调
 *  resolve(value) -- 成功
 *  reject(error) -- 失败
 *
 * new Promise返回的对象具有一下内部属性,无法直接访问
 *  state -- 初始化：pending resolve：fulfilled reject：rejected
 *  result -- 初始化：result resolve：value reject：error
 */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("done");
  }, 1000);
});

/**
 * Promise对象是充当executor和消费函数(then,catch,finally)之间的连接
 */

/**
 * promise.then(
 *   function(result){}
 *   function(error){}
 * )
 */

promise.then(
  () => {
    console.log("success");
  },
  () => {
    console.log("error");
  }
);

// 如果我们只对error感兴趣
// .then(null,errorHandler) === .catch(errorHandler)
promise.catch(() => {
  console.log("error");
});

/**
 * finally(f) 与then(f,f)类似，但是有一下区别
 * 1.finally中的f没有参数，我们不知道promise是否成功
 * 2.finally处理程序将结果和error传递给下一个处理程序
 */

promise
  .finally(() => {
    console.log("finally");
  })
  .catch((error) => {
    console.log(error);
  });

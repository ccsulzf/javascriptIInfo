// Promise.all -
// 并行执行多个promise，并等待所有promise准备就绪
Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
]).then((value) => {
  console.log(value); //[1,2,3]
});

// 如果出现error，其他promise都会被忽略
Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
]).then(
  (value) => {},
  (error) => {
    console.log(error); // rejected
  }
);

// Promise.allSettled 等待promise都执行完
// 返回一个数组
// {status: "fulfilled",value: result}
// {status: "rejected",reason: error}
Promise.allSettled([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
]).then((value) => {
  console.log("-----");
  console.log(value);
});

// Promise.race等待最快的那个promise，无论成功与否
Promise.race([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, 500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
]).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error" + error);
  }
);

// Promise.resolve(value)用value创建一个resolved的promise
// Promise.reject(error)用error创建一个rejected的promise

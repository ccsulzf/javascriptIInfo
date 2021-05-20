// 当一个promise被reject时，控制权将移至最近的rejection处理程序

// executor自动捕获error，将其变成rejected promise
new Promise(() => {
  throw new Error("123");
}).catch((err) => {
  console.log(err); //
});

new Promise((resolve, reject) => {
  reject(new Error("123"));
}).catch((err) => {
  console.log(err); //
});

new Promise(() => {
  throw new Error("123");
})
  .then(
    () => {},
    (error) => {
      throw new Error("234");
    }
  )
  // 如果处理error正常完成，将继续到最近的成功的.then()处理程序
  .catch(() => {
    throw new Error("678");
  })
  .then(
    () => {
      console.log("success"); // success
    },
    () => {
      console.log("failed");
    }
  );

// 未处理的rejection
/**
 * JS引擎会跟踪此类的rejection，生成一个全局的error
 * 可以监听unhandledrejection来进行捕获
 */
// new Promise(() => {
//   throw new Error("123");
// });

// window.addEventListener("unhandledrejection", (error) => {
//   console.log(error);
// });

/**
 * 将函数推迟一段时间间隔再执行
 * let timerId = setTimeout(func,[delay],[arg1],[arg2])
 * 将函数推迟一段时间间隔再执行，以该时间间隔连续执行该函数
 * let timerId = setTimeout(func,[delay],[arg1],[arg2])
 *
 * func 为字符串为自动创建一个函数，不建议使用
 */

let timerId = setTimeout(
  (name) => {
    console.log(name); // zs
  },
  3000,
  "zs"
);

// clearTimeout -- 取消调用
setTimeout(() => {
  clearTimeout(timerId);
}, 1000);

// 可以使用setTimeout来模拟周期性调度
// 比setInterval灵活的多，可以自定义time
let dateNow = Date.now();
// let cycleTimerId = setTimeout(function tick() {
//   console.log("use setTimeout to cycle");
//   if ((Date.now() - dateNow) / 1000 > 10) {
//     console.log("------overload");
//     clearTimeout(cycleTimerId);
//   } else {
//     cycleTimerId = setTimeout(tick, 2000);
//   }
// }, 2000);

// function printNumbers(from, to) {
//   let timerId = setInterval(() => {
//     if (from === to) {
//       clearInterval(timerId);
//     }
//     console.log(from);
//     from++;
//   }, 1000);
// }

function printNumbers(from, to) {
  let timerId = setTimeout(function tick() {
    console.log(from);
    if (from === to) {
      clearTimeout(timerId);
    } else {
      from++;
      timerId = setTimeout(tick, 1000);
    }
  }, 1000);
}

printNumbers(1, 10);

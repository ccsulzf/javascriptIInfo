let i = 3;

while (i > 0) {
  console.log(i);
  i--;
} // 3,2,1

let n = 3;
do {
  console.log(n);
  n--;
} while (n > 0); // 3,2,1

/**
 * for(begin;condition;step){
 *    body
 * }
 * begin:进入循环时执行一次
 * condition: 在每次循环迭代之前检查，如果为false，停止循环
 * body：检查为真，执行
 * step：每次循环体迭代后执行
 */

for (let i = 0; i < 3; i++) {
  console.log(i);
} // 0.1,2

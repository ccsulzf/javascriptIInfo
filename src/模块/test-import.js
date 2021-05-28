import { sayHi } from "./test-export";
sayHi("zs");

// 动态导入
async function test() {
  let temp = await import("./test-export");
  console.log(temp.sayHi("ls"));
}

test();

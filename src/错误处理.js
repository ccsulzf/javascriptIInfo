/**
 * try...catch 捕获错误。而不是让整个脚本停止运行
 * 仅对运行时的error有效，语法错误无法正常工作
 */

try {
  test;
} catch (err) {
  console.log(err); // test is not defined
}

try {
  setTimeout(() => {
    test;
  });
} catch (err) {
  console.log(err); // 捕获不到
}

setTimeout(() => {
  try {
    test;
  } catch (err) {
    console.log(err); // test is not defined
  }
});

// finally子句适用于try...catch的任何出口
function test() {
  try {
    return 1;
  } catch {
  } finally {
    console.log("finally---");
  }
}
test(); // finally---

// 自定义错误
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("format");
console.log(err.message);
console.log(err.name);

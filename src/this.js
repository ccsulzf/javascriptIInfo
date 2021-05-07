/**
 * this的值是在代码运行时计算出来的，取决于代码上下文
 */
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log(user);

function makeUser1() {
  return {
    name: "John",
    ref: function () {
      return this;
    }
  };
}

let user1 = makeUser1();

console.log(user1.ref().name); // John

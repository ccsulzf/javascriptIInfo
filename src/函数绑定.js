// func.bind(context,arg1,arg2) 函数中的this=context
// bind的上下文是硬绑定，没办法再进行修改

let user = {
  name: "Jhon",
  sayHi() {
    console.log("hello", this.name);
  }
};

let sayHi = user.sayHi.bind(user);

sayHi(); // hello jhon

user = {
  sayHi() {
    console.log("Another user in setTimeout!");
  }
};

// 这么神奇？？？
// sayHi中this是对旧user的引用
sayHi(); // hello jhon

// 偏函数 -- 绑定先有的函数的一些参数来创建一个新函数
function mul(a, b) {
  console.log(a * b);
}
let double = mul.bind(null, 2);

double(3); // 6

function test() {
  console.log(this.name);
}

// 函数不能被重新绑定
const testFunc = test.bind({ name: "zs" }).bind({ name: "ls" });

testFunc(); // zs

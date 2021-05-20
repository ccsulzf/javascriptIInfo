/**
 *
 */

class Student {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }
}

const student = new Student("zs");
student.say();

console.log(typeof Student); // function
console.log(Object.getPrototypeOf(student).constructor); // Student
// ["constructor", "say"]
console.log(Object.getOwnPropertyNames(Student.prototype));
// 上面的代码相当于
function StudentFun(name) {
  this.name = name;
}
StudentFun.prototype.say = function () {
  console.log(this.name);
};

const student2 = new StudentFun("ls");

student2.say();

/**
 * class不仅仅是Fcuntion的语法糖
 *  class 必须使用new来调用
 *  类方法不可枚举
 *  类构造中的所有代码自动进入严格模式
 */

console.log(Object.getOwnPropertyDescriptors(Student.prototype));

// 类字段是一种允许添加任何属性的方法
// 会在每个独立对象上，而不是prototype

class User {
  // 当前不支持
  // name = "zs";
  say() {
    console.log(this.name);
  }
}

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }

  // 相当于类字段
  // click2 = () => {
  //   console.log(this.value);
  // };
}

let button = new Button("Hello");
button.click();

// this丢失
setTimeout(button.click, 1000);

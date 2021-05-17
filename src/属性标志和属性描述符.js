/**
 * 对象属性value，额外有三个特殊的特性
 *  writable --  为true可以被修改，否则只可读
 *  enumerable -- 为true该属性可被循环输出
 *  configurable -- 为true改属性可被删除,可被修改
 */

// Object.getOwnPropertyDescriptor(obj,propertyName) -- 包含所有的值和标志

let student = {
  name: "zs"
};

// {value: "zs", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(student, "name"));

//Object.defineProperty(obj, propertyName, descriptor) - 修改标志
Object.defineProperty(student, "name", {
  value: "ls"
});

Object.defineProperty(student, "name", {
  value: "ls",
  writable: false
});

Object.defineProperty(student, "age", {
  value: 30,
  writable: false
});

// 如果属性不存在，一样生效
// student.age = 40;
// 报错
// student.name = "ww";

let tearcher = {
  name: "ls",
  toString() {
    return this.name;
  }
};
for (let key in tearcher) {
  console.log(key);
}
// name toString

Object.defineProperty(tearcher, "toString", {
  enumerable: false
});

for (let key in tearcher) {
  console.log(key);
} // name

/**
 * 单行道
 * configurable 无法使用defineProperty把它改回去
 * 不能修改 configurable 标志
 * 不能修改 enumerable 标志
 * 不能将 writable: false 修改为 true（反过来则可以）
 * 不能修改访问者属性的 get/set（但是如果没有可以分配它们）
 *
 * 防止更改和删除属性标志，但是允许更改对象的值
 */
Object.defineProperty(student, "name", {
  configurable: false
});

// 报错Cannot redefine property: name
// Object.defineProperty(student, "name", {
//   configurable: true
// });

// 报错 TypeError: Cannot delete property 'name' of #<Object>
// delete student.name;

let user = {
  name: "John"
};

// Object.defineProperty(user, "name", {
//   configurable: false,
//   writable: false
// });

// user.name = "123";
// delete user.name;

// 一次获取多有属性描述符(包含Symbol)
console.log(Object.getOwnPropertyDescriptors(student));

// 可以clone属性标志符
let clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(student)
);
console.log(Object.getOwnPropertyDescriptors(clone));

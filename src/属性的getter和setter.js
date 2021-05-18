/**
 * 数据属性：{name:'123'}
 * 访问器属性：获取和设置值是函数，但是从外部代码就像常规属性
 * {set name(value){this.value = value},get name(value){return value}}
 * 属性要么是访问器属性，要么是数据属性
 */

let student = {
  name: "zs",
  surname: "ls",
  get fullName() {
    return this.name + this.surname;
  }
};

console.log(student.fullName);
// 报错 没有setter访问器属性
// student.fullName = "123";

Object.defineProperty(student, "age", {
  get() {
    return 30;
  },
  set(value) {
    this.value = value;
  }
});
console.log(student.age); // 30
student.age = 40;
console.log(student.age); //30

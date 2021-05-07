/**
 * 构造函数：
 *    大写字母开头
 *    new操作符来执行
 * new发生了什么？
 *    创建一个空的对象
 *    将空对象的__proto__指向构造函数的prototype
 *    执行构造函数，为该对象添加属性和方法
 *    返回该对象
 */
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user = new User("zs", "13");
console.log(user);

// 模仿new的方法
function mockNew(Constructor, ...params) {
  // 使用现有的对象来提供创建新的对象的__proto__
  const object = Object.create(Constructor.prototype);
  const result = Constructor.apply(object, params);
  return result || object;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = mockNew(Person, "zs", 30);

console.log(person);
console.log(person instanceof Person);

/**
 * 构造函数的return
 * 如果renturn返回的是一个对象，则返回这个对象，而不是this
 * 如果return返回的是一个原始类型，则忽略
 */
/**
 * 是否可以创建new A() == new B() 
 * function A() { ... }
    function B() { ... }

    let a = new A;
    let b = new B;

    alert( a == b ); // true

    乍一看挺吓人的
    let obj = {}
    A和B函数体都返回obj
    return obj
 */

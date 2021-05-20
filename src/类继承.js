class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log("run", this.speed);
  }

  stop() {
    this.speed = 0;
    console.log("stop", this.speed);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log("Rabbit Hides");
  }
}

const rabbit = new Rabbit();

rabbit.run(5);
console.log(Object.getPrototypeOf(rabbit));

console.log(rabbit.__proto__ == Rabbit.prototype); // true

// extends后允许任意表达式

// 有点意思哦
// 使用函数生成类
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends f("hello") {}

new User().sayHi(); // hello

/**
 * "super"关键字
 *  super.method()来调用父类的方法
 *  super()来调用父类的constructor
 *   方法在内部的 [[HomeObject]] 属性中记住了它们的类/对象。这就是 super 如何解析父方法的。
 *   因此，将一个带有 super 的方法从一个对象复制到另一个对象是不安全的。
 */
class Pig extends Animal {
  stop() {
    super.stop();
  }
}

let pig = new Pig();
pig.run(10);
pig.stop();
console.log(pig.speed);

/**
 * 如果一个类extends另一个类且没有constructor，自动调用
 * constructor(...args){
 *  super(...args)
 * }
 */

/**
 * 实现自己的constructor
 *  必须调用父类的cnstructor super()
 *  必须在this之前
 */
class Dog extends Animal {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
  }
}

const dog = new Dog("zs", 20);
console.log(dog);

console.log(dog.__proto__ === Dog.prototype); // true
console.log(dog instanceof Animal);
console.log(Animal.prototype);
console.log(Object.prototype);
console.log(Dog.prototype.__proto__ === Animal.prototype);
console.log(Dog.__proto__ === Animal);

// 扩展内建类
// 还能这么玩，有点意思
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 3, 40, 50);

console.log(arr.isEmpty());

let filterArr = arr.filter((item) => item > 10);

/**
 * 内建的方法如filter等返回的是子类PowerArray的新对象
 * 当一个类扩展另一个类时，静态方法和非静态方法都会被继承
 * 内建类不一样，相互间不继承静态方法
 */
console.log(filterArr instanceof PowerArray); // true
console.log(filterArr.isEmpty()); // false

// 我们可以定制这种行为
// Symbol.species 其被构造函数用以创建派生对象

class PowerArray1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
  isEmpty() {
    return this.length === 0;
  }
}

let arr1 = new PowerArray1(1, 2, 3, 40, 50);
let filterArr1 = arr1.filter((item) => item > 10);
console.log(filterArr1 instanceof PowerArray); // false
// console.log(filterArr1.isEmpty()); // 报错

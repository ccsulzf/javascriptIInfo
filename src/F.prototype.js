/**
 * F.prototype是一个对象，new操作服会使用它为新对象设置[[Prototype]]
 * F.prototype = {constructor:F}
 * F.prototype要么是一个对象，要么是null，其他值不起作用
 */

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("zs");

console.log(rabbit.eats);

// instanceof检测构造函数的prototype属性是否存在某个实例对象的原型链上
console.log(rabbit instanceof Rabbit);

// F.protptype是一个只有属性constructor的对象，constructor指向函数自身
function Student(name) {
  this.name = name;
}
console.log(Student.prototype.constructor === Student); // true

let student = new Student("ls");

// 当我们有一个对象，不知道它使用了什么构造器，但是我们需要创建另一个类似的对象
// 可以使用一下方法
let student1 = new student.constructor("ww");
console.log(student.constructor === Student);
console.log(student1);

function People() {}

People.prototype = { say: true };

let people = new People();

People.prototype = {};

// Amazing
// F.prototype仅用在new F时
/**
 * F.prototype属性仅在new F被调用时使用，它为新对象的[[Prototype]]赋值
 * 如果在创建之后，F.prototype属性有了变化(F.prototype={})，那么通过
 * new F创建的新对象也将随之拥有新的对象作为[[F.prototype]],但已经存在的对象
 * 将保持旧有的值
 */
console.log(people.say); // true

console.log(people.__proto__);
console.log(people.__proto__ === People.prototype);

delete people.say;
console.log(people.say);

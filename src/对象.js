function test() {}
let user = {
  [test()]: "123"
};

console.log(user);

let name = "lzf";

let student = {
  name, // 与 name:name 相同
  age: 30,
  2: "3",
  1: "2"
};

console.log(student);

// 还能这么用
console.log("name" in student); // true
// 我之前只知道这么用
// 整数属性会被进行排序，其他属性按照创建的顺序
// 整数属性：一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串

for (let key in student) {
  console.log(key);
} // 1 2 name age

// 深拷贝的自我实现
function cloneDeep(target, source) {
  for (let key in source) {
    if (typeof source[key] === "object") {
      target[key] = {};
      cloneDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

let people = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let temp = {};
cloneDeep(temp, people);
console.log(temp.sizes === people.sizes); // false
people.sizes.height = 199;
console.log(temp);

let obj = {};
Object.assign(obj, people);
// 浅拷贝
console.log(obj.sizes === people.sizes); // true

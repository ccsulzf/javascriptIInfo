/**
 * JSON 一种数据格式
 * JSON支持：object,array,string,number,boolean 和 null
 */

let student = {
  name: "zs",
  age: 30,
  arr: [1, 2, 3, 4],
  is: false
};

// {"name":"zs","age":30,"arr":[1,2,3,4],"is":false}
console.log(JSON.stringify(student));

/**
 * 注意事项：
 *  特定的js对象属性会被JSON.stringify()跳过
 *   函数方法
 *   Symbol类型的属性
 *   存储undefined的属性
 */

student.fun = () => {};
student[Symbol("hello")] = 123;
student.other = undefined;
// {"name":"zs","age":30,"arr":[1,2,3,4],"is":false}
console.log(JSON.stringify(student));

// 不能有循环引用
let room = { number: "23m" };
let meetup = { title: "hello" };
room.place = meetup;
meetup.some = room;
// TypeError: Converting circular structure to JSON
// console.log(JSON.stringify(room));

/**
 * JSOn.stringify(value[,replace,space])
 */
meetup = {
  title: "Conference",
  people: [{ name: "John" }]
};

// {"title":"Conference","people":[{}]}
console.log(JSON.stringify(meetup, ["title", "people"]));
// {"title":"Conference","people":[{"name":"John"}]}
console.log(JSON.stringify(meetup, ["title", "people", "name"]));
/**
 * {
  "title": "Conference",
  "people": [
    {
      "name": "John"
    }
  ]
} 
 */
console.log(JSON.stringify(meetup, ["title", "people", "name"], 2));

// 自定义toJSON--对象提供toJSON方法来进行调用

let obj = {
  name: "zs",
  toJSON() {
    return this.name;
  }
};

console.log(JSON.stringify(obj)); // zs

/**
 * JSON.parse(str,[reviver])
 * 解析JSON字符串
 */

let str = '{"title":"Demo","date":"2021-05-02"}';

console.log(JSON.parse(str)); // {title: "Demo", date: "2021-05-02"}

const strObj = JSON.parse(str, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});

console.log(strObj.date.getFullYear()); // 2021

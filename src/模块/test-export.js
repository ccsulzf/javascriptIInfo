console.log("parse import");
console.log(this); // undefined
export function sayHi(name) {
  console.log("hi", name);
}

function testOne() {}

function testTwo() {}

export { testOne, testTwo };

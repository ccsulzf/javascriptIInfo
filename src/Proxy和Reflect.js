/**
 * let proxy = new Proxy(target,handler)
 */

// 如果没有handler，直接对target进行处理
let target = {};
let proxy = new Proxy(target, {});
proxy.x = 5;
console.log(target);

// Proxy的handler会拦截一些方法的调用，具体参考Proxy规范

// get(target,property,receiver)
let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
});

console.log(numbers[1]);
console.log(numbers[123]);

// set(target,property,value,receiver)

let onlyNumberArr = [];
onlyNumberArr = new Proxy(onlyNumberArr, {
  set(target, prop, value) {
    if (typeof value === "number") {
      target[prop] = value;
      return true;
    } else {
      return false;
    }
  }
});

onlyNumberArr.push(1);
onlyNumberArr.push(2);

console.log(onlyNumberArr);
// onlyNumberArr.push("test"); // 报错

// OwnKeys(target)
let user = {
  name: "John",
  age: 30,
  _password: "***"
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  }
});
console.log(Object.keys(user)); // ["name", "age"]
console.log(user);

// has 处理 in range
let range = {
  start: 1,
  end: 10
};
range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});

console.log(5 in range); // true
console.log(100 in range); // false

// apply(target,thisArg,args)

function delay(f, ms) {
  return function () {
    setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  };
}

function sayHello(name) {
  console.log("Hello,", name);
}

const delaySay = delay(sayHello, 3000);

delaySay("zs");

// 使用Proxy

function delayProxy(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

let delayProxySay = delayProxy(sayHello, 3000);
delayProxySay("ls");

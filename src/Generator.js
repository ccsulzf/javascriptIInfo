/**
 * Generator函数被调用，返回一个"generator object"
 * 来管理执行流程
 */

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let sequence = generateSequence();

console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

// Generator是可迭代的，但是return会被忽略
function* generatorOne() {
  yield 1;
  yield 2;
  return 3;
}
for (let item of generatorOne()) {
  console.log(item);
}

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...range]);

function* gen() {
  let result = yield "test";

  console.log(result);
  return 4;
}

let testGen = gen();
console.log(testGen.next().value);
console.log(testGen.next(2)); //

// 异步的generator
async function* generatorAysnc(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generatorAysnc(1, 5);
  for await (let value of generator) {
    console.log(value);
  }
})();

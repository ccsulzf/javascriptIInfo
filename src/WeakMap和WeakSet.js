/**
 * 如果把一个对象放入数组中，只要这个数组存在
 * 这个对象也存在，即时没有其他对象对该对象的引用
 */

// join所引用的对象存储在Array中，所以即使为null也不会被垃圾回收机制回收
// 类似的Map和Set也是一样
let john = { name: "John" };

let array = [john];

john = null; // 覆盖引用

/**
 * WeakMap不会阻止垃圾回收机制对对象的回收
 * WeakMap的key必须是object
 * 不能迭代
 * 只有一下方法：
 *  weakMap.get(key)
    weakMap.set(key, value)
    weakMap.delete(key)
    weakMap.has(key)
    场景：
      依赖外部对象共存亡
 */

let john1 = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john1, "...");

john1 = null; // 覆盖引用

console.log(weakMap.has(john1)); // false
// john 被从内存中删除了！

/**
 * WeakSet只能存储对象
 * 不能迭代
 */

let zs = { name: "zs" };
let ls = { name: "ls" };
let ww = { name: "ww" };
const weakSet = new WeakSet();
weakSet.add(zs);
weakSet.add(ls);
weakSet.add(ww);
zs = null;
console.log(weakSet.has(zs)); // false

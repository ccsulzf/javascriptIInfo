/**
 * 递归：函数调用自身，将复杂的任务分解成简单的任务
 * // 缺点--每次递归内存都要保存函数的执行上下文，递归深度一大，容易内存溢出
 * 像我们通常作用于菜单需要递归来处理父子菜单
 */
function pow(x, n) {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
}

console.log(pow(2, 3));

/**
 * 链表:
 *  value
 *  next属性引用下一个链表元素
 * 链表vs数组：
 *  链表删除插入
 *  数组的下标查找
 */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: null
    }
  }
};

// 链表的头插入一个元素
list = { value: 0, next: list };

// 删除中间的一个元素
list.next = list.next.next;
console.log(list); // 把value=1的删除了

let sum = 0;
function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

console.log(sumTo(5));

function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value);
}

printList({
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: null
    }
  }
}); // 0,1,2

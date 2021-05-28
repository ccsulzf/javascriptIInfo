/**
 * Reference Type JavaScript语言内部的一个规范类型
 * Reference Type(base,name,strict)
 * base: 对象
 * name：属性名
 * strict: 是否为严格模式
 * 进行赋值操作hi=user.hi等其他操作，都会将Reference Type作为一个整体丢弃掉
 * 而会取user.hi的值并继续传递，
 */
let user = {
  name: "zs",
  say() {
    console.log("----", this);
  },
  jump() {
    console.log(this);
  }
};

// this 为undefined
(user.name === "zs" ? user.say : user.jump)();
(user.name === "zs" ? user.say : user.jump).apply(user, {});

/**
 * Mixin:一个包含可被其他类使用而不需继承的方法的类
 */

let sayMixin = {
  say(name) {
    console.log("Say ", name);
  }
};

let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    super.say(this.name);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("zs").sayHi(); // Say zs

// 事件的监听器
let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};

    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;

    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  }
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

let selectFun = (value) => console.log("Value selected1 " + value);
menu.on("select", selectFun);
menu.on("select", selectFun);

menu.choose("123");
menu.off("select", selectFun);
menu.choose("234");
menu.choose("234");
menu.choose("234");

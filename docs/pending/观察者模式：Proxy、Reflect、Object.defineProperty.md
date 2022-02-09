# proxy

- <https://zh.javascript.info/proxy>

- <https://es6.ruanyifeng.com/#docs/proxy>

`let proxy = new Proxy(target, handler)`

- target —— 是要包装的对象，可以是任何东西，包括函数。
- handler —— 代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 get 捕捉器用于读取 target 的属性，set 捕捉器用于写入 target 的属性，等等。

```js
let target = {};
let proxy = new Proxy(target, {}); // 空的 handler 对象
```

Proxy 是一种特殊的“奇异对象（exotic object）”。它没有自己的属性。如果 handler 为空，则透明地将操作转发给 target。

对于每个内部方法，此表中都有一个捕捉器：可用于添加到 new Proxy 的 handler 参数中以拦截操作的方法名称：

![image](https://user-images.githubusercontent.com/33340988/110613771-9b13a700-81cc-11eb-8fb0-db56ad568d7f.png)

## 使用 `set` 和 `get`

- `set` 手动修改值

```js
let obj = {
  name: "mly",
  age: 10,
};

let newObj = new Proxy(obj, {
  get(target, property) {
    console.log("get", target, property);
  },
  set(target, property, value, reciever) {
    target[property] = value; //手动修改
    console.log("set", target, property, value, reciever);
  },
});
```

## Reflect

Reflect 是一个内建对象，可简化 Proxy 的创建。

前面所讲过的内部方法，例如 [[Get]] 和 [[Set]] 等，都只是规范性的，不能直接调用。

Reflect 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。

以下是执行相同操作和 Reflect 调用的示例：

![image](https://user-images.githubusercontent.com/33340988/111283554-38158a80-867a-11eb-9b05-2650f27a26ed.png)

对于每个可被 Proxy 捕获的内部方法，在 Reflect 中都有一个对应的方法，其名称和参数与 Proxy 捕捉器相同。

所以，我们可以使用 Reflect 来将操作转发给原始对象。

```js
let obj = {
  name: "mly",
  age: 10,
};

let newObj = new Proxy(obj, {
  get(target, property, receiver) {
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value) {
    console.log(target[property], value);
    return Reflect.set(target, property, value);
  },
});
```

## Object.defineProperty

# 观察者模式

## ES5 实现

```js
var obj = {
  age: 1,
  name: "hello",
};
function observer(oldVal, newVal) {
  console.info("name属性的值从 " + oldVal + " 改变为 " + newVal);
}

Object.defineProperty(obj, "name", {
  get: function () {
    console.log("读取");
    return name;
  },
  set: function (val) {
    observer(name, val);
    name = val;
  },
});

obj.name = "mly";
```

## Proxy 实现

```js
let obj = {
  name: "mly",
  age: "1",
};

let observerProxy = new Proxy(obj, {
  set(target, property, value, reciever) {
    if (property === "name") {
      observer(target[property], value);
    }

    Reflect.set(target, property, value, reciever);
  },
});

function observer(oldVal, newVal) {
  console.info(`name属性的值从 ${oldVal} 改变为 ${newVal}`);
}
```

## Class 实现

```js
class TargetObj {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
    observer(name, val);
  }
}

let obj = new TargetObj(1, "mly");
function observer(oldVal, newVal) {
  console.info("name属性的值从 " + oldVal + " 改变为 " + newVal);
}
```

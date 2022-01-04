# bind、call、apply

- https://zhuanlan.zhihu.com/p/71553017
- `bind()` 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
- `call()` 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
- `apply()` 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

## 手写 call

```js
Function.prototype.myCall = function (thisArg, ...args) {
  thisArg.temp = this;
  const result = thisArg.temp(...args);
  delete thisArg.temp;
  return result;
};

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin
```

## 手写 apply

```js
Function.prototype.myApply = function (thisArg, args) {
  thisArg.temp = this;
  const result = thisArg.temp(args);
  delete thisArg.temp;
  return result;
};

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.myApply(user); // John
sayHi.myApply(admin); // Admin
```

## 手写 bind

```js
Function.prototype.myBind = function (thisArg, ...args) {
  const func = this;
  return function (...otherArgs) {
    return func.call(thisArg, ...args, ...otherArgs);
  };
};

function getName() {
  console.log(this, ...arguments);
}

const changeBind = getName.myBind({ name: "Lily" }, 1, 2, 3);
changeBind(4, 5, 6);
```

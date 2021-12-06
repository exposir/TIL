## JavaScirpt

### 数据类型

- 7 个原始值，一个对象。

- string
- number
- bigint
- boolean
- symbol
- null
- undefined
- 对象

### javascript 核心特性

- 面向对象，所有数据类型都是对象，有 class
- JavaScript 使用了原型继承来实现对象系统，并基于原型继承实现了具备类继承特征的对象系统。
- 在早期的 JavaScript 中并没有类，只是使用“构造器（constructor）”来实现类的某些功能，直到 ES6 才开始正式支持类。

### 如何理解 javascript 中一切都是对象？

- JavaScript 里的 null 和 undefined 不是对象，其余都是对象。
  所谓对象其实主要是除 null 和 undefined 以外都以原型链的形式直接或间接继承自 Object。
- 基本数据类型不是对象。不过还是可以像对象那样调用原型上的方法（方法中的 this 是 wrapper 对象）。

### call、applay、bind

- obj.myFun.call(db,'成都','上海')；
- obj.myFun.apply(db,['成都','上海']);
- obj.myFun.bind(db,'成都','上海')();

### new 出的和普通方法创建的字符串有哪些方面的区别？

- new String(‘xxx’) 得到的是对应字符串的包装对象，这只是和其他 primitive 值的包装对象类似，而 String/Number/Boolean 这种包装类是从 Java 学来的。但是这种装箱本就是自动的，手动 new 去创建其实没什么用处，不要用。
- 最本质区别是 string 是基本类型，new String()是引用类型。

### 构造函数是什么？

构造函数在技术上是常规函数。不过有两个约定：

1. 它们的命名以大写字母开头。
2. 它们只能由 new 操作符来执行。

### new 操作符的原理是什么？

- 返回一个新的对象。
- 把构造函数的 this 指向这个新的对象
- 把新对象的**proto**指向构造函数的 prototype
- 当构造函数没有返回值或者返回值是基础数据类型的时候，使用 new 的时候会返回实例对象，忽略返回值。
- 当构造函数的返回值是 Object、Array、Function 等引用类型的时候，使用 new 会返回这个引用类型，忽略构造函数。

```js
function myNew(context) {
  let obj = {}; //新建一个对象
  obj.__proto__ = context.prototype; //把实例对象的原型指向构造函数的原型对象
  let result = context.apply(obj, [...arguments]); //绑定this  传入参数
  return result instanceof Object ? result : obj;
}
```

### 箭头函数特点：

- 没有 `this`
- 没有 `arguments`
- 不能使用 `new` 进行调用
- 没有 `super`
- 没有 `prototype`

### 箭头函数不能用作构造函数

箭头函数没有`prototype`，所以箭头函数不能用作构造器（constructor）。不能用 new 调用它们。

### 常规函数的 this

谁调用 this 指向谁，没有人调用 this 指向 window

### 箭头函数 => 和使用 .bind(this) 调用的常规函数之间有细微的差别：

- .bind(this) 创建了一个该函数的“绑定版本”。
- 箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

## 原型、原型链

https://zh.javascript.info/prototype-inheritance

### 原型简史

- 构造函数的 "prototype" 属性自古以来就起作用。
- 之后，在 2012 年，Object.create 出现在标准中。它提供了使用给定原型创建对象的能力。但没有提供 get/set 它的能力。因此，许多浏览器厂商实现了非标准的 **proto** 访问器，该访问器允许用户随时 get/set 原型。
- 之后，在 2015 年，Object.setPrototypeOf 和 Object.getPrototypeOf 被加入到标准中，执行与 **proto** 相同的功能。由于 **proto** 实际上已经在所有地方都得到了实现，但它已过时，所以被加入到该标准的附件 B 中，即：在非浏览器环境下，它的支持是可选的。
- 用 Object.setPrototypeOf 或 obj.**proto**= “即时”更改原型是一个非常缓慢的操作，因为它破坏了对象属性访问操作的内部优化，请避免使用它。

- 在 JavaScript 中，所有的对象都有一个隐藏的 [[Prototype]] 属性，它要么是另一个对象，要么就是 null。
- 我们可以使用 `obj.__proto__` 访问它
- 通过 [[Prototype]] 引用的对象被称为“原型”。
- 如果我们想要读取 obj 的一个属性或者调用一个方法，并且它不存在，那么 JavaScript 就会尝试在原型中查找它。
- 写/删除操作直接在对象上进行，它们不使用原型
- 如果我们调用 obj.method()，而且 method 是从原型中获取的，this 仍然会引用 obj。因此，方法始终与当前对象一起使用，即使方法是继承的。
- `for..in` 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用。

```js
//设置 Rabbit.prototype = animal 的字面意思是：“当创建了一个 new Rabbit 时，把它的 [[Prototype]] 赋值为 animal”。

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert(rabbit.eats); // true
```

```js
const 构造函数 = function () {
  this.name = "构造函数";
};
const 实例 = new 构造函数();

const 对象 = {
  name: "对象",
};

const 原生对象 = Object.create({});
const null对象 = Object.create(null);

class class构造函数 {
  constructor() {
    this.name = class构造函数;
  }
}
const class实例 = new class构造函数();

console.log(Object.__proto__); //ƒ () { [native code] }

console.log(构造函数.__proto__); //ƒ () { [native code] }
console.log(实例.__proto__); //{constructor: ƒ}

console.log(对象.__proto__); //{constructor: ƒ, ...}

console.log(原生对象.__proto__); //{}
console.log(null对象.__proto__); //undefined

console.log(class构造函数.__proto__); //ƒ () { [native code] }
console.log(class实例.__proto__); //{constructor: ƒ}

console.log(构造函数.prototype === 实例.__proto__);
console.log(class构造函数.prototype === class实例.__proto__);
```

```js
class A {}
class B extends A {}

const b = new B();
```

![image](https://user-images.githubusercontent.com/33340988/111073257-076a0f80-8519-11eb-92f4-94747b0b2859.png)

- Function 本身是一个函数。而所有函数都是 Function 的实例。所以 Function 是 Function 的实例

```js
Function.__proto__ === Function.prototype;
```

```js
Function.__proto__; // ƒ () { [native code] }
Function.__proto__; // {constructor: ƒ, __defineGetter__: ƒ...}
Function.__proto__.__proto__.__proto__; // null
```

## instanceof 和 typeof

## typeof

- typeof 来判断 number, string, object, boolean, function, undefined, symbol、bigInt
- typeof 判断 object 是不能准确判断是哪一种 object

### typeof 原理

js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 1：整数

于 undefined 和 null 来说，这两个值的信息存储是有点特殊的。

- null：所有机器码均为 0
- undefined：用 −2^30 整数来表示

所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为 0，因此直接被当做了对象来看待。

- `Object.prototype.toString.call(1)`可以对一个变量进行一个较为准确的判断。

### instanceof 原理

- instanceof 主要的作用就是判断一个实例是否属于某种类型

```js
let person = function () {};
let nicole = new person();
nicole instanceof person; // true
```

- instanceof 主要的实现原理就是只要右边变量的 `prototype` 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype
- `person.prototype === nicole.__proto__`

## 题目一

```js
// 下面两行语句的结果是，为什么
Function instanceof Object;
Object instanceof Function;
```

因为`Function.prototype === Function.__proto__` 所以都返回 `true`

## 题目二

再比如下面的写法和上面写法的有什么区别？该如何弥补？

```js
function A() {}
function B() {}

B.prototype = Object.create(A.prototype);

const b = new B();
```

`Object.create()`实现原型继承：

```js
function A() {}
function B() {}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = A;
B.__proto__ = A;

const b = new B();
```

## 继承

### 组合继承

```js
function Animal(type) {
    this.type = type;
}
​
function Bird(type, color) {
    Animal.call(this, type);
    this.color = color;
}
​
const bird = new Bird('bird', 'green');
console.log(bird); // => Bird { type: 'bird', color: 'green' } 
```

组合继承核心代码就是那句 Animal.call(this, type)，通过调用父类构造器并修改其 this 指向为子类实例来达到子类实例上组合父类的实例属性目的。

### 类继承

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // 调用父类的 stop
    this.hide(); // 然后 hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit 以速度 5 奔跑
rabbit.stop(); // White Rabbit 停止了。White rabbit hide 了！
```

# defer async

![image](https://user-images.githubusercontent.com/33340988/111978209-a3f66800-8b3e-11eb-91dd-c5ff26fa8b6b.png)

# JavaScript 世界万物诞生记

- [JavaScript 世界万物诞生记](https://zhuanlan.zhihu.com/p/22989691)

![image](https://user-images.githubusercontent.com/33340988/112745528-b3acfb00-8fdb-11eb-9546-06905800689f.png)

# 重学 Javascript（一）

- Javascript 高级程序设计为主
- 现代 Javascript 教程为辅

## 第一章 什么是 JavaScript

### javascript 的实现

- 核心(ECMAScript)
- 文档对象模型(DOM)
- 浏览器对象模型(BOM)

### 组织分工

TC39 -> ECMAScript
W3C -> DOM
浏览器厂商 -> BOM

### 规范和手册

- 规范：ECMA-262 https://tc39.escma262/
- 手册：MDN（Mozilla）JavaScript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

## 第二章 HTML 中的 JavaScript

### `<script>`标签

使用了 src 属性的 `<script>` 元素不应该再在 `<script>` 和 `</script>` 标签中再包含其他 JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。

nomodule

`<noscript>` 启用条件

- 浏览器不支持脚本
- 浏览器对脚本的支持被关闭

## 第三章 语言基础

### 标识符

- 所谓标识符，就是变量、函数、属性或参数的名称
- 按照惯例，ECMAScript 标识符使用驼峰大小写形式，因为这种形式跟 ECMAScript 内置函数和对象的命名方式一致，所以算是最佳实践
- 关键字、保留字、true、false、null 不能作为标识符

### 语句

- if 之类的控制语句只在执行多条语句时要求必须有代码块。不过最佳实践是始终在控制语句中使用代码块，即使执行的只有一条语句。在控制语句中使用代码块可以让内容更清晰，在需要修改代码时也可以减少出错的可能性。

```js
// 有效，但容易导致错误，应该避免
if (test) console.log(test);

//推荐
if (test) {
  console.log(test);
}
```

### 变量

- var -> 函数作用域
- let -> 块作用域

#### 暂时性死区

```js
console.log(age); // ReferenceError: age没有定义
let age = 26;
```

在 let 声明之前的执行

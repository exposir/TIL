# 变化侦测

![image](https://user-images.githubusercontent.com/33340988/109119363-8cb29d80-777f-11eb-870d-81a608c3cb70.png)

- http://vue-note.jianfengke.com/reactive/object.html#_2-%E4%BD%BFobject%E6%95%B0%E6%8D%AE%E5%8F%98%E5%BE%97-%E5%8F%AF%E8%A7%82%E6%B5%8B

## Vue3.0 为什么使用 proxy 实现响应式？

1. Object.defineProperty 只能劫持对象的属性，而 Proxy 是直接代理对象。
2. Object.defineProperty 对新增属性需要手动进行 Observe， 由于 Object.defineProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用。
3. Proxy 支持 13 种拦截操作，这是 defineProperty 所不具有的。
4. Proxy 作为新标准，长远来看，JS 引擎会继续优化 Proxy，但 getter 和 setter 基本不会再有针对性优化。
5. Proxy 兼容性差 目前并没有一个完整支持 Proxy 所有拦截方法的 Polyfill 方案

- defineProperty 的局限性的最大原因是它只能针对单例属性做监听，Vue2.x 中对 data 中的属性做了遍历 + 递归，为每个属性设置了 getter、setter。

- Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
  也就是说，Proxy 的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性了。

## Vue2.0 响应式基本原理

### 对象

- Object.defineProperty
- Observer 类，它用来将一个正常的 object 转换成可观测的 object。
- Dep 类：我们应该为每一个数据都建立一个依赖管理器，谁依赖了这个数据我们就把谁放入这个依赖管理器的数组中。依赖管理器就是 Dep
- Watcher 类：谁用到了数据，谁就是依赖，我们就为谁创建一个 Watcher 实例。在之后数据变化时，我们不直接去通知依赖更新，而是通知依赖对应的 Watch 实例，由 Watcher 实例去通知真正的视图。

- 不足之处：虽然我们通过 Object.defineProperty 方法实现了对 object 数据的可观测，但是这个方法仅仅只能观测到 object 数据的取值及设置值，当我们向 object 数据里添加一对新的 key/value 或删除一对已有的 key/value 时，它是无法观测到的，导致当我们对 object 数据添加或删除值时，无法通知依赖，无法驱动视图进行响应式更新。（新建 vue 实例时进行 Observer，所以无法监听新增数据）
  当然，Vue 也注意到了这一点，为了解决这一问题，Vue 增加了两个全局 API:Vue.set 和 Vue.delete

```js
// 源码位置：src/core/observer/index.js

/**
 * Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */
export class Observer {
  constructor(value) {
    this.value = value;
    // 给value新增一个__ob__属性，值为该value的Observer实例
    // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      // 当value为数组时的逻辑
      // ...
    } else {
      this.walk(value);
    }
  }

  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, val) {
  // 如果只传了obj和key，那么val = obj[key]
  if (arguments.length === 2) {
    val = obj[key];
  }
  if (typeof val === "object") {
    new Observer(val);
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      console.log(`${key}属性被修改了`);
      val = newVal;
    },
  });
}
```

```js
let car = new Observer({
  brand: "BMW",
  price: 3000,
});
```

### 数组

- Array 型数据还是在 getter 中收集依赖。
- 更新依赖：在 Vue 中创建了一个数组方法拦截器，它拦截在数组实例与 Array.prototype 之间，在拦截器内重写了操作数组的一些方法，当数组实例使用操作数组方法时，其实使用的是拦截器中重写的方法，而不再使用 Array.prototype 上的原生方法。

- Array 原型中可以改变数组自身内容的方法有 7 个：

1. push
2. pop
3. shift
4. splice
5. sort
6. unshift
7. reverse

- 不足之处 以下行为无法侦测

```js
let arr = [1, 2, 3];
arr[0] = 5; // 通过数组下标修改数组中的数据
arr.length = 0; // 通过修改数组长度清空数组
```

# 虚拟 DOM

## 什么是 Virtual DOM？

- Vue vitrual DOM 思路来源于 snabbdom , vue2 的 vitrual DOM 基本从这个库分离出来。

- Virtual DOM 其实就是一棵以 JavaScript 对象（VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。

## Virtual DOM 更新流程

- 状态 -> vnode -> DOM -> 渲染视图

1. 提供与真实 DOM 节点所对应的虚拟节点 vnode
2. 将虚拟节点 vnode 和旧虚拟节点 oddVnode 进行比对，然后更新视图。

- Vue 目前对状态侦测策略采取中等粒度。当状态发生变化时，只通知到组件级别，然后组件内部使用虚拟 DOM 渲染视图。即组件的状态中有一个发生变化，那么整个组件就要重新渲染。
- 将 vnode 缓存并将当前新生成 vnode 和上一次缓存的 oldVnode 进行对比，只对需要更新的部分进行 DOM 操作。

## 实现一个 VNode

- 简单的 VNode 类

```js
class VNode {
  constructor(tag, data, children, text, elm) {
    /*当前节点的标签名*/
    this.tag = tag;
    /*当前节点的一些数据信息，比如props、attrs等数据*/
    this.data = data;
    /*当前节点的子节点，是一个数组*/
    this.children = children;
    /*当前节点的文本*/
    this.text = text;
    /*当前虚拟节点对应的真实dom节点*/
    this.elm = elm;
  }
}
```

- 举例

```js
<template>
  <span class="demo" v-show="isShow">
    This is a span.
  </span>
</template>

{
    tag: 'span',
    data: {
        /* 指令集合数组 */
        directives: [
            {
                /* v-show指令 */
                rawName: 'v-show',
                expression: 'isShow',
                name: 'show',
                value: true
            }
        ],
        /* 静态class */
        staticClass: 'demo'
    },
    text: undefined,
    children: [
        /* 子节点是一个文本VNode节点 */
        {
            tag: undefined,
            data: undefined,
            text: 'This is a span.',
            children: undefined
        }
    ]
}
```

## DOM-Diff

- 在 Vue 中，把 DOM-Diff 过程叫做 patch 过程。

- 创建节点：新的 VNode 中有而旧的 oldVNode 中没有，就在旧的 oldVNode 中创建。
- 删除节点：新的 VNode 中没有而旧的 oldVNode 中有，就从旧的 oldVNode 中删除。
- 更新节点：新的 VNode 和旧的 oldVNode 中都有，就以新的 VNode 为准，更新旧的 oldVNode。

## compile

- template -> compile-> render function-> vnode ->用户界面
- compile 编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function。

### parse

- parse 会用正则等方式将 template 模板中进行字符串解析，得到指令、class、style 等数据，形成 AST（abstract syntax tree)

### optimize

- optimize 主要作用就跟它的名字一样，用作「优化」。
- 经过 optimize 这层的处理，每个节点会加上 static 属性，用来标记是否是静态的。

### generate

- generate 会将 AST 转化成 render funtion 字符串，最终得到 render 的字符串以及 staticRenderFns 字符串。

## nextTick

- Promise -> MutationObserver -> setImmediate -> setTimeout

- 宏任务（macrotask）：setTimeout、setInterval、setImmediate、I/O、UI rendering
- 微任务（microtask）：promise.then、process.nextTick、MutationObserver、queneMicrotask(开启一个微任务)

### 何时使用微任务

- 微任务的执行时机，晚于当前本轮事件循环的 Call Stack(调用栈)中的代码（宏任务），遭遇事件处理函数和定时器的回调函数

### 使用微任务的原因

- 减少操作中用户可感知到的延迟
- 确保任务顺序的一致性，即便当结果或数据是同步可用的
- 批量操作的优化

# composition API

- https://juejin.cn/post/6844903877574295560

## Vue Hooks 的优势

首先最大的不同：setup 仅执行一遍，而 React Function Component 每次渲染都会执行。

Vue 的代码使用更符合 JS 直觉。当 Hooks 要更新值时，Vue 只要用等于号赋值即可，而 React Hooks 需要调用赋值函数，当对象类型复杂时，还需借助第三方库才能保证进行了正确的 Immutable 更新。

对 Hooks 使用顺序无要求，而且可以放在条件语句里。

不会再每次渲染重复调用，减少 GC 压力。

必须要总包裹 useCallback 函数确保不让子元素频繁重渲染。

不需要使用 useEffect useMemo 等进行性能优化，所有性能优化都是自动的。

## Vuex

https://segmentfault.com/a/1190000018251844

- State 状态
- Getter 计算函数
- Mutations 更改状态
- Actions 异步出发 Mutations
- modules 状态分模块

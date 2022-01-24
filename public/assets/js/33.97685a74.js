(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{433:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("h3",{attrs:{id:"红宝书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#红宝书"}},[t._v("#")]),t._v(" 红宝书")]),t._v(" "),a("blockquote",[a("p",[t._v("内部函数泄漏到外部，形成闭包")])]),t._v(" "),a("h3",{attrs:{id:"mdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mdn"}},[t._v("#")]),t._v(" MDN")]),t._v(" "),a("blockquote",[a("p",[t._v("闭包是指那些能够访问自由变量的函数。")])]),t._v(" "),a("p",[t._v("那什么是自由变量呢？")]),t._v(" "),a("blockquote",[a("p",[t._v("自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。")])]),t._v(" "),a("p",[t._v("由此，我们可以看出闭包共有两部分组成：")]),t._v(" "),a("blockquote",[a("p",[t._v("闭包 = 函数 + 函数能够访问的自由变量")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("《JavaScript 权威指南》中就讲到：从技术的角度讲，所有的 JavaScript 函数都是闭包。")])]),t._v(" "),a("p",[t._v("ECMAScript 中，闭包指的是：")]),t._v(" "),a("ul",[a("li",[t._v("从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。")]),t._v(" "),a("li",[t._v("从实践角度：以下函数才算是闭包：")])]),t._v(" "),a("ol",[a("li",[t._v("即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）")]),t._v(" "),a("li",[t._v("在代码中引用了自由变量")])]),t._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[t._v("进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈")]),t._v(" "),a("li",[t._v("全局执行上下文初始化")]),t._v(" "),a("li",[t._v("执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈")]),t._v(" "),a("li",[t._v("checkscope 执行上下文初始化，创建变量对象、作用域链、this 等")]),t._v(" "),a("li",[t._v("checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出")]),t._v(" "),a("li",[t._v("执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈")]),t._v(" "),a("li",[t._v("f 执行上下文初始化，创建变量对象、作用域链、this 等")]),t._v(" "),a("li",[t._v("f 函数执行完毕，f 函数上下文从执行上下文栈中弹出")])]),t._v(" "),a("h3",{attrs:{id:"闭包的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[t._v("#")]),t._v(" 闭包的作用")]),t._v(" "),a("ul",[a("li",[t._v("能够访问函数定义时所在的词法作用域(阻止其被回收)")]),t._v(" "),a("li",[t._v("私有化变量")]),t._v(" "),a("li",[t._v("模拟块级作用域")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
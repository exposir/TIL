(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{432:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"重排-reflow-和重绘-repaint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重排-reflow-和重绘-repaint"}},[t._v("#")]),t._v(" 重排(reflow)和重绘(repaint)")]),t._v(" "),e("h2",{attrs:{id:"重排-reflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重排-reflow"}},[t._v("#")]),t._v(" 重排(reflow)")]),t._v(" "),e("p",[t._v("当 DOM 的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。")]),t._v(" "),e("p",[t._v("重排也叫回流，简单的说就是重新生成布局，重新排列元素。")]),t._v(" "),e("h3",{attrs:{id:"下面情况会发生重排"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下面情况会发生重排"}},[t._v("#")]),t._v(" 下面情况会发生重排：")]),t._v(" "),e("ul",[e("li",[t._v("页面初始渲染，这是开销最大的一次重排")]),t._v(" "),e("li",[t._v("添加/删除可见的 DOM 元素")]),t._v(" "),e("li",[t._v("改变元素位置")]),t._v(" "),e("li",[t._v("改变元素尺寸，比如边距、填充、边框、宽度和高度等")]),t._v(" "),e("li",[t._v("改变元素内容，比如文字数量，图片大小等")]),t._v(" "),e("li",[t._v("改变元素字体大小")]),t._v(" "),e("li",[t._v("改变浏览器窗口尺寸，比如 resize 事件发生时")]),t._v(" "),e("li",[t._v("激活 CSS 伪类（例如：:hover）")]),t._v(" "),e("li",[t._v("设置 style 属性的值，因为通过设置 style 属性改变结点样式的话，每一次设置都会触发一次 reflow")]),t._v(" "),e("li",[t._v("查询某些属性或调用某些计算方法：offsetWidth、offsetHeight 等，除此之外，当我们调用 getComputedStyle 方法，或者 IE 里的 currentStyle 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。")])]),t._v(" "),e("h3",{attrs:{id:"重排优化建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重排优化建议"}},[t._v("#")]),t._v(" 重排优化建议")]),t._v(" "),e("h4",{attrs:{id:"减少重排范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少重排范围"}},[t._v("#")]),t._v(" 减少重排范围")]),t._v(" "),e("ul",[e("li",[t._v("尽可能在低层级的 DOM 节点上，而不是像上述全局范围的示例代码一样，如果你要改变 p 的样式，class 就不要加在 div 上，通过父元素去影响子元素不好。")]),t._v(" "),e("li",[t._v("不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局。")])]),t._v(" "),e("h4",{attrs:{id:"减少重排次数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少重排次数"}},[t._v("#")]),t._v(" 减少重排次数")]),t._v(" "),e("ul",[e("li",[t._v("样式集中改变")]),t._v(" "),e("li",[t._v("分离读写操作")]),t._v(" "),e("li",[t._v("将 DOM 离线（display:none;然后进行处理）")]),t._v(" "),e("li",[t._v("使用 absolute 或 fixed 脱离文档流")]),t._v(" "),e("li",[t._v("优化动画（position 属性为 absolute 或 fixed ；启用 GPU 加速：Canvas2D、transitions、transforms3D、WebGL、video ）")])]),t._v(" "),e("h2",{attrs:{id:"重绘-repaints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaints"}},[t._v("#")]),t._v(" 重绘(Repaints)")]),t._v(" "),e("ul",[e("li",[t._v("当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
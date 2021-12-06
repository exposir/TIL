# gatsby 中的坑

### Gatsby 的 CSS 默认是全局样式

解决方案：

1. CSS Module
2. 使用 Sass、Less 等插件
3. CSS in JS
4. styled-jsx

### 执行环境

- 开发 -> 浏览器环境
- 代码构建 -> node 环境

解决方案：

1. 先判断当前的环境是否为 browser 环境再使用
2. 在 hooks 中使用

### Link 与 a 的区别

- Link -> 会做优化和预加载，只会渲染两个页面不同的部分，从而加快页面跳转
- a -> 会强制更新整个页面，如果是跳转当前页面并且要更新数据（比如修改页面 url 的 query 时），则必须使用 a 标签

### js 主文件导出方式

- 所有页面都由 pages 目录下的 js 文件构建而成，导出时必须要导出 default 形式。
- 非构建页面的 js 文件不能放在 pages 目录下

![image](https://user-images.githubusercontent.com/33340988/109777518-c7647c00-7c3e-11eb-9d34-3849e7c978ee.png)

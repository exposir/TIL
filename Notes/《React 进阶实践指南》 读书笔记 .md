# 《React 进阶实践指南》 读书笔记

- https://juejin.cn/book/6945998773818490884/section/6948353204413268001

## React 里程碑

- v16.0： 为了解决之前大型 React 应用一次更新遍历大量虚拟 DOM 带来个卡顿问题，React 重写了核心模块 Reconciler ，启用了 Fiber 架构；为了在让节点渲染到指定容器内，更好的实现弹窗功能，推出 createPortal API；为了捕获渲染中的异常，引入 componentDidCatch 钩子，划分了错误边界。
- v16.2：推出 Fragment ，解决数组元素问题。
- v16.3：增加 React.createRef() API，可以通过 React.createRef 取得 Ref 对象。增加 React.forwardRef() API，解决高阶组件 ref 传递问题；推出新版本 context api，迎接 Provider / Consumer 时代；增加 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期 。
- v16.6：增加 React.memo() API，用于控制子组件渲染；增加 React.lazy() API 实现代码分割；增加 contextType 让类组件更便捷的使用 context；增加生命周期 getDerivedStateFromError 代替 componentDidCatch 。
- v16.8：全新 React-Hooks 支持，使函数组件也能做类组件的一切事情。
- v17： 事件绑定由 document 变成 container ，移除事件池等。

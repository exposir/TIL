# 深入浅出 webpack

## 为什么要构建工具？

- 转换 ES6
- 转换 JSX
- CSS 前缀补全/预处理器（LESS、SASS）
- 压缩混淆
- 图片压缩

## 前端构建演变

- grunt
  grunt 会将整个构建过程分成一个一个任务，每一个任务去做一件事情。比如在 grunt 里面它会将一个打包过程分为解析 HTMl、解析 CSS、解析 js、代码压缩等任务，会将任务结果存在本地磁盘里，所以打包速度较慢。

- gulp
  gulp 和 grunt 类似，也是一个文件打包器。gulp 有一个文件流的概念，把每一步构建的结果存放在内存里，下一个步骤是可以直接使用上个步骤的内存的，会加快打包的速度

- webpack
- rollup
- parcel

## 为什么选择 webpack

![image](https://user-images.githubusercontent.com/33340988/110231043-482dbb80-7f50-11eb-9f19-f0ae5e54ba04.png)

- 社区生态丰富
- 配置灵活、插件化扩展
- 官方更新迭代速度快

## wepack 配置

![image](https://user-images.githubusercontent.com/33340988/110231046-4fed6000-7f50-11eb-843d-1a4e4d30c39d.png)

npm init -y

- npm install webpack webpack-cli —save-dev

命令解析: package.json 中使用的命令,比如 webpack,会从 node_modules/.bin/目录下找到对应的命令

Enty

- Entry 用来指定 webpack 的打包入口

- 单入口
  entry 是一个字符串

- 多入口（多页应用）
  entry 是一个对象

## Output

- Output 用来告诉 webapck 如何将变以后的文件输出到磁盘

- 多入口配置
  通过占位符确保文件名称的统一

```js
output:{
  filename:'[name].js',
  path:__dirname + '/dist'
}
```

Loaders

- webpack 开箱即用只支持 js 和 JSON 两种文件类型，通过 Loaders 去支持其他文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。
- 本身是一个函数，接受源文件作为参数，返回转换的结果。

### 常见的 Loaders

- babel-loader 转换 ES6、ES7 等 JS 因特性的语法
- css_loader 支持.css 文件的加载和解析
- less-loader 将 less 文件转换成 css
- ts-loader 将 TS 转换成 JS
- file-loader 进行图片、字体等的打包
- raw-loader 将文件以字符串的形式导入
- thread-loader 多进程打包 JS 和 CSS

### Loaders 的用法

- test 指定匹配规则
- use 指定使用的 Loader 名称

```js
module:{
  rules:[
    {test:/\.txt$/,use:'raw-loader}
    ]
}
```

## Plugins

- 插件作用于 bundle 文件的优化，资源管理和环境变量注入
- 作用于整个构建过程

### 常见的 Plugins

- CommonsChunkPlugin 将 chunks 相同的模块代码提取成公共 js
- CleanWebpackPlugin 清理构建目录
- ExtractTextWebpackPlugin 将 CSS 从 bundle 文件里提取成一个独立的 CSS 文件
- CopyWebpackPlugin 将文件或者文件夹拷贝到构建的输出目录
- HtmlWebpackPlugin 创建 html 文件去承载输出的 bundle
- UglifyjsWebpackPlugin 压缩 JS
- ZipWebpackPlugin 将打包出的资源生成一个 zip 包

### Plugins 的用法

- 插件放入 plugins 数组里

```js
plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })];
```

## Mode

- Mode 用来指定当前的构建环境是： production、development 还是 none
- 设置 mode 可以用 webpack 内置的函数，默认值为 production

![image](https://user-images.githubusercontent.com/33340988/110231055-62679980-7f50-11eb-8061-6fbe4e93f0dd.png)

资源解析： 解析 ES6

- npm i @babel/core @babel/preset-env babel-loader -D
- 使用 babel-loader
- babel 的配置文件是： .babelrc /babel.config.js(vue)

- webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: "bable-loader",
    },
  ];
}
```

- babelrc

```js
{
 "presets":[
    "@babel/preset-env"
  ]
}
```

## 资源解析：解析 LESS、CSS

- css-loader 用于加载 .css 文件，并且转换成 commonjs 对象
- style-loader 将样式通过 `<style>` 标签插入到 head 中
- loader 是链式吊用，执行顺序是从右向左

- webpack.config.js

```js
module:{
  rules:[
    {
    test:/\.css$/,
    use:[
    'style-loader',
    'css-loader',
    'less-loader'
    ]
  }
}
```

## 资源解析：解析图片 、字体

- file-loader
- url-loader 小资源可以自动转换成 base64

## webpack 中的文件监听

- 文件监听是在发现源码发生变化时，自动重新构建出新的输出文件

webpack 开启监听模式，有两种方式：

1. 启动 webapck 命令时，带上 —watch 参数 `”watch”:”webpack —watch”`
   唯一缺陷：每次需要手动刷新浏览器

2. 在配置 webpack.config.js 中设置 watch:true

### 文件监听原理分析

- 轮询判断文件的最后编辑时间是否变化
- 某个文件发生变化，并不会立即告诉监听者，而是先缓存起来，等 aggregateTImeout

```js
module.export = {
  watch: true,
  watchOptions: {
    ingored: /node_modules/, //提高性能
    aggregateTimeout: 300, //监听变化后300ms去执行
    poll: 1000, //每秒问1000次文件是否有变化
  },
};
```

## 热更新：webpack-dev-server

- WDS 不刷新浏览器
- WDS 不输出文件，而是放在内存中

### 手动引入插件

- 使用 HotModuleReplacementPlugin 插件

```js
"scripts":{
  "dev":"webapck-dev-server --open"
}
```

- webpack.config.js

```js
plugins:[
  new webapck.HotModuleReplacementPlugin()
],
devServer:{
 contentBase:'./dist',
 host:true
}
```

### 使用命令行参数自动引入插件

- 添加 --hot 参数后，devServer 会告诉 Webpack 自动引入 HotModuleReplacementPlugin ，而不需要我们手动引入。
  另外常常也搭配 --open 来自动打开浏览器到页面。

package.json

```js
"scripts":{
  "start":"webapck-dev-server  --hot --open"
}
```

## 热更新：webpack-dev-middleware

- WDM 将 webpack 输出的文件传输给服务器
- 适用于灵活定制场景

![image](https://user-images.githubusercontent.com/33340988/110231061-6dbac500-7f50-11eb-971a-560221e03590.png)

## 热更新原理分析

![image](https://user-images.githubusercontent.com/33340988/110231064-714e4c00-7f50-11eb-9407-4b282e640ac2.png)

文件指纹

- 打包后输出的文件名的后缀
- 版本管理、浏览器缓存

![image](https://user-images.githubusercontent.com/33340988/110231068-77dcc380-7f50-11eb-989e-be7610b21277.png)

文件压缩

### JS 文件的压缩

- 内置了 uglifyjs-webpack-plugin

### CSS 文件的压缩

- 使用 optimize-css-assets-webpack-plugin
- 同时使用 cssnano

### html 文件的压缩

- 修改 html-webpack-plugin，设置压缩参数

## 自动清理构建目录

- 避免构建前每次都需要手动删除 dist
- clean-webpack-plugin （默认会删除 output 指定的输出目录）

## 资源内联

### 资源内联的意义

代码层面

- 页面框架的初始化搅拌
- 上报相关打点
- css 内联避免页面闪动

请求层面

- 减少 HTTP 网络请求数（小图片或者字体内联 url-loader)

### HTML 和 JS 内联

- raw-loader 内联 html
- raw-loader 内联 JS

### CSS 内联

1. 借助 style-loader
2. html-inline-css-webpack-plugin

## 多页面打包

### 多页面应用（MPA)

概念

- 每一次跳转的时候，后台服务器都会返回一个新的 html 文档，这种类型的网站也就是多页网站，也叫做多页应用。

优势

1. 每个页面是解耦的
2. 对 SEO 更加友好

### 多页面打包基本思路

- 每个页面对应一个 entry，一个 html-webpack-plugin
- 缺点：每次新增或者删除页面需要改 webpack 配置

![image](https://user-images.githubusercontent.com/33340988/110231075-7e6b3b00-7f50-11eb-9d98-b3f6b99a5554.png)

多页面打包通用方案

1. js 脚本动态获取 entry 和设置 html-webpack-plugin 数量
2. 利用 glob 库获取 entry `entry:glob.sync(path.join(__dirname,’./src/*/index.js’))`

## 提取页面公共资源

### 基础库分离

- 思路：将 react、react-dom 基础包通过 cdn 引入，不打入 bundle
- 方法：使用 html-wenpack-externals-plugin
- 利用 SplitChunksPlugin 进行公共脚本分离

## tree shaking （摇树优化）

- 概念：1 个模块可能有多个方法，只有其中的某个方法使用到了，则整个文件都会被打到 bundle 里面去，tree shaking 就是只把用到的方法打入 bundle ，没用到的方法会在 uglify 阶段被擦除掉。
- 使用：webpack 默认支持 ，在 .babelrc 里设置 modules:false 即可。（ production mode 的情况下默认开启）
- 要求：必须是 ES6 的语法，CJS 的方式不支持。

### DCE（Elimination）

- 代码不会被执行，不可到达
- 代码只想的结果不会被用到
- 代码只会影响死变量（只写不读）

### Tree-shaking 原理

利用 ES6 模块的特点：

- 只能作为模块顶层的语句出现
- import 的模块名只能是字符串常量
- import binding 是 immutable 的

代码擦除：uglify 阶段删除无用代码

## ScopeHoisting

### webapck 构建

现象

- 构建后会产生大量闭包包裹代码
- 被 webpack 转换后的模块会带上一层包裹
- import 会被转换成 \_\_webpack_require

会导致什么问题？

- 大量函数闭包包裹代码，导致体积增大（模块越多越明显）
- 运行代码时创建的函数作用域变多，内存开销变大

### scope hoisting 原理

- 原理：将所有模块的代码按照引用顺序放在一个函数作用于里，然后适当的重命名一些变量以防止变量名冲突
- 对比：通过 scopr hoisting 可以减少函数声明代码和内存开销

### scope hoisting 使用

- webpack mode 为 production 默认开启
- 必须是 ES6 语法，CJS 不支持

## 代码分割和动态 import

### 代码分割的意义

- 对于大的 web 应用来讲，将所有代码都放在一个文件中先认识不够有效的，特别是当你的某些代码块是在某些特殊的时候再回呗使用到。webpack 又一个功能就是将你的代码库分割成 chunks （语块），当代码运行到需要它们的时候再进行加载。

适用的场景：

- 抽离相同代码到一个共享块
- 脚本懒加载，使得初始下载的代码更小

### 懒加载 JS 脚本的方式

- CommonJS: require.ensure
- ES6: 动态 import （目前还没有原生支持，需要 babel 转换）

如何使用动态 import ？

- 安装 babel 插件 @babel/plugin-syntax-dynamic-import

```js
//bable

{
  "plugins":["@babel/plugin-syntax-dynamic-import"]
}

```

- 将一个大的 JS 分割成多个 JS，动态加载。

# webpack 构建提速

- https://mp.weixin.qq.com/s/ajIvJWyvjnWMYTxHjooErQ

96 秒 ->40 秒 -> 16 秒

一方面，H 项目的 webpack 配置是一个典型的多入口类型，每次打包出来的代码包含了十几个子项目模块。但是一般的开发需求往往集中在一个子项目中去开发，所以只需要打包某个具体的子项目就满足了。

另一方面，项目构建打包的大部分时间花费在了 loader 上面，其中主要是 babel-loader 和 eslint-loader，如果把 loader 编译的结果缓存下来应该能有效缩短构建时间。

- 动态入口
- cache-loader

# 预设（Presets）

- preset 可以作为 Babel 插件的组合，甚至可以作为可以共享的 options 配置。

### 官方 Preset

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

编写一个 Preset

```js
module.exports = () => ({
  presets: [require("@babel/preset-env")],
  plugins: [
    [require("@babel/plugin-proposal-class-properties"), { loose: true }],
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
});
```

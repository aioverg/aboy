#### 开发

当 `webpack` 打包源代码时，会有很难追踪到错误和警告在源代码中的原始位置等问题，开发的目的就是使错误追踪等能够映射到源代码文件，使代码热更新，浏览器自动刷新等问题。

##### 基本使用

- 追踪错误源代码，在 `webpack.config.js` 文件中使用 `inline-source-map` 选项。

- 使用 `npx webpack --watch` 命令启动观察者模式打包，此时打包完成命令不会退出，当代码有变化时，会实时响应。

- 浏览器自动刷新，安装相应依赖包，`npm install  --save-dev webpack-dev-server` ，并使用 `npx webpack-dev-server --open` 启动服务器，浏览器自动刷新会默认使用观察者模式。

  浏览器自动刷新，安装相应依赖包， `npm install --save-dev express webpack-dev-middleware` ，`webpack-dev-middleware` 是一个容器，可以把 `webpack` 处理后的文件传递给一个服务其， `webpack-dev-server` 是内置了 `webpack-dev-middleware` ，但单独使用 `webpack-dev-middleware` 能更灵活的配置自定义设置。（使用方式略过）

##### `webpack.config.js` 配置示例

```javascript
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {},
    devtool: "inline-source-map", //追踪错误源码
    devServer: { //浏览器自动刷新
      contentBase: './dist' //将 dist 目录下的文件，作为可访问文件。
    },
    plugins: [],
    output: {}
}
```
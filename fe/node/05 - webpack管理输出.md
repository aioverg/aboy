#### 管理输出

管理输出是指使用 `webpack` 自动的将有关联的文件关联起来，如在 `index.html` 文件中引入 `index.js` 文件一般需要在 `index.html` 中使用 `<script>` 标签，而管理输出的目的是让有关联的文件自动的关联起来，不用在文件中显示引入。

##### 基本使用

- 管理输出，引入依赖包： `npm install --save-dev html-webpack-plugin` 
- 清理 `/dist` 文件夹，引入依赖包： `npm install clean-webpack-plugin --save-dev` ，`webpack` 不会自动清理输出文件夹，避免文件夹中积累上次的打包文件，可以设置清理输出文件夹然后再打包。

##### `webpack.config.js` 配置示例

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: { //入口文件依赖
        index: './src/index.js',
        one: './src/one.js'
    },
    plugins: [
        new CleanWebpackPlugin(), //默认清除输出文件目录
        new HtmlWebpackPlugin({ //管理输出
            template: path.resolve(__dirname, './src/index.html'), //入口文件
            chunks: ["index", "one"] //入口文件依赖
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

此时文件目录：

```javascript
webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
  |- /src
     |- index.html
     |- index.js
     |- one.js
     |- index.css
     |- ex.tff
     |- ex.jpg
```


#### 生产环境构建

为开发环境和生产环境构建不一样的 `webpack.config.js` 配置文件。

- 安装依赖包：`npm install --save-dev webpack-merge` ，将 `webpack.config.js` 拆分成  `webpack.common.js` （通用）和 `webpack.dev.js` (开发环境) 、 `webpack.prod.js` (生产环境) 三个文件，其中通用的文件是开发环境和生产环境公用的配置。
- 启用开发环境打包： `npx webpack --config webpack.dev.js`
- 启用生产环境打包： `npx webpack --config webpack.prod.js` 

##### `webpack.common.js` 基本配置

```javascript
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	entry: {
        index: './src/index.js',
        one: './src/one.js'
    },
	plugins: [
	    new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ["index", "one"]
        })
    ],
	output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
			{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
			{
                test: /\.(woff|woff2|eot|ttf|oft)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    } 
}
```

##### `webpack.dev.js` 基本配置

```javascript
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inline-source-map',
})
```

##### `webpack.prod.js` 基本配置

```javascript
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
})
```

此时文件目录为：

```javascript
webpack-demo
  |- package.json
  |- webpack.common.js
  |- webpack.dev.js
  |- webpack.prod.js
  |- /dist
  |- /src
     |- index.html
     |- index.js
     |- one.js
     |- index.css
     |- ex.tff
     |- ex.jpg
```


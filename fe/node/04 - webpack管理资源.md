#### 管理资源

通过插件让 `webpack` 能够处理非 `JavaScript` 的方式完成对资源的管理使用。

##### 基本使用

- 加载 `CSS` ，安装依赖的软件包，`npm install --save-dev style-loader css-loader` ，`CSS` 文件是用过 `import 'url'` 引入相应的 `.js` 文件中的。
- 加载图片，安装依赖的软件包，`npm install --save-dev file-loader` ，图片是在
- 加载字体，`file-loader` 和 `url-loader` 可以接收并加载任何文件，然后将其输出到构建目录，加载字体文件直接加载即可。
- 加载数据（`CSV`、`TSV`、`XML`），安装依赖的软件包，`npm install --save-dev csv-loader xml-loader`

##### `webpack.config.js` 配置示例

```javascript
const path = require('path')

module.export = {
    enter: {},
    output: {},
    module: {
        rules: [
            { //加载css文件
                test: /\.css$/, //根据正则表达式的语法，匹配所有以 .css 结尾的文件
                use: [ //文件的处理模块
                    'style-loader',
                    'css-loader'
                ]
            },
            { //加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            { //加载字体
                test: /\.(woff|woff2|eot|ttf|oft)$/,
                use: [
                    'file-loader'
                ]
            },
            { //加载 csv、tsv 数据
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            { //加载 xml 数据
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}
```

此时项目目录：

```javascript
webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
     |- index.html
  |- /src
     |- index.js
     |- index.css
     |- ex.tff
     |- ex.jpg
```

`index.css`

```css
@font-face { /*引入字体文件*/
	font-family: "ex";
	src: url("./ex.ttf");
}

body {
	font-family: "ex"; /*设置使用字体*/
	color: blue;
	background: url("./ex.jpg"); /*设置背景图片*/
}
```


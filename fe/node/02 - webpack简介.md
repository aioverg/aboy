#### webpack 简介





##### 基本使用

1. 初始化，会创建一个 `package.json` 文件（包属性说明文件）

   `npm init -y`

2. 安装 `webpack-cli` ，这个工具用于在命令行中运行 `webpack`

   `npm install webpack webpack-cli --save-dev`

3. 修改 `package.json` 文件

   ```json
   +  "private": true, # 将打包器改为私有
   -  "main": "index.js", # 去掉入口文件，放置打包意外发布
   ```

4. 创建源代码目录，一般情况下源码放在 `/src` 目录中。

5. 创建分发代码目录（即打包发布代码），一般情况下分发代码放在 `/dist` 目录中。

6. 创建 webpack 配置文件，`webpack.config.js` 文件。

7. 在 `/dist` 中创建 `index.html` 文件，在`/src` 中创建 `index.js` 文件，`index.html` 作为项目的入口文件，`index.js` 作为项目入口文件 `index.html` 的依赖文件，此时项目目录为：

   ```python
   webpack-demo
     |- package.json
     |- webpack.config.js
     |- /dist
        |- index.html
     |- /src
        |- index.js
   ```

   `webpack.config.js` 

   ```html
   const path = require("path")
   
   module.exports = {
   	entry: './src/index.js',
   	output: { //__dirname 是设置文件的存放目录
   		filename: 'main.js', //输出文件重命名
   		path: path.resolve(__dirname, 'dist') //输出文件存放地址
   	}
   }
   ```

   `index.html`

   ```html
   <html>
   <head>
   </head>
   <body>
       <p>webpack示例</p>
   	<script src="main.js"></script>
   </body>
   </html>
   ```

   `index.js`

   ```javascript
   window.onload = function(){
   	console.log("hello")
   }
   ```

8. 使用配置文件打包，`npx webpack --config webpack.config.js` 。

   打包成功后会在分发代码目录输出入口文件（`mian.js`）。
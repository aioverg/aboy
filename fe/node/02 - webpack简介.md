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

5. 创建分发代码目录（即打包发布代码），一般情况下分发代码放在 `dict` 目录中。

6. 要在文件入口 `.js` 文件中引入打包依赖的模块 `lodash`

   `npm install --save lodash`

   然后再入口 `.js` 文件中引入 `lodash` 

   `import _ from 'lodash'`

7. 
#### npm简介

##### 概念

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

##### 命令

1. 更新npm：`npm install npm -g`，一般情况下node.js已经集成了npm只需要安装node.js就可以了。
2. 查看npm版本： `npm -v` 
3. 本地安装：本地安装：`npm install <Module Name>`，程序包被安装在node_moudles目录下，使用时直接导入即可(`inport name from 'Module Name'`)，不需要指定路径。
4. 全局安装程序包：`npm install <Module Name> -g`
5. 所有查看全局程序包：`npm list -g`
6. 查看本地程序包：`npm ls`
7. 查看某个程序包信息：`npm list <Moudle Name>`
8. 卸载包：`npm uninstall <Moudle Name>`
9. 更新程序包：`npm update <Moudle Name>`
10. 搜索程序包：`npm search <Moudle Name>`
11. 创建package.json文件： `npm init`

##### 文件

1. **package.json：**包属性属性说明文件

   - scripts：实际运行命令

   - name：包名
   - version：包的版本号
   - description：包的描述
   - homepage：包的官网url
   - author：包的作者姓名
   - contributors：包的其它贡献者姓名
   - dependencies：包的依赖包列表，如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
   - repository：包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
   - main：main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
   - keywors：关键字

2. **package-lock：**包版本锁定文件，它是package.json文件的映射。
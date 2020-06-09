#### CLI基础

##### 命令

```npm install -g @vue/cli```：安装Vue CLI。

```npm --version```：查看Vue CLI的版本。

```npm i -g @vue/cli```：更新Vue CLI的版本。

```npm run serve```：运行项目。

```<command> --help```：查看<command>命令的帮助。

```vue create [option] <name>```：创建一个名为<name>的项目，[option]是可选配置。

```vue ui```：使用图形化界面的Vue CLI。

```vue add <plur-in>```：在项目中安装插件。

`npx vue-cli-service help`查看所有注入命令。

##### Vue CLI

概念：Vue CLI是一个基于Vue.js进行快速开发的系统，由CLI、CLI服务、CLI插件构成。

CLI：CLI（```@vue/cli```）是一个全局安装的 npm 包，提供了终端里的vue命令，例如```vue ui```等。

CLI服务：CLI服务（```@vue/cli-service```）是一个开发环境依赖。它是一个 npm 包，局部安装在每个 ```@vue/cli``` 创建的项目中。CLI服务构建于webpack和webpack-dev-serve之上，包含了：1、加载其它CLI插件的核心服务。2、优化过的webpack配置。3、项目内部的```vue-cli-serve```命令，提供```serve```、```build```、```inspect```命令。

CLI插件：CLI插件是Vue项目中依赖的npm包，如 Babel/TypeScript 转译等。Vue CLI插件的名字以```@vue/cli-plugin-```（内建插件）或```vue-cli-plugin-```（社区插件）开头。当在项目内部运行```vue-cli-service```命令时，会自动加载并解析```package.json```中列出的所有CLI插件


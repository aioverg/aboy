#### 在 vue-cli 中使用 sass

##### 在项目中安装 sass 依赖

- 打开 `vue-cli` 项目。
- `npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/` ：使用淘宝镜像安装 `node-sass` 依赖。
- `npm install sass-loader --save-dev` ：使用 `npm` 官方地址安装 `sass-loader` 依赖。

##### 在项目中使用 sass

- `<style scoped lang="scss"> </style>` ：在标签中使用 `sass` 中语法。
#### 代码分离

代码分离是将代码分离到更小的文件中，然后按需加载，代码分离可以获得更小的文件以及控制资源加载的优先级，使用得当的话，会极大提升加载时间。有三种常用的分离方法：

1. 入口起点：使用 `entry` 配置手动分离代码，即手动的将入口模块才分开来。
2. 防止重复：使用 `CommonsChunkPlugin` 去重和分离 `chunk` 。即将入口起点分为多个模块时，假如多个模块引用了同一个依赖，已导入依赖重复引入，防止重复就是以将重复的依赖单独提取到一个模块中去防止重复导入的方法。
3. 动态导入：通过模块的内敛函数调用来分离代码。

##### 入口起点：`webpack.config.js` 配置

```javascript
module.exports = {
    entry: {//两个入口文件
        one: './src/one.js',
        two: './src/one.js'
    }
}
```

##### 防止重复：`webpack.config.js` 配置

```javascript
const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' //提取的公共模块的打包文件名
        })
    ]
}
```

##### 动态导入：略

```javascript

```


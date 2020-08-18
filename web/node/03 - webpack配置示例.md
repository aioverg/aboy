#### 配置示例

##### webpack.config.js 基本配置示例

```javascript
const path = require('path');  //引入node.js内置的处理路径的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');//用于生成入口文件的模块，需要安装(npm i -D html-webpack-plugin)
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//用于清空上一次打包文件夹内的打包文件，需要安装(npm install clean-webpack-plugin)
//解析CSS，需要根据使用CSS文件类型安装响应程序包，.css文件安装(npm install --save-dev style-loader css-loader)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//用于将引入的css文件提取成单独的文件，一般情况下系统默认把css文件提取到js文件中。
[const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); 用于将单独的css文件打包成单独的css文件，"mini-css-extract-plugin"会把所有的css文件打包成一个css文件。使用实例暂略。]
//打包图片，打包字体文件，打包媒体文件，需要安装(npm install --save-dev file-loader)

module.exports = {
  mode: 'development', //开发模式打包的文件模式，production是生产模式
  entry: {//入口文件，就是index.html文件需要引入多少js文件，可以一个html对应一个或多个入口js文件。
      main: path.resolve(__dirname, 'url')//入口文件的路径
      one: path.resolve(__dirname, 'url')//__dirname是当前配置文件所在的路径
      two: path.resolve(__dirname, 'url')//url是入口文件相对于配置文件的路径
  },
  output: {//出口文件，就是打包后的文件的配置
    filename: '[name].[hash:8].js',//打包后的文件名，[name]表示保留原文件名，[hash:8]表示生成随机的字符
    path: path.resolve(__dirname, 'dist')  //打包文件的输出目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('__dirname,'url/xxx.html''),//引用入口文件的HTML文件路径
      filename: 'index.html',//打包后的HTML的文件名
      chunks: ['main', 'one']//需要引入的入口js文件列表，这个html文件引入两个js文件
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('__dirname,'url/xxx.html''),//引用入口文件的HTML文件路径
      filename: 'two.html',//打包后的HTML的文件名
      chunks: ['two']//需要引入的入口js文件列表，这个html文件引入一个js文件
    }),
    new CleanWebpackPlugin(),//清空上一次打包的打包文件
    new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',//打包后的css文件名
        chunkFilename: '[id].css'//识别需要引入的入口js文件中的css文件
    })
  ],
  moudle: {//用于对模块的源代码进行转换
    rules: [
      {//打包在入口JS文件中使用import引入的css样式表
        test: /\.css$/,//检查文件类型
        use: [//使用模块，注意模块的调用顺序，从数组右边往左边走
          MiniCssExtractPlugin.loader//将人口js引入的css文件提取到单独css文件中，不能和'style-loader'同时使用
          'style-loader',//把css文件引入js入口文件，css会放入入口js文件中，不能和MiniCssExtractPlugin.loader同时使用
          'css-loader',//打包css使用的模块，
        ]
      },
    ]
  }
};
```

##### 概念

webpack是一个JavaScript应用程序的静态模块打包器，在```webpack.config.js```文件中配置应用程序。

##### 入口：entry

- 概念：设置打包器的起点(主页引用的js文件)。

- 实例：

  ```webpack.config.js```文件

  ```javascript
  module.exports = {
      entry: './entry.js'  //设置entery.js文件为入口起点
  }
  ```

##### 出口：output

- 概念：设置打包的输出路径，以及如何命名打包文件，默认输出路径为```./dist```。

- 实例：

  ```webpack.config.js```文件

  ```javascript
  const path = require('path') //引入node.js中的path模块
  moudle.exports = {
      output: {
          path: path.resolve(_dirname, 'dist'), 
          //设置输出路径，path.resolve()是node.js的路径操作方法。
          filename: 'filename.bundle.js'
          //设置打包文件名
      }
  }
  ```

##### 装载：loader

- 概念：webpack只能处理JavaScript文件，loader的作用是将非JavaScript文件转换为webpack能够处理的文件。

- 实例：

  ```webpack.config.js```文件

  ```javascript
  const path = require('path')
  const config = {
      moudle: {
          rules: [
              {test: /\.txt$/, use: 'raw-loader'}
              //当碰到.txt路径的文件时，使用raw-loader转换一下再打包。
          ]
      }
  }
  module.exports = config
  
  ```

##### 插件：```plugins```

- 概念：loader用于转换某些类型的模块，plugins用于解决loader解决不了的事情。

- 实例：

  ```webpack.config.js```文件

  ```javascript
  const HtmlWebpackPlugin = require('html-webpack-plugin') //通过npm安装
  const webpack = require('webpack')  //访问内置插件
  const config = {
      plugins: [
          new HtmlWebpackPlugin({template: './index.html'})
      ]
  }
  module.exports = config
  ```

##### 模式：```mode```

- 概念：通过选择```development```或```production```之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化。

- 实例：

  ```webpack.config.js```文件

  ```javascript
  module.exports = {
    mode: 'production'
  }
  ```


##### Vue webpack配置

vue.config.js是vue-cli的webpack的配置，没有的话在项目跟目录下创建一个即可。
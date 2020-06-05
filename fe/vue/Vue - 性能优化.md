#### Vue 性能优化

##### 代码成面

1. **`v-if`与`v-show`的区别：**`v-show`总是渲染适合频繁切换场景。`v-if`条件渲染且销毁，适合不频繁切换的场景。

2. **`computed`与`watch`：**

3. **`v-for`遍历为每个 item 加`key`属性：**在列表数据进行遍历渲染时，需要为每一项 item 设置唯一`key`值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。

4. **`v-for`与`v-if`避免同时使用：**`v-for`比`v-if `优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当只需要渲染很小一部分的时候，必要情况下应该替换成`computed`属性。

   推荐：使用计算属性对值进行判断，在使用`v-for`遍历

   ```html
   <!--只渲染能被2整除的项-->
   <ul>
     <li
       v-for="(value, index) in two"
       :key="index">
       {{ value }}
     </li>
   </ul>
   data: {one: [1, 2, 3, 4, 5, 6]}
   computed: {
     two: function(){
       return this.one.filter(function(value){
         if(value%2 == 0){return value}
       })
     }
   }
   ```

   不推荐：

   ```html
   <!--只渲染能被2整除的项-->
   <ul>
     <li
       v-for="(value, index) in one"
       v-if="value%2 == 0"
       :key="index">
       {{ value }}
     </li>
   </ul>
   data: {one: [1, 2, 3, 4, 5, 6]}
   ```

5. **长列表性能优化：**Vue 会通过`Object.defineProperty`对数据进行监听，来实现视图响应数据的变化，然而有些时候组件就是纯粹的数据展示，不会有任何改变，这时就不需要 Vue 来监听数据，所以在大量数据展示的情况下，取消 Vue 将数据变为可监听的能够明显减少组件的初始化时间，那如何禁止 Vue 劫持数据呢？可以通过 Object.freeze 方法来冻结一个对象，一旦对象被冻结就再也不能被修改了。

   ```javascript
   export default {
       data: function(){
           one: {}
       },
       async created(){
           const one = await axios.get("api")
           this.one = Object.freeze(one)
       }
   }
   ```

6. **事件销毁：**Vue 组件销毁时会自动清理与其它实例相关的连接，解绑它的全部指令及事件监听器，但是这仅限于组件本身的事件。如果在js内部使用`addEventListener`等方式监听的事件是不会自动销毁的，这时需要在组件销毁时手动移除这些事件的监听，以避免造成内存泄漏。例如：

   ```javascript
   //创建的监听事件
   created(){
       addEventListener('click', this.click, false)
   }
   //销毁时清除监听事件
   beforeDestory(){
       removeEventListener('click', this.click, false)
   }
   ```

7. **图片资源懒加载：**对于图片过多的页面，为了加速页面的加载速度，可以将页面内未出现在可视区域的图片先不做加载，等到滚动到可视区域后再去加载。一般使用 Vue 的 vue-lazyload 插件进行懒加载。例如：

   ```javascript
   //安装插件
   npm install vue-lazyload --save-dev
   //在入口文件main.js中引入并使用
   import VueLazyload from 'vue-lazyload'
   Vue.use(VueLazyload)
   /*也可以使用自定义选项，具体配置看官方文档
   Vue.use(VueLazyload, {
       preLoad:1.3,
       error: 'dist/error.png',
       loading: 'dist/loading.gif',
       attempt: 1
   })
   */
   //在vue文件中将img标签的src属性直接改为v-lazy就可以实现该图片的懒加载了
   <img v-lazy="url">
   ```

8. **路由懒加载：**Vue  是单页面应用，可能会有很多的路由引入 ，这样使用 webpcak 打包后的文件很大，当进入首页时，加载的资源过多，页面会出现白屏的情况，不利于用户体验。如果把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件，就能大大提高首屏显示的速度，但是可能其他的页面的速度就会降下来。

   ```javascript
   //未使用懒加载
   import one from './one.vue'
   const router = new VueRouter({
       routes: [
           {path: '/one', component: one}
       ]
   })
   
   //使用懒加载
   const one = () => import('./one.vue')
   const router = new VueRouter({
       routes: [
           {path: '/one', component: one}
       ]
   })
   ```

9. **第三方插件按需引入：**在项目中经常会需要引入第三方插件，如果直接引入整个插件，会导致项目的体积太大，可以借助 `babel-plugin-component` 只引入需要的组件，以达到减小项目体积的目的。以下为项目中引入 element-ui 组件库为例：

   ```javascript
   //安装插件
   npm install babel-plugin-component -D
   //修改.babelrc
   {
       "presets": [["es2015", {"modules": fasle}]],
       "plugins": [
           [
               "component",
               {
                   "libraryName": "element-ui",
                   "styleLibraryName": "theme-chalk"
               }
           ]
       ]
   }
   //在main.js中引入部分组件
   import Vue from "vue";
   import {Button, Select} from "element-ui"
   Vue.use(Button)
   Vue.use(Select)
   ```

10. **优化无线列表性能：**如果应用存在非常长或者无限滚动的列表，那么需要采用 窗口化 的技术来优化性能，只需要渲染少部分区域的内容，减少重新渲染组件和创建 dom 节点的时间。 可以参考以下开源项目 vue-virtual-scroll-list 和 vue-virtual-scroller  来优化这种无限列表的场景的。

11. **服务端渲染 SSR or 预渲染**

    概念：服务端渲染是指 Vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的 html 片段直接返回给客户端这个过程就叫做服务端渲染。

    服务端渲染的优点：

    - 更好的 SEO： 因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；
    - 更快的内容到达时间（首屏加载更快）： SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；

    服务端渲染的缺点：

    - 更多的开发条件限制： 例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；
    - 更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用CPU 资源，因此如果你预料在高流量环境下使用，请准备相应的服务器负载，并明智地采用缓存策略。

    如果 Vue 项目只需改善少数营销页面（例如  /， /about， /contact 等）的 SEO，那么你可能需要预渲染，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将前端作为一个完全静态的站点，具体可以使用 prerender-spa-plugin 轻松地添加预渲染 。

##### Webpack层面的优化

1. **Webpack对图片进行压缩：**在 vue 项目中除了可以在 webpack.base.conf.js 中 `url-loader` 中设置 `limit` 大小来对图片处理，把小于 `limit` 的图片转化为 `base64` 格式，其余的不做操作。对于有些较大的图片资源，在请求资源的时候，加载会很慢，可以用 image-webpack-loader来压缩图片：

   ```javascript
   //安装image-webpack-loader
   npm install image-webpack-loader --save-dev
   //在 webpack.base.conf.js 中进行配置
   {
     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
     use:[
       {
       loader: 'url-loader',
       options: {
         limit: 10000,
         name: utils.assetsPath('img/[name].[hash:7].[ext]')
         }
       },
       {
         loader: 'image-webpack-loader',
         options: {
           bypassOnDebug: true,
         }
       }
     ]
   }
   ```

2. **减少 ES6 转为 ES5 的冗余代码：**Babel 插件会在将 ES6 代码转换成 ES5 代码时会注入一些辅助函数，例如下面的 ES6 代码：

   ```javascript
   class HelloWebpack extends Component{...}
   ```

   这段代码再被转换成能正常运行的 ES5 代码时需要以下两个辅助函数：

   ```javascript
   babel-runtime/helpers/createClass  // 用于实现 class 语法
   babel-runtime/helpers/inherits  // 用于实现 extends 语法    
   ```

   在默认情况下， Babel 会在每个输出文件中内嵌这些依赖的辅助函数代码，如果多个源代码文件都依赖这些辅助函数，那么这些辅助函数的代码将会出现很多次，造成代码冗余。为了不让这些辅助函数的代码重复出现，可以在依赖它们时通过 require('babel-runtime/helpers/createClass') 的方式导入，这样就能做到只让它们出现一次。babel-plugin-transform-runtime 插件就是用来实现这个作用的，将相关辅助函数进行替换成导入语句，从而减小 babel 编译出来的代码的文件大小。

   ```javascript
   //安装 babel-plugin-transform-runtime
   npm install babel-plugin-transform-runtime --save-dev
   //修改 .babelrc 配置文件为
   "plugins": [
       "transform-runtime"
   ]
   ```

3. **提取公共代码：**如果项目中没有将每个页面的第三方库和公共模块提取出来，就会存在相同的资源被重复加载、浪费用户的流量和服务器的成本等问题。每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验。这时可以将多个页面的公共代码抽离成单独的文件，来优化以上问题 。Webpack 内置了专门用于提取多个Chunk 中的公共部分的插件 CommonsChunkPlugin，在项目中 CommonsChunkPlugin 的配置如下：

   ```javascript
   // 所有在 package.json 里面依赖的包，都会被打包进 vendor.js 这个文件中。
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor',
     minChunks: function(module, count) {
       return (
         module.resource &&
         /\.js$/.test(module.resource) &&
         module.resource.indexOf(
           path.join(__dirname, '../node_modules')
         ) === 0
       );
     }
   }),
   // 抽取出代码模块的映射关系
   new webpack.optimize.CommonsChunkPlugin({
     name: 'manifest',
     chunks: ['vendor']
   })
   ```

   

4. **模板预编译：**当使用 DOM 内模板或 JavaScript 内的字符串模板时，模板会在运行时被编译为渲染函数。通常情况下这个过程已经足够快了，但对性能敏感的应用还是最好避免这种用法。
   预编译模板最简单的方式就是使用[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)——相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串。
   如果你使用 webpack，并且喜欢分离 JavaScript 和模板文件，你可以使用 vue-template-loader，它也可以在构建过程中把模板文件转换成为 JavaScript 渲染函数。

5. **提取组件的CSS：**当使用单文件组件时，组件内的 CSS 会以 style 标签的方式通过 JavaScript 动态注入。这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段 “无样式内容闪烁 (fouc) ” 。将所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存。在vue-loader中有详细内容。

6. **构建结果输出分析：**Webpack 输出的代码可读性非常差而且文件非常大，令人头疼。为了更简单、直观地分析输出结果，社区中出现了许多可视化分析工具。这些工具以图形的方式将结果更直观地展示出来，便于快速了解问题所在。在 Vue 项目中用到的分析工具是：webpack-bundle-analyzer 。

   在项目中 `webpack.prod.conf.js` 进行配置：

   ```javascript
   if (config.build.bundleAnalyzerReport) {
     var BundleAnalyzerPlugin =   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
     webpackConfig.plugins.push(new BundleAnalyzerPlugin());
   }
   ```

   执行 $ npm run build --report 后生成分析报告如下：

   ![](C:\Users\acer\aioverg\前端\img\036.gif)

##### 基础的 Web 技术优化

1. **开启 gzip 压缩：**gzip 是 GNUzip 的缩写，最早用于 UNIX 系统的文件压缩。HTTP 协议上的 gzip 编码是一种用来改进 web 应用程序性能的技术，web 服务器和客户端（浏览器）必须共同支持 gzip。目前主流的浏览器，Chrome，firefox，IE等都支持该协议。常见的服务器如 Apache，Nginx，IIS 同样支持，gzip 压缩效率非常高，通常可以达到 70% 的压缩率，也就是说，如果你的网页有 30K，压缩之后就变成了 9K 左右
2. **浏览器缓存：**为了提高用户加载页面的速度，对静态资源进行缓存是非常必要的。
3. **CDN 的使用：**浏览器从服务器上下载 CSS、js 和图片等文件时都要和服务器连接，而大部分服务器的带宽有限，如果超过限制，网页就半天反应不过来。而 CDN 可以通过不同的域名来加载文件，从而使下载文件的并发连接数大大增加，且CDN 具有更好的可用性，更低的网络延迟和丢包率 。
4. 使用 Chrome Performance 查找性能瓶颈
#### Application Cache

##### 概述

`Application Cache` 叫做应用程序缓存或者离线缓存，它与传统浏览器缓存的区别是：

- 应用程序缓存针对整个应用，浏览器缓存是单个文件。
- 应用程序缓存断网了还可以打开页面，浏览器缓存不行。
- 应用程序缓存可以主动告知浏览器更新资源。

一般用于缓存 h5 游戏和一些页面内容不经常变动的内容。

注意，浏览器对缓存数据的容量限制。

##### 使用方法

1. 在需要缓存的文档的 `<html>` 标签中设置 `manifest` 属性，并引用缓存清单文件。
2. 配置缓存清单文件，这个文件描述了那些资源需要缓存那些不需要缓存，推荐使用 `.appcache` 作为缓存清单文件的扩展名。
3. 服务端配置 `MIME-type` 以支持应用程序缓存。
4. 需要的话使用 `window.applicationCache` 进行一些相关操作。

##### 使用示例

- 应用文件目录结构

  ```javascript
  demo
    --demo.appcache //缓存清单文件
    --index.html //应用主页面
    --one.jpg //图片文件
    --index.css //样式文件
    --index.js //脚本文件
    --404.html //错误文件
  ```

- 设置缓存清单文件 `demo.appcache` 。

  ```json
  CACHE MANIFEST
  # 2020-08-30
  CACHE: #需要缓存的文件
      /img.jpg
      /index.css
      /index.js
  NETWORK: #不需要缓存的文件，*代表出去 CACHE 中的所有其他文件
      *
  FALLBACK: #如无法连接网络，则用 404.html 替代未缓存的文件
      /demo/  /404.html
  ```

  应用的缓存会在 `.appcache` 文件修改的时候被更新，所以当需要更新时，修改 `.appcache` 文件的注释是个好方法。

- 在 `index.html` 文件中设置 `manifest` 属性。

  ```html
  <!DOCTYPE html>
  <!--引入缓存清单文件-->
  <html manifest="./demo.appcache">
      <head>
          <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
          <img src="./one.jpg">
          <script src="./index.js"></script>
      </body>
  </html>
  ```

- 服务端配置 `MIME-type` 以支持应用程序缓存。

  在开发者工具中打开 `Network` 面板，若资源使用的缓存的话， `Size` 的值为 `from disk cache` 。

- 使用 `window.applicationCache` 进行一些相关操作，略去。


#### Web 浏览器页面呈现

##### 从输入URL到页面呈现流程—网络

1. **构建请求**

   浏览器会构建请求行，如：

   ```javascript
   // 请求方法是GET，路径为根路径，HTTP协议版本为1.1
   GET / HTTP/1.1
   ```

2. **查找强缓存**

   检查强缓存，如果有资源且有效直接使用，否则进入下一步。

3. **DNS解析**

   通过DNS将域名解析为IP地址。

4. **建立TCP连接**

   - 通过三次握手(即总共发送3个数据包确认已经建立连接)建立客户端和服务器之间的连接。
   - 进行数据传输。这里有一个重要的机制，就是接收方接收到数据包后必须要向发送方`确认`, 如果发送方没有接到这个`确认`的消息，就判定为数据包丢失，并重新发送该数据包。当然，发送的过程中还有一个优化策略，就是把`大的数据包拆成一个个小包`，依次传输到接收方，接收方按照这个小包的顺序把它们`组装`成完整数据包。
   - 断开连接的阶段。数据传输完成，现在要断开连接了，通过四次挥手来断开连接。

5. **发送HTTP请求**

   TCP连接建立完毕，浏览器可以喝服务器进行通信。浏览器发送HTTP请求需要携带**请求行**、**请求头**和**请求体**。

   - **请求行示例**

     ```javascript
     // 请求方法是GET，路径为根路径，HTTP协议版本为1.1
     GET / HTTP/1.1
     ```

   - **请求头示例**

     ```javascript
     Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3
     Accept-Encoding: gzip, deflate, br
     Accept-Language: zh-CN,zh;q=0.9
     Cache-Control: no-cache  //缓存
     Connection: keep-alive  //连接状态
     Cookie: /* 省略cookie信息 */
     Host: www.baidu.com
     Pragma: no-cache
     Upgrade-Insecure-Requests: 1
     User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
     
     ```

   - **请求体**

     请求体只有在`POST`方法下存在，常见的场景是**表单提交**。

6. **网络响应**

   HTTP 请求到达服务器，服务器进行对应的处理。最后要把数据传给浏览器，也就是返回网络响应。网络响应具有三个部分：**响应行**、**响应头**和**响应体**。

   - **响应行示例**

     ```javascript
     //由HTTP协议版本、状态码和状态描述组成。
     HTTP/1.1 200 OK
     ```

   - **响应头示例**：响应头包含了服务器及其返回数据的一些信息, 服务器生成数据的时间、返回的数据类型以及对即将写入的Cookie信息。

     ```javascript
     Cache-Control: no-cache
     Connection: keep-alive
     Content-Encoding: gzip
     Content-Type: text/html;charset=utf-8
     Date: Wed, 04 Dec 2019 12:29:13 GMT
     Server: apache
     Set-Cookie: rsv_i=f9a0SIItKqzv7kqgAAgphbGyRts3RwTg%2FLyU3Y5Eh5LwyfOOrAsvdezbay0QqkDqFZ0DfQXby4wXKT8Au8O7ZT9UuMsBq2k; path=/; domain=.baidu.com
     ```

     如果请求头或响应头中包含**Connection: Keep-Alive**，表示建立了持久连接，这样`TCP`连接会一直保持，之后请求统一站点的资源会复用这个连接。

7. 流程图：

   <img src="C:\Users\acer\aioverg\前端\img\040.jpg" style="zoom: 67%;" />

##### 从输入URL到页面呈现流程—算法解析

**概述：**完成了网络请求和响应，如果响应头中`Content-Type`的值是`text/html`，那么接下来就是浏览器的解析和渲染工作了。解析流程：

1. 构建DOM树

2. 样式计算

3. 生成布局树

4. 流程图：

   <img src="C:\Users\acer\aioverg\前端\img\041.jpg" style="zoom:80%;" />

##### 从输入URL到页面呈现流程—渲染过程

**流程：**

1. 建立图层树(Layer Tree)

2. 生成绘制列表

3. 生成图块并栅格化

4. 显示器显示内容

5. 流程图：

   <img src="C:\Users\acer\aioverg\前端\img\042.jpg" style="zoom:80%;" />
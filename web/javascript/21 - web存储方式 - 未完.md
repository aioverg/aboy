#### web存储方式

1. ##### userdata：只适用于IE浏览器，每个页面存储64kb。

2. ##### Cookie

   - 简介：Cookie是一些数据，存储在内存中或计算机的文本文件中，用于记录从服务端传回的数据，如用户信息，连接口令等。Cookie可以设置过期时间，如果没有设置过期时间，Cookie会被保存在内存中，生命周期随着浏览器的关闭而结束，此时的Cookie称为会话Cookie；如果设置了过期时间，Cookie会被保存在硬盘的文件中，文件到过期时间才会消失。

   - 特点：

     1. Cookie只能保存字符串类型。
     2. 单个Cookie保存的数据不能超过4kb。
     3. 存在Cookie欺骗、Cookie截获等安全问题。

   - 方法

     ```javascript
     //创建cookie：
     document.cookie = "key=value; [expires=time; path=url]"
     
     //修改cookie：直接修改即可：
     document.cookie = "key=newvalue; [expires=time; path=url]"
     
     //删除cookie：将cookie值赋值为空，或者设置过期时间expires为过去时间
     document.cookie = "key=; [expires=time; path=url]"
     
     //获取cookie:
     document.cookie
     ```

3. ##### WebStorage

   - 概念：WebStorage是为了弥补Cookie的缺点而创造的存储方法，包括`localStorage`和`sessionStorage`两种。其中`sessionStorage`用来临时存储同一窗口的数据，在窗口关闭后数据会被自动删除；`localStorage`用于永久保存数据，数据会被保存在客户端本地的硬件设备中，计算浏览器关闭了数据也不会被删除，下次浏览器访问网站时仍可以继续使用。

   - `sessionStorage`方法

     ```javascript
     //查看sessionStorage
     window.sessionStorage
     
     //保存数据
     sessionStorage.setItem("key", "value")
     
     //读取数据
     sessionStorage.getItem("key")
     
     //删除数据
     sessionStorage.removeItem("key")
     
     //删除所有数据
     sessionStorage.clear()
     ```

   - `localStorage`方法

     ```javascript
     //查看localStorage
     Window.localStorage
     
     //保存数据
     localStorage.setItem("key", "value")
     
     //读取数据
     localStorage.getItem("key")
     
     //删除数据
     localStorage.removeItem("key")
     ```

4. ##### Application cache(应用缓存)：略

5. ##### session

   - 简介：session是存储在服务端的数据，服务器创建session对象时会给客户端返回一个sessionID，客户端和服务端通过加密的sessionID联系。session一般用于网上商城中的购物车、保存用户的登录信息等。session保存的东西越多占用服务器的资源越多，这点需要注意。

##### 问题：Cookie会在每次向服务器通信时提交到服务器，webStorage不会每次向服务器通信时提交到服务器？
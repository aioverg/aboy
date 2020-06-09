#### 针对Web的攻击

##### 前言

HTTP协议本身不存在安全性问题，但是应用HTTP协议的服务器和客户端，以及运行在服务器上的Web应用等资源才是攻击的目标，目前互联网的攻击百分之八十针对Web站点的，所以本文主要讲述针对Web的攻击技术。

##### 攻击模式

**主动攻击**：指攻击者通过直接访问Web应用，把攻击代码传入的攻击模式。该模式是直接针对服务器上的资源进行攻击，需要攻击者能够访问到那些资源。常见的攻击方法有：

1. SQL注入：暂略
2. OS命令注入：暂略

**被动攻击**：指利用圈套执行攻击代码的攻击模式，该模式需要用户在不知情的情况下触发陷阱。常见的攻击方法有：

1. **XSS跨站脚本攻击**：指在浏览器中执行恶意脚本，窃取用户信息的攻击方式。常见的攻击原理为：

   - 存储型：将恶意脚本存储到服务器的数据库上，然后在客户端执行脚本，从而达到攻击的目的。常见的场景是在留言评论区提交一段脚本代码，提交到数据库后，在页面的渲染过程会执行脚本代码。
   - 反射型：指恶意脚本作为网络请求的一部分。如输入：`http://aioverg.com?s=<script>alert('haha')</script>`，服务器会拿到`s`参数，然后返回给浏览器，浏览器将它作为HTML的一部分进行解析，发现是一个脚本后运行，从而导致攻击。
   - 文档型：在数据传输的时候劫持数据，修改里面的HTML文档，达到攻击的目的。

   防范措施有：

   - 转义：对用户的输入进行转义。
   - 利用CSP：利用浏览器的内容安全策略，它可以限制其他域下的资源加载，禁止向其它域提交数据。
   - 利用`httpOnly`：设置Cookie的`httpOnly`属性可以领JavaScript无法读取Cookie的值。

2. **CSRF跨站请求伪造攻击**：指攻击者诱导用户点击链接，打开攻击者的网站，然后攻击者利用用户目前的登录状态发起跨站请求。常见的攻击模式有：

   - 自动发送GET请求：攻击者网页里可能有这样的代码`<img src='https://aioverg.com/?user=hello&count=111'>`，进入页面后自动发送GET请求，这个请求会自动带上`aioverg.com`的cookie信息（之前登录过的`aioverg.com`），假如服务端没有验证机制，会认为会认为发送请求的是一个正常用户（因为携带了相应的cookie）。

   - 自动发送POST请求：攻击者填写一个表单，然后自动提交表单。如：

     ```html
     <form id='form' action="https://aioverg.com" method="POST">
       <input type="hidden" name="user" value="hello" />
       <input type="hidden" name="count" value="111" />
     </form>
     <script>document.getElementById('form').submit();</script>
     ```

   防范措施有：

   - 利用Cookie的`SameSite`属性：因为CSRF攻击主要是利用Cookie模拟用户的身份，所以可以设置Cookie的`SanemSite`属性的值来预防。`SameSite`的值有：

     1. `Strict`：浏览器完全禁止第三方请求携带Cookie，即`aioverg.com`网站只能在`aioverg.com`域名当中请求才能携带cookie。

     2. `Lax`：大多数情况也是不发送第三方 Cookie，但是导航到目标网址的`GET`请求除外。导航到目标网址的`GET`请求，包含下面三种情况：

        | 请求类型 | 示例                                  | 默认情况   | Lax        |
        | -------- | ------------------------------------- | ---------- | ---------- |
        | 连接     | `<a href="url"></a>`                  | 发送Cookie | 发送Cookie |
        | 预加载   | `<link rel="prerender" href="url" />` | 发送Cookie | 发送Cookie |
        | GET表单  | `<form method="GET" action="url">`    | 发送Cookie | 发送Cookie |
        | POST表单 | `<form method="POST" action="url">`   | 发送Cookie | 不发送     |
        | iframe   | `<iframe src="url"></iframe>`         | 发送Cookie | 不发送     |
        | AJAX     | `$.get("url")`                        | 发送Cookie | 不发送     |
        | Image    | `<img src="url" />`                   | 发送Cookie | 不发送     |

     3. `None`：默认模式，请求会自动携带Cookie。

   - 验证站点来源：使用请求头的`Origin`和`Referer`字段。

   - CSRF Token
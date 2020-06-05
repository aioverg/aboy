#### HTTP协议

**HTTP协议**：HTTP是无状态协议，即不保存请求和响应之间的通信状态，这样做的目的是为了更快的处理大量事务，但可以借助Cookie技术实现保存状态功能。

**HTTPS协议**：HTTP协议与SSL协议组合起来称为HTTPS（超文本传输安全协议）。

**请求报文**：由请求方法、请求URI、协议版本、可选的请求首部字段和内容实体构成，例如：

<img src="C:\Users\acer\aioverg\前端\img\015.jpg" style="zoom:80%;" />

**响应报文**：由协议版本、状态码、用以解释状态码原因的短语、可选的响应首部字段和内容实体构成，例如：

<img src="C:\Users\acer\aioverg\前端\img\016.jpg" style="zoom:80%;" />

**HTTP首部字段**

1. **通用首部字段(General Header Fields)**：请求报文和响应报文两方都会使用的首部。

   | 首部字段名        | 说明                       |
   | ----------------- | -------------------------- |
   | Cache-Control     | 控制缓存的行为             |
   | Connection        | 逐跳首部、连接的管理       |
   | Date              | 创建报文的日期时间         |
   | Pragma            | 报文指令                   |
   | Trailer           | 报文末端的首部一览         |
   | Trandfer-Encoding | 指定报文主体的传输编码方式 |
   | Upgrade           | 升级为其它协议             |
   | Via               | 代理服务器的相关信息       |
   | Warning           | 错误通知                   |

2. **请求首部字段(Request Header Fields)**：从客户端向服务器端发送请求报文时使用的首部。补充了请求的附
   加内容、客户端信息、响应内容相关优先级等信息。

   | 首部字段名          | 说明                                          |
   | ------------------- | --------------------------------------------- |
   | Accept              | 用户代理可处理的媒体类型                      |
   | Accept-Charset      | 优先的字符集                                  |
   | Accept-Encoding     | 优先的编码内容                                |
   | Accept-Language     | 优先的语言（自然语言）                        |
   | Authorization       | Web认证信息                                   |
   | Cookie              | 服务器接收到的Cookie信息                      |
   | Except              | 期待服务器的特定行为                          |
   | From                | 用户的电子邮箱地址                            |
   | Host                | 请求资源所在的服务器                          |
   | if-Match            | 比较实体标记（Etag）                          |
   | if-Modified-Since   | 比较资源的更新时间                            |
   | if-None-Match       | 比较实体标记（与if-Match相反）                |
   | if-Range            | 资源未更新时发送实体Byte的范围请求            |
   | if-Unmodified-Since | 比较资源的更新时间（与if-Modified-Since相反） |
   | Max-forwards        | 最大传输逐跳数                                |
   | Proxy-Authorization | 代理服务器要求客户端的认证信息                |
   | Range               | 实体的字节范围请求                            |
   | Referer             | 对请求中URI的原始获取方                       |
   | TE                  | 传输编码的优先级                              |
   | User-Agent          | HTTP客户端程序的信息                          |

3. **响应首部字段(Response Header Fields)**：从服务器端向客户端返回响应报文时使用的首部。补充了响应的附
   加内容，也会要求客户端附加额外的内容信息。

   | 首部字段名         | 说明                             |
   | ------------------ | -------------------------------- |
   | Accept-Ranges      | 是否接受字节范围请求             |
   | Age                | 推算资源创建经过时间             |
   | Set-Cookie         | 开始状态管理所使用的的Cookie信息 |
   | ETag               | 资源的匹配信息                   |
   | Location           | 令客户端重定向至指定URI          |
   | Proxy-Authenticate | 代理服务器对客户端的认证信息     |
   | Retry-After        | 对再次发起请求的时机要求         |
   | Server             | HTTP服务器的安装信息             |
   | Vary               | 代理服务器缓存的管理信息         |
   | WWW-Authenticate   | 服务器对客户端的认证信息         |

4. **实体首部字段(Entity Header Fields)**：针对请求报文和响应报文的实体部分使用的首部。补充了资源内容
   更新时间等与实体有关的信息。

   | 首部字段名       | 说明                         |
   | ---------------- | ---------------------------- |
   | Allow            | 资源可支持的HTTP方法         |
   | Content-Encoding | 实体主体使用的编码方式       |
   | Content-Language | 实体主体的自然语言           |
   | Content-Length   | 实体主体的大小（单位：字节） |
   | Content-Location | 替代对应资源的URI            |
   | Content-MD5      | 实体主体的报文摘要           |
   | Content-Range    | 实体主体的位置范围           |
   | Content-Type     | 实体主体的媒体类型           |
   | Expires          | 实体主体过期的时间           |
   | Last-Modified    | 资源的最后修改日期时间       |

5. **注意**：HTTP首部字段是可自行扩展的，所以服务器和浏览器的应用上可能会出现各种非标准的首部字段。

**告知服务器意图的HTTP方法**

1. GET：获取资源，GET方法用来请求访问已被URI识别的资源，指定的资源经服务器解析后返回响应内容。例如：

   <img src="C:\Users\acer\aioverg\前端\img\017.jpg" style="zoom:80%;" />

2. POST：传输实体主体，GET方法也可以传输实体的主体，但一般不用GET方法进行传输，而是用POST方法。例如：

   <img src="C:\Users\acer\aioverg\前端\img\018.jpg" style="zoom:80%;" />

   

3. PUT：传输文件，向FTP协议的文件上传一样，要求在请求报文的主体中包含文件内容，然后将文件保存到请求URI指定的位置。但由于PUT方法自身不带验证机制，任何人都可以上传文件，存在安全问题，因此一般Web网站不使用该方法。例如：

   <img src="C:\Users\acer\aioverg\前端\img\019.jpg" style="zoom:80%;" />

4. HEAD：获得报文首部，与GET方法一样，只是不返回报文主体部分，用于确认URI的有效性及资源更新的日期时间等。例如：

   <img src="C:\Users\acer\aioverg\前端\img\020.jpg" style="zoom:80%;" />

5. DELETE：删除文件，与PUT相反的方法，按请求URI删除指定的资源，DELETE方法也不带验证机制，一般Web网站也不适用DELETE方法。例如：

   <img src="C:\Users\acer\aioverg\前端\img\021.jpg" style="zoom:80%;" />

6. OPTIONS：询问支持的方法，查询针对请求URI指定的资源的支持方法。例如：

   <img src="C:\Users\acer\aioverg\前端\img\022.jpg" style="zoom:80%;" />

7. TRACE：追踪路径，TRACE方法是让Web服务器端将之前的请求通信环回给客户端的方法。发送请求时，在 Max-Forwards 首部字段中填入数值，每经过一个 服务器端就将该数字减 1，当数值刚好减到 0 时，就停止继续传输，最 后接收到请求的服务器端则返回状态码 200 OK 的响应。 客户端通过 TRACE 方法可以查询发送出去的请求是怎样被加工修 改 / 篡改的。这是因为，请求想要连接到源目标服务器可能会通过代理 中转，TRACE 方法就是用来确认连接过程中发生的一系列操作。TRACE 方法容易引发 XST （Cross-Site Tracing，跨站追踪）攻击，所以通常不会用到。例如：

   <img src="C:\Users\acer\aioverg\前端\img\023.jpg" style="zoom:80%;" />

8. CONNECT：要求用隧道协议连接代理。CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道 协议进行 TCP 通信。主要使用 SSL（Secure Sockets Layer，安全套接 层）和 TLS（Transport Layer Security，传输层安全）协议把通信内容加 密后经网络隧道传输。 例如：

<img src="C:\Users\acer\aioverg\前端\img\024.jpg" style="zoom:80%;" />

**持久连接**：持久连接的特点是任意一端没有明确提出断开连接，则TCP就不会断开连接。在HTTP/1.1 中，所有的连接默认都是持久连接。

**使用Cookie进行状态管理**：Cookie技术通过在请求和响应报文中写入Cookie信息来控制客户端的状态。Cookie会根据从服务端发送的响应报文内的一个叫做Set-Cookie的首字段信息，通知客户端保存Cookie。当下次客户端再次往该服务器发送请求时，客户端会自动在请求报文中加入Cookie值后发送出去。服务器发现客户端发过来的Cookie后，会检查是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。

**响应状态码**：当客户端向服务端发送请求时，描述返回请求结果的信息。

- 1××：信息性状态码，接收的请求正在处理。

- 2××：成功状态码，请求正常处理完毕。
  - 200 OK：表示从客户端发来的请求在服务端被正常处理了。
  - 206 Partial Content：表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求。响应报文中包含有Content-Range指定范围的实体内容。
- 3××：重定向状态码，需要进行附加操作以完成请求。
  - 301 Moved Permanently：永久性重定向。表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URL。
  - 302 Found：临时重定向。表示请求的资源已被分配了新的URL，希望用户能使用新的URI访问。302状态码代表的资源不是被永久移动。
  - 303 See Other：表示由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源。
  - 304 Not Modified：表示客户端发送附带条件的请求时，服务端运行请求访问资源，但为满足条件的情况。
  - 307 Temporary Redirect：临时重定向，与302 Found有相同的含义。
- 4××：客户端错误状态码，服务器无法处理请求。
  - 400 Bad Request：表示请求报文中存在语法错误。
  - 401 Unauthorized：表示发送的请求需要有通过HTTP认证的认证信息。返回含有401的响应必须包含一个适用于请求资源的WWW-Authenticate首部用以质询用户信息。当浏览器初次接受到401响应，会弹出认证用的对话窗口。
  - 403 Forbidden：表示对请求资源的访问被服务器拒绝了。
  - 404 Not Found：表示服务器上无法找到请求的资源。
- 5××：服务器错误状态码，服务器处理请求出错。
  - 500 Internal Server Error：表示服务器在执行请求时发生了错误。
  - 503 Service Unavailable：表示服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。
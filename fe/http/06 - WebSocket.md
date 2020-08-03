#### WebSocket 简介

`WebSocket` 是由 `HTML5` 提出的一个独立的协议标准，除了使用 `HTTP` 建立连接外，与 `HTTP` 协议没有关系。它是一种双向通讯协议，建立连接后服务端和客户端都能主动向对方发送和接收数据。

##### `WebSocket` 的建立过程

- `WebSocket` 的协议标识符是 `wss(加密)`、`ws（非加密）` ，连接必须由客户端发起，发起一个标准的 `HTTP` 请求。请求报文如下：

  ```python
  GET wss://www.example.cn/webSocket HTTP/1.1
  Host: www.example.cn
  Connection: Upgrade #告诉服务器通信协议将发生变化，转为 WebSocket 协议
  Upgrade: websocket #告诉服务器通信协议将发生变化，转为 WebSocket 协议
  Sec-WebSocket-Version: 13 #WebSocket 协议的版本
  Origin: http://example.cn
  Sec-WebSocket-Key: afmbhhBRQuwCLmnWDRWHxw== #连接标识
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
  ```

- 服务端收到连接请求后的响应报文如下：

  ```python
  HTTP/1.1 101 #连接成功后返回状态码101的协议变更状态
  Server: nginx/1.12.2
  Date: Sat, 11 Aug 2018 13:21:27 GMT
  Connection: upgrade
  Upgrade: websocket
  Sec-WebSocket-Accept: sLMyWetYOwus23qJyUD/fa1hztc=
  Sec-WebSocket-Protocol: chat
  Sec-WebSocket-Extensions: permessage-deflate;client_max_window_bits=15
  ```

- 至此，`WebSocket` 连接成功，此时的 `TCP` 连接不会四方，客户端和服务端可以相互通信。



##### `AJAX` 轮询和长轮询

- `AJAX` 轮询：是每个一段时间客户端都会想服务端发起一次连接请求，以询问服务器是否有新信息。由于每隔一段时间就要与服务端进行一次连接，所以轮询需要服务器有很快的处理速度。
- 长轮询：是客户端发起连接请求，若服务端有消息则立即回复，若没有消息，则挂起本次请求，等待有消息时再回复。由于服务端会在没有消息的时候挂起连接，所以长轮询需要服务器有较高的并发能力。

##### `JavaScript` 中的 `WebSocket` 对象

**构造函数：**

- **`WebSocket(url [,protocols])`** ：创建一个 `WebSocket` 对象，用于发起 `WebSocket` 连接。

  `url`：连接的服务器地址。

  `protocols`：子协议。

**方法：**

- **`send(data)`**：发送数据到正在连接的服务器。
- **`close()`**：关闭 `WebSocket` 连接。

**属性：**

- **`bufferedAmount`**：传递给 `send()` 方法，但还没有真正发送的字符数。

- **`protocol`**：构造函数 `WebSocket()` 中的 `protocols` 参数的值。

- **`url`**：构造函数 `WebSocket()` 中的 `url` 参数的值。

- **`readSate`**：`WebSocket` 的连接状态。

  `CONNECTING`：值为 `0` ，表示正在连接。

  `OPEN`：值为 `1`，表示连接成功，可以通信。

  `CLOSING`：值为 `2`，表示正在关闭连接。

  `CLOSED`：值为 `3`，表示连接关闭，或连接失败。

**事件：**

- **`onopen`**：建立连接时触发。
- **`onerror`**：通信发生错误时触发。
- **`onmessage`**：接收服务端数据时触发。
- **`onclose`**：连接关闭时触发。
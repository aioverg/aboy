#### SSE

##### 概述

SSE(Server-Sent Events)是一个基于 HTTP 协议的，可以让服务端主动向客户端推送信息的一种方法，在服务端向客户端推送消息时，服务端会告诉客户端推送的是信息流，这时客户端不会关闭连接，而是等待数据流的推送。

注意，SSE是单向通道，即只能服务端向客户端推送，如果客户端向服务端推送，就变成了另一次 HTTP 请求。

##### 客户端API

客户端 API 在 `window.EventSource` 对象上。

- `EventSource(url)` ：构造函数，生成一个 `EventSource` 实例，并向服务器发起连接，`url` 是服务器的地址。

- `ex.readyState` ：实例属性，表示当前的连接状态。`0` 表示还未连接；`1` 表示已连接；`2` 表示连接已断开。

- `ex.onpen` ：事件，当连接建立就会触发 `open` 事件。示例：

  ```javascript
  ex.open = function(event){}
  ```

- `ex.onmessage` ：事件，监听服务端发送来的信息，信息存放在回调函数的 `event.data` 中。示例：

  ```javascript
  ex.onmessage = function(event){}
  ```

- `ex.onerror` ：监听 `error` 事件，如果发生通信错误，就会触发 `error` 事件。

- `ex.close()` ：关闭 `SSE` 连接。

##### 服务端配置

略
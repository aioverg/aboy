#### web worker

##### 概述

由于 `JavaScript` 语言是单线程的，一次只能做一件事，而现在的 CPU 大多数是多线程，此时 `JavaScript` 的单线程无法发挥计算机的计算能力，web worker 的作用就是为 `JavaScript` 创建多线程，主线程可以创建 `worker` 线程，将一些任务分配给 `worker` 线程来处理， `worker` 线程在后台运行，等 `worker` 线程完成计算任务后，再把结果返回给主线程。

在需要的情况下可以把一些计算密集或高延迟的任务分配给 `worker` 线程，这样主线程(通常负责 UI  交互)会比较流畅。

注意 `worker` 线程一旦创建成功，就会始终运行，不会被主线程上的活动打断，直到手动关闭为止，所以一旦使用完毕，应该即使关闭，以避免资源耗费。

##### 要点

- 同源限制：分配给 `worker` 线程运行的脚本文件，必须和主线程的脚本文件同源。
- `DOM` 限制：`worker` 线程所在的全局对象与主线程不一样，无法读取主线程所在网页的 `DOM` 对象，也无法使用 `document` 、 `window` 、 `parent` 对象，但可以使用 `navigator` 、`location` 对象。
- 通信联系：`worker` 线程与主线程不在一个上下文环境，它们不能直接通信，必须通过消息完成。
- 脚本限制：`worker` 线程不能执行 `alert()` 和 `confirm()` 方法，但可以使用 `XMLHttpRequest` 对象发出 `AJAX` 请求。
- 文件限制：`worker` 线程无法读取本地文件，它所加载的脚本只能来自网络。

##### 主线程API

- `Woeker(url[, options])` ：构造函数，返回 `worker` 线程对象。`url` 指`worker` 线程运行的脚本文件的地址。`options` 是可选的配置对象，可以使用 `{name: workerName}` 来指定 `worker` 线程的名称，用以区分多个 `worker` 线程。
- `worker.onerror` ： `error` 事件的监听函数。
- `worker.onmessage` ：指定 `message` 事件的监听函数，发送过来的数据在 `Event.data` 属性中。
- `worker.onmessageerror` ：指定 `messageerror` 事件的监听函数，发送的数据无法序列化成字符串时，会触发这个事件。
- `worker.postMessage()` ：向 `worker` 线程发送信息。
- `worker.terminate()` ：终止 `worker` 线程。

##### worker 线程API

- `self` ：在 `worker` 线程中 `self` 指 `worker` 线程本身。
- `self.onmessage` ：指定 `message` 事件的监听函数，用于监听主线成发过来的信息。
- `self.messageerror` ：指定 `messageerror` 事件的监听函数，发送的数据无法序列化成字符串时，会触发这个事件。
- `self.cloase()` ：关闭 `worker` 线程。
- `self.postMessage()` ：向生产这个 `worker` 的线程发送消息。
- `self.importScripts()` ：加载 `JavaScript` 脚本。

##### 示例

```html
<!--index.js文件，主线程运行的地方-->
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
        <button onclick="createWorker()">开始</button>
        <button onclick="clearWorker()">清除</button>
	</body>
<script>
    var worker
	
	function createWorker(){
	    //创建一个worker线程，worker线程运行worker.js文件
	    worker = new Worker("./worker.js",{name: "workerEx"})
		
		//监听worker线程发过来的信息
		worker.onmessage = function(event){
		    //打印接收的信息
		    console.log("worker线程消息", event.data)
		    if(event.data == 6){
			    //向worker线程发送消息
			    worker.postMessage('close');
			}
	    }
	}

	//关闭worker线程
	function clearWorker(){
	    worker.terminate()
		worker = null
	}
</script>
</html>
```

```javascript
//worker.js文件，worker线程运行的文件

var i = 0

function timer(){
	i = i + 1
	self.postMessage(i) //向主线程发送数据
	setTimeout("timer()",1000)
}

//监听主线程发送过来的数据
self.onmessage = function(event){
	//打印主线程发过来的数据
	console.log("worker线程消息", event.data)
	if(event.data == "close"){
		//关闭worker线程
		self.close()
	}
}

console.log(self) //self表示worker线程自身
timer()
```


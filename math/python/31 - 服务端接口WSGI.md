#### 服务端接口WSGI

需要运行 `api.py` 文件，启动一个服务器，然后监听请求。

`api.py` 文件

```python
from wsgiref.simple_server import make_server

def application(environ, star_response):
    response_headers = [ #设置响应头
        ('Content-Type', 'application/json;charset=urf-8'),
        ('Access-Control-Allow-Origin', '*'), #允许跨域
        ('Access-Control-Allow-Methods', 'GET'),
        ('Access-Control-Allow-Headers', 'x-requested-with,content-type'),
    ]
    status = '200 OK' #响应码
    star_response(status, response_headers)
    return [b'{hello WSGI!!!}']

if __name__ == "__main__":
    url = "127.0.0.1" #设置服务器地址
    port = 8081 #设置服务器端口
    #设置服务器，并监听 http://127.0.0.1:8081 地址，application 为应答函数
    httpd = make_server(url, port, application)
    print('启动服务器')
    httpd.serve_forever()#启动服务器
```

`HTML` 文件

```html
<button onClick="get()">请求数据</button>    
<script>
    function get(){
    var xmlhttp=new XMLHttpRequest()
	xmlhttp.onreadystatechange=function(){
	    if(xmlhttp.readyState==4 && xmlhttp.status==200){
		    console.log(xmlhttp.response)
		}
	}
	xmlhttp.open("GET", "http://127.0.0.1:8081")
	xmlhttp.setRequestHeader("content-type","application/json;charset=UTF-8")
	xmlhttp.send()
}
</script>
```


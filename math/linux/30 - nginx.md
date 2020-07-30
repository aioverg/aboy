#### Nginx

`nginx` 是一个高性能的反向代理服务器。

**代理**是在服务器和客户端之间假设的一层服务器，代理将接受客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。

**正向代理**是一个位于客户端和原始服务器之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标（原始服务器），然后代理向原始服务器转交请求并将获得的内容返回给客户端；正向代理是为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源；正向代理对客户端是透明的，对服务端是非透明的，服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。

<img src="..\img\001.png" style="zoom: 50%;" />

**反向代理**是以代理服务器来接收客户端的请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给客户端；反向代理是为服务端服务的，可以帮助服务器接收客户端的请求，帮助服务器做请求转发，负载均衡等；反向代理对服务端是透明的，对客户端是非透明的，客户端并不知道自己访问的是代理服务器，服务器知道反向代理在为他服务。

<img src="..\img\002.png" style="zoom: 50%;" />

##### 跨域

前端server的域名为：`one.mim.com`

后端服务的域名为：`two.min.com`

解决跨域问题，设置如下：

```javascript
server {
    listen   80;
    server_name   one.mim.com;
    location / {
        proxy_pass   two.min.com;
    }
}
```

##### 请求过滤

- 根据状态码过滤

  ```javascript
  error_page 500 501 503 504 506 /50x.html;
      location = /50x.html {
          #将根路径改编为存放html的路径
          root  /root/static/html;
      }
  ```

- 根据URL名称过滤，精准匹配URL，不匹配的URL全部重定向到主页

  ```javascript
  location / {
      rewrite  ^.*$  /index.html  redirect
  }
  ```

- 根据请求类型过滤

  ```javascript
  if( $request !~ ^(GET|POST|HEAD)$){
      return 403
  }
  ```

##### gzip 压缩

`GZIP` 是规定的三种标准HTTP压缩格式之一，另外两种是 `compress` 、 `defalte` ，但 `GZIP` 使用范围最广，浏览器请求头中 `Request Headers` 的 `accept-Encoding` 字段标记了浏览器支持的压缩格式类型； 请求头中 `Response Headers` 的 `Content-Encoding` 字段标记了服务端开启的压缩方式。

在 `Nginx` 中开启 `gzip` 压缩示例：

```javascript
gzip                    on; #是否开启 GZIP ，默认不开启
gzip_http_version       1.1; #启用 GZIP 所需的 HTTP 最低版本。默认：HTTP/1.1        
gzip_comp_level         5;  #1-9，压缩级别，级别越高压缩率越大，但压缩的时间也长（传输快但比较消耗CPU）
gzip_min_length         1000; #设置允许压缩的最小字节，小于这个值的时候不会压缩
gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml; #采用 GZIP 压缩的文件类型，默认值 text/html(默认不压缩 js/css)
```

##### 负载均衡

将客户端的访问分配到不同的服务端的方法。

upstream 指定后端服务器的地址列表

```javascript
upstream balanceServer {
    [least_conn; fair;] # 负载均衡策略，默认是轮询策略；least_conn是最小连接数策略；fair是最快响应策略
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

在 server 中拦截响应请求，并将请求转发到 upstream 中配置的服务器列表

```javascript
server {
    # 匹配请求中的host值
    server_name  localhost;
    listen 80;
    location /api { # 转到轮询服务器列表
        proxy_pass http://balanceServer;
    }
}
```


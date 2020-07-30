#### nginx 配置文件

##### 配置文件结构

```javascript
nginx.conf #nginx的全局配置，对全局生效
  |--events: #配置影响nginx服务器或与用户的网络连接
  |--http: #可以嵌套多个server，配置代理，缓存，日志定义等绝大多书功能和第三方模块的配置
     |--upstream: #配置后端服务器的具体地址，负载均衡配置不可或缺的部分
     |--server: #虚拟主机的相关参数，一个http中可以有多个server
     |--server:
        |--location: #配置请求的路由，以及各种页面的处理情况
        |--location

```

##### 配置文件示例

```javascript

#user  nobody;
# 设置工作进程的数量
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

# 处理连接
events {
    # 设置连接数
    worker_connections  1024;
}


http {
    # 文件扩展名查找集合
    include       mime.types;
	# 当查找不到对应类型的时候默认值
    default_type  application/octet-stream;
	
	# 日志格式，定义别名为 main
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
	
	# 指定日志输入目录
    #access_log  logs/access.log  main;
	
	# 调用 sendfile 系统传输文件
    sendfile        on;
    #tcp_nopush     on;
	
	# 客户端与服务器连接超时时间，超时自动断开
    #keepalive_timeout  0;
    keepalive_timeout  65;
	
	# 开启gizip 压缩
    #gzip  on;
	
	# 虚拟主机
    server {
	    # 端口
	    listen       80;
		# 匹配请求中的host值
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
		
		# 路由
		# 监听请求路径
        location / {
		    # 查找目录
            root   html;
			# 默认查找
            index  index.html index.htm;
        }
		
		location ^~ /docs/ {
            proxy_pass   http://localhost:8081;
        }
		
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```
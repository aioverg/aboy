# 安装 nginx

## Linux 下安装 nginx

1. 使用命令安装

   ```
   yum install nginx
   ```

   `nginx` 的配置文件在 `/etc/nginx/nginx.conf`

   自定义的配置文件放在 `/etc/nginx/conf.d` 

   项目文件存放在 `/usr/share/nginx/html/`

   日志文件存放在 `/var/log/nginx/`

2. 使用安装包安装



## Linux 下重启 nginx

在 nginx 可执行文件下使用 `/usr/sbin/nginx -s reload` 命令，`/usr/sbin/nginx` 是可执行文件的地址。


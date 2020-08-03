#### 安装MySQL

1.  [下载压缩包](https://dev.mysql.com/downloads/mysql/)

2. 将压缩包解压到：`c:\mysql`

3. 在`c:\mysql` 目录下创建 `my.ini` 文件，文件内容如下：

   ```mysql
   [client]
   # 设置mysql客户端默认字符集
   default-character-set=utf8
    
   [mysqld]
   # 设置3306端口
   port = 3306
   # 设置mysql的安装目录
   basedir=C:\\web\\mysql-8.0.11
   # 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
   # datadir=C:\\web\\sqldata
   # 允许最大连接数
   max_connections=20
   # 服务端使用的字符集默认为8比特编码的latin1字符集
   character-set-server=utf8
   # 创建新表时将使用的默认存储引擎
   default-storage-engine=INNODB
   ```

4. 切换到 `c:\mysql\bin` 目录

5. 初始化数据库 `mysqld --initialize --console` ，初始化完成后会输出 `root` 用户的临时密码，如下面的 `APWCY5ws&hjQ` 就是临时密码。

   ```mysql
   2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
   ```

6. 安装MySQL：`mysqld install`，每次重新启动的时候都要安装。

7. 启动MySQL：`net start mysql`

8. 登录MySQL：`mysql -u root -p`

   此时若提示无法登录，可以进行如下操作

   - 关闭MySQL：`net stop mysql`
   - 修改`my.ini` 文件：`mysqld --defaults-file="c:\mysql\my.ini" --console --skip-grant-tables`
   - 从第7步开始

9. 输入密码

10. 设置新密码

    - 不过期密码：`ALTER USER 'root'@'localhost' BY '新密码' PASSWORDXPIRE NEVER;`
    - 期限密码：`ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码' PASSWORD EXPIRE;`
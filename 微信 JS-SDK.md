##### 使用测试账号

- 连接：http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index

- 路径：登录公众号 => 开发者工具 => 公众号平台测试账号

##### 使用公众号

- 登录公众号

- 设置 => 公众号设置 => 功能设置（设置 `JS接口安全域名`）
- 开发 => 基本配置 => 公众号开发信息 => IP 白名单 (设置 IP 白名单)
- 生成 JS 接口签名：https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign，可以按照这边来生成。

##### 相关文档

- 获取token：https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
- JS-SDK：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62
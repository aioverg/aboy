#### Axios 概览

##### 安装

- 使用npm：

  ```javascript
  $ npm install axios
  ```

- 使用bower

  ```javascript
  $ bower install axios
  ```

- 使用cdn

  ```html
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  ```

##### Axios API

1. `axios(config)`：创建Axios请求，例如：

   ```javascript
   axios({
       method: 'post',
       url: '/path',
       data: {}
   })
       .then(function(response){})
       .catch(function(error){})
   ```

2. `axios(url)`：使用默认方法创建Axios请求。

3. 请求方法别名

   ```javascript
   axios.request(config) //将method设置为request的Axios请求
   axios.get(url [,config])
   axios.delete(url [,config])
   axios.head(url [,config])
   axios.options(url [,config])
   axios.post(url[,data [,config]])
   axios.put(url [,data [,config]])
   axios.patch(url [,data [,config]])
   ```

4. `axios.all()`：处理多个Axios请求。例如：

5. `axios.spread()`：接受多个Axios请求的回调。例如：

   ```javascript
   function one(){
       return axios.get('/path')
   }
   function two(){
       return axios.get('/path')
   }
   axios.all([one(), two()]).then(//同时发送两个请求
       axios.spread(function(onepara, twopara){}) //处理两个请求的返回值
   )
   ```

   

6. `axios.create(config)`：创建一个Axios实例。例如：

   ```javascript
   //创建实例
   const one = axios.create({
       baseURL: 'https://abc.com',
       timeout: 1000,
   })
   //使用实例
   one.get('/tronbird') //向https://abc.com/tronbird发送get的请求
   ```

7. `config`参数：

   - ```url```：用于请求的服务器URL，必须参数。例如：```url: 'path'``` 

   - ```method```：创建请求时使用的方法，默认使用```get```请求。例如：```method: 'post'``` 

   - ```data```：使用```PUT```、```POST```、```PATCH```方法发送请求时发送的数据。例如：```data: {one: 'hello'}```

   - ```baseURL```：加在```url```前面的URL。例如：```baseURL: 'path'``` 

   - ```transformRequest```：在使用```PUT```、```POST```、```PATCH```方法发送请求时，在请求服务器前修改请求数据。如：

     ```javascript
     transformRequest: [
         function(data, header){
             ...
             return data; //函数必须返回一个字符串，或者ArrayBuffer，或Stream。
         }
     ]
     ```

   - ```transformResponse```：在响应数据传递给```then/catch```前修改响应数据，例如：

     ```javascript
     transformResponse: [
         function(data){
             ...
             return data;
         }
     ]
     ```

   - ```headers```：请求头，例如：`headers: {'X-Requested-With': 'XMLHttpRequest'}`

   - ```params```：与请求一起发送的URL参数，例如：`params: {ID: 123}`

   - ```paramsSerializer```：一个负责 `params` 序列化的函数。

   - ```timeout```：设置请求超时的毫秒数，如果超过了则中断请求，0毫秒表示没有超时时间。例如：```timeout: 10```

   - ```withCredentials```：跨域请求时是否需要凭证。默认：```withCredentials：false``` 

   - ```adapter```：自定义请求处理。

   - ```auth```：表示应该使用HTTP基础请求，并提供凭据，将设置一个```Authorization```头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头，例如：

     ```
     auth: {
         username: 'hello',
         password: 'world'
     }
     ```

   - ```responseType```：服务器响应的数据类型，为：`arraybuffer`、`blob`、`json`、`text`、`stream`，默认：`responseType: 'json'`

   - `responseEncoding`：服务器响应数据的编码，默认：`responseEncoding: 'utf8'`

   - `onUploadProgress`：为上传处理进度事件。

   - `onDownloadProgress`：为下载处理进度事件。

   - `maxContentLength`：设置响应内容的最大尺寸。

   - `validateStatus`：略

   - `maxRedirects`：略

   - `socketPath`：略

   - `httpAgent`：略

   - `httpsAgent`：略

   - `proxy`：定义代理服务器的主机名称和端口，例如：

     ```javascript
     proxy: {
         host: '000.0.0.0',
         port: 8080,
         auth: { //与auth属性作用相同
             username: 'hello',
             password: 'world'
         }
     }
     ```

   - `cancelToken`：略

##### 响应信息

```javascript
{
    data: {},  //服务器的响应数据
    status: 200,  //服务器响应的HTTP状态码
    statusText: 'OK',  //服务器响应的HTTP状态信息
    headers: {},  //服务器响应头
    config: {},  //为请求提供的配置信息
    rewuest: {}, //
}
```


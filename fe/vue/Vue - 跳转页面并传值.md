#### Vue 跳转页面并传值

##### 传值

1. `<router-link>`，实例：

   ```javascript
   <router-link
       to="{
           path: 'url',  //要跳转的路径
           params: {key: value},
           query: {key: value}  
           }"
   >
   </router-link>
   //注：使用<router-link>与使用$router.push的规则一样
   ```

2. `$router.push()`，实例：

   ```javascript
   this.$router.push({
       name: 'routerName',  //要跳转的路由名字
       params: {key: value},  //当使用路由名字跳转时，用params携带的参数不会添加跳转url中
       query: {key: value}  //使用路由名字跳转时，用query携带的参数会添加到跳转url中
   })
   
   this.$router.push({
       path: 'url',  //要跳转的路由路径
       params: {key: value},  //使用路由路径跳转时，params失效。
       query: {key: value}  //使用路由路径跳转时，用query携带的参数会添加到跳转url中
   })
   ```

#### 接收

1. `$route.params`：获取由`params`参数携带的数据
2. `$route.query`：获取由`query`参数携带的数据
#### Vue - API

##### 全局API

1. `Vue.extend({})`：组件构造器，示例

   ```vue
   var One = Vue.extend({//创建构造器
       template: `<h2>hello</h2>`
   })
   new One().$mount("#app")//创建One实例，并挂载
   ```

2. `Vue.nextTick()`：Vue中DOM的更新是异步的，在数据变化后不会立即更新DOM，而是将DOM更新加入任务列队，在下次事件循环时进行更新，若此时操作DOM会拿不到更新后的DOM，`Vue.nextTick()`用来在下次DOM更新循环之后执行回调函数，用它的回调函数可以拿到更新后的DOM。

3. `Vue.set()`：
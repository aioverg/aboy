#### Vue Router

**Vue Router：**是Vue.js的官方路由管理器。使用Vue.js+Vue Router创建单页面应用，只需要将组件（components）映射到路由（routes），然后告诉Vue Router在哪里渲染就行了。

**Vue Router工作原理**

- 工作原理简要流程图

  ```markdown
  hashchange
  -->
  match route
  -->
  set vm._route
  -->
  <router-view> render()
  -->
  render matched component
  ```

- 问题

  1. 为什么url变更时，router-view组件就能渲染出在`routes`中定义的与当前`path`匹配的组件?

     - root vue实例上定义了一个响应式属性` Vue.util.defineReactive(this, 'route', this.router.history.current)`
     - url变更时，会匹配到最新的`route`，并且会设置 `this.routerRoot.route`, 触发`setter`
     - router-view组件的render函数中有使用到 `parent.$route`, 也就是间接的触发了`this.routerRoot.route`的`getter`。即进行了依赖搜集。
     - 则`this.routerRoot.route`的`setter`触发时即会触发`router-view`的`渲染watcher`, 再次渲染, 并且此时拿到的路由组件也是最新的。

     本质上利用了vue的响应式属性，在route属性变更和router-view视图渲染之间建立关系。

     route变更 => render重新渲染

  2. router-view render中使用到`parent.$route`为什么就会被`this.routerRoot.route`收集watcher？

     在挂载router-view组件时，会生成一个watcher, router-view的render函数中又触发了route的getter方法，那么此watcher就被收集到route的Dep中了。

     在route的setter触发时，自然执行了这个watcher, 组件重新render。

     在 vue的仓库中`vue/src/core/instance/lifecycle.js`中`mountComponent`方法中，能看到挂载组件时是会生成一个`watcher`的：

     ```javascript
     export function mountComponent(
         vm: Component,
         el: ?Element,
         hydrating?: boolean
     ) {
         ...
         let updateComponent 
         updateComponent = () => {
             vm._update(vm._render(), hydrating)
         }
         
         new Watcher(vm, updateComponent, noop, {
             before() {
                 ...
             }
         })
         ...
         return vm
     }
     ```

  3. `this.router`、`this.route`是怎么挂载每个vue组件上的？

     ```javascript
     Object.defineProperty(Vue.prototype, '$router', {
         get () { return this._routerRoot._router }
     })
     
     Object.defineProperty(Vue.prototype, '$route', {
         get () { return this._routerRoot._route }
     })
     ```

  4. 替换routes的写法（这样写为什么有用）

     ```javascript
     // 替换现有router的routes
     router.matcher = new VueRouter({
       routes: newRoutes
     }).matcher
     ```

     `router.matcher`是比较核心的一个属性。对外提供两个方法match(负责route匹配), addRoutes（动态添加路由）。

     具体原因：在做路径切换transitionTo方法中，首先就会使用const route = this.router.match(location, this.current)来匹配route, 其实内部会使用matcher来做匹配。修改了matcher即新的routes生效。

     ```javascript
     match (
         raw: RawLocation,
         current?: Route,
         redirectedFrom?: Location
       ): Route {
         // 这里使用matcher的match方法来做匹配
         return this.matcher.match(raw, current, redirectedFrom)
       }
     ```

     对router.matcher属性做修改，即新的routes就会替换老的routes, 其实就是replaceRoutes()的含义（但是官方没有提供这个API）。

     ```javascript
     export type Matcher = {
       match: (raw: RawLocation, current?: Route, redirectedFrom?: Location) => Route;
       addRoutes: (routes: Array<RouteConfig>) => void;
     };
     ```

     

  5. router-view是什么

     <router-view> 组件是一个functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。

     ```xml
     <transition>
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
     </transition>
     ```

**主要流程**

1. 初始化
   1. 实例化Router, options作为属性，根据mode生成HTML5History实例，或HashHistory实例
   2. 数据劫持，this.router.route =》 this.history.current
   3. 数据劫持，this.history.current.route变化时，自动执行render。
   4. 立即执行一次路由跳转（渲染路由组件）
2. 路由监听
   1. HashHistory监听hashChange事件，HTML5History监听popstate事件
3. 路由变化处理
   1. 两种方式触发路由变化
      1. a标签href方法（url先变化，会触发两个history监听的hashChange或popstate事件，然后进入路由变化处理）
      2. 调用router的push, replace, go方法（先进入路由变化处理，然后修改url）
   2. 路由变化具体处理过程
      1. history.transitionTo(根据path匹配到相应的route, 然后调度执行hooks, 然后更新this.current属性，触发视图更新)
      2. history.confirmTransition(调度执行上一个route和下一个route的相关生命周期hooks)
4. router的辅助API
   1. push(先进行路由变化处理，在更新url，使用history.pushState)
   2. replace() 和push处理方式一致, 只是更新url使用history.replaceState
   3. go 使用history.go方法




#### JS hash与history

**前端路由：**路由是为了实现根据不同的url地址来显示不同的页面或内容提出的概念，最早在后端使用，用于根据浏览器发出的请求返回数据，但这种方式有一个缺陷，就是在每次切换路由的时候都需要去刷新页面，这样使体验效果较差，为了弥补这个缺陷就产生了前端路由。

##### hash 模式

1. 概念：hash指url中#以及其后面的字符，例如：`www.ai.com/#aioverg`中的hash是`#aioverg`，hash的变化不会导致浏览器向服务器发送请求，但会触发hashchange事件，所以浏览器的前进后退能对其进行控制，在HTML5的history模式出现之前，基本都是使用hash模式实现前端路由的。

2. API

   - `window.location.hash`：获取（设置）当前hash值

   - 监听hash变化

     ```javascript
     window.addEventListener('hashchange', function(e){
         let newURL = e.newURL  //hash改变后的url
         let oldURL = e.oldURL  //hash改变前的url
     }, false)
     ```

##### history 模式

1. 概念：history是另一种前端路由，与hash模式类似，但是history丢掉了#符号，使url看起来更正常，例如：`www.ai.com/aioverg`。
2. API
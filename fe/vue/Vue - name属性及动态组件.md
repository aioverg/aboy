#### Vue name属性及动态组件

`export default{name: 'XXX'}`的作用

1. 组件自身的递归调用，例如：

   ```html
   <template>
       <div>
           <p>递归调用</p>
           <!--当v-f条件成立时调用自身，注意要加入条件，否则会无限调用自身-->
           <div v-f="">
               <myself></myself>
           </div>
       </div>
   </template>
   <script>
       export default {
           name: 'myself'
       }
   </script>
   ```

2. 使用<keep-live>指定哪些组件会被缓存，哪些组件不会被缓存。<keep-live>的`include`属性用来指定需要缓存的组件的组件名，`exclude`属性用来指定不需要缓存的组件的组件名。例如：

   ```html
   <!--这也是一个动态组件的例子-->
   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<script src="vue.js"></script>
   </head>
   
   <body>
       <div id="app">
           <!--点击按钮改变name的值，从而切换组件-->
           <button v-on:click="name = 'one'">one</button>
           <button v-on:click="name = 'two'">two</button>
           <button v-on:click="name = 'thr'">thr</button>
           <!--缓存组件one，two，在one，two组件中输入值时，切换组件值不会复原-->
           <!--thr组件没有被缓存，每次切换thr组件都要重新渲染，切换组件时thr中的值不会保存-->
           <keep-alive include="one,two">
               <!--name指定当前要显示的组件名-->
               <component v-bind:is="name"></component>
           </keep-alive>
       </div>
   </body>
   
   <script>
   //在Vue.component()中id会被动注册为组件名
   Vue.component('one', { 
   	template: '<input placeholder="one">' 
   })
   Vue.component('two', { 
   	template: '<input placeholder="two">' 
   })
   Vue.component('thr', { 
   	template: '<input placeholder="thr">' 
   })
   
   new Vue({
     el: '#app',
     data: {name: 'one'},
   })
   </script>
   </html>
   ```

3. 当使用Vue调试工具时，可以看到组件的名称，更方便调试。
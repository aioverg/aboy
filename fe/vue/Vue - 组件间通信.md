#### Vue 组件间传值

##### 不同页面间传值

1. 这种方法会在url后面显示传递给目标页面的值

   ```javascript
   //向目标页面传递值
   methods: {
       put : function(){
           this.$router.push({
               path: value,
               params: {data}
           })
       }
   }
   
   //目标页面接收值
   mounted: function(){
       this.$route.params
   }
   ```

2. 这种方法不会在url后面显示传递给目标页面的值

   ```javascript
   //向目标页面传递值
   methods: {
       put : function(){
           this.$router.push({
               name: value,  //name是设置路由时的name值
               query: {data}
           })
       }
   }
   
   //目标页面接收值
   mounted: function(){
       this.$route.query
   }
   ```

##### 父组件向子组件传值

1. props

   ```javascript
   //子组件
   child.vue
   <template>
       <span>{{data}}</span>
   </template>
   <script>
   export default {
       name: "child",
       props: [data]
   }
   </script>
   
   //父组件
   parent.vue
   <template>
       <child v-bind:data="data">
       </child>
   </template>
   <script>
   import child from "path"
   export default {
       name: "parent",
       components: {"child": child},
       data: function(){
           return {data: "aioverg"}
       }
   }
   </script>
   ```

##### 子组件向父组件传值

1. 使用```v-model```

   ```javascript
   //子组件  child.vue
   <template>
       <button v-on:click="put">child</span>
   </template>
   <script>
   export default {
       name: "child",
       data: function(){
           return {data: "aioverg"}
       },
       methons: {
           put: function(){
               this.$emit("input", this.data)
           }
       }
   }
   </script>
   
   //父组件  parent.vue
   <template>
       <child v-model="datas">
       </child>
   </template>
   <script>
   import child from "path"
   export default {
       name: "parent",
       components: {"child": child},
       data: function(){
           return {datas: null}
       }
   }
   </script>
   ```

2. $emit( )

   ```javascript
   //子组件  chidl.vue
   <template>
       <!--点击触发put事件，参数data会传递给监听器回调-->
       <button v-on:click="$emit('put', data)">child</span>
   </template>
   <script>
   export default {
       name: "child",
       data: function(){
           return {data: "aioverg"}
       },
   }
   </script>
   
   //父组件  parent.vue
   <template>
       <!--监听put事件，并调用put回调函数-->
       <child v-on:put="put">  //监听put事件
       </child>
   </template>
   <script>
   import child from "path"
   export default {
       name: "parent",
       components: {"child": child},
       data: function(){
           return {datas: null}
       },
       methods:{
           put: function(param){
               this.datas=param
           }
       }
   }
   </script>
   ```

##### 其它

1. `attrs`：用于接收父组件向子组件传递的溢出值(即没有在子组件的`props`中定义的值)。

   ```javascript
   <child one="one" two="two"></child>
   var child = {
       template: `<h1>{{one}}</div>`,
       props: ['one'],
       mounted: function(){console.log(this.$attrs)}//输出：{two: "two"}
   }
   new Vue({
       el: '#app',
       data: {
           one: 'hello',
           two: 'world'
       },
       components: {child: child}
   })
   ```

2. `listeners`：监听父组件中的事件，用于子组件调用父组件中的方法。多层嵌套组件需要一级一级的传下去。

   ```javascript
   <child v-on:parent="fn"></child>  //把父组件中的fn方法绑定到事件parent传递给child子组件。
   var grandson = {
       template: `<button v-on:click="fn">grandSon</button>`,
       methods: {
           fn: function(){this.$listeners.parent()}////把child组件中的fn方法绑定到事件parent传递给child子组件。
       }
   }
   var child = {
       template: `<div>
                      <button v-on:click="fn">child</button>
                      <grandson v-on:parent="fn"></grandson>//将事件传递下去，事件触发fn方法，
                  </div>`,
       components: {grandson: grandson},
       methods: {
           fn: function(){this.$listeners.parent()}//把parent组件中的fn方法绑定到事件parent传递给child子组件。
       }
   }
   new Vue({//parent组件
       el: '#app',
       components: {child: child},
       methods: {
           fn: function(){alert('hello world!')}
       }
   })
   ```

3. `child`和`parent`：获取当前实例的直接子组件和当前实例的直接父组件，嵌套组件需要多次调用。

   ```javascript
   <child></child>
   var grandson = {
       template: `<h2>grandSon</h2>`,
       mounted: function(){console.log("grandSon: ",this.$parent.$parent)}
   }
   var child = {
       template: `<div>
                      <h1>child</h1>
                      <grandson></grandson>
                  </div>`,
       components: {grandson: grandson},
       mounted: function(){console.log("child: ",this.$parent)}
   }
   new Vue({//parent组件
       el: '#app',
       components: {child: child},
       mounted: function(){console.log("parent-child: ",this.$children)},
       methods: {
           fn: function(){alert('hello world!')}
       }
   })
   ```

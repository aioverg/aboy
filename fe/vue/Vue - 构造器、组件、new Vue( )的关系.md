#### 019 Vue 构造器、组件、new Vue( )的关系

1. ```Vue.extend({ })```：创建一个构造器，它是组件的构造器，不是一个具体组件实例，所以无法直接使用，它相当于```Vue.component()```方法的第二个参数部分，需要使用new创建一个实例后，将实例使用```.$mount()```挂载到一个元素上使用。例如：

   ```javascript
   //创建构造器
   var one = Vue.extend({
       template: '<h4>{{a}}</h4>',
   	data: function(){return {a:'Vue.extend例子'}}
   })
   //挂载构造器
   new one().$mount("#app")
   ```

2. ```Vue.component(id, { })```：创建一个组件，相当于自定义了一个新元素，可以在```new Vue()```创建的根实例中使用这个组件。例如：

   ```javascript
   //创建一个组件<new-element>
   Vue.component('new-element', {
       template: '<h4>{{a}}</h4>',
   	data: function(){return {a:'Vue.component实例'}}
   })
   ```

3. ```new Vue({ })```：创建一个根实例，例如：

   ```javascript
   //注册vue根实例
   new Vue({
       el: '#app2'
   })
   ```

   
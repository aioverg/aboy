#### Vue 生命周期

**概念：**生命周期指Vue实例从开始创建、初始化数据、编译模板、挂载DOM和渲染、更新和渲染、卸载等一系类过程。

**生命周期函数：**生命周期函数是用来在Vue实例的生命周期的不同阶段操作Vue实例的方法。

1. **`beforeCreate`：**创建前，实例初始化，遍历data对象下所有属性将其转化为getter/setter，也就说添加一个被观察者，这也是为什么后来添加的属性视图不更新的原因，应为后来添加的属性没有被放到被观察者对象中，这个时候数据没有和模板建立连接还不能操作属性。注意在实例挂载完成后如果要添加属性并触发视图更新的话可以使用`$set`方法，该方法会向被观察对象中添加新增的属性。
2. **`created`：**创建，实例创建完毕，属性已经绑定，属性是可以操作的，但DOM还不存在，所以`$el`属性还不能操作。
3. **`beforeMount`：**挂载前，模板编译
4. **`mounted`：**挂载，VDOM已经被渲染成DOM，`beforeCreate`、`created`、`beforeMount`、`mounted`这四个生命周期每个组件只执行一次，过去了就不会再执行了。
5. **`beforeUpdate`：**更改前
6. **`updated`：**更改
7. **`beforeDestory`：**销毁前
8. **`destoryed`：**销毁
9. **`activated`：**
10. **`deactivated`**：
11. **`errorCaptured`**：

**生命周期的顺序**

先从父组件的`beforeCreate`开始到父组件的`beforeMount`，再从子组件的`beforeCreate`到子组件的`beforeMount`，最后执行`mounted`。

**第一次页面加载触发的钩子**

`beforeCreate`、` created`、`beforeMount`、`mounted`

##### 生命周期数据渲染进度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
	<script src="vue.js"></script>
	<script src="vue-router.js"></script>
</head>

<body>
    <div id="app">
        <p>{{message}}</p>
        <button v-on:click="change">点击改变值</button>
    </div>
    <script type="text/javascript">
        new Vue({
            el: '#app',
            data: {
            message: 'hello'
            },
            methods: {
                change: function () {
                    this.message = 'world';
                }
            },
            beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
                console.log("el : " + this.$el); //undefined
                console.log("data : " + this.$data); //undefined
                console.log("message: " + this.message) //undefined
            },
            created: function () {
                console.group('created 创建完毕状态===============》');
                console.log("el : " + this.$el); //undefined
                console.log("data : " + this.$data); //已被初始化 [object Object]
                console.log("message: " + this.message); //已被初始化 hello
            },
            beforeMount: function () {
                console.group('beforeMount 挂载前状态===============》');
                console.log("el : " + (this.$el)); //已被初始化 [object HTMLDivElement]
                console.log(this.$el); //已被初始化 <div id="app">...</div>
                console.log("data : " + this.$data); //已被初始化 [object Object]
                console.log("message: " + this.message); //已被初始化 hello
            },
            mounted: function () {
                console.group('mounted 挂载结束状态===============》');
                console.log("el : " + this.$el); //已被初始化 [object HTMLDivElement]
                console.log(this.$el); //已被初始化 <div id="app">...</div>
                console.log("data : " + this.$data); //已被初始化 [object Object]
                console.log("message: " + this.message); //已被初始化 hello
            },
            beforeUpdate: function () {
                console.group('beforeUpdate 更新前状态===============》');
                console.log("el : " + this.$el); // [object HTMLDivElement]
                console.log(this.$el); // <div id="app">...</div>
                console.log("data : " + this.$data); // [object Object]
                console.log("message: " + this.message); //已改变 world
            },
            updated: function () {
                console.group('updated 更新完成状态===============》');
                console.log("el : " + this.$el); // [object HTMLDivElement]
                console.log(this.$el); // <div id="app">...</div>
                console.log("data : " + this.$data); // [object Object]
                console.log("message: " + this.message); //已改变 world
            },
            beforeDestroy: function () {
                console.group('beforeDestroy 销毁前状态===============》');
                console.log("el : " + this.$el);
                console.log(this.$el);
                console.log("data : " + this.$data);
                console.log("message: " + this.message);
            },
            destroyed: function () {
                console.group('destroyed 销毁完成状态===============》');
                console.log("el : " + this.$el);
                console.log(this.$el);
                console.log("data : " + this.$data);
                console.log("message: " + this.message)
            }
        })
    </script>
</body>
</html>
```


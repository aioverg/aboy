#### Vue计算属性和侦听属性

##### 计算属性

概述：当变量需要由逻辑计算产生时使用计算属性，例如：

```javascript
<h2 id="app">
    {{para}}
</h2>
var app = new Vue({
    el: 'app',
    data: {
        one: 'hello'
    },
    computed: {
        para: {//para就是由计算属性定义的变量，可以使用app.para查看
            //计算属性默认只有getter，但在需要时可以提供setter
            get: function(){return 'one: ' + this.one}，
            //setter中的参数是para本身。
            set: function(val){this.name = val}
        }
    }
})
//计算属性是响应式的，当逻辑变量变化时它才运行，这里的逻辑变量在getter中是one变量，在setter中是para变量
```

##### 侦听属性

概述：当需要监听某个变量的变化进行操作时使用侦听属性，例如：

```javascript
<h2 id="app">
    {{para}}
</h2>
var app = Vue({
    el: 'app',
    data: {
        one: 'hello',
        para: null
    },
    watch: {
        //当变量one变化时执行函数（参数可省略），oldVal是变量one的变化前的值，newVal是变量one的变化后的值
        one: function(oldVal, newVal){
            console.log(oldVal, newVal)
            this.para = one
        }
    }
})
```

##### 注意

- 计算函数会在第一次加载时就运行，侦听属性不会在第一次加载时运行。
- 侦听属性的使用范围较计算属性广，但不要使用侦听属性去做计算属性可以完成的任务，比如实现一个变量依赖于另一个变量功能，计算属性和侦听属性都可以完成，但计算属性生来就是为完成此类任务的，这时应该使用计算属性。
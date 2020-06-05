#### Vue 键码keyCodes

键码：键盘上的按键都有一个键码，为了便于记忆为键码设置了别名，如13(键码)的别名是Enter，Vue的keyCodes用于自定义键码别名。例如，监听enter键：

```vue
<button id="app" v-on:keyup.a="f()">点击</button>
<script>
    Vue.config.keyCodes={a:13},
    //将a设置为Enter的别名，绑定按键事件@keyup.a，等同于绑定按键事件@keyup.enter或@keyup.13。
    new Vue({
        el: '#app',
        data:{
        },
        methods:{
            f(){
                alert('按了enter键')
            }
        }
    })
</script>
```


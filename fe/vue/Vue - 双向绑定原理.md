### Vue  双向绑定原理

**Vue双向绑定：**vue 双向绑定是使用数据劫持结合发布订阅模式实现的。双向绑定发生在view和viewModel的交互过程中，支持这个过程的是vue的数据劫持模式，粗略的描述就是vue通过Object.defineProperty方法重写了一个普通js对象的get，set方法，使其在被访问时收集依赖，在被设置时执行回调。同时vue将遍历所有的dom节点，解析指令，在这个过程中由于挂载在this上的属性已经是响应式数据（reactive）这些变量在Compile的过程中被访问时便会新生成一个watcher实例放入这个属性特有的dep实例中（闭包），当该属性被set的时候便会遍历（notify）这个属性的dep实例，执行里面每个watcher实例中保存的回调方法。

##### 实现过程

1. 概述：实现数据的双向绑定，首先要对数据进行劫持监听，所以需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。如图：

   <img src="C:\Users\acer\aioverg\前端\img\061.png" style="zoom: 67%;" />

2. 需要实现的功能

   - 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
   - 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
   - 实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

##### 实例

1. 实现一个Observer数据监听器：使用`Object.defienProperty()`

   ```javascript
   function handle(data, key, value){ //数据劫持
       observe(value) //监听里边所有的子属性
       let dep = new Dep()
       Object.defineProperty(data, key, {
           enumerable: true,
           configurable: true,
           get: function(){
               if(true){
                   dep.addSub(watcher)
               }
               return value
           },
           set: function(newValue){
               value = newValue
               console.log('新值为: ', value)
           }
       })
   }
   function observe(data){ //监听器
       if(!data || typeof data !== 'object'){
           return
       }
       Object.keys(data).forEach(function(key){
           handle(data, key, data[key])
       })
   }
   class Dep{
       constructor(){
           this.subs
       }
       addSubs(...sub){
           this.subs.push(...sub)
       }
       notify(){
           this.subs.forEach(sub => sub.update())
       }
   }
   let obj = {one: 'hello'}
   observe(obj)
   obj.one = 'world' //输出：world
   ```

2. 实现一个Watcher订阅者

   ```javascript
   class Watcher{
       constructor(vm, exp, cb){
           this.cb = cb
           this.vm = vm
           this.exp = exp
           this.value = this.get()
       }
       update(){
           this.run()
       }
       run(){
           let value = this.vm.data[this.exp]
           let oldVal = this.value
           if(value !== oldVal){
               this.value = value
               this.cb.call(this.vm, value, oldVal)
           }
       }
       get(){
           Dep.target = this
           var value = this.vm.data[this.exp]
           Dep.target = null
           return value
       }
   }
   ```

   

3. 
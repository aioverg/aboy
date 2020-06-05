#### this 详解

##### 定义

this：this指的是函数运行时所在的环境。

##### this绑定

1. 默认绑定：没有其他绑定规则存在时的默认规则。通常是独立函数调用。例如：

   ```javascript
   function f(){alert(this)}
   f()  //  [object Window]
   //调用f()时应用了默认绑定，this指向全局对象（非严格模式下）。
   //在严格模式下this指向undefined，undefined上没有this对象，会抛出错误。
   ```

2. 隐式绑定：函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。

   ```javascript
   function f(){alert(this)}
   var obj = {f: f}
   obj.f()  //  [object Object]
   //f()是在obj对象下调用的，所以this指向obj。
   ```

   隐式绑定的陷阱一

   ```javascript
   function f(){alert(this)}
   var obj = {f: f}
   var ff = obj.f
   ff()  //  [object Window]
   //注意obj.f是引用属性，赋值给ff实际上就是将f函数的指针赋值给ff，此时ff指向f函数本身，那么实际的调用关系是通过ff找到f函数进行调用，整个调用没有通过其他对象，此时f函数指向全局对象。
   ```

   隐式绑定陷阱二，函数传参，参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值。

   ```javascript
   var a = 10; // a 是全局对象的属性 
   function f(){console.log(this.a)} 
   function g(callback) {// callback其实引用的是f， 
       callback(); // <-- 调用位置！
   } 
   var obj ={
       a: 2,
       f: f
   }; 
   doFoo( obj.f ); //输出10
   ```

   

3. 显示绑定：通过call,apply,bind的方式，显式的指定this所指向的对象。

   -  ```function.call(object, args···)```：将函数function作为对象object的方法调用，args作为参数传递给函数。例：

     ```javascript
     var obj = {name: "hello"}
     function f(argone, argtwo){alert(this.name + argone + argtwo)}
     f.call(obj, ".world", "!")  //  hello.world
     ```

   - ```function.bind(object, args```：返回一个新函数，该函数会作为object的方法调用，args是旧函数function的参数。例：

     ```javascript
     var obj = {name: "hello"}
     function f(argone, argtwo){alert(this.name + argone + argtwo)}
     var ff = f.bind(obj, ".world")
     ff("!")  //  hello.world!
     ```

   - ```function.apply(object, args)```：将函数function作为对象object的方法调用，args作为参数传递给函数，注意，apply的参数args只能是数组。例：

     ```javascript
     var obj = {name: "hello"}
     function f(argone, argtwo){alert(this.name + argone + argtwo)}
     f.apply(obj, [".hello", "!"])  //  hello.hello!
     ```

4.  new绑定：this指向的就是对象本身。

   ```javascript
   function F(name){this.name = name}
   var ff = new F("hello")
   ff.name  // hello
   var fff = new F("world")
   fff.name  //  world
   ```
   
   使用`new`调用函数时，执行了如下过程：
   
   - 创建（或者说构造）一个全新的对象。 
   - 这个新对象会被执行 [[ 原型 ]] 连接。
   - 这个新对象会绑定到函数调用的 this。
   - 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

##### 绑定优先级

如果同时应用了多种规则，四种绑定的优先级为：new绑定 > 显式绑定 > 隐式绑定 > 默认绑定。

##### 例外

1. 将null或者是undefined作为this的绑定对象传入call、apply或者是bind,这些值在调用时会被忽略，实际应用的是默认绑定规则。
2. 箭头函数没有自己的this，它的this继承于外层代码库中的this。
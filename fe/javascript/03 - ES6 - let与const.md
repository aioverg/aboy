#### let与const

代码块：在```{}```中的代码。

##### let

1. ```let```：声明一个变量，该变量作用域是它所处的代码块。

2. 特点

   - **不存在变量提升**：变量提升指变量会在声明时提到代码块的顶端，这时候可以在声明变量之前使用变量而不会报错，不存在变量提升则代表不能在变量声明前使用变量，例如：

     ```javascript
     console.log(a)  //输出undefined，变量提升
     console.log(b)  //报错变量b未定义，不存在变量提升
     var a = "hello" //变量提升
     let b = "world" //不存在变量提升
     ```

   - **暂时性死区**：只要块级作用域存在```let```命令，该代码块就会绑定一个作用域，不受外部作用域的影响，例如：

     ```javascript
     var a = "hello"
     {
         console.log(a)  //输出 hello
         let b = "world"
     }
     console.log(b)  //报错,变量 b 未定义，由于暂时性死区。
     ```
     
- **不允许重复声明**：不允许在同一个作用域中重复声明同一个变量。

##### const

1. ```const```：声明一个只读的常量，一旦声明不允许修改。注意，const一旦声明变量就必须立即初始化，不能留在以后赋值。例如：

   ```javascript
   const a = "hello"
   const b //报错，变量b未赋值。
   ```

2. 特点

   - ```const```声明变量对于简单数据类型来说就是指向数据本身，对于复合型数据来说是指向数据的引用地址，引用地址不能改变，但数据可以改变。例如：

     ```javascript
     const a = "hello"
     const b = {b: "world"}
     b.b = "hello"  //没有改变引用地址
     console.log(b) //输出hello
     a = "world"  //报错
     ```
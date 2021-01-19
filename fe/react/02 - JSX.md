#### React - JSX

##### 简介

1. **概念**：`JSX` 是 `React` 定义的一个 `JavaScript` 语法扩展，是 `React.createElement()` 的语法糖，用于将 `JavaScript` 与 `XML` 结合，解析时碰到 `<` 符号就进行 `XML` 解析，碰到 `{` 符号就进行 `JavaScript` 解析。由于 `JSX` 在编译的时候会自动调用`React.createElement`，所以在使用的 `JSX` 语法的时候需要引入 `React` 库。如：

   ```react
   //JSX写法
   import React from 'react'
   const ex = (
       <ul className="one">
           <li>one</li>
           <li>two</li>
       </ul>
   )
   
   //等价的JS写法
   import React from 'react'
   const one = React.createElement('li', null, 'one')
   const two = React.createElement('li', null, 'two')
   const ex = React.createElement('ul', {className: 'one'}, one, two)
   ```

##### 使用

1. 组件名需要以大写字母开头，因为 `React` 会把不是大写字母开头的组件认为是一个 `HTML` 标签。

2. 组件可以是对象的值，如

   ```react
   <script type="text/jsx">
       const root = document.getElementById('root')
       
       const Ex = {
           one: function(props){
               return (<h2>{props.name}</h2>)
           }
       }
       
       ReactDOM.render(<Ex.one name="aioverg"/>, root);
   </script>
   ```

3. 通过 `...` 运算符可以在 `JSX` 中传递整个 `props` 对象，如：

   ```react
   <script type="text/jsx">
       const root = document.getElementById('root')
   	    
       function Ex(props){
           return (<h2>{props.age}{props.name}</h2>)
       }
       
       const obj = {age: 10, name: "aioverg"}
       
       ReactDOM.render(<Ex {...obj} />, root);
   </script>
   ```

4. Javascript代码和变量要用 `{}` 包裹起来。

5. 当子元素是 `false`、`null`、`undefined`、`true` 时，且这些值作为变量被`{}`包裹时，不会渲染。
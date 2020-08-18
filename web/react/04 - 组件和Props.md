#### React - 组件和Props

##### 简介

组件类似于 `JavaScript` 函数，接收任意的入参（即 `Props`），并返回用于描述页面展示内容的 `React` 元素。注意组件应该作为纯函数使用，即组件不应该试图修改自身的 ` Props` 。 

1. **函数组件**：一个函数若返回可被渲染的值，该函数就可作为组件，函数组件可以接收一个`props`参数用于接收父组件的传值。注意组件名称首字母大写，如：

   ```react
   import React from 'react'
   
   function One(){}//不能作为组件
   
   function Two(){return null}//可以作为组件
   
   function Thr(){return <p>hello</p>}//可以作为组件
   
   function Fou(props){return <p>{props.name}</p>}//可以作为组件，并使用props接收传递的值
   ```
   
2. **class组件**：继承`React.Component`类创建的子类，且用`renser()`方法返回一个可被渲染的值，则该子类可作为class组件，也可以接收一个`props`参数用于接收父组件的传值。如：

   ```react
   import React from 'react'
   class One extends React.Component {
       constructor(props){
           super(props)
       }
       render() {
           return <p>{this.props.name}</p>
       }
   }
   ```

##### props

`Props` 是传递给组件的（类似于函数的形参）。

1. 设置默认的 `props` 

   ```react
   import React from 'react'
   class One extends React.Component {
       static defaultProps = { //设置默认的props值
           name: "aioverg"
       }
       constructor(props){
           super(props)
       }
       render() {
           return <p>{this.props.name}</p>
       }
   }
   ```

   

2. `Props` 的默认值是 `true` ，即 `<Ex name />` 等价于 `<Ex name={true} />` ，注意不建议不传递 `value` 给 `props` ，即使可以使用默认值。

3. 可以使用扩展运算符 `...` 传递对象，例如：

   ```react
   import React from 'react'
   
   let obj = {age: 10, name: "aioverg"}
   
   function Ex(props){
       return(
           <React.Fragment>
               <h2>{props.age}</h2>
               <h2>{props.name}</h2>
           </React.Fragment>
       )
   }
   
   ReactDOM.render(<Ex {...a} />, root)
   ```

   

4. 

   ```react
   
   ```

   
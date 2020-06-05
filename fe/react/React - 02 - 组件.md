#### React - 02 - 组件

##### 简介

1. **函数组件**：一个函数若返回可被渲染的值，该函数就可作为组件，函数组件可以接收一个`props`参数用于接收父组件的传值。如：

   ```react
   import React from 'react'
   function One(){}//不能作为组件
   function Two(){return null}//可以作为组件
   function Thr(){return <p>hello</p>}//可以作为组件
   function Fou(props){return <p>{props.name}</p>}//使用props接收传递的值
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

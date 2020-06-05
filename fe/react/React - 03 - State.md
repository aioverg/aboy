#### React - 03 - State

##### 简介

1. **概念**：State是组件私有的用于保存组件数据，当State变化时，React会重新渲染。

##### 示例

1. 在class组件中使用State

   ```react
   import React from 'react'
   class One extends React.Component {
       consructor(props){
           super(props)
           this.state = {
               name: "hello"
           }
       }
       render(){
           return(
               <>
                   <p>{this.state.name}</p>
                   <button onClick={()=>this.setState({name: "world"})}>修改State</button>
               </>
           )
       }
   }
   export default One
   ```

2. 在函数组件中使用State，需要借助Hook

   ```react
   //在One.js文件中定义One组件
   import React, {useState} from 'react'
   function One(props){
       //定义一个状态name，值为hello，setName用于改变name的状态
       let [name, setName] = useState("hello")
       //定义一个状态obj，值为一个对象，setObj用于改变obj的状态
       let [obj, setObj] = useState({
           "one": "aio",
           "two": "erg"
       })
       return(
           <>
               <p>{name}</p>
               //点击将name值改为world
               <button onClick={()=>{setName("world")}}>点击</button>
               <p>{obj.one}-{obj.two}</p>
           </>
       )
   }
   export default One
   ```

   
#### React - 遍历渲染和key

##### 简介

1. **概念**：将需要遍历的数据组成由元素包裹的dom，然后把这些dom组成数组返回，render可以接受由dom组成的数组，并按顺序渲染这些dom。在每一个由遍历渲染的元素上设置`key`属性，可以帮助React识别元素的变动。

##### 使用

1. 遍历数组渲染

   ```react
   //在One.js文件中定义One组件
   import React from 'react'
   function One(props){
       let arr = props.arr
       let listDom = arr.map(//遍历数组生成dom数组
           (value) => <p key={value}>{value}</p>//要设置key属性
       )
       return listDom//将dom数组返回，由节点组成的数组会被渲染
   }
   One.defaultProps = {//定义默认参数
       arr: [1, 2, 3]
   }
   export default One
   
   //在index.js文件中引入One组件
   import React from 'react'
   import ReactDOM from 'react-dom'
   import One from './One'//导入组件
   let arr = ["one", "two", "thr"]
   ReactDOM.render(//在index.html中挂载One组件
       <One arr={arr}>,
        document.getElementById('root')
   )
   ```

2. 遍历对象渲染

   ```react
   //在One.js文件中定义One组件
   import React from 'react'
   
   function One(props){
       let obj = props.obj
       let listObj = Object.keys(obj).map(//返回对象的键组成的数组，然后同遍历数组渲染
           (key) => <p key={key}>{obj[key]}</p>//要设置key属性
       )
       return listDom//将dom数组返回，由节点组成的数组会被渲染
   }
   One.defaultProps = {//定义默认参数
       obj: {
           "one": 111,
           "two": 222,
           "thr": 333,
       }
   }
   export default One
   
   //在index.js文件中引入One组件
   import React from 'react'
   import ReactDOM from 'react-dom'
   import One from './One'//导入组件
   let obj = {
       "one": "aaa",
       "two": "bbb",
       "thr": "ccc",
   }
   ReactDOM.render(//在index.html中挂载One组件
       <One obj={obj}>,
        document.getElementById('root')
   )
   ```

   
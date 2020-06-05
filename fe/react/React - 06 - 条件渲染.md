#### React - 06 - 条件渲染

1. 使用`if`

   ```react
   //在One.js文件中定义One组件
   import React, {useState} from 'react'
   
   function One(props){
       let [boll, setBoll] = useState(true)
       let dom = null
       if(boll){//当boll为true时渲染
           dom = <h2>hello</h2>
       }else{//当boll为false时渲染
           dom = <h2>world</h2>
       }
       return(
           <>
               {dom}
               //点击按钮动态渲染组件
               <button onClick={()=>{setBoll(!boll)}}>点击</button>
           </>
       )
   }
   
   export default One
   ```

2. 使用三元运算符

   ```react
   //在One.js文件中定义One组件
   import React, {useState} from 'react'
   
   function One(props){
       let [boll, setBoll] = useState(true)
       let domOne = <h2>hello</h2>
       let domTwo = <h2>world</h2>
       return(
           <>//当boll为true时渲染domOne，为false时渲染domTwo
               {boll? domOne : domTwo}
               <button onClick={()=>{setBoll(!boll)}}>点击</button>
           </>
       )
   }
   
   export default One
   ```

   
#### React

1. index.html文件

   ```html
   <!DOCTYPE html>
   <html>
       <head></head>
       <body>
           <!--用于接收index.js渲染组件-->
           <div id="root"></div>
       </body>
   </html>
   ```

2. 定义组件

   - 函数组件：

     ```react
     //在One.js文件中定义One组件
     import React from 'react'//引入React，因为要使用JSX
     function One(props) {
         return(
             <>//若不想组件中的元素有父元素包裹，可以使用空标签
                 <p>{props.name}</p>//接收单个参数，且为name设置默认值
                 <p>{props.one}{props.two}</p>//接收多个参数
             </>
         )
     }
     One.defaultPrpos = {//为name值设置默认值，在引入的组件中设置也可以。
         name: "aioverg"
     }
     export default One//导出组件
     
     //在index.js文件中使用One组件，并挂载到root节点下
     import React from 'react'
     import ReactDOM from 'react-dom'
     import One from './One'//导入组件
     let one = {
         one: "hello",
         two: "world"
     }
     ReactDOM.render(//在index.html中挂载One组件
         <One
             args={one.one}//传递一个参数
             {...one}//传递多个参数
         >
         </One>,
          document.getElementById('root')
     )
     
     //props验证，注意，要在上线的项目中取消props验证，props验证不会阻止没有通过验证的数据渲染，但会在控制台中显示错误。在官网的高级教程可以看下验证类型。
     //引用prop-types库
     npm install --save prop-types
     ex.propTypes = {//验证组件ex中的props
         value: PropTypes.number//验证ex组件中的props.value是否是number类型。
     }
     ```

   - class组件

     ```react
     //在One.js文件中定义One组件
     import React, {Component} from 'react'
     class One extends Component {
         constructor(props){
             super(props)
             this.state = null//设置内部的状态管理，不然会有预警报错
         }
         render(){
             return(
                 <>
                     <p>{this.props.name}</p>//接收单个参数，且为name设置默认值
                     <p>{this.props.one}{this.props.two}</p>//接收多个参数
                 </>
             )
         }
     }
     One.defaultPrpos = {//为name值设置默认值，在引入的组件中设置也可以。
         name: "aioverg"
     }
     export default One//导出组件
     
     //在index.js文件中使用One组件，并挂载到root节点下
     import React from 'react'
     import ReactDOM from 'react-dom'
     import One from './One'//导入组件
     let one = {
         one: "hello",
         two: "world"
     }
     ReactDOM.render(//在index.html中挂载One组件
         <One
             args={one.one}//传递一个参数
             {...one}//传递多个参数
         >
         </One>,
          document.getElementById('root')
     )
     ```

4. 组件间传值

   - `props`：用于父组件向子组件间传值，不能在子组件中改变props中的值。

   - 子组件向父组件传值

     ```react
     //Child.js子组件
     import React from 'react'
     function Child(props){
         //let [name, setBoll] = useState("child")
         let name="child"
         return(
             <>
                 <h4>子组件</h4>
                 //接收父组件的回调函数，将值传递给父组件
                 <button onClick={()=>{props.f(name)}}>点击传值</button>
             </>
         )
     }
     
     export default Child
     
     //Parent.js父组件
     import React, {useState} from 'react';
     import Child from './Child'
     
     function Parent(props){
         let [data, setData] = useState(null)
         let f= (args) =>{setData(args)}//回调函数，用于接收子组件的值
         return(
             <>
                 <Child f={f} />
                 <h4>父组件</h4>
                 <h4>{data}</h4>
             </>
         )
     }
     
     //index.js
     ReactDOM.render(
       <React.StrictMode>
         <Parent />
       </React.StrictMode>,
       document.getElementById('root')
     );
     ```

   - 同级组件间传值，先将值传递给父组件再由父组件传递给子组件，也可以使用pubsub-js插件

     ```react
     //使用pubsub.js插件
     //安装cnpm install --save pushsub-js
     //childOne.js子组件
     import React, {useState, Fragment} from 'react'
     import PubSub from 'pubsun-js'
     function One(props){
         let name = "i am One"
         let f = () => {
             PubSub.publish("name", name)
         }
         return(
             <Fragment>
                 <h4>One</h4>
                 <button onClick={f}>点击</button>
             </Fragment>
         )
     
     }
     
     function Two(props){
         let [name, setName] = useState(null)
         PubSub.subscribe("name", (v)=>{
             setName(v)})
         return(
             <Fragment>
                 <h4>Two</h4>
                 <h4>{name}</h4>
             </Fragment>
         )
     }
     export {One}
     export default Two
     
     //index.js
     import Two, {One} from './compontents/Two'
     ReactDOM.render(
         <React.StrictMode>
             <One></One>
             <Two></Two>
         </React.StrictMode>,
         document.getElementById('root')
     );
     ```

7. 转发refs：将父组件创建的ref传递给子组件的某个dom元素，让父组件可以直接操作该dom元素。

   - 在函数组件中使用

     ```react
     //child.js组件
     import React from 'react'
     //参数ref用于接收转发过来的ref
     let Child = React.forwardRef((props, ref) => {
         return(
             <>
                 <h4>Child</h4>
                 <input ref={ref} />
             </>
         )
     })
     export default Child
     //parent.js组件
     import React from 'react'
     import Child from './Child'
     let Parent = function(props){
         //创建ref
         const ref = React.createRef()
         return(
             <>
                 <h4>Parent</h4>
                 <button 
                     //点击按钮，使Child组件中input元素获取焦点，并将值设置hello
                     onClick={() => {
                         ref.current.focus()
                         ref.current.value="hello"
                     }}
                 >点击</button>
                 //将创建的ref转发给Child组件
                 <Child ref={ref}/>
             </>
         )
     }
     export default Parent
     ```

   - 在class组件中使用转发，暂略

8.  脚手架：`create-react-app`是react的官方脚手架

   - 安装

     ```javascript
     npm install -g create-react-app //全局安装
     create-react-app --version //查看版本
     create-react-app 项目名称 //创建项目
     npm start //启动项目
     ```

   - 创建组件

     ```react
     //在components文件夹下创建Ex.js组件
     //多行元素需要有一个容器标签，当这个容器标签是空标签<></>或者<Fragment></Fragment>时，渲染时不会将这个容器标签渲染出来，<Frangment>标签需要引入才能使用。
     import React, {Component, Fragment} from 'react'
     export default class Ex extends Component {
         render() {
             return ( <p>hello world!</p>)
         }
     }
     
     //引入组件
     import React, {Component} from 'react'
     import Ex from 'Ex.js'
     export default class ex1 extends Component {
         render() {
             return ( <p><Ex></Ex></p>)
         }
     }
     ```

9. 路由：使用`react-router-dom`，它比`react-router`多了一些功能，其它大致一样，一帮使用`react-router-dom`

   ```react
   //安装
   npm install --save react-router-dom
   //全局引用，在index.js中引入，并使用BrowserRouter模式，且把路由模式包裹根组件
   import {BrowserRouter} from 'react-router-dom'
   ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,docunemt.getElementById('app'))
   
   //在One.js文件中创建One组件
   import exTwo from 'exTwo.js' //引入组件
   function One(){
       return (<p>hello world!</p>)
   }
   
   //路由导航，也可以使用NavLink，它与Link比起来会为导航路由添加一个class=.native，便于为当前路由设置样式。
   import {Route, Link} from 'react-router-dom'
   import One from 'One' //引入组件
   function ex(){
       return (
           <div>
               <Link to="/one">点击导航到One组件</Link>
               <Route path="/one" component={One}></Route>{/*导航的组件在此展示*/}
           </div>
       )
   }
   //编程式导航 props.history.push('/url')
   //路由传参，params、query两种模式
   ```

10. redux：javaScript提供的一个可预测性的状态容器。

    ```react
    //安装
    npm install --save redux
    //使用redux , store.js
    import {createStore} from 'redux'
    //引入数据文件
    import {data} from './data.js'
    export var store = createStore()
    
    //组件使用redux数据
    import {store} from './store.js'
    class ex extends Component{
        constructor(props){
            super(props)
            this.state = {
                one: store.getState()
            }
        }
    }
    ```

11.  

2. 正向代理、反向代理

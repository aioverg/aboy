#### React - 05 - this指向

##### 简介

1. **概念**：应为class的方法不会默认绑定`this`，所以在使用class组件时，要注意`this`的指向问题，以免使`ths`指向`undefined`。

##### 使用

1. 使用bind绑定

   ```react
   class Ex extends React.Component{
       constructor(props){
           super(props)
       }
       f(){
           console.log(this)
       }
       render(){
           return(
               <div>
                   <button onClick={this.f.bind(this)}>点击</button>
               </div>
           )
       }
   }
   ```

2. 函数通过箭头函数创建

   ```react
   class Ex extends React.Component{
       constructor(props){
           super(props)
       }
       f = () =>{
           console.log(this)
       }
       render(){
           return(
               <div>
                   <button onClick={this.f}>点击</button>
               </div>
           )
       }
   }
   ```

3. `constructor`中绑定

   ```react
   class Ex extends React.Component{
       constructor(props){
           super(props)
           this.f = this.f.bind(this)
       }
       f(){
           console.log(this)
       }
       render(){
           return(
               <div>
                   <button onClick={this.f}>点击</button>
               </div>
           )
       }
   }
   ```

4. 把事件的调用写成箭头函数

   ```react
   class Ex extends React.Component{
       constructor(props){
           super(props)
       }
       f(){
           console.log(this)
       }
       render(){
           return(
               <div>
                   <button onClick={ () => {this.f()} }>点击</button>
               </div>
           )
       }
   }
   ```

   


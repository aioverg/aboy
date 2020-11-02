#### API

##### 概述

`React` 是 `React库` 的入口，可以使用 `<script>` 标签的方式来加载，然后通过 `React` 全局变量对象来获取顶层 `API` ；当使用 `ES6` 和 `npm` 时，可以通过 `import React from react` 来引入。

##### 组件

- **`React.Component` **：定义 `React` 组件。示例：

  ```react
  //定义 Ex 组件
  class Ex extends React.Component {
      render(){
          return (<h2>hello</h2>)
      }
  }
  ```

- **`React.PureComponent`**：与 `React.Component` 类似，但没有实现 `shouldComponentUpdate()` 方法，主要用于性能优化。
- **`React.memo`**：与`React.PureComponent`类似，用于性能优化。

##### `React` 元素

当不使用 `JSX` 编写时，可以使用这些方法创建元素。

- **`createElement(type, [props], [...children])`** ：创建 `React` 元素，参数：

  `type` ：标签名称。

  `props` ：标签属性。

  `children` ：子节点。

  例如：

  ```react
  <!--转义JSX-->
  <script type="text/jsx">
      const root = document.getElementById('root')
  		
      class One extends React.Component {
          render(){ //使用<h2>标签创建一个React元素，标签属性为空，子节点由props传入
              return React.createElement("h2", null, [this.props.name])
          }
      }
  		
      class Ex extends React.Component {
          render(){ //创建一个React元素，并设置元素class和id，其中id由props传入，并将this.props.name和<One />组件作为子节点，并给<One />组件传入props
              return React.createElement("div", {className: "ex", id: this.props.name}, <One name="hello"/>)
          }
      }
  		
      ReactDOM.render(//渲染<Ex />组件，并传入props，并设置子节点为空
          React.createElement(Ex, {name: 'ex'}, null)//或者 <Ex name="ex" />
      ,root)
  </script>
  ```
  
- **`createFactory()`**：与 `createElement()` 类似，以弃用。

##### 转换元素

- **`cloneElement(element, [props], [..children])`**：克隆一个元素，并返回一个新的元素（保留旧元素的props和ref，若有冲突则覆盖掉），参数：

  `element` ：被克隆的元素。

  `props` ：新元素的标签属性。

  `children` ：新元素的子元素。

  示例：

  ```react
  <!--转义JSX-->
  <script type="text/jsx">
      const root = document.getElementById('root')
  
      class Ex extends React.Component {
          render(){
              let one = React.createElement('h2', {className: 'one'}, this.props.name)//创建一个元素
              return React.cloneElement(one, {className: "ex"}, <em>Ex</em>)//克隆one元素，并使用<em>标签替换子元素，使用将className的值改为ex。
          }
      }
  
      ReactDOM.render(<Ex />, root)
  </script>
  ```
  
  
  
- **`React.isValidElement(obj)`**：判断对象是否为 `React` 元素，返回 `Boolean` 值。

- **`React.Children`**：用于处理 `this.props.children` 不透明数据结构的方法。

  `this.props.children` 获取实例的子标签，示例：

  ```react
  <!--转义JSX-->
  <script type="text/jsx">
      const root = document.getElementById('root')
  
      class Ex extends React.Component {
          render(){//this.props.children用于获取<Ex><Ex/>标签中的<h4>标签
              return (<div>Ex{this.props.children}</div>)
          }
      }
  
      ReactDOM.render(
          <Ex>
              <h4>props.chilren</h4>
          </Ex>
      ,root)
  </script>
  ```

  几个方法：

  `React.Children.map(children, callback)` ：对 `this.props.children` 中的每个直接子节点调用回调函数。

  `React.Children.forEach(children, callback)` ：对 `this.props.children` 中的每个直接子节点调用回调函数。

  `React.Children.count(children)` ：返回 `this.props.children` 中的组件总数量，等同于通过 `map` 或 `forEach` 调用回调函数的次数。

  `React.Children.only(children)` ：验证 `this.props.children` 是否只有一个子节点，是的话返回该节点，否的话抛出一个错误。

  `React.Children.toArray(children)` ：将 `this.props.children` 这个复杂的数据结构以数组的方式扁平展开并返回，并为每个子节点分配一个 key。

##### Fragments

- **`React.Fragment`** ：一个 `React` 定义的组件，能够在不额外创建 `DOM` 元素的情况下，让 `render()` 返回多个元素。例如：

  ```react
  //定义 Ex 组件
  class Ex extends React.Component {
      render(){
          return (
              <React.Fragment>
                  <h2>0000</h2>
                  <h2>1111</h2>
              </React.Fragment>
          )
      }
  }
  ```

  

##### Refs

- **`React.createRef`**：创建一个能够通过 `ref` 属性附加到 `React` 元素的 `ref` 。

  示例：自动获取 `<input>` 焦点

  ```react
  <script type="text/jsx">
      const root = document.getElementById('root')
      
      class Ex extends React.Component {
          constructor(props){
              super(props)
              this.inputRef = React.createRef() //创建一个ref，命名为inputRef
          }
          componentDidMount(){
              console.log(this.inputRef) //打印绑定inputRef的<input>元素
              this.inputRef.current.focus() //使绑定了inputRef的<input>元素获得焦点
          }
          render(){ //将inputRef绑定到元素的ref属性上，这时可以通过ref获取元素
              return (<input type="text" ref={this.inputRef} />)
          }
      }
      
      ReactDOM.render(<Ex />, root)
      </script>
  ```

  

- **`React.forwardRef`**：接受一个参数为 `props` 和 `ref` 作为参数的函数，创建一个 `React` 组件，这个组件能将其接受的 `ref` 属性转发到其组件树下的另一个组件中，例如：

  ```react
  <!--转义JSX-->
  <script type="text/jsx">
      const root = document.getElementById('root')
  
      class Ex extends React.Component {
          constructor(props){
              super(props)
              this.inputRef = React.createRef() //定义ref
          }
          componentDidMount(){
              console.log(this.inputRef) //打印绑定了inputRef的元素
              this.inputRef.current.focus() //使绑定了inputRef的元素获得焦点
          }
          render(){//将inputRef传递给Input组件
              return (<Input type="text" ref={this.inputRef} name="hello" />)
          }
      }
      
      //Input组件接收传过来的ref传递给其下面的组件
      const Input = React.forwardRef((props, ref) => (
          <input ref={ref}  className="input" defaultValue={props.name} />
      ))
      
      ReactDOM.render(<Ex /> ,root)
  </script>
  ```

- 000

##### 其它

- **`React.lazy`**：定义一个动态加载的组件（即组件懒加载）。例如：

  ```react
  const Ex = React.lazy(() => import('./Ex'))
  ```

- **`React.Suspense`**：尚未推广支持，暂略。
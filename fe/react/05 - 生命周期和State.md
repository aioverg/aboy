#### React - 生命周期和State

##### 简介

1. **`State`**：`State` 与 `Props` 类似，但`State` 是私有的，并且完全受控于当前组件。
2. **`生命周期`**：生命周期指组件的各个时期（如挂载、销毁等），在组件的不同时期自动执行的方法成为生命周期方法。
3. **`reder()`**：在类组件中，每次组件更新都会调用 `render()` 方法，这使得我们可以使用 `state` 或 生命周期方法等特性。

##### 示例，一个自动刷新的计数器

```react
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
		<title>React</title>
		<!--引入react-->
		<script src="react.development.js"></script>
		<!--引入react-dom-->
		<script src="react-dom.development.js"></script>
		<!--引入babel，用以识别转义JSX-->
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
	<!--转义JSX-->
	<script type="text/jsx">
	    const root = document.getElementById('root')
	    class Hello extends React.Component {
		    constructor(props){
			    super(props)
				this.state = {date: new Date()}
			
			}
			componentDidMount(){
			    this.timerID = setInterval(
				    () => this.tick(),
					1000
				)
			}
			componentWillUnmount(){
			    clearInterval(this.timerID)
			}
			tick(){
			    this.setState({date: new Date()})
			}
		    render(){
			    return (
				    <div>
					    <h2>现在是 {this.state.date.toLocaleTimeString()}</h2>
					</div>
				)
			}
		}
		ReactDOM.render(<Hello />, root)
    </script>
</html>
```

运行步骤：

1. 调用 `ReactDOM.render()` 方法，进而调用 `Hello` 组件的构造函数，构造函数初始化 `this.state`
2. 调用 `Hello` 组件的 `render()` 方法，这是 `Rreact` 确定应该在页面上展示什么的方式。然后 `React` 更新 `DOM` 来匹配 组件渲染的输出。
3. `Hello` 组件的输出被插入到 `DOM` 后，调用 `componentDidMount()` 生命周期方法，在这里设置一个计时器每秒调用一次组件的 `tick()` 方法。
4. 浏览器每秒调用一次 `tick()` 方法，在 `tick()` 方法中，`Hello` 组件通过调用 `setState()` 来进行一个 `UI` 更新。由于 `setState()` 被调用，`React` 能够知道 `State` 已经改变，进而会重新调用 `render()` 方法来更新组件重新渲染。
5. 当 `Hello` 组件从 `DOM` 移除时，`React` 会调用 `componentWillUnmount()` 生命周期方法，清楚计时器。

##### State

1. 不要直接修改 `state` ，例如 `this.state.name = "hello"` 不会重新渲染组件；应该使用 `setState()` ，例如：`this.setState({name: "hello"})` 。

2. `State` 的更新可能是异步的，即处于性能考虑，`React` 可能会把多个 `setState()` 合并成一个调用。因为 `this.props` 和 `this.state` 可能会异步更新，所以当依赖他们的值更新下一个状态时，可能会出现错误。

   例如依赖 `this.state` 和 `this.props` 的一个计数器：

   ```react
   this.setState({ //这里由于this.state和this.props可能会异步更新，所以依赖它们的值更新下一个状态时可能会出错
       counter: this.state.counter + this.props.increment
   })
   ```

   要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 `state` 作为第一个参数，将此次更新被应用时的 `props` 做为第二个参数，如：

   ```react
   this.setState((state, props) => ({
       counter: state.counter + props.increment
   }))
   ```

3. `State` 的更新会被合并，即使用 `setState()` 一个一个更新 `state` 的对象时，`React` 会把对象合并到当前的 `state` 。

   











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

   
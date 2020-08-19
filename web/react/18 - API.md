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

  `type` ：是标签名称。

  `props` ：是标签属性。

  `children` ：是子节点。

  例如：

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
  	<script>
  		
  	</script>
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
  		
  		//ReactDOM.render(<Ex name="hello"/>, root)
  		ReactDOM.render(//渲染<Ex />组件，并传入props，并设置子节点为空
  		    React.createElement(Ex, {name: 'ex'}, null),//或者 <Ex name="ex" />
  			root
  		)
      </script>
  </html>
  ```

  

- **`createFactory()`**：与 `createElement()` 类似，以弃用。

##### 转换元素

- **`cloneElement(element, [props], [..children])`**：克隆一个元素，并返回一个新的元素参数：

  `element` ：被克隆的元素。

  `props` ：新元素的 `props` 。

  `children` ：新元素的子元素。

- **`isValidElement()`**

- **`React.Children`**

##### Fragments

- **`React.Fragment`**

##### Refs

- **`React.createRef`**

- **`React.forwardRef`**

### 

- 

  
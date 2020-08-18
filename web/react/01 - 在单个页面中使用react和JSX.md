#### 在单个页面中使用react和JSX

##### 一般组件示例

```html
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
		<title>React</title>
        <!--引入react开发版-->
		<script src="react.development.js"></script>
        <!--引入react-dom开发版-->
		<script src="react-dom.development.js"></script>
        <!--引入babel用于识别JSX语法-->
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
    <!--type="text/jsx"识别转义JSX-->
	<script type="text/jsx">
	    //定义一般组件
	    let one = "one"
	    const element = (
		    <div>
		        <h1 style={{color: "blue"}}>{one}</h1>
			    <h1 style={{color: "blue"}}>two</h1>
			</div>
		);
		ReactDOM.render(element, document.getElementById('root'));
    </script>
</html>
```

##### 函数组件实例

```html
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
		<title>React</title>
        <!--引入react开发版-->
		<script src="react.development.js"></script>
        <!--引入react-dom开发版-->
		<script src="react-dom.development.js"></script>
        <!--引入babel用于识别JSX语法-->
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
    <!--type="text/jsx"识别转义JSX-->
	<script type="text/jsx">
	    //定义函数组件，props用于传值
		function Hello(props){
		    return (
			    <div>
			        <h1>{props.name}</h1>
					<h1>two</h1>
				</div>
			)
		}
		const element = <Hello name="one" />
		
		ReactDOM.render(elememt, document.getElementById('root'));
    </script>
</html>
```

##### 类组件实例

```html
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
		<title>React</title>
        <!--引入react开发版-->
		<script src="react.development.js"></script>
        <!--引入react-dom开发版-->
		<script src="react-dom.development.js"></script>
        <!--引入babel用于识别JSX语法-->
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
    <!--type="text/jsx"识别转义JSX-->
	<script type="text/jsx">
	    //定义类组件，props用于传值
	    class Hello extends React.Component {
	        constructor(props){
	            super(props)
	            //this.state用于存放本地的值
				this.state = {name: "one"}
			}
		    render(){
		        return (
				    <div>
					    <h1>state：{this.state.one}</h1>
						<h1>props: {this.props.two}</h1>
					    <h1>thr</h1>
					</div>
				)
		    }
		}
		const element = <Hello two="two"/>
		
		ReactDOM.render(element, document.getElementById('root'));
    </script>
</html>
```


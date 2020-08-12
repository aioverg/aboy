#### 在单个页面中使用react和JSX

##### 一般组件示例

```html
<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8" />
		<title>React</title>
		<script src="react.development.js"></script>
		<script src="react-dom.development.js"></script>
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
	<script type="text/jsx">
	    const element = (
		    <div>
		        <h1 style={{color: "blue"}}>one</h1>
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
		<script src="react.development.js"></script>
		<script src="react-dom.development.js"></script>
		<script src="babel.min.js"></script>
	</head>
	<body>
		<div id="root">占位</div>
	</body>
	<script type="text/jsx">	
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


#### React - 遍历渲染和key

##### 简介

`render` 可以接受由 `DOM` 组成的数组，并按顺序渲染这些 `DOM` 。在每一个由遍历渲染的元素上设置`key` 属性，可以帮助 `React` 识别元素的变动。所以遍历渲染的基本思想是渲染由 `DOM` 组成的数组。

##### 示例

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
		
		class Ex extends React.Component {
		    static defaultProps = { //设置默认的props值
			    list: [1,2,3]
			}
		    constructor(props){
			    super(props)
			}
			render(){
			    return (
			        <div>
                        //列表渲染，map()会返回一个由<h2></h2>组成的dom数组
					    {this.props.list.map((item) => <h2 key={item}>{item}</h2>)}
                        
                        //列表渲染，直接使用数组进行渲染
                        {[
                            <h2 key="one">hello</h2>,
                            <h2 key="two">world</h2>
                        ]}
				    </div>
				)
			}
		}
		
		ReactDOM.render(<Ex list={[4,5,6]}/>, root)
    </script>
</html>
```




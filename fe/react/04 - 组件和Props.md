#### React - 组件和Props

##### 简介

组件类似于 `JavaScript` 函数，接收任意的入参（即 `Props`），并返回用于描述页面展示内容的 `React` 元素。注意组件应该作为纯函数使用，即组件不应该试图修改自身的 ` Props` 。 

1. **函数组件**：一个函数若返回可被渲染的值，该函数就可作为组件，函数组件可以接收一个`props`参数用于接收父组件的传值。注意组件名称首字母大写，如：

   ```react
   function One(){}//不能作为组件，没有返回可被渲染的元素
   
   function Two(){return null}//可以作为组件，返回了可被渲染的元素（即null）
   
   function Thr(){return <p>hello</p>}//可以作为组件，返回了可被渲染的函数
   
   function Fou(props){return <p>{props.name}</p>}//可以作为组件，并使用props接收传递的值
   ```
   
2. **class组件**：继承 `React.Component` 类创建的子类，且用 `renser()` 方法返回一个可被渲染的元素，则该子类可作为 class组件，class组件可以接受一个 `props` 参数用于接收父组件的传值。如：

   ```react
   class One extends React.Component {
       constructor(props){
           super(props)
       }
       render() {
           return <p>{this.props.name}</p>
       }
   }
   ```

##### props

`Props` 是传递给组件的参数（类似于函数的形参）。

1. 设置默认的 `props` 

   ```react
   class One extends React.Component {
       static defaultProps = { //设置默认的props值
           name: "aioverg"
       }
       constructor(props){
           super(props)
       }
       render() {
           return <p>{this.props.name}</p>
       }
   }
   ```
   

   
2. `Props` 的默认值是 `true` ，即 `<Ex name />` 等价于 `<Ex name={true} />` ，但建议最好在 `props` 的值为 `true` 时也显示传递 `true` 。

3. 可以使用扩展运算符 `...` 传递对象，例如：

   ```react
   let obj = {age: 10, name: "aioverg"}
   
   function Ex(props){
       return(
           <React.Fragment>
               <h2>{props.age}</h2>
               <h2>{props.name}</h2>
           </React.Fragment>
       )
   }
   
   ReactDOM.render(<Ex {...a} />, root)
   ```
   

##### Render Props

在 `React` 组件之间使用一个值为函数的 `props` 共享代码的技术。例如：

将组件 `<Tag>` 作为组件 `<Mouse>` 的 `props` ，然后在组件 `<Mouse>` 中渲染 `<Tag>` ，并将组件 `<Mouse>` 的 `state` 作为 组件 `<Tag>` 的 `props` 传入，达到组件 `<Tag>` 能够共享 `<Mouse>` 的 `state` 的目的。

```react
<script type="text/jsx">
    const root = document.getElementById('root')
    
    class Tag extends React.Component {
        render() {
            const mouse = this.props.mouse
            return (
                <span style={{position: 'absolute', left: mouse.x, top: mouse.y }}>跟随鼠标</span>
            )
        }
    }

    class Mouse extends React.Component {
        constructor(props) {
            super(props);
            this.handleMouseMove = this.handleMouseMove.bind(this);
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove(event) {
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }

        render() {
            return (
                <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                    {this.props.render(this.state)} //接收传过来的 Render Props，并将this.state作为参数
                </div>
            )
        }
    }

    class Ex extends React.Component {
        render() {
            return (
                <div>
                    <h1>移动鼠标!</h1>
                    //使用Render Props 传递Tag组件，并将xyz作为组件的props传入Tag组件，其中xyz是{this.props.render(this.state)}中的this.state
                    <Mouse render={xyz => (
                            <Tag mouse={xyz} />
                        )}/>
                </div>
            )
        }
    }
        
    ReactDOM.render(<Ex />, root)
</script>
```


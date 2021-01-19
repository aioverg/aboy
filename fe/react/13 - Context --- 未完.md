#### Context

##### 概念

`Context` 提供了一种无需为每层组件手动添加 `props` ，就能在组件树间进行数据传递的方法。

在 `React` 中组件间的数据是通过 `props` 自上而下进行传递的，当组件的嵌套过深时，这种传递方式就很繁琐，例如：

```react
function One(props){
    return <h2>{props.name}</h2>
}

class Two extends React.Component {
    render(){
        return <One name={this.props.name} />
    }
}

function Thr(props){
    return <Two name={props.name} />
}

ReactDOM.render(<Thr name="aioverg" />, root)
```

 如上示例，组件 `One` 要接收从 `Thr` 传递过来的 `name` 值，需要 `Thr` 先将值传递给 `Two` ，`Two` 再传递给 `One` 。

若使用 `Context` 则可以不用这样层层传递，例如：

```react
<script type="text/jsx">
    const root = document.getElementById('root')
    
    //创建一个Context，取名为NameContext，并设 hello 为默认值
    const NameContext = React.createContext("hello")

    class One extends React.Component {
        //指定contentType读取NameContext
        static contextType = NameContext
        
        render(){
            //this.context就是传递的值
            return <h2>从Thr传过来的值：{this.context}</h2>
        }
    }

    class Two extends React.Component {
        render(){
            return <One />
        }
    }
		
    function Thr(props){
        return(
            //使用 Context 并传入指定值
            <NameContext.Provider value="aioverg">
                <Two />
            </NameContext.Provider>
        ) 
    }

    ReactDOM.render(<Thr />, root)
</script>
```

可以看到，此时 `One` 可以直接获得 `Thr` 传递的值。

使用 `Context` 传值，很像定义了一个全局变量，嵌套组件获取值是先在最近的 `Context` 中查找，然后在往上层查找。

##### API

- `React.createContext(defaultValue)` ：创建一个 `Context` 对象。
- `Context.Provider` ：每个 `Context` 对象都会返回一个 `Provider React` 组件。
- `Class.contextType` ：
#### Fragments

##### 概念

`React` 的一个组件若由多个元素组成时，多个元素需要由一个父元素，一般情况下会选择使用 `div` 标签作为元素的父元素，但这样，渲染时会导致元素外有一个 `div` 标签，`Fragments` 的目的就是提供一个父标签，且在渲染时不会显示。

##### `<React.Fragment>` 与 `<>`

`<React.Fragment>` 可以带有 `key` 和属性， `<>` 不支持 `key` 和属性，所以在迭代渲染时应该使用 `<React.Fragment>` 。

##### 示例：`<React.Fragment>`

```react
<script type="text/jsx">
    const root = document.getElementById('root')
		
    let list = [
        {id: 1, age: 10, name: "hello"},
        {id: 2, age: 15, name: "world"}
    ]
    
    function Ex(props){
        return (
            <React.Fragment>
                {props.list.map(
                    item => (
                        <React.Fragment key={item.id}>
                            <h2>{item.age}</h2>
                            <h2>{item.name}</h2>
                        </React.Fragment>
                    )
                )}
            </React.Fragment>
        )
    }
    ReactDOM.render(<Ex list={list}/>, root)
</script>
```

##### 示例：`<>`

```react
function Ex(props){
    return (
        <>
            <h2>one</h2>
            <h2>two</h2>
        </>
    )
}
```


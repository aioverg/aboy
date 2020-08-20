#### 类组件 API

##### 概述

使用继承 `React.Componrnt` 的方式创建一个类组件，类组件中必须包含一个 `render()` 函数，如：

```react
//定义 Ex 组件
class Ex extends React.Component {
    render(){
        return (<h2>hello</h2>)
    }
}
```

##### 生命周期

- 挂载：当组件实例被创建并插入 `DOM` 中时，调用方法顺序如下：

  1. **`constructor()`** ：如果不初始话 `state` 或进行方法绑定，则不需要为 `React` 组件实现构造函数。不要在 `constructor()` 内部将 `props` 的值复制给 `state` ，如下：

     ```react
     constructor(props) {
         super(props)
         this.state = { color: props.name }//不要这样做，应该使用setState给state赋值
     }
     ```

  2. **`static getDerivedStateFromProps()`**

  3. **`render()`**：当 `render()` 被调用时，它会检查 `this.props` 和 `this.state` 的变化，并返回以下类型中的一个：

     `React 元素`。

     `数组或fragments` ：使得 `render()` 可以返回多个元素。

     `Portals` ：可以渲染子节点到不同的 `DOM` 子树中。

     `字符串或数值类型` ：做为文本节点。

     `布尔类型或null` ：什么都不渲染。

  4. **`componentDidMount()`** ：在组件挂载后（即插入 `DOM` 树中）立即调用。注意，在必要的情况下，可以在这个时期调用 `setState()` ，但会出发额外的渲染（即会调用两次 `render`），虽然此渲染发生在屏幕更新之前（用户看不到），但还是会造成性能问题，最好在 `constructor()` 中初始化 `state` 。

- 更新：当组件的 `props` 或 `state` 发生变化时会触发更新，调用的方法如下：
  1. **`static getDerivedStateFromProps()`**
  2. **`shouldComponentUpdate()`**
  3. **`render()`**
  4. **`getSnapshotBeforeUpdate()`**
  5. **`componentDidUpdate()`** ：在组件更新后立即调用。可以在此处对更新后的 `DOM` 、`props` 等进行操作。
- 卸载：当组件从 `DOM` 中移除时调用的方法如下：
  1. **`componentWillUnmount()`** ：在组件卸载和销毁之前条用，可以在此次进行清理操作，如清除计时器等。

##### 错误处理

当渲染过程中，生命周期，或子组件的构造函数抛出错误时，调用如下方法：

- `static getDerivedStateFromError()`
- `componentDidCatch()`

##### 其他 API

这些API与生命周期方法不同，生命周期方法会自动调用，这些方法需要手动调用。

- **`setState(updater, [callback])`**：用于更新 `state`，为了性能 `setState()` 并不总是立即更新组件，所以使得获取 `this.state` 存在出错的可能，为了避免这个问题可以使用 `componentDidUpdate` 或者 `setState()` 的回调函数（`callback`）来获取更新后的 `this.state` 。一般情况下 `setState()` 将始终进行重新渲染，除非 `shouldComponentUpdate()` 返回 `false`。

  参数说明：

  1. `updater` ：当 `updater` 是一个对象的时候，如： `setState({name: "aioverg"}, [callback])`，会将对象浅合并到新的 `state` 中，当参数相同时后来的覆盖先前的。

     当 `updater` 为函数时，接受两个参数，需要返回对象作为更新的 `state` ，如：`f(state, props)` ，其中 `state` 是变化时组件的状态（即之前的 `state`），`props` 可以随意指定。

  2. `callback` ：回调函数，会在 `setState` 完成合并并重新渲染组件后执行，可以在这里获取更新后的 `state`、`DOM` 等（推荐使用 `componentDidUpdate` 进行此操作）。

- **`forceUpdate()`** ：强制让组件重新渲染。

##### class 属性

- **`defaultProps`**：为组件添加默认的 `props`，例如：

  ```react
  class Ex extends React.Component {
      static defaultProps = { //设置props的默认值
          name: "aioverg"
      }
      constructor(props){
          super(props)
      }
      render() {}
  }
  
  //或者
  
  class Ex extends React.Component {
      constructor(props){
          super(props)
      }
      render() {}
  }
  Ex.defaultProps = { //设置Ex组件的props的默认值
      name: "aioverg"
  }
  ```

- **`displayName`** ：多用于调试消息，一般不需要设置，它会根据组件的名称推断出来。

#### 实例属性

- **`props`** ：`this.props` 包含被改组件调用者定义的 `props` ，注意，`this.props.children` 是一个特殊的 `prop` ，通常由 `JSX` 表达式中子组件组成，而非组件本身定义的。
- **`state`** ：包含了随时间发生变化的数据，由用户自定义，是一个普通的 `JavaScript` 对象。
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

- `React.PureComponent`：与 `React.Component` 类似，但没有实现 `shouldComponentUpdate()` 方法，主要用于性能优化。
- `React.memo`：与`React.PureComponent`类似，用于性能优化。

##### `React` 元素

当不使用 `JSX` 编写时，可以使用这些方法创建元素。

- `createElement(type, [props], [...children])` ：创建 `React` 元素，例如：

  ```react
  
  ```

  

- `createFactory()`

- 转换元素

  `cloneElement()`

  `isValidElement()`

  `React.Children`

- Fragments

  `React.Fragment`

- Refs

  `React.createRef`

  `React.forwardRef`

  ### 

- 

  
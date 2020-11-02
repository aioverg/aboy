#### ReactDOM

##### 概述

`ReactDOM` 提供了将由 `React` 生成的虚拟 `DOM` 渲染到文档中变成实际 `DOM` 的功能，可以用 `<script src="react-dom.development.js"></script>` 的形式引入，也可以使用 `npm` 然后使用 `import ReactDOM from 'react-dom'` 的方法引入。整个 `React` 分成两大块，`react.js` 生成虚拟 `DOM` ，`react-dom.js` 将虚拟 `DOM` 变为实际的 `DOM` 。

##### 方法

- `ReactDOM.render(element, container[, callback])` ：在提供的 `container` 里渲染 `React` 元素，并返回对该组件的引用。参数：
  1. `element` ：被渲染的 `React` 元素。
  2. `container` ：渲染 `React` 元素的容器。
  3. `callback` ：回调函数，在组件被渲染或更新之后调用。
- `ReactDOM.hydrate(element, container[, callback])` ：与 `render()`相同，但它用于在 `ReactDOMServer` 渲染的容器中对 HTML 的内容进行 hydrate 操作。详情暂略。
- `ReactDOM.unmountComponentAtNode(container)` ：从 `DOM` （`container` 组件容器）中卸载组件，如果组件被移除返回 `true` ，如果没有组件可被移除返回 `false` 。
- `ReactDOM.findDOMNode(component)` ：获取已经挂载到 `DOM` 上的组件 `component` 的真实 `DOM` 。一般情况下可以给组件绑定一个 `ref` 来避免使用这个方法。
- `ReactDOM.createProtal(shild, container)` ：创建 `protal` ，`Portal` 将提供一种将子节点渲染到 `DOM` 节点中的方式，该节点存在于 `DOM` 组件的层次结构之外。
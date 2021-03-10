# 操作 DOM

最近在用 React 做项目时，碰到了需要在 DOM 变化后能够获取 DOM 的位置，然后根据 DOM 的位置使用 SVG 画一个背景图的情况，刚开始我对 React 不熟悉，一直在用 React 的 refs 转发来做这件事，结果碰到了很多麻烦，今天走在路上仔细考虑了一个发现，使用 refs 来获取 DOM 做这件事本身就是一个错误，应该在 DOM 重新渲染后，在 `componentDidUpdate()` 中调用 `JavaScript` 的 `document.getByClassName()` 等获取 DOM 的方法来获取渲染后的 DOM ，进而获取 DOM 的最新位置信息。
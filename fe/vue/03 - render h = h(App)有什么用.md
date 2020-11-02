#### render: h => h(App)有什么用？

##### 来源

```javascript
//由
render: function(createElement){
    return createElement(App)
}
//缩写为
render(createElement){
    return createElement(App)
}
//再缩写为，这里Vue作者把createElement函数简写成了h
render(h){
    return h(App)
}
//最后写成箭头函数为：
render: h => h(App)
```

##### 作用

渲染App组件。`Vue.js` 中的 `createElement()` 的作用是生成 `VNode` 节点，`render()` 得到 `VNode` 后，渲染成真实 `DOM` ，并挂载。
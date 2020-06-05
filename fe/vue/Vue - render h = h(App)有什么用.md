#### Vue render: h => h(App)

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

渲染App组件。Vue.js中的createElement函数的作用是生成VNode节点，render函数得到VNode后，渲染成真实DOM，并挂载。
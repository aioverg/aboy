#### 虚拟DOM

##### 概念

虚拟 `DOM` 就是一个 `JavaScript` 对象，由于浏览器创建原生 `DOM` 时需要实现各种规范（如HTML属性，事件等），所以创建原生 `DOM` 的代价较大，这时就引入了虚拟 `DOM` ，当修改 `DOM` 时，先修改虚拟 `DOM`，再通过虚拟 `DOM` 与原生 `DOM` 进行对比（通过`diff` 算法），计算出需要变更的原生 `DOM` ，这时候只修改需要变更的`DOM` ，这样就避免了更新整个视图，节省了计算资源。

例如：

```javascript
<div id="one">
    <p class="two">hello world</p>
</div>
//转换为虚拟DOM
{
    tag: 'div',
    props: {id: 'one'},
    children: [{
        tag: 'p',
        props: {className: 'two'},
        children: [
            'hello world'
        ]
    }]
}
```

##### HTML的渲染过程使用

1. 创建虚拟 `DOM`，通过虚拟 `DOM` 库（`snabbdom`、`virtual-dom`等)将 `HTML` 代码转译成虚拟 `DOM` 对象。虚拟DOM对象基本包括：

   ```java
   {
       tag: null,  //标签名
       props: null,  //属性
       children: null  //子节点
   }
   ```

2. 渲染虚拟 `DOM`

3. 更新 `DOM` ，当 `DOM` 改变时，会创建新的虚拟 `DOM`，通过将新旧 `DOM` 进行对比，将新的变化更新的视图上，这一步不会重新渲染整个 `DOM` ，只重新渲染改变的地方。
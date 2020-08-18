#### 虚拟DOM

##### 概念

虚拟DOM就是一个JavaScript对象，由于浏览器创建原生DOM时需要实现各种规范（如HTML属性，事件等），所以创建原生DOM的代价较大，这时就引入了虚拟DOM，当修改DOM时，先修改虚拟DOM，再通过虚拟DOM与原生DOM进行对比（通过diff算法），计算出需要变更的原生DOM，这时候只修改需要变更的DOM，这样就避免了更新整个视图，节省了计算资源。

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

1. 创建虚拟DOM，通过虚拟DOM库（snabbdom、virtual-dom等)将HTML代码转译成虚拟DOM对象。虚拟DOM对象基本包括：

   ```java
   {
       tag: null,  //标签名
       props: null,  //属性
       children: null  //子节点
   }
   ```

2. 渲染虚拟DOM

3. 更新DOM，当DOM改变时，会创建新的虚拟DOM，通过将新旧DOM进行对比，将新的变化更新的视图上，这一步不会重新渲染整个DOM，只重新渲染改变的地方。
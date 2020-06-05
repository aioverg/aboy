#### Vue key属性与可复用

**概述：**Vue会尽可能的复用元素，这样会提升渲染的速度，如：

```javascript
<input v-if="one" placeholder="one" />
<input v-else placeholder="two" />
```

当两个<input>元素切换显示的时候，<input>元素不会被重新渲染，只简单替换```placeholder```属性，这样可节省重新渲染<input>元素的功耗。

但有时可能需要每次切换的时候都重新渲染元素，这时可以给元素定义一个唯一的```key```属性，这时Vue会把元素做为独立的不复用它们，例如：

```javascript
<input v-if="one" placeholder="one" key="one" />
<input v-else placeholder="two" key="two" />
```

这时两个<input>切换时，元素不会被复用。
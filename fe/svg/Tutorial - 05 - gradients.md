# 渐变

`SVG` 中的渐变有线性渐变和径向渐变两种，为了复用渐变定义在 `<defs>` 标签内部，需要给渐变指定一个 `id` 方便元素引用。

## 线性渐变

沿直线改变称为线性渐变。

元素：

1. `<linearGradient>` ：声明线性渐变。

2. `<stop>` ：设置渐变单元。

   参数：

   `offset` ：偏移。

   `stop-color` ：当前颜色。

   `stop-opacity` ：当前透明度。

一个线性渐变由 `<linearGradient><linearGradient/>` 元素，和它内部的若干 `<stop />` 组成，如：绘制从 黑色 到 蓝色 再到 黄色 的渐变色，并作为矩形的填充色。

```
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ex">
      <stop stop-color="black" offset="0%" />
      <stop stop-color="blue" offset="50%" />
      <stop stop-color="yellow" offset="100%" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="200" height="200" fill="url(#ex)" />
</svg>
```

注意，元素中使用 `url()` 来引用定义的渐变。

## 径向渐变

从一点开始发散称为径向渐变。

元素：

1. `<radialGradient>` ：声明径向渐变。

   属性：

   `cx` 、`cy` 、`r` ：渐变结束时的圆环。`cx` 、`cy` 是圆环的中心点，`r` 是圆环的半径。

   `fx` 、`fy` ：渐变的中心。

   其它略。

   

2. `<stop>` ：设置渐变单元。参数与线性渐变一致。

3. 
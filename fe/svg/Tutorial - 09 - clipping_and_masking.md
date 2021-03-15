# 裁剪和遮罩

## 裁剪

裁剪指移除元素的部分内容。`<clipPath>` 用来定义裁剪，应用裁剪的元素在渲染的时候，被裁剪遮住的部分才会渲染。

元素：`<clipPath>`

示例：定义一个矩形，并对矩形应用裁剪。

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="ex-clip">
      <rect x="10" y="100" width="50" height="200" />
    </clipPath>
  </defs>
  <rect x="10" y="10" width="50" height="200" clip-path="url(#ex-clip)" />
  <rect x="70" y="10" width="50" height="200"/>
</svg>
```

## 遮罩

遮罩指给元素蒙上一层幕布。`<mask>` 用来定义遮罩。

元素：`<mask>`

示例：定义一个矩形，并为它加一层遮罩

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <mask id="ex-mask">
      <rect x="10" y="100" width="50" height="200" fill="red" />
    </mask >
  </defs>
  <rect x="10" y="10" width="50" height="200" fill="yellow" mask="url(#ex-mask)" />
  <rect x="70" y="10" width="50" height="200"/>
</svg>
```

注意：没有被遮罩的部分好像变为了白色，不知道为什么？


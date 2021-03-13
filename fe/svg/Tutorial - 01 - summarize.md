# 教程 - 概述

## 什么是 SVG 

SVG 与 HTML 一样是一种 XML 语言，用于绘制矢量图，与 HTML 一样，SVG 也提供了一些元素，同时支持使用 JavaScript 进行交互。

## 如何创建一个 SVG

SVG 以 `<svg></svg>` 元素开始和结尾的 `.svg` 文件，其他 `SVG`  元素都位于 `<svg></svg>` 元素内，如下：

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hello world</text>
</svg>
```

`<svg>` 中 `version` 、`baseProfile` 表示 `SVG` 的版本。`xmlns` 是`SVG` 绑定的命名空间。

`SVG` 的渲染规则是后来居上，即越后面的元素越可见。

## 如何在 HTML 文件中使用 SVG


# 文字

`SVG` 中有两种不同的文本模式，一种是写在图像中的文本，另一种是 `SVG` 字体。

## 文本

1. 元素：`<text>` 

   属性：

   `x` 、`y` ：在视口中的位置。

2. 元素：`<tspan>` 

   描述：作为 `<text>` 元素的子元素使用，用来表示一个文本段落。

   属性：

   `x`、`y`  ：设置 `<tspan>` 的绝对坐标，它会脱离默认的文本位置，可以是一个数列，如果是一个数列，则数列将一个一个应用到 `<tspan>` 元素内的每一个字符上。

   `dx` 、`dy` ：设置 `<tspan>` 的相对坐标，可以是一个数列，如果是一个数列，则数列将一个一个应用到 `<tspan>` 元素内的每一个字符上。

   `rotate` ：将所有字符旋转一个角度，可以是一个数列，如果是一个数列，则数列将一个一个应用到 `<tspan>` 元素内的每一个字符上。

3. 元素：`<tref>`

   描述：作为 `<text>` 元素的子元素使用，用来引用一个已经定义的文本。

   属性：

   `xlink:href` ：引用的文本。

4. 元素：`<textPath>`

   描述：作为 `<text>` 元素的子元素使用，引用一个路径，把字符对齐到路径，字符会绕着路径走。

   属性：

   `xlink:href` ：引用的路径。

示例：

```
<text id='ex_text'>引用的文本</text>
<path id="ex_path" d="M 20,20 C 40,40 80,40 100,20"/>
<text>
  文本内容
  <tspan>另一段内容</tspan>
  <tref xlink:href="#ex_text" />
  <textPath xlink:href="#my_path">
  绕着路径走
  </textPath>
 </text>
```


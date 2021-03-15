# 线条属性和填充属性

## 线条属性

线条属性是描述线条样式的属性

1. `stroke` ：设置对象线条的颜色。

2. `stroke-opacity` ：设置线条的透明度。

3. `stroke-width` ：设置线条的宽度。

4. `stroke-linecap` ：控制边框终点的形状。

   参数：

   `butt` ：直边结束线段。

   `square` ：直边结束线段，但是会稍微超出`实际路径`的范围，超出的大小由`stroke-width`控制。

   `round` ：圆角结束线段，圆角的半径由`stroke-width`控制。

5. `stroke-linejoin` ：两条线段之间用什么方式连接。

   `miter` ：默认值，在连接处形成尖角。

   `round` ：在连接处形成圆角。

   `bevel` ：在连接处形成尖角，但是尖角的尖端会被切掉。 

6. `stroke-dasharray` ：将线条变为虚线。

## 填充属性

填充属性是描述元素内样式的属性。

1. `fill` ：设置对象内部的颜色。
2. `fill-opacity` ：设置填充色的透明度。
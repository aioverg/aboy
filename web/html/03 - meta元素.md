####  `<meta>`元素

**说明**：`<meta>` 元素表示那些不能由其它HTML元相关元素 （`<base>`，` <link>`  , `<script>`，` <style>`， `<title>`） 表示的元数据信息，通常位于 `<head>` 标签内。

**参数**

1. `charset`：当前文档使用的字符编码，可以被任何一个元素的 `lang` 属性覆盖，推荐使用 `utf-8`

2. `content`：包含 `http-equiv` 或 `name` 属性的值。

3. `http-equiv`：这个属性已经过期，不要使用。

4. `name`：定义文档级元数据的名称。与 `content` 属性包含的值相关联，参数如下：

   - `application-name`：定义正运行在该网页上的网络应用名称；

   - `author`：这个文档的作者的名称。

     `<meta name="author" content="aioverg" />`

   - `description`：页面内容的简短描述。 一些浏览器，会将其用作为书签页面的默认描述。

   - `generator`：包含生成页面的软件的标识符。

   - `keywords`：定义文档关键字，用逗号分隔的与页面内容相关的单词。

     `<meta name="keywords" content="HTML, CSS, meta" />`

   - `viewport`：提供有关视口初始大小的提示，仅供移动设备使用。值为：
   
     `<meta name="viewport" content="key=value, key=value" />`
   
     | key             | value                 | 描述                                                         |
     | --------------- | --------------------- | ------------------------------------------------------------ |
     | `width`         | 正整数、device-width  | 以 `px` 为单位， 定义视口的宽度                              |
     | `height`        | 正整数、device-height | 以 `px` 为单位， 定义视口的高度                              |
     | `initial-scale` | 0.0 ~ 10.0之间的数    | 定义设备宽度与视口大小之间的缩放比率                         |
     | `maximum-scale` | 0.0 ~ 10.0之间的数    | 定义缩放的最大值；必须大于或等于`minimum-scale`的值，不然会导致不确定的行为发生。 |
     | `minimum-scale` | 0.0 ~ 10.0之间的数    | 定义缩放的最小值；它必须小于或等于`maximum-scale`的值，不然会导致不确定的行为发生。 |
     | `user-scalable` | yes、no               | 如果设置为` no`，用户将不能放大或缩小网页。默认值为` yes`。  |

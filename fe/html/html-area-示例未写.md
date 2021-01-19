# HTML `<area>` 标签

##### 标签：`<area>`

**说明：**定义图像映射的内部区域（图像映射指的是带有可点击区域的图像）。

`<area>` 与 `<map>` 标签 和 `<img>` 标签配合使用，`<area>` 放在 `<map>` 内部用于描述图像可点击的区域，`<map>`  与 `<img>` 关联，定义映射图像。

**属性：**

| 属性       | 值                                                           | 说明                                                         |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `alt`      |                                                              | 定义区域的替代文本。                                         |
| `coords`   |                                                              | 定义区域的坐标                                               |
| `href`     |                                                              | 定义区域的目标 URL                                           |
| `hreflang` |                                                              | 定义目标 URL  的语言                                         |
| `media`    |                                                              | 定义目标 URL 的媒体类型                                      |
| `rel`      | `alternate`<br />`author`<br />`bookmark`<br />`help`<br />`license`<br />`next`<br />`nofollow`<br />`noreferrer`<br />`prefetch`<br />`prev`<br />`search`<br />`tag` | 指定当前文档与目标 URL 之间的关系                            |
| `shape`    | `default`<br/>`rect`<br/>`circle`<br/>`poly`                 | 定义区域的形状                                               |
| `target`   | `_blank`<br />`_parent`<br />`_self`<br />`_top`<br />       | 指定在何处打开目标 URL，仅在 `href` 属性存在时使用。<br />`_blank`：在新窗口打开。<br />`_parent`：在父窗口中打开。<br />`_self`：默认，在当前页面打开。<br />`_top`：在当前窗口打开，并替换当前窗口。 |
| `type`     |                                                              | 规定目标 URL 的 MIME 类型。                                  |

**示例：**

1. 在图片中划定区域，点击不同的区域跳转到不同的页面。

   ```
   <img src></img>
   ```

   

2. 


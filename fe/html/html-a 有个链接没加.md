# HTML `<a>` 标签

标签：`<a>`

说明：定义超链接，用于从一个页面链接到另一个页面，和下载指定资源。

属性：

| 属性       | 值                                                           | 说明                                                         |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `download` |                                                              | 指定下载目标，并设置下载文件的名字                           |
| `href`     |                                                              | 指定链接目标                                                 |
| `hreflang` |                                                              | 规定目标 URL 的基准语言，仅在 `href` 属性存在时使用          |
| `media`    |                                                              | 规定目标 URL 的媒介类型，仅在 `href` 属性存在时使用          |
| `rel`      | `alternate`<br />`author`<br />`bookmark`<br />`help`<br />`license`<br />`next`<br />`nofollow`<br />`noreferrer`<br />`prefetch`<br />`prev`<br />`search`<br />`tag` | 指定当前文档与目标 URL 之间的关系，仅在 `href` 属性存在时使用 |
| `target`   | `_blank`<br />`_parent`<br />`_self`<br />`_top`<br />       | 指定在何处打开目标 URL，仅在 `href` 属性存在时使用。<br />`_blank`：在新窗口打开。<br />`_parent`：在父窗口中打开。<br />`_self`：默认，在当前页面打开。<br />`_top`：在当前窗口打开，并替换当前窗口。 |
| `type`     |                                                              | 规定目标 URL 的 MIME 类型。                                  |

示例：

1. 使用 `href` 属性链接目标，一般情况下，能够在浏览器中打开的文件，会直接在浏览器中打开，不能在浏览器中打开的文件会执行下载，如在浏览器新窗口中打开 `ex.html` 文件。

   <a download="file-name.html" href="./static/ex.html" target="_blank">打开文件</a>
   
   ```
   <a href="./static/ex.html" target="_blank">打开文件</a>
   ```
   
2. 使用 `download` 属性，此时浏览器不会打开 `ex.html` 文件，而是下载它，并命名为 `file-name.html`，（注意此属性只适用于同源URL，否则不生效）**链接到同源策略**。

   <a download="file-name.html" href="./static/ex.html">下载文件</a>

   ```
   <a download="file-name.html" href="./static/ex.html">下载文件</a>
   ```

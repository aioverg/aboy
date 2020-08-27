#### DOM

##### 什么是 DOM ?

`DOM` (文档对象模型)是 `xml` 和 `HTML` 文档的编程接口，提供了对文档的结构化的表述（即将文档解析为由节点和对象组成的结构集合），并且提供了对结构化文档的访问方式，通过这种方式进而改变文档的结构，样式和内容。  

一个 `web` 页面是一个文档。这个文档可以在浏览器窗口或作为源码显示出来，但这两种情况中它们还是同一份文档。`DOM` 提供了对文档的存储和操作方式，使文档能够使用 `JavaScript` 等脚本语言进行修改。

##### 如何访问 DOM ？

通过 `document` 或 `window.document` 可以访问到文档的 `DOM` 树。

##### `document` 与 `window` 的区别

- `window` 对象表示浏览器中的窗体，`document` 指浏览器窗体中的文档，`document` 是 `window` 的一个子对象。
- 不能改变 `document.location` ，因为这是当前显示的文档的位置；但可以改变 `window.location` ，当改变 `window.location` 时表示在当前窗口重新载入一个文档（会替换掉当前的文档）。

##### 如何修改 DOM ？

通过 `DOM` 提供的 `API` 接口可以对 `DOM` 进行修改。如使用 `document.createElement()` 创建节点等。
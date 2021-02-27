1. 使用 `Typora软件` 打开 `.md` 文档，将文档导出为 `HTML（widthout styles）` 的 `.html` 文档。

2. 打开 `.html` 文档，将文档的 `<head></head>` 替换为如下：

   ```html
   <head>
   	<title>文章 HTML 文件生成方法</title>
   	<meta name="description" content="文章 HTML 文件生成方法|说明">
   	<meta charset='UTF-8'>
   	<meta name='viewport' content='width=device-width initial-scale=1'>
   	<meta http-equiv="Content-Language" content="zh-cn">
   	<meta name="author" content="aioverg">
   	<link rel="stylesheet" type="text/css" href="../../static/css/article.css" />
   	<script src="../../static/js/footer.js"></script>
   </head>
   ```

   新的 `<head></head>` 包含了 `SEO` 优化，和需要的 `css` 、`javascript` 文件，注意 `css` 、`javascript` 文件的都放在根目录的 `/static` 文件夹中，要根据文件所在的路径，进行修改。

3. 在文档中添加 `<header></header>` 元素，作为文档的头部内容，元素内容如下：

   ```html
   <header id="header">
       <div class="title">文章的标题</div>
       <nav class="nav">
           <a href="/index.html" class="nav-index">首页，导航</a>
           <a href="./html/index.html">其他导航</a>
       </nav>
   </header>
   ```

4. 在文档中添加 `<main></main>` 元素，在 `<main></main>` 元素中添加 `<article></article>` 元素，将 `.html` 文档的 `<body></body>` 中的内容剪切到 `<article></article>` 中。

   `.html` 文档的 `<body></body>`  元素中的内容就是 `.md` 文档的内容。

   若想在 `.html` 文档中添加其它内容，可以在  `<main></main>` 中添加 `<section></section>` 元素，在  `<section></section>` 元素中添加非 `.md` 文档的内容，这样便于维护。

   元素内容如下：

   ```html
   <main id="main">
   	<article id="article">.md文档内容</article>
       <section>其他内容</section>
   </main>
   ```

5. 紧接着  `<main></main>` 元素，添加 `<footer></footer>` 元素， `<footer></footer>` 是文档的底部元素。元素内容如下：

   ```html
   <footer id="footer">这里的内容是由footer.js文件生成的</footer>
   ```

##### 完成 `.html` 文档如下：

（ 文件 `文章 HTML 文件生成方法.html` 是由这个文档生成的 `.html` 文件 ）

```html
<!doctype html>
<html>

<head>
	<title>证券-开始</title>
	<meta name="description" content="证券-开始|荆棘之旅">
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width initial-scale=1'>
	<meta http-equiv="Content-Language" content="zh-cn">
	<meta name="author" content="aioverg">
	<link rel="stylesheet" type="text/css" href="../../static/css/article.css" />
	<script src="../../static/js/footer.js"></script>
</head>

<body>
	<header id="header">
		<div class="title">开始</div>
		<nav class="nav">
			<a href="/index.html" class="nav-index">首页，导航</a>
            <a href="./html/index.html">其他导航</a>
		</nav>
	</header>
	<main id="main">
		<article id="article">.md文档内容</article>
        <section>其他内容</section>
	</main>
	<footer id="footer">这里的内容是由footer.js文件生成的</footer>
</body>

</html>
```


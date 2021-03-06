# SEO 概述

## 什么是 SEO

SEO 是英文 Search Engine Optimization 的缩写，中文译为 搜索引擎优化 ，指在了解搜索引擎自然排名机制的基础上，对网站进行调整优化，改进网站在搜索引擎中的关键词的自然排名，获得更多流量的技术。

网站的优化包括站内和站外，内战优化始值对网站本身进行调整，如网站结构、HTML 代码 等；站外优化指外部连接建设即行业社群的参与互动等，这些不是在网站本身进行的操作。

# 搜索引擎工作过程

### 第一步 爬行和抓取

搜索引擎蜘蛛通过跟踪链接发现和访问网页，读取页面 HTML 代码，存入数据库。

蜘蛛在访问任何一个网站时，会先访问网站根目录下的 `robots.txt` 文件，如果 `robots.txt` 文件禁止搜索引擎爬行和抓取某些文件或目录，蜘蛛将不抓取被禁止的网站。

搜索引擎蜘蛛有表明身份的代理名称，站长可以在日志文件中看到搜索引擎的特定用户代理，从而来识别搜索引擎蜘蛛，如：

- Baiduspider+ 百度蜘蛛
- Mozilla/5.0 Firefox/1.5.0.11；360Spider 360蜘蛛
- Mozilla/5.0 Google蜘蛛

为了抓取尽量多的页面，搜索蜘蛛会跟踪页面上的链接，从一个页面爬到下一个页面，这也是搜索引擎蜘蛛名称的由来。简单的爬行策略分为两种，一种是深度优先，即蜘蛛沿着发现的链接一直向前爬行，直到没有其他链接后返回第一个页面，沿着另一个链接再一直往前爬行。另一种是广度优先，指蜘蛛在一个页面上发现多个链接时，先把所有第一层爬取一遍，然后再沿着第二次页面上发现的链接爬向第三层。这两种策略通常是混合使用的，理论上任何一个策论都能爬完整个互联网，但实际上不会这么做，所以做 SEO 的目的就是尽可能设法吸引蜘蛛来抓取页面。

### 第二步 预处理

搜索程序对抓取来的页面数据进行文字提取、中文分词、索引、倒排索引等处理，以备排名程序调用。

### 第三步 排名

用户输入查询词后，排名程序调用索引库数据，计算相关性，然后按一定格式生成索引结果页面。

影响相关性的主要因素包括一下几个方面：

- 关键词常用程度。页面中经过分词后的多个关键词，对整个搜索字符串的贡献意义并不相同，越常用的词对搜索词的贡献越小，越不常用的词对搜索词的贡献越大。例如，搜索词是 ”红色aioverg“，“红色”这个词的常用程度非常高，对“红色aioverg”这个词的辨识度和意义相关度贡献就很小，这时包含“红色”这个词的页面对搜索排名相关性几乎没影响，而“aioverg”这个词的常用程度就比较低，对“红色aioverg”这个搜索词的贡献要大的多，所以包含“aioverg”这个词的页面，与“红色aioverg”这个搜索词会更为相关。
- 词频及密度。在没有关键词的情况下，搜索词在页面中出现的次数越多密度越高，说明页面与搜索词越相关，不过这个因素对排名的影响很小。
- 关键词的位置即形式。关键词出现在比较重要的位置，如标题标签、黑体、H1标签等，说明页面与关键词越相关。
- 关键词距离。切分后的关键词越与搜索词相匹配，相关度越高。比如：搜索 “红色星球”，被切分为“红色”和“星球”，当关键词中“红色“和”星球”两个词距离越近与搜索词越相关。
- 链接分析及页面权重。页面之间的链接和权重关系，页面有越多以搜索词为锚文字的导入链接，页面的相关性也强。

搜索引擎会把一些常见的搜索词的结果排名缓存起来，而不是每次搜索都进行页面排名操作，并重新生成排名。


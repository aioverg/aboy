# 样式

## 使用 `SVG` 的属性设置样式

可以在 `SVG` 元素中使用属性设置元素的样式，如：

```
<path d="M100 100 L 400 400" stroke=”black" /> 
```

## 使用 CSS 设置属性

`SVG` 元素的属性有些是可以使用 `CSS` 来设置的，`SVG` 规范将属性分为properties 和其他 attributes，其中 properties 可以使用 `CSS` 来设置。

使用 `CSS` 设置属性方法：

1. 使用 `style` 属性直接插入到元素中，如：

   ```
   <path d="M100 100 L 400 400" style="stroke: black" /> 
   ```

2. 使用 `<defs>` 和 `<style>` 元素设置属性，如：

   ```
   <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
     <defs>
       <style type="text/css"><![CDATA[
          #app {
            stroke: black;
          }
       ]]></style>
     </defs>
     <path d="M100 100 L 400 400" id="app" /> 
   </svg>
   ```

3. 使用外部样式表，如：

   ```
   <?xml version="1.0" standalone="no"?>
   <?xml-stylesheet type="text/css" href="style.css"?>
   
   <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
     <path d="M100 100 L 400 400" id="app" /> 
   </svg>
   ```

   


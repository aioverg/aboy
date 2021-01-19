#### 在HTML中引入SVG的几种方法

1. 作为图片使用

   ```html
   <img src = 'name.svg' />
   ```

2. 作为CSS背景图片

   ```css
   background: url(name.svg)
   ```

3. 作为一个嵌入对象<object>标签

   ```html
   <object type='image/svg+xml' data='name.svg'>
       <!-- 浏览器不支持时的备选内容-->
   </object>
   ```

4. 使用 `<iframe>` 标签

   ```html
   <iframe src='name.svg'>
       <!--浏览器不支持时的备选内容-->
   </iframe>
   ```

5. 使用 `<embed>` 标签

   ```html
   <embed type='image/svg+xml' src='name.svg' />
   ```

6. 使用内联 `<svg>` 标签

   ```html
   <svg><!--svg内容--></svg>
   ```

   
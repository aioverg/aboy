#### API

##### CSS功能扩展

1. 嵌套，内层样式将它外层的选择器作为父选择器，如：

   ```scss
   #parent {
       color: blue;
       
       .child {
           color: yellow;
       }
   }
   //等价于
   #parent {color: blue;}
   #parent .child {color: yellow}
   ```

2. `&` 代指父选择器，如果父选择器是多层的，则一层一层传递下去，如：

   ```scss
   #parent-one {
       color: blue;
       #parent-two {
           color: yellow;
           &:hover {
               color: red;
           }
       }
   }
   //等价于
   #parent-one {color: blue;}
   #parent-two #parent-two {color: yellow}
   #parent-two #parent-two:hover {color: red}
   ```

3. `%` 占位符选择器，通过 `@extend` 指令调用。

4. `/**/` 多行注释， `//` 单行注释。

5. `$` 变量，变量支持局部作用域，但 `!golbal` 可以将局部变量转换为全局变量，如：

   ```scss
   $size: 12px, //定义变量
   #one {
       $color: blue !global; //定义局部变量，但使用 !global 将其变为全局变量
       font-size: $size; //使用变量
       color: $color;
   }
   ```

   `!default` 可以给未赋值的变量赋值，若变量已赋值则不重新赋值，如：

   ```scss
   $name: "hello";
   $name: "world" !default; //当变量已赋值，不会重新赋值
   p:before {
       content: $name
   }
   //等价于
   p:before {
       content: "hello"
   }
   
   
   $name: null;
   $name: "world" !default; //当变量未赋值，则从新赋值
   p:before {
       content: $name
   }
   //等价于
   p:before {
       content: "world"
   }
   
   
   $name: "hello";
   $name: "world"; //一般再次赋值一个变量会覆盖掉原变量。
   p:before {
       content: $name;
   }
   //等价于
   p:before {
       content: "world"
   }
   ```

   

##### 运算

- 四则运算 `+` 、 `-` 、 `*` 、 `/`，如：

  ```scss
  a {
      width: 12px + 12px
  }
  ```

- 插值语句 `#{}` ，在选择器、属性名、属性值可以使用变量，如：

  ```scss
  //在属性值中使用
  $one: 'one';
  $two: 'size';
  $thr: 40px;
  .a-#{$one} {
      font-#{$two}: $thr;
  }
  
  //等价于
  .a-one {
      font-size: 40px;
  }
  ```

- 布尔运算，`and` 、 `or` 、 `and`

- 函数

##### 指令 

- `@import` ：Sass 扩展了 `@import` 的功能，可以导入 SCSS 或 SASS 文件，被导入的文件将合并编译到一个 CSS 文件中。

- `@extend` ：继承，多重继承可以用 `,` 分隔，或再写 `@extend` 都可以，注意不能继承选择器列，即 `p p p` 这样的选择器类不能继承，例如：

  ```scss
  .one {
      color: blue;
  }
  .two {
      color: yellow;
  }
  .thr {
      @extend .two;
      @extend .one; //从.one 中继承的属性优先级高于从 .two 中继承的
      font-size: 40px;
  }
  //.thr 等于
  .thr {
      color: blue;
      font-size: 40px;
  }
  //注意，后面继承的将覆盖前面前面继承的
  ```

- `%` 占位符选择器，例如：

  ```scss
  #one %exname { //定义占位符选择器
      color: blue;
      font-size: 40px;
  }
  
  .two {//使用占位符选择器
      @extend %exname
  }
  //等价于
  #one .two {
      color: blue;
      font-size: 40px;
  }
  ```

- `@at-root` 跳出嵌套到达根部，即：

  ```scss
  .a {
      color: red;
      .b {
          color: yellow;
          .c {
              color: green;
          }
          @at-root .c {
              color: blue;
          }
      }
  }
  //等价于
  .a {
      color: red;
      .b {
          color: yellow;
          .c {
              color: green;
          }
      }
  }
  .c {
      color: blue;
  }
  ```

  

- `@at-root (without: ...) and @at-root (with: ...)`

##### 控制指令

- `if()`：判断，例如：

  ```scss
  .ex {
      color: if(1+1==2, green, blue)
  }
  ```

- `@if` ：判断，当有多个条件成立时，取合集，但后面的优先级高于前面的，例如：

  ```sass
  .ex {
      @if null {color: blue; font-size: 20px}
      @if 1+1 == 2 {color: green; font-size: 40px}
  }
  ```

- `@for $var from startNum to/through endNum`：在限制的范围内重复输出，`startNum` 与 `endNum` 分别是起始值和结束值，且必须未整数，`$var` 是 `startNum-endNum` 之间的值，`to/through`二选一，`to` 表示不包括结束值 ，`through` 表示包括结束值，例如：

  ```scss
  @for $i from 1 to 3 {
      .item-#{$i} {
          width: 2px * $i
      }
  }
  //等价于
  .item-1 {width: 2px}
  .item-2 {width: 4px}
  ```

- `@each $var in List`：遍历列表中的值，例如：

  ```scss
  @each $i in [1,2] {
      .item-#{$i} {
          width: 2px * $i
      }
  }
  //等价于
  .item-1 {width: 2px}
  .item-2 {width: 4px}
  ```

- `@while` 重复输出，知道表达式返回 `false` ，例如：

  ```scss
  $i: 1;
  @while $i < 3 {
      .item-#{$i} {
          width: 2px * $i
      }
      $i: $i + 1
  }
  //等价于
  .item-1 {width: 2px}
  .item-2 {width: 4px}
  ```

##### 混合指令

- `@mixin` 定义混合指令。例如：

  ```scss
  @mixin ex($color:blue, $size:20px) {//定义一个名为 ex 的混合指令,并定义参数
      color: $color;
      font-size: $size;
  }
  ```

- `@include` 引用混合指令，例如：

  ```scss
  .ex {
      @include ex(green, 40px); //使用 ex 混合指令,并传入参数
      color: blue;
  }
  ```

##### 函数指定

- `@functin`定义函数指令，例如：

  ```scss
  @funtion ex($color: blue) { //定义函数指令
      @return $color
  }
  
  .ex {
      color: ex(green)
  }
  ```

- 
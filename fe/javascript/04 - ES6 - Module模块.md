#### Module模块

##### 创建模块

1. 概念：一个 `JavaScript` 模块就是一个独立的 `JavaScript` 文件，模块自动采用严格模式。

2. `export` 命令：用于输出模块中的变量，例如：

   ```javascript
   //example.js文件
   export var one = "hello"  //输出变量one
   var two = "world"
   export function f(){}     //输出函数f
   function g(){}
   export {two, g as gRename}  //必须要有大括号，输出变量two和函数g
   //example.js模块，输出变量 one、two、函数f()、g()，且g()改名为gRename。
   ```

##### 导入模块

1. `import` 命令：导入模块，例如：

   ```javascript
   //选择导入example.js模块
   import {one, two as b, f, gRename} from './example.js'
   
   //导入整个example.js模块
   import * from './example.js'
   ```

2. `export default` 命令：模块使用 `export` 命令的时候，导入模块时需要知道模块导出时变量的名字，使用 `export default` 导出模块变量时，导入模块时不需要知道模块导出时变量的名字。例如：

   ```javascript
   //创建example.js模块
   export default function f(){console.log("hello")}
   //或者创建example.js模块
   function f(){console.log("hello")}
   export default f
   
   //导入example.js模块
   import na from './example.js'
   //导入f()并重新命名为na
   ```

   注意：一个模块只能有一个 `export default` 命令，`export default`、`export` 混合使用：

   ```javascript
   //创建example.js模块
   function f(){}
   function g(){}
   export default f
   export {g}
   
   //引入example.js模块
   import f, {g} from './example.js'
   //模块默认输出不用加大括号，非默认输出必须加大括号。
   ```


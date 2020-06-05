#### ES6 Iterator遍历器

**概念：**Iterator遍历器是一个接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署了Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

**工作流程：**



1. 创建一个指针对象，指向当前数据结构的起始位置。

2. 第一次调用指针对象的`next`方法，将指针指向数据结构的第一个成员，并返回第一个成员的信息，是一个包含`value`和`done`属性的对象，`value`是成员的值，`done`是一个布尔值，表示遍历是否结束。

3. 第二次调用指针对象的`next`方法，将指针指向数据结构的第二个成员，并返回第二个成员的信息。

4. 不断调用指针对象的`next`方法，知道指向数据结构的结束位置。

5. 例如：

   ```javascript
   //一个遍历器函数
   function makeIterator(array) {
     var nextIndex = 0;
     return {
       next: function() {
         return nextIndex < array.length ?
           {value: array[nextIndex++], done: false} :
           {value: undefined, done: true};
       }
     }
   }
   var it = makeIterator(['a', 'b']);
   it.next() // {value: "a", done: false}
   ```

**`for...of`**：当使用`for...of`循环遍历某种对象时，该循环会自动去找 Iterator 接口。

**默认Iterator接口**：默认的Iterator接口部署在数据结构的`Symbol.iterator`属性上，只要有这个属性的数据结构就都是可遍历的，原生具备这个接口的数据结构有：Array、Map、Set、String、TypedArray、函数的 arguments对象、NodeList对象。


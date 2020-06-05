PromiseA+规范

一个健全的、可互操作的 JavaScript Promise 标准 —— 由开发者而定，为开发者而生。

*promise*代表异步操作的最终结果。Promise 开放的最原始接口是 `then` 方法，由该方法注册的回调函数来接受 Promise 成功状态（fulfilled）下返回的值或失败状态（rejected）下返回的错误信息。

本规范详细定义了 `then` 方法的行为，提供了 Promise 可互操作的基础，所有 Promises/A+ 兼容的 Promise 实现都可以参考该规范。因此，该规范是非常稳定的。 尽管 Promises/A+ 组织有时会为了向后兼容而对此规范做小的改动，但只有经过深思熟虑，充分讨论和测试之后，我们才会集成有较大改动的或向后兼容的版本更改。

Promises/A+ 阐明了早期 [Promises/A 草案](http://wiki.commonjs.org/wiki/Promises/A) 的行为条款，在此基础上扩展其涵盖 *de facto* 的所有行为，并且省略了未指定或有问题的部分。

最后，Promises/A+ 规范的核心不涉及如何创建，完成或拒绝 Promise，而是专注于提供不同实现的 Promise 可互操作的 `then` 方法。 当然，不排除未来的规范会涉及这些主题。

## 1. 术语

1. “promise” 是一个有 `then` 方法的对象或者函数，`then` 方法的所有行为都符合本规范。
2. “thenable” 是一个定义了 `then` 方法的对象或者函数。
3. “value” 是 JavaScript 任意数据类型的值（包括 `undefined` 、 `thenable` 或者 `promise`）
4. “exception” 是由 `throw` 抛出的异常。
5. “reason” 表示 Promise 失败的原因。

## 2. 标准

### 2.1 Promise 的状态

一个 Promise 的状态必须是 pending、 fulfilled 或者 rejected。

- 2.1.1 当 Promise 处于 pending 状态：
  - 2.1.1.1 Promise 可能会转变成 fulfilled 或者 rejected 中的一种。
- 2.1.2 当 Promise 处于 fulfilled 状态：
  - 2.1.2.1 Promise 状态必须保持不变。
  - 2.1.2.1 Promise 必须有一个 value，并且它的值不会改变。
- 2.1.3 当 Promise 处于 rejected 状态：
  - 2.1.3.1 Promise 状态必须保持不变。
  - 2.1.3.2 Promise 必须有一个 reason，并且它的值不会改变。

这里的不会改变指的是恒定不变(`===`)，但不意味着深拷贝不变。

Here, “must not change” means immutable identity (i.e. `===`), but does not imply deep immutability.

### 2.2 `then` 方法

Promise 必须提供一个 `then` 方法用于获取 Promise 当前或最终的 value 或 reason。

`then` 方法接收两个参数：

```javascript
promise.then(onFulfilled, onRejected)
```

- 2.2.1 `onFulfilled` 和 `onRejected` 都是可选参数：
  - 2.2.1.1 如果 `onFulfilled` 不是函数，必须忽略它。
  - 2.2.1.2 如果 `onRejected` 不是函数，必须忽略它。
- 2.2.2 如果 `onFulfilled` 是一个函数：
  - 2.2.2.1 它必须在 Promise 变成 fulfilled 状态后以 Promise 的 value 作为第一个参数被调用。
  - 2.2.2.2 它不能在 Promise 变成 fulfilled 状态以前调用。
  - 2.2.2.3 它只能被调用一次。
- 2.2.3 如果 `onRejected` 是一个函数：
  - 2.2.3.1 它必须在 Promise 变成 rejected 状态后以 Promise 的 reason 作为第一个参数被调用。
  - 2.2.3.2 它不能在 Promise 变成 rejected 状态以前调用。
  - 2.2.3.3 它只能被调用一次。
- 2.2.4 `onFulfilled` 或 `onRejected` 不能在执行栈(execution context) 仅包含平台代码之前调用。
- 2.2.5 `onFulfilled` 和 `onRejected` 必须以函数形式被调用（不能传递 this 指针）。
- 2.2.6 同一个 Promise 的 `then` 方法可能被多次调用。
  - 2.2.6.1 当且仅当 Promise 变成 fulfilled 后，各个 `onFullfilled` 回调必须按照原始的调用顺序被依次执行。
  - 2.2.6.2 当且仅当 Promise 变成 rejected 后，各个 `onRejected` 回调必须按照原始的调用顺序被依次执行。
- 2.2.7 `then` 方法必须返回一个新的 Promise。

```javascript
promise2 = promise1.then(onFulfilled, onRejected);
```

- 2.2.7.1 如果 `onFulfilled` 或 `onRejected` 返回一个值 `x`，则执行 Promise 解析过程 `[[Resolve]](promise2, x)`。
- 2.2.7.2 如果 `onFulfilled` 或 `onRejected` 抛出异常 `e`，则执行 Promise 解析过程 `[[Resolve]](promise2, e)`。
- 2.2.7.3 如果 `onFulfilled` 不是一个函数，`promise1` 处于 fulfilled 状态，则 `promise2` 必须变成 fulfilled 状态且 vale 和 `promise1` 相同。
- 2.2.7.4 如果 `onRejected` 不是一个函数，`promise1` 处于 rejected 状态，则 `promise2` 必须变成 rejected 状态且 reason 和 `promise1` 相同。

### 2.3 Promise 处理程序

Promise 处理程序是一个抽象过程，以一个 Promise 和 value 作为输入，表示为 `[[Resolve]](promise, x)`。如果 `x` 是一个 thenable 对象，则 `promise` 将直接采用 `x` 的状态，否则 `promise` 会试图变成 fulfilled 状态，且其 value 等于 `x`。

thenable 的处理程序允许不同 Promise 可以互相操作，只要它们提供一个兼容 Promises/A+ 的 `then` 方法。它还允许 Promises/A+ 实现使用合理的 `then` 方法“集成”不符合标准的实现。

`[[Resolve]](promise, x)` 按如下步骤执行：

- 2.3.1 如果 `promise` 和 `x` 是同一个对象，则 `promise` 变成 rejected，reason 是一个 `TypeError` 异常。
- 2.3.2 如果`x`是一个 Promise，则`promise`采用`x`的状态：
  - 如果 `x` 处于 pending 状态，则 `promise` 必须保持 pending 状态直到 `x` 的状态变成 fulfilled 或 rejected。
  - 当且仅当 `x` 变成 fulfilled， `promise` 也以相同的 value 变成 fullfiled 状态。
  - 当且仅当 `x` 变成 rejected，`promise` 也以相同的 reason 变成 rejected 状态。
- 2.3.3 如果`x`是一个对象或者一个函数：
  - 把 `x.then` 赋值给 `then`
  - 如果引用 `x.then` 属性时抛出异常 `e`，那么用 `e` 作为 `promise` 的 reason 将其变成 rejected 状态。
  - 如果 `then` 是一个函数，则以 `x` 作为 `this`， `resolvePromise` 作为第一个参数，`rejectePromise`作为第二参数调用它。
## redux

Action：一个对象，约定包含一个type用来表示将要执行的动作，如：{type: '', content: ''}

Action创建函数：他是一个返回Action的函数

**Reducers**：指定了应用状态的变化如何响应 [actions](https://www.redux.org.cn/docs/basics/Actions.html) 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

就可以开始编写 reducer，并让它来处理之前定义过的 [action](https://www.redux.org.cn/docs/basics/Actions.html)。
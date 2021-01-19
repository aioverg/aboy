#### Chrome 开发者工具

#### 源代码面板

##### 移动设备视口

- **用途**：使用设备模式构建完全响应式，移动优先的网络体验。

##### Elements 元素面板：

- **用途**：使用元素面板可以自由的操作 `DOM` 和 `CSS` 来迭代布局和设计页面。

##### Console 控制台面板

- **用途**：在开发期间，可以使用控制台面板记录诊断信息，或者使用它作为 `shell` 在页面上与 `JavaScript` 交互。

##### Sources 源代码面板

- **用途**：在源代码面板中设置断点来调试 JavaScript ，或者通过Workspaces（工作区）连接本地文件来使用开发者工具的实时编辑器。

- **面板介绍**

  **功能按钮**

  - **Pause/Resume script execution**：暂停/恢复脚本执行。
  - **Step over next function call**：跳过下一个函数上下文。即不遇到函数时，执行下一步；遇到函数时，不进入函数直接执行下一步。
  - **Step into next function call**：跳进下一个函数上下文。即不遇到函数时，执行下一步；遇到函数时，进入函数上下文。
  - **Step out of current function**：跳出当前函数。
  - **Deactivate/Activate breakpoints**：停用/激活全部断点。
  - **Pause on exceptions/Don't pause on exceptions**：暂停捕获异常/不暂停捕获异常。

  **信息面板**

  - **Watch**：观测表达式。为目前断点添加表达式，使得每次断点往下走一步都会执行你的代码。
  - **Call Stack**：执行上下文栈。执行上下文栈是指一个存放各个执行上下文的栈(一种先进后出的数据结构)。
  - **Scope**：作用域链。每个执行上下文都有其作用域链，作用域链包含了当前执行上下文和上层执行上下文的变量对象。
  - **Breakpoints**：代码行断点。
  - **XHR Breakpoints**：XHR 断点。
  - **DOM Breakpoints**：DOM 断点。
  - **Global Listeners**：全局监听。
  - **Event Listener Breakpoints**：事件监听器断点。

##### Network 网络面板

- **用途**：使用网络面板了解请求和下载的资源文件并优化网页加载性能。

##### Performance 性能面板

- **用途**：使用时间轴面板可以通过记录和查看网站生命周期内发生的各种事件来提高页面的运行时性能。

##### Memory 内存面板

- **用途**：如果需要比时间轴面板提供的更多信息，可以使用“配置”面板，例如跟踪内存泄漏。

##### Application 应用面板

- **用途**：使用资源面板检查加载的所有资源，包括IndexedDB与Web SQL数据库，本地和会话存储，cookie，应用程序缓存，图像，字体和样式表。

##### Security 安全面板
